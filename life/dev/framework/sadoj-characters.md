# sadoj-characters

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-characters`

Ce script permet la création d'un nouveau personnage.
Il permet également de récupérer les informations d'identité d'un personnage.

## Utilisation

### Événement lors de l'initialisation d'un personnage

Cet événement est déclenché lorsqu'un joueur valide la création d'un nouveau personnage ou lorsqu'il a terminé de charger son personnage.

```lua
TriggerEvent("sadoj-characters:characterSpawned")
TriggerServerEvent("sadoj-characters:characterSpawned")
```

### Récupérer les informations d'identité d'un personnage

#### Format des informations

```lua
local informations = {
    lastname = "Nom",
    firstname = "Prénom",
    birthdate = "01/10/1990", -- format: jj/mm/aaaa
    sex = "h" -- h pour homme, f pour femme
    height = "180" -- en centimètres
}
```

#### Depuis un identifiant

<!-- tabs:start -->

### **Export (serveur)**

```lua
local informations = exports["sadoj-characters"]:GetPlayerCharacterIdentityFromIdentifier(identifier --[[ string ]])
```

* **Paramètres:**
  * **identifier:** Identifiant du joueur.

* **Résultats:**
  * **informations:** Informations d'identité du joueur. `nil` si non trouvé.

<!-- tabs:end -->

#### Depuis un joueur

<!-- tabs:start -->

### **Export (serveur)**

```lua
local informations = exports["sadoj-characters"]:GetPlayerCharacterIdentity(playerId --[[ number ]])
```

* **Paramètres:**
  * **playerId:** Identifiant serveur du joueur.

* **Résultats:**
  * **informations:** Informations d'identité du joueur. `nil` si non trouvé.

### **Export (client)**

```lua
local informations = exports["sadoj-characters"]:GetPlayerCharacterIdentity(?playerId --[[ number ]])
```

* **Paramètres:**
  * **playerId:** Identifiant local du joueur. Si non renseigné, l'identifiant du joueur local sera utilisé.

* **Résultats:**
  * **informations:** Informations d'identité du joueur. `nil` si non trouvé.

<!-- tabs:end -->

