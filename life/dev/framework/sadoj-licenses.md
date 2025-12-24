# sadoj-licenses

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-licenses`
* Redémarrage possible: `Non`

La liste des licences est contenue dans un tableau. Chaque licence est un tableau contenant les informations suivantes:

- `name`: Le nom de la licence (string)
- `uuid`: L'identifiant de la licence (string)
- `label`: Le label de la licence (string)
- `desc`: La description de la licence (string)
- `issueDateTimestamp`: Le timestamp de la date d'obtention de la licence (integer)
- `issueDateLabel`: Le label de la date d'obtention de la licence (string)
- `state`: L'état de la licence (integer)
  - `0`: Invalide
  - `1`: Valide
  - `2`: Suspendu
  - `3`: Expiré
- `isFake`: Si la licence est fausse (boolean)
- `data`: Tableau avec les avec la vraie identité du détenteur de la distance (table)
- `metadata`: Tableau avec comme clé le nom de la métadonnée et comme valeur un tableau avec comme clés `value`, `displayed` et `canRemove` (table)
- `expirationTimestamp`: Le timestamp de la date d'expiration de la licence (facultatif) (integer)
- `expirationDateLabel`: Le label de la date d'expiration de la licence (facultatif) (string)
- `endDateOfSuspensionTimestamp`: Le timestamp de la date de fin de suspension de la licence (facultatif, uniquement si le statut et 2) (string) (integer)
- `endDateOfSuspensionDateLabel`: Le label de la date de fin de suspension de la licence (facultatif, uniquement si le statut et 2) (string)

## Utilisation

### Récupération

#### GetLicenses
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local result --[[ table ]] = exports["sadoj-licenses"]:GetLicenses(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
* **Retour:**
  * **result:** Les licences du joueur.
<!-- tabs:end -->

#### GetLicenseState
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local result --[[ number ]] = exports["sadoj-licenses"]:GetLicenseState(identifier --[[ string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
* **Retour:**
  * **result:** Le statut de la licence.
<!-- tabs:end -->

#### GetLicenseExpirationTimestamp
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local result --[[ table ]] = exports["sadoj-licenses"]:GetLicenseExpirationTimestamp(identifier --[[ string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
* **Retour:**
  * **result:** La date d'expiration de la licence en timestamp ou `nil` si pas d'expiration.
<!-- tabs:end -->

#### GetLicenseSuspensionEndTimestamp
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local result --[[ table ]] = exports["sadoj-licenses"]:GetLicenseSuspensionEndTimestamp(identifier --[[ string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
* **Retour:**
  * **result:** La date de fin de suspension de la licence en timestamp ou `nil` si pas de suspension.
<!-- tabs:end -->

### Vérification

#### HasLicenseFromName
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local hasLicense --[[ boolean ]], license --[[ table ]] = exports["sadoj-licenses"]:HasLicenseFromName(identifier --[[ string ]], licenseName --[[ string ]][, state --[[ number ]], noFakeLicense --[[ boolean ]]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
  * **state:** (optionnel) Le statut de la licence.
  * **noFakeLicense:** (optionnel) `true` si on ne veut pas de fausse licence, `false` sinon. Par défaut `false`.
* **Retour:**
  * **hasLicense:** Si le joueur a la licence.
  * **license:** La licence du joueur.
<!-- tabs:end -->

#### HasLicenseFromUuid
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local hasLicense --[[ boolean ]], license --[[ table ]] = exports["sadoj-licenses"]:HasLicenseFromUuid(identifier --[[ string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
* **Retour:**
  * **hasLicense:** Si le joueur a la licence.
  * **license:** La licence du joueur.
<!-- tabs:end -->


### Ajout

#### AddLicense
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-licenses"]:AddLicense(identifier --[[ string ]], licenseName --[[ string ]][, metadata --[[ table ]]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
  * **metadata:** (optionnel) Un tableau avec comme clé le nom de la métadonnée et comme valeur un tableau avec comme clés `value`, `displayed` et `canRemove` (table)
* **Retour:**
  * **uuid:** L'identifiant de la licence.
<!-- tabs:end -->

#### AddFakeLicense
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-licenses"]:AddFakeLicense(identifier --[[ string ]], licenseName --[[ string ]], lastName --[[ string ]], firstName --[[ string ]], birthDate --[[ string ]], sex --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
  * **lastName:** Le nom de famille.
  * **firstName:** Le prénom.
  * **birthDate:** La date de naissance.
  * **sex:** Le sexe.
* **Retour:**
  * **uuid:** L'identifiant de la licence.
<!-- tabs:end -->


### Suppression

#### RemoveLicenseFromName
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-licenses"]:RemoveLicenseFromName(identifier --[[ string ]], licenseName --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
<!-- tabs:end -->

#### RemoveLicense
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-licenses"]:RemoveLicense(identifier --[[ string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
<!-- tabs:end -->


### Modification

#### SetLicenseState
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-licenses"]:SetLicenseState(identifier --[[ string ]], licenseUuid --[[ string ]], state --[[ number ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **state:** Le nouveau statut de la licence.
<!-- tabs:end -->

#### SetLicenseExpirationTimestamp
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-licenses"]:SetLicenseExpirationTimestamp(identifier --[[ string ]], licenseUuid --[[ string ]], expirationTimestamp --[[ number ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **expirationTimestamp:** Le nouveau timestamp de la date d'expiration de la licence.
<!-- tabs:end -->

#### SetLicenseSuspended
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-licenses"]:SetLicenseSuspended(identifier --[[ string ]], licenseUuid --[[ string ]], endDateOfSuspensionTimestamp --[[ number ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **endDateOfSuspensionTimestamp:** Le nouveau timestamp de la date de fin de suspension de la licence.
<!-- tabs:end -->

### Metadata

#### SetLicenseMetadata
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-licenses"]:SetLicenseMetadata(identifier --[[ string ]], licenseUuid --[[ string ]], metadataKey --[[ string ]], metadataDisplayed --[[ boolean ]], metadataCanRemove --[[ boolean ]], metadataValue --[[ any ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **metadataKey:** La clé de la métadonnée.
  * **metadataDisplayed:** Le nom de la métadonnée.
  * **metadataCanRemove:** Si la métadonnée peut être supprimée.
  * **metadataValue:** La valeur de la métadonnée.
<!-- tabs:end -->

#### RemoveLicenseMetadata
<!-- tabs:start -->
#### **Event (client & serveur)**
```lua
exports["sadoj-licenses"]:RemoveLicenseMetadata(identifier --[[ string ]], licenseUuid --[[ string ]], metadataKey --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **metadataKey:** La clé de la métadonnée.
<!-- tabs:end -->

