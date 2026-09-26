# Extensions installées sur le site

> Auteur de la page: Pierre.

---

## Extensions Docsify

* [Full Text Search](https://docsify.js.org/#/plugins?id=full-text-search) : Permet de faire une recherche globale sur le site.
* [Emoji](https://docsify.js.org/#/plugins?id=emoji) : Permet d'insérer des emojis comme sur Discord :100:.
* [Zoom image](https://docsify.js.org/#/plugins?id=zoom-image) : Permet de zoomer sur les images en cliquant dessus.
* [docsify-edit-on-github](https://github.com/njleonzhang/docsify-edit-on-github) : Ajoute le lien "Éditer sur github" en haut à droite des pages.
* [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code) : Ajoute un bouton pour copier les blocs de code en un clic. Démo :

    ```lua
    print("Copie moi!")
    ```

* [docsify-tabs](https://jhildenbiddle.github.io/docsify-tabs/#/) : Permet de créer des onglets interactifs. Démo :

    <!-- tabs:start -->

    #### **English**

    Hello!

    #### **French**

    Bonjour!

    #### **Italian**

    Ciao!

    <!-- tabs:end -->

* [docsify-pagination](https://github.com/imyelo/docsify-pagination) : Ajoute la navigation "Précédent" et "Suivant" en bas de page.
* [docsify-plugin-flexible-alerts](https://github.com/fzankl/docsify-plugin-flexible-alerts) : Permet d'insérer des alertes callouts stylisées. Démo :

    > [!NOTE]
    > Une alerte de type 'note'.

    > [!TIP]
    > Une alerte de type 'tip'.

    > [!WARNING]
    > Une alerte de type 'warning'.

    > [!ATTENTION]
    > Une alerte de type 'attention'.

* [docsify-gifcontrol](https://gbodigital.github.io/docsify-gifcontrol/#/) : Permet de contrôler la lecture des fichiers GIF.
* [docsify-example-panels](https://vagnerdomingues.github.io/docsify-example-panels/#/) : Permet de créer des panneaux d'exemples interactifs.
* [docsify-footer](https://github.com/erickjx/docsify-footer-enh) : Ajoute un pied de page personnalisé en bas de chaque page.

---

## Modules personnalisés (développés pour le site)

* **theme-switcher.js** :
  Gestionnaire de thème sombre / clair natif Docsify v5 (remplace l'ancienne extension `docsify-darklight-theme`). Injecte dynamiquement le bouton de bascule, détecte les préférences système (`prefers-color-scheme`) et enregistre le choix de l'utilisateur dans le stockage local du navigateur (`localStorage`).
* **progressbar.js** :
  Barre de progression de lecture affichée en haut de l'écran lors du défilement, aux couleurs du thème (remplace `docsify-progress` qui altérait le DOM de Docsify v5).
* **lastmodified.js** :
  Plugin Docsify qui interroge dynamiquement l'API GitHub pour récupérer et afficher la date de dernière modification de chaque page, avec mise en cache locale (`sessionStorage` et `localStorage`) pour économiser les quotas de requêtes.
* **gitbook-toc.js** :
  Table des matières de page (TOC) façon GitBook ("Sur cette page") affichée dans une colonne dédiée à droite sur les grands écrans. Libère la barre de navigation de gauche pour une arborescence des pages épurée (`subMaxLevel: 0`). Intègre un défilement fluide (smooth scrolling), le suivi en direct de la position de lecture (ScrollSpy), la prise en charge native du thème clair/sombre et un masquage adaptatif automatique sur mobile et pages courtes.

---

[Retrouve ici la liste des extensions répertoriées sur Docsify.](https://docsify.js.org/#/awesome?id=plugins)
