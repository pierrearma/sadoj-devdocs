# sadoj-vehiclecustom

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-vehiclecustom`

## Utilisation

### Récupération des données

#### GetVehicleCustom

Cet export vous permet de récupérer tout le custom présent sur un véhicule.

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-vehiclecustom"]:GetVehicleCustom(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule ou vous souhaitez récupérer le custom.
* **Résultats:**
  * Tableau contenant la liste de tous les custom présent sur le véhicule.

<!-- tabs:end -->


### Application des données

#### SetVehicleCustom

Cet export vous permet de récupérer tout le custom présent sur un véhicule.

> [!WARNING]
> Si vous utilisez l'Export côté client il faut impérativement avoir le contrôle de l'entité. Pour cela vous pouvez utiliser ``NetworkHasControlOfEntity``, si vous n'avez pas le contrôle il faut utiliser l'événement côté serveur.

<!-- tabs:start -->
#### **Export (client)**

```lua
exports["sadoj-vehiclecustom"]:SetVehicleCustom(vehicle --[[ vehicle ]], custom --[[ table ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule ou vous souhaitez appliquer le custom.
  * **custom:** Le custom que vous souhaitez appliquer.

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclecustom:server:setVehicleCustom", netId --[[ integer ]], custom --[[ table ]])
```

* **Paramètres:**
  * **vehicle:** Le netId du véhicule.
  * **custom:** Le custom que vous souhaitez appliquer.
<!-- tabs:end -->


### Label

#### GetColorLabel

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ String ]] = exports["sadoj-vehiclecustom"]:GetColorLabel(colorId --[[ integer ]])
```

* **Paramètres:**
  * **colorId:** L'id de la couleur que vous souhaitez récupérer le label.
* **Résultats:**
  * Label de la couleur.

#### **Export (serveur)**

```lua
local result --[[ String ]] = exports["sadoj-vehiclecustom"]:GetColorLabel(colorId --[[ integer ]])
```

* **Paramètres:**
  * **colorId:** L'id de la couleur que vous souhaitez récupérer le label.
* **Résultats:**
  * Label de la couleur.
<!-- tabs:end -->

#### GetPlateIndexLabel

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ String ]] = exports["sadoj-vehiclecustom"]:GetPlateIndexLabel(plateIndex --[[ integer ]])
```

* **Paramètres:**
  * **plateIndex:** L'index de la plaque que vous souhaitez récupérer le label.
* **Résultats:**
  * Label de la plaque.

#### **Export (serveur)**

```lua
local result --[[ String ]] = exports["sadoj-vehiclecustom"]:GetPlateIndexLabel(plateIndex --[[ integer ]])
```

* **Paramètres:**
  * **plateIndex:** L'index de la plaque que vous souhaitez récupérer le label.
* **Résultats:**
  * Label de la plaque.
<!-- tabs:end -->


#### GetVehicleHornLabel

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ String ]] = exports["sadoj-vehiclecustom"]:GetVehicleHornLabel(hornId --[[ integer ]])
```

* **Paramètres:**
  * **hornId:** L'id du Klaxon que vous souhaitez récupérer le label.
* **Résultats:**
  * Label du Klaxon.

#### **Export (serveur)**

```lua
local result --[[ String ]] = exports["sadoj-vehiclecustom"]:GetVehicleHornLabel(hornId --[[ integer ]])
```

* **Paramètres:**
  * **hornId:** L'id du Klaxon que vous souhaitez récupérer le label.
* **Résultats:**
  * Label du Klaxon.
<!-- tabs:end -->


### Evénement d'écoute


<!-- tabs:start -->
#### **Event (serveur)**

```lua
RegisterServerEvent("sadoj-vehiclecustom:server:VehicleCustomUpdate", function(identifier, netId, custom)

  --Mettez votre code ici

end)
```

* **Résultats:**
  * **identifier:** Identifiant du véhicule.
  * **netId:** NetId du véhicule.
  * **custom:** Custom du véhicule.
<!-- tabs:end -->


{docsify-updated}
