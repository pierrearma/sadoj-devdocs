// Docsify plugin pour ajouter la dernière date de modification
window.$docsify = window.$docsify || {};
window.$docsify.plugins = [
    function(hook, vm) {
        // Obtenir les options de configuration depuis $docsify
        const config = vm.config || {};
        const repoUrl = config.repo || 'https://github.com/pierrearma/sadoj-devdocs'; // URL du dépôt
        const formatUpdated = config.formatUpdated || 'Dernière mise à jour de cette page le {DD}/{MM}/{YYYY} à {HH}:{mm}.'; // Format du texte

        // Extraire les informations du repo depuis l'URL
        const repoMatch = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!repoMatch) {
            console.error('Le format de repo est invalide. Exemple attendu : https://github.com/utilisateur/repo');
            return;
        }

        const [_, repoOwner, repoName] = repoMatch; // Extraire le propriétaire et le nom du repo

        function renderDate(dateStr, html) {
            const lastModifiedDate = new Date(dateStr);
            if (isNaN(lastModifiedDate.getTime())) return html;

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

            return html + `<p class="last-modified-date">${formattedText}</p>`;
        }

        // Utiliser l'API GitHub pour récupérer la date de dernière modification d'un fichier
        hook.afterEach(function(html, next) {
            // En Docsify v5, vm.route.file commence par un slash ('/index.md') qu'il faut retirer pour GitHub
            const filePath = (vm.route.file || '').replace(/^\/+/, '');
            if (!filePath) {
                return next(html);
            }

            // Vérifier le cache (session / local) pour éviter de saturer le quota GitHub (60 req/h)
            const cacheKey = 'docsify_lastmod_' + filePath;
            try {
                const cachedDate = sessionStorage.getItem(cacheKey) || localStorage.getItem(cacheKey);
                if (cachedDate) {
                    return next(renderDate(cachedDate, html));
                }
            } catch (e) {}

            // Effectuer une requête pour obtenir les informations des commits depuis l'API GitHub
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${encodeURIComponent(filePath)}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur HTTP ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    const commit = data && data[0] && data[0].commit;
                    const dateStr = commit && ((commit.committer && commit.committer.date) || (commit.author && commit.author.date));

                    if (dateStr) {
                        try {
                            sessionStorage.setItem(cacheKey, dateStr);
                            localStorage.setItem(cacheKey, dateStr);
                        } catch (e) {}
                        next(renderDate(dateStr, html));
                    } else {
                        next(html);
                    }
                })
                .catch(error => {
                    // En cas d'erreur réseau ou de rate limit, continuer sans bloquer l'affichage
                    next(html);
                });
        });
    },
    ...(window.$docsify.plugins || []) // Assurer que les autres plugins Docsify restent intacts
];
