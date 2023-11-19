# Whitelist

> Auteur de la page: Pierre.

---

## Étape 1 : Récupérer le steamID64

Pour récupérer le steamID64, il existe différents sites web:

- [STEAMID I/O](https://steamid.io/)
- [Steam ID Finder](https://steamidfinder.com/)

Dans les deux cas, on peux rentrer le pseudo Steam ou encore le lien du profil Steam.

## Étape 2 : Convertir le steamID64

> [!NOTE]
> Les recruteurs ont souvent déjà le steamID64 converti, si c'est le cas, passez à l'étape suivante.

Nous avons besoin du steamID64 en héxadécimal. Pour ce faire utilisez [BinaryHex Converter](https://www.binaryhexconverter.com/decimal-to-hex-converter).

1. Dans le champs `Decimal Value` coller le steamID64.
2. Cliquer sur `Convert`.
3. Copier le résultat dans le champs `Hexadecimal Value`.
4. Convertir les lettres majuscules en lettres minuscules. *(Exemple: `1100001000100D6` en `1100001000100d6`.)*
5. Devant le résultat, mettre `steam:`  *(Exemple: `1100001000100D6` en `steam:1100001000100d6`.)*

## Étape 3 : Mettre le steamID64 dans la base de données

> [!ATTENTION]
> Si vous n'avez pas accès à la BDD, donnez le pseudonyme ainsi que le steamID64 converti du membre en question dans le canal `demandes-tests-et-vérif` du Discord de développement.

1. Se connecter à la base de données.
2. Selectionner la base de données *(`bdd_dev` ou `bdd_life`)*.
3. Se rendre dans la table `whitelist`.
4. Se rendre dans l'onglet `Données` *(dans le cas où vous utilisez HeidiSQL)*.
5. Insérer une ligne.
6. Insérer le pseudo dans la colonne `NomTS` *(préciser `2` en cas de second perso/compte)*.
7. Insérer le steamID64 dans la colonne `identifier`.

Bravo ! C'est terminé.

{docsify-updated}