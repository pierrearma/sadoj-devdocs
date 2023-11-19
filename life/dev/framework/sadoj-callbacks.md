# sadoj-callbacks

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-callbacks`

Ce script permet de faire des callbacks (fonctions de rappel) d'un client vers le serveur ou même du serveur à un client.

## Utilisation

### Callbacks serveur

#### Enregistrer le callback

<!-- tabs:start -->

### **Export (serveur)**

```lua
exports["sadoj-callbacks"]:RegisterServerCallback(name --[[ string ]], function(source, param1, param2, ...)
    -- votre code ici
    local result1 = "result1"
    local result2 = "result2"

    -- envoyer le résulat
    return result1, result2, ...
end --[[ function ]])
```

* **Paramètres:**
  * **name:** Nom du callback.
  * **function:** Fonction avec votre code.

<!-- tabs:end -->

#### Déclencher le callback

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-callbacks"]:TriggerServerCallback(name --[[ string ]][, param1 --[[ any ]][, param2 --[[ any ]][, ...]]])
```

* **Paramètres:**
  * **name:** Nom du callback.
  * **param:** Paramètres que vous souhaitez envoyer au serveur.

<!-- tabs:end -->

### Callbacks client

#### Enregistrer le callback

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-callbacks"]:RegisterClientCallback(name --[[ string ]], function(param1, param2, ...)
    -- votre code ici
    local result1 = "result1"
    local result2 = "result2"

    -- envoyer le résulat
    return result1, result2, ...
end --[[ function ]])
```

* **Paramètres:**
  * **name:** Nom du callback.
  * **function:** Fonction avec votre code.

<!-- tabs:end -->

#### Déclencher le callback

<!-- tabs:start -->

### **Export (serveur)**

```lua
exports["sadoj-callbacks"]:TriggerClientCallback(name --[[ string ]], serverId --[[ integer ]][, param1 --[[ any ]][, param2 --[[ any ]][, ...]]])
```

* **Paramètres:**
  * **name:** Nom du callback.
  * **serverId:** Server ID de la cible. Penser à vérifier que le joueur avec ce Server ID est bien connecté.
  * **param:** Paramètres que vous souhaitez envoyer au serveur.

<!-- tabs:end -->

{docsify-updated}
