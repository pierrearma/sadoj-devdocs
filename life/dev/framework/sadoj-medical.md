# sadoj-medical

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-medical`
* Redémarrage possible: `Non`
* Dépendances: `oxmysql`, `sadoj-core`, `sadoj-callbacks`, `sadoj-ui`, `sadoj-inventory`, `sadoj-jobs`, `sadoj-licenses`, `sadoj-interact`, `sadoj-minigames`, `sadoj-dispatch`, `sadoj-evidences`, `sadoj-characters`

Ce script gère tout le système médical, pour les joueurs comme pour les PNJ :

* blessures par zone du corps (tête, cou, thorax, abdomen, bras, jambes), avec type, gravité et balles logées ;
* saignement, volume sanguin, pouls, douleur et état de conscience ;
* états **à terre**, **inconscient**, **arrêt cardiaque** et **mort** (PNJ uniquement) ;
* soins par étapes (Health Audit EMS) avec mini-jeux `sadoj-minigames` et compétences médicales ;
* transport médicalisé PNJ, médecins PNJ, appels aux secours, preuves de sang et de balles.

Toute l'autorité est côté serveur : le dossier médical (`Patients[src]`) est la seule source de vérité, publié dans un state bag que les autres ressources peuvent lire.

> [!WARNING]
> ### ⚠️ Un ped au sol n'est pas mort pour GTA
>
> Quand un joueur ou un PNJ tombe, sadoj-medical le **ressuscite sur place** : il est au sol, animé, mais vivant pour le jeu. Les natives `IsEntityDead`, `IsPedDeadOrDying`, `IsPedFatallyInjured`, `IsPedInjured` et `IsPlayerDead` répondent donc **« vivant »** pour un ped à terre, inconscient ou en arrêt cardiaque.
>
> Pour savoir si un ped est hors de combat, utilisez l'export [`IsPedDead`](#savoir-si-un-ped-est-hors-de-combat) ou incluez le fichier [`lib/natives.lua`](#remplacer-les-natives-de-mort) dans votre ressource.

---

## États

| État | Valeur | Description |
| :--- | :--- | :--- |
| Vivant | `"alive"` | Debout, ou allongé après un réveil tant que le joueur ne s'est pas relevé. |
| À terre | `"down"` | Au sol mais conscient. L'état de conscience baisse avec le temps, les blessures et le sang perdu. |
| Inconscient | `"unconscious"` | Au sol, inconscient. Un soignant doit le réveiller. |
| Arrêt cardiaque | `"arrest"` | Joueurs uniquement. Pouls à 0, plus de saignement. Un massage cardiaque est nécessaire. |
| Mort | `"dead"` | **PNJ uniquement** : un joueur n'est jamais déclaré mort. |

Parcours type d'un joueur : `alive` → `down` → `unconscious` → (`arrest` → massage cardiaque → `unconscious`) → réveil → `alive`.

---

## Remplacer les natives de mort

Pour une ressource qui utilise beaucoup les natives de mort, le plus simple est d'inclure `lib/natives.lua` **en premier** dans ses scripts client :

```lua
client_scripts {
    '@sadoj-medical/lib/natives.lua',
    'client/*.lua',
}
```

Dans la ressource qui l'inclut uniquement, ce fichier redéfinit :

| Native | Comportement pour un ped humain au sol (à terre, inconscient, en arrêt) |
| :--- | :--- |
| `IsEntityDead` | `true` |
| `IsPedDeadOrDying` | `true` |
| `IsPedFatallyInjured` | `true` |
| `IsPedInjured` | `true` |
| `IsPlayerDead` | `true` (prend un index joueur, comme la native) |
| `GetEntityHealth` | `0` |
| `SetEntityHealth` | Ignorée : sadoj-medical gère seul la santé d'un ped au sol. |

* La native d'origine reste prioritaire : si elle répond « mort », la réponse ne change pas.
* Véhicules, objets, animaux et peds sans dossier médical gardent le comportement natif.
* Le fichier lit directement le state bag : il ne fait aucun appel à sadoj-medical et fonctionne même si celui-ci n'est pas démarré.
* Client uniquement : côté serveur, le fichier ne fait rien.

> [!WARNING]
> Ne **jamais** inclure ce fichier dans `sadoj-medical`, `sadoj-stretchers`, `sadoj-ui`, `spawnmanager` ou `baseevents` : ces ressources ont besoin des vraies natives.
>
> `SetEntityHealth(ped, GetEntityHealth(ped) - x)` sur un ped au sol est ignoré au lieu de le tuer nativement (ce que le serveur traiterait comme un coup fatal).

---

## Utilisation

Les exports partagés (client et serveur) prennent une **entité ped**, joueur ou PNJ indifféremment. Côté client, sans paramètre, c'est le ped du joueur local.

### Savoir si un ped est hors de combat

<!-- tabs:start -->

### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-medical"]:IsPedDead(ped --[[ nil|number ]])
```

