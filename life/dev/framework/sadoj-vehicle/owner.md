# sadoj-vehicle - Propriétaire

> Auteur de la page: Thomas.

---
## GetVehicleOwner


<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local owner --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleOwner(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **owner:** le propriétaire du véhicule. `nil` si le véhicule n'a pas de propriétaire.
<!-- tabs:end -->


## ChangeVehicleOwner

<!-- tabs:start -->
### **Export (serveur)**
```lua
local success --[[ boolean ]] = exports["sadoj-vehicle"]:ChangeVehicleOwner(vehicle --[[ vehicle ]], owner --[[ string ]][, updateHistory --[[ boolean ]]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **owner:** le nouveau propriétaire du véhicule.
  * **updateHistory:** si `true`, le changement de propriétaire sera enregistré dans l'historique du véhicule. `true` par défaut.
* **Retour:**
  * **success:** `true` si le changement de propriétaire a réussi, `false` sinon.
<!-- tabs:end -->

## ChangeVehicleOwnerByIdentifier

<!-- tabs:start -->
### **Export (serveur)**
```lua
local success --[[ boolean ]] = exports["sadoj-vehicle"]:ChangeVehicleOwnerByIdentifier(identifier --[[ string ]], owner --[[ string ]][, updateHistory --[[ boolean ]]])
```
* **Paramètres:**
  * **identifier:** l'identifiant du véhicule.
  * **owner:** le nouveau propriétaire du véhicule.
  * **updateHistory:** si `true`, le changement de propriétaire sera enregistré dans l'historique du véhicule. `true` par défaut.
* **Retour:**
  * **success:** `true` si le changement de propriétaire a réussi, `false` sinon.
<!-- tabs:end -->



