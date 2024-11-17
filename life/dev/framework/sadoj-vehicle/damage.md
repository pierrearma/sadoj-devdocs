# sadoj-vehicle - Dégâts

> Auteur de la page: Thomas.

---

Ce module permet de gérer la synchronisation des dégâts des véhicules.


# Général

Chaque dégâts (visuel et mécanique) d'un véhicule est stocké sous forme de tableau :

* **exploded** : si le véhicule est explosé. (type `boolean`)
* **engineHealth** : la santé du moteur. (type `number`)  *(**Minimum**: `-4000`, **Maximum:** `1000`)*
  * **-4000**: Le moteur est détruit.
  * **0 et moins**: Le moteur prend feu et la santé décline rapidement.
  * **300**: Le moteur fume et perd en fonctionnalité.
  * **1000**: Le moteur est en parfait état.
* **bodyHealth** : la santé de la carrosserie. (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **petrolTankHealth** : la santé du réservoir. (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
  * **650**: Le réservoir commence à fuir.
* **heliMainRotorHealth** : la santé du rotor principal (uniquement pour les hélicoptères). (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **heliTailRotorHealth** : la santé du rotor arrière (uniquement pour les hélicoptères). (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **deformations** : Un tableau contenant chaque déformation de la carrosserie. (type `table`)
  ```lua
    {
      {{"x" :offsetX --[[ integer ]], "y":offsetY --[[ integer ]], "z":offsetZ --[[ integer ]]}, damageStrength --[[ integer ]]},
      {{"x" :offsetX --[[ integer ]], "y":offsetY --[[ integer ]], "z":offsetZ --[[ integer ]]}, damageStrength --[[ integer ]]},
      ...
    }
  ```
* **windows** : Un tableau contenant chaque fenêtre du véhicule. (type `table`)
  ```lua
    {
      damaged = {
        [windowIndex --[[ integer ]]] = isDamaged --[[ boolean ]],
        ...
      },
      open = {
        [windowIndex --[[ integer ]]] = isOpen --[[ boolean ]],
        ...
      }
    }
  ```
* **doors** : Un tableau contenant chaque porte du véhicule. (type `table`)
  ```lua
    {
      broken = {
        [doorIndex --[[ integer ]]] = isDamaged --[[ boolean ]],
        ...
      },
    }
  ```
* **wheels** : Un tableau contenant chaque roue du véhicule. (type `table`)
  ```lua
    {
      health = {
        [wheelIndex --[[ integer ]]] = wheelHealth --[[ number ]],
        ...
      },
      broken = {
        [wheelIndex --[[ integer ]]] = isBroken --[[ boolean ]],
        ...
      }
    }
  ```
* **tyres** : Un tableau contenant chaque pneu du véhicule. (type `table`)
  ```lua
    {
      health = {
        [tyreIndex --[[ integer ]]] = tyreHealth --[[ number ]],
        ...
      },
      burst = {
        [tyreIndex --[[ integer ]]] = isBurst --[[ boolean ]],
        ...
      }
    }
  ```


## Récupérer les dégâts d'un véhicule

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local damage --[[ table ]] = exports["sadoj-vehicle"]:GetAllVehicleDamage(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **damage:** les dégâts du véhicule.
<!-- tabs:end -->

## Appliquer les dégâts d'un véhicule

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetAllVehicleDamage(vehicle --[[ vehicle ]], damage --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **damage:** les dégâts du véhicule.
<!-- tabs:end -->

## Réparer tout les dégâts visuels d'un véhicule

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:FixAllVehicleVisualDamage(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
<!-- tabs:end -->




# Moteur

## Définir la santé du moteur

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleEngineHealth(vehicle --[[ vehicle ]], engineHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **engineHealth:** la santé du moteur. *(**Minimum**: `-4000`, **Maximum:** `1000`)*
<!-- tabs:end -->

## Récupérer la santé du moteur

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local engineHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleEngineHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **engineHealth:** la santé du moteur.
<!-- tabs:end -->

## Définir la santé du rotor principal

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetHeliMainRotorHealth(vehicle --[[ vehicle ]], heliMainRotorHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **heliMainRotorHealth:** la santé du rotor principal. *(**Minimum**: `0`, **Maximum:** `1000`)*
<!-- tabs:end -->

## Récupérer la santé du rotor principal

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local heliMainRotorHealth --[[ number ]] = exports["sadoj-vehicle"]:GetHeliMainRotorHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **heliMainRotorHealth:** la santé du rotor principal.
<!-- tabs:end -->

## Définir la santé du rotor arrière

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetHeliTailRotorHealth(vehicle --[[ vehicle ]], heliTailRotorHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **heliTailRotorHealth:** la santé du rotor arrière. *(**Minimum**: `0`, **Maximum:** `1000`)*
<!-- tabs:end -->

## Récupérer la santé du rotor arrière

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local heliTailRotorHealth --[[ number ]] = exports["sadoj-vehicle"]:GetHeliTailRotorHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **heliTailRotorHealth:** la santé du rotor arrière.
<!-- tabs:end -->

# Carrosserie

## Définir la santé de la carrosserie

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleBodyHealth(vehicle --[[ vehicle ]], bodyHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **bodyHealth:** la santé de la carrosserie. *(**Minimum**: `0`, **Maximum:** `1000`)*
<!-- tabs:end -->

## Récupérer la santé de la carrosserie

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local bodyHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleBodyHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **bodyHealth:** la santé de la carrosserie.
<!-- tabs:end -->

## Définir les déformations de la carrosserie

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleDeformations(vehicle --[[ vehicle ]], deformations --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **deformations:** les déformations de la carrosserie.
<!-- tabs:end -->

## Récupérer les déformations de la carrosserie

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local deformations --[[ table ]] = exports["sadoj-vehicle"]:GetVehicleDeformations(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **deformations:** les déformations de la carrosserie.
<!-- tabs:end -->

## Réparer une déformation de la carrosserie

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:FixVehicleDeformation(vehicle --[[ vehicle ]], deformationIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **deformationIndex:** l'index de la déformation.
<!-- tabs:end -->


# Réservoir

## Définir la santé du réservoir

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehiclePetrolTankHealth(vehicle --[[ vehicle ]], petrolTankHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **petrolTankHealth:** la santé du réservoir. *(**Minimum**: `0`, **Maximum:** `1000`)*
<!-- tabs:end -->

## Récupérer la santé du réservoir

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local petrolTankHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehiclePetrolTankHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **petrolTankHealth:** la santé du réservoir.
<!-- tabs:end -->


# State bags

Chaque dégâts (visuel et mécanique) d'un véhicule est enregistré dans un state bag.

Voici les clés utilisées avec la quelle vous pouvez récupérer le non des "state bags" en utilisant l'export `GetBagName` :

* **Exploded** : si le véhicule est explosé. (type `boolean`)
* **EngineHealth** : la santé du moteur. (type `number`)  *(**Minimum**: `-4000`, **Maximum:** `1000`)*
* **BodyHealth** : la santé de la carrosserie. (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **PetrolTankHealth** : la santé du réservoir. (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **HeliMainRotorHealth** : la santé du rotor principal (uniquement pour les hélicoptères). (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **HeliTailRotorHealth** : la santé du rotor arrière (uniquement pour les hélicoptères). (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **Deformations** : les déformations de la carrosserie. (type `json`)

## Récupérer le nom d'un state bag

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local bagName --[[ string ]] = exports["sadoj-vehicle"]:GetBagName(key --[[ string ]])
```
* **Paramètres:**
  * **key:** la clé.
* **Retour:**
  * **bagName:** le nom du "state bag".


Exemple d'utilisation:
  ```lua
  AddStateBagChangeHandler(exports["sadoj-vehicle"]:GetBagName("EngineHealth"), nil, function(bagName, key, value)
      local vehicle = exports["sadoj-core"]:GetEntityFromStateBagName(bagName)
      if DoesEntityExist(vehicle) then
          print("Vehicle engine health changed to: " .. value)
      end
  end)
  ```
<!-- tabs:end -->





