# sadoj-vehicle - Essence/Huile/Saleté

> Auteur de la page: Thomas.

---

## Essence

### SetVehicleFuelLevel

> [!warning]
> Pour toute utilisation `côté client` de l'export ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle du véhicule. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleFuelLevel(vehicle --[[ vehicle ]], fuelLevel --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez changer le niveau d'essence.
  * **fuelLevel:** le niveau d'essence que vous voulez mettre.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleFuelLevel", netId --[[ integer ]], fuelLevel --[[ number ]])
```
* **Paramètres:**
  * **netId:** le netId du véhicule.
  * **fuelLevel:** le niveau d'essence que vous voulez mettre.
### **Export (Serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleFuelLevel(vehicle --[[ vehicle ]], fuelLevel --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez changer le niveau d'essence.
  * **fuelLevel:** le niveau d'essence que vous voulez mettre.
<!-- tabs:end -->

### GetVehicleFuelLevel
<!-- tabs:start -->
### **Export (client)**
```lua
local fuelLevel --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleFuelLevel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le niveau d'essence.
* **Retourne:**
  * **fuelLevel:** le niveau d'essence du véhicule.
### **Export (Serveur)**
```lua
local fuelLevel --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleFuelLevel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le niveau d'essence.
* **Retourne:**
  * **fuelLevel:** le niveau d'essence du véhicule.
<!-- tabs:end -->

## Saleté

### SetVehicleDirtLevel

> [!warning]
> Pour toute utilisation `côté client` de l'export ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle du véhicule. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleDirtLevel(vehicle --[[ vehicle ]], dirtLevel --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez changer le niveau de saleté.
  * **dirtLevel:** le niveau de saleté du véhicule.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleDirtLevel", netId --[[ integer ]], dirtLevel --[[ number ]])
```
* **Paramètres:**
  * **netId:** le netId du véhicule.
  * **dirtLevel:** le niveau de saleté du véhicule.
### **Export (Serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleDirtLevel(vehicle --[[ vehicle ]], dirtLevel --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez changer le niveau de saleté.
  * **dirtLevel:** le niveau de saleté du véhicule.
<!-- tabs:end -->

### GetVehicleDirtLevel
<!-- tabs:start -->
### **Export (client)**
```lua
local dirtLevel --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleDirtLevel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le niveau de saleté.
* **Retourne:**
  * **dirtLevel:** le niveau de saleté du véhicule.
### **Export (Serveur)**
```lua
local dirtLevel --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleDirtLevel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le niveau de saleté.
* **Retourne:**
  * **dirtLevel:** le niveau de saleté du véhicule.
<!-- tabs:end -->

## Huile

### SetVehicleOilLevel
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleOilLevel(vehicle --[[ vehicle ]], oilLevel --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez changer le niveau d'huile
  * **oilLevel:** le niveau d'huile du véhicule.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleOilLevel", netId --[[ integer ]], oilLevel --[[ number ]])
```
* **Paramètres:**
  * **netId:** le netId du véhicule.
  * **oilLevel:** le niveau d'huile du véhicule.
### **Export (Serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleOilLevel(vehicle --[[ vehicle ]], oilLevel --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez changer le niveau d'huile.
  * **oilLevel:** le niveau d'huile du véhicule.
<!-- tabs:end -->

### GetVehicleOilLevel
<!-- tabs:start -->
### **Export (client)**
```lua
local oilLevel --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleOilLevel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le niveau d'huile.
* **Retourne:**
  * **oilLevel:** le niveau d'huile du véhicule.
### **Export (Serveur)**
```lua
local oilLevel --[[ number ]] = exports["sadoj-vehicle"]:GetVehicleOilLevel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le niveau d'huile.
* **Retourne:**
  * **oilLevel:** le niveau d'huile du véhicule.
<!-- tabs:end -->

{docsify-updated}
