# sadoj-radio

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-radio`
* Redémarrage possible: `Oui`

## Description

Script radio multi-canal pour FiveM basé sur Mumble. Permet aux joueurs de communiquer sur plusieurs fréquences simultanément via un système Push-To-Talk (PTT). Supporte les radios professionnelles par service, un scanner RF (écoute seule), les brouilleurs radio, les raccourcis clavier PTT par fréquence, et la synchronisation des noms avec le dispatch.

## Utilisation

### Gestion des canaux

#### Rejoindre un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  exports["sadoj-radio"]:joinChannel(frequency --[[ string ]][, callsign --[[ string ]]])
```
* **Paramètres:**
  * **frequency:** La fréquence à rejoindre.
  * **callsign:** L'indicatif du joueur sur ce canal. Facultatif.
<!-- tabs:end -->

#### Quitter un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  exports["sadoj-radio"]:leaveChannel(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence à quitter.
<!-- tabs:end -->

#### Quitter tous les canaux

<!-- tabs:start -->
#### **Export (client)**
```lua
  exports["sadoj-radio"]:leaveAllChannels()
```
<!-- tabs:end -->

### Vérification

#### Récupérer les canaux connectés

<!-- tabs:start -->
#### **Export (client)**
```lua
  local channels --[[ table ]] = exports["sadoj-radio"]:getConnectedChannels()
```
* **Retour:**
  * **channels:** Liste des fréquences auxquelles le joueur est connecté.
<!-- tabs:end -->

#### Vérifier si le joueur est dans un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  local isConnected --[[ boolean ]] = exports["sadoj-radio"]:isConnectedToChannel(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence à vérifier.
* **Retour:**
  * **isConnected:** `true` si le joueur est connecté au canal, `false` sinon.
#### **Export (serveur)**
```lua
  local isConnected --[[ boolean ]] = exports["sadoj-radio"]:isPlayerInChannel(source --[[ integer ]], frequency --[[ string ]])
```
* **Paramètres:**
  * **source:** Le serveur ID du joueur.
  * **frequency:** La fréquence à vérifier.
* **Retour:**
  * **isConnected:** `true` si le joueur est dans le canal, `false` sinon.
<!-- tabs:end -->

### Volume et mute

#### Récupérer le volume d'un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  local volume --[[ number|nil ]] = exports["sadoj-radio"]:getChannelVolume(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence du canal.
* **Retour:**
  * **volume:** Le volume du canal (0-100), ou `nil` si non connecté.
<!-- tabs:end -->

