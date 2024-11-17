# sadoj-vehicle - Autorisation des véhicules locaux

> Auteur de la page: Thomas.

---
> [!note]
> Avec ce script plus aucun joueur ne pourra monter dans un véhicule qui n'est pas network (donc pas synchroniser), sauf si vous lui avez donné l'autorisation. Cela permet de faire des véhicules qui ne sont pas synchroniser pour les magasins (concessionnaire) par exemple.

## AddLocalVehiclePermission
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:AddLocalVehiclePermission(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez ajouter l'autorisation.

<!-- tabs:end -->

## RemoveLocalVehiclePermission
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:RemoveLocalVehiclePermission(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez retirer l'autorisation.
<!-- tabs:end -->

## LocalVehicleIsAuthorized
<!-- tabs:start -->
### **Export (client)**
```lua
local isAuthorized --[[ boolean ]] = exports["sadoj-vehicle"]:LocalVehicleIsAuthorized(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez savoir si il est autorisé.
* **Retour:**
  * **isAuthorized:** `true` si le véhicule est autorisé, `false` sinon.
<!-- tabs:end -->

