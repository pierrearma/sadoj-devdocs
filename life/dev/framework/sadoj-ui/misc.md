# sadoj-ui - Divers

> Auteur de la page: Pierre.

---

## DisplayWarningPopup

Exemple:

![](https://i.gyazo.com/01d1d24f1c8a4b1726b157815d3563b0.png)

<!-- tabs:start -->

### **Export (client)**

```lua
local accepted --[[ boolean ]] = exports["sadoj-ui"]:DisplayWarningPopup(titleMsg --[[ string ]][, warningMsg --[[ string ]][, promptMsg --[[ string ]][, confirmInstructionButton --[[ string ]][, canCancel --[[ boolean ]][, cancelInstructionButton --[[ string]]]]]]])
```

* **Paramètres:**
  * **titleMsg:** Titre du popup. `"Alerte"` par défaut.
  * **warningMsg:** Message d'avertissement. `""` par défaut.
  * **promptMsg:** Message de confirmation. `""` par défaut.
  * **confirmInstructionButton:** Texte du bouton de confirmation. `"Confirmer"` par défaut.
  * **canCancel:** Si vrai, le joueur peut annuler le popup. `false` par défaut.
  * **cancelInstructionButton:** Texte du bouton d'annulation. `"Annuler"` par défaut.
* **Retour:**
    * **accepted:** Si le joueur a accepté le popup.

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:DisplayWarningPopup", titleMsg --[[ string ]][, warningMsg --[[ string ]][, promptMsg --[[ string ]][, confirmInstructionButton --[[ string ]][, canCancel --[[ boolean ]][, cancelInstructionButton --[[ string ]][, callback --[[ function ]]]]]]]])
```

* **Paramètres:**
  * **titleMsg:** Titre du popup. `"Alerte"` par défaut.
  * **warningMsg:** Message d'avertissement. `""` par défaut.
  * **promptMsg:** Message de confirmation. `""` par défaut.
  * **confirmInstructionButton:** Texte du bouton de confirmation. `"Confirmer"` par défaut.
  * **canCancel:** Si vrai, le joueur peut annuler le popup. `false` par défaut.
  * **cancelInstructionButton:** Texte du bouton d'annulation. `"Annuler"` par défaut.
  * **callback:** Fonction appelée lorsque le joueur a accepté ou refusé le popup avec un booléen en paramètre.

### **Event (serveur)**

Depuis le serveur, il est impossible à l'utilisateur de refuser le popup.

```lua
TriggerClientEvent("sadoj-ui:client:DisplayWarningPopup", serverId --[[ integer ]], titleMsg --[[ string ]][, warningMsg --[[ string ]][, promptMsg --[[ string ]][, confirmInstructionButton --[[ string ]]]]])
```

* **Paramètres:**
  * **titleMsg:** Titre du popup. `"Alerte"` par défaut.
  * **warningMsg:** Message d'avertissement. `""` par défaut.
  * **promptMsg:** Message de confirmation. `""` par défaut.
  * **confirmInstructionButton:** Texte du bouton de confirmation. `"Confirmer"` par défaut.

<!-- tabs:end -->

## SetWaypointToPostal

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:SetWaypointToPostal(postalCode --[[ string ]])
```

* **Paramètres:**
  * **postalCode:** Code postal où mettre le point de navigation.

<!-- tabs:end -->

## GetNearestPostalFromCoords

<!-- tabs:start -->

### **Export (client)**

```lua
local nearestPostal --[[ string ]], nearestDistance --[[ number ]] = exports["sadoj-ui"]:GetNearestPostalFromCoords(coords --[[ vector3 ]])
```

* **Paramètres:**
  * **coords:** Coordonnées où chercher.
* **Retour:**
  * **nearestPostal:** Code postal le plus proche.
  * **nearestDistance:** Distance entre les coordonnées et le code postal le plus proche.

<!-- tabs:end -->

{docsify-updated}
