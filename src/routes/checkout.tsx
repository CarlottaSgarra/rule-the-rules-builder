import { createFileRoute } from "@tanstack/react-router";
import { Lock, ShieldCheck, Star, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Countdown } from "@/components/landing/Countdown";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { SignupForm } from "@/components/landing/SignupForm";
import { Highlight } from "@/components/landing/Highlight";
import { SiteTopbar } from "@/components/landing/SiteTopbar";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { valueStack, valueStackTotal, TICKET_PRICE } from "@/data/offer";
import garanziaImg from "@/assets/soddisfatto-o-rimborsato.png";
import carlottaPointingImg from "@/assets/carlotta-pointing.jpg";
import client1Img from "@/assets/client-1.jpg";
import client2Img from "@/assets/client-2.png";
import client3Img from "@/assets/client-3.png";
import client4Img from "@/assets/client-4.jpg";
import client5Img from "@/assets/client-5.png";
import client6Img from "@/assets/client-6.png";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Completa la tua iscrizione — Rule The Rules 2026" },
      {
        name: "description",
        content:
          "Assicurati il tuo posto a Rule The Rules 2026: 3 serate live dal 5 al 7 ottobre con Carlotta Sgarra. Solo 27€, garanzia soddisfatta o rimborsata.",
      },
      { property: "og:title", content: "Completa la tua iscrizione — Rule The Rules 2026" },
      {
        property: "og:description",
        content: "Il tuo posto a Rule The Rules 2026 ti aspetta. Solo 27€, garanzia di rimborso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const clientAvatars = [client1Img, client2Img, client3Img, client4Img, client5Img, client6Img];

const trustPoints = [
  { icon: Lock, label: "Pagamento sicuro e criptato" },
  { icon: Zap, label: "Accesso confermato via email in pochi minuti" },
  { icon: ShieldCheck, label: "Garanzia soddisfatta o rimborsata" },
];

const checkoutFaqs = [
  {
    q: "Cosa succede subito dopo l’iscrizione?",
    a: "Ricevi un’email di conferma con tutti i dettagli e il link Zoom per seguire le tre serate live.",
  },
  {
    q: "Come si seguono le serate?",
    a: "In diretta streaming su Zoom. Segna in agenda 5, 6 e 7 ottobre alle 19:30: ci vediamo lì.",
  },
  {
    q: "Posso chiedere un rimborso se cambio idea?",
    a: "Sì. Se dopo la prima serata pensi che “Rule The Rules” non faccia per te, scrivimi prima dell’inizio della seconda serata live (6 ottobre) e ti rimborso il biglietto, senza bisogno di spiegazioni.",
  },
  {
    q: "Il pagamento è sicuro?",
    a: "Sì, la transazione è gestita da un provider di pagamento certificato: i tuoi dati non passano né restano sui nostri server.",
  },
];

function Checkout() {
  return (
    <div className="bg-background">
      <SiteTopbar />

      {/* Intro */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
              style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Live su Zoom · 5-6-7 ottobre
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl">
              Il tuo posto a <Highlight>Rule The Rules 2026</Highlight> ti aspetta
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Completa l’iscrizione qui sotto: bastano due minuti e un investimento di 27€ per
              costruire, in tre serate, la tua identità comunicativa.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex justify-center">
              <div
                className="inline-flex flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 sm:flex-row sm:gap-3"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--secondary) 10%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--secondary) 18%, transparent)",
                }}
              >
                <div className="flex -space-x-3">
                  {clientAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="size-9 shrink-0 rounded-full border-2 object-cover"
                      style={{ borderColor: "var(--background)" }}
                    />
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex justify-center gap-0.5 text-secondary sm:justify-start">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-foreground/75 sm:text-sm">
                    <strong className="font-semibold text-foreground">
                      +1.500 professioniste formate
                    </strong>{" "}
                    hanno già rotto le loro regole
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Checkout box */}
      <section className="bg-background px-4 pb-14 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal delay={120}>
            <div className="ticket-border-glow relative rounded-[2rem]">
              <div
                id="iscriviti"
                className="relative overflow-hidden rounded-[2rem]"
                style={
                  {
                    backgroundImage:
                      "linear-gradient(100deg, var(--secondary) 0%, var(--secondary) 45%, color-mix(in oklab, var(--primary) 32%, var(--secondary)) 100%)",
                    border: "2px solid var(--primary)",
                    boxShadow:
                      "var(--shadow-gold), 0 60px 100px -30px color-mix(in oklab, var(--primary) 45%, transparent)",
                    "--foreground": "var(--secondary-foreground)",
                    "--muted-foreground": "oklch(0.85 0.03 40)",
                  } as React.CSSProperties
                }
              >
                <div className="grid grid-cols-1 text-left md:grid-cols-2">
                  <div className="p-6 sm:p-10">
                    <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                      Il tuo ordine
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                      Tutto quello che ricevi
                    </p>

                    <div className="mt-6 space-y-4 text-sm">
                      {valueStack.map((v) => (
                        <div key={v.t}>
                          <div className="flex items-baseline gap-2">
                            <span className="min-w-0 font-medium text-foreground">{v.t}</span>
                            <span
                              className="mb-1 flex-1 border-b border-dotted border-border"
                              aria-hidden
                            />
                            <span className="shrink-0">
                              {v.value ? (
                                <span className="text-muted-foreground line-through">
                                  {v.value}€
                                </span>
                              ) : (
                                <span className="text-muted-foreground">–</span>
                              )}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">{v.d}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-dashed border-border pt-4">
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="text-foreground">Valore totale</span>
                        <span className="text-muted-foreground line-through">
                          {valueStackTotal}€
                        </span>
                      </div>
                      <p className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
                        {TICKET_PRICE}€
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2.5">
                      {trustPoints.map((t) => (
                        <li
                          key={t.label}
                          className="flex items-center gap-2.5 text-sm text-foreground/85"
                        >
                          <t.icon className="size-4 shrink-0 text-secondary" />
                          <span>{t.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="border-t-2 border-dashed p-6 sm:p-10 md:border-l-2 md:border-t-0"
                    style={{
                      borderColor: "color-mix(in oklab, var(--primary) 55%, transparent)",
                    }}
                  >
                    <p className="text-center text-base font-semibold text-foreground">
                      Inserisci i tuoi dati per completare l’iscrizione
                    </p>
                    <SignupForm
                      className="mt-6"
                      submitSub={`Soli €${TICKET_PRICE} · 5-6-7 ottobre · Garanzia di rimborso`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Garanzia */}
      <section className="bg-background px-4 pb-14 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
          <Reveal>
            <img
              src={garanziaImg}
              alt="Garanzia soddisfatta o rimborsata al 100%"
              loading="lazy"
              className="mx-auto w-full max-w-xs"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              Iscriviti <Highlight>senza rischio</Highlight>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              Se dopo la prima serata pensi che “Rule The Rules” non faccia per te, scrivimi prima
              dell’inizio della seconda serata live (6 ottobre) e{" "}
              <strong className="font-semibold text-foreground">
                ti rimborso il biglietto, senza bisogno di spiegazioni
              </strong>
              .
            </p>
            <div className="mt-6 flex items-center gap-4 rounded-xl border border-border/70 bg-card/50 p-4">
              <img
                src={carlottaPointingImg}
                alt="Carlotta Sgarra"
                loading="lazy"
                className="size-16 shrink-0 rounded-full object-cover"
                style={{ objectPosition: "50% 12%" }}
              />
              <p className="text-sm font-bold leading-snug text-foreground">
                Parola di Carlotta: te lo rimborso per intero entro la seconda serata.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ rapide */}
      <section
        className="bg-secondary px-4 py-14 sm:px-8 sm:py-20"
        style={
          {
            color: "var(--secondary-foreground)",
            "--foreground": "var(--secondary-foreground)",
            "--muted-foreground": "oklch(0.85 0.03 40)",
            "--border": "color-mix(in oklab, var(--background) 14%, transparent)",
          } as React.CSSProperties
        }
      >
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              Prima di <Highlight dark>confermare</Highlight>
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {checkoutFaqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border/70">
                  <AccordionTrigger className="text-left text-base text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Ultimo richiamo */}
      <section className="bg-background px-4 py-14 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">
              Non lasciare che <Highlight>un’altra scusa</Highlight> ti fermi
            </h2>
            <p className="mt-3 text-base text-foreground/80">L’evento inizia tra</p>
            <div className="mt-3 flex justify-center">
              <Countdown />
            </div>
            <div className="mt-8 flex justify-center">
              <CtaButton
                label={`Ottieni il biglietto a soli ${TICKET_PRICE}€`}
                sub="5-6-7 ottobre · Garanzia rimborso"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
