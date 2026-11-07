# sadoj-clothes

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-clothes`
* Redémarrage possible: `non`

Le script gère tout ce qui touche aux vêtements :

- l'inventaire de vêtements du joueur (touche `F9`), des véhicules et du dressing ;
- les vêtements portés ;
- les tenues personnelles (avec catégories) et les tenues d'entreprise (avec groupes et équipements/kits) ;
- les magasins de vêtements et le paiement ;
- les vêtements jetés au sol ;
- la fouille d'un joueur ;
- les actions ajoutées par d'autres ressources dans le menu clic droit des vêtements ;
- les options des vêtements (protection balistique, vision nocturne, masque à gaz, empreintes cachées…) ;
- le menu d'administration et le studio photo (outils de dev).

## Énumérations

Définies dans `config/enums.lua` (partagé).

### CLOTHING_TYPES
- `PROP`: `1`
- `DRAWABLE`: `2`

### CLOTHING_CATEGORIES

* **`CLOTHING_TYPES.PROP`**
  - `HATS`: `0` (Chapeaux & Casques)
  - `GLASSES`: `1` (Lunettes)
  - `EARS`: `2` (Accessoires d'oreilles)
  - `LEFT_WRIST`: `6` (Montres)
  - `RIGHT_WRIST`: `7` (Bracelet)
* **`CLOTHING_TYPES.DRAWABLE`**
  - `MASK`: `1` (Masque)
  - `UPPER`: `3` (Gants)
  - `LOWER`: `4` (Pantalons)
  - `PARACHUTE`: `5` (Sacs)
  - `SHOES`: `6` (Chaussures)
  - `ACCESSORY`: `7` (Accessoires)
  - `UNDERSHIRT`: `8` (Hauts & Ceintures)
  - `ARMOR`: `9` (Gilets et Accessoires)
  - `DECAL`: `10` (Galons)
  - `UPPER2`: `11` (Vestes)

### OUTFIT_TYPES
- `PERSONAL`: `0` (Tenue personnelle)
- `COMPANY`: `1` (Tenue de travail)

### FREEMODES
- `NONE`: `-1`
- `MALE`: `GetHashKey("mp_m_freemode_01")`
- `FEMALE`: `GetHashKey("mp_f_freemode_01")`

## Structures

### Item (vêtement d'inventaire)

```lua
{
    uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", -- string
    type = 2,                -- CLOTHING_TYPES
    category = 11,           -- CLOTHING_CATEGORIES[type]
    collection = "",         -- nom de la collection ("" = jeu de base)
    drawableId = 15,         -- ID local à la collection (string = ID d'un groupe de gants pour la catégorie UPPER)
    textureId = 0,
    paletteId = 0,
    metadata = {             -- [clé] = { value, displayed }
        name = { value = "Ma veste", displayed = true },
    },
}
```

### Vêtements portés (`clothes`)

Utilisé par les vêtements portés et par les tenues. Indexé par type puis par catégorie :

```lua
{
    [CLOTHING_TYPES.PROP] = {
        [0] = { itemUuid = "...", collection = "", drawableId = 2, textureId = 0, paletteId = 0, metadata = {} },
    },
    [CLOTHING_TYPES.DRAWABLE] = {
        [11] = { itemUuid = "...", collection = "", drawableId = 15, textureId = 0, paletteId = 0, metadata = {} },
    },
}
```

- `itemUuid`: l'`uuid` de l'item d'inventaire porté (absent dans une tenue d'entreprise, qui est un modèle).

### Noms d'inventaire

| Inventaire | Nom |
|---|---|
| Joueur | l'identifiant du joueur (`sadoj-core`) |
| Véhicule | `vehicle:<identifiant du véhicule>` |
| Dressing | `dressing` |

## Utilisation

### Inventaires

#### GetPlayerInventoryName
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
local name --[[ string ]] = exports["sadoj-clothes"]:GetPlayerInventoryName(player --[[ number ]])
```
* **Paramètres:**
  * **player:** Le joueur (`PlayerId()` côté client, Server Id côté serveur).
* **Retour:**
  * **name:** Le nom de l'inventaire du joueur (son identifiant).
<!-- tabs:end -->

#### GetDressingInventoryName
<!-- tabs:start -->

#### **Export (client & serveur)**
```lua
local name --[[ string ]] = exports["sadoj-clothes"]:GetDressingInventoryName()
```
* **Retour:**
  * **name:** Le nom de l'inventaire du dressing (`dressing`).
<!-- tabs:end -->

#### GetInventoryFromName
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local inventory --[[ table ]] = exports["sadoj-clothes"]:GetInventoryFromName(name --[[ string ]])
```
* **Paramètres:**
  * **name:** Le nom de l'inventaire.
* **Retour:**
  * **inventory:** La liste des items de l'inventaire (copie), `{}` si l'inventaire n'existe pas.
<!-- tabs:end -->

#### RemoveItemFromInventoryFromUuid
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RemoveItemFromInventoryFromUuid(name --[[ string ]], itemUuid --[[ string ]])
```
* **Paramètres:**
  * **name:** Le nom de l'inventaire.
  * **itemUuid:** L'uuid de l'item à supprimer.
<!-- tabs:end -->

#### TransferItemFromInventoryToInventoryFromUuid
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:TransferItemFromInventoryToInventoryFromUuid(name --[[ string ]], itemUuid --[[ string ]], targetName --[[ string ]])
```
* **Paramètres:**
  * **name:** Le nom de l'inventaire source.
  * **itemUuid:** L'uuid de l'item à transférer.
  * **targetName:** Le nom de l'inventaire de destination.

?> La limite d'inventaire de la cible n'est pas vérifiée.
<!-- tabs:end -->

### Items

#### GetItemMenuLabel
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
local label --[[ string ]] = exports["sadoj-clothes"]:GetItemMenuLabel(item --[[ table ]])
```
* **Paramètres:**
  * **item:** L'item.
* **Retour:**
  * **label:** La métadonnée `name` de l'item si elle existe, sinon `"<drawableId> - <textureId>"`.
<!-- tabs:end -->

#### SetItemMetadata
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
local newItem --[[ table ]] = exports["sadoj-clothes"]:SetItemMetadata(item --[[ table ]], key --[[ string ]], value --[[ any ]], displayed --[[ boolean ]])
```
* **Paramètres:**
  * **item:** L'item.
  * **key:** La clé de la métadonnée.
  * **value:** La valeur. `nil` ou `"nil"` supprime la métadonnée, `"old"` garde la valeur actuelle (pour changer uniquement `displayed`).
  * **displayed:** Si la métadonnée est affichée dans l'interface.
* **Retour:**
  * **newItem:** Une copie de l'item modifiée. L'item d'origine n'est pas modifié et rien n'est sauvegardé.
<!-- tabs:end -->

#### SetItemMetadataToInventoryFromUuid
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:SetItemMetadataToInventoryFromUuid(name --[[ string ]], itemUuid --[[ string ]], metadataKey --[[ string ]], metadataValue --[[ any ]], metadataDisplayed --[[ boolean ]])
```
* **Paramètres:**
  * **name:** Le nom de l'inventaire.
  * **itemUuid:** L'uuid de l'item.
  * **metadataKey:** La clé de la métadonnée.
  * **metadataValue:** La valeur (mêmes valeurs spéciales que `SetItemMetadata`).
  * **metadataDisplayed:** Si la métadonnée est affichée dans l'interface.
<!-- tabs:end -->

### Vêtements portés

#### GetCurrentClothesFromIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local clothes --[[ table ]] = exports["sadoj-clothes"]:GetCurrentClothesFromIdentifier(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
* **Retour:**
  * **clothes:** Les vêtements portés par le joueur (voir [Vêtements portés](#vêtements-portés-clothes)).
<!-- tabs:end -->

#### GetClothesFromPed
<!-- tabs:start -->
#### **Export (client)**
```lua
local clothes --[[ table ]] = exports["sadoj-clothes"]:GetClothesFromPed(ped --[[ number ]])
```
* **Paramètres:**
  * **ped:** Le ped.
* **Retour:**
  * **clothes:** Les vêtements lus sur le ped, au format `clothes` (sans `itemUuid`, avec en plus `globalDrawableId` / `globalPropDrawableId`). Les composants vides sont ignorés.
<!-- tabs:end -->

#### ApplyClothesToOtherPed
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-clothes"]:ApplyClothesToOtherPed(ped --[[ number ]], clothes --[[ table ]])
```
* **Paramètres:**
  * **ped:** Le ped (autre que celui du joueur, ex : les joueurs endormis de `sadoj-characters`).
  * **clothes:** Les vêtements au format `clothes`. Les clés peuvent être des strings (JSON brut de la colonne `current_clothes`).

?> Les décorations (badges) sont ajoutées directement au ped, `sadoj-peddecoration` ne fonctionnant que sur le ped du joueur.
<!-- tabs:end -->

#### UndressPlayer
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-clothes"]:UndressPlayer()
```
Met le joueur en sous-vêtements sans modifier ses vêtements sauvegardés (ex : `sadoj-hairdresser`). Utiliser `ReapplyPlayerClothes` pour les remettre.
<!-- tabs:end -->

#### ReapplyPlayerClothes
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-clothes"]:ReapplyPlayerClothes()
```
Réapplique les vêtements portés sur le ped du joueur.
<!-- tabs:end -->

### Options des vêtements

#### AreFingerprintsHidden
<!-- tabs:start -->
#### **Export (client)**
```lua
local hidden --[[ boolean ]] = exports["sadoj-clothes"]:AreFingerprintsHidden()
```
* **Retour:**
  * **hidden:** `true` si le joueur porte un vêtement avec l'option `hide_fingerprints` (gants…).
#### **Export (serveur)**
```lua
local hidden --[[ boolean ]] = exports["sadoj-clothes"]:AreFingerprintsHidden(playerSrc --[[ number ]])
```
* **Paramètres:**
  * **playerSrc:** Le joueur.
* **Retour:**
  * **hidden:** `true` si le joueur porte un vêtement avec l'option `hide_fingerprints`.

?> Côté serveur, la valeur vient du state bag `fingerprintsHidden` du joueur, mis à jour par le client à chaque changement de vêtement.
<!-- tabs:end -->

### Fouille

#### SearchPlayer
<!-- tabs:start -->
#### **Export (client)**
```lua
local success --[[ boolean ]] = exports["sadoj-clothes"]:SearchPlayer(targetServerId --[[ number ]])
```
* **Paramètres:**
  * **targetServerId:** Le Server Id du joueur à fouiller.
* **Retour:**
  * **success:** `false` si la fouille n'a pas pu démarrer (cible absente, trop loin (> 2 m), fouille déjà ouverte), `true` à la fermeture de la fouille.

!> L'export est **bloquant** : il ne retourne qu'une fois l'interface fermée. La fouille se ferme toute seule si la cible s'éloigne à plus de 4 m.
<!-- tabs:end -->

#### CloseSearchNUI
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-clothes"]:CloseSearchNUI()
```
Ferme l'interface de fouille si elle est ouverte.
<!-- tabs:end -->

### Actions sur les vêtements

Une autre ressource peut ajouter des actions au menu clic droit des vêtements : sur un vêtement précis, une catégorie, un groupe, ou tous les vêtements. Elles s'affichent sous les actions de `Config.Actions`, dans l'ordre d'enregistrement.

#### RegisterClothingAction
<!-- tabs:start -->
#### **Export (client)**
```lua
local registered --[[ boolean ]] = exports["sadoj-clothes"]:RegisterClothingAction(id --[[ string ]], {
    label = "Fouiller les poches",           -- string, requis
    icon = "search",                         -- string, optionnel (défaut "zap")
    equipped = true,                         -- boolean, optionnel
    contexts = { "inventory", "dressing" },  -- string[], optionnel (défaut { "inventory" })
    match = {                                -- filtres ou fonction, optionnel (défaut : tous les vêtements)
        { type = 2, category = 11 },
        { clothingType = "Police", category = 9 },
    },
    canInteract = function(item, context)    -- optionnel
        return not IsPedInAnyVehicle(PlayerPedId(), false)
    end,
    onSelect = function(item, context)       -- requis
        exports["sadoj-clothes"]:CloseClothesMenu()
        TriggerServerEvent("mon-script:fouillePoches", item.uuid)
    end,
})
```
* **Paramètres:**
  * **id:** L'identifiant de l'action, propre à la ressource appelante (deux ressources peuvent utiliser le même). Enregistrer à nouveau un id remplace l'action, qui garde sa place dans le menu.
  * **label:** Le texte affiché dans le menu.
  * **icon:** Le nom d'une icône de `html/icons.js` (`search`, `shield`, `eye`, `tag`…).
  * **equipped:** `true` : vêtement porté uniquement, `false` : vêtement non porté uniquement, `nil` : toujours. Si l'état ne correspond pas, l'action est grisée avec une info-bulle.
  * **contexts:** Où l'action apparaît :
    * `"inventory"` : inventaire normal (`F9`), panneau des vêtements portés compris ;
    * `"dressing"` : dressing, vêtements de l'inventaire du joueur ;
    * `"dressingStorage"` : dressing, vêtements rangés dans le dressing.
  * **match:** Les vêtements concernés (voir ci-dessous). `nil`, `{}` ou `{ {} }` = tous les vêtements.
  * **canInteract:** Renvoie `false` pour cacher l'action.
  * **onSelect:** Appelée au clic.
* **Retour:**
  * **registered:** `false` si la définition est invalide (champ inconnu, contexte inconnu, filtre mal formé…). L'erreur est affichée dans la console F8 avec le nom de la ressource appelante.

**Filtres `match`** : une liste de filtres. L'action apparaît si **un** des filtres correspond, et un filtre correspond si **tous** ses champs correspondent.

| Champ | Correspond si |
|---|---|
| `key` | clé du vêtement `type_category_collection_drawableId_textureId`, avec ou sans `_textureId` |
| `type` | `CLOTHING_TYPES` du vêtement |
| `category` | catégorie du vêtement |
| `collection` | collection du vêtement (`""` = jeu de base) |
| `drawableId` | modèle du vêtement (ou id du groupe de gants) |
| `textureId` | texture du vêtement |
| `clothingType` | le vêtement a ce type de boutique (`data/clothing_types.json` : `"Police"`, `"Pompier"`…) |
| `option` | le vêtement a cette option (`data/clothing_options.json` : `night_vision`, `ballistic_helmet`…) |
| `gender` | `"male"` ou `"female"`, genre du personnage |

| `match` | Vêtements concernés |
|---|---|
| `{ { type = 2, category = 11 } }` | une catégorie |
| `{ { type = 2, category = 11, collection = "mp_m_sadoj_01", drawableId = 23 } }` | un modèle, toutes textures |
| `{ { key = "2_11_mp_m_sadoj_01_23_1" } }` | un vêtement précis |
| `{ { clothingType = "Police" } }` | un groupe de boutique |
| `{ { option = "night_vision" } }` | un groupe d'option |
| `function(item, context) return ... end` | ce que la fonction décide |

**Paramètres reçus** par `onSelect`, `canInteract` et `match` (fonction) :
  * **item:** Une copie de l'item (voir [Item](#item-vêtement-dinventaire)), avec en plus `equipped` (`true` si le joueur le porte).
  * **context:** Le contexte du menu (`"inventory"`, `"dressing"` ou `"dressingStorage"`).

!> Un champ inconnu dans un filtre fait refuser l'action, pour qu'une faute de frappe ne la mette pas sur tous les vêtements. Un filtre seul doit aussi être dans une liste : `match = { { category = 11 } }`.

?> Les conditions sont vérifiées à l'ouverture du menu puis à nouveau au clic. Le menu reste ouvert pendant `onSelect` : appeler `CloseClothesMenu` avant d'ouvrir une autre interface. Une erreur dans une de ces fonctions est affichée dans la console F8 sans affecter l'inventaire. Les actions d'une ressource arrêtée sont supprimées automatiquement.

!> En `dressingStorage`, l'item vient de l'interface et n'est jamais porté (une action avec `equipped = true` n'y apparaît pas). Toute action qui modifie des données doit être validée côté serveur par la ressource appelante.
<!-- tabs:end -->

#### RemoveClothingAction
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-clothes"]:RemoveClothingAction(id --[[ string ]])
```
* **Paramètres:**
  * **id:** L'identifiant donné à `RegisterClothingAction` par la ressource appelante.
<!-- tabs:end -->

#### IsClothingItemEquipped
<!-- tabs:start -->
#### **Export (client)**
```lua
local equipped --[[ boolean ]] = exports["sadoj-clothes"]:IsClothingItemEquipped(uuid --[[ string ]])
```
* **Paramètres:**
  * **uuid:** L'uuid de l'item.
* **Retour:**
  * **equipped:** `true` si le joueur porte cet item.
<!-- tabs:end -->

#### GetEquippedClothes
<!-- tabs:start -->
#### **Export (client)**
```lua
local clothes --[[ table ]] = exports["sadoj-clothes"]:GetEquippedClothes()
```
* **Retour:**
  * **clothes:** Une copie des vêtements portés par le joueur (voir [Vêtements portés](#vêtements-portés-clothes)).
<!-- tabs:end -->

#### CloseClothesMenu
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-clothes"]:CloseClothesMenu()
```
Ferme le menu vêtements (inventaire, dressing) s'il est ouvert.
<!-- tabs:end -->

### Tenues personnelles

Une tenue : `{ uuid, name, outfitType, category, clothes }`. `category` est l'identifiant de l'entreprise pour une tenue de type `OUTFIT_TYPES.COMPANY`.

#### GetOutfitsFromIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local outfits --[[ table ]] = exports["sadoj-clothes"]:GetOutfitsFromIdentifier(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
* **Retour:**
  * **outfits:** Les tenues du joueur, `{ [uuid] = outfit }`.
<!-- tabs:end -->

#### CreateOutfitForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-clothes"]:CreateOutfitForIdentifier(identifier --[[ string ]], outfitName --[[ string ]], clothes --[[ table ]], outfitType --[[ number ]][, category --[[ string ]], uuid --[[ string ]]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **outfitName:** Le nom de la tenue.
  * **clothes:** Les vêtements de la tenue (format `clothes`).
  * **outfitType:** Le type de tenue (`OUTFIT_TYPES`).
  * **category:** L'identifiant de l'entreprise (obligatoire si `outfitType` vaut `OUTFIT_TYPES.COMPANY`).
  * **uuid:** (optionnel) L'uuid à utiliser. Généré si absent.
* **Retour:**
  * **uuid:** L'uuid de la tenue.

?> Seule la tenue est enregistrée : aucun vêtement n'est ajouté à l'inventaire.
<!-- tabs:end -->

#### RenameOutfitForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RenameOutfitForIdentifier(identifier --[[ string ]], uuid --[[ string ]], newName --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **uuid:** L'uuid de la tenue.
  * **newName:** Le nouveau nom.
<!-- tabs:end -->

#### UpdateOutfitClothesForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:UpdateOutfitClothesForIdentifier(identifier --[[ string ]], uuid --[[ string ]], clothes --[[ table ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **uuid:** L'uuid de la tenue.
  * **clothes:** Les nouveaux vêtements de la tenue.
<!-- tabs:end -->

#### DeleteOutfitForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:DeleteOutfitForIdentifier(identifier --[[ string ]], uuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **uuid:** L'uuid de la tenue. Elle est aussi retirée de toutes les catégories.
<!-- tabs:end -->

#### GivePersonalOutfit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local result --[[ table ]] = exports["sadoj-clothes"]:GivePersonalOutfit(giverSource --[[ number ]], outfitUuid --[[ string ]], targetServerId --[[ number ]])
```
* **Paramètres:**
  * **giverSource:** Le joueur qui donne la tenue.
  * **outfitUuid:** L'uuid de la tenue du donneur.
  * **targetServerId:** Le joueur qui reçoit la tenue.
* **Retour:**
  * **result:** `{ given = number, missing = number, full = boolean, givenUuids = { uuid, ... } }`, ou `nil` en cas d'erreur.
    * **given:** Le nombre de pièces données.
    * **missing:** Le nombre de pièces absentes de l'inventaire du donneur.
    * **full:** `true` si l'inventaire de la cible était plein.

?> Contrairement aux tenues d'entreprise, ce sont les **vrais items** du donneur qui sont déplacés vers l'inventaire de la cible. La tenue est ajoutée aux tenues de la cible ; le donneur garde la sienne.
<!-- tabs:end -->

### Catégories de tenues personnelles

Une catégorie : `{ uuid, name, outfits = { outfitUuid, ... } }`. Une tenue peut être dans plusieurs catégories. Nom limité à 30 caractères, nombre de catégories limité par `Config.MaxOutfitCategories`.

#### GetOutfitCategoriesFromIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local categories --[[ table ]] = exports["sadoj-clothes"]:GetOutfitCategoriesFromIdentifier(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
* **Retour:**
  * **categories:** Les catégories du joueur, `{ [uuid] = category }`.
<!-- tabs:end -->

#### CreateOutfitCategoryForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-clothes"]:CreateOutfitCategoryForIdentifier(identifier --[[ string ]], name --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **name:** Le nom de la catégorie.
* **Retour:**
  * **uuid:** L'uuid de la catégorie, `nil` si le nom est vide ou si la limite est atteinte.
<!-- tabs:end -->

#### RenameOutfitCategoryForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RenameOutfitCategoryForIdentifier(identifier --[[ string ]], uuid --[[ string ]], newName --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **uuid:** L'uuid de la catégorie.
  * **newName:** Le nouveau nom.
<!-- tabs:end -->

#### DeleteOutfitCategoryForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:DeleteOutfitCategoryForIdentifier(identifier --[[ string ]], uuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **uuid:** L'uuid de la catégorie. Les tenues de la catégorie sont conservées.
<!-- tabs:end -->

#### AddOutfitsToCategoryForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:AddOutfitsToCategoryForIdentifier(identifier --[[ string ]], categoryUuid --[[ string ]], outfitUuids --[[ table ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **categoryUuid:** L'uuid de la catégorie.
  * **outfitUuids:** La liste des uuid de tenues à ajouter. Les doublons et les tenues inexistantes sont ignorés.
<!-- tabs:end -->

#### RemoveOutfitFromCategoryForIdentifier
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RemoveOutfitFromCategoryForIdentifier(identifier --[[ string ]], categoryUuid --[[ string ]], outfitUuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **categoryUuid:** L'uuid de la catégorie.
  * **outfitUuid:** L'uuid de la tenue à retirer (la tenue est conservée).
<!-- tabs:end -->

### Tenues d'entreprise

Une tenue d'entreprise est un **modèle** : `{ uuid, name, clothes, createdBy }`. La donner crée de nouveaux items à chaque fois (stock illimité). Les entreprises et la permission de gérer leurs tenues sont configurées dans `Config.Companies`.

#### GetCompanyOutfits
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local outfits --[[ table ]] = exports["sadoj-clothes"]:GetCompanyOutfits(companyId --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
* **Retour:**
  * **outfits:** Les tenues de l'entreprise, `{ [uuid] = outfit }`.
<!-- tabs:end -->

#### CreateCompanyOutfit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-clothes"]:CreateCompanyOutfit(companyId --[[ string ]], outfitName --[[ string ]], clothes --[[ table ]][, createdBy --[[ string ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **outfitName:** Le nom de la tenue.
  * **clothes:** Les vêtements de la tenue (format `clothes`).
  * **createdBy:** (optionnel) L'identifiant du créateur.
* **Retour:**
  * **uuid:** L'uuid de la tenue.
<!-- tabs:end -->

#### RenameCompanyOutfit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RenameCompanyOutfit(companyId --[[ string ]], uuid --[[ string ]], newName --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid de la tenue.
  * **newName:** Le nouveau nom.
<!-- tabs:end -->

#### UpdateCompanyOutfitClothes
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:UpdateCompanyOutfitClothes(companyId --[[ string ]], uuid --[[ string ]], clothes --[[ table ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid de la tenue.
  * **clothes:** Les nouveaux vêtements (le nom, l'uuid et les groupes sont conservés).
<!-- tabs:end -->

#### DeleteCompanyOutfit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:DeleteCompanyOutfit(companyId --[[ string ]], uuid --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid de la tenue. Elle est aussi retirée de tous les groupes.
<!-- tabs:end -->

#### GiveCompanyOutfitItems
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local success --[[ boolean ]] = exports["sadoj-clothes"]:GiveCompanyOutfitItems(companyId --[[ string ]], outfitUuid --[[ string ]], targetServerId --[[ number ]][, giverSource --[[ number ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **outfitUuid:** L'uuid de la tenue.
  * **targetServerId:** Le joueur qui reçoit la tenue.
  * **giverSource:** (optionnel) Le joueur qui donne la tenue, pour lui envoyer une notification.
* **Retour:**
  * **success:** `false` si la tenue n'existe pas.

?> Chaque pièce est ajoutée à l'inventaire de la cible et la tenue est ajoutée à ses tenues (type `OUTFIT_TYPES.COMPANY`). La limite d'inventaire n'est pas vérifiée.
<!-- tabs:end -->

### Groupes de tenues d'entreprise

Un groupe : `{ uuid, name, outfits = { outfitUuid, ... }, createdBy }`. Donner un groupe donne toutes ses tenues d'un coup.

#### GetCompanyOutfitGroups
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local groups --[[ table ]] = exports["sadoj-clothes"]:GetCompanyOutfitGroups(companyId --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
* **Retour:**
  * **groups:** Les groupes de l'entreprise, `{ [uuid] = group }`.
<!-- tabs:end -->

#### CreateCompanyOutfitGroup
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-clothes"]:CreateCompanyOutfitGroup(companyId --[[ string ]], groupName --[[ string ]], outfitUuids --[[ table ]][, createdBy --[[ string ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **groupName:** Le nom du groupe.
  * **outfitUuids:** La liste des uuid de tenues du groupe (doublons et tenues inexistantes ignorés).
  * **createdBy:** (optionnel) L'identifiant du créateur.
* **Retour:**
  * **uuid:** L'uuid du groupe.
<!-- tabs:end -->

#### CreateCompanyOutfitInGroup
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local outfitUuid --[[ string ]] = exports["sadoj-clothes"]:CreateCompanyOutfitInGroup(companyId --[[ string ]], groupUuid --[[ string ]], outfitName --[[ string ]], clothes --[[ table ]][, createdBy --[[ string ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **groupUuid:** L'uuid du groupe.
  * **outfitName:** Le nom de la tenue.
  * **clothes:** Les vêtements de la tenue.
  * **createdBy:** (optionnel) L'identifiant du créateur.
* **Retour:**
  * **outfitUuid:** L'uuid de la tenue créée et ajoutée au groupe.
<!-- tabs:end -->

#### RenameCompanyOutfitGroup
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RenameCompanyOutfitGroup(companyId --[[ string ]], uuid --[[ string ]], newName --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du groupe.
  * **newName:** Le nouveau nom.
<!-- tabs:end -->

#### SetCompanyOutfitGroupOutfits
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:SetCompanyOutfitGroupOutfits(companyId --[[ string ]], uuid --[[ string ]], outfitUuids --[[ table ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du groupe.
  * **outfitUuids:** La nouvelle liste des tenues du groupe (remplace l'ancienne).
<!-- tabs:end -->

#### AddOutfitsToCompanyGroup
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:AddOutfitsToCompanyGroup(companyId --[[ string ]], groupUuid --[[ string ]], outfitUuids --[[ table ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **groupUuid:** L'uuid du groupe.
  * **outfitUuids:** La liste des uuid de tenues à ajouter (doublons et tenues inexistantes ignorés).
<!-- tabs:end -->

#### RemoveOutfitFromCompanyGroup
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RemoveOutfitFromCompanyGroup(companyId --[[ string ]], groupUuid --[[ string ]], outfitUuid --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **groupUuid:** L'uuid du groupe.
  * **outfitUuid:** L'uuid de la tenue à retirer (la tenue est conservée).
<!-- tabs:end -->

#### DeleteCompanyOutfitGroup
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:DeleteCompanyOutfitGroup(companyId --[[ string ]], uuid --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du groupe. Ses tenues sont conservées.
<!-- tabs:end -->

#### GiveCompanyOutfitGroupItems
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local success --[[ boolean ]] = exports["sadoj-clothes"]:GiveCompanyOutfitGroupItems(companyId --[[ string ]], groupUuid --[[ string ]], targetServerId --[[ number ]][, giverSource --[[ number ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **groupUuid:** L'uuid du groupe.
  * **targetServerId:** Le joueur qui reçoit les tenues.
  * **giverSource:** (optionnel) Le joueur qui donne les tenues, pour lui envoyer une notification.
* **Retour:**
  * **success:** `true` si au moins une pièce a été donnée.
<!-- tabs:end -->

### Équipements d'entreprise (kits)

Un kit est une liste de pièces avec une quantité (ex : 3 vestes, 2 chapeaux) : `{ uuid, name, pieces = { [pieceKey] = piece }, createdBy, createdAt }`. Une pièce : `{ type, category, collection, drawableId, textureId, paletteId, quantity }`. La quantité est limitée à `20`. Contrairement à une tenue, un kit n'est pas ajouté aux tenues du joueur.

`pieceKey` vaut `"<type>:<category>:<collection>:<drawableId>:<textureId>:<paletteId>"`.

#### GetCompanyKits
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local kits --[[ table ]] = exports["sadoj-clothes"]:GetCompanyKits(companyId --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
* **Retour:**
  * **kits:** Les kits de l'entreprise, `{ [uuid] = kit }`.
<!-- tabs:end -->

#### CreateCompanyKit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-clothes"]:CreateCompanyKit(companyId --[[ string ]], kitName --[[ string ]], clothes --[[ table ]][, createdBy --[[ string ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **kitName:** Le nom du kit.
  * **clothes:** Les vêtements (format `clothes`), une pièce de chaque.
  * **createdBy:** (optionnel) L'identifiant du créateur.
* **Retour:**
  * **uuid:** L'uuid du kit.
<!-- tabs:end -->

#### RenameCompanyKit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:RenameCompanyKit(companyId --[[ string ]], uuid --[[ string ]], newName --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du kit.
  * **newName:** Le nouveau nom.
<!-- tabs:end -->

#### AddClothesToCompanyKit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local added --[[ number ]] = exports["sadoj-clothes"]:AddClothesToCompanyKit(companyId --[[ string ]], uuid --[[ string ]], clothes --[[ table ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du kit.
  * **clothes:** Les vêtements à ajouter (+1 par pièce, une pièce déjà présente voit sa quantité augmenter).
* **Retour:**
  * **added:** Le nombre de pièces ajoutées, `0` si le kit n'existe pas.
<!-- tabs:end -->

#### SetCompanyKitPieceQuantity
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:SetCompanyKitPieceQuantity(companyId --[[ string ]], uuid --[[ string ]], pieceKey --[[ string ]], quantity --[[ number ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du kit.
  * **pieceKey:** La clé de la pièce.
  * **quantity:** La nouvelle quantité (entre `0` et `20`). `0` retire la pièce du kit.
<!-- tabs:end -->

#### DeleteCompanyKit
<!-- tabs:start -->
#### **Export (serveur)**
```lua
exports["sadoj-clothes"]:DeleteCompanyKit(companyId --[[ string ]], uuid --[[ string ]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du kit.
<!-- tabs:end -->

#### GiveCompanyKitItems
<!-- tabs:start -->
#### **Export (serveur)**
```lua
local success --[[ boolean ]] = exports["sadoj-clothes"]:GiveCompanyKitItems(companyId --[[ string ]], uuid --[[ string ]], targetServerId --[[ number ]][, giverSource --[[ number ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
  * **uuid:** L'uuid du kit.
  * **targetServerId:** Le joueur qui reçoit le kit.
  * **giverSource:** (optionnel) Le joueur qui donne le kit, pour lui envoyer une notification (avec le nombre de pièces non données).
* **Retour:**
  * **success:** `true` si au moins une pièce a été donnée.

?> S'arrête quand la limite d'inventaire de la cible est atteinte.
<!-- tabs:end -->

## Événements

### sadoj-clothes:server:OnCurrentClothesUpdate
<!-- tabs:start -->
#### **Événement (serveur)**
```lua
AddEventHandler("sadoj-clothes:server:OnCurrentClothesUpdate", function(identifier --[[ string ]], clothes --[[ table ]])
end)
```
Déclenché quand les vêtements portés d'un joueur sont sauvegardés (utilisé par `sadoj-characters` pour les peds des joueurs endormis).
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **clothes:** Les nouveaux vêtements portés (format `clothes`).
<!-- tabs:end -->

### sadoj-clothes:inventory:refreshed
<!-- tabs:start -->
#### **Événement (serveur)**
```lua
AddEventHandler("sadoj-clothes:inventory:refreshed", function(name --[[ string ]], inventory --[[ table ]])
end)
```
Déclenché à chaque sauvegarde d'un inventaire.
* **Paramètres:**
  * **name:** Le nom de l'inventaire.
  * **inventory:** Le nouveau contenu de l'inventaire.
#### **Événement (client)**
```lua
RegisterNetEvent("sadoj-clothes:inventory:refreshed", function(name --[[ string ]], inventory --[[ table ]])
end)
```
Reçu uniquement par les clients abonnés à l'inventaire (le joueur pour son propre inventaire, le fouilleur pendant une fouille…). Pour s'abonner / se désabonner à un inventaire :
```lua
TriggerServerEvent("sadoj-clothes:server:AddListenerToInventory", name --[[ string ]])
TriggerServerEvent("sadoj-clothes:server:RemoveListenerToInventory", name --[[ string ]])
```
<!-- tabs:end -->

### Limite d'inventaire

`Config.InventoryLimit` s'applique aux joueurs sans métier configuré dans `Config.InventoryLimitByJob`. Un joueur avec plusieurs métiers configurés prend la limite la plus haute. `0` = pas de limite.

```lua
Config.InventoryLimitByJob = {
    ["SAPD"] = 200,                                -- même limite pour tous les grades
    ["SAFD"] = { ["Chief"] = 300, default = 180 }, -- limite par grade
}
```