# sadoj-inventory

> Auteur de la page: Pierre

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-inventory`

Ce script contient de système d'inventaire dont:

- L'inventaire des joueurs
- L'inventaire des véhicules
- Les coffres
- Les magasins
- Le système de fabrication

La configuration ne sera pas documentée ici, il faudra vous référer directement aux fichiers de configuration.

Chaque inventaire possède un nom (ou identifiant) unique et bien particulier. Chaque coffre, inventaire de joueurs et inventaire de véhicules possèdent un nom unique.

De manière générale, il est préférable dans vos scripts de coder ce qui concerne l'inventaire côté serveur.

Un inventaire est un simple tableau d'items. Chaque item est un tableau contenant les informations suivantes:

- `name`: Nom de l'item (string)
- `uuid`: Identifiant unique de l'item (string)
- `quantity`: Quantité de l'item (integer)
- `label`: Nom d'affichage de l'item (string)
- `desc`: Description de l'item (string|nil)
- `weight`: Poids de l'item en gramme (integer)
- `category`: Catégorie de l'item (string|nil)
- `badge`: Nom de la texture de l'icône de l'item (string|nil)
- `unique`: Si vrai, l'item ne se combinnera pas avec d'autres même si l'item est identique (boolean)
- `actions`: Tableau avec comme clé le nom de l'action et comme valeur le nom d'affichage de l'action (table)
- `metadata`: Tableau avec comme clé le nom de la métadonnée et comme valeur un tableau avec comme clés `value` et `displayed` (table)

## Utilisation

### Récupérer le nom d'un inventaire

#### Les joueurs

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local name --[[ string ]] = exports["sadoj-inventory"]:GetPlayerInventoryName(player --[[ Player ]])
```

* **Paramètres:**
  * **player:** Joueur dont on veut récupérer le nom de l'inventaire.
* **Résultat:**
  * **name:** Nom de l'inventaire.

<!-- tabs:end -->

