# sadoj-discord

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-discord`
* Redémarrage possible: `Oui`

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

### Envoyer un message
<!-- tabs:start -->
### **Export (server)**
```lua
  local success, response = exports["sadoj-discord"]:SendMessage(channelId --[[ string ]], data --[[ table ]])
```
* **Paramètres:**
  * **channelId:** L'identifiant du channel Discord.
  * **data:** Les données du message (voir ci-dessus).
* **Retour:**
  * **success:** `true` si le message a été envoyé avec succès, `false` sinon.
  * **response:** Une table contenant les données du message envoyé ou l'erreur.
<!-- tabs:end -->

### Modifier un message
<!-- tabs:start -->
### **Export (server)**
```lua
  local success, response = exports["sadoj-discord"]:EditMessage(channelId --[[ string ]], messageId --[[ string ]], data --[[ table ]])
```
* **Paramètres:**
  * **channelId:** L'identifiant du channel Discord.
  * **messageId:** L'identifiant du message à modifier.
  * **data:** Les nouvelles données du message (voir ci-dessus).
* **Retour:**
  * **success:** `true` si le message a été modifié avec succès, `false` sinon.
  * **response:** Une table contenant les données du message modifié ou l'erreur.
<!-- tabs:end -->