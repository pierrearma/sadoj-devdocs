# sadoj-pedsrelationship

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-pedsrelationship`
* Redémarrage possible: `Oui`

Liste des niveaux de relation:
- `0`: Companion
- `1`: Respect
- `2`: Like
- `3`: Neutral
- `4`: Dislike
- `5`: Hate


## Utilisation


### Créer un groupe de relation personnalisé
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-pedsrelationship"]:AddCustomRelationshipGroup(name --[[ string ]])
```
* **Paramètres:**
  * **name:** Le nom du groupe de relation.
<!-- tabs:end -->

### Supprimer un groupe de relation personnalisé
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-pedsrelationship"]:RemoveCustomRelationshipGroup(name --[[ string ]])
```
* **Paramètres:**
  * **name:** Le nom du groupe de relation.
<!-- tabs:end -->


### Savoir si un groupe de relation personnalisé existe
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
local result = exports["sadoj-pedsrelationship"]:DoesCustomRelationshipGroupExist(name --[[ string ]])
```
* **Paramètres:**
  * **name:** Le nom du groupe de relation.
* **Retour:**
  * **result:** `true` si le groupe existe, `false` sinon.
<!-- tabs:end -->


### Definir la relation entre deux groupes de relation
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-pedsrelationship"]:SetRelationshipBetweenGroups(group1 --[[ string ]], group2 --[[ string ]], relationshipLevel --[[ integer ]])
```
* **Paramètres:**
  * **group1:** Le nom du premier groupe de relation.
  * **group2:** Le nom du second groupe de relation.
  * **relationshipLevel:** Le niveau de relation entre les deux groupes.
<!-- tabs:end -->

### Definir le groupe de relation d'un ped
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
exports["sadoj-pedsrelationship"]:SetPedRelationshipGroup(ped --[[ integer ]], group --[[ string ]])
```
* **Paramètres:**
  * **ped:** L'identifiant du ped.
  * **group:** Le nom du groupe de relation.
<!-- tabs:end -->