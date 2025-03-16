# sadoj-peds

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[GLOBAL]/sadoj-peds`
* Redémarrage possible: `Oui`

Voici la liste des options disponibles pour un ped:

<!-- tabs:start -->
### **Apparence personnalisée**
- `category`: La catégorie du ped. (string)
- `type`: Le type du ped. (string)
- `sexe`: Le sexe du ped. `m` ou `f` (string). Si `nil` alors le sexe est aléatoire.
### **Apparence native**
- `model`: Le modèle du ped. (hash)
- `type`: Le type du ped. (number)
<!-- tabs:end -->

- `coords`: Les coordonnées du ped. (vector3)
- `heading`: Le heading du ped. (float)

- `freezePosition`: Si `true` alors le ped ne pourra pas bouger. (boolean) (facultatif) (default: `true`)
- `blockingOfNonTemporaryEvents`: Si `true` alors le ped ne réagira pas. (boolean) (facultatif) (default: `true`)
- `invincible`: Si `true` alors le ped sera invincible. (boolean) (facultatif) (default: `true`)
- `collision`: Si `true` alors le ped aura une collision. (boolean) (facultatif) (default: `true`)
- `canRagdoll`: Si `true` alors le ped pourra ragdoll. (boolean) (facultatif) (default: `false`)
- `placeOnGroundProperly`: Si `true` alors le ped sera placé correctement sur le sol. (boolean) (facultatif) (default: `true`)
- `forceOnGround`: Si `true` alors le ped sera forcé sur le sol. (boolean) (facultatif) (default: `true`)
- `canLosePropsOnDamage`: Si `true` alors le ped perdra ses accessoires lorsqu'il prend des dégâts. (boolean) (facultatif) (default: `false`)
- `canBeKnockedOffBike`: Si `true` alors le ped peut être éjecté de sa moto. (boolean) (facultatif) (default: `false`)

  > [!WARNING]
  > Il n'est pas recommandé de mettre `isNetwork` à `true`. Veuillez plutôt utiliser `RegisterIdentifierAsNetworked` lorsque vous avez besoin de synchroniser un ped en réseau et `UnregisterIdentifierAsNetworked` pour le désenregistrer.
- `isNetwork`: Si `true` alors le ped sera créé en réseau. (boolean) (facultatif) (default: `false`)


<!-- tabs:start -->
### **Animations (facultatif)**
- `anim` :
  * `dict`: Le dictionnaire de l'animation. (string)
  * `name`: Le nom de l'animation. (string)
### **Scenario (facultatif)**
- `scenario` :
  * `type`: Le type du scenario. `InPlace` ou `AtPosition` (string)
  * `name` : Le nom du scenario. (string)
<!-- tabs:end -->

- `weapon`: (facultatif)
  * `hash`: Le hash de l'arme. (hash)
  * `forceInHand`: Si `true` alors l'arme est forcée dans la main du ped. (boolean) (facultatif) (default: `true`)

- `events`: (facultatif)
  * `OnPedSpawned`: (facultatif) L'événement est déclenché lorsque le ped est créé.
    * `serverName`: Le nom de l'événement à déclencher côté serveur. (string)
    * `clientName`: Le nom de l'événement à déclencher côté client. (string)
  * `OnPedDespawned`: (facultatif) L'événement est déclenché lorsque le ped est supprimé.
    * `serverName`: Le nom de l'événement à déclencher côté serveur. (string)
    * `clientName`: Le nom de l'événement à déclencher côté client. (string)

  * `OnPlayerEntersOnFieldOfView`: (facultatif) L'événement est déclenché lorsque le joueur entre dans le champ de vision du ped.
    * `serverName`: Le nom de l'événement à déclencher côté serveur. (string)
    * `clientName`: Le nom de l'événement à déclencher côté client. (string)
  * `OnPlayerLeavesOnFieldOfView`: (facultatif) L'événement est déclenché lorsque le joueur quitte le champ de vision du ped.
    * `serverName`: Le nom de l'événement à déclencher côté serveur. (string)
    * `clientName`: Le nom de l'événement à déclencher côté client. (string)

  * `OnPlayerStartsAimingThePed`: (facultatif) L'événement est déclenché lorsque le joueur commence à viser le ped.
    * `serverName`: Le nom de l'événement à déclencher côté serveur. (string)
    * `clientName`: Le nom de l'événement à déclencher côté client. (string)
  * `OnPlayerStopsAimingThePed`: (facultatif) L'événement est déclenché lorsque le joueur arrête de viser le ped.
    * `serverName`: Le nom de l'événement à déclencher côté serveur. (string)
    * `clientName`: Le nom de l'événement à déclencher côté client. (string)


## Utilisation


### Ajouter un ped
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local identifier = exports["sadoj-peds"]:AddPed(coords --[[ vector3 ]], heading --[[ float ]], options --[[ table ]][, identifier --[[ string ]]])
```
* **Paramètres:**
  * **coords:** Les coordonnées du ped.
  * **heading:** L'angle du ped.
  * **options:** Les options du ped.
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->


### Supprimer un ped
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-peds"]:RemovePed(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Savoir si un ped existe
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local result = exports["sadoj-peds"]:DoesPedExist(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **result:** `true` si le ped existe, `false` sinon.
<!-- tabs:end -->

### Obtenir un ped par son identifiant
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local ped = exports["sadoj-peds"]:GetPedFromIdentifier(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **ped:** Le ped. `nil` si le ped n'existe pas.
<!-- tabs:end -->

### Obtenir l'identifiant d'un ped par son entité
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local identifier = exports["sadoj-peds"]:GetIdentifierFromPed(ped --[[ entity ]])
```
* **Paramètres:**
  * **ped:** L'entité du ped.
* **Retour:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Enregistrer un identifiant de ped en réseau

> [!warning]
> Cette export doit être utilisée avec précaution. Il est fortement recommandé qu'un joueur soit à proximité (60m) du ped pour éviter tout problème.

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-peds"]:RegisterIdentifierAsNetworked(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Desenregistrer un identifiant de ped en réseau
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-peds"]:UnregisterIdentifierAsNetworked(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Savoir si un identifiant de ped est enregistré en réseau
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local result = exports["sadoj-peds"]:IsIdentifierNetworked(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **result:** `true` si l'identifiant est enregistré en réseau, `false` sinon.
<!-- tabs:end -->

## Evénements

### Lorsqu'un event est déclenché côté serveur

  ```lua
  RegisterServerEvent("sadoj-peds:server:event:OnPedSpawned:NON_CUSTON_DE_EVENT_ICI", function(netId, identifier)
    -- Code ici

  end)
  ```

### Lorsqu'un event est déclenché côté client

  ```lua
  RegisterNetEvent("sadoj-peds:client:event:OnPedSpawned:NON_CUSTON_DE_EVENT_ICI", function(entity, identifier)
    -- Code ici

  end)
  ```
