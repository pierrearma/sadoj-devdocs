// Plugin Table of Contents (TOC) style GitBook pour Docsify v5
(function () {
  'use strict';

  // 1. Injection des styles CSS inspirés de GitBook
  function injectStyles() {
    if (document.getElementById('gitbook-toc-styles')) return;

    const style = document.createElement('style');
    style.id = 'gitbook-toc-styles';
    style.textContent = `
      :root {
        --gitbook-toc-width: 260px;
      }

      /* Masqué par défaut (mobile / tablette) */
      .gitbook-toc {
        display: none;
      }

      /* Affiché uniquement sur écrans larges façon GitBook */
      @media screen and (min-width: 1200px) {
        .gitbook-toc {
          display: block;
          position: fixed;
          top: calc(var(--navbar-height, 0px) + 3rem);
          right: 2rem;
          width: var(--gitbook-toc-width, 260px);
          max-height: calc(100vh - var(--navbar-height, 0px) - 5rem);
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: var(--color-mono-3, #ccc) transparent;
          z-index: 40;
          font-family: var(--font-family, sans-serif);
          font-size: var(--sidebar-font-size, var(--font-size, 15px));
          user-select: none;
        }

        .gitbook-toc::-webkit-scrollbar {
          width: 4px;
        }

        .gitbook-toc::-webkit-scrollbar-thumb {
          background-color: var(--color-mono-3, #ccc);
          border-radius: 4px;
        }

        .gitbook-toc::-webkit-scrollbar-thumb:hover {
          background-color: var(--color-mono-4, #999);
        }

        /* Lorsque la page n'a pas de sous-titres, masquer la TOC et recentrer le contenu */
        .gitbook-toc.is-empty {
          display: none !important;
        }

        /* Marge dédiée à droite sur le contenu pour éviter tout chevauchement */
        body:has(.gitbook-toc:not(.is-empty)) .content {
          padding-right: calc(var(--gitbook-toc-width, 260px) + 2.5rem);
          box-sizing: border-box;
        }
      }

      .gitbook-toc-inner {
        padding-left: 4px;
      }

      .gitbook-toc-title {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--sidebar-group-title-color, var(--color-mono-5, #888));
        margin-bottom: 0.75rem;
        padding-left: 0.85rem;
      }

      .gitbook-toc-list {
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border-left: 2px solid var(--color-mono-3, rgba(125, 125, 125, 0.25));
      }

      .gitbook-toc-item {
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
        line-height: 1.45;
      }

      .gitbook-toc-link {
        display: block;
        color: var(--sidebar-link-color, var(--color-text, currentColor));
        opacity: 0.85;
        text-decoration: none !important;
        font-size: var(--sidebar-font-size, var(--font-size, 15px));
        padding: 0.35rem 0.5rem 0.35rem 0.85rem;
        border-left: 2.5px solid transparent;
        margin-left: -2px;
        transition: color 0.15s ease, opacity 0.15s ease, border-color 0.15s ease;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }

      .gitbook-toc-link:hover {
        opacity: 1;
        color: var(--sidebar-link-color-active, var(--theme-color, #3498db)) !important;
        text-decoration: none !important;
      }

      .gitbook-toc-item.active > .gitbook-toc-link {
        opacity: 1;
        color: var(--sidebar-link-color-active, var(--theme-color, #3498db)) !important;
        font-weight: 600;
        border-left: 2.5px solid var(--sidebar-link-color-active, var(--theme-color, #3498db)) !important;
      }

      /* Indentation hiérarchique sans réduire la taille de police (façon GitBook) */
      .gitbook-toc-item.gitbook-toc-h2 > .gitbook-toc-link {
        padding-left: 0.85rem;
      }

      .gitbook-toc-item.gitbook-toc-h3 > .gitbook-toc-link {
        padding-left: 1.85rem;
      }

      .gitbook-toc-item.gitbook-toc-h4 > .gitbook-toc-link {
        padding-left: 2.85rem;
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Extraire le texte lisible d'un titre (sans l'icône d'ancre Docsify)
  function getHeadingText(el) {
    const span = el.querySelector('.anchor > span');
    if (span) {
      return span.innerText.trim() || span.textContent.trim();
    }
    const clone = el.cloneNode(true);
    clone.querySelectorAll('.anchor').forEach(function (a) { a.remove(); });
    return clone.innerText.trim() || clone.textContent.trim();
  }

  // 3. Définition du plugin Docsify
  function gitbookTocPlugin(hook, vm) {
    let tocAside = null;
    let scrollListener = null;
    let trackedHeadings = [];

    // Récupérer la configuration de l'utilisateur ou valeurs par défaut
    function getConfig() {
      const userToc = (vm.config && vm.config.toc) || {};
      return {
        title: userToc.title || 'Sur cette page',
        headings: userToc.headings || 'h2, h3',
        offset: typeof userToc.offset === 'number' ? userToc.offset : 80
      };
    }

    // Définir l'élément actif dans la TOC
    function setActiveId(id) {
      if (!tocAside) return;
      const allItems = tocAside.querySelectorAll('.gitbook-toc-item');
      let activeItem = null;

      allItems.forEach(function (item) {
        const link = item.querySelector('.gitbook-toc-link');
        if (link && link.getAttribute('data-id') === id) {
          item.classList.add('active');
          activeItem = item;
        } else {
          item.classList.remove('active');
        }
      });

      // Si la TOC a son propre défilement, garder l'élément actif visible
      if (activeItem && tocAside.scrollHeight > tocAside.clientHeight) {
        const asideRect = tocAside.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        if (itemRect.top < asideRect.top || itemRect.bottom > asideRect.bottom) {
          activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    }

    // ScrollSpy optimisé avec requestAnimationFrame
    function handleScroll(config) {
      if (!trackedHeadings.length) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Si tout en bas de la page, activer le dernier titre
      if (scrollY + windowHeight >= docHeight - 30) {
        const lastHeading = trackedHeadings[trackedHeadings.length - 1];
        if (lastHeading) setActiveId(lastHeading.id);
        return;
      }

      // Si tout en haut de la page
      if (scrollY < 50) {
        const firstHeading = trackedHeadings[0];
        if (firstHeading) setActiveId(firstHeading.id);
        return;
      }

      // Chercher le titre actuellement visible
      let currentId = null;
      for (let i = 0; i < trackedHeadings.length; i++) {
        const heading = trackedHeadings[i];
        const rect = heading.el.getBoundingClientRect();
        if (rect.top <= config.offset) {
          currentId = heading.id;
        } else {
          break;
        }
      }

      if (currentId) {
        setActiveId(currentId);
      } else if (trackedHeadings[0]) {
        setActiveId(trackedHeadings[0].id);
      }
    }

    // Initialisation au montage du DOM Docsify
    hook.mounted(function () {
      injectStyles();

      // Créer l'élément aside de la TOC
      tocAside = document.getElementById('gitbook-toc');
      if (!tocAside) {
        tocAside = document.createElement('aside');
        tocAside.id = 'gitbook-toc';
        tocAside.className = 'gitbook-toc is-empty';
        tocAside.setAttribute('aria-label', 'Table des matières de la page');

        // Insérer dans main ou body
        const main = document.querySelector('main') || document.body;
        main.appendChild(tocAside);
      }

      // Écouter les clics sur les liens de la TOC pour le smooth scroll
      tocAside.addEventListener('click', function (e) {
        const link = e.target.closest('.gitbook-toc-link');
        if (!link) return;

        e.preventDefault();
        const targetId = link.getAttribute('data-id');
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          const config = getConfig();
          const navOffset = (document.querySelector('.app-nav')?.offsetHeight || 0) + 20;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + (window.pageYOffset || document.documentElement.scrollTop) - navOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });

          // Mettre à jour l'URL sans recharger la page
          const href = link.getAttribute('href');
          if (href && window.history && window.history.pushState) {
            window.history.pushState(null, null, href);
          }

          setActiveId(targetId);
        }
      });
    });

    // À chaque rendu de page terminée
    hook.doneEach(function () {
      if (!tocAside) return;

      const config = getConfig();

      // Nettoyer l'ancien écouteur de défilement
      if (scrollListener) {
        window.removeEventListener('scroll', scrollListener);
        scrollListener = null;
      }

      // Sélectionner les titres dans la section markdown principale
      const contentSection = document.querySelector('.markdown-section');
      if (!contentSection) {
        tocAside.classList.add('is-empty');
        return;
      }

      const headingsEls = Array.from(contentSection.querySelectorAll(config.headings));

      // Si la page contient moins de 2 titres, masquer proprement la TOC
      if (headingsEls.length < 2) {
        tocAside.innerHTML = '';
        tocAside.classList.add('is-empty');
        trackedHeadings = [];
        return;
      }

      trackedHeadings = [];
      const listHtml = [];

      headingsEls.forEach(function (heading) {
        // Obtenir ou générer un identifiant pour l'ancre
        let id = heading.id;
        if (!id) {
          const anchor = heading.querySelector('.anchor');
          if (anchor) id = anchor.getAttribute('data-id');
        }
        if (!id) return; // Ignorer les titres sans ID

        const titleText = getHeadingText(heading);
        if (!titleText) return;

        trackedHeadings.push({ id: id, el: heading });

        const tagName = heading.tagName.toLowerCase();
        const levelClass = 'gitbook-toc-' + tagName;

        // Récupérer le href officiel généré par Docsify si disponible
        const anchor = heading.querySelector('.anchor');
        const href = anchor ? anchor.getAttribute('href') : '#?id=' + encodeURIComponent(id);

        listHtml.push(
          '<li class="gitbook-toc-item ' + levelClass + '">' +
            '<a class="gitbook-toc-link" href="' + href + '" data-id="' + id + '" title="' + titleText.replace(/"/g, '&quot;') + '">' +
              titleText +
            '</a>' +
          '</li>'
        );
      });

      if (!trackedHeadings.length) {
        tocAside.innerHTML = '';
        tocAside.classList.add('is-empty');
        return;
      }

      // Construire le DOM de la TOC
      tocAside.innerHTML = `
        <div class="gitbook-toc-inner">
          <div class="gitbook-toc-title">${config.title}</div>
          <nav class="gitbook-toc-nav">
            <ul class="gitbook-toc-list">
              ${listHtml.join('')}
            </ul>
          </nav>
        </div>
      `;
      tocAside.classList.remove('is-empty');

      // ScrollSpy avec throttling requestAnimationFrame
      let ticking = false;
      scrollListener = function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            handleScroll(config);
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', scrollListener, { passive: true });

      // Exécution initiale après un court délai pour laisser le rendu se stabiliser
      setTimeout(function () {
        handleScroll(config);
      }, 100);
    });
  }

  // 4. Enregistrement automatique dans Docsify
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(gitbookTocPlugin, window.$docsify.plugins || []);
})();
