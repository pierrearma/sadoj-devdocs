# sadoj-dark

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas & Pierre
* Emplacement: `[SCRIPT]/[DARK]/sadoj-dark`

## Utilisation

### Crochetage de voiture

Cet export vous permet de vérifier si un véhicule a été crocheter de manière illégale.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dark"]:IsVehicleLockPicked(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le véhicule a été crocheté, `false` sinon.

#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dark"]:IsVehicleLockPicked(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le véhicule a été crocheté, `false` sinon.

<!-- tabs:end -->

### Position où a été crocheté un véhicule

Cet export vous permet de récupérer la position où le véhicule a été crocheté de manière illégale.

<!-- tabs:start -->

#### **Export (client)**

```lua
local coords --[[ vector3 ]] = exports["sadoj-dark"]:GetVehicleLockPickingPosition(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule sur lequel vous souhaitez récupérer les coordonnées du crochetage.
* **Résultats:**
  * Coordonnées où a été crocheté le véhicule. Retourne ? s'il n'a pas été crocheté.

#### **Export (serveur)**

```lua
local coords --[[ vector3 ]] = exports["sadoj-dark"]:GetVehicleLockPickingPosition(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule sur lequel vous souhaitez récupérer les coordonnées du crochetage.
* **Résultats:**
  * Coordonnées où a été crocheté le véhicule. Retourne ? s'il n'a pas été crocheté.

<!-- tabs:end -->

{docsify-updated}
