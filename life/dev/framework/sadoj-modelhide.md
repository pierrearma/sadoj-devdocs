# sadoj-modelhide

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-modelhide`

## Utilisation

### CreateModelHide
<!-- tabs:start -->
#### **Event (client)**
```lua
  TriggerServerEvent("sadoj-modelhide:server:CreateModelHide", coords --[[ vector3 ]], model --[[ string ]], radius --[[ number ])
```
* **Paramètres:**
  * **coords:** Les coordonnées du point où le modèle doit être caché.
  * **model:** Le modèle à cacher.
  * **radius:** Le rayon de la zone où le modèle doit être caché.

#### **Export (serveur)**
```lua
exports["sadoj-modelhide"]:CreateModelHide(coords --[[ vector3 ]], model --[[ string ]], radius --[[ number ]])
```
* **Paramètres:**
  * **coords:** Les coordonnées du point où le modèle doit être caché.
  * **model:** Le modèle à cacher.
  * **radius:** Le rayon de la zone où le modèle doit être caché.
<!-- tabs:end -->

### CreateModelHideExcludingScriptObjects
<!-- tabs:start -->
#### **Event (client)**
```lua
  TriggerServerEvent("sadoj-modelhide:server:CreateModelHideExcludingScriptObjects", coords --[[ vector3 ]], model --[[ string ]], radius --[[ number ])
```
* **Paramètres:**
  * **coords:** Les coordonnées du point où le modèle doit être caché.
  * **model:** Le modèle à cacher.
  * **radius:** Le rayon de la zone où le modèle doit être caché.

#### **Export (serveur)**
```lua
exports["sadoj-modelhide"]:CreateModelHideExcludingScriptObjects(coords --[[ vector3 ]], model --[[ string ]], radius --[[ number ]])
```
* **Paramètres:**
  * **coords:** Les coordonnées du point où le modèle doit être caché.
  * **model:** Le modèle à cacher.
  * **radius:** Le rayon de la zone où le modèle doit être caché.
<!-- tabs:end -->

### RemoveModelHide
<!-- tabs:start -->
#### **Event (client)**
```lua
  TriggerServerEvent("sadoj-modelhide:server:RemoveModelHide", coords --[[ vector3 ]], model --[[ string ]], radius --[[ number ])
```
* **Paramètres:**
  * **coords:** Les coordonnées du point où le modèle doit être caché.
  * **model:** Le modèle à cacher.
  * **radius:** Le rayon de la zone où le modèle doit être caché.

#### **Export (serveur)**
```lua
exports["sadoj-modelhide"]:RemoveModelHide(coords --[[ vector3 ]], model --[[ string ]], radius --[[ number ]])
```
* **Paramètres:**
  * **coords:** Les coordonnées du point où le modèle doit être caché.
  * **model:** Le modèle à cacher.
  * **radius:** Le rayon de la zone où le modèle doit être caché.
<!-- tabs:end -->

{docsify-updated}
