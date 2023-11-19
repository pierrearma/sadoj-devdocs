# sadoj-core - Fonctions - Joueur

> Auteur de la page: Pierre & Thomas.

---

#### GetPlayerFromIdentifier

<!-- tabs:start -->

#### **Export (serveur)**

```lua
local playerSrc --[[ Integer ]] = exports["sadoj-core"]:GetPlayerFromIdentifier(identifier --[[ string ]])
```

* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
* **Retour:**
  * **playerSrc:** Le Server Id du joueur correspondant à l'identifiant, ou `nil` si aucun joueur ne correspond.

<!-- tabs:end -->

#### GetPlayerIdentifier

<!-- tabs:start -->

#### **Export (client)**

```lua
local identifier --[[ String ]] = exports["sadoj-core"]:GetPlayerIdentifier(playerId --[[ Integer ]])
```

* **Paramètres:**
  * **playerId:** Le joueur (pas le Server Id).
* **Retour:**
  * **identifier:** L'identifiant du joueur.

#### **Export (serveur)**

```lua
local identifier --[[ string ]] = exports["sadoj-core"]:GetPlayerIdentifier(playerSrc --[[ Integer ]])
```

* **Paramètres:**
  * **playerSrc:** Le Server Id du joueur.
* **Retour:**
  * **identifier:** L'identifiant du joueur.

<!-- tabs:end -->

#### GetAllPlayers

<!-- tabs:start -->

#### **Export (serveur)**

```lua
local players --[[ table ]] = exports["sadoj-core"]:GetAllPlayers([ignoreList --[[ table ]]])
```

* **Paramètres:**
  * **ignoreList:** Liste des joueurs à ignorer (aucun par défaut).
* **Retour:**
  * **players:** Liste des joueurs.

<!-- tabs:end -->

#### GetAllPlayersInScope

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayersInScope([ignoreList --[[ table ]]])
```

* **Paramètres:**
  * **ignoreList:** Liste des joueurs à ignorer (aucun par défaut).
* **Retour:**
  * **result:** Liste des joueurs.

<!-- tabs:end -->

#### GetClosestPlayerFromCoords

<!-- tabs:start -->

#### **Export (client)**

```lua
local closestPlayer --[[ Player ]], closestDistance --[[ number ]] = exports["sadoj-core"]:GetClosestPlayerFromCoords(coords --[[ vector3 ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
  * **coords:** Coordonnées où chercher.
  * **ignoreList:** Liste des joueurs à ignorer (aucun par défaut).
* **Retour:**
  * **closestPlayer:** Le joueur le plus proche, `-1` si aucun.
  * **closestDistance:** La distance entre le joueur le plus proche et le point de référence, `-1` si aucun.

#### **Export (serveur)**

```lua
local closestPlayer --[[ Player ]], closestDistance --[[ number ]] = exports["sadoj-core"]:GetClosestPlayerFromCoords(coords --[[ vector3 ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
  * **coords:** Coordonnées où chercher.
  * **ignoreList:** Liste des joueurs à ignorer (aucun par défaut).
* **Retour:**
  * **closestPlayer:** Le joueur le plus proche, `-1` si aucun.
  * **closestDistance:** La distance entre le joueur le plus proche et le point de référence, `-1` si aucun.

<!-- tabs:end -->

#### GetPlayersInRadius

<!-- tabs:start -->

#### **Export (client)**

```lua
local players --[[ table ]] = exports["sadoj-core"]:GetPlayersInRadius(coords --[[ vector3 ]], radius --[[ number ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
  * **coords:** Coordonnées où chercher.
  * **radius:** Rayon de recherche.
  * **ignoreList:** Liste des joueurs à ignorer (aucun par défaut).
* **Retour:**
  * **players:** Liste des joueurs dans le rayon.

#### **Export (serveur)**

```lua
local players --[[ table ]] = exports["sadoj-core"]:GetPlayersInRadius(coords --[[ vector3 ]], radius --[[ number ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
  * **coords:** Coordonnées où chercher.
  * **radius:** Rayon de recherche.
  * **ignoreList:** Liste des joueurs à ignorer (aucun par défaut).
* **Retour:**
  * **players:** Liste des joueurs dans le rayon.

<!-- tabs:end -->

#### Teleport

<!-- tabs:start -->

#### **Export (client)**

```lua
exports["sadoj-core"]:Teleport(coords --[[ vector3 ]], heading --[[ number ]], canTeleportVehicle --[[ boolean ]])
```

* **Paramètres:**
  * **coords:** Coordonnées où se téléporter.
  * **heading:** Orientation du joueur.
  * **canTeleportVehicle:** Peut-on téléporter un véhicule?

<!-- tabs:end -->

{docsify-updated}