# sadoj-peds

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[GLOBAL]/sadoj-peds`
* Redémarrage possible: `Oui`


## Utilisation


### Ajouter un ped
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local identifier = exports["sadoj-peds"]:AddPed(coords --[[ vector3 ]], heading --[[ float ]], options --[[ table ]][, identifier --[[ string ]])
```
* **Paramètres:**
  * **coords:** Les coordonnées du ped.
  * **heading:** L'angle du ped.
  * **options:** Les options du ped.
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->


### Supprimer un ped
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-peds"]:RemovePed(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Savoir si un ped existe
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local result = exports["sadoj-peds"]:DoesPedExist(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **result:** `true` si le ped existe, `false` sinon.
<!-- tabs:end -->

### Obtenir un ped par son identifiant
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local ped = exports["sadoj-peds"]:GetPedFromIdentifier(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **ped:** Le ped. `nil` si le ped n'existe pas.
<!-- tabs:end -->

### Obtenir l'identifiant d'un ped par son entité
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local identifier = exports["sadoj-peds"]:GetIdentifierFromPed(ped --[[ entity ]])
```
* **Paramètres:**
  * **ped:** L'entité du ped.
* **Retour:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Enregistrer un identifiant de ped en réseau

> [!warning]
> Cette export doit être utilisée avec précaution. Il est fortement recommandé qu'un joueur soit à proximité (60m) du ped pour éviter tout problème.

<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-peds"]:RegisterIdentifierAsNetworked(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Desenregistrer un identifiant de ped en réseau
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-peds"]:UnregisterIdentifierAsNetworked(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
<!-- tabs:end -->

### Savoir si un identifiant de ped est enregistré en réseau
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local result = exports["sadoj-peds"]:IsIdentifierNetworked(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du ped.
* **Retour:**
  * **result:** `true` si l'identifiant est enregistré en réseau, `false` sinon.
<!-- tabs:end -->
