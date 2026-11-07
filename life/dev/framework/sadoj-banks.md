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
local state --[[ integer ]], result --[[ integer|string ]] = exports["sadoj-banks"]:Transaction(accountDebit --[[ string ]], accountCredit --[[ string ]], amount --[[ integer ]], reason --[[ string ]], options --[[ table ]])
```
* **Paramètres:**
  * **accountDebit:** Numéro du compte débité.
  * **accountCredit:** Numéro du compte crédité.
  * **amount:** Montant, entier strictement positif.
  * **reason:** Motif, affiché dans l'historique des deux comptes sur le site.
  * **options:** Tableau d'options (peut être vide `{}`):
    * **pin:** (optionnel) Code PIN de la carte, vérifié uniquement si `cardNumber` est aussi fourni.
    * **cardNumber:** (optionnel) Numéro de la carte utilisée, doit être liée au compte débité.
    * **direction:** (optionnel) `"debit"` (par défaut) ou `"credit"`. En `"credit"`, les messages d'erreur ne révèlent rien du compte débité (utile quand c'est le compte d'un tiers, ex: versement d'une entreprise à un joueur).
* **Retour:**
  * **state:**
    * `1`: Succès
    * `-1`: Échec
  * **result:** En cas de succès l'identifiant de la transaction, en cas d'échec le message d'erreur (à afficher au joueur).

#### **Export (client)**
```lua
local state --[[ integer ]], result --[[ integer|string ]] = exports["sadoj-banks"]:Transaction(accountDebit --[[ string ]], accountCredit --[[ string ]], amount --[[ integer ]], reason --[[ string ]][, options --[[ table ]]])
```
Mêmes paramètres et retour que l'export serveur, l'opération est relayée au serveur.
<!-- tabs:end -->

La transaction est refusée si:

- Un des deux comptes n'existe pas
- Les deux comptes sont identiques
- Le compte débité est gelé
- La banque d'un des deux comptes est en maintenance
- Le PIN ou la carte sont invalides (si fournis)
- Le compte débité n'a pas les fonds suffisants

> [!NOTE]
> Les **frais bancaires** (banque du compte débité) et la **taxe d'État** sont **ajoutés** au montant et prélevés sur le compte débité. Le compte crédité reçoit exactement `amount`. Le message d'échec pour fonds insuffisants détaille montant, frais et taxe.

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

- `accountNumberForTransaction`: Numéro du compte de l'autre partie (string). **Obligatoire** si `canUseCreditCards` vaut `true`.
  - En `Payment` : le compte qui **encaisse** le paiement.
  - En `Payout` : le compte qui **verse** l'argent.
- `safeNameForMoney`: Nom du coffre de l'autre partie (string). **Obligatoire** si `canUseWallet` vaut `true`.
  - En `Payment` : le coffre qui **reçoit** les espèces.
  - En `Payout` : le coffre d'où **sortent** les espèces. Le versement est refusé si le coffre n'en contient pas assez.
- `dontUsePendingState`: Réservé, non utilisé actuellement (boolean).

#### Comportement

- Les deux fonctions sont **bloquantes** : elles attendent que le joueur ait choisi ou annulé. Appelez-les depuis un thread (`CreateThread`), jamais depuis une boucle de rendu.
- Elles renvoient `false` immédiatement si un terminal ou un DAB est déjà ouvert, ou si `canUseWallet` et `canUseCreditCards` valent tous les deux `false`.
- Si seul `canUseWallet` vaut `true`, aucune interface ne s'ouvre : les espèces sont directement transférées entre le porte-monnaie et le coffre.
- En cas d'erreur (solde insuffisant, carte refusée, banque en maintenance…), le message s'affiche dans l'interface et le joueur peut choisir un autre moyen ou annuler. Le terminal ne se ferme qu'en cas de succès ou d'annulation (bouton ou touche `Échap`).
- Seules les cartes présentes dans l'inventaire du joueur sont proposées.

> [!NOTE]
> Le terminal **ne crée ni ne supprime jamais d'argent** : en espèces il passe du porte-monnaie au coffre (ou l'inverse), par carte d'un compte à l'autre. Votre script n'a donc rien à créditer ou débiter lui-même après un succès.

**Exemple** : un commerçant fait payer un article.

```lua
-- client
CreateThread(function()
    local success = exports["sadoj-banks"]:Payment(250, "Superette 24/7", {
        safeNameForMoney            = "superette_grove",  -- coffre du magasin (espèces)
        accountNumberForTransaction = shopAccountNumber,  -- compte du magasin (carte), récupéré côté serveur
    }, true, true)

    if success then
        -- donner l'article
    else
        -- paiement annulé ou refusé
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
