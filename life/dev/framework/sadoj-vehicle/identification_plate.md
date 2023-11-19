# sadoj-vehicle - Identification / Plaque

> Auteur de la page: Thomas.

---

## Identification

### Récupérer l'identifiant d'un véhicule
<!-- tabs:start -->
### **Export (client)**
```lua
local identifier --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleIdentifier(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **identifier:** l'identifiant du véhicule.
### **Export (serveur)**
```lua
local identifier --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleIdentifier(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **identifier:** l'identifiant du véhicule.
<!-- tabs:end -->

### Récupérer un véhicule par son identifiant
<!-- tabs:start -->
### **Export (serveur)**
```lua
local vehicle --[[ vehicle ]] = exports["sadoj-vehicle"]:GetVehicleByIdentifier(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** l'identifiant du véhicule.
* **Retour:**
  * **vehicle:** le véhicule, `0` si aucun véhicule n'a été trouvé.
<!-- tabs:end -->


## Plaque

### Récupérer la plaque d'un véhicule
<!-- tabs:start -->
### **Export (client)**
```lua
local plate --[[ string ]] = exports["sadoj-vehicle"]:GetVehiclePlate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **plate:** la plaque du véhicule.
### **Export (serveur)**
```lua
local plate --[[ string ]] = exports["sadoj-vehicle"]:GetVehiclePlate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **plate:** la plaque du véhicule.
<!-- tabs:end -->

### Définir la plaque d'un véhicule

> [!warning]
> Pour toute utilisation `côté client` de l'export ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle du véhicule. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehiclePlate(vehicle --[[ vehicle ]], plate --[[ string ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **plate:** la plaque du véhicule.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehiclePlate", netId --[[ integer ]], plate --[[ string ]])
```
* **Paramètres:**
  * **netId:** le netId du véhicule.
  * **plate:** la plaque du véhicule.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehiclePlate(vehicle --[[ vehicle ]], plate --[[ string ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **plate:** la plaque du véhicule.
<!-- tabs:end -->

{docsify-updated}
