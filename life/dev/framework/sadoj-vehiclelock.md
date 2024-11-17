# sadoj-vehiclelock

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-vehiclelock`

Ce script permet de verrouiller et déverrouiller les véhicules et de gérer la synchronisation entre les clients.

On retrouve également le système de clés qui s'appuie sur l'inventaire des joueurs et sur le lockId (uuid) des véhicules.

Il existe 4 statuts différents:
- `0`: véhicule déverrouillé
- `1`: véhicule verrouillé
- `2`: véhicule bloqué verrouillé (ne peut pas être déverrouillé hors d'un script)
- `3`: véhicule bloqué déverrouillé (ne peut pas être verrouillé hors d'un script)

## Système de verrouillage

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

## Système de clés

### GetVehicleLockId

Permet de récupérer le lockId du véhicule.

<!-- tabs:start -->

#### **Export (client & serveur)**

```lua
local result --[[ string ]] = exports["sadoj-vehiclelock"]:GetVehicleLockId(vehicle --[[ number ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule.
  * **Retourne:**
    * **result:** LockId du véhicule.

<!-- tabs:end -->

### AddKeyToPlayer

Permet d'ajouter une clé à l'inventaire du joueur.

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-vehiclelock:server:AddKeyToPlayer", vehicleLockId --[[ string ]], itemLabel --[[ string ]][, playerSrc --[[ number ]]])
```

* **Paramètres:**
  * **vehicleLockId:** LockId du véhicule.
  * **itemLabel:** Nom de l'item (optionnel).
  * **playerSrc:** ServerId du joueur (optionnel, par défaut c'est le joueur qui a appelé l'event).

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclelock:server:AddKeyToPlayer", vehicleLockId --[[ string ]], itemLabel --[[ string ]], playerSrc --[[ number ]])
```

* **Paramètres:**
  * **vehicleLockId:** LockId du véhicule.
  * **itemLabel:** Nom de l'item.
  * **playerSrc:** ServerId du joueur.

<!-- tabs:end -->

### RemoveKeyFromPlayer

Permet de retirer les clés correspondantes au lockId de l'inventaire du joueur.

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-vehiclelock:server:RemoveKeyFromPlayer", vehicleLockId --[[ string ]][, playerSrc --[[ number ]]])
```

* **Paramètres:**
  * **vehicleLockId:** LockId du véhicule.
  * **playerSrc:** ServerId du joueur (optionnel, par défaut c'est le joueur qui a appelé l'event)

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclelock:server:RemoveKeyFromPlayer", vehicleLockId --[[ string ]], playerSrc --[[ number ]])
```

* **Paramètres:**
  * **vehicleLockId:** LockId du véhicule.
  * **playerSrc:** ServerId du joueur.

<!-- tabs:end -->

### HasKeyOfVehicle

Permet de savoir si le joueur possède la clé du véhicule dans son inventaire.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-vehiclelock"]:HasKeyOfVehicle(vehicle --[[ number ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule.
* **Retourne:**
    * **result:** Booléen qui indique si le joueur possède la clé du véhicule dans son inventaire.

<!-- tabs:end -->
