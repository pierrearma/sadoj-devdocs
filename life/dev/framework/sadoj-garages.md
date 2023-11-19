# sadoj-garages

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-garages`


* Liste de tous les statuts d'un véhicule à disponible :
  * **state 0**: Le véhicule se trouve dans un garage.
  * **state 1**: Le véhicule ne se trouve pas dans un garage il est donc sorti.
  * **state 2**: Le véhicule est en cours de réparation (PNJ).
  * **state 3**: Le véhicule se trouve en fourrière.


## Utilisation

### Apparition du véhicule

Cet événement permet d'écouter l'apparition d'un véhicule à partir d'un garage (client et serveur).

<!-- tabs:start -->

#### **Event (client)**

```lua
RegisterNetEvent("sadoj-garages:client:VehicleSpawn", function(netId, valueBdd, valueGarage)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **valueBdd:** Toutes les données enregistrées dans la base de données (Table user_vehicle).
  * **valueGarage:** Toutes les données qui se trouve dans le fichier config du garageID en question.


#### **Event (serveur)**

```lua
RegisterServerEvent("sadoj-garages:server:VehicleSpawn", function(netId, valueBdd, valueGarage)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **valueBdd:** Toutes les données enregistrées dans la base de données (Table user_vehicle).
  * **valueGarage:** Toutes les données qui se trouve dans le fichier config du garageID en question.

<!-- tabs:end -->

### Disparition du véhicule

Cet événement permet d'écouter la d'isparition d'un véhicule à partir d'un garage (client et serveur).

<!-- tabs:start -->

#### **Event (client)**

```lua
RegisterNetEvent("sadoj-garages:client:VehicleStored", function(garageId, vehicleIdentifier)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **garageId:** Id du garage dans lequel le véhicule est stocké.
  * **vehicleIdentifier:** Identifiant du véhicule stocké.


#### **Event (serveur)**

```lua
RegisterServerEvent("sadoj-garages:server:VehicleStored", function(garageId, vehicleIdentifier)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **garageId:** Id du garage dans lequel le véhicule est stocké.
  * **vehicleIdentifier:** Identifiant du véhicule stocké.

<!-- tabs:end -->

### Rangement d'un véhicule

Cet export vous permet vérifier si le véhicule peut être rangé dans ce garage.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-garages"]:CheckCanStoreVehicleByGarageId(vehicle --[[ vehicle ]], garageId --[[ integer ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez rentrer dans le garage.
  * **garageId:** ID du garage dans lequel vous souhaitez rentrer le véhicule.
* **Résultats:**
  * `true` si le véhicule peut être rangé dans ce garage, `false` sinon.

<!-- tabs:end -->

Cet export vous permet de ranger un véhicule dans un script à autre que `sadoj-garages`.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports["sadoj-garages"]:StoreVehicle(vehicle --[[ vehicle ]], garageId --[[ integer ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez rentrer dans le garage.
  * **garageId:** ID du garage dans lequel vous souhaitez rentrer le véhicule.

<!-- tabs:end -->


### GetGaragesNameByGarageId

<!-- tabs:start -->
#### **Export (client)**
```lua
local Name --[[ string ]] = exports["sadoj-garages"]:GetGaragesNameByGarageId(garageId --[[ integer ]])
```
* **Paramètres:**
  * **garageId:** ID du garage duquel vous souhaitez récupérer le nom.

#### **Serveur (client)**
```lua
local Name --[[ string ]] = exports["sadoj-garages"]:GetGaragesNameByGarageId(garageId --[[ integer ]])
```
* **Paramètres:**
  * **garageId:** ID du garage duquel vous souhaitez récupérer le nom.
<!-- tabs:end -->


### Conditions de rangement

#### AddVehicleStoringCondition
<!-- tabs:start -->
#### **Export (client)**
```lua
local id --[[ integer  ]] = exports["sadoj-garages"]:AddVehicleStoringCondition(function()
  -- votre code ici
end --[[ function  ]])
```
* **Retour:**
  * **id:** L'identifiant de la condition.
<!-- tabs:end -->

#### RemoveVehicleStoringCondition
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-garages"]:RemoveVehicleStoringCondition(id --[[ integer ]])
```
* **Paramètres:**
  * **id:** L'identifiant de la condition.
<!-- tabs:end -->

### Fonction avant rangement

#### AddFunctionBeforeVehicleStoring
<!-- tabs:start -->
#### **Export (client)**
```lua
local id --[[ integer  ]] = exports["sadoj-garages"]:AddFunctionBeforeVehicleStoring(function(vehicle --[[ vehicle ]], garageId --[[ integer ]])
  -- votre code ici
end --[[ function  ]])
```
* **Retour:**
  * **id:** L'identifiant de la fonction.
<!-- tabs:end -->

#### RemoveFunctionBeforeVehicleStoring
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-garages"]:RemoveFunctionBeforeVehicleStoring(id --[[ integer ]])
```
* **Paramètres:**
  * **id:** L'identifiant de la fonction.
<!-- tabs:end -->

{docsify-updated}