#### Modifier le volume d'un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  local success --[[ boolean ]] = exports["sadoj-radio"]:setChannelVolume(frequency --[[ string ]], volume --[[ number ]])
```
* **Paramètres:**
  * **frequency:** La fréquence du canal.
  * **volume:** Le volume à appliquer (0-100).
* **Retour:**
  * **success:** `true` si le volume a été modifié, `false` sinon.
<!-- tabs:end -->

#### Vérifier si un canal est muté

<!-- tabs:start -->
#### **Export (client)**
```lua
  local isMuted --[[ boolean|nil ]] = exports["sadoj-radio"]:isChannelMuted(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence du canal.
* **Retour:**
  * **isMuted:** `true` si le canal est muté, `false` sinon, ou `nil` si non connecté.
<!-- tabs:end -->

#### Activer/Désactiver le mute d'un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  local muted --[[ boolean ]] = exports["sadoj-radio"]:toggleChannelMute(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence du canal.
* **Retour:**
  * **muted:** Le nouvel état muté du canal.
<!-- tabs:end -->

#### Définir l'état muté d'un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  local success --[[ boolean ]] = exports["sadoj-radio"]:setChannelMuted(frequency --[[ string ]], muted --[[ boolean ]])
```
* **Paramètres:**
  * **frequency:** La fréquence du canal.
  * **muted:** `true` pour muter, `false` pour démuter.
* **Retour:**
  * **success:** `true` si l'état a été modifié, `false` sinon.
<!-- tabs:end -->

#### Activer/Désactiver le mute de tous les canaux

<!-- tabs:start -->
#### **Export (client)**
```lua
  local muted --[[ boolean ]] = exports["sadoj-radio"]:toggleAllChannelsMute()
```
* **Retour:**
  * **muted:** Le nouvel état muté de tous les canaux (`true` = tous mutés).
<!-- tabs:end -->

#### Activer/Désactiver le mute de la transmission (TX) d'un canal

<!-- tabs:start -->
#### **Export (client)**
```lua
  local txMuted --[[ boolean ]] = exports["sadoj-radio"]:toggleChannelTxMute(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence du canal.
* **Retour:**
  * **txMuted:** Le nouvel état de mute de transmission du canal.

> [!NOTE]
> Le mute TX empêche le joueur de transmettre sur ce canal, mais il continue à recevoir. Si le micro est géré par un raccourci (`micManaged`), cette fonction ne fera rien.
<!-- tabs:end -->

### Récupération des données

#### Récupérer les joueurs d'un canal

<!-- tabs:start -->
#### **Export (serveur)**
```lua
  local players --[[ table ]] = exports["sadoj-radio"]:getPlayersInChannel(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence du canal.
* **Retour:**
  * **players:** Liste de tables `{ source = integer, name = string }` pour chaque joueur connecté au canal.
<!-- tabs:end -->

### Brouillage radio (Jammer)

Le système de brouillage permet de bloquer les fréquences radio dans une zone géographique, tout en autorisant certaines fréquences spécifiques.

#### Vérifier si une fréquence est brouillée

<!-- tabs:start -->
#### **Export (client)**
```lua
  local isJammed --[[ boolean ]] = exports["sadoj-radio"]:isFrequencyJammed(frequency --[[ string ]])
```
* **Paramètres:**
  * **frequency:** La fréquence à vérifier.
* **Retour:**
  * **isJammed:** `true` si la fréquence est brouillée pour le joueur local, `false` sinon.
<!-- tabs:end -->

#### Ajouter un brouilleur

<!-- tabs:start -->
#### **Export (serveur)**
```lua
  exports["sadoj-radio"]:AddJammer(id --[[ string ]], coords --[[ vector3 ]], radius --[[ number ]], allowedFrequencies --[[ table ]])
```
* **Paramètres:**
  * **id:** Identifiant unique du brouilleur.
  * **coords:** Position du brouilleur (`vector3`).
  * **radius:** Rayon d'action en mètres.
  * **allowedFrequencies:** Liste des fréquences autorisées dans la zone (les autres sont brouillées). Facultatif (par défaut: `{}`).
<!-- tabs:end -->

#### Supprimer un brouilleur

<!-- tabs:start -->
#### **Export (serveur)**
```lua
  exports["sadoj-radio"]:RemoveJammer(id --[[ string ]])
```
* **Paramètres:**
  * **id:** Identifiant du brouilleur à supprimer.
<!-- tabs:end -->

#### Activer/Désactiver un brouilleur

<!-- tabs:start -->
#### **Export (serveur)**
```lua
  exports["sadoj-radio"]:SetJammerActive(id --[[ string ]], active --[[ boolean ]])
```
* **Paramètres:**
  * **id:** Identifiant du brouilleur.
  * **active:** `true` pour activer, `false` pour désactiver.
<!-- tabs:end -->

#### Mettre à jour un brouilleur

<!-- tabs:start -->
#### **Export (serveur)**
```lua
  exports["sadoj-radio"]:UpdateJammer(id --[[ string ]], data --[[ table ]])
```
* **Paramètres:**
  * **id:** Identifiant du brouilleur.
  * **data:** Table contenant les champs à mettre à jour:
    * **coords:** Nouvelle position (`vector3`). Facultatif.
    * **radius:** Nouveau rayon d'action. Facultatif.
    * **allowedFrequencies:** Nouvelle liste de fréquences autorisées. Facultatif.
<!-- tabs:end -->

#### Récupérer tous les brouilleurs

<!-- tabs:start -->
#### **Export (serveur)**
```lua
  local jammers --[[ table ]] = exports["sadoj-radio"]:GetJammers()
```
* **Retour:**
  * **jammers:** Table indexée par ID de brouilleur, chaque entrée contenant `{ coords = vector3, radius = number, allowedFrequencies = table, active = boolean }`.
<!-- tabs:end -->

#### Vérifier si un brouilleur existe

<!-- tabs:start -->
#### **Export (serveur)**
```lua
  local exists --[[ boolean ]] = exports["sadoj-radio"]:DoesJammerExist(id --[[ string ]])
```
* **Paramètres:**
  * **id:** Identifiant du brouilleur.
* **Retour:**
  * **exists:** `true` si le brouilleur existe, `false` sinon.
<!-- tabs:end -->

## Configuration

La configuration se fait dans le fichier `config.lua`.

| Paramètre | Type | Défaut | Description |
|---|---|---|---|
| `maxChannels` | `number` | `10` | Nombre maximum de canaux simultanés par joueur |
| `defaultVolume` | `number` | `100` | Volume par défaut (0-100) |
| `singleSpeaker` | `boolean` | `false` | Une seule personne peut parler à la fois par fréquence |
| `maxFrequency` | `number` | `2000` | Fréquence maximale autorisée |
| `pttKey` | `string` | `LMENU` | Touche PTT par défaut |
| `micClickSound` | `boolean` | `true` | Activer les sons de clic micro |
| `showPlayers` | `boolean` | `false` | Afficher les joueurs connectés sur un canal par défaut |
| `maxShortcuts` | `number` | `10` | Nombre de raccourcis PTT disponibles |
| `permissionCheckInterval` | `number` | `60` | Intervalle de re-vérification des permissions (secondes) |

### Types de radio

Chaque type de radio peut avoir des favoris pré-enregistrés (non supprimables par le joueur) et des fréquences épinglées (affichées sur la page principale).

```lua
Config.radioTypes = {
    ['radio'] = {
        name = 'Radio',
        favorites = {},        -- Fréquences favorites verrouillées
        pinned = {}            -- Fréquences épinglées sur la page principale
    },
}
```

Les types disponibles sont déterminés par l'item utilisé et ses métadonnées:
- `radio` → Item `radio`
- `radio_police` → Item `professional_radio` avec métadonnée `Type = "Police"`
- `radio_med` → Item `professional_radio` avec métadonnée `Type = "Medic"`
- `radio_pom` → Item `professional_radio` avec métadonnée `Type = "Pompiers"`
- `radio_santrans` → Item `professional_radio` avec métadonnée `Type = "Santrans"`

### Canaux pré-configurés

Les canaux pré-configurés dans `Config.channels` peuvent avoir les options suivantes:

```lua
Config.channels = {
    ['nom_du_canal'] = {
        permission = function(source) --[[ ... ]] end,  -- Fonction de vérification des permissions (serveur)
        syncCentralPlayerName = { "central1", "central2" },  -- IDs des centrales dispatch pour synchroniser le nom
        showPlayers = true  -- Afficher la liste des joueurs connectés (override le paramètre global)
    },
}
```

### Scanner RF

Le scanner RF permet d'écouter des fréquences sans être visible des autres joueurs (écoute seule).

```lua
Config.scanner = {
    itemName = 'rf_scanner',       -- Nom de l'item dans l'inventaire
    frequencies = { 'police', 'ems', ... }  -- Fréquences écoutables
}
```
