/**
 * Tiny bootstrap - the only generator code in a page's initial payload.
 *
 * The controller, the phonetics engine and the name JSON all arrive in a
 * separate chunk that is requested on the first interaction with the tool
 * (pointer, focus, or a Generate press). Pressing Generate before the chunk
 * lands is remembered and run as soon as it does.
 *
 * There is deliberately no idle/timed preload: requestIdleCallback armed on
 * `load` fires immediately on a page this light, which put the controller chunk
 * back onto the load-time critical path and into Lighthouse's TBT window for no
 * real benefit - the `submit` guard below already covers the visitor who
 * scrolls straight to Generate.
 */
const root = document.querySelector<HTMLElement>('[data-png-root]');

if (root) {
  let started = false;
  let pending = false;

  const start = (): void => {
    if (started) return;
    started = true;
    import('./generator')
      .then((module) => module.init(root, pending))
      .catch(() => {
        const status = root.querySelector<HTMLElement>('[data-png-status]');
        if (!status) return;
        // The dictionary is an attribute on the same element, so the message
        // stays in the page's language even when the chunk never arrives.
        let message = 'The generator could not load. Please refresh the page.';
        try {
          const parsed = JSON.parse(root.dataset.pngI18n ?? '{}') as { bootError?: string };
          if (parsed.bootError) message = parsed.bootError;
        } catch {
          /* fall back to English */
        }
        status.textContent = message;
      });
  };

  root.addEventListener('pointerdown', start, { once: true });
  root.addEventListener('focusin', start, { once: true });
  root.addEventListener(
    'submit',
    (event) => {
      if (!root.dataset.ready) {
        event.preventDefault(); // the controller is not listening yet
        pending = true;
        start();
      }
    },
    true
  );
}
