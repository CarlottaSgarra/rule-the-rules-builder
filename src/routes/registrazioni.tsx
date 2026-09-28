import { createFileRoute, redirect } from "@tanstack/react-router";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { CtaButton } from "@/components/landing/CtaButton";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { checkRegistrazioniAccess } from "@/lib/registrazioni-auth";
import togliIlCostumeImg from "@/assets/togli-il-costume.jpg";
import licenziaLeRegoleImg from "@/assets/licenzia-le-regole.jpg";
import costruisciSistemaImg from "@/assets/costruisci-un-sistema-che-non-ti-comandi.jpg";

// TODO: sostituire con il link reale alla pagina di candidatura di Ambiziosa Mentorship.
const AMBIZIOSA_HREF = "#ambiziosa-todo";

const recordings = [
  {
    n: "1",
    date: "5 ottobre",
    title: "Togli il Costume",
    description:
      "Prima di capire cosa pubblicare, abbiamo capito chi è rimasto sotto tutto quello che hai imparato a fare “bene”: identity excavation, il tuo DNA comunicativo e le tue Carte Identitarie.",
    poster: togliIlCostumeImg,
  },
  {
    n: "2",
    date: "6 ottobre",
    title: "Licenzia le Regole",
    description:
      "Abbiamo messo sul banco degli imputati tutte le regole sui contenuti che segui per obbligo, per arrivare alle tue Anti-Regole personali e al tuo Content Lab.",
    poster: licenziaLeRegoleImg,
  },
  {
    n: "3",
    date: "7 ottobre",
    title: "Costruisci un Sistema che non ti Comandi",
    description:
      "Abbiamo dato una struttura a tutto quello che avevi scoperto: i tuoi Signature Format, il piano editoriale al contrario e il Manifesto finale di Rule The Rules.",
    poster: costruisciSistemaImg,
  },
];

export const Route = createFileRoute("/registrazioni")({
  beforeLoad: async () => {
    const { granted } = await checkRegistrazioniAccess();
    if (!granted) {
      throw redirect({ to: "/accedi-registrazioni" });
    }
  },
  head: () => ({
    meta: [
      { title: "Recupera le registrazioni dell’evento — Rule The Rules 2026" },
      {
        name: "description",
        content: "Rivedi le registrazioni delle 3 serate di Rule The Rules 2026.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Registrazioni,
});

function Registrazioni() {
  return (
    <div className="bg-background">
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h1 className="text-center text-3xl sm:text-4xl">
              Recupera le <Highlight>registrazioni dell’evento</Highlight>
            </h1>
          </Reveal>

          <div className="mt-14 space-y-14">
            {recordings.map((r, i) => (
              <Reveal key={r.n} delay={i * 100}>
                <div className="grid gap-6 sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-10">
                  <div>
                    <p className="font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                      Serata {r.n} · {r.date}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                      {r.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
                      {r.description}
                    </p>
                  </div>
                  <div>
                    <VideoFrame label={r.title} poster={r.poster} duration="Video in arrivo" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-14 sm:px-8 sm:py-20">
        <div
          className="mx-auto max-w-4xl text-center"
          style={{ color: "var(--secondary-foreground)" }}
        >
          <Reveal>
            <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
              Il prossimo passo
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Pronta a portare tutto questo al <Highlight dark>livello successivo</Highlight>?
            </h2>
            {/* TODO: testo placeholder — sostituire con la descrizione definitiva di Ambiziosa Mentorship */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Ambiziosa Mentorship è il percorso pensato per chi non vuole fermarsi a un metodo, ma
              trasformarlo in un business riconoscibile: un accompagnamento su misura per portare la
              tua identità comunicativa dritta al risultato.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton
                label="Clicca qua per candidarti"
                sub="Candidatura gratuita, posti limitati"
                href={AMBIZIOSA_HREF}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
