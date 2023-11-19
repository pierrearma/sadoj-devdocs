# sadoj-core - Fonctions - Ped

> Auteur de la page: Pierre.

---

#### GetAllPedsInScope

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPedsInScope([ignoreList --[[ table ]]])
```

* **Paramètres:**
    * **ignoreList:** Liste des peds à ignorer (aucun par défaut).
* **Retour:**
    * **result:** Liste des peds.

<!-- tabs:end -->

#### GetClosestPedFromCoords

<!-- tabs:start -->

#### **Export (client)**

```lua
local closestPed --[[ Ped ]], closestDistance --[[ number ]] = exports["sadoj-core"]:GetClosestPedFromCoords(coords --[[ vector3 ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
    * **coords:** Coordonnées où chercher.
    * **ignoreList:** Liste des peds à ignorer (aucun par défaut).
* **Retour:**
    * **closestPed:** Le ped le plus proche, `-1` si aucun.
    * **closestDistance:** La distance entre le ped et les coordonnées, `-1` si aucun.

<!-- tabs:end -->

#### GetPedsInRadius

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetPedsInRadius(coords --[[ vector3 ]], radius --[[ number ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
    * **coords:** Coordonnées où chercher.
    * **radius:** Rayon de recherche.
    * **ignoreList:** Liste des peds à ignorer (aucun par défaut).
* **Retour:**
    * **result:** Liste des peds.

<!-- tabs:end -->

#### PlayPedAnim

Cette fonction permet de jouer une animation sur un ped sans avoir besoin d'en avoir le controle.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports["sadoj-core"]:PlayPedAnim(ped --[[ Ped ]], animDict --[[ string ]], animName --[[ string ]], upperbodyOnly --[[ boolean ]], repeats --[[ boolean ]], enablePlayerControl --[[ boolean ]], cancelable --[[ boolean ]][, duration --[[ number ]]])
```

* **Paramètres:**
    * **ped:** Ped à animer.
    * **animDict:** Dictionnaire de l'animation.
    * **animName:** Nom de l'animation.
    * **upperbodyOnly:** Si `true`, l'animation sera jouée sur le haut du corps uniquement.
    * **repeats:** Si `true`, l'animation sera jouée en boucle.
    * **enablePlayerControl:** Si `true`, le joueur pourra toujours controler le ped.
    * **cancelable:** Si `true`, l'animation sera annulable.
    * **duration:** Durée de l'animation, `-1` par défaut.

#### **Export (serveur)**

```lua
exports["sadoj-core"]:PlayPedAnim(pedNetId --[[ Integer ]], animDict --[[ string ]], animName --[[ string ]], upperbodyOnly --[[ boolean ]], repeats --[[ boolean ]], enablePlayerControl --[[ boolean ]], cancelable --[[ boolean ]][, duration --[[ number ]]])
```

* **Paramètres:**
    * **pedNetId:** Network Id du ped à animer.
    * **animDict:** Dictionnaire de l'animation.
    * **animName:** Nom de l'animation.
    * **upperbodyOnly:** Si `true`, l'animation sera jouée sur le haut du corps uniquement.
    * **repeats:** Si `true`, l'animation sera jouée en boucle.
    * **enablePlayerControl:** Si `true`, le joueur pourra toujours controler le ped.
    * **cancelable:** Si `true`, l'animation sera annulable.
    * **duration:** Durée de l'animation, `-1` par défaut.
<!-- tabs:end -->


> [!warning]
> Pour toute utilisation `côté client` des fonctions ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle de l'entité. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

#### SetPedCanLosePropsOnDamage

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetPedCanLosePropsOnDamage(ped --[[ Ped ]], loseProps --[[ boolean ]], flag --[[ integer ]])
```
* **Paramètres:**
  * **ped:** Ped.
  * **loseProps:** Si `true`, le ped perdra ses props lorsqu'il sera blessé.
  * **flag:** Flag à utiliser.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:ped:SetPedCanLosePropsOnDamage", pedNetId --[[ integer ]], loseProps --[[ boolean ]], flag --[[ integer ]])
```
* **Paramètres:**
  * **pedNetId:** Network Id du ped.
  * **loseProps:** Si `true`, le ped perdra ses props lorsqu'il sera blessé.
  * **flag:** Flag à utiliser.
<!-- tabs:end -->

#### SetPedCanRagdoll

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetPedCanRagdoll(ped --[[ Ped ]], canRagdoll --[[ boolean ]])
```
* **Paramètres:**
  * **ped:** Ped.
  * **canRagdoll:** Si `true`, le ped pourra ragdoll.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:ped:SetPedCanRagdoll", pedNetId --[[ integer ]], canRagdoll --[[ boolean ]])
```
* **Paramètres:**
  * **pedNetId:** Network Id du ped.
  * **canRagdoll:** Si `true`, le ped pourra ragdoll.
<!-- tabs:end -->

#### SetBlockingOfNonTemporaryEvents

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetBlockingOfNonTemporaryEvents(ped --[[ Ped ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **ped:** Ped.
  * **toggle:** Si `true`, le ped bloquera les événements.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:ped:SetBlockingOfNonTemporaryEvents", pedNetId --[[ integer ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **pedNetId:** Network Id du ped.
  * **toggle:** Si `true`, le ped bloquera les événements.
<!-- tabs:end -->


{docsify-updated}