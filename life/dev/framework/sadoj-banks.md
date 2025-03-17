# sadoj-banks

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-banks`
* Redémarrage possible: `Non`


## Portefeuille


### Ajouter de l'argent
<!-- tabs:start -->
### **Export (client)**
```lua
  local success = exports["sadoj-banks"]:AddWalletMoney(amount --[[ number ]])
```
* **Paramètres:**
  * **amount:** La somme d'argent à ajouter.
* **Retour:**
  * **success:** `true` si l'argent a été ajouté, `false` sinon.
### **Export (serveur)**
```lua
  local success = exports["sadoj-banks"]:AddWalletMoney(playerSrc --[[ number ]], amount --[[ number ]])
```
* **Paramètres:**
  * **playerSrc:** Le joueur.
  * **amount:** La somme d'argent à ajouter.
* **Retour:**
  * **success:** `true` si l'argent a été ajouté, `false` sinon.
<!-- tabs:end -->

### Retirer de l'argent
<!-- tabs:start -->
### **Export (client)**
```lua
  local success = exports["sadoj-banks"]:RemoveWalletMoney(amount --[[ number ]])
```
* **Paramètres:**
  * **amount:** La somme d'argent à retirer.
* **Retour:**
  * **success:** `true` si l'argent a été retiré, `false` sinon.
### **Export (serveur)**
```lua
  local success = exports["sadoj-banks"]:RemoveWalletMoney(playerSrc --[[ number ]], amount --[[ number ]])
```
* **Paramètres:**
  * **playerSrc:** Le joueur.
  * **amount:** La somme d'argent à retirer.
* **Retour:**
  * **success:** `true` si l'argent a été retiré, `false` sinon.
<!-- tabs:end -->

### Obtenir le montant
<!-- tabs:start -->
### **Export (client)**
```lua
  local amount = exports["sadoj-banks"]:GetWalletAmount()
```
* **Retour:**
  * **amount:** Le montant d'argent dans le portefeuille.
### **Export (serveur)**
```lua
  local amount = exports["sadoj-banks"]:GetWalletAmount(playerSrc --[[ number ]])
```
* **Paramètres:**
  * **playerSrc:** Le joueur.
* **Retour:**
  * **amount:** Le montant d'argent dans le portefeuille.
<!-- tabs:end -->

### Événement lors de la modification du montant du portefeuille.

Cet événement est déclenché lorsque le montant du portefeuille est modifié.

<!-- tabs:start -->
### **Event (client)**
```lua
  RegisterNetEvent("sadoj-banks:wallet:refreshed", function(amount --[[ number ]])
    -- Code ICI
  end)
```
### **Event (serveur)**
```lua
  RegisterServerEvent("sadoj-banks:wallet:refreshed", function(playerSrc --[[ number ]], amount --[[ number ]])
    -- Code ICI
  end)
```
<!-- tabs:end -->

## Compte bancaire

### Obtenir les comptes bancaires d'un joueur
<!-- tabs:start -->
### **Export (client)**
```lua
  local accounts = exports["sadoj-banks"]:GetAccounts([bankId --[[ string ]]])
```
* **Retour:**
  * **accounts:** Les comptes bancaires du joueur.
### **Export (serveur)**
```lua
  local accounts = exports["sadoj-banks"]:GetPlayerAccounts(playerSrc --[[ number ]][, bankId --[[ string ]]])
```
* **Paramètres:**
  * **playerSrc:** Le joueur.
* **Retour:**
  * **accounts:** Les comptes bancaires du joueur.
<!-- tabs:end -->

### Obtenir le compte bancaire par défaut d'un joueur
<!-- tabs:start -->
### **Export (client)**
```lua
  local accountNumber = exports["sadoj-banks"]:GetDefaultAccountNumber([bankId --[[ string ]]])
```
* **Retour:**
  * **accountNumber:** Le compte bancaire par défaut du joueur.
### **Export (serveur)**
```lua
  local accountNumber = exports["sadoj-banks"]:GetDefauGetPlayerDefaultAccountNumberltAccount(playerSrc --[[ number ]][, bankId --[[ string ]]])
```
* **Paramètres:**
  * **playerSrc:** Le joueur.
* **Retour:**
  * **accountNumber:** Le compte bancaire par défaut du joueur.
<!-- tabs:end -->

### Obtenir les comptes bancaires d'une entreprise
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local accounts = exports["sadoj-banks"]:GetCompanyAccounts(companyId --[[ string ]][, bankId --[[ string ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
* **Retour:**
  * **accounts:** Les comptes bancaires de l'entreprise.
<!-- tabs:end -->

### Obtenir le compte bancaire par défaut d'une entreprise
<!-- tabs:start -->
### **Export (client & serveur)**
```lua
  local accountNumber = exports["sadoj-banks"]:GetCompanyDefaultAccountNumber(companyId --[[ string ]][, bankId --[[ string ]]])
```
* **Paramètres:**
  * **companyId:** L'identifiant de l'entreprise.
* **Retour:**
  * **accountNumber:** Le compte bancaire par défaut de l'entreprise.
<!-- tabs:end -->


## Transaction

À faire

## Paiement

À faire