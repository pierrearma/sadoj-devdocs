# sadoj-vehiclelock

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-vehiclelock`

Ce script permet de verrouiller et déverrouiller les véhicules et de gérer la synchronisation entre les clients.

Il existe 4 statuts différents:
- `0`: véhicule déverrouillé
- `1`: véhicule verrouillé
- `2`: véhicule bloqué verrouillé (ne peut pas être déverrouillé hors d'un script)
- `3`: véhicule bloqué déverrouillé (ne peut pas être verrouillé hors d'un script)

## Utilisation

### GetVehicleLockStatus

Permet de récupérer le statut du véhicule.

<!-- tabs:start -->

#### **Export (client & serveur)**

```lua
local result --[[ integer ]] = exports["sadoj-vehiclelock"]:GetVehicleLockStatus(vehicle --[[ number ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule.
* **Retourne:**
  * **result:** Statut du véhicule.

<!-- tabs:end -->

### SetVehicleLockStatus

Permet de définir le statut du véhicule.

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-vehiclelock:server:setVehicleLockStatus", vehicleNetId --[[ number ]], status --[[ integer ]])
```

* **Paramètres:**
  * **vehicleNetId:** NetId du véhicule.
  * **status:** Statut du véhicule.

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclelock:server:setVehicleLockStatus", vehicleNetId --[[ number ]], status --[[ integer ]])
```

* **Paramètres:**
  * **vehicleNetId:** NetId du véhicule.
  * **status:** Statut du véhicule.

<!-- tabs:end -->

### IsVehicleOpen

Permet de savoir si le véhicule est ouvert.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-vehiclelock"]:IsVehicleOpen(vehicle --[[ number ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule.
* **Retourne:**
    * **result:** Booléen qui indique si le véhicule est ouvert.

<!-- tabs:end -->

### LockAction

Permet de verrouiller ou déverrouiller le véhicule comme quand on appuie sur la touche (cela joue l'animation, etc.).

<!-- tabs:start -->

#### **Export (client)**

```lua
exports["sadoj-vehiclelock"]:LockAction(vehicle --[[ number ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule.

<!-- tabs:end -->

### AddKeyToPlayer

Permet d'ajouter une clé au joueur. Cela est sauvegardé jusqu'au prochain redémarrage du serveur.

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-vehiclelock:server:AddKeyToPlayer", vehicleVin --[[ string ]][, playerSrc --[[ number ]]])
```

* **Paramètres:**
  * **vehicleVin:** Vin du véhicule.
  * **playerSrc:** ServerId du joueur (optionnel, par défaut c'est le joueur qui a appelé l'event)

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclelock:server:AddKeyToPlayer", vehicleVin --[[ string ]], playerSrc --[[ number ]])
```

* **Paramètres:**
  * **vehicleVin:** Vin du véhicule.
  * **playerSrc:** ServerId du joueur.

<!-- tabs:end -->

### RemoveKeyFromPlayer

Permet de retirer une clé au joueur. Si c'est un véhicule dont le joueur a les clés en base de données, lorsqu'il se reconnectera, il aura les clés.

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-vehiclelock:server:RemoveKeyFromPlayer", vehicleVin --[[ string ]][, playerSrc --[[ number ]]])
```

* **Paramètres:**
  * **vehicleVin:** Vin du véhicule.
  * **playerSrc:** ServerId du joueur (optionnel, par défaut c'est le joueur qui a appelé l'event)

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclelock:server:RemoveKeyFromPlayer", vehicleVin --[[ string ]], playerSrc --[[ number ]])
```

* **Paramètres:**
  * **vehicleVin:** Vin du véhicule.
  * **playerSrc:** ServerId du joueur.

<!-- tabs:end -->

### ChangeKeyOwner

Supprime les clés a tous les joueurs et les ajoute au nouveau propriétaire. Ne fait aucune modification en base de données.

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-vehiclelock:server:ChangeKeyOwner", vehicleVin --[[ string ]], playerSrc --[[ number ]])
```

* **Paramètres:**
  * **vehicleVin:** Vin du véhicule.
  * **playerSrc:** ServerId du joueur qui deviendra le nouveau propriétaire (optionnel, par défaut c'est le joueur qui a appelé l'event).

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclelock:server:ChangeKeyOwner", vehicleVin --[[ string ]], playerSrc --[[ number ]])
```

* **Paramètres:**
  * **vehicleVin:** Vin du véhicule.
  * **playerSrc:** ServerId du joueur qui deviendra le nouveau propriétaire.

<!-- tabs:end -->

{docsify-updated}