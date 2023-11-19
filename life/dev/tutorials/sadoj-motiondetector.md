# Alarme anti-intrusion

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[INNOVATION]/sadoj-motiondetector`

## Étape 1 : Ouvrez le script sadoj-motiondetector

Voici l'emplacement du script pour les alarmes anti-intrusion `[SCRIPT]/[INNOVATION]/sadoj-motiondetector/`.


## Étape 2 : Choisissez le type d'alarme que vous souhaitez ajouter


* **Alarme d'intérieur:** (Recommandée)

Les alarmes d'intérieur sont fait pour les MLO où il n'y a pas de zones publiques, l'alarme se déclenchera automatiquement lorsque vous rentrerez à l'intérieur du MLO.

Cette option est recommandé car plus optimisé.

L'emplacement du fichier de configuration se trouve dans: `[SCRIPT]/[INNOVATION]/sadoj-motiondetector/Config/MotionDetector_config_InteriorAlarmsList.lua`.

* **Alarme customisé:**

Les alarmes customisées sont faits pour les endroits où il y a du public afin de séparer plusieurs zones (public et privé) dans le même bâtiment, l'alarme se déclenchera automatiquement lorsque vous rentrerez dans la zone défini.

L'emplacement du fichier de configuration se trouve dans: `[SCRIPT]/[INNOVATION]/sadoj-motiondetector/Config/MotionDetector_config_CustomAlarmsList.lua`.


## Étape 2 : Ajouter et configurer votre alarme

Ouvrez le fichier de configuration en fonction du type d'alarme que vous avez choisi ci-dessus.


* Liste des entreprises de sécurité: `Bobcat`, `DevilDogsSecurity`, `Securitas`, `BlackBirdSecurity`

* Liste des niveaux de sécurité:
  * **Niveau 1:** 1 empreinte, 2 vie, 30 secondes
  * **Niveau 2:** 2 empreinte, 2 vie, 30 secondes
  * **Niveau 3:** 3 empreinte, 1 vie, 30 secondes
  * **Niveau 4:** 4 empreinte, 1 vie, 15 secondes (Utilisation interdite sauf exception)

* **Alarme d'intérieur:**

```lua
    ["exemple" --[[ string ]]] = { --Saisissez le nom de votre alarme à la place de 'exemple'. Attention le nom de l'alarme doit être unique.
        InteriorCoords = Coords --[[ vector3  ]], --Ici vous devez mettre les coordonnées du MLO, pour cela il suffit de se mettre à l'intérieur et de taper la commande CCV dans le F8.
        ControlPanel = { --Ici se trouve la liste de tous les panels de contrôle de votre alarme
            {Pos = Coords --[[ vector3  ]], Dist = ActivationDistance --[[ integer ]]}, --Panneau de contrôle N°1
            {Pos = Coords --[[ vector3  ]], Dist = ActivationDistance --[[ integer ]]}, --Panneau de contrôle N°2
            ...
        },
        AlarmSoundPos = { --Ici se trouve la liste de toutes les positions ou le son de l'alarme va sortir
            {Pos = Coords --[[ vector3  ]], Dist = SoundDistance --[[ integer ]]}, --Son N°1
            {Pos = Coords --[[ vector3  ]], Dist = SoundDistance --[[ integer ]]}, --Son N°2
            ...
        },
        Data = {
            IsDisabled = false --[[ boolean ]], --Ici vous définissez si l'alarme est désactivé par défaut ou non. (true = désactiver par défaut)
            EmergencyCall = true --[[ boolean ]], --Definitie si l'alarme appelle les services de secours. (Entreprise de sécurité, police ...)
            SilentAlarm = true, --Definitie si l'alarme est une alarme silencieuse. (true = alarme silencieuse)
	 	    SecurityCompanie = "Bobcat" --[[ string ]], --Définis quelle entreprise de sécurité est en charge de l'alarme (Voir ci-dessus pour la liste des entreprises de sécurité)
	 	    Standby = 15 --[[ integer ]], --Définis le temps de temporisation entre le moment où l'alarme à détecter une intrusion et le moment où l'alarme commence à sonner. (En seconde)
        },
        Acces = {
            Password = "Password" --[[ string ]], --Mot de passe pour accéder au panel de contrôle (nil pour désactiver, attention pour que les données biométriques fonctionne il faut avoir un mot de passe)
            SteamIdWhitelist = {"steam:000001", "steam:000002"} --[[ table ]], --Liste des personnes autorisées (Par SteamId) à utilisé le panel de contrôle sans taper le mot de passe
            JobWhitelist = {} --[[ table ]], --Liste des personnes autorisées (Par Job) à utilisé le panel de contrôle sans taper le mot de passe
            JobWhitelistWithGrade = {} --[[ table ]], --Liste des personnes autorisées (Par Job avec un grade) à utilisé le panel de contrôle sans taper le mot de passe
        },
        Hack = {
            EnabledHack = true, --Si l'alarme peut être hacker ou non
            Level = 1, --Niveau de difficulté du Hack, voir ci-dessus pour les niveaux disponible
        },
        Call = {
            ForcedJobCall = {}, --NE PAS TOUCHER
            PosJobCall = Coords --[[ vector3  ]], --La position que l'alarme va envoyer au service de secours
            Phone = {CallNumberList = {"768-2616"}}, --Liste des numéros de téléphone à appeler
            Webhooks = {
                WebhooksList = {
                    "https://discord.com/api/webhooks/850855669188001794/ukyI5KKDNLY8U5f9z6WqYbd_JtU_1hZW2KEB_63zsh_ZsKbEnsxv_1", --Lien du Webhooks N°1
                    "https://discord.com/api/webhooks/850855669188001794/ukyI5KKDNLY8U5f9z6WqYbd_JtU_1hZW2KEB_63zsh_ZsKbEnsxv_2", --Lien du Webhooks N°2
                    ...
                },
            },
        },
    }
