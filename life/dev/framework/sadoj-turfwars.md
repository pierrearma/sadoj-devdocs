# sadoj-turfwars

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[DARK]/sadoj-turfwars`

Ce script gère les [Guerres de territoires](life/guides/turfwars.md).

## Utilisation

### Activer/désactiver l'affichage des zones

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-turfwars"]:Toggle()
```

<!-- tabs:end -->

### Ajouter/enlever des points a(ux) organisation(s) d'un joueur

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-turfwars:server:AddPointsFromCoords", coords --[[ vector3 ]], points --[[ integer ]], validity --[[ integer ]])
```

* **Paramètres:**
  * **coords:** Coordonnées des points.
  * **points:** Nombre de points à ajouter (ou enlever si négatif).
  * **validity:** Durée de validité des points (en jours).

<!-- tabs:end -->

### Ajouter/enlever des points à toutes les organisations

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-turfwars:server:AddPointsForAllFromCoords", coords --[[ vector3 ]], points --[[ integer ]], validity --[[ integer ]])
```

* **Paramètres:**
  * **coords:** Coordonnées des points.
  * **points:** Nombre de points à ajouter (ou enlever si négatif).
  * **validity:** Durée de validité des points (en jours).

<!-- tabs:end -->

### Ajouter/enlever des points a(ux) organisation(s) d'un joueur sur un rayon

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-turfwars:server:AddPointsFromCoordsOnRadius", coords --[[ vector3 ]], radius --[[ number ]], points --[[ integer ]], validity --[[ integer ]])
```

* **Paramètres:**
  * **coords:** Coordonnées des points.
  * **radius:** Rayon (cela prendra en compte l'ensemble des zones sur ce rayon).
  * **points:** Nombre de points à ajouter (ou enlever si négatif).
  * **validity:** Durée de validité des points (en jours).

<!-- tabs:end -->

### Ajouter/enlever des points à toutes les organisations sur un rayon

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-turfwars:server:AddPointsForAllFromCoordsOnRadius", coords --[[ vector3 ]], radius --[[ number ]], points --[[ integer ]], validity --[[ integer ]])
```

* **Paramètres:**
  * **coords:** Coordonnées des points.
  * **radius:** Rayon (cela prendra en compte l'ensemble des zones sur ce rayon).
  * **points:** Nombre de points à ajouter (ou enlever si négatif).
  * **validity:** Durée de validité des points (en jours).

<!-- tabs:end -->

{docsify-updated}
