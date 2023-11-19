# sadoj-vehicle - Couleur des lumières

> Auteur de la page: Thomas.

---

## Définir la couleur des phares xenon

> [!warning]
> Pour toute utilisation `côté client` de l'export ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle du véhicule. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleXenonLightsCustomColor(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleXenonLightsCustomColor", netId --[[ number ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleXenonLightsCustomColor(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
<!-- tabs:end -->

## Définir la couleur des neons

> [!warning]
> Pour toute utilisation `côté client` de l'export ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle du véhicule. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleNeonLightsColour(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleNeonLightsColour", netId --[[ number ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleNeonLightsColour(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
<!-- tabs:end -->

{docsify-updated}
