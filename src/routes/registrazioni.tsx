import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { CtaButton } from "@/components/landing/CtaButton";
import { Countdown } from "@/components/landing/Countdown";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { checkRegistrazioniToken, REGISTRAZIONI_TOKEN_KEY } from "@/lib/registrazioni-auth";
import {
  CTA_SUB,
  MAX_SEATS,
  PRICE_LOCK_DEADLINE,
  APPLICATIONS_OPEN_AT,
  MENTORSHIP_STATS,
  PROGRAM_STATS,
} from "@/lib/ambiziosa-config";
import goldTexture from "@/assets/texture-gold.jpg";
import togliIlCostumeImg from "@/assets/togli-il-costume.jpg";
import licenziaLeRegoleImg from "@/assets/licenzia-le-regole.jpg";
import costruisciSistemaImg from "@/assets/costruisci-un-sistema-che-non-ti-comandi.jpg";

// La pagina può essere incorporata in un iframe (systeme.io): i link verso la
// pagina di Ambiziosa si aprono nella finestra principale, non nell'iframe.
const AMBIZIOSA_HREF = "/candidati-ambiziosa";
// Le registrazioni restano disponibili fino al 16 ottobre, lo stesso giorno in
// cui scade il prezzo bloccato di Ambiziosa.
const REGISTRAZIONI_DEADLINE = new Date(PRICE_LOCK_DEADLINE).getTime();
const AMBIZIOSA_OPEN_MS = new Date(APPLICATIONS_OPEN_AT).getTime();

// true dall'apertura delle candidature in poi. Ricontrolla ogni 30 secondi,
// così chi ha la pagina aperta vede comparire Ambiziosa senza ricaricare.
function useAmbiziosaOpen() {
  const [open, setOpen] = useState(() => Date.now() >= AMBIZIOSA_OPEN_MS);
  useEffect(() => {
    if (open) return;
    const id = setInterval(() => {
      if (Date.now() >= AMBIZIOSA_OPEN_MS) setOpen(true);
    }, 30_000);
    return () => clearInterval(id);
  }, [open]);
  return open;
}

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

// I 4 step di Ambiziosa, in sintesi (dalla pagina di vendita).
const ambiziosaPillars = [
  { title: "1. Radica chi sei", text: "Identità e sistema di offerte, con me." },
  {
    title: "2. Progetta i contenuti",
    text: "Strategia e piano editoriale su misura, con Sharon.",
  },
  {
    title: "3. Attiva i contenuti",
    text: "Si pubblica, editing identitario e strategie per vendere.",
  },
  {
    title: "4. Chiudi e scala",
    text: "Da follower a cliente, messaggi privati e call conoscitiva.",
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

function CandidatiButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={AMBIZIOSA_HREF}
      target="_top"
      className={`min-w-0 shrink-0 rounded-md px-2 py-1.5 text-center font-condensed text-[10px] uppercase leading-tight tracking-[0.03em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.12em] ${className}`}
      style={{ backgroundImage: "var(--gradient-gold)", color: "var(--primary-foreground)" }}
    >
      Candidati ora
    </a>
  );
}

