# sadoj-vehicle - Fenêtres

> Auteur de la page: Thomas.

---

Ce module permet de gérer la synchronisation des fenêtres des véhicules.

L'index des fenêtres est compris entre 0 et 7.
```lua
VEH_EXT_WINDOW_LF = 0,
VEH_EXT_WINDOW_RF = 1,
VEH_EXT_WINDOW_LR = 2,
VEH_EXT_WINDOW_RR = 3,
VEH_EXT_WINDOW_LM = 4,
VEH_EXT_WINDOW_RM = 5,
VEH_EXT_WINDSCREEN = 6,
VEH_EXT_WINDSCREEN_R = 7,
```




## Ouvrir les fenêtres d'un véhicule


<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:OpenVehicleWindow(vehicle --[[ vehicle ]], windowIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **windowIndex:** l'index de la fenêtre.
<!-- tabs:end -->

## Fermer les fenêtres d'un véhicule

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:CloseVehicleWindow(vehicle --[[ vehicle ]], windowIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **windowIndex:** l'index de la fenêtre.
<!-- tabs:end -->

## Vérifier si une fenêtre est ouverte

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isOpen = exports["sadoj-vehicle"]:IsVehicleWindowOpen(vehicle --[[ vehicle ]], windowIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **windowIndex:** l'index de la fenêtre.
* **Retour:**
  * **isOpen:** `true` si la fenêtre est ouverte, `false` sinon.
<!-- tabs:end -->

## Casser une fenêtre

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SmashVehicleWindow(vehicle --[[ vehicle ]], windowIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **windowIndex:** l'index de la fenêtre.
<!-- tabs:end -->

## Réparer une fenêtre

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:FixVehicleWindow(vehicle --[[ vehicle ]], windowIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **windowIndex:** l'index de la fenêtre.
<!-- tabs:end -->

## Vérifier si une fenêtre est cassée

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isBroken = exports["sadoj-vehicle"]:VehicleWindowIsBroken(vehicle --[[ vehicle ]], windowIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **windowIndex:** l'index de la fenêtre.
* **Retour:**
  * **isBroken:** `true` si la fenêtre est cassée, `false` sinon.
<!-- tabs:end -->


{docsify-updated}
