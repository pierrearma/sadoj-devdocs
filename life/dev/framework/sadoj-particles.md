# sadoj-particles

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-particles`

Ce script permet la gestion complète des particules network. Côté client et serveur.


## Utilisation

### Looped

#### Start

##### StartParticleFxLoopedAtCoord
<!-- tabs:start -->
#### **Export (client)**
```lua
local identifier --[[ string ]] = exports["sadoj-particles"]:StartParticleFxLoopedAtCoord(fxAsset --[[ string ]], particleName --[[ string ]], coords --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]][, color --[[ table ]], alpha --[[ number ]], stopTimer --[[ number ]]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **coords:** Coordonnées du point d'apparition de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
  * **color:** Couleur de la particule.
  * **alpha:** Alpha de la particule.
  * **stopTimer:** Temps avant l'arrêt de la particule.
* **Retour:**
  * **identifier:** Identifiant de la particule.

#### **Export (server)**
```lua
local identifier --[[ string ]] = exports["sadoj-particles"]:StartParticleFxLoopedAtCoord(fxAsset --[[ string ]], particleName --[[ string ]], coords --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]][, color --[[ table ]], alpha --[[ number ]], stopTimer --[[ number ]]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **coords:** Coordonnées du point d'apparition de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
  * **color:** Couleur de la particule.
  * **alpha:** Alpha de la particule.
  * **stopTimer:** Temps avant l'arrêt de la particule.
* **Retour:**
  * **identifier:** Identifiant de la particule.
<!-- tabs:end -->

##### StartParticleFxLoopedOnEntity
<!-- tabs:start -->
#### **Export (client)**
```lua
local identifier --[[ string ]] = exports["sadoj-particles"]:StartParticleFxLoopedOnEntity(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]][, color --[[ table ]], alpha --[[ number ]], stopTimer --[[ number ]]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
  * **color:** Couleur de la particule.
  * **alpha:** Alpha de la particule.
  * **stopTimer:** Temps avant l'arrêt de la particule.
* **Retour:**
  * **identifier:** Identifiant de la particule.

#### **Export (server)**
```lua
local identifier --[[ string ]] = exports["sadoj-particles"]:StartParticleFxLoopedOnEntity(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]][, color --[[ table ]], alpha --[[ number ]], stopTimer --[[ number ]]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
  * **color:** Couleur de la particule.
  * **alpha:** Alpha de la particule.
  * **stopTimer:** Temps avant l'arrêt de la particule.
* **Retour:**
  * **identifier:** Identifiant de la particule.
<!-- tabs:end -->

##### StartParticleFxLoopedOnEntityBone
<!-- tabs:start -->
#### **Export (client)**
```lua
local identifier --[[ string ]] = exports["sadoj-particles"]:StartParticleFxLoopedOnEntityBone(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], boneIndex --[[ number ]], scale --[[ number ]], axis --[[ table ]][, color --[[ table ]], alpha --[[ number ]], stopTimer --[[ number ]]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **boneIndex:** Index de l'os sur lequel la particule doit être attachée.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
  * **color:** Couleur de la particule.
  * **alpha:** Alpha de la particule.
  * **stopTimer:** Temps avant l'arrêt de la particule.
* **Retour:**
  * **identifier:** Identifiant de la particule.

#### **Export (server)**
```lua
local identifier --[[ string ]] = exports["sadoj-particles"]:StartParticleFxLoopedOnEntityBone(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], boneIndex --[[ number ]], scale --[[ number ]], axis --[[ table ]][, color --[[ table ]], alpha --[[ number ]], stopTimer --[[ number ]]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **boneIndex:** Index de l'os sur lequel la particule doit être attachée.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
  * **color:** Couleur de la particule.
  * **alpha:** Alpha de la particule.
  * **stopTimer:** Temps avant l'arrêt de la particule.
* **Retour:**
  * **identifier:** Identifiant de la particule.
<!-- tabs:end -->

#### Stop

##### StopParticleFxLooped
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:StopParticleFxLooped(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:StopParticleFxLooped(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
<!-- tabs:end -->

#### Utils

##### SetParticleFxLoopedAlpha
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedAlpha(identifier --[[ string ]], alpha --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **alpha:** Alpha de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedAlpha(identifier --[[ string ]], alpha --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **alpha:** Alpha de la particule.
<!-- tabs:end -->

##### SetParticleFxLoopedColour
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedColour(identifier --[[ string ]], r --[[ number ]], g --[[ number ]], b --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **r:** Rouge de la particule.
  * **g:** Vert de la particule.
  * **b:** Bleu de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedColour(identifier --[[ string ]], r --[[ number ]], g --[[ number ]], b --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **r:** Rouge de la particule.
  * **g:** Vert de la particule.
  * **b:** Bleu de la particule.
<!-- tabs:end -->

##### SetParticleFxLoopedEvolution
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedEvolution(identifier --[[ string ]], propertyName --[[ string ]], amount --[[ number ]], noNetwork --[[ boolean ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **propertyName:** Nom de la propriété de la particule.
  * **amount:** Montant de la propriété de la particule.
  * **noNetwork:** Ne pas envoyer la propriété à tous les clients.

#### **Export (server)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedEvolution(identifier --[[ string ]], propertyName --[[ string ]], amount --[[ number ]], noNetwork --[[ boolean ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **propertyName:** Nom de la propriété de la particule.
  * **amount:** Montant de la propriété de la particule.
  * **noNetwork:** Ne pas envoyer la propriété à tous les clients.
<!-- tabs:end -->

##### SetParticleFxLoopedFarClipDist
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedFarClipDist(identifier --[[ string ]], range --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **range:** Distance.

#### **Export (server)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedFarClipDist(identifier --[[ string ]], range --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **range:** Distance.
<!-- tabs:end -->

##### SetParticleFxLoopedOffset
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedOffset(identifier --[[ string ]], offset --[[ vector3 ]], rot --[[ vector3 ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedOffset(identifier --[[ string ]], offset --[[ vector3 ]], rot --[[ vector3 ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
<!-- tabs:end -->

##### SetParticleFxLoopedScale
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedScale(identifier --[[ string ]], scale --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **scale:** La taille de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:SetParticleFxLoopedScale(identifier --[[ string ]], scale --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de la particule.
  * **scale:** La taille de la particule.
<!-- tabs:end -->

### Non Looped

##### StartParticleFxNonLoopedAtCoord
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:StartParticleFxNonLoopedAtCoord(fxAsset --[[ string ]], particleName --[[ string ]], coords --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **coords:** Coordonnées du point d'apparition de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:StartParticleFxNonLoopedAtCoord(fxAsset --[[ string ]], particleName --[[ string ]], coords --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **coords:** Coordonnées du point d'apparition de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
<!-- tabs:end -->

##### StartParticleFxNonLoopedOnEntity
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:StartParticleFxNonLoopedOnEntity(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:StartParticleFxNonLoopedOnEntity(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], scale --[[ number ]], axis --[[ table ]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
<!-- tabs:end -->

##### StartParticleFxNonLoopedOnEntityBone
<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-particles"]:StartParticleFxNonLoopedOnEntityBone(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], boneIndex --[[ number ]], scale --[[ number ]], axis --[[ table ]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **boneIndex:** Index de l'os sur lequel la particule doit être attachée.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.

#### **Export (server)**
```lua
exports["sadoj-particles"]:StartParticleFxLoopedOnEntityBone(fxAsset --[[ string ]], particleName --[[ string ]], netId --[[ number ]], offset --[[ vector3 ]], rot --[[ vector3 ]], boneIndex --[[ number ]], scale --[[ number ]], axis --[[ table ]])
```
* **Paramètres:**
  * **fxAsset:** Nom de l'asset de la particule.
  * **particleName:** Nom de la particule.
  * **netId:** NetId de l'entité sur laquelle la particule doit être attachée.
  * **offset:** Offset de la particule.
  * **rot:** Rotation de la particule.
  * **boneIndex:** Index de l'os sur lequel la particule doit être attachée.
  * **scale:** Échelle de la particule.
  * **axis:** Axe de la particule.
<!-- tabs:end -->

{docsify-updated}
