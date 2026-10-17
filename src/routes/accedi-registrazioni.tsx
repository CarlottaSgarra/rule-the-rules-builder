import { createFileRoute } from "@tanstack/react-router";
import { RegistrazioniChiuse } from "@/components/landing/RegistrazioniChiuse";

// Le registrazioni sono chiuse: al posto del form di accesso c'è solo l'avviso.
export const Route = createFileRoute("/accedi-registrazioni")({
  head: () => ({
    meta: [
      { title: "Registrazioni non più disponibili — Rule The Rules 2026" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RegistrazioniChiuse,
});
