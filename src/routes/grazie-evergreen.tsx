import { createFileRoute } from "@tanstack/react-router";
import html from "@/static-pages/grazie-evergreen.html?raw";

// Thank you finale del funnel evergreen di Rule the Rules (dopo il checkout e la pagina della call).
// Dal 26/11/2026 è una pagina HTML a sé con lo stesso design della pagina B: si modifica nel sistema di Andrea
// (clienti/carlotta-sgarra/pagine/rule-the-rules/thank-you-evergreen/, pagina-ty-body.html + build_vercel_ty.py)
// e qui si copia il file finito. Incorporata nel passaggio Systeme rules.carlottasgarra.it/grazie-iscrizione-standard-af4177f4.
export const Route = createFileRoute("/grazie-evergreen")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
