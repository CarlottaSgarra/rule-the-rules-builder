import { createFileRoute } from "@tanstack/react-router";
import html from "@/static-pages/upsell-call-evergreen.html?raw";

// Upsell della Call di Implementazione nel funnel evergreen di Rule the Rules.
// Dal 25/11/2026 è una pagina HTML a sé con lo stesso design della pagina B (/rule-the-rules-optin-evergreen-b):
// si modifica nel sistema di Andrea (clienti/carlotta-sgarra/pagine/rule-the-rules/upsell-call-evergreen/,
// pagina-upsell-body.html + build_vercel_upsell.py) e qui si copia il file finito.
// Incorporata nel passaggio Systeme rules.carlottasgarra.it/grazie-offerta-call-evergreen.
export const Route = createFileRoute("/upsell-call-evergreen")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
