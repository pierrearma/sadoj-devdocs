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

> [!ATTENTION]
> Cette export permet de récupérer la plaque qui est affiché sur le véhicule, attention cela peut être une fausse plaque.
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local plate --[[ string ]] = exports["sadoj-vehicle"]:GetVehiclePlate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **plate:** la plaque du véhicule.
<!-- tabs:end -->

### Récupérer la vraie plaque d'un véhicule
> [!ATTENTION]
> Cette export permet de récupérer la vraie plaque du véhicule, même si une fausse plaque est affiché.
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local plate --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleRealPlate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **plate:** la vraie plaque du véhicule.
<!-- tabs:end -->

### Changer la plaque d'un véhicule
<!-- tabs:start -->
### **Event (client & serveur)**
```lua
exports["sadoj-vehicle"]:ChangeVehiclePlate(vehicle --[[ vehicle ]], plate --[[ string ]], displayOnly --[[ boolean ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **plate:** la nouvelle plaque du véhicule.
  * **displayOnly:** si `true`, la plaque ne sera changé que visuellement, la vraie plaque du véhicule ne sera pas changé.
<!-- tabs:end -->

### Changer la plaque d'un véhicule par son identifiant
<!-- tabs:start -->
### **Event (client & serveur)**
```lua
exports["sadoj-vehicle"]:ChangeVehiclePlateByIdentifier(identifier --[[ string ]], plate --[[ string ]], displayOnly --[[ boolean ]])
```
* **Paramètres:**
  * **identifier:** l'identifiant du véhicule.
  * **plate:** la nouvelle plaque du véhicule.
  * **displayOnly:** si `true`, la plaque ne sera changé que visuellement, la vraie plaque du véhicule ne sera pas changé.
<!-- tabs:end -->

