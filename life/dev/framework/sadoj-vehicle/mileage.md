# sadoj-vehicle - Kilométrage

> Auteur de la page: Thomas.

---

## Définir le nombre de kilomètres d'un véhicule

> [!warning]
> Pour toute utilisation `côté client` de l'export ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle du véhicule. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleMileage(vehicle --[[ vehicle ]], mileage --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **mileage:** le nombre de kilomètres.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleMileage", netId --[[ number ]], mileage --[[ number ]])
```
* **Paramètres:**
  * **netId:** le netId du véhicule.
  * **mileage:** le nombre de kilomètres.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleMileage(vehicle --[[ vehicle ]], mileage --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **mileage:** le nombre de kilomètres.
<!-- tabs:end -->


## Récupérer le nombre de kilomètres d'un véhicule
<!-- tabs:start -->
### **Export (client)**
```lua
local mileage = exports["sadoj-vehicle"]:GetVehicleMileage(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **mileage:** le nombre de kilomètres.
### **Export (serveur)**
```lua
local mileage = exports["sadoj-vehicle"]:GetVehicleMileage(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **mileage:** le nombre de kilomètres.
<!-- tabs:end -->



{docsify-updated}
