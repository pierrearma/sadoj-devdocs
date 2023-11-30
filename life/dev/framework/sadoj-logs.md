# sadoj-logs

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[LOG]/sadoj-logs`

Ce script permet d'enregistrer des logs dans des fichiers. Le script crée automatiquement les dossiers et les fichiers si ils n'existent pas. Tout les fichiers sont enregistrés dans le dossier `resources/[LOG]/[NEW]/`.

> [!INFO]
> Si un tableau est passé en paramètre, il sera converti automatiquement en format `json`.

## Utilisation

### Ajouter une ligne de log

<!-- tabs:start -->
### **Event (client)**
```lua
  TriggerServerEvent("sadoj-logs:log", path --[[ string ]], fileName --[[ string ]][, param1 --[[ any ]][, param2 --[[ any ]][, ...]]])
```
* **Paramètres:**
  * **path:** Chemin du fichier.
  * **fileName:** Nom du fichier (avec l'extension).
  * **param:** Paramètres que vous souhaitez ajouter à la ligne.
* **Exemple:**
```lua
  TriggerServerEvent("sadoj-logs:log", "vehicle/exitVehicle", "exit.csv", GetPlayerName(PlayerId()))

  -- Résultat:
  -- Chemin: [LOG]/vehicle/exitVehicle/exit.csv
  -- Ligne: 2021-01-01 00:00:00; _Thomas_;
```

### **Event (server)**
```lua
  TriggerEvent("sadoj-logs:log", path --[[ string ]], fileName --[[ string ]][, param1 --[[ any ]][, param2 --[[ any ]][, ...]]])
```
* **Paramètres:**
  * **path:** Chemin du fichier.
  * **fileName:** Nom du fichier (avec l'extension).
  * **param:** Paramètres que vous souhaitez ajouter à la ligne.
* **Exemple:**
```lua
  TriggeEvent("sadoj-logs:log", "vehicle/exitVehicle", "exit.csv", GetPlayerName(1))

  -- Résultat:
  -- Chemin: [LOG]/vehicle/exitVehicle/exit.csv
  -- Ligne: 2021-01-01 00:00:00; _Thomas_;
```
<!-- tabs:end -->


### Ajouter une ligne de log avec une date

<!-- tabs:start -->
### **Event (client)**
```lua
  TriggerServerEvent("sadoj-logs:log:WithFileNameDate", path --[[ string ]], fileName --[[ string ]][, param1 --[[ any ]][, param2 --[[ any ]][, ...]]])
```
* **Paramètres:**
  * **path:** Chemin du fichier.
  * **fileName:** Nom du fichier (avec l'extension).
  * **param:** Paramètres que vous souhaitez ajouter à la ligne.
* **Exemple:**
```lua
  TriggerServerEvent("sadoj-logs:log:WithFileNameDate", "vehicle/exitVehicle", "exit.csv", GetPlayerName(PlayerId()))

  -- Résultat:
  -- Chemin: [LOG]/vehicle/exitVehicle/exit_23_11.csv
  -- Ligne: 2021-01-01 00:00:00; _Thomas_;
```

### **Event (server)**
```lua
  TriggerEvent("sadoj-logs:log:WithFileNameDate", path --[[ string ]], fileName --[[ string ]][, param1 --[[ any ]][, param2 --[[ any ]][, ...]]])
```
* **Paramètres:**
  * **path:** Chemin du fichier.
  * **fileName:** Nom du fichier (avec l'extension).
  * **param:** Paramètres que vous souhaitez ajouter à la ligne.
* **Exemple:**
```lua
  TriggeEvent("sadoj-logs:log:WithFileNameDate", "vehicle/exitVehicle", "exit.csv", GetPlayerName(1))

  -- Résultat:
  -- Chemin: [LOG]/vehicle/exitVehicle/exit_23_11.csv
  -- Ligne: 2021-01-01 00:00:00; _Thomas_;
```
<!-- tabs:end -->

{docsify-updated}