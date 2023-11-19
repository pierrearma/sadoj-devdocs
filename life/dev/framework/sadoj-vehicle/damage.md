# sadoj-vehicle - Dégâts

> Auteur de la page: Thomas.

---

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
* **Deformations** : Tableau avec les positions et l'intensité de tout les point de déformation (type `table`)
```lua
  {
    {{"x" :VehicleOffsetX --[[ integer ]], "y":VehicleOffsetY --[[ integer ]], "z":VehicleOffsetZ --[[ integer ]]}, DamageStrength --[[ integer ]]},
    {{"x" :VehicleOffsetX --[[ integer ]], "y":VehicleOffsetY --[[ integer ]], "z":VehicleOffsetZ --[[ integer ]]}, DamageStrength --[[ integer ]]},
    ...
  }
  ```
* **DoorsDamaged** : Tableau contenant tous les dégâts des portes (type `table`) (**DoorId** de `0` à `5`)
  ```lua
  {
    [0] = IsDoorDamaged --[[ boolean ]]
    [1] = IsDoorDamaged --[[ boolean ]]
    [2] = IsDoorDamaged --[[ boolean ]]
    [3] = IsDoorDamaged --[[ boolean ]]
    ...
  }
  ```
* **WindowsDamaged** : Tableau contenant tous les dégâts des fenêtres (type `table`) (**WindowId** de `0` à `7`)
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

## Récupération des données

