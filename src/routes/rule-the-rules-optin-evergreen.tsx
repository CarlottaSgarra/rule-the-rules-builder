import { createFileRoute } from "@tanstack/react-router";
import html from "@/static-pages/rule-the-rules-optin-evergreen.html?raw";

// Pagina di iscrizione evergreen a Rule the Rules (3 masterclass a 37 €).
// È una pagina HTML a sé, costruita con il design system di Rule the Rules:
// si modifica nel sistema di Andrea (clienti/carlotta-sgarra/pagine/
// claude-design-iscrizione-registrazioni/) e qui si copia il file finito.
export const Route = createFileRoute("/rule-the-rules-optin-evergreen")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