```


* **Alarme customisé:**

```lua
    ["exemple" --[[ string ]]] = { --Saisissez le nom de votre alarme à la place de 'exemple'. Attention le nom de l'alarme doit être unique.
        ZoneList = {
            {Name = "Zone 1", MinZ = 81.0, MaxZ = 83.0, PosList = {
				vector3(-561.28656005859, 292.99188232422, 82.176277160645),
				vector3(-561.40930175781, 291.76501464844, 82.176277160645),
				vector3(-563.32983398438, 292.04696655273, 82.176254272461),
				vector3(-563.09033203125, 293.03656005859, 82.176315307617)
                ...
			}},
            {Name = "Zone 2", MinZ = 81.0, MaxZ = 83.0, PosList = {
				vector3(-561.28656005859, 292.99188232422, 82.176277160645),
				vector3(-561.40930175781, 291.76501464844, 82.176277160645),
				vector3(-563.32983398438, 292.04696655273, 82.176254272461),
                ...
			}},
            ...
        },
        ControlPanel = { --Ici se trouve la liste de tous les panels de contrôle de votre alarme
            {Pos = Coords --[[ vector3  ]], Dist = ActivationDistance --[[ integer ]]}, --Panneau de contrôle N°1
            {Pos = Coords --[[ vector3  ]], Dist = ActivationDistance --[[ integer ]]}, --Panneau de contrôle N°2
            ...
        },
        AlarmSoundPos = { --Ici se trouve la liste de toutes les positions ou le son de l'alarme va sortir
            {Pos = Coords --[[ vector3  ]], Dist = SoundDistance --[[ integer ]]}, --Son N°1
            {Pos = Coords --[[ vector3  ]], Dist = SoundDistance --[[ integer ]]}, --Son N°2
            ...
        },
        Data = {
            IsDisabled = false --[[ boolean ]], --Ici vous définissez si l'alarme est désactivé par défaut ou non. (true = désactiver par défaut)
            EmergencyCall = true --[[ boolean ]], --Definitie si l'alarme appelle les services de secours. (Entreprise de sécurité, police ...)
            SilentAlarm = true, --Definitie si l'alarme est une alarme silencieuse. (true = alarme silencieuse)
	 	    SecurityCompanie = "Bobcat" --[[ string ]], --Définis quelle entreprise de sécurité est en charge de l'alarme (Voir ci-dessus pour la liste des entreprises de sécurité)
	 	    Standby = 15 --[[ integer ]], --Définis le temps de temporisation entre le moment où l'alarme à détecter une intrusion et le moment où l'alarme commence à sonner. (En seconde)
        },
        Acces = {
            Password = "Password" --[[ string ]], --Mot de passe pour accéder au panel de contrôle (nil pour désactiver, attention pour que les données biométriques fonctionne il faut avoir un mot de passe)
            SteamIdWhitelist = {"steam:000001", "steam:000002"} --[[ table ]], --Liste des personnes autorisées (Par SteamId) à utilisé le panel de contrôle sans taper le mot de passe
            JobWhitelist = {} --[[ table ]], --Liste des personnes autorisées (Par Job) à utilisé le panel de contrôle sans taper le mot de passe
            JobWhitelistWithGrade = {} --[[ table ]], --Liste des personnes autorisées (Par Job avec un grade) à utilisé le panel de contrôle sans taper le mot de passe
        },
        Hack = {
            EnabledHack = true, --Si l'alarme peut être hacker ou non
            Level = 1, --Niveau de difficulté du Hack, voir ci-dessus pour les niveaux disponible
        },
        Call = {
            ForcedJobCall = {}, --NE PAS TOUCHER
            PosJobCall = Coords --[[ vector3  ]], --La position que l'alarme va envoyer au service de secours
            Phone = {CallNumberList = {"768-2616"}}, --Liste des numéros de téléphone à appeler
            Webhooks = {
                WebhooksList = {
                    "https://discord.com/api/webhooks/850855669188001794/ukyI5KKDNLY8U5f9z6WqYbd_JtU_1hZW2KEB_63zsh_ZsKbEnsxv_1", --Lien du Webhooks N°1
                    "https://discord.com/api/webhooks/850855669188001794/ukyI5KKDNLY8U5f9z6WqYbd_JtU_1hZW2KEB_63zsh_ZsKbEnsxv_2", --Lien du Webhooks N°2
                    ...
                },
            },
        },
    }
```


## Étape 4 : Redémarrer le script & tester


Taper les commandes suivantes dans le F8 :
  * 1: `ensure sadoj-motiondetector`
  * 2: `MotionDetector_ReSyncForAll`


Il ne vous reste plus qu'à aller tester les modifications apportées, si il n'y a pas d'erreur vous pouvez demander le transfert.

Ne vous occupez pas du 'debug' la désactivation est automatique.


## Étape 5 (facultatif): Ajouter une télécommande dans le F7

Ajouter la ligne ci-dessous dans le F7 que vous souhaitez.

* Liste des types d'alarmes disponibles: `Interior`, `Custom`

```lua
    Menu.addButton("nom du bouton ici", "MotionDetectorWirelessDisabledAlarme", {"nom de votre alarme", "type de votre alarme"})
```

{docsify-updated}