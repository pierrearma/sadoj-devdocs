# sadoj-ropes

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-ropes`

Ce script permet de créer des cordes synchronisées entre les joueurs.


## Utilisation

### Creation d'une corde

<!-- tabs:start -->
#### **Export (client)**
```lua
local identifier --[[ string ]] = exports["sadoj-ropes"]:AddRope(coords --[[ vector3 ]], rot --[[ vector3 ]], maxLength --[[ number ]], ropeType --[[ number ]], initLength --[[ number ]], minLength --[[ number ]], lengthChangeRate --[[ number ]], onlyPPU --[[ boolean ]], collisionOn --[[ boolean ]], lockFromFront --[[ boolean ]], timeMultiplier --[[ number ]], breakable --[[ boolean ]])
```
* **Paramètres:**
  * **coords:** Coordonnées de la corde.
  * **rot:** Rotation de la corde.
  * **maxLength:** Longueur maximale de la corde.
  * **ropeType:** Type de corde.
  * **initLength:** Longueur initiale de la corde.
  * **minLength:** Longueur minimale de la corde.
  * **lengthChangeRate:** Vitesse de changement de longueur de la corde.
  * **onlyPPU:**
  * **collisionOn:** Si la corde est en collision.
  * **lockFromFront:** Si la longueur maximale est égale à zéro et que cette valeur est définie sur faux, la corde deviendra rigide (elle forcera une distance spécifique, quelle que soit la longueur, entre les objets).
  * **timeMultiplier:** La vitesse à laquelle la physique devrait fonctionner. 1.0 est normal, 2.0 est deux fois plus rapide, -1.0 est le temps qui recule. Cela peut affecter la gravité, etc.
  * **breakable:** Si la corde peut être cassée.
* **Retour:**
  * **identifier:** Identifiant de corde.

#### **Export (serveur)**
```lua
local identifier --[[ string ]] = exports["sadoj-ropes"]:AddRope(coords --[[ vector3 ]], rot --[[ vector3 ]], maxLength --[[ number ]], ropeType --[[ number ]], initLength --[[ number ]], minLength --[[ number ]], lengthChangeRate --[[ number ]], onlyPPU --[[ boolean ]], collisionOn --[[ boolean ]], lockFromFront --[[ boolean ]], timeMultiplier --[[ number ]], breakable --[[ boolean ]])
```
* **Paramètres:**
  * **coords:** Coordonnées de la corde.
  * **rot:** Rotation de la corde.
  * **maxLength:** Longueur maximale de la corde.
  * **ropeType:** Type de corde.
  * **initLength:** Longueur initiale de la corde.
  * **minLength:** Longueur minimale de la corde.
  * **lengthChangeRate:** Vitesse de changement de longueur de la corde.
  * **onlyPPU:**
  * **collisionOn:** Si la corde est en collision.
  * **lockFromFront:** Si la longueur maximale est égale à zéro et que cette valeur est définie sur faux, la corde deviendra rigide (elle forcera une distance spécifique, quelle que soit la longueur, entre les objets).
  * **timeMultiplier:** La vitesse à laquelle la physique devrait fonctionner. 1.0 est normal, 2.0 est deux fois plus rapide, -1.0 est le temps qui recule. Cela peut affecter la gravité, etc.
  * **breakable:** Si la corde peut être cassée.
* **Retour:**
  * **identifier:** Identifiant de corde.
<!-- tabs:end -->


### Suppression d'une corde

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-ropes"]:DeleteRope(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
#### **Export (serveur)**
```lua
exports["sadoj-ropes"]:DeleteRope(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
<!-- tabs:end -->


### Attacher une corde entre deux entités

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-ropes"]:AttachEntitiesToRope(identifier --[[ string ]], entity1 --[[ entity ]], entity2 --[[ entity ]], entity1Offset --[[ vector3 ]], entity2Offset --[[ vector3 ]], length --[[ number ]], componentPartA --[[ number ]], componentPartB --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
  * **entity1:** Entités
  * **entity2:** Entités
  * **entity1Offset:** Offset de la première entité.
  * **entity2Offset:** Offset de la seconde entité.
  * **length:** Longueur de la corde.
  * **componentPartA:** 0
  * **componentPartB:** 0

#### **Export (serveur)**
```lua
exports["sadoj-ropes"]:AttachEntitiesToRope(identifier --[[ string ]], entity1 --[[ entity ]], entity2 --[[ entity ]], entity1Offset --[[ vector3 ]], entity2Offset --[[ vector3 ]], length --[[ number ]], componentPartA --[[ number ]], componentPartB --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
  * **entity1:** Entités
  * **entity2:** Entités
  * **entity1Offset:** Offset de la première entité.
  * **entity2Offset:** Offset de la seconde entité.
  * **length:** Longueur de la corde.
  * **componentPartA:** 0
  * **componentPartB:** 0
<!-- tabs:end -->

> [!NOTE]
> Il est possible d'attacher une corde sur une entité locale. En paramètre envoyer un tableau avec les informations de l'entité. (cela fonctionne avec 2 entités)
>  ```lua
  local entity1 = {
    coords = vector3(0.0, 0.0, 0.0), --[[ vector3 ]]
    model = GetHashKey("prop_test_tube_01"), --[[ hash ]]
    radius = 0.5, --[[ number ]]
  }
>  ```


{docsify-updated}
