# sadoj-keybind

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[MENUS]/sadoj-keybind`

Ce script propose un affichage tête haute (HUD / NUI) minimaliste, tactile et performant pour les touches de raccourcis du serveur. Il permet d'afficher les raccourcis contextuels en bas à droite de l'écran afin de guider le joueur sans qu'il ait besoin de consulter la documentation.

## Fonctionnalités

* **Support clavier, souris et manette** : Prise en charge automatique des touches du clavier, des boutons/axes de souris et des commandes manette.
* **Règle d'API intuitive** :
  * **Singulier** (`key`, `control`) : Touche unique ou groupe de touches alternatives (sans `+`).
  * **Pluriel** (`keys`, `controls`) : Combinaison simultanée de touches (avec `+`).
* **Support dynamique de `RegisterKeyMapping` (`command`)** : Récupération et mise à jour en temps réel de la touche configurée par le joueur dans ses paramètres FiveM.
* **Contextes joueur automatiques (`context`)** : Filtrage natif selon la situation (`on_foot`, `in_vehicle`, `driver`, `passenger`, `swimming`, `aiming`, `dead`, `paused`, `keyboard`, `pad`).
* **Filtrage conditionnel sur-mesure (`filter`)** : Fonction personnalisée exécutée dynamiquement pour valider des conditions spécifiques.
* **Système Auto-Fade et rappel (*Peek*)** :
  * Masquage automatique des touches après un délai d'inactivité.
  * Réapparition lors d'un changement de situation ou par appui sur la touche `W` (`INPUT_HUD_SPECIAL` / contrôle 48).
  * Option permanente (`permanent = true`) pour maintenir l'affichage d'une touche critique.
* **Pile d'exclusivité LIFO (`RequestExclusive` / `ReleaseExclusive`)** : Permet à une interface (ex: menu radial, mini-jeu) d'afficher uniquement ses propres touches sans conflit avec les autres ressources.
* **Suspension globale de l'interface (`HideUI` / `ShowUI`)** : Masquage complet avec jeton unique de suspension lors de cinématiques ou d'écrans bloquants.
* **Nettoyage automatique** : Toutes les touches, suspensions et exclusivités sont automatiquement supprimées lors de l'arrêt d'une ressource (`onClientResourceStop`).

## Concepts

### Système Auto-Fade et rappel à la demande

Pour ne pas encombrer l'écran en continu, les touches s'affichent de façon discrète et dynamique :

1. **Changement d'état** : Dès que la situation du joueur change (montée en véhicule, passage passager, visée, etc.), les touches applicables s'affichent automatiquement pendant quelques secondes, puis s'estompent en fondu.
2. **Coup d'œil (*Peek*)** : Une pression sur la touche `W` (`INPUT_HUD_SPECIAL` / contrôle 48) fait réapparaître immédiatement l'ensemble des touches actives pour rafraîchir la mémoire du joueur.
3. **Touches permanentes** : L'option `permanent = true` permet à une touche de rester visible en continu, sans tenir compte du délai d'estompage.

### Règle d'or de l'API (Singulier vs Pluriel)

* **SINGULIER (`key`, `control`)** : Touche unique OU groupe de touches alternatives pour une même action (**sans `+`**).
* **PLURIEL (`keys`, `controls`)** : Combinaison simultanée de touches à presser ensemble (**avec `+`**).

## Structure des données

La table de configuration passée lors de l'enregistrement ou de la modification d'une touche comporte les champs suivants :

```lua
{
    label = 'Menu Radial',                       --[[ string (Requis) : Libellé descriptif affiché à côté de la touche ]]
    key = 'X',                                   --[[ string|table (Facultatif*) : Touche unique ou groupe alternatif sans '+' ]]
    keys = { 'SHIFT', 'E' },                     --[[ table (Facultatif*) : Combinaison simultanée de touches avec '+' ]]
    command = '+openRadial',                     --[[ string (Facultatif*) : Commande FiveM liée via RegisterKeyMapping ]]
    control = 51,                                --[[ number|table (Facultatif*) : ID de contrôle GTA V unique ou groupe alternatif ]]
    controls = { 21, 51 },                       --[[ table (Facultatif*) : Combinaison simultanée d'IDs de contrôles GTA V ]]
    priority = 10,                               --[[ number (Facultatif) : Priorité d'affichage dans la barre (défaut: 10) ]]
    permanent = false,                           --[[ boolean (Facultatif) : Conserve la touche visible en permanence (défaut: false) ]]
    context = { on_foot = true },                --[[ table (Facultatif) : Table de conditions booléennes ]]
    filter = function(ctx) return true end,      --[[ function (Facultatif) : Fonction de validation dynamique ]]
}
```

> [!NOTE]
> Au moins une propriété de touche (`key`, `keys`, `command`, `control` ou `controls`) doit être renseignée.

## Utilisation

### ShowKeybind

Enregistre et affiche une touche d'aide selon le contexte.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ string ]] = exports['sadoj-keybind']:ShowKeybind(id --[[ string|nil ]], data --[[ table ]])
```

* **Paramètres:**
  * **id:** Identifiant unique de la touche (facultatif). Si omis ou passé sous forme de table `data`, un identifiant est généré automatiquement.
  * **data:** Table de données de la touche (voir [Structure des données](#structure-des-donnees)).
* **Retour:**
  * **id:** Identifiant unique assigné à la touche.

<!-- tabs:end -->

#### Exemples

```lua
-- Touche unique à pied :
exports['sadoj-keybind']:ShowKeybind('radial_menu', {
    key = 'X',
    label = 'Menu Radial',
    context = { on_foot = true },
    priority = 100,
})

-- Groupe de touches alternatives pour la même action (singulier 'key' = sans '+') :
exports['sadoj-keybind']:ShowKeybind('browse', {
    key = { 'ARROW_UP', 'ARROW_DOWN' },
    label = 'Parcourir',
})

-- Combinaison simultanée de touches (pluriel 'keys' = avec '+') :
exports['sadoj-keybind']:ShowKeybind('trunk', {
    keys = { 'SHIFT', 'E' },
    label = 'Ouvrir Coffre',
})

-- Combinaison avec sous-groupe alternatif :
exports['sadoj-keybind']:ShowKeybind('fast_browse', {
    keys = { 'CTRL', { 'ARROW_UP', 'ARROW_DOWN' } },
    label = 'Parcourir Rapide',
})

-- Commande RegisterKeyMapping :
exports['sadoj-keybind']:ShowKeybind('custom_cmd', {
    command = '+openRadial',
    label = 'Menu',
    context = { on_foot = true },
})

-- Contrôle GTA V natif (51 = INPUT_CONTEXT / Touche E) :
exports['sadoj-keybind']:ShowKeybind('interact', {
    control = 51,
    label = 'Interagir',
    context = { on_foot = true },
})

-- Touche permanente (ignore l'auto-fade) :
exports['sadoj-keybind']:ShowKeybind('inventory', {
    key = 'TAB',
    label = 'Inventaire',
    permanent = true,
})
```

### ShowKeybinds

Enregistre et affiche plusieurs touches en une seule opération (batch).

<!-- tabs:start -->

#### **Export (client)**

```lua
local ids --[[ table<number, string> ]] = exports['sadoj-keybind']:ShowKeybinds(items --[[ table ]])
```

* **Paramètres:**
  * **items:** Tableau contenant les configurations des touches à enregistrer.
* **Retour:**
  * **ids:** Liste des identifiants attribués aux touches.

<!-- tabs:end -->

#### Exemple

```lua
local ids = exports['sadoj-keybind']:ShowKeybinds({
    {
        id = 'browse',
        key = { 'ARROW_UP', 'ARROW_DOWN' },
        label = 'Naviguer',
    },
    {
        id = 'validate',
        key = 'ENTER',
        label = 'Valider',
    },
})
```

### HideKeybind

Supprime une touche enregistrée.

<!-- tabs:start -->

#### **Export (client)**

```lua
local success --[[ boolean ]] = exports['sadoj-keybind']:HideKeybind(id --[[ string ]])
```

* **Paramètres:**
  * **id:** Identifiant de la touche à retirer.
* **Retour:**
  * **success:** `true` si la touche a été trouvée et retirée, `false` sinon.

<!-- tabs:end -->

### HideKeybinds

Supprime plusieurs touches en une seule opération.

<!-- tabs:start -->

#### **Export (client)**

```lua
local success --[[ boolean ]] = exports['sadoj-keybind']:HideKeybinds(ids --[[ table<number, string> ]])
```

* **Paramètres:**
  * **ids:** Tableau des identifiants des touches à retirer.
* **Retour:**
  * **success:** `true` si les touches ont été retirées avec succès.

<!-- tabs:end -->

### UpdateKeybind

Met à jour les propriétés d'une touche existante sans provoquer de scintillement visuel.

<!-- tabs:start -->

#### **Export (client)**

```lua
local success --[[ boolean ]] = exports['sadoj-keybind']:UpdateKeybind(id --[[ string ]], data --[[ table ]])
```

* **Paramètres:**
  * **id:** Identifiant de la touche à modifier.
  * **data:** Table des champs à mettre à jour (`label`, `key`, `keys`, `command`, `control`, `controls`, `context`, `filter`, `priority`, `permanent`).
* **Retour:**
  * **success:** `true` si la touche a été mise à jour, `false` si l'identifiant n'existe pas.

<!-- tabs:end -->

#### Exemple

```lua
exports['sadoj-keybind']:UpdateKeybind('radial_menu', {
    label = 'Menu d\'actions',
    priority = 120,
})
```

### Peek

Déclenche l'affichage temporaire de toutes les touches actives pendant une durée donnée.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports['sadoj-keybind']:Peek(duration --[[ number|nil ]])
```

* **Paramètres:**
  * **duration:** Durée d'affichage en millisecondes (facultatif, valeur par défaut de la configuration si omis).

<!-- tabs:end -->

### HideUI

Masque totalement l'affichage de l'interface et retourne un identifiant de suspension unique. Utile lors de l'ouverture d'un menu, d'un inventaire ou d'une cinématique.

<!-- tabs:start -->

#### **Export (client)**

```lua
local suspensionId --[[ string ]] = exports['sadoj-keybind']:HideUI(reason --[[ string|nil ]])
```

* **Paramètres:**
  * **reason:** Motif de la suspension pour le débogage (facultatif).
* **Retour:**
  * **suspensionId:** Jeton de suspension unique nécessaire pour rétablir l'affichage.

<!-- tabs:end -->

### ShowUI

Consomme un jeton de suspension pour réautoriser l'affichage de l'interface.

<!-- tabs:start -->

#### **Export (client)**

```lua
local success --[[ boolean ]] = exports['sadoj-keybind']:ShowUI(suspensionId --[[ string ]])
```

* **Paramètres:**
  * **suspensionId:** Jeton de suspension obtenu lors de l'appel à `HideUI`.
* **Retour:**
  * **success:** `true` si le jeton a été libéré, `false` sinon.

<!-- tabs:end -->

#### Exemple

```lua
-- Ouverture d'un menu ou d'une cinématique
local suspensionId = exports['sadoj-keybind']:HideUI('MonMenu')

-- Fermeture du menu
exports['sadoj-keybind']:ShowUI(suspensionId)
```

### RequestExclusive

Demande l'exclusivité d'affichage pour la ressource appelante. Tant que l'exclusivité est active, seules les touches enregistrées par cette ressource sont visibles.

Géré sous forme de pile LIFO : si une autre ressource demande l'exclusivité par-dessus, elle devient prioritaire jusqu'à ce qu'elle soit libérée.

<!-- tabs:start -->

#### **Export (client)**

```lua
local depth --[[ number ]] = exports['sadoj-keybind']:RequestExclusive(customResource --[[ string|nil ]])
```

* **Paramètres:**
  * **customResource:** Nom de ressource personnalisé (facultatif, par défaut `GetInvokingResource()`).
* **Retour:**
  * **depth:** Profondeur actuelle de la pile d'exclusivité.

<!-- tabs:end -->

### ReleaseExclusive

Relâche l'exclusivité d'affichage détenue par la ressource appelante.

<!-- tabs:start -->

#### **Export (client)**

```lua
local success --[[ boolean ]] = exports['sadoj-keybind']:ReleaseExclusive(customResource --[[ string|nil ]])
```

* **Paramètres:**
  * **customResource:** Nom de ressource personnalisé (facultatif, par défaut `GetInvokingResource()`).
* **Retour:**
  * **success:** `true` si l'exclusivité a été retirée de la pile, `false` sinon.

<!-- tabs:end -->

#### Exemple

```lua
-- À l'ouverture de votre interface
exports['sadoj-keybind']:RequestExclusive()

-- À la fermeture de votre interface
exports['sadoj-keybind']:ReleaseExclusive()
```

### GetExclusiveResource

Retourne le nom de la ressource qui détient actuellement l'exclusivité.

<!-- tabs:start -->

#### **Export (client)**

```lua
local resource --[[ string|nil ]] = exports['sadoj-keybind']:GetExclusiveResource()
```

* **Retour:**
  * **resource:** Nom de la ressource active dans la pile d'exclusivité, ou `nil` si aucune exclusivité n'est en cours.

<!-- tabs:end -->

### IsExclusive

Indique si une exclusivité est active, ou si une ressource spécifique la possède.

<!-- tabs:start -->

#### **Export (client)**

```lua
local isExclusive --[[ boolean ]] = exports['sadoj-keybind']:IsExclusive(resourceName --[[ string|nil ]])
```

* **Paramètres:**
  * **resourceName:** Nom d'une ressource précise à vérifier (facultatif).
* **Retour:**
  * **isExclusive:** `true` si une exclusivité est active (ou si la ressource spécifiée la détient), `false` sinon.

<!-- tabs:end -->

### GetRegisteredKey

Résout la touche textuelle assignée à une commande FiveM `RegisterKeyMapping`.

<!-- tabs:start -->

#### **Export (client)**

```lua
local key --[[ string|nil ]] = exports['sadoj-keybind']:GetRegisteredKey(command --[[ string ]])
```

* **Paramètres:**
  * **command:** Nom de la commande enregistrée (ex: `'+openRadial'`).
* **Retour:**
  * **key:** Touche actuellement affectée par le joueur (ex: `'X'`, `'F5'`), ou `nil` si introuvable.

<!-- tabs:end -->

### GetControlKey

Résout la touche textuelle associée à un ou plusieurs IDs de contrôle natifs GTA V.

<!-- tabs:start -->

#### **Export (client)**

```lua
local key --[[ string|nil ]] = exports['sadoj-keybind']:GetControlKey(control --[[ number|table ]])
```

* **Paramètres:**
  * **control:** ID de contrôle GTA V unique (`51`) ou liste d'IDs (`{ 21, 51 }`).
* **Retour:**
  * **key:** Représentation textuelle de la touche (ex: `'E'`, `'SHIFT + E'`).

<!-- tabs:end -->

### GetActiveKeybinds

Retourne la liste des touches actuellement actives selon le contexte joueur.

<!-- tabs:start -->

#### **Export (client)**

```lua
local keybinds --[[ table ]] = exports['sadoj-keybind']:GetActiveKeybinds(onlyVisible --[[ boolean|nil ]])
```

* **Paramètres:**
  * **onlyVisible:** Si `true`, filtre pour ne renvoyer que les touches actuellement rendues à l'écran (non estompées). `false` par défaut.
* **Retour:**
  * **keybinds:** Tableau des touches actives.

<!-- tabs:end -->

### Refresh

Force le rafraîchissement immédiat de l'affichage des touches à l'écran.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports['sadoj-keybind']:Refresh()
```

<!-- tabs:end -->

## Contextes et filtrage

Le champ `context` est une table associative de booléens. Si ce champ est omis, la touche reste active en continu tant que le joueur est vivant et hors du menu pause.

### Contextes disponibles

| Clé | Type | Description |
| :--- | :--- | :--- |
| `on_foot` | `boolean` | `true` si le joueur est à pied (hors de tout véhicule et vivant). |
| `in_vehicle` | `boolean` | `true` si le joueur est dans un véhicule (conducteur ou passager). |
| `driver` | `boolean` | `true` si le joueur est au volant / siège conducteur (`seat -1`). |
| `passenger` | `boolean` | `true` si le joueur est passager dans un véhicule. |
| `swimming` | `boolean` | `true` si le joueur est en train de nager. |
| `aiming` | `boolean` | `true` si le joueur est en train de viser avec une arme (`IsPlayerFreeAiming`). |
| `dead` | `boolean` | `true` pour afficher la touche uniquement quand le joueur est mort (défaut: `false`). |
| `paused` | `boolean` | `true` pour afficher dans le menu pause Échap (défaut: `false`). |
| `keyboard` | `boolean` | `true` pour afficher la touche uniquement au clavier / souris. |
| `pad` | `boolean` | `true` pour afficher la touche uniquement à la manette. |

### Règle d'exclusion explicite

Définir explicitement une clé à `false` interdit formellement cet état :
* `{ on_foot = true, aiming = false }` : visible uniquement à pied **à condition de ne pas viser**.
* `{ in_vehicle = true, driver = false }` : visible uniquement en véhicule **si le joueur n'est pas conducteur** (passager).
* `{ keyboard = false }` : visible **uniquement à la manette**.
* `{ pad = false }` : visible **uniquement au clavier / souris**.

### Filtrage dynamique (filter)

Pour les vérifications conditionnelles plus poussées (métier, arme tenue, etc.), le champ `filter` prend une fonction recevant l'objet `ctx` :

```lua
exports['sadoj-keybind']:ShowKeybind('taser_mode', {
    key = 'G',
    label = 'Mode Taser',
    context = { on_foot = true }, -- Vérifié en premier
    filter = function(ctx)
        -- Exécuté uniquement si le contexte de base est déjà satisfait
        return GetSelectedPedWeapon(PlayerPedId()) == `WEAPON_STUNGUN`
    end,
})
```

> [!TIP]
> Le contexte booléen est toujours évalué en priorité : si le joueur ne correspond pas au contexte (ex: joueur mort ou en véhicule), la fonction `filter` n'est **jamais appelée**.

## Priorités d'affichage

Le paramètre optionnel `priority` permet de définir précisément l'ordre d'alignement horizontal des touches dans la barre :

* **Ordre décroissant** : Les touches sont triées de la priorité la plus grande à la plus petite.
* **Alignement (gauche à droite)** : La priorité la plus élevée apparaît à gauche, les priorités inférieures s'alignent vers la droite.
* **Valeur par défaut** : Si `priority` est omis, la valeur par défaut est `10`.

### Recommandations

| Priorité | Usage conseillé | Exemples |
| :--- | :--- | :--- |
| `100` | Menus principaux et actions majeures | Menu Radial, Menu Véhicule |
| `90 - 95` | Actions secondaires importantes | Moteur, Ceinture, Inventaire |
| `10` (défaut) | Actions contextuelles courantes | Interagir, Coffre, Radio |
| `< 10` | Actions tertiaires ou discrètes | Émotes secondaires, bascules visuelles |

## Nomenclature des touches

### Symboles vectoriels

| Code (`key`) | Symbole | Description |
| :--- | :---: | :--- |
| `'ARROW_UP'` | **↑** | Flèche directionnelle haut |
| `'ARROW_DOWN'` | **↓** | Flèche directionnelle bas |
| `'ARROW_LEFT'` | **←** | Flèche directionnelle gauche |
| `'ARROW_RIGHT'` | **→** | Flèche directionnelle droite |
| `'ENTER'` | **↵** | Touche Entrée |
| `'BACKSPACE'` | **⌫** | Touche Retour arrière |
| `'TAB'` | **⇥** | Tabulation |
| `'SPACE'` | **␣** | Barre d'espace |
| `'PAGE_UP'` | **⇞** | Page précédente |
| `'PAGE_DOWN'` | **⇟** | Page suivante |
| `'HOME'` | **↖** | Début de ligne (flèche diagonale) |
| `'CAPS'` | **⇪** | Verrouillage Majuscule |

### Pavé numérique

| Code (`key`) | Symbole | Description |
| :--- | :---: | :--- |
| `'NUM_0'` à `'NUM_9'` | 🔲 **0** à **9** | Chiffres du pavé numérique |
| `'NUM_+'` | 🔲 **+** | Addition |
| `'NUM_-'` | 🔲 **-** | Soustraction |
| `'NUM_*'` / `'NUM_X'` | 🔲 **\*** / **x** | Multiplication |
| `'NUM_/'` / `'NUM_÷'` | 🔲 **/** / **÷** | Division |
| `'NUM_.'` | 🔲 **.** | Point décimal |
| `'NUM_='` | 🔲 **=** | Égal |
| `'NUM_ENTER'` | 🔲 **↵** | Entrée du pavé numérique |
| `'NUM_LOCK'` | 🔲 **VERR** | Verrouillage numérique |

### Touches standards et modificateurs

* **Lettres & Chiffres** : `'A'` à `'Z'`, `'0'` à `'9'`.
* **Touches de fonction** : `'F1'` à `'F24'`.
* **Modificateurs** :
  * `'SHIFT'` ou `'MAJ G'` (Majuscule Gauche)
  * `'MAJ D'` (Majuscule Droite)
  * `'CTRL'` ou `'CTRL G'` (Contrôle Gauche)
  * `'CTRL D'` (Contrôle Droit)
  * `'ALT'` (Alt Gauche)
  * `'ALT GR'` ou `'ALT D'` (Alt Droit)
  * `'WIN'` ou `'WIN G'` (Touche Windows)
* **Touches d'édition & système** :
  * `'ESC'` ou `'ÉCHAP'`
  * `'INSERT'` ou `'INSER'`
  * `'DELETE'` ou `'SUPPR'`
  * `'END'` ou `'FIN'`
  * `'PRINT_SCREEN'` (Impr Écran)
  * `'SCROLL_LOCK'` (Arrêt Défil)
  * `'PAUSE'`

### Souris

| Code (`key`) | Rendu | Description |
| :--- | :--- | :--- |
| `'MOUSE_L'` | 🖱️ Bouton gauche | Clic gauche |
| `'MOUSE_R'` | 🖱️ Bouton droit | Clic droit |
| `'MOUSE_M'` | 🖱️ Bouton central | Clic molette |
| `'MOUSE_4'` à `'MOUSE_8'` | 🖱️ Boutons latéraux | Boutons de souris 4 à 8 |
| `'MOUSE_LEFT'` / `'MOUSE_RIGHT'` | 🖱️ Flèche ◄ / ► | Déplacement horizontal de la souris |
| `'MOUSE_UP'` / `'MOUSE_DOWN'` | 🖱️ Flèche ▲ / ▼ | Déplacement vertical de la souris |
| `'MOUSE_LR'` / `'MOUSE_UD'` | 🖱️ Flèches ◄► / ▲▼ | Axes de la souris |
| `'MOUSE_MOVE'` | 🖱️ 4 flèches cardinales | Mouvement libre de la souris |
| `'SCROLL_UP'` / `'SCROLL_DOWN'` | 🖱️ Flèche molette ▲ / ▼ | Molette vers le haut / le bas |
| `'SCROLL_ALL'` | 🖱️ Molette ↕ | Défilement molette libre |

### Manette Xbox

| Code (`key`) | Description |
| :--- | :--- |
| `'PAD_A'`, `'PAD_B'`, `'PAD_X'`, `'PAD_Y'` | Boutons de façade principaux |
| `'PAD_LB'`, `'PAD_RB'` | Gâchettes hautes (Bumpers) |
| `'PAD_LT'`, `'PAD_RT'` | Gâchettes basses analogiques (Triggers) |
| `'PAD_L3'`, `'PAD_R3'` | Clics sur sticks analogiques (L3 / R3) |
| `'PAD_LS'`, `'PAD_RS'` | Sticks analogiques (mouvement libre) |
| `'PAD_LS_UP'`, `'PAD_LS_DOWN'`, etc. | Direction unitaire du stick analogique gauche |
| `'PAD_RS_UP'`, `'PAD_RS_DOWN'`, etc. | Direction unitaire du stick analogique droit |
| `'PAD_DPAD_UP'`, `'PAD_DPAD_DOWN'`, etc. | Croix directionnelle (branche spécifique) |
| `'PAD_DPAD'` | Croix directionnelle complète |
| `'PAD_START'` | Bouton Menu (Start) |
| `'PAD_BACK'` | Bouton Affichage (View / Back) |
