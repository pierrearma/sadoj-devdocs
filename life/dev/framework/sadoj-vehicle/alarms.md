# sadoj-vehicle - Alarmes

> Auteur de la page: Thomas.

---


## SetVehicleAlarm
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleAlarm(vehicle --[[ vehicle ]], state --[[ boolean ]][, time --[[ number ]]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut activer/désactiver l'alarme.
  * **state:** `true` pour activer l'alarme, `false` pour la désactiver.
  * **time:** (optionnel) Durée en millisecondes pendant laquelle l'alarme doit sonner.
<!-- tabs:end -->

## IsVehicleAlarmActivated
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isActivated --[[ boolean ]] = exports["sadoj-vehicle"]:IsVehicleAlarmActivated(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule dont on veut vérifier l'état de l'alarme.
* **Retourne:**
  * **isActivated:** `true` si l'alarme est activée, `false` sinon.
<!-- tabs:end -->