# sadoj-vehiclehealth

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-vehiclehealth`

## Utilisation

Chaque dégâts (visuel et mécanique) d'un véhicule est stocké sous forme de tableau :

* **EngineHealth** : Les dégâts du moteur (type `number`)  *(**Minimum**: `-4000`, **Maximum:** `1000`)*
  * **-4000**: Le moteur est détruit
  * **0 et moins**: Le moteur prend feu et la santé décline rapidement
  * **300**: Le moteur fume et perd en fonctionnalité
  * **1000**: Le moteur est parfait
* **BodyHealth** : La vie du corps du moteur (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **PetrolTankHealth** : La vie du réservoir de carburant (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
  * **650**: Le réservoir commence à fuir
* **DirtLevel** : Le niveau de saleté du véhiculer (type `number`)  *(**Minimum**: `0.0`, **Maximum:** `15.0`)*
* **NumberVehicleDeformation** : Le nombre de points de déformation sur le véhicule (type `number`)
* **Deformation** : Tableau avec les positions et l'intensité de tout les point de déformation (type `table`)
  ```lua
  {
    {{"x" :VehicleOffsetX --[[ integer ]], "y":VehicleOffsetY --[[ integer ]], "z":VehicleOffsetZ --[[ integer ]]}, DamageStrength --[[ integer ]]},
    {{"x" :VehicleOffsetX --[[ integer ]], "y":VehicleOffsetY --[[ integer ]], "z":VehicleOffsetZ --[[ integer ]]}, DamageStrength --[[ integer ]]},
    ...
  }
  ```
* **DoorDamaged** : Tableau contenant tous les dégâts des portes (type `table`) (**DoorId** de `0` à `5`)
  ```lua
  {
    [0] = IsDoorDamaged --[[ boolean ]]
    [1] = IsDoorDamaged --[[ boolean ]]
    [2] = IsDoorDamaged --[[ boolean ]]
    [3] = IsDoorDamaged --[[ boolean ]]
    ...
  }
  ```
* **Window** : Tableau contenant tous les dégâts des fenêtres (type `table`) (**WindowId** de `0` à `7`)
  ```lua
  {
    [0] = IsWindowIntact --[[ boolean ]]
    [1] = IsWindowIntact --[[ boolean ]]
    [2] = IsWindowIntact --[[ boolean ]]
    [3] = IsWindowIntact --[[ boolean ]]
    ...
  }
  ```
* **WheelsHealth** : Tableau contenant toutes les informations sur les roues (type `table`) (**wheelsId** de `0` à `5`)
  ```lua
  {
    [0] = WheelsHealth --[[ number ]]
    [1] = WheelsHealth --[[ number ]]
    [2] = WheelsHealth --[[ number ]]
    [3] = WheelsHealth --[[ number ]]
    ...
  }
  ```
* **TyresHealth** : Tableau contenant toutes les informations sur les pneu (type `table`) (**wheelsId** de `0` à `5`)
  ```lua
  {
    [0] = TyresHealth --[[ number ]]
    [1] = TyresHealth --[[ number ]]
    [2] = TyresHealth --[[ number ]]
    [3] = TyresHealth --[[ number ]]
    ...
  }
  ```

### Récupération des données

#### GetDamage

Permet de récupérer tous les dégâts du véhicule (visuel et mécanique).

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-vehiclehealth"]:GetDamage(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez récupérer tous les dégâts.
* **Résultats:**
  * Tableau avec la liste de tous les dégâts.
    ```lua
    {
      EngineHealth, --[[ number ]]
      BodyHealth, --[[ number ]]
      PetrolTankHealth, --[[ number ]]
      DirtLevel, --[[ number ]]
      NumberVehicleDeformation, --[[ number ]]
      Deformation, --[[ table ]]
      DoorDamaged, --[[ table ]]
      Window, --[[ table ]]
      Wheels, --[[ table ]]
    }
    ```

<!-- tabs:end -->

#### GetVehicleDeformation

Cette fonction vous permet de récupérer la liste de tous les points de déformation.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-vehiclehealth"]:GetVehicleDeformation(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez récupérer la liste de tous les points de déformation.

<!-- tabs:end -->

#### GetNumberVehicleDeformation

Permet de récupérer le nombre de points de déformation.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ number ]] = exports["sadoj-vehiclehealth"]:GetNumberVehicleDeformation(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez récupérer la liste de tous les points de déformation.

<!-- tabs:end -->

### Application des données

#### SetDamage
Permet d'appliquer tous les dégâts au véhicule (visuel et mécanique).
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:SetDamage", netId --[[ integer ]], damage --[[ table ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **damage:** Tableau avec la liste de tous les dégâts.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:SetDamage", netId --[[ integer ]], damage --[[ table ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **damage:** Tableau avec la liste de tous les dégâts.
<!-- tabs:end -->


#### SetEngineHealth
Permet de modifier la vie du moteur.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:SetEngineHealth", netId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **health:** La nouvelle vie du moteur.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:SetEngineHealth", netId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **health:** La nouvelle vie du moteur.
<!-- tabs:end -->


#### SetBodyHealth
Permet de modifier la vie du corps.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:SetBodyHealth", netId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **health:** La nouvelle vie du corps.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:SetBodyHealth", netId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **health:** La nouvelle vie du moteur.
<!-- tabs:end -->


#### SetPetrolTankHealth
Permet de modifier la vie du réservoir.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:SetPetrolTankHealth", netId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **health:** La nouvelle vie du corps.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:SetPetrolTankHealth", netId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **health:** La nouvelle vie du moteur.
<!-- tabs:end -->


#### SetVehicleDeformation
Permet d'appliquer les points de déformation sur un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:SetPetrolTankHealth", netId --[[ integer ]], deformationPoints --[[ table ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **deformationPoints:** Tableau avec la liste de tous les points de déformation.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:SetPetrolTankHealth", netId --[[ integer ]], deformationPoints --[[ table ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **deformationPoints:** Tableau avec la liste de tous les points de déformation.
<!-- tabs:end -->


#### SetWheelsHealthByWheelsId
Permet de modifier la vie des roues.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:SetWheelsHealthByWheelsId", netId --[[ integer ]], wheelsId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **wheelsId:** L'id de la roue.
  * **health:** La nouvelle vie des roues.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:SetWheelsHealthByWheelsId", netId --[[ integer ]], wheelsId --[[ integer ]], health --[[ number ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **wheelsId:** L'id de la roue.
  * **health:** La nouvelle vie des roues.
<!-- tabs:end -->


#### SmashVehicleWindow
Permet de casser une fenêtre du véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:SmashVehicleWindow", netId --[[ integer ]], windowsId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **windowsId:** L'id de la fenêtre.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:SmashVehicleWindow", netId --[[ integer ]], windowsId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **windowsId:** L'id de la fenêtre.
<!-- tabs:end -->



### Réparation

#### FixAllDamage
Permet de les réparer tous les dégâts du véhicule (visuel et mécanique).
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:FixAllDamage", netId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:FixAllDamage", netId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
<!-- tabs:end -->

#### FixAllVisualDamage
Permet de réparer tous les dégâts visuels du véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:FixAllVisualDamage", netId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:FixAllVisualDamage", netId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
<!-- tabs:end -->

#### FixVehicleDeformation
Permet de réparer tous les points de déformation.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:FixVehicleDeformation", netId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:FixVehicleDeformation", netId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
<!-- tabs:end -->

#### FixVehicleDeformationByDeformationId
Permet de réparer un point de déformation en fonction Id du point.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:FixVehicleDeformationByDeformationId", netId --[[ integer ]], deformId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **deformId:** L'id du point de déformation.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:FixVehicleDeformationByDeformationId", netId --[[ integer ]], deformId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **deformId:** L'id du point de déformation.
<!-- tabs:end -->


#### FixDoorDamagedByDoorId
Permet de réparer une porte en fonction de ID de la porte.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:FixDoorDamagedByDoorId", netId --[[ integer ]], doorId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **doorId:** L'id de la porte.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:FixDoorDamagedByDoorId", netId --[[ integer ]], doorId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **doorId:** L'id de la porte.
<!-- tabs:end -->

#### FixTyresByWheelsId
Permet de réparer un roue en fonction de ID de la roue.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:FixTyresByWheelsId", netId --[[ integer ]], wheelsId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **wheelsId:** L'id de la roue.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:FixTyresByWheelsId", netId --[[ integer ]], wheelsId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **wheelsId:** L'id de la roue.
<!-- tabs:end -->

#### FixWindowsByWindowsId
Permet de réparer une vitre en fonction de ID de la vitre.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehiclehealth:server:FixWindowsByWindowsId", netId --[[ integer ]], windowsId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **windowsId:** L'id de la fenêtre.
#### **Event (serveur)**
```lua
TriggerEvent("sadoj-vehiclehealth:server:FixWindowsByWindowsId", netId --[[ integer ]], windowsId --[[ integer ]])
```
* **Paramètres:**
  * **netId:** Le netId du véhicule.
  * **windowsId:** L'id de la fenêtre.
<!-- tabs:end -->


{docsify-updated}
