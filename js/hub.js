/**
 * Checkpoint Master Hub - Interactive Controls
 * Allows live switching between projects, simulating mobile/tablet viewports,
 * and navigating smoothly.
 */

document.addEventListener('DOMContentLoaded', () => {
  const previewIframe = document.getElementById('previewIframe');
  const iframeWrapper = document.getElementById('iframeWrapper');
  const previewUrlDisplay = document.getElementById('previewUrlDisplay');
  const openExternalBtn = document.getElementById('openExternalBtn');

  // Switch between projects
  const switchButtons = document.querySelectorAll('[data-project-src]');
  switchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active classes
      switchButtons.forEach(b => b.classList.remove('active', 'btn-primary'));
      switchButtons.forEach(b => b.classList.add('btn-outline-light'));
      btn.classList.add('active', 'btn-primary');
      btn.classList.remove('btn-outline-light');

      const src = btn.getAttribute('data-project-src');
      const title = btn.getAttribute('data-project-title');

      if (previewIframe) {
        previewIframe.src = src;
      }
      if (previewUrlDisplay) {
        previewUrlDisplay.textContent = src;
      }
      if (openExternalBtn) {
        openExternalBtn.href = src;
      }
    });
  });

  // Switch Viewport sizes (Desktop / Tablet / Mobile)
  const viewportBtns = document.querySelectorAll('[data-viewport]');
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach(b => b.classList.remove('active', 'btn-light'));
      viewportBtns.forEach(b => b.classList.add('btn-outline-secondary'));
      btn.classList.add('active', 'btn-light');
      btn.classList.remove('btn-outline-secondary');

      const vp = btn.getAttribute('data-viewport');
      if (iframeWrapper) {
        iframeWrapper.classList.remove('viewport-desktop', 'viewport-tablet', 'viewport-mobile');
        iframeWrapper.classList.add(`viewport-${vp}`);
      }
    });
  });
});

