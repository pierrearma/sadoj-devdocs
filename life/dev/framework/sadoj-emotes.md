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
  * **textVar:** Le texte à afficher au dessus de la tête du joueur. (Facultatif)
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


{docsify-updated}