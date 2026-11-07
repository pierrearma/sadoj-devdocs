# sadoj-banks

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-banks`
* Redémarrage possible: `Non`

Ce script gère l'argent des joueurs en jeu :

- Le porte-monnaie (espèces)
- Les comptes bancaires des joueurs et des entreprises
- Les virements entre comptes
- Le terminal de paiement (TPE) : faire **payer** un joueur ou lui **verser** de l'argent
- Les distributeurs automatiques (DAB) : dépôt et retrait d'espèces

Les comptes bancaires ne sont pas stockés par le script : ils sont gérés par le site des banques (sadoj-banks web), qui est la seule source de vérité pour les soldes, les cartes, les frais et les taxes. Le script se contente de garder une copie des comptes en mémoire et d'envoyer les opérations au site.

Le porte-monnaie, lui, est géré par le script (colonne `money` de la table `users`).

> [!WARNING]
> De manière générale, codez vos opérations d'argent **côté serveur** quand c'est possible. Le terminal de paiement (`Payment` / `Payout`) est la seule exception : il est client car il ouvre une interface.

## Concepts

### Les banques

Chaque banque est identifiée par un slug, utilisé dans tous les exports qui prennent un `bankId`:

| Slug      | Banque       |
| --------- | ------------ |
| `pacific` | Pacific Bank |
| `fleeca`  | Fleeca Bank  |
| `lom`     | Lom Bank     |

Un joueur ou une entreprise peut avoir des comptes dans plusieurs banques.

### Les comptes

Les comptes sont regroupés par banque : `{ [bankId] = { compte, compte, ... } }`. Chaque compte est un tableau contenant les informations suivantes:

- `bank_id`: Slug de la banque (string)
- `number`: Numéro de compte / IBAN, ex: `PAC-700464` (string)
- `default`: Si c'est le compte par défaut du titulaire dans cette banque (boolean)
- `balance`: Solde du compte en dollars (integer) — **comptes joueurs uniquement**, les soldes des entreprises ne sont jamais envoyés au jeu
- `account_type`: Type de compte (string)
  - `current`: Compte courant
  - `savings`: Compte épargne
- `is_frozen`: Si le compte est gelé par la banque (boolean)

> [!NOTE]
> Le `balance` est une copie : il est mis à jour à la connexion et à chaque fois que le site notifie un changement. Pour savoir si un paiement passera, faites la transaction et lisez son résultat plutôt que de vérifier le solde vous-même (les frais et taxes s'ajoutent au montant).

### Les entreprises

Dans vos scripts, une entreprise est toujours désignée par son **identifiant en jeu**, celui de `sadoj-jobs` (ex: `ltd_grove`). Une entreprise peut en avoir plusieurs, renseignés sur le MDT (champ « identifiants en jeu » du registre des entreprises).

Côté banques, l'entreprise est identifiée par son n° du registre du MDT. Le script retrouve **automatiquement** ce n° à partir de l'identifiant en jeu : vous n'avez jamais à le manipuler.

Tous les exports serveur qui prennent un `id` acceptent l'identifiant d'un joueur ou un identifiant en jeu d'entreprise (insensible à la casse).

> [!WARNING]
> Si l'identifiant en jeu n'est pas renseigné sur la fiche de l'entreprise au MDT, ses comptes sont introuvables : les exports renvoient `nil`.

Les comptes des entreprises sont chargés au démarrage du script (nouvel essai chaque minute si le site ne répond pas), puis mis à jour en direct par le site.

### Les cartes bancaires

Une carte est un item `credit_card` de `sadoj-inventory`. Elle est créée par le site quand un banquier émet une carte, et déposée dans le coffre de la banque du compte, défini dans `Config.CardSafes` (`config/config.lua`) :

```lua
Config.CardSafes = {
    pacific = "PacificLS",
}
```

Si la banque du compte n'a pas de coffre dans `Config.CardSafes`, l'émission est refusée : le site affiche l'erreur et aucune carte n'est créée.

Ses métadonnées:

| Métadonnée         | Affichée | Contenu                                         |
| ------------------ | -------- | ----------------------------------------------- |
| `accountNumber`    | Non      | Numéro du compte lié à la carte                 |
| `Numéro de compte` | Oui      | Numéro du compte masqué, ex: `******0464`       |
| `Numéro de carte`  | Non      | Numéro de la carte (vérifié par le site)        |
| `Type`             | Non      | Type de carte                                   |
| `Expiration`       | Oui      | Date d'expiration                               |
| `CVV`              | Non      | CVV                                             |

Le code PIN n'est jamais stocké sur l'item : il est vérifié par le site.

### Les types de transaction

Un paiement peut être **typé** (location, vêtements, véhicule…). Le type est affiché dans l'historique des comptes sur le site, et le Gouvernement peut fixer pour chaque type une **surtaxe** qui s'ajoute au taux de taxe d'État global.

Par exemple, avec une taxe globale de 5 % et une surtaxe de 10 % sur `rental` :

| Paiement                  | Taxe appliquée |
| ------------------------- | -------------- |
| Sans type                 | 5 %            |
| `options.type = "rental"` | 15 %           |

Chaque type est désigné par un **code** :

| Code          | Type         |
| ------------- | ------------ |
| `rental`      | Location     |
| `clothing`    | Vêtements    |
| `vehicle`     | Véhicules    |
| `food`        | Alimentation |
| `fuel`        | Carburant    |
| `garage`      | Garage       |
| `hairdresser` | Coiffeur     |
| `tattoo`      | Tatouages    |

La liste n'est pas figée dans le script : les types sont créés sur le site (Administration générale → Types de transaction) et leurs surtaxes sont fixées par le Gouvernement (Paramètres fiscaux). Les codes ci-dessus sont ceux créés à l'installation. Pour la liste à jour, utilisez [`GetTransactionTypes`](#gettransactiontypes) ou la commande console `banks:types`.

- Le code est insensible à la casse (`"Clothing"` = `"clothing"`).
- Un code inconnu ou désactivé **ne bloque pas** le paiement : il passe sans type, au taux global, et un avertissement s'affiche dans la console serveur.
- Les paiements en espèces ne sont pas concernés (aucune taxe).
- Les paiements vers le Trésor public restent exonérés de taxe.

> [!TIP]
> Le code d'un type ne change plus une fois qu'il a servi : vous pouvez l'écrire en dur dans vos scripts.

### Répartition d'un paiement entre plusieurs comptes

Un paiement peut être versé à **plusieurs destinataires** à la fois, par carte (plusieurs comptes) comme en espèces (plusieurs coffres). Par exemple, la vente d'un véhicule : une part pour l'entreprise, le reste pour le fournisseur PNJ.

Au lieu d'un seul destinataire, passez une liste de parts :

| Moyen de paiement | Paramètre | Clé du destinataire |
| ----------------- | --------- | ------------------- |
| Carte | `accountCredit` de [`Transaction`](#transaction), `accountNumberForTransaction` du [terminal](#options-du-terminal) | `account` : numéro de compte |
| Espèces | `safeNameForMoney` du [terminal](#options-du-terminal), `safes` de [`TransferWalletToSafe`](#transferwallettosafe) | `safe` : nom du coffre |

```lua
-- Carte
{
    { account = "PAC-700464",    percent = 60 },   -- 60 % du montant
    { account = "PNJ-SA-000002", amount = 5000 },  -- montant fixe : $5,000
    { account = "PNJ-SA-000001" },                 -- ni percent ni amount : reçoit le reste
}

