# sadoj-vehicle - Divers

> Auteur de la page: Thomas.

---

## VehicleIsRegister
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isRegister --[[ boolean ]] = exports["sadoj-vehicle"]:VehicleIsRegister(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Véhicule à vérifier.
* **Retour:**
  * **isRegister:** `true` si le véhicule est enregistré, `false` sinon.
<!-- tabs:end -->

## DoesVehicleHasPlate
> [!WARNING]
> Les modèles des véhicules sans plaque doivent être configuré dans les fichiers config du script.
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local hasPlate --[[ boolean ]] = exports["sadoj-vehicle"]:DoesVehicleHasPlate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez savoir si il a une plaque.
* **Retour:**
  * **hasPlate:** `true` si le véhicule a une plaque, `false` sinon.
<!-- tabs:end -->

## GetVehicleLabel
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local label --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleLabel(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer le label du véhicule.
* **Retour:**
  * **label:** le label du véhicule.
<!-- tabs:end -->


## GetVehicleCertificateDate
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local certificateDate --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleCertificateDate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez récupérer la date du certificat.
* **Retour:**
  * **certificateDate:** la date du certificat..
<!-- tabs:end -->

## VehicleCertificateDateIsValide
> [!note]
> Le certificat de circulation est valable 6 mois.
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local isValide --[[ boolean ]] = exports["sadoj-vehicle"]:VehicleCertificateDateIsValide(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule où vous voulez savoir si la date du certificat est valide.
* **Retour:**
  * **isValide:** `true` si la date du certificat est valide, `false` sinon.
<!-- tabs:end -->

{docsify-updated}
