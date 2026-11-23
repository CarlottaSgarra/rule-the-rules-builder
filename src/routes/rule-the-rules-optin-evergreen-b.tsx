import { createFileRoute } from "@tanstack/react-router";
import html from "@/static-pages/rule-the-rules-optin-evergreen-b.html?raw";

// Versione B della pagina di iscrizione evergreen a Rule the Rules (struttura Bali Mastermind), da confrontare con la A.
// È una pagina HTML a sé, costruita con il design system di Rule the Rules:
// si modifica nel sistema di Andrea (clienti/carlotta-sgarra/pagine/
// rule-the-rules/pagina-evergreen-3-masterclass/versione-b/) e qui si copia il file finito.
export const Route = createFileRoute("/rule-the-rules-optin-evergreen-b")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
