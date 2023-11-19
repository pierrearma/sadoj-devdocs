# sadoj-ui - Notifications

> Auteur de la page: Pierre.

---

Notifications au dessus de la carte.

Exemple d'une notification standard:

![](https://i.imgur.com/TJvqkYq.png)

Exemple d'une notitication avancée:

![](https://i.imgur.com/LviutDl.png)

## ShowNotification

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowNotification(text --[[ string ]][, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
* **Retour:**
  * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowNotification", text --[[ string ]][, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

### **Event (serveur)**

```lua
TriggerClientEvent("sadoj-ui:client:ShowNotification", serverId --[[ integer ]], text --[[ string ]][, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

<!-- tabs:end -->

## ShowNotificationToPlayer

Permet d'envoyer une notification à un joueur depuis un script client.

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-ui:server:ShowNotificationToPlayer", playerSrc --[[ Integer ]], text --[[ string ]][, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **playerSrc:** Server ID du joueur.
  * **text:** Texte de la notification (moins de 100 caractères).
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

<!-- tabs:end -->

## ShowNotificationWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowNotificationWithTextEntry(entryKey --[[ string ]], params --[[ table ]] [, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowNotificationWithTextEntry", entryKey --[[ string ]], params --[[ table ]] [, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

### **Event (serveur)**

```lua
TriggerClientEvent("sadoj-ui:client:ShowNotificationWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]] [, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

<!-- tabs:end -->

## ShowNotificationWithTextEntryToPlayer

Permet d'envoyer une notification à un joueur depuis un script client.

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-ui:server:ShowNotificationWithTextEntryToPlayer", playerSrc --[[ Integer ]], entryKey --[[ string ]], params --[[ table ]] [, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **playerSrc:** Server ID du joueur.
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

<!-- tabs:end -->

## ShowAdvancedNotification

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowAdvancedNotification(text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowAdvancedNotification", text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

### **Event (serveur)**

```lua
TriggerClientEvent("sadoj-ui:client:ShowAdvancedNotification", serverId --[[ integer ]], text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

<!-- tabs:end -->

## ShowAdvancedNotificationWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowAdvancedNotificationWithTextEntry(entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowAdvancedNotificationWithTextEntry", entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

### **Event (serveur)**

```lua
TriggerClientEvent("sadoj-ui:client:ShowAdvancedNotificationWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

<!-- tabs:end -->

## ShowPedHeadshotNotification

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowPedHeadshotNotification(text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowPedHeadshotNotification", text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

### **Event (serveur)**

```lua
TriggerClientEvent("sadoj-ui:client:ShowPedHeadshotNotification", serverId --[[ integer ]], text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

<!-- tabs:end -->

## ShowPedHeadshotNotificationWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowPedHeadshotNotificationWithTextEntry(entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowPedHeadshotNotificationWithTextEntry", entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

### **Event (serveur)**

```lua
TriggerClientEvent("sadoj-ui:client:ShowPedHeadshotNotificationWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]][, iconType --[[ integer ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
  * **iconType:** Icône de la notification. Voir en bas de page. 4 (aucun icône) par défaut.

<!-- tabs:end -->

**iconTypes:**
1. Chat Box
2. Email
3. Add Friend Request
4. Nothing
5. Nothing
6. Nothing
7. Right Jumping Arrow
8. RP Icon
9. $ Icon

{docsify-updated}
