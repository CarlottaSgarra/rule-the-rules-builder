import * as React from "react";

// Nome del messaggio postato al parent, così lo script della pagina che
// ospita l'iframe può filtrare solo i messaggi che gli interessano.
export const IFRAME_RESIZE_MESSAGE = "rule-the-rules:resize";

/**
 * Se la pagina è incorporata in un iframe (es. una pagina di systeme.io),
 * segnala continuamente al parent l'altezza reale del contenuto via
 * postMessage. Serve ad evitare il "doppio scroll": senza questo, l'iframe
 * ha un'altezza fissa e scrolla al suo interno separatamente dalla pagina
 * che lo ospita. Il parent deve avere uno script che ascolta questo
 * messaggio e imposta `iframe.style.height` di conseguenza (vedi
 * docs/DESIGN_SYSTEM.md).
 *
 * Non fa nulla se la pagina non è dentro un iframe (visita diretta).
 */
export function useIframeAutoResize() {
  React.useEffect(() => {
    if (window.self === window.top) return;

    let rafId: number | null = null;
    let lastHeight = 0;

    const postHeight = () => {
      const height = document.documentElement.scrollHeight;
      if (height === lastHeight) return;
      lastHeight = height;
      window.parent.postMessage({ source: IFRAME_RESIZE_MESSAGE, height }, "*");
    };

    // requestAnimationFrame lascia che il layout si stabilizzi prima di
    // misurare, evitando di inseguire una risposta a catena quando il parent
    // applica l'altezza che gli abbiamo appena inviato.
    const schedulePostHeight = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        postHeight();
      });
    };

    schedulePostHeight();

    const observer = new ResizeObserver(schedulePostHeight);
    observer.observe(document.documentElement);

    window.addEventListener("load", schedulePostHeight);
    window.addEventListener("resize", schedulePostHeight);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("load", schedulePostHeight);
      window.removeEventListener("resize", schedulePostHeight);
    };
  }, []);
}
