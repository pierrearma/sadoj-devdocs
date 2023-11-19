# pmms

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas & kibukj
* Emplacement: `[SCRIPT]/[LOISIR]/pmms`



### Options

* **url** : Url de la musique vidéo que vous souhaitez jouer. *(uniquement `HTTPS`)*
* **title** :
* **volume** : Volume de la musique. (type `number`) (**Minimum**: 0, **Maximum**: 100)
* **offset** : Le temps de démarrage du média en secondes. Par défaut : 0. (type `number`)
* **loop** : Si la musique va se jouer en boucle (type `boolean`).
* **filter** : S'il faut appliquer le filtre immersif au lecteur multimédia. (type `boolean`)
* **locked** : Indique s'il faut verrouiller le lecteur multimédia. (type `boolean`)
* **video** : Afficher ou non la vidéo NUI. (type `boolean`)
* **videoSize** : La taille de l'écran vidéo NUI. (type `number`)
* **muted** : Indique si le lecteur multimédia est désactivé par défaut. (type `boolean`)
* **range** : La portée du lecteur multimédia. (type `integer`)
* **diffRoomVolume** : Différence entre le volume de base dans la même pièce et une autre pièce. (type `integer`)
* **ByPassRange** : Indique si le lecteur multimédia peut dépasser la distance maximale autorisée dans le fichier config. (type `boolean`)
* **attenuation** :
  ```lua
  {
    sameRoom = --[[ integer ]]
    diffRoom = --[[ integer ]]
  }
  ```
* **scaleform**:
  ```lua
  {
    name = --[[ string ]]
    position = --[[ vector3 ]]
    rotation = --[[ vector3 ]]
    scale = --[[ vector3 ]]
    standalone = --[[ boolean ]]
    attached = --[[ boolean ]]
  }
  ```





### Démarrer le lecteur multimédia

Commence à lire un lecteur multimédia sur une entité en réseau, en utilisant son ID réseau.
<!-- tabs:start -->
#### **CallBack (client)**
```lua
  local handle = exports["sadoj-callbacks"]:TriggerServerCallback("pmms/server/startByNetworkId", netId --[[ integer ]], options --[[ table ]])
```

* **Paramètres:**
  * **netId:** Le NetId de l'entité sur laquelle vous souhaitez démarrer un lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.

#### **Export (serveur)**
```lua
  local handle = exports['pmms']:startByNetworkId(netId --[[ integer ]], options --[[ table ]])
```

* **Paramètres:**
  * **netId:** Le NetId de l'entité sur laquelle vous souhaitez démarrer un lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.
<!-- tabs:end -->

Commence à lire un lecteur multimédia en utilisant des coordonnées.
<!-- tabs:start -->
#### **CallBack (client)**
```lua
  local handle = exports["sadoj-callbacks"]:TriggerServerCallback("pmms/server/startByCoords", Coords --[[ vector3 ]], options --[[ table ]])
```

* **Paramètres:**
  * **Coords:** Les coordonnées à laquelle vous souhaitez démarrer le lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.

#### **Export (serveur)**
```lua
  local handle = exports['pmms']:startByCoords(x --[[ number ]], y --[[ number ]], z --[[ number ]], options --[[ table ]])
```

* **Paramètres:**
  * **x, y, z:** Les coordonnées à laquelle vous souhaitez démarrer le lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.
<!-- tabs:end -->


Commence à jouer quelque chose sur un écran.
<!-- tabs:start -->
#### **CallBack (client)**
```lua
  local handle = exports["sadoj-callbacks"]:TriggerServerCallback("pmms/server/startScaleform", scaleform --[[ scaleform ]], options --[[ table ]])
```

* **Paramètres:**
  * **scaleform:**
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.

#### **Export (serveur)**
```lua
  local handle = exports['pmms']:startScaleform(scaleform --[[ scaleform ]], options --[[ table ]])
```

* **Paramètres:**
  * **scaleform:**
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.
<!-- tabs:end -->

### Stopper le lecteur multimédia

<!-- tabs:start -->
#### **Event (client)**
```lua
  TriggerServerEvent("pmms/server/stop", handle)
```

* **Paramètres:**
  * **handle:**

#### **Export (serveur)**
```lua
  exports.['pmms']:stop(handle)
```

* **Paramètres:**
  * **handle:**
<!-- tabs:end -->

### Gérer le lecteur multimédia

<!-- tabs:start -->
#### **Event (client)**
```lua
  TriggerServerEvent("pmms/server/pause", handle)
```

* **Paramètres:**
  * **handle:**

#### **Export (serveur)**
```lua
  exports.['pmms']:pause(handle)
```

* **Paramètres:**
  * **handle:**
<!-- tabs:end -->


<!-- tabs:start -->
#### **Event (client)**
```lua
  TriggerServerEvent("pmms/server/mute", handle)
```

* **Paramètres:**
  * **handle:**

#### **Export (serveur)**
```lua
  exports.['pmms']:mute(handle)
```

* **Paramètres:**
  * **handle:**
<!-- tabs:end -->

<!-- tabs:start -->
#### **Event (client)**
```lua
  TriggerServerEvent("pmms/server/unmute", handle)
```

* **Paramètres:**
  * **handle:**

#### **Export (serveur)**
```lua
  exports.['pmms']:unmute(handle)
```

* **Paramètres:**
  * **handle:**
<!-- tabs:end -->

{docsify-updated}