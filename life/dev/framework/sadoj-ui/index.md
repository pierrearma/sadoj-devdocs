# sadoj-ui

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-ui`

Ce script gère la partie interface. Le script est en cours de développement.

## Modules

* [Dialogues](life/dev/framework/sadoj-ui/dialogue.md)
* [Textes d'aide](life/dev/framework/sadoj-ui/helptext.md)
* [Interface](life/dev/framework/sadoj-ui/hud.md)
* [Divers](life/dev/framework/sadoj-ui/misc.md)
* [Notifications](life/dev/framework/sadoj-ui/notification.md)
* [Timerbars](life/dev/framework/sadoj-ui/timerbars.md)

## Fonctionnement des TextEntry

Il est impossible de faire des notifications, des textes d'aide ou des dialogues avec des textes trop longs (plus de 100 caractères).

Vous devez alors utiliser les `TextEntry`.

La native [AddTextEntry](https://docs.fivem.net/natives/?_0x32CA01C3) permet d'enregister dans le moteur du jeu un texte de la longueur que l'on souhaite. Evidemment, dans la limite du raisonnable.

Une `entryKey` est ainsi associée à un texte.

Dans ce texte, il est possible de mettre des `~a~` pour signifier qu'il y a un paramètre à cet endroit.
Il est possible ensuite de mettre une chaine de caractères variable à l'endroit des paramètres.

{docsify-updated}
