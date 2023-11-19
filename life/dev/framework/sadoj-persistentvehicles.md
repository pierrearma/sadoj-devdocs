# sadoj-persistentvehicles

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-persistentvehicles`

Ce script permet de rendre un véhicule persistant, c'est-à-dire que le véhicule ne disparaîtra jamais.

## Utilisation

### Enregistrer un véhicule

<!-- tabs:start -->
#### **Export (client)**

```lua
local identifier --[[ string ]] = exports["sadoj-persistentvehicles"]:RegisterVehicle(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez enregistrer.
* **Résultat:**
  * **identifier:** L'identifiant du véhicule.
<!-- tabs:end -->

### Désenregistrer un véhicule

<!-- tabs:start -->
#### **Export (client)**

```lua
exports["sadoj-persistentvehicles"]:ForgetVehicle(identifier --[[ string ]][, delete --[[ boolean ]]])
```

* **Paramètres:**
  * **identifier:** L'identifiant du véhicule que vous souhaitez désenregistrer.
  * **delete:** Si vrai, si vous souhaitez supprimé le véhicule.

#### **Event (serveur)**
```lua
TriggerEvent("sadoj-persistentvehicles:server:ForgetVehicle", identifier --[[ string ]][, delete --[[ boolean ]]])
```
* **Paramètres:**
  * **identifier:** L'identifiant de l'enregistrement.
  * **delete:** Si vrai, si vous souhaitez supprimé le véhicule.
<!-- tabs:end -->

### Evénement d'écoute

#### Savoir quand un véhicule est enregistré

<!-- tabs:start -->
#### **Event (client)**

```lua
RegisterNetEvent("sadoj-persistentvehicles:OnVehicleRegistered", function(identifier, netId)

  --Mettez votre code ici

end)
```
* **Résultats:**
  * **identifier:** L'identifiant de l'enregistrement.
  * **netId:** Le Network ID du véhicule enregistré.
#### **Event (serveur)**
```lua
RegisterServerEvent("sadoj-persistentvehicles:OnVehicleRegistered", function(identifier, vehicle)

  --Mettez votre code ici

end)
```
* **Résultats:**
  * **identifier:** L'identifiant de l'enregistrement.
  * **vehicle:** Le véhicule enregistré.
<!-- tabs:end -->

#### Savoir quand un véhicule apparaît

<!-- tabs:start -->
#### **Event (client)**
```lua
RegisterNetEvent("sadoj-persistentvehicles:OnVehicleSpawn", function(netId, value)

  --Mettez votre code ici

end)
```
* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **value:** Toutes les données enregistrées par le script sous forme de tableau.
#### **Event (serveur)**
```lua
RegisterServerEvent("sadoj-persistentvehicles:OnVehicleSpawn", function(serverId, netId, value)

  --Mettez votre code ici

end)
```
* **Résultats:**
  * **serverId:** Le server ID du joueur qui vient de déclencher l'apparition du véhicule.
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **value:** Toutes les données enregistrées par le script sous forme de tableau.
<!-- tabs:end -->

#### Savoir quand un véhicule est désenregistré

<!-- tabs:start -->
#### **Event (serveur)**
```lua
RegisterNetEvent("sadoj-persistentvehicles:OnVehicleForgotten", function(identifier, vehicle)

  --Mettez votre code ici

end)
```
* **Résultats:**
  * **identifier:** L'identifiant de l'enregistrement.
  * **vehicle:** Le véhicule désenregistré.
<!-- tabs:end -->


### Champ personnalisés

<!-- tabs:start -->
#### **Export (serveur)**

```lua
exports["sadoj-persistentvehicles"]:RegisterField(GetCurrentResourceName(), name --[[ string ]], function(vehicleIdentifier --[[ string ]], value --[[ table ]])

end --[[ function ]])
```
* **Paramètres:**
  * **name:** Le nom du champ.
  * **func:** La fonction qui sera appelée pour récupérer la valeur du champ.
<!-- tabs:end -->

<!-- tabs:start -->
#### **Export (serveur)**

```lua
exports["sadoj-persistentvehicles"]:RemoveField(name --[[ string ]])

```
* **Paramètres:**
  * **name:** Le nom du champ.
<!-- tabs:end -->


<!-- tabs:start -->
#### **Export (serveur)**

```lua
exports["sadoj-persistentvehicles"]:FieldIsRegistered(name --[[ string ]])

```
* **Paramètres:**
  * **name:** Le nom du champ.
<!-- tabs:end -->

{docsify-updated}
