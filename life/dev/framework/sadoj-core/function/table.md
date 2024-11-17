# sadoj-core - Fonctions - Tableau

> Auteur de la page: Thomas.

---

#### Tablelength
<!-- tabs:start -->
#### **Export (client & serveur)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:Tablelength(table --[[ table ]])
```

* **Paramètres:**
  * **table:** La table que vous souhaitez compter.
* **Retour:**
  * **result:** Le nombre d'éléments dans la table.
<!-- tabs:end -->

#### TableContainsValue
<!-- tabs:start -->
#### **Export (client & serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-core"]:TableContainsValue(table --[[ table ]], value --[[ any ]])
```

* **Paramètres:**
  * **table:** La table à vérifier.
  * **value:** La valeur à vérifier.
* **Retour:**
  * **result:** `true` si la table contient la valeur, `false` sinon.
<!-- tabs:end -->

#### TableRemoveValue
<!-- tabs:start -->
#### **Export (client & serveur)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:TableRemoveValue(table --[[ table ]], value --[[ any ]])
```

* **Paramètres:**
  * **table:** La table à modifier.
  * **value:** La valeur à supprimer.
* **Retour:**
  * **result:** Le tableau sans la valeur.
<!-- tabs:end -->


#### TableFindIndex
<!-- tabs:start -->
#### **Export (client & serveur)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:TableFindIndex(table --[[ table ]], value --[[ any ]])
```

* **Paramètres:**
  * **table:** La tableau.
  * **value:** La valeur à rechercher.
* **Retour:**
  * **result:** L'index de la valeur dans le tableau, `nil` si la valeur n'est pas trouvée.
<!-- tabs:end -->


#### SplitTableByChunk
<!-- tabs:start -->
#### **Export (client & serveur)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:SplitTableByChunk(table --[[ table ]], chunkSize --[[ number ]])
```

* **Paramètres:**
  * **table:** La table à diviser.
  * **chunkSize:** La taille des morceaux.
* **Retour:**
  * **result:** Un tableau contenant les tableaux divisés.
<!-- tabs:end -->

#### TableSlice
<!-- tabs:start -->
#### **Export (client & serveur)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:TableSlice(table --[[ table ]], start --[[ number ]], finish --[[ number ]])
```

* **Paramètres:**
  * **table:** La table à découper.
  * **start:** L'index de départ.
  * **finish:** L'index de fin.
* **Retour:**
  * **result:** La table découpée.
<!-- tabs:end -->

