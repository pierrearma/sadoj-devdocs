# sadoj-discord

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-discord`


## Utilisation


### Savoir si un discordId existe
<!-- tabs:start -->
### **Export (server)**
```lua
  local exists = exports["sadoj-discord"]:DoesDiscordIdExist(discordId --[[ string ]])
```
<!-- tabs:end -->


### Récupérer un utilisateur par son discordId
<!-- tabs:start -->
### **Export (server)**
```lua
  local user = exports["sadoj-discord"]:GetUserByDiscordId(discordId --[[ string ]])
```
<!-- tabs:end -->

{docsify-updated}