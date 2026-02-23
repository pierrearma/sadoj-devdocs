# sadoj-permsmenu

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[MENUS]/sadoj-permsmenu`

## Utilisation

### Ouverture du menu

<!-- tabs:start -->

### **Export (client)**

```lua
local callbackFunction = function(selectedPermissions)
    -- Lorsque le menu est fermé, cette fonction est appelée. `selectedPermissions` est un tableau contenant les permissions sélectionnées.

end

exports["sadoj-permsmenu"]:StartPermissionMenu(currentPermissions --[[table]], callbackFunction --[[function]] [, activeIdentifiers --[[boolean]], activeCompanies --[[boolean]], activeCompaniesWithGrades, activeCentrals --[[boolean]], activeLicenses --[[boolean]], activeEveryoneButton --[[boolean]], passwordIsActive --[[boolean]]])
```

* **Paramètres:**
  * **currentPermissions:** Tableau des permissions actuelles (facultatif). `nil` par défaut.
  * **callbackFunction:** Fonction de callback. `nil` par défaut.
  * **activeIdentifiers:** Active le menu permettant de sélectionner le nom des joueurs (facultatif). `true` par défaut.
  * **activeCompanies:** Active le menu permettant de sélectionner les entreprises (facultatif). `true` par défaut.
  * **activeCompaniesWithGrades:** Active le menu permettant de sélectionner les entreprises avec les grades (facultatif). `true` par défaut.
  * **activeCentrals:** Active le menu permettant de sélectionner les centrales (facultatif). `true` par défaut.
  * **activeLicenses:** Active le menu permettant de sélectionner les licences (facultatif). `true` par défaut.
  * **activeEveryoneButton:** Active le bouton "Tout le monde" (facultatif). `true` par défaut.
  * **passwordIsActive:** Active le champ de mot de passe (facultatif). `false` par défaut.

<!-- tabs:end -->


### Vérification des permissions

<!-- tabs:start -->

### **Export (client)**

```lua
local hasPerm --[[ boolean ]], accreditation --[[ nil|string ]], identity --[[ nil|string ]] = exports["sadoj-permsmenu"]:PlayerHasPerm(player --[[ Player ]], permissions --[[ nil|table ]] [, sendsWhy --[[ boolean ]]])
```

* **Paramètres:**
  * **player:** Joueur à vérifier.
  * **permissions:** Tableau contenant les permissions à vérifier.
  * **sendsWhy:** Si `true`, la fonction retournera également l'accréditation et l'identité qui ont permis d'obtenir l'accès. `false` par défaut.
* **Retourne:**
  * **hasPerm:** `true` si le joueur a une des permissions, `false` sinon.
  * **accreditation:** Permission qui a permis d'obtenir l'accès, ou `nil` si aucune permission n'a permis d'obtenir l'accès ou que sendsWhy est à `false`.
  * **identity:** Identité en fonction de la permission qui a permis d'obtenir l'accès, ou `nil` si aucune permission n'a permis d'obtenir l'accès ou que sendsWhy est à `false`.

### **Export (serveur)**

```lua
local hasPerm --[[ boolean ]], accreditation --[[ nil|string ]], identity --[[ nil|string ]] = exports["sadoj-permsmenu"]:PlayerHasPerm(player --[[ Player ]], permissions --[[ nil|table ]] [, password --[[ nil|string ]], sendsWhy --[[ boolean ]]])
```

* **Paramètres:**
  * **player:** Joueur à vérifier.
  * **permissions:** Tableau contenant les permissions à vérifier.
  * **password:** Mot de passe à utiliser pour vérifier les permissions. `nil` par défaut.
  * **sendsWhy:** Si `true`, la fonction retournera également l'accréditation et l'identité qui ont permis d'obtenir l'accès. `false` par défaut.
* **Retourne:**
  * **hasPerm:** `true` si le joueur a une des permissions, `false` sinon.
  * **accreditation:** Permission qui a permis d'obtenir l'accès, ou `nil` si aucune permission n'a permis d'obtenir l'accès ou que sendsWhy est à `false`.
  * **identity:** Identité en fonction de la permission qui a permis d'obtenir l'accès, ou `nil` si aucune permission n'a permis d'obtenir l'accès ou que sendsWhy est à `false`.

<!-- tabs:end -->