-- Espèces
{
    { safe = "pdm",           percent = 60 },
    { safe = "pnj_vehicules" },                    -- reçoit le reste
}
```

Chaque part contient :

- `account` (carte) ou `safe` (espèces) : Destinataire de la part (string).
- `percent`: (optionnel) Pourcentage du montant, entre 0 et 100, décimales permises (number).
- `amount`: (optionnel) Montant fixe, entier strictement positif (integer).

Une part sans `percent` ni `amount` reçoit **le reste**. Une seule part peut être dans ce cas.

Règles (identiques pour la carte et les espèces) :

- 10 parts au maximum.
- Sans part « reste », les pourcentages et montants fixes doivent couvrir **exactement** le montant (100 %). Avec une part « reste », ils ne doivent pas le dépasser.
- Pas de centimes : les dollars perdus à l'arrondi des pourcentages sont redistribués, la somme des parts vaut toujours le montant payé. Une part qui tombe à $0 est ignorée.
- Un même destinataire cité deux fois reçoit la somme de ses parts.
- Uniquement pour un **paiement** (`Payment`, ou `Transaction` en `direction = "debit"`). Un versement (`Payout`, `direction = "credit"`) part toujours d'un seul compte ou d'un seul coffre.
- Une liste mal écrite (clé manquante, `percent` et `amount` ensemble…) provoque une erreur de script. Une répartition qui ne couvre pas le montant est refusée avant tout débit, avec un message affiché dans le terminal.

**Par carte**, les **frais bancaires** et la **taxe d'État** sont calculés sur le **montant total**, exactement comme pour un paiement à un seul compte : répartir ne coûte rien de plus au joueur. Seule la part versée au Trésor public est exonérée de taxe, comme d'habitude. Sur le site, une transaction est inscrite **par compte qui reçoit une part**, toutes avec le même motif et le même type, plus une seule ligne de taxe d'État. Le joueur voit donc une ligne par compte dans son historique.

**En espèces**, le porte-monnaie est débité une seule fois, puis chaque coffre reçoit sa part (une ligne par coffre dans les logs). Si un coffre refuse (coffre inexistant, inventaire arrêté…), les parts déjà déposées sont reprises et le joueur est remboursé : le paiement échoue en entier, jamais à moitié.

> [!TIP]
> Pour la part des PNJ, utilisez un compte PNJ (`PNJ-SA-…`), créé sur le site depuis Administration générale → Comptes PNJ, et un coffre dédié pour les espèces.

## Utilisation

### Porte-monnaie

#### GetWalletAmount
<!-- tabs:start -->
#### **Export (client)**
```lua
local amount --[[ integer ]] = exports["sadoj-banks"]:GetWalletAmount()
```
* **Retour:**
  * **amount:** Espèces du joueur local.

#### **Export (serveur)**
```lua
local amount --[[ integer|nil ]] = exports["sadoj-banks"]:GetWalletAmount(player --[[ integer ]])
```
* **Paramètres:**
  * **player:** Server ID du joueur.
* **Retour:**
  * **amount:** Espèces du joueur, `nil` si son porte-monnaie n'est pas encore chargé (personnage pas encore apparu).
<!-- tabs:end -->

#### AddWalletMoney
<!-- tabs:start -->
#### **Export (client)**
```lua
local success --[[ boolean ]] = exports["sadoj-banks"]:AddWalletMoney(amount --[[ integer ]])
```
* **Paramètres:**
  * **amount:** Montant à ajouter, entier strictement positif.
* **Retour:**
  * **success:** `true` si l'argent a été ajouté.

#### **Export (serveur)**
```lua
local success --[[ boolean ]] = exports["sadoj-banks"]:AddWalletMoney(player --[[ integer ]], amount --[[ integer ]])
```
* **Paramètres:**
  * **player:** Server ID du joueur.
  * **amount:** Montant à ajouter, entier strictement positif.
* **Retour:**
  * **success:** `true` si l'argent a été ajouté.
<!-- tabs:end -->

#### RemoveWalletMoney
<!-- tabs:start -->
#### **Export (client)**
```lua
local success --[[ boolean ]] = exports["sadoj-banks"]:RemoveWalletMoney(amount --[[ integer ]])
```
* **Paramètres:**
  * **amount:** Montant à retirer, entier strictement positif.
* **Retour:**
  * **success:** `true` si l'argent a été retiré, `false` si le joueur n'a pas assez d'espèces.

#### **Export (serveur)**
```lua
local success --[[ boolean ]] = exports["sadoj-banks"]:RemoveWalletMoney(player --[[ integer ]], amount --[[ integer ]])
```
* **Paramètres:**
  * **player:** Server ID du joueur.
  * **amount:** Montant à retirer, entier strictement positif.
* **Retour:**
  * **success:** `true` si l'argent a été retiré, `false` si le joueur n'a pas assez d'espèces.
<!-- tabs:end -->

> [!NOTE]
> Les montants doivent être des **entiers** (`math.type(n) == "integer"`) : `100` passe, `100.0` ou `99.5` provoquent une erreur. Pensez à `math.floor()` si votre montant vient d'un calcul.

Chaque ajout et retrait est enregistré dans les logs `[banks]/[wallet]/wallet.csv` (`sadoj-logs`).

#### TransferWalletToSafe
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local success --[[ boolean ]], errorMessage --[[ string|nil ]] = exports["sadoj-banks"]:TransferWalletToSafe(player --[[ integer ]], safes --[[ string|table ]], amount --[[ integer ]][, reason --[[ string ]]])
```
* **Paramètres:**
  * **player:** Server ID du joueur qui paie.
  * **safes:** Nom du coffre qui reçoit les espèces, ou une liste de parts `{ safe = ..., percent | amount }` pour [répartir entre plusieurs coffres](#répartition-dun-paiement-entre-plusieurs-comptes).
  * **amount:** Montant, entier strictement positif.
  * **reason:** (optionnel) Motif, inscrit dans les logs des coffres.
* **Retour:**
  * **success:** `true` si les espèces ont été déplacées.
  * **errorMessage:** En cas d'échec, le message à afficher au joueur (espèces insuffisantes, coffre inexistant, répartition invalide…).
<!-- tabs:end -->

C'est ce qu'utilise le terminal pour un paiement en espèces : à utiliser quand votre script fait payer en espèces sans ouvrir le terminal. Tout ou rien : en cas d'échec, le joueur garde ses espèces.

### Comptes bancaires

#### GetAccounts
<!-- tabs:start -->
#### **Export (client)**
```lua
local accounts --[[ table|nil ]] = exports["sadoj-banks"]:GetAccounts([bankId --[[ string ]]])
```
* **Paramètres:**
  * **bankId:** (optionnel) Slug de la banque. Si absent, renvoie les comptes de toutes les banques.
* **Retour:**
  * **accounts:** Comptes du joueur local : liste de comptes si `bankId` est donné, sinon `{ [bankId] = { ... } }`. `nil` si le joueur n'a aucun compte dans cette banque.

#### **Export (serveur)**
```lua
local accounts --[[ table|nil ]] = exports["sadoj-banks"]:GetAccounts(id --[[ string ]][, bankId --[[ string ]]])
```
* **Paramètres:**
  * **id:** Identifiant du joueur ou identifiant en jeu de l'entreprise.
  * **bankId:** (optionnel) Slug de la banque. Si absent, renvoie les comptes de toutes les banques.
* **Retour:**
  * **accounts:** Comptes du titulaire : liste de comptes si `bankId` est donné, sinon `{ [bankId] = { ... } }`. `nil` si le titulaire est inconnu ou n'a aucun compte dans cette banque.
<!-- tabs:end -->

#### GetDefaultAccountNumber
<!-- tabs:start -->
#### **Export (client)**
```lua
local number --[[ string|nil ]] = exports["sadoj-banks"]:GetDefaultAccountNumber(bankId --[[ string ]])
```
* **Paramètres:**
  * **bankId:** Slug de la banque.
* **Retour:**
  * **number:** Numéro du compte par défaut du joueur local dans cette banque, `nil` s'il n'en a pas.

#### **Export (serveur)**
```lua
local number --[[ string|nil ]] = exports["sadoj-banks"]:GetDefaultAccountNumber(id --[[ string ]], bankId --[[ string ]])
```
* **Paramètres:**
  * **id:** Identifiant du joueur ou identifiant en jeu de l'entreprise.
  * **bankId:** Slug de la banque.
* **Retour:**
  * **number:** Numéro du compte par défaut (compte courant pour une entreprise), `nil` s'il n'en a pas.
<!-- tabs:end -->

**Exemple** : récupérer le compte courant d'une entreprise à la Pacific Bank.

```lua
-- serveur
local number = exports["sadoj-banks"]:GetDefaultAccountNumber("ltd_grove", "pacific")
if not number then
    print("L'entreprise n'a pas de compte à la Pacific Bank")
end
```

### Virements

#### Transaction
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local state --[[ integer ]], result --[[ integer|string ]], details --[[ table|nil ]] = exports["sadoj-banks"]:Transaction(accountDebit --[[ string ]], accountCredit --[[ string|table ]], amount --[[ integer ]], reason --[[ string ]], options --[[ table ]])
```
* **Paramètres:**
  * **accountDebit:** Numéro du compte débité.
  * **accountCredit:** Numéro du compte crédité, ou une liste de parts pour [répartir le paiement entre plusieurs comptes](#répartition-dun-paiement-entre-plusieurs-comptes). La liste de parts est interdite en `direction = "credit"`.
  * **amount:** Montant, entier strictement positif.
  * **reason:** Motif, affiché dans l'historique des deux comptes sur le site.
  * **options:** Tableau d'options (peut être vide `{}`):
    * **pin:** (optionnel) Code PIN de la carte, vérifié uniquement si `cardNumber` est aussi fourni.
    * **cardNumber:** (optionnel) Numéro de la carte utilisée, doit être liée au compte débité.
    * **direction:** (optionnel) `"debit"` (par défaut) ou `"credit"`. En `"credit"`, les messages d'erreur ne révèlent rien du compte débité (utile quand c'est le compte d'un tiers, ex: versement d'une entreprise à un joueur).
    * **type:** (optionnel) Code du [type de transaction](#les-types-de-transaction), ex: `"clothing"`. Ajoute la surtaxe du type à la taxe d'État.
* **Retour:**
  * **state:**
    * `1`: Succès
    * `-1`: Échec
  * **result:** En cas de succès l'identifiant de la transaction (la première part si le paiement est réparti), en cas d'échec le message d'erreur (à afficher au joueur).
  * **details:** En cas de succès uniquement, le détail des prélèvements :
    * **transactionId:** Identifiant de la transaction (la première part si le paiement est réparti).
    * **transactionIds:** Identifiants de toutes les transactions inscrites, une par compte crédité.
    * **splits:** Détail par compte crédité, dans l'ordre : `{ account, amount, feeAmount, transactionId }`. Un seul élément sans répartition.
    * **feeAmount / feeRate:** Frais bancaires prélevés ($) et leur taux (%).
    * **taxAmount / taxRate:** Taxe d'État prélevée ($) et son taux total (%), surtaxe du type comprise.
    * **taxSurtaxRate:** Part du taux due au type de transaction (%).
    * **transactionType:** Code du type retenu, `nil` si la transaction n'est pas typée (aucun type demandé, ou code inconnu / désactivé).

#### **Export (client)**
```lua
local state --[[ integer ]], result --[[ integer|string ]], details --[[ table|nil ]] = exports["sadoj-banks"]:Transaction(accountDebit --[[ string ]], accountCredit --[[ string|table ]], amount --[[ integer ]], reason --[[ string ]][, options --[[ table ]]])
```
Mêmes paramètres et retour que l'export serveur, l'opération est relayée au serveur.
<!-- tabs:end -->

La transaction est refusée si:

- Un des comptes n'existe pas
- Le compte débité est aussi un compte crédité
- Le compte débité est gelé
- La banque d'un des comptes est en maintenance
- Le PIN ou la carte sont invalides (si fournis)
- Le compte débité n'a pas les fonds suffisants
- La répartition entre plusieurs comptes est invalide (parts qui ne font pas 100 %, qui dépassent le montant…)

> [!NOTE]
> Les **frais bancaires** (banque du compte débité) et la **taxe d'État** (surtaxe du type comprise) sont **ajoutés** au montant et prélevés sur le compte débité. Le compte crédité reçoit exactement `amount` (ou sa part, si le paiement est réparti). Le message d'échec pour fonds insuffisants détaille montant, frais et taxe.

**Exemple** : une entreprise paie une prime à un joueur.

```lua
-- serveur
local from = exports["sadoj-banks"]:GetDefaultAccountNumber("ltd_grove", "pacific")
local to   = exports["sadoj-banks"]:GetDefaultAccountNumber(exports["sadoj-core"]:GetPlayerIdentifier(source), "pacific")

if from and to then
    local state, result = exports["sadoj-banks"]:Transaction(from, to, 500, "Prime de fin de mois", { direction = "credit" })
    if state == 1 then
        print("Virement effectué, transaction n°" .. result)
    else
        print("Virement refusé : " .. result)
    end
end
```

**Exemple** : une entreprise paie le loyer de son local, avec la surtaxe des locations.

```lua
-- serveur
local state, result, details = exports["sadoj-banks"]:Transaction(from, to, 800, "Loyer local - semaine 45", { type = "rental" })
if state == 1 then
    print(("Taxe prélevée : $%s (%s %%)"):format(details.taxAmount, details.taxRate))
end
```

**Exemple** : un paiement réparti, 70 % pour l'entreprise et le reste pour un compte PNJ.

```lua
-- serveur
local state, result, details = exports["sadoj-banks"]:Transaction(from, {
    { account = companyAccount, percent = 70 },
    { account = "PNJ-SA-000001" },
}, 10000, "Commande de pièces", { type = "vehicle" })
if state == 1 then
    for _, part in ipairs(details.splits) do
        print(("%s a reçu $%s"):format(part.account, part.amount))  -- $7,000 puis $3,000
    end
end
```

#### GetTransactionTypes
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local data --[[ table|nil ]] = exports["sadoj-banks"]:GetTransactionTypes([forceRefresh --[[ boolean ]]])
```
* **Paramètres:**
  * **forceRefresh:** (optionnel) `true` pour interroger le site même si la liste est en cache.
* **Retour:**
  * **data:** `nil` si le site ne répond pas et qu'aucune liste n'a encore été chargée. Sinon :
    * **taxRate:** Taux de taxe d'État global (%).
    * **types:** Liste des types **actifs**, chacun avec :
      * **code:** Code à passer en `options.type` / `options.transactionType` (string).
      * **label:** Libellé affiché sur le site, ex: `Vêtements` (string).
      * **surtaxRate:** Surtaxe du type (%).
      * **totalTaxRate:** Taux total appliqué à ce type (%), plafonné à 100.

#### **Export (client)**
```lua
local data --[[ table|nil ]] = exports["sadoj-banks"]:GetTransactionTypes()
```
Même retour que l'export serveur, la liste est demandée au serveur.
<!-- tabs:end -->

La liste est gardée en cache 60 secondes. Si le site ne répond pas, la dernière liste connue est renvoyée.

**Exemple** : afficher la taxe d'un article avant de le faire payer.

```lua
-- serveur
local data = exports["sadoj-banks"]:GetTransactionTypes()
for _, t in ipairs(data and data.types or {}) do
    if t.code == "clothing" then
        print(("Les vêtements sont taxés à %s %%"):format(t.totalTaxRate))
    end
end
```

### Terminal de paiement (TPE)

Le terminal fonctionne comme un TPE : le script demande une opération au joueur, et c'est le joueur qui choisit son moyen de paiement (espèces ou une de ses cartes bancaires) dans une interface. Il y a deux modes, affichés explicitement en haut de l'interface :

| | `Payment` — **Débit** | `Payout` — **Crédit** |
| --- | --- | --- |
| Badge affiché | ↑ **DÉBIT** · Vous payez (rouge) | ↓ **CRÉDIT** · Vous recevez (vert) |
| Montant affiché | `− $500` | `+ $500` |
| Porte-monnaie | Les espèces vont du porte-monnaie **vers** le coffre `safeNameForMoney` | Les espèces vont **du** coffre `safeNameForMoney` vers le porte-monnaie |
| Carte bancaire | Code PIN demandé, le compte de la carte est **débité** au profit de `accountNumberForTransaction` | Pas de PIN, le compte de la carte est **crédité** depuis `accountNumberForTransaction` |
| Frais et taxes (carte) | Payés par le joueur | Payés par l'émetteur (`accountNumberForTransaction`) |

#### Payment
<!-- tabs:start -->
#### **Export (client)**
```lua
local success --[[ boolean ]] = exports["sadoj-banks"]:Payment(amount --[[ integer ]], reason --[[ string ]], options --[[ table ]], canUseWallet --[[ boolean ]], canUseCreditCards --[[ boolean ]])
```
* **Paramètres:**
  * **amount:** Montant à payer, entier strictement positif.
  * **reason:** Motif, affiché dans l'interface (« Paiement à … ») et dans l'historique du compte.
  * **options:** Tableau d'options (voir [Options du terminal](#options-du-terminal)).
  * **canUseWallet:** Si le joueur peut payer en espèces.
  * **canUseCreditCards:** Si le joueur peut payer par carte.
* **Retour:**
  * **success:** `true` si le joueur a payé, `false` s'il a annulé ou si le paiement est impossible.
<!-- tabs:end -->

#### Payout
<!-- tabs:start -->
#### **Export (client)**
```lua
local success --[[ boolean ]] = exports["sadoj-banks"]:Payout(amount --[[ integer ]], reason --[[ string ]], options --[[ table ]], canUseWallet --[[ boolean ]], canUseCreditCards --[[ boolean ]])
```
* **Paramètres:**
  * **amount:** Montant à verser, entier strictement positif.
  * **reason:** Motif, affiché dans l'interface (« Versement de … ») et dans l'historique du compte.
  * **options:** Tableau d'options (voir [Options du terminal](#options-du-terminal)).
  * **canUseWallet:** Si le joueur peut recevoir en espèces.
  * **canUseCreditCards:** Si le joueur peut recevoir sur le compte d'une de ses cartes.
* **Retour:**
  * **success:** `true` si le joueur a reçu l'argent, `false` s'il a annulé ou si le versement est impossible.
<!-- tabs:end -->

#### Options du terminal

- `accountNumberForTransaction`: Numéro du compte de l'autre partie (string), ou liste de parts (table). **Obligatoire** si `canUseCreditCards` vaut `true`.
  - En `Payment` : le compte qui **encaisse** le paiement, ou une liste de parts pour [répartir le paiement entre plusieurs comptes](#répartition-dun-paiement-entre-plusieurs-comptes).
  - En `Payout` : le compte qui **verse** l'argent (un seul numéro de compte, pas de liste de parts).
- `safeNameForMoney`: Nom du coffre de l'autre partie (string), ou liste de parts (table). **Obligatoire** si `canUseWallet` vaut `true`.
  - En `Payment` : le coffre qui **reçoit** les espèces, ou une liste de parts pour [répartir le paiement entre plusieurs coffres](#répartition-dun-paiement-entre-plusieurs-comptes).
  - En `Payout` : le coffre d'où **sortent** les espèces (un seul nom de coffre, pas de liste de parts). Le versement est refusé si le coffre n'en contient pas assez.
- `transactionType`: (optionnel) Code du [type de transaction](#les-types-de-transaction), ex: `"clothing"` (string). S'applique aux paiements **par carte** : la surtaxe du type s'ajoute à la taxe d'État, payée par le joueur en `Payment` et par l'émetteur en `Payout`. Sans effet en espèces.
- `dontUsePendingState`: Réservé, non utilisé actuellement (boolean).

#### Comportement

- Les deux fonctions sont **bloquantes** : elles attendent que le joueur ait choisi ou annulé. Appelez-les depuis un thread (`CreateThread`), jamais depuis une boucle de rendu.
- Elles renvoient `false` immédiatement si un terminal ou un DAB est déjà ouvert, ou si `canUseWallet` et `canUseCreditCards` valent tous les deux `false`.
- Si seul `canUseWallet` vaut `true`, aucune interface ne s'ouvre : les espèces sont directement transférées entre le porte-monnaie et le coffre.
- En cas d'erreur (solde insuffisant, carte refusée, banque en maintenance…), le message s'affiche dans l'interface et le joueur peut choisir un autre moyen ou annuler. Le terminal ne se ferme qu'en cas de succès ou d'annulation (bouton ou touche `Échap`).
- Seules les cartes présentes dans l'inventaire du joueur sont proposées.

> [!NOTE]
> Le terminal **ne crée ni ne supprime jamais d'argent** : en espèces il passe du porte-monnaie au coffre (ou l'inverse), par carte d'un compte à l'autre. Votre script n'a donc rien à créditer ou débiter lui-même après un succès.

**Exemple** : un magasin de vêtements fait payer un article.

```lua
-- client
CreateThread(function()
    local success = exports["sadoj-banks"]:Payment(250, "Binco - Veste en cuir", {
        safeNameForMoney            = "binco_vespucci",   -- coffre du magasin (espèces)
        accountNumberForTransaction = shopAccountNumber,  -- compte du magasin (carte), récupéré côté serveur
        transactionType             = "clothing",         -- surtaxe « Vêtements » si payé par carte
    }, true, true)

    if success then
        -- donner l'article
    else
        -- paiement annulé ou refusé
    end
end)
```

**Exemple** : un concessionnaire vend un véhicule. 60 % du prix va à l'entreprise, le reste au fournisseur PNJ, que le joueur paie par carte ou en espèces. Par carte, la taxe d'État (surtaxe « Véhicules » comprise) et les frais bancaires s'ajoutent au prix et sont payés par le joueur.

```lua
-- client
CreateThread(function()
    local success = exports["sadoj-banks"]:Payment(85000, "PDM - Sultan RS", {
        accountNumberForTransaction = {
            { account = companyAccountNumber, percent = 60 }, -- compte de l'entreprise, récupéré côté serveur
            { account = "PNJ-SA-000001" },                    -- compte PNJ du fournisseur : reçoit le reste (40 %)
        },
        safeNameForMoney = {
            { safe = "pdm",           percent = 60 },         -- coffre de l'entreprise
            { safe = "pnj_vehicules" },                       -- coffre du fournisseur PNJ : le reste (40 %)
        },
        transactionType = "vehicle",
    }, true, true)

    if success then
        -- livrer le véhicule
    end
end)
```

**Exemple** : une entreprise rachète un objet à un joueur.

```lua
-- client
CreateThread(function()
    local success = exports["sadoj-banks"]:Payout(1200, "Rachat de ferraille", {
        accountNumberForTransaction = companyAccountNumber, -- compte de l'entreprise qui paie
    }, false, true)

    if success then
        -- retirer l'objet de l'inventaire du joueur
    end
end)
```

> [!TIP]
> Le compte d'une entreprise n'est connu que côté serveur : récupérez-le avec `GetDefaultAccountNumber` dans un callback serveur (`sadoj-callbacks`) avant d'ouvrir le terminal.

### Distributeurs automatiques (DAB)

Le DAB permet au joueur de choisir une de ses cartes, de saisir son PIN puis de déposer ou retirer des espèces.

- **Retrait** : refusé au-delà du plafond de retrait du compte ou du solde (jamais de découvert au DAB).
- **Dépôt** : au-delà du plafond hebdomadaire de dépôt, les espèces sont retirées du porte-monnaie mais le dépôt reste **en attente** jusqu'à validation par un banquier sur le site. Le joueur et la banque sont notifiés.

## Events

#### sadoj-banks:wallet:refreshed
<!-- tabs:start -->
#### **Event (client)**
```lua
RegisterNetEvent("sadoj-banks:wallet:refreshed", function(amount --[[ integer ]])
end)
```
* **Paramètres:**
  * **amount:** Nouveau montant du porte-monnaie du joueur local.

#### **Event (serveur)**
```lua
AddEventHandler("sadoj-banks:wallet:refreshed", function(player --[[ integer ]], amount --[[ integer ]])
end)
```
* **Paramètres:**
  * **player:** Server ID du joueur.
  * **amount:** Nouveau montant de son porte-monnaie.
<!-- tabs:end -->

#### sadoj-banks:accounts:updated
<!-- tabs:start -->
#### **Event (client)**
```lua
RegisterNetEvent("sadoj-banks:accounts:updated", function(data --[[ table ]])
end)
```
* **Paramètres:**
  * **data:** `{ accounts = { [bankId] = { ... } } }`, les comptes du joueur local.

#### **Event (serveur)**
```lua
AddEventHandler("sadoj-banks:accounts:updated", function(player --[[ integer ]], data --[[ table ]])
end)
```
* **Paramètres:**
  * **player:** Server ID du joueur.
  * **data:** `{ accounts = { [bankId] = { ... } } }`, ses comptes.
<!-- tabs:end -->

Déclenché à l'apparition du personnage et à chaque changement de ses comptes sur le site (ouverture, clôture, gel, nouveau solde…).

#### sadoj-banks:company:accounts:updated
<!-- tabs:start -->
#### **Event (serveur)**
```lua
AddEventHandler("sadoj-banks:company:accounts:updated", function(companyId --[[ string ]], data --[[ table|nil ]])
end)
```
* **Paramètres:**
  * **companyId:** Identifiant en jeu de l'entreprise (`sadoj-jobs`), avec la casse renseignée sur le MDT.
  * **data:** `{ accounts = { [bankId] = { ... } } }`, ou `nil` si l'entreprise n'est plus cliente d'aucune banque ou si cet identifiant en jeu lui a été retiré sur le MDT.
<!-- tabs:end -->

Déclenché au démarrage du script et à chaque changement des comptes de l'entreprise sur le site. Une entreprise qui a plusieurs identifiants en jeu déclenche l'event une fois par identifiant.
