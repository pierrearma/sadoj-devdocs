# sadoj-metabolism

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-metabolism`

Ce script permet de gérer le métabolisme des joueurs.

On retrouve notamment :
* La simulation de la nutrition (faim, soif, sassiété)
* La simulation de l'alcoolémie
* La simulation de l'endurance

## Utilisation

### Récupérer une métadonnée du joueur local

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ any ]] = exports["sadoj-metabolism"]:GetLocalPlayerMetadata(key --[[ string ]])
```

* **Paramètres:**
  * **key:** Clé de la métadonnée.
* **Retour:**
  * **result:** Valeur de la métadonnée. Le type varie en fonction du type de métadonnée.

<!-- tabs:end -->

### Récupérer une métadonnée d'un joueur

<!-- tabs:start -->

### **Export (serveur)**

```lua
local result --[[ any ]] = exports["sadoj-metabolism"]:GetPlayerMetadata(playerIdentifier --[[ string ]], key --[[ string ]])
```

* **Paramètres:**
  * **playerIdentifier:** Identifiant du joueur.
  * **key:** Clé de la métadonnée.
* **Retour:**
  * **result:** Valeur de la métadonnée. Le type varie en fonction du type de métadonnée.

<!-- tabs:end -->

### Ajouter un handler pour une métadonnée

> [!WARNING]
> Pour un usage côté client, cela ne fonctionnera sur un autre joueur uniquement si le joueur est dans le scope OneSync. Si le joueur n'est pas dans le scope, l'hander ne sera pas appelé.

<!-- tabs:start -->

### **Export (client et serveur)**

```lua
local handlerId --[[ integer ]] = exports["sadoj-metabolism"]:AddMetadataChangeHandler(key --[[ string ]], playerId, handler --[[ function ]])
```

* **Paramètres:**
  * **key:** Clé de la métadonnée.
  * **playerId:** Identifiant serveur du joueur.
  * **handler:** Fonction appelée lorsqu'une métadonnée est modifiée.
* **Retour:**
  * **handlerId:** Identifiant du handler. Peut être utilisé pour supprimer le handler.
* **Exemple:**
  ```lua
  exports["sadoj-metabolism"]:AddMetadataChangeHandler("ALCOHOL_LEVEL", GetPlayerServerId(PlayerId()), function(value)
    print("Nouveau taux d'alcoolémie: " .. value)
  end)
  ```

<!-- tabs:end -->

### Supprimer un handler pour une métadonnée

<!-- tabs:start -->

### **Export (client et serveur)**

```lua
exports["sadoj-metabolism"]:RemoveMetadataChangeHandler(handlerId --[[ integer ]])
```

* **Paramètres:**
  * **handlerId:** Identifiant du handler à supprimer.

<!-- tabs:end -->
