# Mini-jeux

> Auteur de la page: Pierre.

---

## Bruteforce

### Informations

* Auteurs du script: SuperDaniel (non SADoJ) & Pierre
* Emplacement: `[SCRIPT]/[DARK]/[MINIGAMES]/minigame_bruteforce`

Démo:

![Bruteforce](../../../_media/framework/minigames/minigame_bruteforce.webm ':include :type=video style=max-height:500px;max-width:100%; controls')

Ce mini-jeux ne fait aucune animation, uniquement l'affichage. A vous d'ajouter des animations.

### Utilisation

<!-- tabs:start -->

#### **Event**

```lua
TriggerEvent("minigame_bruteforce:start", pass --[[ string ]], nblives --[[ number ]], loading --[[ number ]], maxspeed --[[ boolean ]], cb --[[ function ]])

function cb(result --[[ boolean ]], reason --[[ string|nil ]])

end
```

* **Paramètres:**
  * **pass:** Mot de passe à trouver. 8 caractères obligatoires (non testé avec moins).
  * **nblives:** Nombre de vies. 5 par défaut.
  * **loading:** Temps de chargement en miliseconde. 10000 par défaut.
  * **maxspeed:** Si vrai, toutes les lettres vont à la vitesse maximale. Faux par défaut.
* **Résultats:**
  * Le résultat passe par la fonction callback `cb`.
  * **result:** Si le mini-jeux a été terminé avec succès.
  * **reason:** Raison de l'échec du mini-jeux.
    * `nil` si réussi.
    * `"dead"` si le joueur est mort.
    * `"abort"` si abandonné.
    * `"failed"` si échoué (a utilisé toutes ses vies).

<!-- tabs:end -->

## Datacrack

### Informations

* Auteurs du script: utkuali (non SADoJ) & Pierre
* Emplacement: `[SCRIPT]/[DARK]/[MINIGAMES]/minigame_datacrack`

Démo:

![Bruteforce](../../../_media/framework/minigames/minigame_datacrack.webm ':include :type=video style=max-height:500px;max-width:100%; controls')

Ce mini-jeux ne fait aucune animation, uniquement l'affichage. A vous d'ajouter des animations.

### Utilisation

<!-- tabs:start -->

#### **Event**

```lua
TriggerEvent("minigame_datacrack:start", speed --[[ number ]], cb --[[ function ]])

function cb(result --[[ boolean ]], reason --[[ string|nil ]])

end
```

* **Paramètres:**
  * **speed:** Vitesse des barres. 25 par défaut. 2.5 minimum, pas de maximum.
* **Résultats:**
  * Le résultat passe par la fonction callback `cb`.
  * **result:** Si le mini-jeux a été terminé avec succès.
  * **reason:** Raison de l'échec du mini-jeux.
    * `nil` si réussi.
    * `"dead"` si le joueur est mort.
    * `"abort"` si abandonné.

<!-- tabs:end -->

## Drilling (Perçage)

### Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[DARK]/[MINIGAMES]/minigame_drilling`

Démo:

![Drilling](../../../_media/framework/minigames/minigame_drilling.webm ':include :type=video style=max-height:500px;max-width:100%; controls')

Ce mini-jeux gère déjà les animations. Il faut bien placer le joueur au préalable.

### Utilisation

<!-- tabs:start -->

#### **Export**

```lua
local result --[[ table ]] = exports.minigame_drilling:Start(keepOldResult --[[ boolean ]], tempUp --[[ number ]], tempDown --[[ number ]], efficiency --[[ number ]])
```

* **Paramètres:**
  * **keepOldResult:** Si l'état d'avancement de la dernière tentative est conservé.
  * **tempUp:** Coefficient sur la montée en température du forêt.
  * **tempDown:** Coefficient sur la descente en température du forêt.
  * **efficiency:** Coefficient sur l'efficacité du forêt.
* **Résultats:**

    ```lua
    result = {
        success = success, --[[ boolean ]]
        broken = broken --[[ boolean ]]
    }
    ```

  * **success:** Si le mini-jeux a été terminé avec succès.
  * **broken:** Si le forêt a cassé.

<!-- tabs:end -->

## Fingerprint

### Informations

* Auteurs du script: utkuali (non SADoJ) & Pierre
* Emplacement: `[SCRIPT]/[DARK]/[MINIGAMES]/minigame_fingerprint`

Démo:

![Fingerprint](../../../_media/framework/minigames/minigame_fingerprint.webm ':include :type=video style=max-height:500px;max-width:100%; controls')

Ce mini-jeux ne fait aucune animation, uniquement l'affichage. A vous d'ajouter des animations.

### Utilisation

<!-- tabs:start -->

#### **Event**

