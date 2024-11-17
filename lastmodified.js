// Docsify plugin pour ajouter la dernière date de modification
window.$docsify.plugins = [
    function(hook, vm) {
        // Obtenir les options de configuration depuis $docsify
        const config = vm.config || {};
        const repoUrl = config.repo || ''; // URL du dépôt
        const formatUpdated = config.formatUpdated || 'Dernière mise à jour de cette page le {DD}/{MM}/{YYYY} à {HH}:{mm}.'; // Format du texte

        // Extraire les informations du repo depuis l'URL
        const repoMatch = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!repoMatch) {
            console.error('Le format de repo est invalide. Exemple attendu : https://github.com/utilisateur/repo');
            return;
        }

        const [_, repoOwner, repoName] = repoMatch; // Extraire le propriétaire et le nom du repo

        // Utiliser l'API GitHub pour récupérer la date de dernière modification d'un fichier
        hook.afterEach(function(html, next) {
            const filePath = vm.route.file; // Récupérer le nom du fichier actuel directement via Docsify

            // Effectuer une requête pour obtenir les informations des commits depuis l'API GitHub
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des commits');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data[0] && data[0].commit && data[0].commit.committer) {
                        const lastModifiedDate = new Date(data[0].commit.committer.date); // Date de la dernière modification

                        // Formater la date selon les besoins
                        const replacements = {
                            '{DD}': lastModifiedDate.toLocaleDateString('fr-FR', { day: '2-digit' }),
                            '{MM}': lastModifiedDate.toLocaleDateString('fr-FR', { month: '2-digit' }),
                            '{YYYY}': lastModifiedDate.toLocaleDateString('fr-FR', { year: 'numeric' }),
                            '{HH}': lastModifiedDate.getHours().toString().padStart(2, '0'),
                            '{mm}': lastModifiedDate.getMinutes().toString().padStart(2, '0')
                        };

                        let formattedText = formatUpdated;
                        for (const key in replacements) {
                            formattedText = formattedText.replace(key, replacements[key]);
                        }

                        // Ajouter la date à la fin de la page
                        const footer = `<p>${formattedText}</p>`;
                        html += footer; // Ajouter le texte à la fin de la page

                        next(html); // Passer le contenu modifié au prochain hook
                    } else {
                        next(html); // Si pas de données, continuer sans ajouter de date
                    }
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                    next(html); // En cas d'erreur, continuer sans ajouter de date
                });
        });
    },
    ...(window.$docsify.plugins || []) // Assurer que les autres plugins Docsify restent intacts
];
