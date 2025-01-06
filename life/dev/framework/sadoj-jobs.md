# sadoj-jobs

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-jobs`

Ce script permet de gérer les métiers.

## Utilisation

### Récupérer les métiers d'un joueur

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ table<string, string> ]] = exports["sadoj-jobs"]:GetJobs()
```

* **Retour:**
  * **result:** Tableau associatif des métiers du joueur. La clé est l'identifiant de la structure et la valeur est l'identifiant du poste.

### **Export (serveur)**

```lua
local result --[[ table<string, string> ]] = exports["sadoj-jobs"]:GetPlayerJobs(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * **result:** Tableau associatif des métiers du joueur. La clé est l'identifiant de la structure et la valeur est l'identifiant du poste.

<!-- tabs:end -->

### Savoir si un joueur est dans une structure donnée

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsInCompany(companyId --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
* **Retour:**
  * **result:** `true` si le joueur est dans la structure, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerInCompany(playerSrc --[[ number ]], companyId --[[ string]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **companyId:** Identifiant de la structure.
* **Retour:**
  * **result:** `true` si le joueur est dans la structure, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur est dans l'une des structures données

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsInAnyCompany(list --[[ table<string> ]])
```

* **Paramètres:**
  * **list:** Tableau des identifiants des structures.
* **Retour:**
  * **result:** `true` si le joueur est dans l'une des structures, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerInAnyCompany(playerSrc --[[ number ]], list --[[ table<string> ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **list:** Tableau des identifiants des structures.
* **Retour:**
  * **result:** `true` si le joueur est dans l'une des structures, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur est dans un poste donné

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasJob(companyId --[[ string ]], position --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
  * **position:** Identifiant du poste.
* **Retour:**
  * **result:** `true` si le joueur est dans le poste, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerHasJob(playerSrc --[[ number ]], companyId --[[ string ]], position --[[ string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **companyId:** Identifiant de la structure.
  * **position:** Identifiant du poste.
* **Retour:**
  * **result:** `true` si le joueur est dans le poste, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur est dans l'un des postes donnés

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasAnyJob(list --[[ table<string, table<string> ]])
```

* **Paramètres:**
  * **list:** Tableau associatif des postes. La clé est l'identifiant de la structure et la valeur est la liste des identifiants des postes.
* **Retour:**
  * **result:** `true` si le joueur est dans l'un des postes, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerHasAnyJob(playerSrc --[[ number ]], list --[[ table<string, table<string> ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **list:** Tableau associatif des postes. La clé est l'identifiant de la structure et la valeur est la liste des identifiants des postes.
* **Retour:**
  * **result:** `true` si le joueur est dans l'un des postes, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur est dans une entreprise

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsEmployed()
```

* **Retour:**
  * **result:** `true` si le joueur est dans une entreprise, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerEmployed(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * **result:** `true` si le joueur est dans une entreprise, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur est dans une association

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsInAssociation()
```

* **Retour:**
  * **result:** `true` si le joueur est dans une association, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerInAssociation(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * **result:** `true` si le joueur est dans une association, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur est dans un gang

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsInGang()
```

* **Retour:**
  * **result:** `true` si le joueur est dans un gang, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerInGang(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * **result:** `true` si le joueur est dans un gang, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur est dans une organisation

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsInOrganization()
```

* **Retour:**
  * **result:** `true` si le joueur est dans une organisation, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:IsPlayerInOrganization(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * **result:** `true` si le joueur est dans une organisation, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur a accès aux items des coffres d'une structure

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasAccessToItems(companyId --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur a accès aux items des coffres, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasPlayerAccessToItems(playerSrc --[[ number ]], companyId --[[ string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur a accès aux items des coffres, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur a accès a l'argent des coffres d'une structure

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasAccessToMoney(companyId --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur a accès à l'argent des coffres, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasPlayerAccessToMoney(playerSrc --[[ number ]], companyId --[[ string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur a accès à l'argent des coffres, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur a accès aux boîtes à clés d'une structure

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasAccessToKeybox(companyId --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur a accès aux boîtes à clés, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasPlayerAccessToKeybox(playerSrc --[[ number ]], companyId --[[ string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur a accès aux boîtes à clés, `false` sinon.

<!-- tabs:end -->

### Savoir si un joueur peut gérer la structure

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:CanManage(companyId --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur peut gérer la structure, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:CanPlayerManage(playerSrc --[[ number ]], companyId --[[ string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** `true` si le joueur peut gérer la structure, `false` sinon.

<!-- tabs:end -->

### Savoir si le joueur a une compétence

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:HasSkill(skillId --[[ string ]])
```

* **Paramètres:**
  * **skillId:** Identifiant de la compétence.
* **Retour:**
    * **result:** `true` si le joueur a la compétence, `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-jobs"]:DoesPlayerHaveSkill(playerSrc --[[ number ]], skillId --[[ string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **skillId:** Identifiant de la compétence.
* **Retour:**
    * **result:** `true` si le joueur a la compétence, `false` sinon.

<!-- tabs:end -->

### Récupérer la liste des `real_owner` des véhicules auxquels le joueur a accès

>[!NOTE]
> Cet export est spécialement conçu pour les garages et pour les titres de propriété des véhicules.

<!-- tabs:start -->

### **Export (serveur)**

```lua
local result --[[ table<string, boolean> ]] = exports["sadoj-jobs"]:GetPlayerJobsGarages(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
    * **result:** Tableau associatif des `real_owner` des véhicules auxquels le joueur a accès. La clé est toujours égal à `true`.

<!-- tabs:end -->

### Récupérer le nom d'affichage d'une structure

<!-- tabs:start -->

### **Export (client et serveur)**

```lua
local result --[[ string ]] = exports["sadoj-jobs"]:GetCompanyLabel(companyId --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
* **Retour:**
    * **result:** Nom d'affichage de la structure.

<!-- tabs:end -->

### Récupérer le nom d'affichage d'un poste

<!-- tabs:start -->

### **Export (client et serveur)**

```lua
local result --[[ string ]] = exports["sadoj-jobs"]:GetPositionLabel(companyId --[[ string ]], position --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
  * **position:** Identifiant du poste.
* **Retour:**
    * **result:** Nom d'affichage du poste.

<!-- tabs:end -->

### Récupérer le nom d'affichage d'une structure et d'un poste

<!-- tabs:start -->

### **Export (client et serveur)**

```lua
local companyLabel --[[ string ]], positionLabel --[[ string ]] = exports["sadoj-jobs"]:GetCompanyAndPositionLabel(companyId --[[ string ]], position --[[ string ]])
```

* **Paramètres:**
  * **companyId:** Identifiant de la structure.
  * **position:** Identifiant du poste.
* **Retour:**
    * **companyLabel:** Nom d'affichage de la structure.
    * **positionLabel:** Nom d'affichage du poste.

<!-- tabs:end -->
