# sadoj-ui - Interface

> Auteur de la page: Pierre.

---

### Le fonctionnement du système de `token`

Un `token` est une chaine de caractères unique qui est retournée lorsque vous cachez un élément de l'interface.

Ce système permet à plusieurs scripts de masquer un élément sans rentrer en conflit.

## HideAllHud

Cette fonction permet de masquer toute l'interface sauf les textes d'aides, les timers bar.

Les éléments d'interface non intégré à ce script ne seront pas masqués.

<!-- tabs:start -->

### **Export (client)**

```lua
local token --[[ string ]] = exports["sadoj-ui"]:HideAllHud()
```

* **Retour:**
    * **token**: Le token pour réafficher l'interface.

<!-- tabs:end -->

## ShowAllHud

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:ShowAllHud(token --[[ string ]])
```

* **Paramètres:**
    * **token**: Le token retourné par la fonction `HideAllHud`.

<!-- tabs:end -->

## HideRadar

<!-- tabs:start -->

### **Export (client)**

```lua
local token --[[ string ]] = exports["sadoj-ui"]:HideRadar()
```

* **Retour:**
    * **token**: Le token pour réafficher le radar.

<!-- tabs:end -->

## ShowRadar

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:ShowRadar(token --[[ string ]])
```

* **Paramètres:**
    * **token**: Le token retourné par la fonction `HideRadar`.

<!-- tabs:end -->

## HideStatus

Cette fonction permet de masquer les statuts (santé, faim, etc).

<!-- tabs:start -->

### **Export (client)**

```lua
local token --[[ string ]] = exports["sadoj-ui"]:HideStatus()
```

* **Retour:**
    * **token**: Le token pour réafficher les statuts.

<!-- tabs:end -->

## ShowStatus

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:ShowStatus(token --[[ string ]])
```

* **Paramètres:**
    * **token**: Le token retourné par la fonction `HideStatus`.

<!-- tabs:end -->

## HideVehicle

Cette fonction permet de masquer le compteur de vitesse.

<!-- tabs:start -->

### **Export (client)**

```lua
local token --[[ string ]] = exports["sadoj-ui"]:HideVehicle()
```

* **Retour:**
    * **token**: Le token pour réafficher le compteur de vitesse.

<!-- tabs:end -->

## ShowVehicle

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:ShowVehicle(token --[[ string ]])
```

* **Paramètres:**
    * **token**: Le token retourné par la fonction `HideVehicle`.

<!-- tabs:end -->

## HideStreet

Cette fonction permet de masquer le nom de la rue et le quartier.

<!-- tabs:start -->

### **Export (client)**

```lua
local token --[[ string ]] = exports["sadoj-ui"]:HideStreet()
```

* **Retour:**
    * **token**: Le token pour réafficher le nom de la rue et le quartier.

<!-- tabs:end -->

## ShowStreet

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:ShowStreet(token --[[ string ]])
```

* **Paramètres:**
    * **token**: Le token retourné par la fonction `HideStreet`.

<!-- tabs:end -->

## RegisterStatusModule

Cette fonction permet d'enregistrer un nouveau module de statut.

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:RegisterStatusModule(name --[[ string]], icon --[[ string ]], refreshFunction --[[ function ]], refreshRate --[[ integer ]])
```

* **Paramètres:**
    * **name**: Le nom du module.
    * **icon**: Le nom du fichier svg de l'icône situé dans le dossier `sadoj-ui/hud/icons`. Il faut conserver la cohérence graphique entre toutes les icônes (îcone plein et sobre). Vous pouvez retrouver des icônes gratuites sur [Friconix](https://friconix.com/).
    * **refreshFunction**: La fonction de rafraichissement du module.
    * **refreshRate**: Le temps entre chaque rafraichissement (en ms).

**Fonctionnement de la fonction de rafrachissement:**

```lua
function refreshFunction()
    --[[
        Cette fonction est appelée toutes les `refreshRate` ms.
    ]]

    --Votre traitement ici.
    local value --[[ integer ]] = 0 --Valeur de remplissage du module entre 0 et 1.
    local color --[[ string ]] = "#FFFFFF" --Couleur du module en hexadecimal.
    local displayed --[[ boolean ]] = true --Si le module doit être affiché ou non.
    local blink --[[ boolean ]] = false --Si le module doit clignoter ou non.

    return value, color, displayed, blink
end
```

<!-- tabs:end -->

## RemoveStatusModule

Cette fonction permet de supprimer un module de statut. Par exemple, quand vous redémarrez la ressource.

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:RemoveStatusModule(name --[[ string ]])
```

* **Paramètres:**
    * **name**: Le nom du module.

<!-- tabs:end -->

{docsify-updated}
