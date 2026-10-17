import { createFileRoute } from "@tanstack/react-router";
import { RegistrazioniChiuse } from "@/components/landing/RegistrazioniChiuse";

// Le registrazioni sono chiuse: niente più video, anche per chi aveva già
// fatto l'accesso. Resta solo l'avviso, come in /accedi-registrazioni.
export const Route = createFileRoute("/registrazioni")({
  head: () => ({
    meta: [
      { title: "Registrazioni non più disponibili — Rule The Rules 2026" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RegistrazioniChiuse,
});
