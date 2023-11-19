# sadoj-vehicle - Airbags

> Auteur de la page: Thomas.

---

## SetVehicleAirbags
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleAirbags(vehicle --[[ vehicle ]], state --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez modifier les airbags
  * **state:** `true` si vous voulez activer les airbags, `false` sinon.
### **Export (Serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleAirbags(vehicle --[[ vehicle ]], state --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez modifier les airbags
  * **state:** `true` si vous voulez activer les airbags, `false` sinon.
<!-- tabs:end -->

## VehicleHasAirbags
<!-- tabs:start -->
### **Export (client)**
```lua
local hasAirbags --[[ boolean ]] = exports["sadoj-vehicle"]:VehicleHasAirbags(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez vérifier si il est équipé d'airbag.
* **Retour:**
  * **hasAirbags:** `true` si le véhicule est équipé d'airbag, `false` sinon.
* ### **Export (serveur)**
```lua
local hasAirbags --[[ boolean ]] = exports["sadoj-vehicle"]:VehicleHasAirbags(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez vérifier si il est équipé d'airbag.
* **Retour:**
  * **hasAirbags:** `true` si le véhicule est équipé d'airbag, `false` sinon.
<!-- tabs:end -->

## IsVehicleAirbagsActive
<!-- tabs:start -->
### **Export (client)**
```lua
local airbagsIsActive --[[ boolean ]] = exports["sadoj-vehicle"]:IsVehicleAirbagsActive(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez vérifier le statut des airbag.
* **Retour:**
  * **airbagsIsActive:** `true` si les airbags du véhicule sont activés, `false` sinon.
* ### **Export (serveur)**
```lua
local airbagsIsActive --[[ boolean ]] = exports["sadoj-vehicle"]:IsVehicleAirbagsActive(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez vérifier le statut des airbag.
* **Retour:**
  * **airbagsIsActive:** `true` si les airbags du véhicule sont activés, `false` sinon.
<!-- tabs:end -->

{docsify-updated}
