# sadoj-cayoperico

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-cayoperico`

Ce script permet de gérer l'île de Cayo Perico.

## Utilisation

### Savoir si un joueur est sur l'île

> [!TIP]
> Si vous souhaitez savoir en temps réel quand on joueur sort ou entre sur l'île, vous pouvez écouter l'évènement `IsInCayoPerico` que se soit côté serveur ou côté client. Celui-ci est déclenché quand un joueur entre dans l'île ou sort de l'île en renvoyant un booléen.

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-cayoperico"]:IsInCayoPerico()
```

* **Résultat:**
  * **result:** Booléen qui indique si le joueur est sur l'île.

<!-- tabs:end -->

### Forcer l'activation de l'île

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-cayoperico"]:EnableCayoPerico()
```

### **Event (client)**

```lua
TriggerEvent("EnableCayoPerico"[, callback --[[ function ]]])
```

* **Paramètres:**
  * **callback:** Fonction qui sera appelée quand l'évènement sera déclenché (optionnel).

### **Event (serveur)**

```lua
TriggerClientEvent("EnableCayoPerico", serverId --[[ number ]])
```

<!-- tabs:end -->

### Forcer la désactivation de l'île

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-cayoperico"]:DisableCayoPerico()
```

### **Event (client)**

```lua
TriggerEvent("DisableCayoPerico"[, callback --[[ function ]]])
```

* **Paramètres:**
  * **callback:** Fonction qui sera appelée quand l'évènement sera déclenché (optionnel).

### **Event (serveur)**

```lua

TriggerClientEvent("DisableCayoPerico", serverId --[[ number ]])

```

<!-- tabs:end -->

{docsify-updated}
