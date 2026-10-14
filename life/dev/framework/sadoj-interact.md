# sadoj-interact

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[MENUS]/sadoj-interact`
* Dépendance: `ox_lib`

Ce script propose un système d'interaction in-world minimaliste et immersif pour FiveM, inspiré de l'interface de **GTA VI**.

Il remplace avantageusement les menus cibles (« target » / « third-eye ») en projetant directement dans l'univers de jeu de discrets indicateurs visuels (ring dots) lorsqu'un élément interactif est à proximité. Lorsque le joueur oriente sa caméra ou son réticule vers l'indicateur et s'en approche, le badge de touche (`[E]` au clavier ou `[R3]` à la manette) ainsi que les options associées s'affichent instantanément dans le monde 3D sans aucune latence NUI.

Le système gère également le maintien de touche (appui long avec barre de progression circulaire), la navigation fluide entre plusieurs options disponibles pour un même point, le filtrage conditionnel dynamique et les interactions par os (bones) avec liste de repli automatique.

> [!WARNING]
> ### ⚠️ Recommandations d'optimisation
>
> Bien que le script gère nativement et de façon optimisée le filtrage par distance des entités et des points éloignés, quelques bonnes pratiques sont essentielles pour garantir des performances optimales :
>
> * **Optimiser les vérifications `canInteract` (ordre d'évaluation) :**
>   La fonction `canInteract` est exécutée fréquemment lorsque le joueur est à proximité d'une interaction. Placez toujours les vérifications les plus légères pour le CPU en premier (variables locales, booléens, données en cache) et les fonctions plus lourdes en dernier (natives GTA, raycasts, requêtes complexes) afin de bénéficier du court-circuitage logique en Lua.
> * **Éviter la super-concentration de points au même endroit :**
>   Évitez d'empiler plusieurs interactions distinctes très proches les unes des autres. Cela complique le ciblage au réticule pour le joueur et multiplie inutilement les calculs de projection écran. Privilégiez plutôt **le regroupement de plusieurs choix dans la liste `options` d'un seul et même point**, que le joueur pourra faire défiler facilement.
> * **Gérer les interactions contextuelles :**
>   N'ajoutez pas d'interactions permanentes si elles ne sont utiles que dans un scénario ou un contexte précis (ex: braquage en cours, étape d'un métier, entité éphémère). Ajoutez l'interaction au début du contexte et supprimez-la immédiatement (`RemoveInteraction` / `RemoveInteractionByEntity`) dès que le scénario prend fin ou que l'entité est détruite.

---

## Fonctionnalités

* **Points indicateurs (Ring dots)** : Affichage d'un anneau blanc discret sur chaque point d'interaction situé à portée du joueur.
* **Ciblage par réticule (Crosshair hover)** : Un point discret au centre de l'écran cible l'interaction la plus proche dans la ligne de mire. L'état du réticule peut être personnalisé par chaque joueur et persisté en KVP client.
* **Rendu in-game natif (Direct HUD)** : Aucun rendu NUI, le texte et les icônes sont dessinés directement dans l'espace 3D du jeu pour une fluidité absolue sans décalage de caméra.
* **Support clavier & manette** : Détection automatique des contrôles avec affichage du bouton correspondant (`[E]` pour le clavier, stick `[R3]` pour la manette).
* **Maintien de touche paramétrable (Hold progress)** : Chaque option peut exiger un appui court ou un maintien prolongé avec jauge circulaire de progression (`holdTime`).
* **Multiples options par point** : Défilement simple avec la molette de la souris, les touches directionnelles haut/bas ou le BMD de la manette.
* **Filtrage conditionnel (`canInteract`)** : Les options ne respectant pas les conditions sont masquées ; si aucune option n'est valide, le point disparaît complètement.
* **Exclusion en véhicule (`disableInVehicle`)** : Masquage optionnel des actions inappropriées lorsqu'un joueur se trouve dans un véhicule.
* **Types d'actions variés** : Déclenchement direct d'une fonction Lua client (`action`), d'un événement client (`event`) ou d'un événement serveur (`serverEvent`).
* **Cibles multiples** :
  * Coordonnées fixes (`vec3`)
  * Entités locales (non synchronisées)
  * Entités réseau (synchronisées via Network ID)
  * Os spécifiques d'entités (bones) avec liste de priorité et repli
  * Modèles d'objets (props)
  * Interactions globales sur tous les peds, véhicules, joueurs, objets ou sur leurs bones
* **Système de verrouillage sécurisé (`Disable` / `Enable`)** : Utilisation de jetons de verrouillage multiples (`lockId`) afin d'éviter tout conflit de déblocage intempestif entre plusieurs ressources.
* **Nettoyage automatique** : Toutes les interactions enregistrées par une ressource sont automatiquement supprimées lors de l'arrêt de celle-ci (`onClientResourceStop`).

---

## Contrôles

| Périphérique | Touche / Action | Rôle |
| :--- | :--- | :--- |
| **Souris / Caméra** | Déplacement de la vue | Oriente le réticule central sur un point d'interaction |
| **Clavier** | `E` | Valider / déclencher l'option sélectionnée (appui court ou maintien) |
| **Manette** | `R3` (Joystick droit) | Valider / déclencher l'option sélectionnée (appui court ou maintien) |
| **Clavier** | `Flèche Haut` / `Flèche Bas` ou `Molette souris` | Faire défiler les options d'un point |
| **Manette** | `BMD Haut` / `BMD Bas` | Faire défiler les options d'un point |

---

## Distances et décalages

| Paramètre | Description | Valeur par défaut |
| :--- | :--- | :--- |
| `distance` | Distance maximale à laquelle le **point blanc (ring dot)** apparaît à l'écran. | `8.0` (`10.0` pour les entités et bones) |
| `interactDst` | Distance maximale à laquelle le joueur doit être pour que le **prompt d'interaction** apparaisse et que la touche d'action soit active. | `1.0` (`1.5` pour les interactions globales) |
| `offset` | Décalage `vec3` appliqué aux coordonnées du point par rapport à l'entité ou au bone. | `vec3(0.0, 0.0, 0.0)` |
| `entityOffset` | *(Sur les bones uniquement)* Si défini sur `true`, l'orientation de `offset` est calculée par rapport à la rotation de l'entité complète et non selon la rotation locale de l'os. | `false` |
| `directionalOffset` | *(Sur les bones uniquement)* Si défini sur `true`, oriente automatiquement l'offset vers l'extérieur de l'entité selon sa position (inverse l'axe Y selon que le bone est situé à l'avant ou à l'arrière, et l'axe X selon la droite ou la gauche). Idéal pour les capots et coffres (moteur arrière / frunk). Active également l'orientation de l'entité. | `false` |

---

## Structure des options

Chaque interaction prend en paramètre un tableau `options` contenant une ou plusieurs tables d'options.

```lua
{
    name = 'mon_script:action_unique', -- (Facultatif) Identifiant unique de l'option (utilisé pour RemoveInteractionOption et le remplacement)
    label = 'Fouiller le véhicule',     -- (Requis) Libellé textuel affiché à l'écran
    holdTime = 500,                    -- (Facultatif) Durée de maintien en ms (0 ou false pour un appui instantané, nil pour la valeur globale de configuration)
    disableInVehicle = false,          -- (Facultatif) Masquer l'option lorsque le joueur se trouve à bord d'un véhicule

    --- Condition d'affichage de l'option (appelée régulièrement si le joueur est proche)
    --- Astuce perf : placez les vérifications légères (variables/booléens) en premier, les natives en dernier
    ---@param entity number|nil Handle de l'entité ciblée (nil si interaction sur coordonnées)
    ---@param coords vector3 Coordonnées mondiales de l'interaction
    ---@param args any Arguments passés dans le champ args
    ---@return boolean true pour afficher l'option, false pour la masquer
    canInteract = function(entity, coords, args)
        if not isContextActive then return false end -- Vérification rapide en premier (court-circuitage)
        return not IsPedDeadOrDying(entity, true)    -- Native plus lourde en dernier
    end,

    -- Déclencheur : spécifier UN SEUL des 3 éléments suivants (évalués dans cet ordre de priorité) :
    action = function(entity, coords, args)
        -- Fonction Lua exécutée dans un nouveau thread client
    end,

    serverEvent = 'mon_script:server:monEvent', -- Déclenché via TriggerServerEvent(serverEvent, args)
    event = 'mon_script:client:monEvent',       -- Déclenché via TriggerEvent(event, option)

    args = { custom = 'donnée' },               -- (Facultatif) Données transmises à l'action ou à l'événement
}
```

---

## Gestion des bones et listes de priorité

Lors de l'utilisation de `AddEntityBoneInteraction` ou de `AddGlobal*BoneInteraction`, le paramètre `bone` (ou `bones`) peut être soit un nom d'os unique (`string`), soit une **liste ordonnée de priorité**.

Le script vérifie automatiquement la présence de chaque os sur le modèle de l'entité et sélectionne **le premier os existant**.

Chaque élément de la liste peut être :
* Une simple chaîne de caractères (`string`).
* Une table contenant le nom de l'os ainsi que des surcharges optionnelles (`offset`, `entityOffset`, `directionalOffset`, `distance`, `interactDst`). Tous les champs non spécifiés héritent des valeurs globales définies à la racine de l'interaction.

```lua
-- Exemple avec liste de repli et surcharges individuelles
exports['sadoj-interact']:AddGlobalVehicleBoneInteraction({
    bone = {
        'handle_dside_f',                                           -- Utilise les distances et l'offset par défaut
        { bone = 'door_dside_f', offset = vec3(0.0, -0.2, 0.0) },   -- Surcharge spécifique de l'offset si seul door_dside_f existe
    },
    distance = 2.0,
    interactDst = 1.5,
    options = {
        {
            label = 'Ouvrir la portière',
            action = function(entity)
                -- ...
            end,
        },
    },
})
```

---

## Utilisation

### AddInteraction

Ajoute une interaction positionnée sur des coordonnées 3D fixes dans le monde.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddInteraction({
    name = 'point_recolte', --[[ string (facultatif) ]]
    coords = vec3(55.869, -1545.935, 29.850), --[[ vector3 ]]
    distance = 4.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.2, --[[ number (facultatif, défaut: 1.0) ]]
    options = { --[[ table ]]
        {
            label = 'Récolter des oranges',
            holdTime = 1000,
            action = function(entity, coords, args)
                print('Récolte en cours à la position', coords)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table de configuration contenant `coords`, `options`, et optionnellement `distance`, `interactDst`, `name`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction enregistrée.

<!-- tabs:end -->

---

### AddLocalEntityInteraction

Ajoute une interaction sur une entité locale côté client (non synchronisée sur le réseau).

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddLocalEntityInteraction({
    entity = pedHandle, --[[ number (handle d'entité) ]]
    offset = vec3(0.0, 0.0, 0.2), --[[ vector3 (facultatif) ]]
    distance = 4.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.0) ]]
    options = { --[[ table ]]
        {
            label = 'Parler au PNJ',
            action = function(entity)
                print('Discussion avec le PNJ:', entity)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `entity` (handle de l'entité locale), `options`, `offset`, `distance`, `interactDst`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddEntityInteraction

Ajoute une interaction sur une entité réseau (synchronisée). Si l'entité spécifiée n'est pas synchronisée sur le réseau, le système bascule automatiquement sur `AddLocalEntityInteraction`.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddEntityInteraction({
    netId = NetworkGetNetworkIdFromEntity(vehicle), --[[ number (NetID ou handle) ]]
    distance = 5.0, --[[ number (facultatif, défaut: 10.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.0) ]]
    offset = vec3(0.0, 0.0, 0.0), --[[ vector3 (facultatif) ]]
    options = { --[[ table ]]
        {
            name = 'veh:search',
            label = 'Fouiller le véhicule',
            holdTime = 800,
            serverEvent = 'mon_script:server:searchVehicle',
            args = { netId = NetworkGetNetworkIdFromEntity(vehicle) },
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `netId` (ID réseau ou handle d'entité), `options`, `distance`, `interactDst`, `offset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddEntityBoneInteraction

