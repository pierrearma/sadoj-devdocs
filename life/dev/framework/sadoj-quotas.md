# sadoj-quotas

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-quotas`

Ce script permet de définir une valeur valide un certain temps (un enregistrement) et de récupérer la somme des valeurs valides.

Cela permet ainsi de créer des quotas, par exemple, de faire un système qui limite les revenus de quelque chose à un montant donné par la période de notre choix.

## Utilisation

### Ajouter un enregistrement

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-quotas:server:AddRecord", key --[[ string ]], subject --[[ string ]], value --[[ integer ]], expires --[[ integer ]])
```

* **Paramètres:**
  * **key:** Clé de l'enregistrement.
  * **subject:** Sujet de l'enregistrement.
  * **value:** Valeur de l'enregistrement.
  * **expires:** Date d'expiration de l'enregistrement (timestamp).

### **Event (serveur)**

```lua
TriggerEvent("sadoj-quotas:client:AddRecord", key --[[ string ]], subject --[[ string ]], value --[[ integer ]], expires --[[ integer ]])
```

* **Paramètres:**
  * **key:** Clé de l'enregistrement.
  * **subject:** Sujet de l'enregistrement.
  * **value:** Valeur de l'enregistrement.
  * **expires:** Date d'expiration de l'enregistrement (timestamp).

<!-- tabs:end -->

### Récupérer un quota

<!-- tabs:start -->

### **Export (client et serveur)**

```lua
local result --[[ integer ]] = exports["sadoj-quotas"]:GetQuota(key --[[ string ]], subject --[[ string ]])
```

* **Paramètres:**
  * **key:** Clé de l'enregistrement.
  * **subject:** Sujet de l'enregistrement.
* **Retour:**
  * **result:** Valeur du quota.

<!-- tabs:end -->

### Récupérer le timestamp dans x jours

<!-- tabs:start -->

### **Export (client et serveur)**

```lua
local result --[[ integer ]] = exports["sadoj-quotas"]:GetTimestampInDays(days --[[ integer ]])
```

* **Paramètres:**
  * **days:** Nombre de jours.
* **Retour:**
  * **result:** Timestamp dans x jours.
* **Exemple:**
  * `exports["sadoj-quotas"]:GetTimestampInDays(1)` retournera le timestamp de demain à la même heure.

<!-- tabs:end -->
