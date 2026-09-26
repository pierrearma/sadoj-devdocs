// Theme Switcher pour Docsify v5 (Mode Clair / Sombre)
(function() {
  const STORAGE_KEY = 'sadoj-docs-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function isDarkTheme() {
    const saved = getStoredTheme();
    return saved ? saved === 'dark' : prefersDark.matches;
  }

  function getDarkLink() {
    return document.getElementById('theme-dark');
  }

  function applyTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    const darkLink = getDarkLink();
    if (darkLink) {
      darkLink.disabled = !isDark;
    }
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
      btn.title = isDark ? 'Passer en mode clair' : 'Passer en mode sombre';
      btn.setAttribute('aria-label', btn.title);
    }
  }

  // 1. Appliquer immédiatement l'état au lien pour éviter tout flash au rechargement
  function earlyInit() {
    const isDark = isDarkTheme();
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    const darkLink = getDarkLink();
    if (darkLink) {
      darkLink.disabled = !isDark;
    }
  }

  // 2. Injecter les styles du bouton
  function injectStyles() {
    if (document.getElementById('theme-toggle-styles')) return;
    const style = document.createElement('style');
    style.id = 'theme-toggle-styles';
    style.textContent = `
      .theme-toggle-item {
        display: inline-flex;
        align-items: center;
        margin: 0;
        padding: 0 0.5rem;
      }
      .theme-toggle-btn {
        background: none;
        border: none;
        color: var(--color-text, currentColor);
        font-size: 1.05rem;
        cursor: pointer;
        padding: 4px;
        margin: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        line-height: 1;
        opacity: 0.85;
        transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
      }
      .theme-toggle-btn:hover {
        opacity: 1;
        color: var(--theme-color, #3498db);
        transform: scale(1.15);
      }
      /* Positionnement de repli si la barre supérieure n'est pas présente */
      body > .theme-toggle-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 100;
        background: var(--color-bg, #1f2428);
        border: 1px solid var(--border-color, #444);
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        padding: 8px;
      }

      /* Adaptation de docsify-tabs au thème sombre */
      html[data-theme="dark"] {
        --docsifytabs-border-color: #30363d;
        --docsifytabs-tab-background: #161b22;
        --docsifytabs-tab-background--active: var(--color-bg, #1f2428);
        --docsifytabs-tab-color: #8b949e;
        --docsifytabs-tab-color--active: var(--color-text, #ddd);
        --docsifytabs-tab-highlight-color: var(--theme-color, #3498db);
        --docsifytabs-content-background: var(--color-bg, #1f2428);
      }
    `;
    document.head.appendChild(style);
  }

  // 3. Monter le bouton dans .app-nav > ul ou body
  function mountButton() {
    injectStyles();

    let btn = document.getElementById('theme-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.className = 'theme-toggle-btn';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const newDark = !isDarkTheme();
        localStorage.setItem(STORAGE_KEY, newDark ? 'dark' : 'light');
        applyTheme(newDark);
      });
    }

    const navUl = document.querySelector('.app-nav > ul');
    if (navUl) {
      let navLi = document.getElementById('theme-toggle-li');
      if (!navLi) {
        navLi = document.createElement('li');
        navLi.id = 'theme-toggle-li';
        navLi.className = 'theme-toggle-item';
      }
      if (!navLi.contains(btn)) {
        navLi.appendChild(btn);
      }
      if (!navUl.contains(navLi)) {
        navUl.appendChild(navLi);
      }
    } else if (!document.body.contains(btn)) {
      document.body.appendChild(btn);
    }

    applyTheme(isDarkTheme());
  }

  // Observer pour maintenir le bouton dans .app-nav lors des re-rendus Docsify
  function setupObserver() {
    const observer = new MutationObserver(function() {
      const navUl = document.querySelector('.app-nav > ul');
      const navLi = document.getElementById('theme-toggle-li');
      if (navUl && (!navLi || !navUl.contains(navLi))) {
        mountButton();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Exécution précoce (si chargé dans <head> après #theme-dark)
  earlyInit();

  // Initialisation au chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      mountButton();
      setupObserver();
    });
  } else {
    mountButton();
    setupObserver();
  }

  // Écouter les changements de préférences système si aucun choix stocké
  prefersDark.addEventListener('change', function(e) {
    if (!getStoredTheme()) {
      applyTheme(e.matches);
    }
  });

  // API exposée
  window.ThemeSwitcher = {
    isDark: isDarkTheme,
    toggle: function() {
      const newDark = !isDarkTheme();
      localStorage.setItem(STORAGE_KEY, newDark ? 'dark' : 'light');
      applyTheme(newDark);
    },
    setTheme: function(theme) {
      localStorage.setItem(STORAGE_KEY, theme === 'dark' ? 'dark' : 'light');
      applyTheme(theme === 'dark');
    }
  };
})();
