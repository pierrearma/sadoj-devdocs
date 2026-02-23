# sadoj-dispatch

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-dispatch`
* Redémarrage possible: `Non`

Un appel à différents statuts:
- `1`: En attente
- `2`: Unité en route
- `3`: Unité sur place
- `4`: Fini
- `5`: Aucune unité disponible
- `6`: Aucune unité connectée

Quand une centrale est liée à un appel, les options suivantes peuvent être passées:
- `responseType`: Le type de réponse attendue (Code 2, Code 3, ...). Par défaut: `nil`. (Uniquement pour les services de secours)
- `soundName`: Le nom du son à jouer. Par défaut: `nil`.
- `callType`: Le type de l'appel. Par défaut: `nil`. Par exemple: `backup`, `carjacking`, `stolen_vehicle`, `fire`.

## Utilisation

### Faire appel à une centrale

#### Création d'un appel
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local callId = exports["sadoj-dispatch"]:CreateCall(coords --[[ vector3 ]][, dist --[[ float ]]])
```
* **Paramètres:**
  * **coords:** La position de l'appel.
  * **dist:** La distance de l'appel. Facultatif (par défaut: `100.0`).
* **Retour:**
  * **callId:** L'identifiant de l'appel.
<!-- tabs:end -->

#### Lier une centrale à un appel
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  exports["sadoj-dispatch"]:AddCentralToCall(callId --[[ integer ]], central --[[ string ]], message --[[ string ]], callsource --[[ string ]], options --[[ table ]])
```
* **Paramètres:**
  * **callId:** L'identifiant de l'appel.
  * **central:** La centrale à lier.
  * **message:** Le message à envoyer à la centrale.
  * **callsource:** Le nom de la source qui a fait l'appel.
  * **options:** Les options de l'appel.
<!-- tabs:end -->


### Vérification

#### Vérifier si une centrale existe
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local exists = exports["sadoj-dispatch"]:DoesCentralExist(central --[[ string ]])
```
* **Paramètres:**
  * **central:** La centrale à vérifier.
* **Retour:**
  * **exists:** `true` si la centrale existe, `false` sinon.
<!-- tabs:end -->

#### Vérifier si un appel existe
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local exists = exports["sadoj-dispatch"]:DoesCallExist(callId --[[ integer ]])
```
* **Paramètres:**
  * **callId:** L'identifiant de l'appel.
* **Retour:**
  * **exists:** `true` si l'appel existe, `false` sinon.
<!-- tabs:end -->

#### Vérifier si un joueur est connecté à une centrale
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local isConnected = exports["sadoj-dispatch"]:PlayerIsConnectedToCentral(player --[[ player ]], central --[[ string ]])
```
* **Paramètres:**
  * **serverId:** Le joueur à vérifier.
  * **central:** La centrale à vérifier.
* **Retour:**
  * **isConnected:** `true` si le joueur est connecté à la centrale, `false` sinon.
<!-- tabs:end -->

#### Vérifier si un joueur est connecté à plusieurs centrales
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local isConnected = exports["sadoj-dispatch"]:PlayerIsConnectedToCentrals(player --[[ player ]], centrals --[[ table ]])
```
* **Paramètres:**
  * **serverId:** Le joueur à vérifier.
  * **centrals:** La liste des centrales à vérifier.
* **Retour:**
  * **isConnected:** `true` si le joueur est connecté à toutes les centrales, `false` sinon.
<!-- tabs:end -->

#### Vérifier si un joueur est connecté à une des centrales
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local isConnected --[[ boolean ]], central --[[ nil|string ]] = exports["sadoj-dispatch"]:PlayerIsConnectedToOneOfCentrals(player --[[ player ]], centrals --[[ table ]])
```
* **Paramètres:**
  * **serverId:** Le joueur à vérifier.
  * **centrals:** La liste des centrales à vérifier.
* **Retour:**
  * **isConnected:** `true` si le joueur est connecté à une des centrales, `false` sinon.
  * **central:** Le nom de la centrale à laquelle le joueur est connecté, ou `nil` si le joueur n'est connecté à aucune centrale.
<!-- tabs:end -->

### Récupération des données

#### Récupérer la liste des centrales
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local centrals = exports["sadoj-dispatch"]:GetCentrals()
```
* **Retour:**
  * **centrals:** La liste des centrales.
<!-- tabs:end -->

#### Récupérer le nombre de personnes connectées à une centrale
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local count = exports["sadoj-dispatch"]:GetNumberOfConnectedPlayerInCentral(central --[[ string ]])
```
* **Paramètres:**
  * **central:** La centrale à vérifier.
* **Retour:**
  * **count:** Le nombre de personnes connectées à la centrale.
<!-- tabs:end -->

#### Récupérer le nombre de personnes disponibles dans une centrale
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local count = exports["sadoj-dispatch"]:GetNumberOfAvailablePlayerInCentral(central --[[ string ]])
```
* **Paramètres:**
  * **central:** La centrale à vérifier.
* **Retour:**
  * **count:** Le nombre de personnes disponibles dans la centrale.
<!-- tabs:end -->

#### Récupérer toutes les centrales auxquelles un joueur est connecté
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local centrals = exports["sadoj-dispatch"]:GetPlayerConnectedCentrals(player --[[ player ]])
```
* **Paramètres:**
  * **player:** Le joueur à vérifier.
* **Retour:**
  * **centrals:** La liste des centrales auxquelles le joueur est connecté.
<!-- tabs:end -->

#### Récupérer tout les joueurs connectés à une centrale
<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
  local players = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentral(central --[[ string ]])
```
* **Paramètres:**
  * **central:** La centrale à vérifier.
* **Retour:**
  * **players:** La liste des joueurs connectés à la centrale.
<!-- tabs:end -->

### Autre

#### Envoyer un event à toutes les personnes connectées à une centrale
<!-- tabs:start -->
#### **Export (serveur)**
```lua
  exports["sadoj-dispatch"]:TriggerClientEventToAllPlayersConnectedToCentral(central --[[ string ]], event --[[ string ]], ...)
```
* **Paramètres:**
  * **central:** La centrale à vérifier.
  * **event:** L'événement à envoyer.
  * **...:** Les arguments à envoyer.
<!-- tabs:end -->



### Événement d'écoute

#### Connexion à une centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:OnPlayerConnectToCentral", function(central --[[ string ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterServerEvent("sadoj-dispatch:OnPlayerConnectToCentral", function(serverId --[[ integer ]], central --[[ string ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


#### Déconnexion d'une à centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:OnPlayerDisconnectFromCentral", function(central --[[ string ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterServerEvent("sadoj-dispatch:OnPlayerDisconnectFromCentral", function(serverId --[[ integer ]], central --[[ string ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

#### Changement de statut d'une centrale sur un appel
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:OnCentralCallStateChange", function(callId --[[ integer ]], central --[[ string ]], state --[[ string ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterServerEvent("sadoj-dispatch:OnCentralCallStateChange", function(callId --[[ integer ]], central --[[ string ]], state --[[ string ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