#### Les véhicules

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local name --[[ string ]] = exports["sadoj-inventory"]:GetVehicleInventoryName(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule dont on veut récupérer le nom de l'inventaire.
* **Résultat:**
    * **name:** Nom de l'inventaire.

<!-- tabs:end -->

#### Les coffres

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local name --[[ string ]] = exports["sadoj-inventory"]:GetSafeInventoryName(safe --[[ string ]])
```

* **Paramètres:**
  * **safe:** Nom du coffre dont on veut récupérer le nom de l'inventaire.
* **Résultat:**
    * **name:** Nom de l'inventaire.

<!-- tabs:end -->

### Récupérer un inventaire

> [!ATTENTION]
> Ces exports sont réservés uniquement aux scripts necessitant un traitement particulier de l'inventaire. Il est préférable d'utiliser les autres exports.

#### Tout l'inventaire

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local inventory --[[ table ]] = exports["sadoj-inventory"]:GetInventoryFromName(name --[[ string ]])
```

* **Paramètres:**
  * **name:** Nom de l'inventaire.
* **Résultat:**
    * **inventory:** Inventaire.

<!-- tabs:end -->

#### Avec un filtre de recherche

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local inventory --[[ table ]] = exports["sadoj-inventory"]:GetInventoryItemsWithCheckFunction(name --[[ string ]], checkFunction --[[ function ]])

-- Exemple de checkFunction
function checkFunction(item --[[ table ]])
    return item.name == "couscous"
end
```

* **Paramètres:**
  * **name:** Nom de l'inventaire.
  * **checkFunction:** Fonction de filtrage.
* **Résultat:**
    * **inventory:** Inventaire filtré.

<!-- tabs:end -->

### Récupérer la quantité d'un item dans un inventaire

#### Depuis un filtre de recherche

<!-- tabs:start -->

```lua
local quantity --[[ number ]] = exports["sadoj-inventory"]:GetInventoryItemCountWithCheckFunction(inventory --[[ table ]], checkFunction --[[ function ]])

-- Exemple de checkFunction:
function checkFunction(item)
    return item.name == "couscous"
end
```

* **Paramètres:**
  * **inventory:** Inventaire.
  * **checkFunction:** Fonction de vérification.
* **Résultat:**
    * **quantity:** Quantité de l'item.

<!-- tabs:end -->

#### Depuis le nom de l'item

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local quantity --[[ number ]] = exports["sadoj-inventory"]:GetInventoryItemCountFromName(inventoryName --[[ string ]], itemName --[[ string ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
* **Résultat:**
    * **quantity:** Quantité de l'item.

<!-- tabs:end -->

### Savoir si un item est présent dans un inventaire avec une quantité spécifique

#### Depuis un filtre de recherche

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local isPresent --[[ boolean ]] = exports["sadoj-inventory"]:IsInventoryHasItemCountWithCheckFunction(inventoryName --[[ string ]], checkFunction --[[ function ]], count --[[ number ]])

-- Exemple de checkFunction:
local function checkFunction(item)
    return item.name == "couscous"
end
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **checkFunction:** Fonction de vérification.
  * **count:** Quantité à vérifier.
* **Résultat:**
    * **isPresent:** Booléen indiquant si l'inventaire contient l'item avec la quantité spécifiée.

<!-- tabs:end -->

#### Depuis le nom de l'item

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local isPresent --[[ boolean ]] = exports["sadoj-inventory"]:IsInventoryHasItemCountFromName(inventoryName --[[ string ]], itemName --[[ string ]], count --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **count:** Quantité de l'item.
* **Résultat:**
    * **isPresent:** Booléen indiquant si l'inventaire contient l'item avec la quantité spécifiée.

<!-- tabs:end -->

### Supprimer un item dans un inventaire

#### Depuis l'UUID de l'item

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:RemoveItemFromInventoryFromUuid", inventoryName --[[ string ]], uuid --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **uuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:RemoveItemFromInventoryFromUuid", inventoryName --[[ string ]], uuid --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **uuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.

<!-- tabs:end -->

#### Depuis le nom de l'item

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:RemoveItemFromInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:RemoveItemFromInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

<!-- tabs:end -->

### Ajouter un item dans un inventaire

#### Depuis un item

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:AddItemToInventory", inventoryName --[[ string ]], item --[[ table ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **item:** Item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:AddItemToInventory", inventoryName --[[ string ]], item --[[ table ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **item:** Item.

<!-- tabs:end -->

#### Depuis le nom de l'item (sans métadonnées)

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:AddItemToInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:AddItemToInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

<!-- tabs:end -->

#### Depuis le nom de l'item (avec métadonnées)

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:AddItemToInventoryFromNameWithMetadata", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]], metadata --[[ table ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.
  * **metadata:** Métadonnées de l'item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:AddItemToInventoryFromNameWithMetadata", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]], metadata --[[ table ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.
  * **metadata:** Métadonnées de l'item.

<!-- tabs:end -->

### Définir les métadonnées d'un item dans un inventaire

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:SetItemMetadataToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], metadataKey --[[ string ]], metadataValue --[[ any ]], metadataDisplayed --[[ boolean ]], quantity --[[ number|nil ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemUuid:** UUID de l'item.
  * **metadataKey:** Clé de la métadonnée.
  * **metadataValue:** Valeur de la métadonnée.
  * **metadataDisplayed:** Booléen indiquant si la métadonnée est affichée.
  * **quantity:** Quantité de l'item. Si nil, cela définit la métadonnée sur tout l'item. Si non nil, cela définit la métadonnée sur la quantité spécifiée en créant donc un nouvel item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:SetItemMetadataToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], metadataKey --[[ string ]], metadataValue --[[ any ]], metadataDisplayed --[[ boolean ]], quantity --[[ number|nil ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemUuid:** UUID de l'item.
  * **metadataKey:** Clé de la métadonnée.
  * **metadataValue:** Valeur de la métadonnée.
  * **metadataDisplayed:** Booléen indiquant si la métadonnée est affichée.
  * **quantity:** Quantité de l'item. Si nil, cela définit la métadonnée sur tout l'item. Si non nil, cela définit la métadonnée sur la quantité spécifiée en créant donc un nouvel item.

<!-- tabs:end -->

### Transférer un item d'un inventaire à un autre

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:TransferItemFromInventoryToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], quantity --[[ number ]], targetInventoryName --[[ string ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire source.
  * **itemUuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.
  * **targetInventoryName:** Nom de l'inventaire cible.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:TransferItemFromInventoryToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], quantity --[[ number ]], targetInventoryName --[[ string ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire source.
  * **itemUuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.
  * **targetInventoryName:** Nom de l'inventaire cible.

<!-- tabs:end -->

### Écouter lors d'une action sur un item

<!-- tabs:start -->

### **Client**

```lua
RegisterNetEvent("sadoj-inventory:itemAction", function(action --[[ string ]], item --[[ table ]], selectAll --[[ boolean ]])
  -- Votre code ici.
end)
```

* **Paramètres:**
  * **action:** Action (par exemple `give`, `throw`, `use`, etc...).
  * **item:** Item.
  * **selectAll:** Booléen indiquant si l'action a été effectuée sur toute la quantité de l'item.

### **Serveur**

```lua
RegisterServerEvent("sadoj-inventory:itemAction", function(action --[[ string ]], item --[[ table ]] --[[ selectAll --[[ boolean ]]])
  -- Votre code ici.
end)
```

* **Paramètres:**
  * **action:** Action (par exemple `give`, `throw`, `use`, etc...).
  * **item:** Item.
  * **selectAll:** Booléen indiquant si l'action a été effectuée sur toute la quantité de l'item.

<!-- tabs:end -->

### Écouter le changement de poids de l'inventaire

<!-- tabs:start -->

### **Client**

```lua
RegisterNetEvent("sadoj-inventory:updateWeight", function(weight --[[ number ]])
  -- Votre code ici.
end)
```

* **Paramètres:**
  * **weight:** Poids de l'inventaire (en kg).

### **Serveur**

```lua
RegisterServerEvent("sadoj-inventory:updateWeight", function(weight --[[ number ]])
  -- Votre code ici, possibilité d'utiliser `source` pour récupérer l'ID du joueur.
end)
```

* **Paramètres:**
  * **weight:** Poids de l'inventaire (en kg).

<!-- tabs:end -->

### Écouter quand on s'équipe d'une arme

<!-- tabs:start -->

### **Client**

```lua
RegisterNetEvent("sadoj-inventory:equipWeapon", function(item --[[ table ]], weaponConfig --[[ table ]])
  -- Votre code ici.
end)
```

* **Paramètres:**
  * **item:** Item.
  * **weaponConfig:** Configuration de l'arme.

### **Serveur**

```lua
RegisterServerEvent("sadoj-inventory:equipWeapon", function(item --[[ table ]], weaponConfig --[[ table ]])
  -- Votre code ici, possibilité d'utiliser `source` pour récupérer l'ID du joueur.
end)
```

* **Paramètres:**
  * **item:** Item.
  * **weaponConfig:** Configuration de l'arme.

<!-- tabs:end -->

### Écouter quand on se déséquipe d'une arme

<!-- tabs:start -->

### **Client**

```lua
RegisterNetEvent("sadoj-inventory:deequipWeapon", function(item --[[ table ]], weaponConfig --[[ table ]])
  -- Votre code ici.
end)
```

* **Paramètres:**
  * **item:** Item.
  * **weaponConfig:** Configuration de l'arme.

### **Serveur**

```lua
RegisterServerEvent("sadoj-inventory:deequipWeapon", function(item --[[ table ]], weaponConfig --[[ table ]])
  -- Votre code ici, possibilité d'utiliser `source` pour récupérer l'ID du joueur.
end)
```

* **Paramètres:**
  * **item:** Item.
  * **weaponConfig:** Configuration de l'arme.

<!-- tabs:end -->

### Bloquer l'ouverture de l'inventaire

<!-- tabs:start -->

### **Export (client)**

```lua
local token = --[[ string ]] = exports["sadoj-inventory"]:BlockInventory()
```

* **Retourne:**
  * **token:** Token de déblocage de l'inventaire.

<!-- tabs:end -->

### Débloquer l'ouverture de l'inventaire

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-inventory"]:UnblockInventory(token --[[ string ]])
```

* **Paramètres:**
  * **token:** Token de déblocage de l'inventaire.

<!-- tabs:end -->

### Ajouter une action personnalisée sur un item

<!-- tabs:start -->

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:server:AddItemAction", itemName --[[ string ]], action --[[ string ]], label --[[ string ]][, selectAllLabel --[[ string ]]])
```

* **Paramètres:**
  * **itemName:** Nom de l'item.
  * **action:** Action (par exemple `give`, `throw`, `use`, etc...).
  * **label:** Label de l'action (par exemple `Donner`, `Jeter`, `Utiliser`, etc...).
  * **selectAllLabel:** Label de l'action pour tout sélectionner (par exemple `Tout donner`, `Tout jeter`, etc...).

<!-- tabs:end -->
