# sadoj-core - Fonctions - Véhicule

> Auteur de la page: Pierre & Thomas.

---

#### GetAllVehiclesInScope

Permet de récupérer l'ensemble des véhicules existant localement (avec OneSync Infinity, cela retourne uniquement les véhicules dans le *scope* du joueur).

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllVehiclesInScope()
```

* **Retour:**
  * **result:** Tableau avec la liste des entités.
    ```lua
    [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
    ```

<!-- tabs:end -->

#### GetClosestVehicleFromCoords

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ Entity ]] = exports["sadoj-core"]:GetClosestVehicleFromCoords(coords --[[ vector3 ]])
```

* **Paramètres:**
  * **coords:** Coordonnées où chercher.
* **Retour:**
  * **result:** Le véhicule le plus proche de des coordonnées. Faire un [DoesEntityExist](https://docs.fivem.net/natives/?_0x7239B21A38F536BA) pour vérifier l'existence du véhicule.

<!-- tabs:end -->

#### IsAllVehicleDoorsClosed

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-core"]:IsAllVehicleDoorsClosed(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule à vérifier.
* **Retour:**
  * **result:** `true` si toutes les portes sont fermées, `false` sinon.

<!-- tabs:end -->

#### GetVehicleSeatPedIsUsing

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:GetVehicleSeatPedIsUsing(ped --[[ Ped ]])
```

* **Paramètres:**
  * **ped:** Ped à vérifier.
* **Retour:**
  * **result:** Le numéro de la place du ped, `-2` si non trouvé. Voir [IsVehicleSeatFree](https://docs.fivem.net/natives/?_0x22AC59A870E6A669) pour l'index des places.

<!-- tabs:end -->

#### GetAllPedsInVehicle

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:GetAllPedsInVehicle(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule à vérifier.
* **Retour:**
  * **result:** Tableau avec la liste des peds.
    ```lua
    [ 115912, 15912, 1981561, 19211, 18161, ...]
    ```
<!-- tabs:end -->

#### GetAllPlayersInVehicle

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:GetAllPlayersInVehicle(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule à vérifier.
* **Retour:**
  * **result:** Tableau avec la liste des joueurs.
    ```lua
    [ 1, 2, 3, 4, 5, ...]
    ```
<!-- tabs:end -->

#### IsVehicleEmpty

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-core"]:IsVehicleEmpty(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule à vérifier.
* **Retour:**
  * **result:** `true` si le véhicule est vide, `false` sinon.

<!-- tabs:end -->

#### GetVehicleInDirection

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ Vehicle ]] = exports["sadoj-core"]:GetVehicleInDirection(coordsFrom --[[ vector3 ]], coordsTo --[[ vector3 ]])
```

* **Paramètres:**
  * **coordsFrom:** Coordonnées de départ.
  * **coordsTo:** Coordonnées d'arrivée.
* **Retour:**
  * **result:** Le véhicule trouvé. Faire un [DoesEntityExist](https://docs.fivem.net/natives/?_0x7239B21A38F536BA) pour vérifier l'existence du véhicule.

<!-- tabs:end -->

#### GetVehicleInFrontOfPed

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ Vehicle ]] = exports["sadoj-core"]:GetVehicleInFrontOfPed(ped --[[ Ped ]][, distance --[[ number ]]])
```

* **Paramètres:**
  * **ped:** Ped.
  * **distance:** Distance maximum à parcourir, par défaut: `5`.
* **Retour:**
  * **result:** Le véhicule trouvé. Faire un [DoesEntityExist](https://docs.fivem.net/natives/?_0x7239B21A38F536BA) pour vérifier l'existence du véhicule.

<!-- tabs:end -->

{docsify-updated}
