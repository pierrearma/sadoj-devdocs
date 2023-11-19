# sadoj-persistentprops

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[INNOVATION]/sadoj-persistentprops`

Ce script permet d'enregistrer des prop de manière persistante. Ces props réapparaissent lorsqu'ils disparaissent.

## Utilisation

### Enregistrer un prop

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ string ]] = exports["sadoj-persistentprops"]:RegisterProp(entity --[[ entity ]] [, options --[[ table ]]])
```

* **Paramètres:**
  * **entity:** Props que vous souhaitez enregistrer.
  * **options:** Tableau
      ```lua
      local options = {
        Freeze = --[[ boolean  ]]
      }
      ```
* **Résultat:**
  * **result:** Identifiant de l'enregistrement.

#### **Export (serveur)**
```lua
local result --[[ string ]] = exports["sadoj-persistentprops"]:RegisterProp(entity --[[ entity ]][, options --[[ table ]]])
```

* **Paramètres:**
  * **entity:** Props que vous souhaitez enregistrer.
  * **options:** Tableau
      ```lua
      local options = {
        Freeze = --[[ boolean  ]]
      }
      ```
* **Résultat:**
  * **result:** Identifiant de l'enregistrement.
<!-- tabs:end -->

### Désenregistrer un prop

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-persistentprops"]:ForgetProp(indentifier --[[ string ]][, delete --[[ boolean  ]]])
```

* **Paramètres:**
  * **identifier:** Identifiant de l'enregistrement.
  * **delete:** Si vous souhaitez supprimer le prop.

#### **Export (serveur)**
```lua
exports["sadoj-persistentprops"]:ForgetProp(indentifier --[[ string ]][, delete --[[ boolean  ]]])
```

* **Paramètres:**
  * **identifier:** Identifiant de l'enregistrement.
  * **delete:** Si vous souhaitez supprimer le prop.
<!-- tabs:end -->


### Vérifier si un prop et enregistrer

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-persistentprops"]:PropIsRegistered(indentifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de l'enregistrement.
* **Résultat:**
  * **result:** `true` si le prop est enregistré, `false` sinon.

#### **Export (serveur)**
```lua
local result --[[ boolean ]] = exports["sadoj-persistentprops"]:PropIsRegistered(indentifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de l'enregistrement.
* **Résultat:**
  * **result:** `true` si le prop est enregistré, `false` sinon.
<!-- tabs:end -->

### Récupérer l'identifiant d'un prop enregistrer à partir d'un NetId

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ string ]] = exports["sadoj-persistentprops"]:GetPropIndentifierByNetId(netId --[[ number ]])
```
* **Paramètres:**
  * **netId:** NetId du props que vous souhaitez récupérer.
* **Résultat:**
  * **result:** Identifiant de l'enregistrement.

#### **Export (serveur)**
```lua
local result --[[ string ]] = exports["sadoj-persistentprops"]:GetPropIndentifierByNetId(netId --[[ number ]])
```
* **Paramètres:**
  * **netId:** NetId du props que vous souhaitez récupérer.
* **Résultat:**
  * **result:** Identifiant de l'enregistrement.
<!-- tabs:end -->

### Récupérer le NetId d'un prop enregistrer à partir d'un identifiant
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ number ]] = exports["sadoj-persistentprops"]:GetPropNetIdByIndentifier(indentifier --[[ string ]])
```
* **Paramètres:**
  * **indentifier:** Identifiant de l'enregistrement.
* **Résultat:**
  * **result:** NetId du props.

#### **Export (serveur)**
```lua
local result --[[ number ]] = exports["sadoj-persistentprops"]:GetPropNetIdByIndentifier(indentifier --[[ string ]])
```
* **Paramètres:**
  * **indentifier:** Identifiant de l'enregistrement.
* **Résultat:**
  * **result:** NetId du props.
<!-- tabs:end -->

{docsify-updated}