* **Paramètres:**
  * **ped:** Entité ped (joueur ou PNJ). Ped du joueur local si `nil`.
* **Retour:**
  * **result:** `true` si le ped est à terre, inconscient, en arrêt cardiaque, mort, ou mort nativement (chute en ragdoll juste avant la résurrection, PNJ non suivi), `false` sinon.

### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-medical"]:IsPedDead(ped --[[ number ]])
```

* **Paramètres:**
  * **ped:** Entité ped (joueur ou PNJ), par exemple `GetPlayerPed(src)`.
* **Retour:**
  * **result:** `true` si le ped est à terre, inconscient, en arrêt cardiaque, mort, ou mort nativement, `false` sinon.

<!-- tabs:end -->

### Savoir si un ped est à terre (conscient)

<!-- tabs:start -->

### **Export (client / serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-medical"]:IsPedDown(ped --[[ nil|number ]])
```

* **Paramètres:**
  * **ped:** Entité ped (joueur ou PNJ). Côté client, ped du joueur local si `nil`.
* **Retour:**
  * **result:** `true` uniquement si le ped est dans l'état `"down"` (au sol mais conscient).

<!-- tabs:end -->

### Récupérer l'état d'un ped

<!-- tabs:start -->

### **Export (client / serveur)**

```lua
local state --[[ string ]] = exports["sadoj-medical"]:GetPedPatientState(ped --[[ nil|number ]])
```

* **Paramètres:**
  * **ped:** Entité ped (joueur ou PNJ). Côté client, ped du joueur local si `nil`.
