# sadoj-dispatch

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-dispatch`

## Utilisation

### Faire appel à une centrale

#### MakeCall
<!-- tabs:start -->
#### **Event (client)**

```lua
TriggerServerEvent("sadoj-dispatch:server:MakeCall", central --[[ String ]], pos --[[ vector3 ]], message --[[ String ]], callsource --[[ String ]], options)
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez appeler.
  * **pos:** La position de l'appel.
  * **message:** Le message à envoyer à la centrale.
  * **callsource:** Le nom de la source qui a fait l'appel.
  * **options:** Les options de l'appel.


#### **Event (serveur)**

```lua
TriggerEvent("sadoj-dispatch:server:MakeCall", central --[[ String ]], pos --[[ vector3 ]], message --[[ String ]], callsource --[[ String ]], options)
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez appeler.
  * **pos:** La position de l'appel.
  * **message:** Le message à envoyer à la centrale.
  * **callsource:** Le nom de la source qui a fait l'appel.
  * **options:** Les options de l'appel.
<!-- tabs:end -->


### Connexion/Déconnexion

#### Se connecter à une centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-dispatch:server:ConnectToCentral", centrals --[[ table ]])
```
* **Paramètres:**
  * **centrals:** La liste des centrales à laquelle vous souhaitez vous connecter.

#### **Event (serveur)**
```lua
TriggerEvent("sadoj-dispatch:server:ConnectToCentral", centrals --[[ table ]])
```
* **Paramètres:**
  * **central:** La liste des centrales à laquelle vous souhaitez vous connecter.
<!-- tabs:end -->

#### Se déconnexion d'une centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-dispatch:server:DisconnectToCentral", centrals --[[ table ]])
```
* **Paramètres:**
  * **central:** La liste des centrales à laquelle vous souhaitez vous déconnecter.

#### **Event (serveur)**
```lua
TriggerEvent("sadoj-dispatch:server:DisconnectToCentral", centrals --[[ table ]])
```
* **Paramètres:**
  * **central:** La liste des centrales à laquelle vous souhaitez vous déconnecter.
<!-- tabs:end -->





### Vérification

#### IsConnectedToCentral
Cette fonction vous permet de vérifier si un joueur est connecté à une centrale données.
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:IsConnectedToCentral(serverId --[[ integer ]], central  --[[ String ]])
```
* **Paramètres:**
  * **serverId:** serverId du joueur.
  * **central:** La centrale que vous souhaitez vérifier.

#### **Export (serveur)**
```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:IsConnectedToCentral(serverId --[[ integer ]], central  --[[ String ]])
```
* **Paramètres:**
  * **serverId:** serverId du joueur.
  * **central:** La centrale que vous souhaitez vérifier.
<!-- tabs:end -->


#### DoesCentralExist
Cette fonction vous permet de vérifier si une centrale existe.
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:DoesCentralExist(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez vérifier.

#### **Export (serveur)**
```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:DoesCentralExist(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez vérifier.
<!-- tabs:end -->






### Récupération des données

#### GetAllPlayersConnectedToCentral
Cette fonction vous permet de récupérer la liste des joueurs connectés à une centrale données.
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentral(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.
* **Résultats:**
  * Tableau avec la liste de tous les joueurs connectés (serverId).

    ```lua
    [5, 10, 14, 15 18, 55, 57, 60, 73, 97, ...]
    ```

#### **Export (serveur)**
```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentral(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.
* **Résultats:**
  * Tableau avec la liste de tous les joueurs connectés (serverId).

    ```lua
    [5, 10, 14, 15 18, 55, 57, 60, 73, 97, ...]
    ```
<!-- tabs:end -->


#### GetAllPlayersConnectedToCentralWithData
Cette fonction vous permet de récupérer la liste des joueurs connectés à une centrale données.
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentralWithData(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.

#### **Export (serveur)**
```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentralWithData(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.
<!-- tabs:end -->

#### GetNumberOfConnectedPlayerInCentral
Cette fonction vous permet de récupérer le nombre de joueurs connectés à une centrale données.
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ number ]] = exports["sadoj-dispatch"]:GetNumberOfConnectedPlayerInCentral(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer le nombre de joueurs connectés.

#### **Export (serveur)**
```lua
local result --[[ number ]] = exports["sadoj-dispatch"]:GetNumberOfConnectedPlayerInCentral(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer le nombre de joueurs connectés.
<!-- tabs:end -->


#### GetPlayerConnectedCentralByServerId
Cette fonction vous permet de récupérer la liste des centrales ou le joueur est connecté.
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetPlayerConnectedCentralByServerId(serverId --[[ integer ]])
```
* **Paramètres:**
  * **serverId:** Le serverId du joueur.

#### **Export (serveur)**
```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetPlayerConnectedCentralByServerId(serverId --[[ integer ]])
```
* **Paramètres:**
  * **serverId:** Le serverId du joueur.
<!-- tabs:end -->


### Autre

#### SendNotifForAllPlayersInService
Cette fonction vous permet d'envoyer une notification à tous les joueurs connectés à une centrale données.
<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-dispatch:server:SendNotifForAllPlayersInService", central  --[[ String ]], message --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais envoyer la notification.
  * **message:** Le message à envoyer.

#### **Export (serveur)**
```lua
exports["sadoj-dispatch"]:SendNotifForAllPlayersInService(central  --[[ String ]], message --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais envoyer la notification.
  * **message:** Le message à envoyer.
<!-- tabs:end -->



### Événement d'écoute

#### Connexion à une centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:client:PlayerConnectedToCentral", function(central --[[ String ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterNetEvent("sadoj-dispatch:server:PlayerConnectedToCentral", function(serverId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


#### Déconnexion d'une à centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:client:PlayerDisconnectedToCentral", function(central --[[ String ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterNetEvent("sadoj-dispatch:server:PlayerDisconnectedToCentral", function(serverId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


#### Prise d'un appel
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:client:CallTaken", function(callId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterNetEvent("sadoj-dispatch:server:CallTaken", function(serverId --[[ integer ]], callId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


{docsify-updated}
