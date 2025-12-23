# sadoj-vehicle - Batterie

> Auteur de la page: Thomas.

---


## SetVehicleHasBattery
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleHasBattery(vehicle --[[ vehicle ]], hasBattery --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez définir si il a une batterie.
  * **hasBattery:** `true` pour définir que le véhicule a une batterie, `false` sinon.
<!-- tabs:end -->

## SetVehicleBatteryLevel
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleBatteryLevel(vehicle --[[ vehicle ]], level --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez définir le niveau de batterie.
  * **level:** le niveau de vie de la batterie (entre 0 et 100).
<!-- tabs:end -->

## DoesVehicleHaveBattery
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local hasBattery --[[ boolean ]] = exports["sadoj-vehicle"]:DoesVehicleHaveBattery(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez savoir s'il a une batterie.
* **Retour:**
  * **hasBattery:** `true` si le véhicule a une batterie, `false` sinon.
<!-- tabs:end -->

## GetVehicleBatteryLevel
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local level --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleBatteryLevel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le niveau de batterie.
* **Retour:**
  * **level:** le niveau de vie de la batterie (entre 0 et 100).
<!-- tabs:end -->