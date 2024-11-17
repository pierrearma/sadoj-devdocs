# sadoj-sound

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-sound`


Il est possible de charger un son à partir d'une URL ou à partir d'un fichier local.

- Pour les son à partir d'une URL il suffit simplement de mettre l'URL du son. (Exemple: `https://www.my-website.com/my-sound.mp3`)

- Pour les son à partir d'un fichier local il faut que le fichier du son soit **dans votre script** et que le ficher soit chargé dans le fxmanifest.lua. (Exemple: `client/sounds/my-sound.mp3`)


La Liste des options disponibles pour les sons:
- `volume`: (facultatif) Le volume du son. (type `number`) (**Minimum**: 0.0, **Maximum**: 1.0) (**Par défaut**: 0.3)
- `offset` (facultatif): Le temps de démarrage du son en secondes. (type `number`) (**Par défaut**: 0.0)
- `loop` (facultatif): Si le son doit se jouer en boucle. (type `boolean`) (**Par défaut**: `false`)
- `muted` (facultatif): Si le son doit être joué en sourdine. (type `boolean`) (**Par défaut**: `false`)
- `unLoadOnFinish` (facultatif): Si le son doit être supprimé de la mémoire une fois terminé. (type `boolean`) (**Par défaut**: `true`)
- `syncSoundWithSetting` (facultatif): Si le son doit être synchronisé avec le volume du jeu. (type `boolean`) (**Par défaut**: `false`)


Pour les son qui sont joués a une position précise ou sur une entité des options supplémentaires sont disponibles:

- `attenuation` (facultatif): Tableau contenant les paramètres d'atténuation du son. (type `table`)
  - `vehicle` (facultatif): Tableau contenant les paramètres d'atténuation du son dans un véhicule. (type `table`)
    - `inside`: Le % d'atténuation du son à l'intérieur du véhicule. (type `number`) (**Minimum**: 0, **Maximum**: 100)
    - `outside`: Le % d'atténuation du son à l'extérieur du véhicule. (type `number`) (**Minimum**: 0, **Maximum**: 100)
  - `interior` (facultatif): Tableau contenant les paramètres d'atténuation du son dans un intérieur. (type `table`)
    - `sameRoom`: Le % d'atténuation du son dans la même pièce. (type `number`) (**Minimum**: 0, **Maximum**: 100)
    - `diffRoom`: Le % d'atténuation du son dans une pièce différente. (type `number`) (**Minimum**: 0, **Maximum**: 100)
- `range`: La distance maximale a laquelle le son peut être entendu. (type `number`) (**Par défaut**: 10.0)
- `volumeIsDynamic` (facultatif): Si le volume du son doit être dynamique. Le volume du son sera alors calculé en fonction de la distance entre le joueur et la position du son. (type `boolean`) (**Par défaut**: `true`)
- `rangeIsDynamic` (facultatif): Si la distance maximale du son doit être dynamique. La distance maximale du son sera alors calculée en fonction du volume du son. (type `boolean`) (**Par défaut**: `true`) (**Note:** Cette option ignore la valeur de `range` si elle est définie.)


> [!warning]
> L'offset n'est pas synchronisé entre tous les joueurs.

## Utilisation


### Chargement/Déchargement d'un son

