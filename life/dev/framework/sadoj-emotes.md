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


### Crawl

#### Savoir si le joueur est en position allongé
<!-- tabs:start -->
### **Export (client)**
```lua
  local isProne --[[ boolean ]] = exports["sadoj-emotes"]:IsPlayerProne()
```
* **Retourne:**
  * **isProne:** `true` si le joueur est en position allongé, `false` sinon.
<!-- tabs:end -->

#### Savoir si le joueur est en train de ramper
<!-- tabs:start -->
### **Export (client)**
```lua
  local isCrawling --[[ boolean ]] = exports["sadoj-emotes"]:IsPlayerCrawling()
```
* **Retourne:**
  * **isCrawling:** `true` si le joueur se déplace en rampant, `false` sinon.
<!-- tabs:end -->

#### Verrouiller la position allongé
<!-- tabs:start -->
### **Event (client)**
```lua
  local token --[[ string ]] = exports["sadoj-emotes"]:LockProne()
```
* **Retourne:**
  * **token:** Le token pour déverrouiller la position allongé.
<!-- tabs:end -->

#### Déverrouiller la position allongé
<!-- tabs:start -->
### **Event (client)**
```lua
  exports["sadoj-emotes"]:UnlockProne(token --[[ string ]])
```
* **Paramètres:**
  * **token:** Le token pour retrouné par la fonction `LockProne`.
<!-- tabs:end -->

#### Savoir si la position allongé est verrouillé
<!-- tabs:start -->
### **Export (client)**
```lua
  local isProneLocked --[[ boolean ]] = exports["sadoj-emotes"]:IsProneLocked()
```
* **Retourne:**
  * **isProneLocked:** `true` si la position allongé est verrouillé, `false` sinon.
<!-- tabs:end -->


### Crouch

#### Savoir si le joueur est accroupi
<!-- tabs:start -->
### **Export (client)**
```lua
  local isCrouched --[[ boolean ]] = exports["sadoj-emotes"]:IsPlayerCrouched()
```
* **Retourne:**
  * **isCrouched:** `true` si le joueur est accroupi, `false` sinon.
<!-- tabs:end -->

#### Verrouiller l'accroupissement
<!-- tabs:start -->
### **Event (client)**
```lua
  local token --[[ string ]] = exports["sadoj-emotes"]:LockCrouch()
```
* **Retourne:**
  * **token:** Le token pour déverrouiller l'accroupissement.
<!-- tabs:end -->

#### Déverrouiller l'accroupissement
<!-- tabs:start -->
### **Event (client)**
```lua
  exports["sadoj-emotes"]:UnlockCrouch(token --[[ string ]])
```
* **Paramètres:**
  * **token:** Le token pour retrouné par la fonction `LockCrouch`.
<!-- tabs:end -->

#### Savoir si l'accroupissement est verrouillé
<!-- tabs:start -->
### **Export (client)**
```lua
  local isCrouchLocked --[[ boolean ]] = exports["sadoj-emotes"]:IsCrouchLocked()
```
* **Retourne:**
  * **isCrouchLocked:** `true` si l'accroupissement est verrouillé, `false` sinon.
<!-- tabs:end -->