```lua
TriggerEvent("minigame_fingerprint:start", levels --[[ number ]], lifes --[[ number ]], time --[[ number ]], cb --[[ function ]])

function cb(result --[[ boolean ]], reason --[[ string|nil ]])

end
```

* **Paramètres:**
  * **levels:** Nombre de niveaux. Entre 1 et 4. 4 par défaut.
  * **lifes:** Nombre de vies Entre 1 et 6. 5 par défaut.
  * **time:** Temps en minutes. 3 par défaut.
* **Résultats:**
  * Le résultat passe par la fonction callback `cb`.
  * **result:** Si le mini-jeux a été terminé avec succès.
  * **reason:** Raison de l'échec du mini-jeux.
    * `nil` si réussi.
    * `"dead"` si le joueur est mort.
    * `"abort"` si abandonné.
    * `"failed"` si échoué (a utilisé toutes ses vies).

<!-- tabs:end -->

## Safecracking

### Informations

* Auteurs du script: VHall1 (non SADoJ), xElementzx (non SADoJ), contatosummerz (non SADoJ) & Pierre
* Emplacement: `[SCRIPT]/[DARK]/[MINIGAMES]/minigame_safecracking`

Démo:

![Safecracking](../../../_media/framework/minigames/minigame_safecracking.webm ':include :type=video style=max-height:500px;max-width:100%; controls')

Ce mini-jeux gère déjà les animations. Il faut bien placer le joueur au préalable.

### Utilisation

<!-- tabs:start -->

#### **Export**

```lua
local result --[[ table ]] = exports.minigame_safecracking:Start(combinations --[[ table ]])
```

* **Paramètres:**
  * **combinations:** Tableau avec les combinaisons entre 0 et 99. 1 combinaison minimum.
    * Exemple: `{5, 58, 72}`.
* **Résultats:**

    ```lua
    result = {
        success = success, --[[ boolean ]]
        broken = broken --[[ boolean ]]
    }
    ```

  * **success:** Si le mini-jeux a été terminé avec succès.
  * **broken:** Si l'utilisateur a validé sur un mauvais numéro.

<!-- tabs:end -->

## Lockpicking

### Informations

* Auteurs du script: DanIsTheMan262 (non SADoJ) & Pierre
* Emplacement: `[SCRIPT]/[DARK]/[MINIGAMES]/minigame_lockpicking`

Démo:

![Lockpicking](../../../_media/framework/minigames/minigame_lockpicking.webm ':include :type=video style=max-height:500px;max-width:100%; controls')

Ce mini-jeux gère déjà les animations. Il faut bien placer le joueur au préalable.

### Utilisation

<!-- tabs:start -->

#### **Export**

```lua
exports.minigame_lockpicking:Start(hardDifficulty --[[ boolean ]], cb --[[ function ]])

function cb(result --[[ boolean ]], reason --[[ string|nil ]])

end
```

* **Paramètres:**
  * **hardDifficulty:** Permet d'augmenter la difficulté (2 niveaux de difficulté)
* **Résultats:**
  * Le résultat passe par la fonction callback `cb`.
  * **result:** Si le mini-jeux a été terminé avec succès.
  * **reason:** Raison de l'échec du mini-jeux.
    * `nil` si réussi.
    * `"dead"` si le joueur est mort.
    * `"abort"` si abandonné.
    * `"broken"` si l'outil est cassé.

<!-- tabs:end -->

## Keypack

### Informations

* Auteurs du script: ultrahacx (non SADoJ) & Thomas
* Emplacement: `[SCRIPT]/[DARK]/[MINIGAMES]/minigame_keypackhack`

Démo:

![Lockpicking](../../../_media/framework/minigames/minigame_keypackhack.webm ':include :type=video style=max-height:500px;max-width:100%; controls')

Ce mini-jeux ne fait aucune animation, uniquement l'affichage. A vous d'ajouter des animations.

### Utilisation

<!-- tabs:start -->

#### **Export**

```lua
TriggerEvent("minigame_keypackhack:start", levels --[[ number ]], lifes --[[ number ]], time --[[ number ]], cb --[[ function ]])

function cb(result --[[ boolean ]], reason --[[ string|nil ]])

end
```

* **Paramètres:**
  * **levels:** Nombre de niveaux. Entre 1 et 4.
  * **lifes:** Nombre de vies Entre 1 et 6.
  * **time:** Temps en secondes.
* **Résultats:**
  * Le résultat passe par la fonction callback `cb`.
  * **result:** Si le mini-jeux a été terminé avec succès.
  * **reason:** Raison de l'échec du mini-jeux.
    * `"successful"` si réussi.
    * `"time out"` si le joueur a pris trop de temps.
    * `"dead"` si le joueur est mort.
    * `"abort"` si abandonné.
    * `"failed"` si échoué (a utilisé toutes ses vies).

<!-- tabs:end -->

{docsify-updated}