// Topbar con le stesse ricette di SiteTopbar: in primo piano le candidature
// ad Ambiziosa, in secondo piano il countdown delle registrazioni.
function RegistrazioniTopbar({ ambiziosaOpen }: { ambiziosaOpen: boolean }) {
  if (!ambiziosaOpen) {
    return (
      <div
        className="sticky top-0 z-50 border-b border-border/60 backdrop-blur"
        style={
          {
            backgroundColor: "color-mix(in oklab, var(--secondary) 95%, transparent)",
            "--foreground": "var(--secondary-foreground)",
            "--muted-foreground": "oklch(0.85 0.03 40)",
          } as React.CSSProperties
        }
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1.5 px-4 py-2 sm:flex-row sm:gap-4 sm:px-5 lg:py-4">
          <span className="font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
            Registrazioni disponibili ancora per
          </span>
          <Countdown compact target={REGISTRAZIONI_DEADLINE} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="sticky top-0 z-50 border-b border-border/60 backdrop-blur"
      style={
        {
          backgroundColor: "color-mix(in oklab, var(--secondary) 95%, transparent)",
          "--foreground": "var(--secondary-foreground)",
          "--muted-foreground": "oklch(0.85 0.03 40)",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-2 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-4">
        <div className="flex items-center justify-between gap-2 lg:shrink-0 lg:justify-start lg:gap-3">
          <span
            className="inline-flex min-w-0 items-center rounded-full px-3 py-1 font-condensed text-[10px] uppercase leading-tight tracking-[0.15em] text-primary-foreground sm:text-xs lg:whitespace-nowrap"
            style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Candidature ad Ambiziosa aperte
          </span>
          <CandidatiButton className="lg:hidden" />
        </div>
        <div className="flex items-center justify-between gap-2 lg:justify-end lg:gap-4">
          <span className="font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs lg:whitespace-nowrap">
            <span className="lg:hidden">Registrazioni disponibili ancora per</span>
            <span className="hidden xl:inline">Registrazioni ancora per</span>
          </span>
          <Countdown compact target={REGISTRAZIONI_DEADLINE} />
          <CandidatiButton className="hidden whitespace-nowrap lg:inline-block" />
        </div>
      </div>
    </div>
  );
}

function Registrazioni() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"checking" | "granted" | "denied">("checking");
  const ambiziosaOpen = useAmbiziosaOpen();

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
      <RegistrazioniTopbar ambiziosaOpen={ambiziosaOpen} />

      {/* Hero */}
      <header
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-night)" }}
      >
        <img
          src={goldTexture}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-overlay"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-20 pt-16 text-center sm:pt-20">
          <Reveal>
            <p className="font-condensed text-xs uppercase tracking-[0.4em] text-secondary sm:text-sm">
              Rule The Rules 2026 · Le 3 serate
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">
              Recupera le <Highlight>registrazioni dell’evento</Highlight>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              Qui trovi le registrazioni delle 3 serate: rivedile con calma e riprendi gli esercizi
              al tuo ritmo.{" "}
              <strong className="font-semibold text-foreground">
                Restano disponibili fino a venerdì 16 ottobre.
              </strong>
            </p>
          </Reveal>
        </div>
      </header>

      {/* Le 3 registrazioni, nelle stesse card delle "3 serate" di Rule The Rules */}
      <section
        className="overflow-x-clip bg-secondary"
        style={{ color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="space-y-14">
            {recordings.map((r, i) => (
              <Reveal key={r.n} delay={i * 100}>
                <div className="group relative">
                  <div
                    className="relative grid gap-8 overflow-visible rounded-2xl border border-[color-mix(in_oklab,var(--background)_14%,transparent)] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center md:gap-10 md:overflow-hidden"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--background) 6%, transparent)",
                    }}
                  >
                    <span
                      className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[40rem] font-bold leading-none md:block"
                      style={{ color: "color-mix(in oklab, var(--primary) 16%, transparent)" }}
                      aria-hidden
                    >
                      {r.n}
                    </span>
                    <div className="relative">
                      <VideoFrame label={r.title} poster={r.poster} duration="Video in arrivo" />
                    </div>
                    <div className="relative">
                      <h2 className="text-2xl text-ink sm:text-3xl">{r.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                        {r.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-3 py-2 font-condensed text-[10px] font-semibold uppercase tracking-[0.05em] text-primary-foreground shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1 sm:-left-3 sm:translate-x-0 sm:px-5 sm:py-3 sm:text-base sm:tracking-[0.15em] md:-left-5 md:px-6"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    Serata {r.n} · {r.date}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Il prossimo passo: Ambiziosa (visibile dall'apertura delle candidature) */}
      {ambiziosaOpen ? (
        <section className="bg-background">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <span
                  className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  Il prossimo passo · Candidature aperte · {MAX_SEATS} posti
                </span>
                <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
                  Sei <Highlight>Ambiziosa</Highlight> ma non vedi la luce su Instagram?
                </h2>
                <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
                  <p>
                    Ho aperto le candidature ad{" "}
                    <strong className="font-semibold text-foreground">Ambiziosa</strong>, il mio
                    percorso esclusivo di 4 mesi che parte{" "}
                    <strong className="font-semibold text-foreground">martedì 20 ottobre</strong>:
                    io e il mio team lavoriamo con te sulla tua identità, la tua comunicazione, i
                    tuoi contenuti e la tua strategia.
                  </p>
                  <p>
                    Non è un corso registrato da guardare quando capita:{" "}
                    <strong className="font-semibold text-foreground">
                      dalle prime call mettiamo in pratica tutto sul tuo progetto
                    </strong>
                    , e ha già funzionato con centinaia di professioniste in settori completamente
                    diversi.
                  </p>
                  <p>
                    <strong className="font-semibold text-foreground">
                      I posti sono {MAX_SEATS} in tutto
                    </strong>{" "}
                    e i prezzi di oggi restano bloccati fino al 16 ottobre: dopo salgono.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <p className="mt-14 text-center font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                Nei 4 mesi lavoriamo in 4 step, sempre in questo ordine
              </p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {ambiziosaPillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="flex h-full gap-3 rounded-xl border border-border/70 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <div>
                      <p className="text-base font-semibold text-foreground">{p.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/85">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h3 className="mt-16 text-center text-2xl font-semibold text-foreground sm:text-3xl">
                Due versioni, <Highlight>stessi 4 mesi</Highlight> con me e il mio team
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-8">
                  <p className="font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                    Le call nei momenti chiave
                  </p>
                  <p className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
                    Ambiziosa Program
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {PROGRAM_STATS.map((s) => (
                      <span
                        key={s.label}
                        className="inline-flex items-baseline gap-1.5 rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs text-foreground/85 sm:text-sm"
                      >
                        <span className="font-display text-lg leading-none text-secondary">
                          {s.n}
                        </span>
                        {s.label}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/85 sm:text-base">
                    Il metodo Ambiziosa con le call nei momenti chiave:{" "}
                    <strong className="font-semibold text-foreground">
                      definisci la tua identità e ricevi una strategia di comunicazione costruita
                      sul tuo progetto
                    </strong>
                    .
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="ticket-border-glow relative h-full rounded-[1.75rem]">
                  <div
                    className="surface-cream flex h-full flex-col p-6 sm:p-8"
                    style={{
                      borderRadius: "1.75rem",
                      border: "2px solid var(--primary)",
                      boxShadow: "var(--shadow-gold)",
                    }}
                  >
                    <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                      Accompagnamento continuo per 4 mesi
                    </p>
                    <p className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                      Ambiziosa Mentorship
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {MENTORSHIP_STATS.map((s) => (
                        <span
                          key={s.label}
                          className="inline-flex items-baseline gap-1.5 rounded-full px-3 py-1.5 text-xs text-primary-foreground sm:text-sm"
                          style={{
                            backgroundImage: "var(--gradient-gold)",
                            boxShadow: "var(--shadow-gold)",
                          }}
                        >
                          <span className="font-display text-lg font-bold leading-none">{s.n}</span>
                          {s.label}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                      Tutto il Program con in più{" "}
                      <strong className="font-semibold text-ink">
                        un accompagnamento continuo per tutti i 4 mesi
                      </strong>
                      : una call a settimana con il mio team e una al mese con me.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-14 flex flex-col items-center text-center">
                <p className="max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                  In entrambi i casi arrivi alla fine dei 4 mesi con{" "}
                  <strong className="font-semibold text-foreground">
                    una strategia completa che hai già messo in pratica
                  </strong>{" "}
                  e sai come farla evolvere da sola.
                </p>
                <div className="mt-8 flex w-full justify-center">
                  <CtaButton
                    label="Candidati ad Ambiziosa"
                    sub={CTA_SUB}
                    href={AMBIZIOSA_HREF}
                    target="_top"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