* **Retour:**
  * **state:** `"alive"`, `"down"`, `"unconscious"`, `"arrest"` ou `"dead"` (cf. [États](#états)). `"alive"` si le ped n'a pas de dossier médical.

<!-- tabs:end -->

### Récupérer le dossier compact d'un ped

<!-- tabs:start -->

### **Export (client / serveur)**

```lua
local bag --[[ nil|table ]] = exports["sadoj-medical"]:GetPedPatientBag(ped --[[ nil|number ]])
```

* **Paramètres:**
  * **ped:** Entité ped (joueur ou PNJ). Côté client, ped du joueur local si `nil`.
* **Retour:**
  * **bag:** Dossier compact publié par le serveur (state bag `medical` du joueur, ou de l'entité pour un PNJ), `nil` si le ped n'a pas de dossier. Lecture seule.

<!-- tabs:end -->

Champs du dossier compact (les champs optionnels sont absents quand ils ne s'appliquent pas) :

| Champ | Type | Description |
| :--- | :--- | :--- |
| `s` | `string` | État (cf. [États](#états)). |
| `b` | `number` | Volume sanguin (%). |
| `p` | `number` | Douleur (0 à 10). |
| `h` | `number` | Pouls (BPM). |
| `c` | `number` | État de conscience (%). |
| `bl` | `boolean` | Saignement en cours. |
| `bi` | `nil\|number` | Intensité du saignement : `1` léger, `2` modéré, `3` abondant. |
| `bz` | `nil\|table` | Zones qui saignent. |
| `w` | `number` | Nombre de blessures visibles. |
| `z` | `table` | Intégrité par zone (%), clé = zone. |
| `tq` | `table` | Zones portant au moins un garrot. |
| `ds` | `nil\|number` | Secondes écoulées depuis la mise à terre. |
| `rs` | `nil\|boolean` | Réveillé par un soignant, le joueur est encore allongé. |
| `sp` | `nil\|table` | Support (brancard…) : `{ n = netId, k = type, l = libellé }`. |
| `tr`, `ch`, `fx`, `tp` | | Usage interne (transport PNJ, choix de gravité, fractures, scène de transport). |

> [!NOTE]
> Les fractures « jouées » (non révélées par une radiographie) ne sont comptées ni dans `w` ni dans `z`.

### Exports par joueur (compatibilité)

Ces exports sont conservés pour les ressources qui les utilisent déjà (`sadoj-emotes`, `sadoj-metabolism`, `sadoj-stretchers`). Pour du nouveau code, préférez les exports par ped ci-dessus.

<!-- tabs:start -->

### **Export (client)**

```lua
local dead --[[ boolean ]] = exports["sadoj-medical"]:IsPlayerDead(player --[[ nil|number ]])
local down --[[ boolean ]] = exports["sadoj-medical"]:IsPlayerDown(player --[[ nil|number ]])
local state --[[ string ]] = exports["sadoj-medical"]:GetPatientState(player --[[ nil|number ]])
```

* **Paramètres:**
  * **player:** Index joueur (`PlayerId()`, …). Joueur local si `nil`.
* **Retour:**
  * **dead:** `true` si le joueur est à terre, inconscient ou en arrêt cardiaque (ne tient pas compte de la mort native, contrairement à `IsPedDead`).
  * **down:** `true` si le joueur est à terre et conscient.
  * **state:** État du joueur (cf. [États](#états)).

### **Export (serveur)**

```lua
local dead --[[ boolean ]] = exports["sadoj-medical"]:IsPlayerDead(playerSrc --[[ number ]])
local down --[[ boolean ]] = exports["sadoj-medical"]:IsPlayerDown(playerSrc --[[ number ]])
local state --[[ string ]] = exports["sadoj-medical"]:GetPatientState(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * Identiques à la version client.

<!-- tabs:end -->

### Récupérer le dossier complet d'un joueur

<!-- tabs:start -->

### **Export (serveur)**

```lua
local patient --[[ nil|table ]] = exports["sadoj-medical"]:GetPatient(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * **patient:** Copie du dossier (lecture seule), `nil` si le joueur n'est pas chargé.

    ```lua
    patient = {
        state = state,                 --[[ string ]]  -- cf. États
        blood = blood,                 --[[ number ]]  -- volume sanguin (%)
        consciousness = consciousness, --[[ number ]]  -- état de conscience (%)
        pain = pain,                   --[[ number ]]  -- douleur (0 à 10)
        bleeding = bleeding,           --[[ boolean ]] -- saignement en cours
        zones = zones,                 --[[ table<string, number> ]] -- intégrité par zone (%)
        wounds = wounds,               --[[ table ]]   -- liste des blessures
    }
    ```

  * **wounds:** Chaque blessure contient notamment `zone`, `type`, `severity` (1 à 3), `cause` (libellé), `lodged` (balle logée), `steps` (étapes de soin) et `done` (nombre d'étapes faites).

<!-- tabs:end -->

### Relever ou soigner un joueur

<!-- tabs:start -->

### **Export (serveur) : relever**

```lua
local ok --[[ boolean ]] = exports["sadoj-medical"]:RevivePlayer(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
* **Retour:**
  * **ok:** `false` si le joueur n'est pas chargé.
* Le joueur est relevé (vivant) mais **ses blessures restent à soigner**.

### **Export (serveur) : soin complet**

```lua
local ok --[[ boolean ]] = exports["sadoj-medical"]:HealPlayer(playerSrc --[[ number ]], health --[[ nil|number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **health:** Santé du ped après le soin (100 à 200). `200` par défaut.
* **Retour:**
  * **ok:** `false` si le joueur n'est pas chargé.
* Supprime toutes les blessures (fractures et balles logées comprises), sang à 100 %, joueur vivant.

<!-- tabs:end -->

### Mettre un joueur au sol avec une cause

Pour les causes qui ne laissent pas de blessure (malaise, malnutrition, coma éthylique, overdose, électrocution…). La cause est affichée en tête de la liste des blessures (Health Audit, bilan) et dans les logs tant que le joueur est au sol.

<!-- tabs:start -->

### **Export (serveur) : à terre**

```lua
local changed --[[ boolean ]] = exports["sadoj-medical"]:SetDown(playerSrc --[[ number ]], cause --[[ nil|string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **cause:** Libellé affiché. `"Malaise"` par défaut.
* **Retour:**
  * **changed:** `true` si l'état a changé. Sans effet si le joueur est déjà au sol.

### **Export (serveur) : inconscient**

```lua
local changed --[[ boolean ]] = exports["sadoj-medical"]:SetUnconscious(playerSrc --[[ number ]], cause --[[ nil|string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **cause:** Libellé affiché. `"Malaise"` par défaut.
* **Retour:**
  * **changed:** `true` si l'état a changé. Sans effet si le joueur est déjà inconscient ou en arrêt cardiaque.

### **Export (serveur) : arrêt cardiaque**

```lua
local changed --[[ boolean ]] = exports["sadoj-medical"]:TriggerCardiacArrest(playerSrc --[[ number ]], cause --[[ nil|string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **cause:** Libellé affiché.
* **Retour:**
  * **changed:** `true` si le joueur est passé en arrêt cardiaque. Un massage cardiaque sera nécessaire.

<!-- tabs:end -->

Exemple (`sadoj-metabolism`) :

```lua
exports["sadoj-medical"]:SetUnconscious(src, "Coma éthylique")
exports["sadoj-medical"]:SetDown(src, "Déshydratation")
```

### Modifier l'état de conscience d'un joueur à terre

<!-- tabs:start -->

### **Export (serveur)**

```lua
local ok --[[ boolean ]] = exports["sadoj-medical"]:AddConsciousness(playerSrc --[[ number ]], delta --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **delta:** Variation en % (négatif pour la faire baisser).
* **Retour:**
  * **ok:** `false` si le joueur n'est pas chargé ou n'est pas dans l'état `"down"`.

<!-- tabs:end -->

### Infliger une blessure

<!-- tabs:start -->

### **Export (serveur)**

```lua
local ok --[[ boolean ]] = exports["sadoj-medical"]:AddWound(playerSrc --[[ number ]], zone --[[ string ]], woundType --[[ string ]], severity --[[ number ]], cause --[[ nil|string ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **zone:** Zone du corps (cf. [Zones](#zones)).
  * **woundType:** Type de blessure (cf. [Types de blessure](#types-de-blessure)).
  * **severity:** Gravité, de `1` (mineure) à `3` (critique).
  * **cause:** Libellé de la cause. Libellé du type par défaut.
* **Retour:**
  * **ok:** `false` si le joueur n'est pas chargé, ou si la zone ou le type est inconnu.
* Une blessure de même zone, type et cause encore non soignée est aggravée plutôt que dupliquée.

<!-- tabs:end -->

### Compétences médicales

Les compétences sont accordées par le poste (`sadoj-jobs`) ou par une licence (`sadoj-licenses`), configurées dans `config/skills.lua`. Rien n'est stocké en base. Un joueur consulte les siennes avec `/competences`.

<!-- tabs:start -->

### **Export (client)**

```lua
local has --[[ boolean ]] = exports["sadoj-medical"]:HasMedicalSkill(skill --[[ nil|string ]])
local list --[[ table<string> ]] = exports["sadoj-medical"]:GetMedicalSkills()
```

* **Paramètres:**
  * **skill:** Identifiant de la compétence (cf. [Compétences](#compétences)).
* **Retour:**
  * **has:** `true` si le joueur local a la compétence. Toujours `true` si `skill` est `nil`.
  * **list:** Compétences du joueur local, dans l'ordre d'affichage.

### **Export (serveur)**

```lua
local has --[[ boolean ]] = exports["sadoj-medical"]:PlayerHasMedicalSkill(playerSrc --[[ number ]], skill --[[ nil|string ]])
local list --[[ table<string> ]] = exports["sadoj-medical"]:GetPlayerMedicalSkills(playerSrc --[[ number ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur.
  * **skill:** Identifiant de la compétence.
* **Retour:**
  * **has:** `true` si le joueur a la compétence. Toujours `true` si `skill` est `nil`.
  * **list:** Compétences du joueur, dans l'ordre d'affichage.

<!-- tabs:end -->

### Dernière zone touchée du joueur local

<!-- tabs:start -->

### **Export (client)**

```lua
local bone --[[ nil|number ]] = exports["sadoj-medical"]:GetLastDamageBone()
local zone --[[ nil|string ]] = exports["sadoj-medical"]:GetLastDamageZone()
```

* **Retour:**
  * **bone:** Dernier os touché (id d'os GTA).
  * **zone:** Zone correspondante (cf. [Zones](#zones)).

<!-- tabs:end -->

---

## Supports (brancards…)

sadoj-medical ne gère aucun modèle et **n'attache rien** : la ressource qui gère l'objet (par exemple `sadoj-stretchers`) déclare l'installation du patient, attache et anime le ped elle-même. Tant qu'un patient est installé, sadoj-medical cesse de piloter sa posture (animation au sol, ragdoll, chute).

Un patient est désigné par `target` : l'identifiant serveur d'un joueur, ou `"npc:<netId>"` pour un PNJ.

Toute ressource du même genre (lit d'hôpital, table de radiologie…) doit utiliser ces exports plutôt qu'attacher le ped elle-même.

### Savoir si un ped peut être installé

<!-- tabs:start -->

### **Export (client / serveur)**

```lua
local result --[[ nil|boolean ]] = exports["sadoj-medical"]:CanPedBeSupported(ped --[[ nil|number ]])
local support --[[ nil|table ]] = exports["sadoj-medical"]:GetPedSupport(ped --[[ nil|number ]])
```

* **Paramètres:**
  * **ped:** Entité ped (joueur ou PNJ). Côté client, ped du joueur local si `nil`.
* **Retour:**
  * **result:** `true` si le ped est au sol, ou vivant mais encore allongé après un réveil. `nil` s'il n'a pas de dossier médical.
  * **support:** `{ netId, kind, label }` du support sur lequel le ped est installé, `nil` sinon.

<!-- tabs:end -->

### Installer, retirer, consulter

<!-- tabs:start -->

### **Export (serveur) : installer**

```lua
local ok --[[ boolean ]], message --[[ nil|string ]] = exports["sadoj-medical"]:SetPatientSupport(playerSrc --[[ number ]], target --[[ number|string ]], netId --[[ number ]], info --[[ table ]])
```

* **Paramètres:**
  * **playerSrc:** Identifiant serveur du joueur qui installe (doit être à proximité).
  * **target:** Patient (server id ou `"npc:<netId>"`).
  * **netId:** Network id de l'entité support.
  * **info:** `{ kind = "stretcher", label = "le brancard" }`. Le libellé est affiché au patient.
* **Retour:**
  * **ok:** `true` si le patient est installé.
  * **message:** Message à afficher (succès ou raison du refus : trop loin, support déjà occupé, patient debout…).
* Un transport PNJ encore en attente est annulé sans frais.

### **Export (serveur) : retirer**

```lua
local ok --[[ boolean ]], message --[[ nil|string ]] = exports["sadoj-medical"]:ClearPatientSupport(playerSrc --[[ nil|number ]], target --[[ number|string ]])
```

* **Paramètres:**
  * **playerSrc:** Joueur qui retire le patient (doit être à proximité). `nil` pour une action système.
  * **target:** Patient (server id ou `"npc:<netId>"`).
* **Retour:**
  * **ok:** `true` si le patient a été retiré.
  * **message:** Message à afficher.

### **Export (serveur) : consulter**

```lua
local support --[[ nil|table ]] = exports["sadoj-medical"]:GetPatientSupport(target --[[ number|string ]])
```

* **Paramètres:**
  * **target:** Patient (server id ou `"npc:<netId>"`).
* **Retour:**
  * **support:** `{ netId, kind, label }`, `nil` si le patient n'est sur aucun support.

### **Export (serveur) : housse mortuaire**

```lua
local ok --[[ boolean ]], message --[[ nil|string ]] = exports["sadoj-medical"]:RemoveNpcBody(playerSrc --[[ nil|number ]], target --[[ string ]])
```

* **Paramètres:**
  * **playerSrc:** Joueur qui agit (doit être à proximité).
  * **target:** PNJ (`"npc:<netId>"`). Jamais un joueur.
* **Retour:**
  * **ok:** `true` si le corps (entité et dossier) a été supprimé. Refusé si le PNJ n'est pas dans l'état `"dead"`.

<!-- tabs:end -->

Le support est aussi retiré automatiquement : quand le patient repasse debout, quand le joueur se relève, ou quand l'entité support disparaît ou s'éloigne du patient. Chaque changement est annoncé par l'événement [`sadoj-medical:server:supportChanged`](#événements).

---

## Événements

Événements serveur locaux (`AddEventHandler`, non réseau) :

<!-- tabs:start -->

### **Changement d'état d'un joueur**

```lua
AddEventHandler("sadoj-medical:server:stateChanged", function(playerSrc --[[ number ]], state --[[ string ]], previous --[[ string ]])

end)
```

* **playerSrc:** Identifiant serveur du joueur.
* **state:** Nouvel état (cf. [États](#états)).
* **previous:** État précédent.

### **Changement d'état d'un PNJ**

```lua
AddEventHandler("sadoj-medical:server:npcStateChanged", function(uid --[[ string ]], state --[[ string ]], previous --[[ string ]])

end)
```

* **uid:** Identifiant interne du PNJ suivi.
* **state:** Nouvel état (cf. [États](#états)).
* **previous:** État précédent.

### **Changement de support**

```lua
AddEventHandler("sadoj-medical:server:supportChanged", function(target --[[ number|string ]], support --[[ nil|table ]], reason --[[ string ]])

end)
```

* **target:** Patient (server id ou `"npc:<netId>"`).
* **support:** `{ netId, kind, label }` à l'installation, `nil` au retrait.
* **reason:**
  * `"installed"` installé.
  * `"removed"` retiré par `ClearPatientSupport`.
  * `"alive"` le patient est repassé debout.
  * `"stood_up"` le joueur s'est relevé.
  * `"lost"` l'entité support n'existe plus.
  * `"away"` le patient s'est éloigné du support.

<!-- tabs:end -->

---

## Preuves

sadoj-medical produit lui-même les preuves liées aux blessures, via `sadoj-evidences` :

* **traces de sang** au sol et dans les véhicules quand un joueur saigne (`AddEvidenceAtCoords` / `AddEvidenceToVehicle`) ;
* **balles extraites** lors d'un soin, remises au soignant avec les données du tir ;
* quand un hôpital ou un médecin PNJ soigne une plaie par balle, un appel générique est envoyé à la police (`sadoj-dispatch`) et les balles sont déposées dans le coffre de l'établissement (`bulletSafe`, cf. `config/locations.lua`).

Les autres ressources n'ont donc pas à détecter elles-mêmes les blessures pour créer ces preuves.

---

## Commandes

| Commande | Accès | Description |
| :--- | :--- | :--- |
| `/bilan` | Tous | Bilan médical personnel (blessures, fractures à décider). Touche configurable : `Bilan médical personnel`. |
| `/competences` | Tous | Affiche ses compétences médicales. |
| `/revive [id]` | Admin | Relève un joueur au sol, ses blessures restent à soigner. |
| `/heal [id]` | Admin | Soin complet. |
| `/fullrevive [id]` | Admin | Relève (même en arrêt cardiaque) et supprime toutes les blessures. |

Les commandes admin demandent l'ACE `command.medical_admin` (`ServerConfig.AdminAce`) et sont utilisables depuis la console. Sans `id`, elles ciblent le joueur qui les tape.

---

## Valeurs de référence

### Zones

| Zone | Libellé |
| :--- | :--- |
| `head` | Tête |
| `neck` | Cou |
| `chest` | Thorax |
| `abdomen` | Abdomen |
| `left_arm` | Bras gauche |
| `right_arm` | Bras droit |
| `left_leg` | Jambe gauche |
| `right_leg` | Jambe droite |

### Types de blessure

| Type | Libellé |
| :--- | :--- |
| `bullet` | Plaie par balle |
| `laceration` | Lacération |
| `contusion` | Contusion |
| `fracture` | Fracture (toujours au moins de gravité 2) |
| `burn` | Brûlure |

Gravités : `1` mineure, `2` moyenne, `3` critique.

### Compétences

| Compétence | Libellé | Gestes |
| :--- | :--- | :--- |
| `med_nursing` | Soins infirmiers | Désinfecter et panser les plaies graves. |
| `med_resuscitation` | Réanimation | Massage cardiaque, réveiller ou stabiliser un patient. |
| `med_orthopedics` | Orthopédie | Réduire une fracture et poser une attelle. |
| `med_radiology` | Radiologie | Lancer et lire une radiographie. |
| `med_surgery` | Chirurgie | Extraire les balles, suturer, soin complet. |

Les gestes de base (compresse, garrot, antidouleurs, bandage et désinfection des plaies légères) restent ouverts à tous.

### Objets (sadoj-inventory)

| Objet | Usage |
| :--- | :--- |
| `gauze` | Compresse : stoppe le saignement d'une plaie. |
| `tourniquet` | Garrot : stoppe une plaie d'un membre en attendant les soins. |
| `antiseptic` | Désinfecte une plaie. |
| `forceps` | Extrait les balles logées (non consommé). |
| `suture_kit` | Referme les plaies profondes. |
| `splint` | Immobilise une fracture. |
| `bandage` | Couvre et protège les plaies. |
| `painkillers` | Antidouleurs. |
| `defibrillator` | Relance le cœur d'un patient en arrêt cardiaque (non consommé). |
| `capsule_cbd` | Gélule de CBD : rend un peu de santé. |
