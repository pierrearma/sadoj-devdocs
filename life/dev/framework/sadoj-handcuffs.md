# sadoj-handcuffs

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-handcuffs`


## Utilisation



### Savoir si le joueur est menotté

<!-- tabs:start -->
### **Export (client)**
```lua
  local isCuffed --[[ boolean ]], type --[[ string ]] = exports["sadoj-handcuffs"]:PedIsHandcuffs(ped --[[ ped ]])
```
* **Paramètres:**
  * **ped:** Le ped à vérifier.
* **Résultats:**
  * **isCuffed:** Si le joueur est menotté.
  * **type:** Le type de menottes. (handcuffs, zip_tie)
<!-- tabs:end -->


