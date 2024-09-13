# sadoj-dispatch

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-dispatch`
* Redémarrage possible: `Non`

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
  local isConnected = exports["sadoj-dispatch"]:PlayerIsConnectedToOneOfCentrals(player --[[ player ]], centrals --[[ table ]])
```
* **Paramètres:**
  * **serverId:** Le joueur à vérifier.
  * **centrals:** La liste des centrales à vérifier.
* **Retour:**
  * **isConnected:** `true` si le joueur est connecté à une des centrales, `false` sinon.
<!-- tabs:end -->





### Récupération des données

SOON

### Autre

SOON


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

{docsify-updated}
