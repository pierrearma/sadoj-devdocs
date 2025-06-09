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

