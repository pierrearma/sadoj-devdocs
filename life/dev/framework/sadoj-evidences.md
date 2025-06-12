# sadoj-evidences

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[METIERS]/[POLICE]/sadoj-evidences`
* Redémarrage possible: `Non`


## Portefeuille


### Ajouter une preuve

#### Ajouter une preuve à des coordonnées spécifiques
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local evidenceUuid = exports["sadoj-evidences"]:AddEvidenceAtCoords(evidenceType --[[ string ]], coords --[[ vector3 ]], data --[[ table ]])
```
* **Paramètres:**
  * **evidenceType:** Le type de preuve à ajouter (par exemple, "bullet", "cartridgeCase", etc.)
  * **coords:** Les coordonnées où la preuve doit être ajoutée.
  * **data:** Les données supplémentaires associées à la preuve.
* **Retour:**
  * **evidenceUuid:** L'UUID de la preuve ajoutée.
<!-- tabs:end -->

#### Ajouter une preuve dans un véhicule
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local evidenceUuid = exports["sadoj-evidences"]:AddEvidenceToVehicle(evidenceType --[[ string ]], vin --[[ string ]], position --[[ string ]], data --[[ table ]])
```
* **Paramètres:**
  * **evidenceType:** Le type de preuve à ajouter (par exemple, "bullet", "cartridgeCase", etc.)
  * **vin:** Le VIN du véhicule dans lequel la preuve doit être ajoutée.
  * **position:** La position de la preuve dans le véhicule (par exemple, "FrontDriverSide", "FrontPassengerSide", etc.)
  * **data:** Les données supplémentaires associées à la preuve.
* **Retour:**
  * **evidenceUuid:** L'UUID de la preuve ajoutée.
<!-- tabs:end -->

#### Ajouter une preuve à un joueur
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local evidenceUuid = exports["sadoj-evidences"]:AddEvidenceToPlayer(evidenceType --[[ string ]], player --[[ player ]], data --[[ table ]])
```
* **Paramètres:**
  * **evidenceType:** Le type de preuve à ajouter (par exemple, "bullet", "cartridgeCase", etc.)
  * **player:** Le joueur auquel la preuve doit être ajoutée.
  * **data:** Les données supplémentaires associées à la preuve.
* **Retour:**
  * **evidenceUuid:** L'UUID de la preuve ajoutée.
<!-- tabs:end -->

#### Ajouter une preuve à un item
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local item, evidenceUuid = exports["sadoj-evidences"]:AddEvidenceToItem(item --[[ table ]], data --[[ table ]])
```
* **Paramètres:**
  * **item:** L'item auquel la preuve doit être ajoutée.
  * **data:** Les données supplémentaires associées à la preuve.
* **Retour:**
  * **item:** L'item mis à jour avec la preuve ajoutée.
  * **evidenceUuid:** L'UUID de la preuve ajoutée.
<!-- tabs:end -->

### Supprimer une preuve

#### Supprimer une preuve à des coordonnées spécifiques
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-evidences"]:RemoveEvidenceAtCoords(evidenceUuid --[[ string ]])
```
* **Paramètres:**
  * **evidenceUuid:** L'UUID de la preuve à supprimer.
<!-- tabs:end -->

#### Supprimer une preuve dans un véhicule
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-evidences"]:RemoveVehicleEvidence(vin --[[ string ]], evidenceUuid --[[ string ]])
```
* **Paramètres:**
  * **evidenceUuid:** L'UUID de la preuve à supprimer.
  * **vin:** Le VIN du véhicule dans lequel la preuve doit être supprimée.
<!-- tabs:end -->

#### Supprimer une preuve d'un joueur
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-evidences"]:RemovePlayerEvidence(player --[[ player ]], evidenceUuid --[[ string ]])
```
* **Paramètres:**
  * **evidenceUuid:** L'UUID de la preuve à supprimer.
  * **player:** Le joueur dont la preuve doit être supprimée.
<!-- tabs:end -->

#### Supprimer une preuve d'un item
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  exports["sadoj-evidences"]:RemoveEvidenceFromItem(item --[[ table ]], evidenceUuid --[[ string ]])
```
* **Paramètres:**
  * **evidenceUuid:** L'UUID de la preuve à supprimer.
  * **item:** L'item dont la preuve doit être supprimée.
<!-- tabs:end -->

### Vérification

#### Vérifier si une preuve de coordonnées existe
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local exists = exports["sadoj-evidences"]:DoesCoordsEvidenceExist(evidenceUuid --[[ string ]])
```
* **Paramètres:**
  * **evidenceUuid:** L'UUID de la preuve à vérifier.
  * **Retour:**
    * **exists:** `true` si la preuve existe aux coordonnées spécifiées, `false` sinon.
<!-- tabs:end -->

#### Vérifier si une preuve dans un véhicule existe
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local exists = exports["sadoj-evidences"]:DoesVehicleEvidenceExist(vin --[[ string ]], evidenceUuid --[[ string ]])
```
* **Paramètres:**
  * **evidenceUuid:** L'UUID de la preuve à vérifier.
  * **vin:** Le VIN du véhicule dans lequel la preuve doit être vérifiée.
  * **Retour:**
    * **exists:** `true` si la preuve existe dans le véhicule, `false` sinon.
<!-- tabs:end -->

### Obtenir une preuve

#### Obtenir une preuve à des coordonnées spécifiques
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local evidence, distance = exports["sadoj-evidences"]:GetClosestEvidenceFromCoords(coords --[[ vector3 ]])
```
* **Paramètres:**
  * **coords:** Les coordonnées à partir desquelles rechercher la preuve.
  * **Retour:**
    * **evidence:** La preuve la plus proche trouvée aux coordonnées spécifiées.
    * **distance:** La distance entre les coordonnées et la preuve trouvée.
<!-- tabs:end -->

#### Obtenir une preuve dans un item
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local evidence = exports["sadoj-evidences"]:GetItemEvidence(item --[[ table ]], evidenceUuid --[[ string ]])
```
* **Paramètres:**
  * **item:** L'item à partir duquel obtenir la preuve.
  * **evidenceUuid:** L'UUID de la preuve à obtenir.
* **Retour:**
  * **evidence:** La preuve associée à l'item et à l'UUID spécifié. (`nil` si la preuve n'existe pas)
<!-- tabs:end -->



