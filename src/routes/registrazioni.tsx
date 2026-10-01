import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { CtaButton } from "@/components/landing/CtaButton";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { checkRegistrazioniToken, REGISTRAZIONI_TOKEN_KEY } from "@/lib/registrazioni-auth";
import togliIlCostumeImg from "@/assets/togli-il-costume.jpg";
import licenziaLeRegoleImg from "@/assets/licenzia-le-regole.jpg";
import costruisciSistemaImg from "@/assets/costruisci-un-sistema-che-non-ti-comandi.jpg";

const AMBIZIOSA_HREF = "/candidatura-ambiziosa";

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
  const navigate = useNavigate();
  const [status, setStatus] = useState<"checking" | "granted" | "denied">("checking");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const token = localStorage.getItem(REGISTRAZIONI_TOKEN_KEY);
      if (!token) {
        if (!cancelled) setStatus("denied");
        return;
      }
      const result = await checkRegistrazioniToken({ data: { token } });
      if (!cancelled) setStatus(result.granted ? "granted" : "denied");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (status === "denied") {
      navigate({ to: "/accedi-registrazioni" });
    }
  }, [status, navigate]);

  if (status !== "granted") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-background">
        <p className="text-sm text-foreground/60">Verifica accesso…</p>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Banner in alto: registrazioni disponibili + candidature Ambiziosa aperte */}
      <div
        className="border-b border-border/60"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <p className="min-w-0 text-xs leading-tight sm:text-sm">
            <span
              className="mr-1.5 inline-block size-1.5 rounded-full align-middle"
              style={{ backgroundColor: "var(--primary)" }}
              aria-hidden
            />
            Le registrazioni sono disponibili fino a{" "}
            <strong className="font-semibold">venerdì 16 ottobre</strong>
            <span className="opacity-70"> · Sono aperte anche le candidature ad Ambiziosa</span>
          </p>
          <a
            href={AMBIZIOSA_HREF}
            className="shrink-0 rounded-md px-3 py-2 text-center font-condensed text-[10px] uppercase leading-tight tracking-[0.06em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:text-xs sm:tracking-[0.12em]"
            style={{
              backgroundImage: "var(--gradient-gold)",
              color: "var(--primary-foreground)",
            }}
          >
            Candidati ora
          </a>
        </div>
      </div>

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
              Sei <Highlight dark>Ambiziosa</Highlight> ma non vedi la luce su Instagram?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Ho aperto le candidature al mio percorso esclusivo Ambiziosa, un percorso di 4 mesi in
              cui andiamo a lavorare sulla tua identità, i tuoi contenuti, le tue offerte e sulla
              vendita. Più di 100 professioniste sono entrate all'interno del percorso e hanno avuto
              risultati incredibili.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton
                label="Candidati ora"
                sub="Le porte ad Ambiziosa chiudono venerdì 16 ottobre"
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
