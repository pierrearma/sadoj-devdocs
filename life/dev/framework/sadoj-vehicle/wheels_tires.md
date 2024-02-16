# sadoj-vehicle - Roues/Pneus

> Auteur de la page: Thomas.

---

Ce module permet de gérer la synchronisation des roues et des pneus des véhicules.

L'index des roues est le suivant:
```lua
SC_WHEEL_CAR_FRONT_LEFT = 0,
SC_WHEEL_CAR_FRONT_RIGHT = 1,
SC_WHEEL_CAR_MID_LEFT = 2,
SC_WHEEL_CAR_MID_RIGHT = 3,
SC_WHEEL_CAR_REAR_LEFT = 4,
SC_WHEEL_CAR_REAR_RIGHT = 5,
SC_WHEEL_BIKE_FRONT = 6,
SC_WHEEL_BIKE_REAR = 7,
```


# Roues

## Définir la santé des roues

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleWheelHealth(vehicle --[[ vehicle ]], wheelIndex --[[ number ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
  * **health:** la santé de la roue. *(**Minimum**: `0.0`, **Maximum:** `1000.0`)*
<!-- tabs:end -->

## Obtenir la santé des roues

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local wheelHealth = exports["sadoj-vehicle"]:GetVehicleWheelHealth(vehicle --[[ vehicle ]], wheelIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
* **Retour:**
  * **wheelHealth:** la santé de la roue.
<!-- tabs:end -->

## Arracher une roue

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:BreakOffVehicleWheel(vehicle --[[ vehicle ]], wheelIndex --[[ number ]], leaveDebrisTrail --[[ boolean ]], deleteWheel --[[ boolean ]], unknownFlag --[[ boolean ]], putOnFire --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
  * **leaveDebrisTrail:** `true` pour démarer "veh_debris_trail" ptfx.
  * **deleteWheel:** `true` pour supprimer la roue, `false` sinon.
  * **unknownFlag:** inconnu.
  * **putOnFire:** `true` pour mettre la roue en feu, `false` sinon.
<!-- tabs:end -->

## Réparer une roue

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:FixVehicleWheel(vehicle --[[ vehicle ]], wheelIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
<!-- tabs:end -->

## Savoir si une roue est arrachée

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isWheelTornOff = exports["sadoj-vehicle"]:IsVehicleWheelTornOff(vehicle --[[ vehicle ]], wheelIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
* **Retour:**
  * **isWheelTornOff:** `true` si la roue est arrachée, `false` sinon.
<!-- tabs:end -->





# Pneus

## Définir la santé des pneus

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleTyreHealth(vehicle --[[ vehicle ]], wheelIndex --[[ number ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
  * **health:** la santé du pneu. *(**Minimum**: `0.0`, **Maximum:** `1000.0`)*
<!-- tabs:end -->

## Obtenir la santé des pneus

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local tyreHealth = exports["sadoj-vehicle"]:GetVehicleTyreHealth(vehicle --[[ vehicle ]], wheelIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
* **Retour:**
  * **tyreHealth:** la santé du pneu.
<!-- tabs:end -->

## Savoir si un pneu est crevé

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isTyreBurst = exports["sadoj-vehicle"]:IsVehicleTyreBurst(vehicle --[[ vehicle ]], wheelIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
* **Retour:**
  * **isTyreBurst:** `true` si le pneu est crevé, `false` sinon.
<!-- tabs:end -->

## Crever un pneu

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleTyreBurst(vehicle --[[ vehicle ]], wheelIndex --[[ number ]], onRim --[[ boolean ]], health --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
  * **onRim:** `true` si le pneu est sur la jante, `false` sinon.
  * **health:** la santé du pneu. *(**Minimum**: `0.0`, **Maximum:** `1000.0`)*
<!-- tabs:end -->

## Réparer un pneu

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:FixVehicleTyre(vehicle --[[ vehicle ]], wheelIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **wheelIndex:** l'index de la roue.
<!-- tabs:end -->








{docsify-updated}
