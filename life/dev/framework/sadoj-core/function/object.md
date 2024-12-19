# sadoj-core - Fonctions - Object

> Auteur de la page: Pierre & Thomas.

---

> [!warning]
> Pour toute utilisation `côté client` des fonctions ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle de l'entité. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

#### SetDisableBreaking

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetDisableBreaking(object --[[ object ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **object:** L'objet à modifier.
  * **toggle:** Si l'objet peut être cassé ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:object:SetDisableBreaking", netId --[[ integer ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'objet à modifier.
  * **toggle:** Si l'objet peut être cassé ou non.
<!-- tabs:end -->

#### SetDisableFragDamage

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetDisableFragDamage(object --[[ object ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **object:** L'objet à modifier.
  * **toggle:** Si l'objet peut être cassé en plusieurs morceaux ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:object:SetDisableFragDamage", netId --[[ integer ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'objet à modifier.
  * **toggle:** Si l'objet peut être cassé en plusieurs morceaux ou non.
<!-- tabs:end -->


