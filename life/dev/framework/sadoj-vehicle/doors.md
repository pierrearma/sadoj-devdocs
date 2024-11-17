# sadoj-vehicle - Portes

> Auteur de la page: Thomas.

---

Ce module permet de gérer la synchronisation des portes.

L'index des portes est le suivant :
```lua
VEH_EXT_DOOR_DSIDE_F = 0,
VEH_EXT_DOOR_DSIDE_R = 1,
VEH_EXT_DOOR_PSIDE_F = 2,
VEH_EXT_DOOR_PSIDE_R = 3,
VEH_EXT_BONNET = 4,
VEH_EXT_BOOT = 5,
```




## Ouvrir les portes d'un véhicule

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleDoorOpen(vehicle --[[ vehicle ]], doorIndex --[[ number ]], loose --[[ boolean ]], instantly --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **doorIndex:** l'index de la fenêtre.
  * **loose:** si `true`, la porte est « desserrée » (si c'est vrai, les portes n'ont pas de « ressort » et peuvent être fermées facilement.).
  * **instantly:** si `true`, la porte s'ouvre instantanément.
<!-- tabs:end -->

## Fermer les portes d'un véhicule

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleDoorShut(vehicle --[[ vehicle ]], doorIndex --[[ number ]], instantly --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **doorIndex:** l'index de la fenêtre.
  * **instantly:** si `true`, la porte se ferme instantanément.
<!-- tabs:end -->

## Casser une porte

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleDoorBroken(vehicle --[[ vehicle ]], doorIndex --[[ number ]], deleteDoor --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **doorIndex:** l'index de la fenêtre.
  * **deleteDoor:** si `true`, la porte est supprimée.
<!-- tabs:end -->

## Réparer une porte

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-vehicle"]:FixVehicleDoor(vehicle --[[ vehicle ]], doorIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **doorIndex:** l'index de la fenêtre.
<!-- tabs:end -->

## Vérifier si une porte est cassée

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isBroken --[[ boolean ]] = exports["sadoj-vehicle"]:IsVehicleDoorBroken(vehicle --[[ vehicle ]], doorIndex --[[ number ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **doorIndex:** l'index de la fenêtre.
* **Retour:** `true` si la porte est cassée, `false` sinon.
<!-- tabs:end -->


