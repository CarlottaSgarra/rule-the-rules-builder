import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { SiteTopbar } from "@/components/landing/SiteTopbar";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { valueStack, valueStackTotal } from "@/data/offer";
import hoCreatoUnaziendaImg from "@/assets/ho-creato-unazienda-identita-riconoscibile.jpg";
import garanziaImg from "@/assets/soddisfatto-o-rimborsato.png";
import carlottaPointingImg from "@/assets/carlotta-pointing.jpg";

export const Route = createFileRoute("/upsell-story-identity-2")({
  head: () => ({
    meta: [
      { title: "Rule The Rules 2026: tutto quello che ti porti a casa" },
      {
        name: "description",
        content:
          "Il recap completo di Rule The Rules 2026, la garanzia di rimborso e le domande frequenti.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UpsellStoryIdentity2,
});

// TODO: sostituire con l'URL della pagina di checkout (il codice HTML
// del checkout viene inserito separatamente, non da questa app).
const SIGNUP_HREF = "#checkout-todo";

const faqs = [
  {
    q: "Cos’è esattamente Rule The Rules 2026?",
    a: (
      <>
        È uno show formativo in live streaming con me e il mio team, in tre serate dal 5 al 7
        ottobre 2026. Ti do gli strumenti per costruire la tua identità, il tuo metodo personale di
        creazione contenuti e{" "}
        <strong className="font-semibold text-foreground">
          un piano editoriale che è davvero tuo
        </strong>
        , non l’ennesimo format universale.
      </>
    ),
  },
  {
    q: "È un corso registrato o un evento dal vivo?",
    a: (
      <>
        È un <strong className="font-semibold text-foreground">evento dal vivo in streaming</strong>
        , ci connetteremo usando il software Zoom.
      </>
    ),
  },
  {
    q: "A chi è rivolto?",
    a: (
      <>
        A professioniste, coach, consulenti e imprenditrici che si sentono una fotocopia delle
        altre, sono stufe di seguire regole che non sentono loro, e{" "}
        <strong className="font-semibold text-foreground">
          vogliono costruire una comunicazione che parte davvero da chi sono
        </strong>
        .
      </>
    ),
  },
  {
    q: "Funziona anche nel mio settore?",
    a: (
      <>
        Sì. Ho già aiutato nutrizionisti, tatuatrici, consulenti d’immagine, coach, social media
        manager, make-up artist e tanti altri a smettere di comunicare come tutti gli altri nel loro
        settore. Il principio è lo stesso:{" "}
        <strong className="font-semibold text-foreground">
          parti dalla tua identità, non da un format che “funziona”
        </strong>
        .
      </>
    ),
  },
  {
    q: "E se non riesco a seguirlo live?",
    a: (
      <>
        Nessun problema: acquistando il biglietto hai accesso anche alla{" "}
        <strong className="font-semibold text-foreground">registrazione delle 3 serate</strong>,
        valida fino a <strong className="font-semibold text-foreground">venerdì 9 ottobre</strong>.
        Se vuoi rivedere l’evento senza limiti di tempo, fermarti sui passaggi cruciali o prenderti
        appunti con calma quando vuoi, nella schermata successiva puoi fare l’upgrade al biglietto
        VIP, che include l’accesso a vita alla registrazione e altri bonus.
      </>
    ),
  },
  {
    q: "Se non fa per me, posso riavere indietro i soldi?",
    a: (
      <>
        Sì. Se dopo la prima serata capisci che “Rule The Rules” non fa per te, scrivimi prima
        dell’inizio della seconda serata live (6 ottobre) e{" "}
        <strong className="font-semibold text-foreground">
          ti rimborso il biglietto, senza bisogno di spiegazioni
        </strong>
        .
      </>
    ),
  },
  {
    q: "Perché il prezzo è così basso?",
    a: (
      <>
        Perché Rule The Rules 2026 è l’introduzione al mio modo di lavorare: voglio che più
        professioniste possibile abbiano gli strumenti giusti per ritrovarsi nella propria
        comunicazione. Consideralo un biglietto d’ingresso:{" "}
        <strong className="font-semibold text-foreground">
          un prezzo accessibile per un contenuto che può cambiare il modo in cui ti presenti online
        </strong>
        .
      </>
    ),
  },
];

function UpsellStoryIdentity2() {
  return (
    <div className="bg-background">
      <SiteTopbar ctaHref={SIGNUP_HREF} />

      {/* Ricapitolando */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal delay={80}>
            <div className="surface-card grid overflow-hidden sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-64 w-full sm:h-full">
                <img
                  src={hoCreatoUnaziendaImg}
                  alt="Carlotta Sgarra durante un suo evento live"
                  loading="lazy"
                  width={1376}
                  height={2064}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "60% 25%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent" />
                <p className="absolute inset-x-0 top-0 p-5 text-lg font-semibold leading-snug text-white sm:p-6 sm:text-xl">
                  Ok, dopo tutto quello che hai letto, adesso direi che è il momento di iscriverti.
                </p>
              </div>
              <div className="p-6 sm:p-8">
                <span
                  className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  5-6-7 ottobre 2026 · Online
                </span>
                <p className="mt-3 text-lg font-semibold text-foreground sm:text-xl">
                  Facciamo un recap di <Highlight>tutto quello che ti porti a casa</Highlight> con
                  solo 27€ di iscrizione
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
                            <span className="text-muted-foreground line-through">{v.value}€</span>
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
                    <span className="text-muted-foreground line-through">{valueStackTotal}€</span>
                  </div>
                  <p className="mt-2 text-center text-4xl font-bold text-secondary sm:text-5xl">
                    27€
                  </p>
                </div>

                <div className="mt-6">
                  <CtaButton label="Ok, voglio iscrivermi" href={SIGNUP_HREF} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Garanzia rimborso */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-center gap-10 sm:grid-cols-2">
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
                Ancora <Highlight>non sei convinta</Highlight> fino in fondo?
              </h2>
              <p className="mt-3 text-base text-foreground/85">
                Don’t worry, c’è la garanzia di rimborso.
              </p>
              <p className="mt-8 font-condensed text-sm uppercase tracking-[0.2em] text-secondary">
                Come funziona?
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">
                Se dopo la prima serata pensi che “Rule The Rules” non faccia per te, scrivimi prima
                dell’inizio della seconda serata live (6 ottobre) e{" "}
                <strong className="font-semibold text-foreground">
                  ti rimborso il biglietto, senza bisogno di spiegazioni
                </strong>
                .
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-xl border border-border/70 bg-card/50 p-4">
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

          <Reveal>
            <div className="mt-14 flex justify-center">
              <CtaButton label="Mi iscrivo senza rischio" href={SIGNUP_HREF} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
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
              Domande <Highlight dark>Frequenti</Highlight>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Hai bisogno di supporto? Scrivi a{" "}
              <a
                href="mailto:info@carlottasgarra.it"
                className="underline"
                style={{ color: "var(--gold-deep)" }}
              >
                info@carlottasgarra.it
              </a>
            </p>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f) => (
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

      <SiteFooter />
    </div>
  );
}
