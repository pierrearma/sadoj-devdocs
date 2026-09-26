// Barre de progression de lecture pour Docsify
(function() {
  function injectStyles() {
    if (document.getElementById('docsify-progress-styles')) return;
    const style = document.createElement('style');
    style.id = 'docsify-progress-styles';
    style.textContent = `
      .docsify-progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--theme-color, #3498db);
        z-index: 99999;
        transition: width 0.1s ease-out;
        width: 0%;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }

  function initProgressBar() {
    injectStyles();

    let bar = document.querySelector('.docsify-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'docsify-progress-bar';
      document.body.appendChild(bar);
    }

    function updateProgress() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    // Réinitialiser / recalculer lors du changement de page dans Docsify
    window.addEventListener('hashchange', function() {
      setTimeout(updateProgress, 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgressBar);
  } else {
    initProgressBar();
  }
})();