### GetVehicleDamage
<!-- tabs:start -->
### **Export (client)**
```lua
local result --[[ table ]] = exports["sadoj-vehicle"]:GetVehicleDamage(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts.
* **Retourne:**
  * **result:** Tableau contenant les dégâts du véhicule.
### **Export (serveur)**
```lua
local result --[[ table ]] = exports["sadoj-vehicle"]:GetVehicleDamage(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts.
* **Retourne:**
  * **result:** Tableau contenant les dégâts du véhicule.
<!-- tabs:end -->

### GetVehicleEngineHealth
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs. Pour récupérer la valeur en temps réel vous pouvez utiliser la native `GetVehicleEngineHealth`

<!-- tabs:start -->
### **Export (client)**
```lua
local engineHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleEngineHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts du moteur.
* **Retourne:**
  * **engineHealth:** La santé du moteur du véhicule.
### **Export (serveur)**
```lua
local engineHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleEngineHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts du moteur.
* **Retourne:**
  * **engineHealth:** La santé du moteur du véhicule.
<!-- tabs:end -->

### GetVehicleBodyHealth
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs. Pour récupérer la valeur en temps réel vous pouvez utiliser la native `GetVehicleBodyHealth`

<!-- tabs:start -->
### **Export (client)**
```lua
local bodyHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleBodyHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts.
* **Retourne:**
  * **bodyHealth:** La santé
### **Export (serveur)**
```lua
local bodyHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleBodyHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts.
* **Retourne:**
  * **bodyHealth:** La santé
<!-- tabs:end -->

### GetVehiclePetrolTankHealth
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs. Pour récupérer la valeur en temps réel vous pouvez utiliser la native `GetVehiclePetrolTankHealth`

<!-- tabs:start -->
### **Export (client)**
```lua
local petrolTankHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehiclePetrolTankHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts du réservoir de carburant.
* **Retourne:**
  * **petrolTankHealth:** La santé du réservoir de carburant du véhicule.
### **Export (serveur)**
```lua
local petrolTankHealth --[[ number ]] = exports["sadoj-vehicle"]:GetVehiclePetrolTankHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les dégâts du réservoir de carburant.
* **Retourne:**
  * **petrolTankHealth:** La santé du réservoir de carburant du véhicule.
<!-- tabs:end -->

### GetVehicleDeformations
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs. Pour récupérer la valeur en temps réel vous pouvez utiliser l'export `GetVehicleDeformationThisFrame`

<!-- tabs:start -->
### **Export (client)**
```lua
local deformations --[[ table ]] = exports["sadoj-vehicle"]:GetVehicleDeformations(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les points de déformation.
* **Retourne:**
  * **deformations:** Tableau contenant les points de déformation du véhicule.
### **Export (serveur)**
```lua
local deformations --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleDeformations(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les points de déformation.
* **Retourne:**
  * **deformations:** Tableau contenant les points de déformation du véhicule.
<!-- tabs:end -->

### GetVehicleDeformationThisFrame
> [!note]
> Cette fonction renvoie la valeur en temps réel des points de déformation du véhicule. Il est plus optimisé d'utiliser l'export `GetVehicleDeformations`, pour eviter de refaire le calcul de tous les points de déformation.

<!-- tabs:start -->
### **Export (client)**
```lua
local deformations --[[ table ]] = exports["sadoj-vehicle"]:GetVehicleDeformationThisFrame(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer les points de déformation.
* **Retourne:**
  * **deformations:** Tableau contenant les points de déformation du véhicule.
<!-- tabs:end -->

### GetNumberOfVehicleDeformation
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local deformations --[[ number ]] = exports["sadoj-vehicle"]:GetNumberOfVehicleDeformation(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer le nombre de points de déformation.
* **Retourne:**
  * **deformations:** Nombre de points de déformation du véhicule.

### **Export (serveur)**
```lua
local deformations --[[ number ]] = exports["sadoj-vehicle"]:GetNumberOfVehicleDeformation(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer le nombre de points de déformation.
* **Retourne:**
  * **deformations:** Nombre de points de déformation du véhicule.
<!-- tabs:end -->

### GetWheelsHealth
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local wheelsHealth --[[ table ]] = exports["sadoj-vehicle"]:GetWheelsHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des roues.
* **Retourne:**
  * **wheelsHealth:** Tableau contenant la santé des roues du véhicule.
### **Export (serveur)**
```lua
local wheelsHealth --[[ table ]] = exports["sadoj-vehicle"]:GetWheelsHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des roues.
* **Retourne:**
  * **wheelsHealth:** Tableau contenant la santé des roues du véhicule.
<!-- tabs:end -->

### GetWheelHealthByWheelId
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local wheelHealth --[[ number ]] = exports["sadoj-vehicle"]:GetWheelHealthByWheelId(vehicle --[[ vehicle ]], wheelId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé de la roue.
  * **wheelId:** L'identifiant de la roue.
* **Retourne:**
  * **wheelHealth:** La santé de la roue.
### **Export (serveur)**
```lua
local wheelHealth --[[ number ]] = exports["sadoj-vehicle"]:GetWheelHealthByWheelId(vehicle --[[ vehicle ]], wheelId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé de la roue.
  * **wheelId:** L'identifiant de la roue.
* **Retourne:**
  * **wheelHealth:** La santé de la roue.
<!-- tabs:end -->

### GetTyresHealth
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local tyresHealth --[[ table ]] = exports["sadoj-vehicle"]:GetTyresHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des pneus.
* **Retourne:**
  * **tyresHealth:** Tableau contenant la santé des pneus du véhicule.
### **Export (serveur)**
```lua
local tyresHealth --[[ table ]] = exports["sadoj-vehicle"]:GetTyresHealth(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des pneus.
* **Retourne:**
  * **tyresHealth:** Tableau contenant la santé des pneus du véhicule.
<!-- tabs:end -->

### GetTyreHealthByTyreId
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local tyreHealth --[[ number ]] = exports["sadoj-vehicle"]:GetTyreHealthByTyreId(vehicle --[[ vehicle ]], wheelId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé du pneu.
  * **wheelId:** L'identifiant de la roue.
* **Retourne:**
  * **tyreHealth:** La santé du pneu.
### **Export (serveur)**
```lua
local tyreHealth --[[ number ]] = exports["sadoj-vehicle"]:GetTyreHealthByTyreId(vehicle --[[ vehicle ]], wheelId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé du pneu.
  * **wheelId:** L'identifiant de la roue.
* **Retourne:**
  * **tyreHealth:** La santé du pneu.
<!-- tabs:end -->

### GetDoorsDamaged
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local doorsDamaged --[[ table ]] = exports["sadoj-vehicle"]:GetDoorsDamaged(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des portes.
* **Retourne:**
  * **doorsDamaged:** Tableau contenant la santé des portes du véhicule.
### **Export (serveur)**
```lua
local doorsDamaged --[[ table ]] = exports["sadoj-vehicle"]:GetDoorsDamaged(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des portes.
* **Retourne:**
  * **doorsDamaged:** Tableau contenant la santé des portes du véhicule.
<!-- tabs:end -->

### GetDoorDamagedByDoorId
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local doorDamaged --[[ boolean ]] = exports["sadoj-vehicle"]:GetDoorDamagedByDoorId(vehicle --[[ vehicle ]], doorId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé de la porte.
  * **doorId:** L'identifiant de la porte.
* **Retourne:**
  * **doorDamaged:** `true` si la porte est endommagée, `false` sinon.
### **Export (serveur)**
```lua
local doorDamaged --[[ boolean ]] = exports["sadoj-vehicle"]:GetDoorDamagedByDoorId(vehicle --[[ vehicle ]], doorId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé de la porte.
  * **doorId:** L'identifiant de la porte.
* **Retourne:**
  * **doorDamaged:** `true` si la porte est endommagée, `false` sinon.
<!-- tabs:end -->

### GetWindowsDamaged
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local windowsDamaged --[[ table ]] = exports["sadoj-vehicle"]:GetWindowsDamaged(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des vitres.
* **Retourne:**
  * **windowsDamaged:** Tableau contenant la santé des vitres du véhicule.
### **Export (serveur)**
```lua
local windowsDamaged --[[ table ]] = exports["sadoj-vehicle"]:GetWindowsDamaged(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé des vitres.
* **Retourne:**
  * **windowsDamaged:** Tableau contenant la santé des vitres du véhicule.
<!-- tabs:end -->

### GetWindowDamagedByWindowId
> [!note]
> Cette fonction ne renvoie pas la valeur en temps réel, la valeur est mise à jour à chaque fois que le véhicule est synchronisé avec les autres joueurs.
<!-- tabs:start -->
### **Export (client)**
```lua
local doorDamaged --[[ boolean ]] = exports["sadoj-vehicle"]:GetWindowDamagedByWindowId(vehicle --[[ vehicle ]], windowId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé de la vitre.
  * **windowId:** L'identifiant de la vitre.
* **Retourne:**
  * **doorDamaged:** `true` si la vitre est endommagée, `false` sinon.
### **Export (serveur)**
```lua
local doorDamaged --[[ boolean ]] = exports["sadoj-vehicle"]:GetWindowDamagedByWindowId(vehicle --[[ vehicle ]], windowId --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut récupérer la santé de la vitre.
  * **windowId:** L'identifiant de la vitre.
* **Retourne:**
  * **doorDamaged:** `true` si la vitre est endommagée, `false` sinon.
<!-- tabs:end -->


## Application des données

> [!warning]
> Pour exécuter les fonctions côté client il faut être impérativement propriétaire de l'entité. Vous pouvez utiliser la fonction `NetworkHasControlOfEntity` pour vérifier si vous êtes propriétaire de l'entité.


### SetVehicleDamage
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleDamage(vehicle --[[ vehicle ]], damages --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer les dégâts.
  * **damages:** Tableau contenant les dégâts du véhicule.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleDamage(vehicle --[[ vehicle ]], damages --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer les dégâts.
  * **damages:** Tableau contenant les dégâts du véhicule.
<!-- tabs:end -->

### SetVehicleEngineHealth
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleEngineHealth(vehicle --[[ vehicle ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer la santé du moteur.
  * **health:** La santé du moteur du véhicule.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleEngineHealth(vehicle --[[ vehicle ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer la santé du moteur.
  * **health:** La santé du moteur du véhicule.
<!-- tabs:end -->

### SetVehicleBodyHealth
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleBodyHealth(vehicle --[[ vehicle ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer la santé
  * **health:** La santé
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleBodyHealth(vehicle --[[ vehicle ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer la santé
  * **health:** La santé
<!-- tabs:end -->

### SetVehiclePetrolTankHealth
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehiclePetrolTankHealth(vehicle --[[ vehicle ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer la santé du réservoir de carburant.
  * **health:** La santé du réservoir.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehiclePetrolTankHealth(vehicle --[[ vehicle ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer la santé du réservoir de carburant.
  * **health:** La santé du réservoir.
<!-- tabs:end -->

### SetVehicleDeformations
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleDeformations(vehicle --[[ vehicle ]], deformations --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer les déformations.
  * **deformations:** Tableau contenant les déformations du véhicule.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleDeformations(vehicle --[[ vehicle ]], deformations --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer les déformations.
  * **deformations:** Tableau contenant les déformations du véhicule.
<!-- tabs:end -->

### SetVehicleWheelsHealth
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleWheelsHealth(vehicle --[[ vehicle ]], wheelsHealth --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer les degats des roues.
  * **wheelsHealth:** Tableau contenant les des degats des roues.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleWheelsHealth(vehicle --[[ vehicle ]], wheelsHealth --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut appliquer les degats des roues.
  * **wheelsHealth:** Tableau contenant les des degats des roues.
<!-- tabs:end -->

### SetVehicleWheelHealth
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleWheelHealth(vehicle --[[ vehicle ]], wheelId --[[ number ]], wheelHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule
  * **wheelId:** L'Id de la roue
  * **wheelHealth:** La santé de la roue
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleWheelHealth(vehicle --[[ vehicle ]], wheelId --[[ number ]], wheelHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule
  * **wheelId:** L'Id de la roue
  * **wheelHealth:** La santé de la roue
<!-- tabs:end -->

### SetVehicleTyresHealth
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleTyresHealth(vehicle --[[ vehicle ]], tyresHealth --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule
  * **tyresHealth:** La santé des pneus
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleTyresHealth(vehicle --[[ vehicle ]], tyresHealth --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule
  * **tyresHealth:** La santé des pneus
<!-- tabs:end -->

### SetVehicleTyreHealth
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleTyreHealth(vehicle --[[ vehicle ]], tyreId --[[ number ]], tyreHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule
  * **tyreId:** L'Id du pneu
  * **tyreHealth:** La santé du pneu
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleTyreHealth(vehicle --[[ vehicle ]], tyreId --[[ number ]], tyreHealth --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule
  * **tyreId:** L'Id du pneu
  * **tyreHealth:** La santé du pneu
<!-- tabs:end -->


{docsify-updated}