Ajoute une interaction rattachée à un os (bone) précis d'une entité spécifique.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddEntityBoneInteraction({
    entity = vehicle, --[[ number (handle de l'entité) ]]
    bone = 'boot', --[[ string|table (nom ou liste prioritaire de bones) ]]
    distance = 3.0, --[[ number (facultatif, défaut: 10.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.0) ]]
    offset = vec3(0.0, -0.2, 0.0), --[[ vector3 (facultatif) ]]
    entityOffset = true, --[[ boolean (facultatif, défaut: false) ]]
    directionalOffset = true, --[[ boolean (facultatif, défaut: false) ]]
    options = { --[[ table ]]
        {
            label = 'Ouvrir le coffre',
            action = function(entity)
                SetVehicleDoorOpen(entity, 5, false, false)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `entity`, `bone` (ou table de bones ordonnée), `options`, `distance`, `interactDst`, `offset`, `entityOffset`, `directionalOffset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddModelInteraction

Ajoute un point d'interaction sur **toutes les entités créées dans le monde** correspondant à une liste de modèles de props/objets. Les distances de détection et d'interaction sont ajustées automatiquement selon les dimensions des modèles fournis.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddModelInteraction({
    modelData = { --[[ table<table<{model: string|number, offset?: vector3}>> ]]
        { model = 'p_dumpster_t', offset = vec3(0.0, 0.0, 0.8) },
        { model = 'prop_dumpster_02a', offset = vec3(0.0, 0.0, 0.8) },
        { model = `prop_dumpster_01a`, offset = vec3(0.0, 0.0, 0.8) },
    },
    distance = 6.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.2, --[[ number (facultatif, défaut: 1.0) ]]
    options = { --[[ table ]]
        {
            label = 'Fouiller la benne',
            holdTime = 1200,
            action = function(entity, coords, args)
                print('Fouille de la benne à ordures:', entity)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant la liste `modelData` (modèles et offsets optionnels), `options`, `distance`, `interactDst`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

## Interactions globales

Ces exports permettent d'ajouter des options d'interaction globales appliquées automatiquement à toutes les entités d'une même catégorie présentes aux alentours du joueur.

### AddGlobalObjectInteraction

Ajoute des options globales à tous les objets (props) du monde.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddGlobalObjectInteraction({
    distance = 6.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.5) ]]
    options = { --[[ table ]]
        {
            name = 'global:inspectObject',
            label = 'Examiner',
            canInteract = function(entity)
                return DoesEntityExist(entity)
            end,
            action = function(entity, coords)
                print('Objet examiné:', entity)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `options`, `distance`, `interactDst`, `offset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddGlobalPedInteraction

Ajoute des options globales à tous les peds non-joueurs (PNJ).

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddGlobalPedInteraction({
    distance = 6.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.5) ]]
    options = { --[[ table ]]
        {
            name = 'global:pedRob',
            label = 'Braquer',
            canInteract = function(entity)
                return not IsPedDeadOrDying(entity, true) and not IsPedAPlayer(entity)
            end,
            action = function(entity)
                print('Braquage du ped:', entity)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `options`, `distance`, `interactDst`, `offset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddGlobalPedBoneInteraction

Ajoute une option globale sur un os spécifique de tous les peds non-joueurs.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddGlobalPedBoneInteraction({
    bone = 'IK_Head', --[[ string|table ]]
    distance = 4.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.5) ]]
    options = { --[[ table ]]
        {
            name = 'ped:checkPulse',
            label = 'Prendre le pouls',
            holdTime = 600,
            action = function(entity)
                print('Pouls vérifié sur le ped:', entity)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `bone` (ou liste de bones prioritaires), `options`, `distance`, `interactDst`, `offset`, `entityOffset`, `directionalOffset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddGlobalPlayerInteraction

Ajoute des options globales à tous les autres joueurs à proximité.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddGlobalPlayerInteraction({
    distance = 4.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.5) ]]
    options = { --[[ table ]]
        {
            name = 'player:giveCash',
            label = 'Donner de l\'argent',
            action = function(entity)
                local targetPlayer = NetworkGetPlayerIndexFromPed(entity)
                local serverId = GetPlayerServerId(targetPlayer)
                print('Donner de l\'argent au joueur:', serverId)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `options`, `distance`, `interactDst`, `offset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddGlobalPlayerBoneInteraction

Ajoute une option globale sur un os spécifique de tous les autres joueurs.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddGlobalPlayerBoneInteraction({
    bone = 'SKEL_Spine_Root', --[[ string|table ]]
    distance = 3.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.5, --[[ number (facultatif, défaut: 1.5) ]]
    options = { --[[ table ]]
        {
            name = 'player:search',
            label = 'Fouiller la personne',
            holdTime = 1000,
            action = function(entity)
                local targetPlayer = NetworkGetPlayerIndexFromPed(entity)
                local serverId = GetPlayerServerId(targetPlayer)
                print('Fouille du joueur serveur ID:', serverId)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `bone` (ou liste de bones prioritaires), `options`, `distance`, `interactDst`, `offset`, `entityOffset`, `directionalOffset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddGlobalVehicleInteraction

Ajoute des options globales à tous les véhicules.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddGlobalVehicleInteraction({
    distance = 6.0, --[[ number (facultatif, défaut: 8.0) ]]
    interactDst = 1.8, --[[ number (facultatif, défaut: 1.5) ]]
    options = { --[[ table ]]
        {
            name = 'veh:checkPlate',
            label = 'Relever la plaque',
            action = function(entity)
                local plate = GetVehicleNumberPlateText(entity)
                print('Plaque relevée:', plate)
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `options`, `distance`, `interactDst`, `offset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

### AddGlobalVehicleBoneInteraction

Ajoute une interaction globale sur un ou plusieurs bones spécifiques de tous les véhicules. Idéal pour manipuler les portières, le coffre, le capot ou les sièges.

<!-- tabs:start -->

#### **Export (client)**

```lua
local id --[[ number ]] = exports['sadoj-interact']:AddGlobalVehicleBoneInteraction({
    bone = 'boot', --[[ string|table (nom d'os ou liste de fallback) ]]
    distance = 2.5, --[[ number (facultatif, défaut: 10.0) ]]
    interactDst = 2.0, --[[ number (facultatif, défaut: 1.0) ]]
    offset = vec3(0.0, 0.5, 0.0), --[[ vector3 (facultatif, magnitude vers l'extérieur si directionalOffset) ]]
    entityOffset = true, --[[ boolean (facultatif, défaut: false) ]]
    directionalOffset = true, --[[ boolean (facultatif, défaut: false - adapte automatiquement avant/arrière) ]]
    options = { --[[ table ]]
        {
            name = 'veh:trunk_toggle',
            label = 'Ouvrir / Fermer le coffre',
            disableInVehicle = true,
            action = function(entity)
                local isOpen = GetVehicleDoorAngleRatio(entity, 5) > 0.0
                if isOpen then
                    SetVehicleDoorShut(entity, 5, false)
                else
                    SetVehicleDoorOpen(entity, 5, false, false)
                end
            end,
        },
    },
})
```

* **Paramètres:**
  * **data:** Table contenant `bone` (ou tableau de bones), `options`, `distance`, `interactDst`, `offset`, `entityOffset`, `directionalOffset`.
* **Retourne:**
  * **id:** Identifiant numérique unique de l'interaction.

<!-- tabs:end -->

---

## Modification et suppression

> [!TIP]
> Nettoyez systématiquement vos interactions contextuelles ou temporaires dès que le scénario prend fin ou que l'entité ciblée est supprimée.

### RemoveInteraction

Supprime complètement une interaction enregistrée à partir de son identifiant unique.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports['sadoj-interact']:RemoveInteraction(id --[[ number ]])
```

* **Paramètres:**
  * **id:** Identifiant unique retourné lors de la création (`Add*`).

<!-- tabs:end -->

---

### RemoveInteractionByEntity

Supprime toutes les interactions enregistrées sur une entité spécifique (y compris les interactions rattachées à ses bones).

<!-- tabs:start -->

#### **Export (client)**

```lua
exports['sadoj-interact']:RemoveInteractionByEntity(entity --[[ number ]])
```

* **Paramètres:**
  * **entity:** Handle de l'entité.

<!-- tabs:end -->

---

### RemoveInteractionOption

Supprime une option spécifique d'une interaction identifiée par son ID et le nom unique de l'option (`name`). Si l'option était la dernière valide pour cette interaction, l'interaction est automatiquement retirée.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports['sadoj-interact']:RemoveInteractionOption(id --[[ number ]], optionName --[[ string ]])
```

* **Paramètres:**
  * **id:** Identifiant de l'interaction.
  * **optionName:** Champ `name` de l'option à retirer. Si omis, supprime l'interaction entière.

<!-- tabs:end -->

---

### UpdateInteraction

Remplace l'intégralité de la liste des options d'une interaction existante sans modifier ses coordonnées ou son ancrage.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports['sadoj-interact']:UpdateInteraction(id --[[ number ]], newOptions --[[ table ]])
```

* **Paramètres:**
  * **id:** Identifiant de l'interaction.
  * **newOptions:** Nouveau tableau d'options (ou une seule table d'option).

<!-- tabs:end -->

---

## Verrouillage et désactivation

Le script intègre un gestionnaire de verrous permettant à plusieurs ressources tierces de désactiver temporairement les interactions (par exemple lors d'un inventaire ouvert, d'un mini-jeu ou d'une cinématique) sans risquer qu'un script ne réactive prématurément le système alors qu'un autre le bloque toujours.

### Disable

Désactive les interactions et génère un jeton de verrouillage unique (`lockId`).

<!-- tabs:start -->

#### **Export (client)**

```lua
local lockId --[[ number ]] = exports['sadoj-interact']:Disable()
```

* **Retourne:**
  * **lockId:** Numéro du verrou à conserver pour la réactivation.

<!-- tabs:end -->

---

### Enable

Lève un verrou spécifique ou débloque tous les verrous posés par la ressource courante. Les interactions redeviennent actives dès qu'il ne subsiste plus aucun verrou.

<!-- tabs:start -->

#### **Export (client)**

```lua
-- Libère un verrou précis :
exports['sadoj-interact']:Enable(lockId --[[ number (facultatif) ]])
```

* **Paramètres:**
  * **lockId:** Identifiant du verrou obtenu via `Disable()`.

<!-- tabs:end -->

---

### IsDisabled

Indique si le système d'interaction est actuellement désactivé (par au moins un verrou ou par l'état `interactionsDisabled`).

<!-- tabs:start -->

#### **Export (client)**

```lua
local disabled --[[ boolean ]] = exports['sadoj-interact']:IsDisabled()
```

* **Retourne:**
  * **disabled:** `true` si les interactions sont bloquées, `false` si elles sont actives.

<!-- tabs:end -->

---

## Gestion du réticule (Crosshair)

Un point central peut être affiché à l'écran lorsque des points d'interaction sont à portée afin de faciliter la visée. La préférence du joueur est sauvegardée dans son KVP client FiveM et restaurée à chaque connexion.

### SetCrosshair

Active ou désactive l'affichage du réticule de visée.

<!-- tabs:start -->

#### **Export (client)**

```lua
-- Désactiver le réticule
exports['sadoj-interact']:SetCrosshair(false)

-- Réactiver le réticule
exports['sadoj-interact']:SetCrosshair(true)
```

* **Paramètres:**
  * **state:** Booléen `true` pour afficher le réticule, `false` pour le masquer.

<!-- tabs:end -->

---

### IsCrosshairEnabled

Indique si le réticule est actuellement configuré comme activé pour le joueur.

<!-- tabs:start -->

#### **Export (client)**

```lua
local enabled --[[ boolean ]] = exports['sadoj-interact']:IsCrosshairEnabled()
```

* **Retourne:**
  * **enabled:** `true` si le réticule est activé, `false` sinon.

<!-- tabs:end -->