#### LoadSound
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local soundId --[[ string ]] = exports["sadoj-sound"]:LoadSound(url --[[ string ]])
```
* **Paramètres:**
  * **url**: L'URL du son.
* **Retourne:**
  * **soundId**: L'ID du son.
<!-- tabs:end -->

#### LoadLocalSound
<!-- tabs:start -->
#### **Event (client)**
```lua
local soundId --[[ string ]] = exports["sadoj-sound"]:LoadLocalSound(url --[[ string ]])
```
* **Paramètres:**
  * **url**: L'URL du son.
* **Retourne:**
  * **soundId**: L'ID du son.
<!-- tabs:end -->


#### UnLoadSound
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:UnLoadSound(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
<!-- tabs:end -->

#### UnLoadLocalSound
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-sound"]:UnLoadLocalSound(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
<!-- tabs:end -->




### Jouer un son

#### PlaySound
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:PlaySound(soundId --[[ string ]], options --[[ table ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **options**: Les options du son.
<!-- tabs:end -->

#### PlayLocalSound
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-sound"]:PlayLocalSound(soundId --[[ string ]], options --[[ table ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **options**: Les options du son.
<!-- tabs:end -->

#### PlaySoundFromCoords
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:PlaySoundFromCoords(soundId --[[ string ]], coords --[[ vector3 ]], options --[[ table ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **coords**: Les coordonnées du son.
  * **options**: Les options du son.
<!-- tabs:end -->

#### PlayLocalSoundFromCoords
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-sound"]:PlayLocalSoundFromCoords(soundId --[[ string ]], coords --[[ vector3 ]], options --[[ table ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **coords**: Les coordonnées du son.
  * **options**: Les options du son.
<!-- tabs:end -->

#### PlaySoundFromEntity
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:PlaySoundFromEntity(soundId --[[ string ]], entity --[[ number ]], options --[[ table ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **entity**: L'entité sur laquelle le son doit être joué.
  * **options**: Les options du son.
<!-- tabs:end -->

#### PlayLocalSoundFromEntity
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-sound"]:PlayLocalSoundFromEntity(soundId --[[ string ]], entity --[[ number ]], options --[[ table ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **entity**: L'entité sur laquelle le son doit être joué.
  * **options**: Les options du son.
<!-- tabs:end -->


<!-- SETTER -->
### Modifier un son

#### SetSoundVolume
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:SetSoundVolume(soundId --[[ string ]], volume --[[ number ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **volume**: Le volume du son.
<!-- tabs:end -->

#### SetSoundOffset
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:SetSoundOffset(soundId --[[ string ]], offset --[[ number ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **offset**: Le temps a partir duquel le son doit être joué.
<!-- tabs:end -->

#### SetSoundLoop
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:SetSoundLoop(soundId --[[ string ]], loop --[[ boolean ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **loop**: Si le son doit être joué en boucle.
<!-- tabs:end -->

#### SetSoundUnLoadOnFinish
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:SetSoundUnLoadOnFinish(soundId --[[ string ]], unLoadOnFinish --[[ boolean ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **unLoadOnFinish**: Si le son doit être supprimé de la mémoire une fois terminé.
<!-- tabs:end -->

#### SetSoundAttenuation
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:SetSoundAttenuation(soundId --[[ string ]], attenuation --[[ table ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
  * **attenuation**: Les paramètres d'atténuation du son.
<!-- tabs:end -->

#### PauseSound
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:PauseSound(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
<!-- tabs:end -->

#### ResumeSound
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-sound"]:ResumeSound(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
<!-- tabs:end -->


<!-- GETTER -->
### Obtenir des informations sur un son

#### GetSoundVolume
<!-- tabs:start -->
#### **Event (client)**
```lua
local volume --[[ number ]] = exports["sadoj-sound"]:GetSoundVolume(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **volume**: Le volume du son.
<!-- tabs:end -->

#### GetSoundOffset
<!-- tabs:start -->
#### **Event (client)**
```lua
local offset --[[ number ]] = exports["sadoj-sound"]:GetSoundOffset(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **offset**: Le temps auquel le son est actuellement.
<!-- tabs:end -->

#### GetSoundUnLoadOnFinish
<!-- tabs:start -->
#### **Event (client)**
```lua
local unLoadOnFinish --[[ boolean ]] = exports["sadoj-sound"]:GetSoundUnLoadOnFinish(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **unLoadOnFinish**: `true` si le son est supprimé de la mémoire une fois terminé, `false` sinon.
<!-- tabs:end -->

#### GetSoundAttenuation
<!-- tabs:start -->
#### **Event (client)**
```lua
local attenuation --[[ table ]] = exports["sadoj-sound"]:GetSoundAttenuation(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **attenuation**: Les paramètres d'atténuation du son.
<!-- tabs:end -->

#### GetSoundDuration
<!-- tabs:start -->
#### **Event (client)**
```lua
local duration --[[ number ]] = exports["sadoj-sound"]:GetSoundDuration(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **duration**: La durée du son.
<!-- tabs:end -->

#### SoundIsPlaying
<!-- tabs:start -->
#### **Event (client)**
```lua
local isPlaying --[[ boolean ]] = exports["sadoj-sound"]:SoundIsPlaying(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **isPlaying**: `true` si le son est en train d'être joué, `false` sinon.
<!-- tabs:end -->

#### SoundIsPaused
<!-- tabs:start -->
#### **Event (client)**
```lua
local isPaused --[[ boolean ]] = exports["sadoj-sound"]:SoundIsPaused(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **isPaused**: `true` si le son est en pause, `false` sinon.
<!-- tabs:end -->

#### SoundIsLoaded
<!-- tabs:start -->
#### **Event (client)**
```lua
local isLoaded --[[ boolean ]] = exports["sadoj-sound"]:SoundIsLoaded(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **isLoaded**: `true` si le son est chargé, `false` sinon.
<!-- tabs:end -->

#### SoundIsLooped
<!-- tabs:start -->
#### **Event (client)**
```lua
local isLooped --[[ boolean ]] = exports["sadoj-sound"]:SoundIsLooped(soundId --[[ string ]])
```
* **Paramètres:**
  * **soundId**: L'ID du son.
* **Retourne:**
  * **isLooped**: `true` si le son est en boucle, `false` sinon.
<!-- tabs:end -->


