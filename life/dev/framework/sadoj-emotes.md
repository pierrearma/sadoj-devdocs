# sadoj-emotes

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-emotes`


## Utilisation

### Jouer une animation

<!-- tabs:start -->
### **Event (client)**
```lua
  TriggerEvent("sadoj-emotes:client:PlayEmote", emoteId --[[ string ]][, textVar --[[ any ]]])
```
* **Paramètres:**
  * **emoteId:** L'Id de l'animation à jouer.
  * **textVar:** La variable de la texture du prop. (Optionnel)
<!-- tabs:end -->

### Arrêter la dernière animation

<!-- tabs:start -->
### **Event (client)**
```lua
  TriggerEvent("sadoj-emotes:client:CancelEmote")
```
<!-- tabs:end -->

### Savoir si le joueur joue une animation

<!-- tabs:start -->
### **Export (client)**
```lua
  local isPlaying --[[ boolean ]] = exports["sadoj-emotes"]:IsPlayingEmote(ped --[[ ped ]], emoteId --[[ string ]])
```
* **Paramètres:**
  * **ped:** Le ped à vérifier.
  * **emoteId:** L'Id de l'animation à vérifier.
<!-- tabs:end -->


### MovementClipset

#### Verrouiller le movementClipset
<!-- tabs:start -->
### **Event (client)**
```lua
  local token --[[ string ]] = exports["sadoj-emotes"]:LockMovementClipset()
```
* **Retourne:**
  * **token:** Le token pour déverrouiller le movementClipset.
<!-- tabs:end -->

#### Déverrouiller le movementClipset
<!-- tabs:start -->
### **Event (client)**
```lua
  exports["sadoj-emotes"]:UnlockMovementClipset(token --[[ string ]])
```
* **Paramètres:**
  * **token:** Le token pour retrouné par la fonction `LockMovementClipset`.
<!-- tabs:end -->


### Ragdoll

#### Verrouiller le ragdoll
<!-- tabs:start -->
### **Event (client)**
```lua
  local token --[[ string ]] = exports["sadoj-emotes"]:LockRagdoll()
```
* **Retourne:**
  * **token:** Le token pour déverrouiller le ragdoll.
<!-- tabs:end -->

#### Déverrouiller le ragdoll
<!-- tabs:start -->
### **Event (client)**
```lua
  exports["sadoj-emotes"]:UnlockRagdoll(token --[[ string ]])
```
* **Paramètres:**
  * **token:** Le token pour retrouné par la fonction `LockRagdoll`.
<!-- tabs:end -->

#### Savoir si le joueur peut ragdoll
<!-- tabs:start -->
### **Export (client)**
```lua
  local canRagdoll --[[ boolean ]] = exports["sadoj-emotes"]:CanRagdoll()
```
* **Retourne:**
  * **canRagdoll:** `flase` si le joueur ne peut pas ragdoll, `true` sinon.
<!-- tabs:end -->

### OpenDoorArmIK

#### Bloquer l'animation d'ouverture de porte
<!-- tabs:start -->
### **Event (client)**
```lua
  local token --[[ string ]] = exports["sadoj-emotes"]:LockOpenDoorArmIK()
```
* **Retourne:**
  * **token:** Le token pour déverrouiller l'animation d'ouverture de porte.
<!-- tabs:end -->

#### Débloquer l'animation d'ouverture de porte
<!-- tabs:start -->
### **Event (client)**
```lua
  exports["sadoj-emotes"]:UnlockOpenDoorArmIK(token --[[ string ]])
```
* **Paramètres:**
  * **token:** Le token pour retrouné par la fonction `LockOpenDoorArmIK`.
<!-- tabs:end -->