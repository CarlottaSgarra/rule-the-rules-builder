import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IdCard,
  CalendarDays,
  Heart,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Check,
  XCircle,
  Sparkles,
  ArrowRight,
  Quote,
  LayoutDashboard,
  Users,
  Video,
  ShieldCheck,
  Gift,
  Star,
  ArrowUpLeft,
} from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AmbiziosaTopbar } from "@/components/landing/AmbiziosaTopbar";
import { AmbiziosaCtaButton } from "@/components/landing/AmbiziosaCtaButton";
import { AmbiziosaHeroVideo } from "@/components/landing/AmbiziosaHeroVideo";
import { submitAmbiziosaApplication } from "@/lib/ambiziosa-application";
import carlottaPresentingImg from "@/assets/carlotta-presenting.jpg";
import sharonSpeakingImg from "@/assets/sharon-speaking.jpg";
import carlottaHugImg from "@/assets/carlotta-hug.jpg";
import carlottaLookingImg from "@/assets/carlotta-looking-2.jpg";
import elenaRosaImg from "@/assets/elena-rosa.jpg";
import silviaBedinImg from "@/assets/silvia-bedin.jpg";
import mariangelaSimioliImg from "@/assets/mariangela-simioli.jpg";
import giuliaSantelliImg from "@/assets/giulia-santelli.jpg";
import ilariaMatteiImg from "@/assets/ilaria-mattei.jpg";
import giuliaAriganelloImg from "@/assets/giulia-ariganello.jpg";

// ---------------------------------------------------------------------------
// Microcopy condiviso — l'hero (sezione 2) e ogni box CTA ricorrente
// (sezione 5) devono usare esattamente questo stesso testo, senza varianti.
// ---------------------------------------------------------------------------
const ANCHOR = "#candidatura";
const CTA_LABEL = "Voglio candidarmi ad Ambiziosa";
const REASSURANCE = "Candidatura gratuita, nessun impegno.";

// ---------------------------------------------------------------------------
// Dati reali (struttura e contenuti confermati)
// ---------------------------------------------------------------------------

const SECTORS = [
  "Coach",
  "Consulenti d'immagine",
  "Nutrizioniste",
  "Tatuatrici",
  "Makeup artist",
  "SEO e copywriter",
  "Wedding planner",
  "Brand strategist",
];

// Testi accorciati rispetto all'originale per stare nei riquadri a destra
// della sezione hero (su richiesta esplicita, non sono più il copy esatto).
const HERO_CHECKLIST = [
  "4 mesi di percorso, seguita da me con call dedicate",
  "Una strategia completa sulla tua identità e sulla tua unicità, costruita sul tuo progetto",
  "Contenuti che ti rispecchiano al 100%: sai sempre cosa pubblicare",
  "Un metodo già provato da centinaia di professioniste, in settori molto diversi",
];

const steps = [
  {
    n: "01",
    title: "Radica chi sei",
    subtitle: "Costruzione Identità e Offerta",
    description:
      "Costruiamo insieme la tua Identità e la tua Offerta: le basi di un business identitario e fruttuoso.",
  },
  {
    n: "02",
    title: "Progetta i contenuti",
    subtitle: "Costruzione Strategia Contenuti Identitaria e Piano Editoriale ad hoc",
    description:
      "Costruiamo la tua Strategia Contenuti Identitaria e il tuo Piano Editoriale ad hoc.",
  },
  {
    n: "03",
    title: "Attiva i contenuti",
    subtitle: "Pubblicazione con editing identitario e strategie per vendere",
    description:
      "Pubblichiamo i contenuti con editing identitario e strategie pensate per vendere.",
  },
  {
    n: "04",
    title: "Chiudi e scala",
    subtitle: "Dal follower al cliente, tra DM e call conoscitiva",
    description: "Trasformiamo il follower in cliente, tra DM e call conoscitiva.",
  },
];

const pricingTiers = [
  {
    id: "program",
    name: "Ambiziosa Program",
    payoff: "Trasformiamo la tua Ambizione in Carriera",
    price: "5.000€",
    priceNote: "IVA inclusa",
    duration: "4 mesi di percorso",
    recommended: true,
    features: [
      "Materiali audio/video ed esercizi pratici per ogni step",
      "5 call totali: 1 call iniziale + 1 call dopo ogni step",
      "GPT dedicato per i contenuti in stile alter-ego",
      "Notion dedicato al percorso",
      "Community Slack",
      "Lavoro diretto con Carlotta e Sharon",
      "Assistenza lunedì–giovedì, 10:00–16:00",
    ],
  },
  {
    id: "mentorship",
    name: "Ambiziosa Mentorship",
    payoff: "Trasformiamo la tua Ambizione in Carriera",
    price: "7.000€",
    priceNote: "IVA inclusa",
    duration: "4 mesi di percorso",
    recommended: false,
    features: [
      "Materiali audio/video ed esercizi pratici per ogni step",
      "Call 1:1 illimitate per tutti i 4 mesi",
      "GPT dedicato per i contenuti in stile alter-ego",
      "Notion dedicato al percorso",
      "Community Slack",
      "Lavoro diretto con Carlotta e Sharon",
      "Assistenza lunedì–giovedì, 10:00–16:00",
    ],
  },
];

const testimonials = [
  {
    name: "Elena Rosa",
    role: "Mental Coach Cinofila",
    metric: "Oltre 5.000€/mese",
    context: "Da nessuna struttura di business a oltre 5.000€/mese.",
    photo: elenaRosaImg,
  },
  {
    name: "Silvia Bedin",
    role: "Life Coach",
    metric: "31.000€ in organico",
    context: "Da 400€/mese (solo low ticket) a 31.000€ in organico in poche settimane.",
    photo: silviaBedinImg,
  },
  {
    name: "Mariangela Simioli",
    role: "Marketing Strategist",
    metric: "Regime forfettario superato",
    context: "Da licenziata con 500€ sul conto a superare il regime forfettario in 4 mesi.",
    photo: mariangelaSimioliImg,
  },
  {
    name: "Giulia Santelli",
    role: "Personal Trainer e Life Coach",
    metric: "Stipendio raddoppiato",
    context:
      "Da “criceto sulla ruota” a stipendio raddoppiato, clienti high ticket da 2.000€ con soli 6 contenuti.",
    photo: giuliaSantelliImg,
  },
  {
    name: "Ilaria Mattei",
    role: "SEO e Copywriter",
    metric: "6.500€/mese costanti",
    context:
      "Da prezzi troppo bassi e nessuna offerta chiara a 6.500€/mese costanti, 10.000€ raggiunti.",
    photo: ilariaMatteiImg,
  },
  {
    name: "Giulia Ariganello",
    role: "Business Mentor per Educatrici",
    metric: "Fatturato a 5 cifre",
    context: "Da nessuna direzione chiara a fatturato mensile a cinque cifre.",
    photo: giuliaAriganelloImg,
  },
];

const faqs = [
  {
    q: "Come funziona la candidatura, cosa succede dopo che la invio?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, riceverai una risposta entro 48 ore lavorative con i prossimi passi.",
  },
  {
    q: "Qual è la differenza tra Program e Mentorship?",
    a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat: l'impianto è identico, cambia solo la modalità delle call di accompagnamento.",
  },
  {
    q: "Devo aver già seguito Rule the Rules per candidarmi?",
    a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    q: "Quali sono le modalità di pagamento?",
    a: "Curabitur pretium tincidunt lacus, ut interdum tellus elit sed risus, maecenas eget condimentum velit, sit amet feugiat lectus, ne parliamo nel dettaglio durante la call di candidatura.",
  },
  {
    q: "Quanto tempo a settimana richiede il percorso?",
    a: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas, vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante donec eu libero.",
  },
  {
    q: "Funziona anche se il mio settore è molto tecnico/di nicchia?",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
  },
  {
    q: "Cosa succede se dopo la candidatura non vengo selezionata / decido di non proseguire?",
    a: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est.",
  },
];

const forWhoCards = [
  {
    n: "01",
    role: "La coach 1:1",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ha costruito le fondamenta ma non le ha ancora rese un sistema.",
  },
  {
    n: "02",
    role: "La consulente",
    lorem:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, sa esattamente chi è ma fatica a trasformarlo in contenuti che vendono.",
  },
  {
    n: "03",
    role: "La professionista con servizi 1:1",
    lorem:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, ha clienti soddisfatte ma nessun sistema per acquisirne di nuove con costanza.",
  },
  {
    n: "04",
    role: "La professionista in transizione",
    lorem:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sta cambiando direzione e vuole ripartire su basi solide, questa volta.",
  },
];

const notForYouPoints = [
  "Lorem ipsum dolor sit amet, stai cercando l'ennesimo corso da guardare senza mai applicarlo.",
  "Consectetur adipiscing elit, non hai ancora chiuso nessuna delle 3 serate di Rule the Rules.",
  "Sed do eiusmod tempor incididunt, cerchi un format già pronto invece di costruire il tuo sistema identitario.",
];

const scenarios = [
  "Lorem ipsum dolor sit amet, apri Instagram e sai esattamente cosa pubblicare oggi, senza ansia da pagina bianca.",
  "Consectetur adipiscing elit, rispondi a un DM e nel giro di pochi minuti fissi una call conoscitiva.",
  "Sed do eiusmod tempor incididunt, chiudi la settimana sapendo esattamente da dove arriveranno le prossime clienti.",
  "Ut labore et dolore magna aliqua, guardi il calendario dei contenuti e non è più un pensiero, è un sistema che gira da solo.",
  "Quis nostrud exercitation ullamco laboris, ti senti finalmente riconoscibile in un mercato pieno di professioniste uguali.",
];

const beforeAfterRows = [
  {
    before: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    after: "Tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    before: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    after: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    before: "Eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident.",
    after: "Sunt in culpa qui officia deserunt mollit anim id est laborum curabitur.",
  },
  {
    before: "Pretium tincidunt lacus, ut interdum tellus elit sed risus maecenas eget.",
    after: "Condimentum velit, sit amet feugiat lectus class aptent taciti sociosqu.",
  },
  {
    before: "Ad litora torquent per conubia nostra, per inceptos himenaeos pellentesque.",
    after: "Habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
  },
];

const marketBreakdown = [
  {
    label: "Una consulenza 1:1 su identità e posizionamento",
    value: "1.500€",
    unit: "una tantum",
  },
  {
    label: "Un percorso di content strategy dedicato",
    value: "2.200€",
    unit: "/ 3 mesi",
  },
  {
    label: "Accesso a una community di professioniste ambiziose",
    value: "600€",
    unit: "/ anno",
  },
  {
    label: "Accompagnamento diretto su vendita e chiusura clienti",
    value: "1.800€",
    unit: "/ 3 mesi",
  },
];

const stepMockups = [
  // 01 · Radica chi sei → mockup "Carta Identitaria"
  <div className="surface-card mx-auto w-full max-w-xs p-5" style={{ borderRadius: "1.25rem" }}>
    <div className="flex items-center gap-3">
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      >
        <IdCard className="size-5 text-primary-foreground" />
      </span>
      <div className="min-w-0">
        <p className="eyebrow">Carta Identitaria</p>
        <p className="text-sm font-semibold text-foreground">Il tuo DNA comunicativo</p>
      </div>
    </div>
    <div className="mt-4 space-y-2">
      {[100, 80, 90, 60].map((w, i) => (
        <div key={i} className="h-2 rounded-full bg-foreground/10" style={{ width: `${w}%` }} />
      ))}
    </div>
  </div>,
  // 02 · Progetta i contenuti → mockup piano editoriale
  <div className="surface-card mx-auto w-full max-w-xs p-5" style={{ borderRadius: "1.25rem" }}>
    <div className="flex items-center gap-3">
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      >
        <CalendarDays className="size-5 text-primary-foreground" />
      </span>
      <p className="text-sm font-semibold text-foreground">Piano editoriale ad hoc</p>
    </div>
    <div className="mt-4 grid grid-cols-4 gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-md"
          style={
            [0, 2, 5, 7].includes(i)
              ? { backgroundImage: "var(--gradient-gold)" }
              : { backgroundColor: "color-mix(in oklab, var(--foreground) 8%, transparent)" }
          }
        />
      ))}
    </div>
  </div>,
  // 03 · Attiva i contenuti → mockup post pubblicato
  <div
    className="surface-card mx-auto w-full max-w-xs overflow-hidden"
    style={{ borderRadius: "1.25rem" }}
  >
    <div className="flex items-center gap-2 p-3">
      <span className="size-7 shrink-0 rounded-full bg-foreground/15" />
      <div className="h-2 w-24 rounded-full bg-foreground/15" />
    </div>
    <div className="aspect-square w-full" style={{ backgroundImage: "var(--gradient-gold)" }} />
    <div className="flex items-center gap-3 p-3 text-primary">
      <Heart className="size-4 fill-current" />
      <MessageCircle className="size-4" />
    </div>
  </div>,
  // 04 · Chiudi e scala → mockup DM → call
  <div
    className="surface-card mx-auto w-full max-w-xs space-y-2 p-5"
    style={{ borderRadius: "1.25rem" }}
  >
    <div
      className="ml-auto w-3/4 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-gold)" }}
    >
      Ciao! Mi racconti come lavori?
    </div>
    <div className="w-3/4 rounded-2xl rounded-tl-sm bg-foreground/10 px-3 py-2 text-xs text-foreground/80">
      Certo, prenotiamo una call conoscitiva?
    </div>
    <div className="mt-3 flex items-center gap-2 rounded-xl border border-primary/40 px-3 py-2 text-xs font-semibold text-secondary">
      <PhoneCall className="size-4" />
      Call conoscitiva fissata
    </div>
  </div>,
];

const inputClassName =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-card-foreground/50 focus:border-primary";

// ---------------------------------------------------------------------------

export const Route = createFileRoute("/candidati-ambiziosa")({
  head: () => ({
    meta: [
      { title: "Candidatura Ambiziosa — Program e Mentorship" },
      {
        name: "description",
        content:
          "Candidati ad Ambiziosa Program o Ambiziosa Mentorship: il percorso di mentoring per trasformare il lavoro fatto a Rule the Rules in un sistema di comunicazione e acquisizione clienti operativo.",
      },
    ],
  }),
  component: CandidaturaAmbiziosa,
});

function CtaBox({ context }: { context: string }) {
  return (
    <section className="bg-background px-4 py-14 sm:px-8 sm:py-16">
      <Reveal>
        <div
          className="ticket-border-glow relative mx-auto max-w-xl rounded-[1.75rem]"
          style={{ borderRadius: "1.75rem" }}
        >
          <div
            className="surface-cream flex flex-col items-center gap-4 p-6 text-center sm:p-8"
            style={{ borderRadius: "1.75rem" }}
          >
            <p className="text-sm leading-relaxed sm:text-base">{context}</p>
            <a
              href={ANCHOR}
              className="inline-flex w-full max-w-sm flex-col items-center rounded-xl px-6 py-4 text-center transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundImage: "var(--gradient-gold)",
                color: "var(--primary-foreground)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              <span className="font-condensed text-sm font-bold uppercase tracking-[0.06em] sm:text-base">
                {CTA_LABEL}
              </span>
            </a>
            <p className="text-xs text-ink-muted">{REASSURANCE}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// Stelline sparse sullo sfondo della sezione (non in un riquadro), tutte
// identiche, violacee e semitrasparenti, che fluttuano. Una è "indicata" da
// una freccia ma resta comunque indistinguibile dalle altre — quella sei tu.
const REFRAME_STARS = [
  { top: "10%", left: "6%", size: "size-5", delay: "0s", duration: "6s" },
  { top: "76%", left: "4%", size: "size-6", delay: "0.6s", duration: "5.5s" },
  { top: "6%", left: "40%", size: "size-5", delay: "0.3s", duration: "7.5s" },
  { top: "88%", left: "28%", size: "size-6", delay: "1.6s", duration: "6s" },
  { top: "34%", left: "90%", size: "size-5", delay: "0.9s", duration: "5s" },
  { top: "62%", left: "14%", size: "size-6", delay: "2.3s", duration: "7s" },
  { top: "28%", left: "18%", size: "size-5", delay: "1.1s", duration: "6.2s" },
  { top: "82%", left: "62%", size: "size-6", delay: "0.4s", duration: "6.8s" },
  { top: "50%", left: "86%", size: "size-5", delay: "1.8s", duration: "5.8s" },
  { top: "90%", left: "82%", size: "size-6", delay: "0.7s", duration: "7.2s" },
  { top: "16%", left: "70%", size: "size-7", delay: "1.4s", duration: "6.4s" },
];

function ReframeStarsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {REFRAME_STARS.map((s, i) => (
        <Star
          key={i}
          className={`animate-float absolute ${s.size}`}
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
            color: "color-mix(in oklab, var(--secondary) 28%, transparent)",
            fill: "color-mix(in oklab, var(--secondary) 28%, transparent)",
          }}
        />
      ))}
      <div
        className="absolute left-[46%] top-[18%] flex items-center gap-1.5 text-secondary/70 sm:left-[76%] sm:top-[22%]"
        style={{ transform: "rotate(-6deg)" }}
      >
        <ArrowUpLeft className="size-4 shrink-0" />
        <span className="whitespace-nowrap font-condensed text-[11px] font-bold uppercase tracking-[0.06em]">
          Tu sei questa
        </span>
      </div>
    </div>
  );
}

// Segno di spunta bordeaux su cerchio verde acido, per la lista di 4 punti
// della hero.
function HeroCheck() {
  return (
    <span
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: "var(--primary)" }}
      aria-hidden
    >
      <Check className="size-3" style={{ color: "var(--secondary)" }} strokeWidth={3} />
    </span>
  );
}

function CandidaturaAmbiziosa() {
  return (
    <div className="bg-background">
      {/* 1. Header sticky — AmbiziosaTopbar (stato aperto/chiuso, countdown, menu) */}
      <AmbiziosaTopbar />

      {/* 2. Hero */}
      <section className="bg-background px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            <strong className="font-bold">Ambiziosa:</strong> il mio programma per professioniste e
            imprenditrici che vogliono farsi riconoscere e trasformare l'ambizione in carriera
          </h1>

          <p className="mt-3 max-w-[900px] text-base text-foreground sm:text-lg">
            In questo momento ti senti una fotocopia di tante altre professioniste. Ma tu sai che il
            tuo business è unico e sei ambiziosa. Il punto è che ti manca solo un sistema che ti
            faccia veramente riconoscere da tutti e tiri fuori la tua identità.
          </p>

          <div className="mt-6 w-full">
            <AmbiziosaHeroVideo />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
            <div className="space-y-3 text-left">
              <p className="text-foreground" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Ambiziosa è il percorso di 4 mesi in cui lavoriamo insieme sulla tua identità per
                trasformarla in{" "}
                <strong className="font-semibold">una comunicazione che ti fa riconoscere</strong>.
              </p>
              <p className="text-foreground" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Inizi a pubblicare mentre studi il metodo, senza aspettare di aver finito la
                formazione:{" "}
                <strong className="font-semibold">
                  hai già tra le mani una strategia costruita sul tuo progetto
                </strong>
                .
              </p>
              <p className="text-foreground" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Alla fine arrivi con{" "}
                <strong className="font-semibold">
                  una strategia completa che hai già messo in pratica
                </strong>{" "}
                e sai come farla evolvere anche da sola.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {HERO_CHECKLIST.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "2px solid var(--secondary)",
                  }}
                >
                  <HeroCheck />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <AmbiziosaCtaButton variant="hero" />
          </div>
        </div>
      </section>

      {/* 6. Reframe del problema — subito dopo l'hero, stelline violacee e
          trasparenti sullo sfondo, titolo e testo centrali e corti */}
      <section className="relative flex min-h-[26rem] items-center overflow-hidden bg-background px-4 py-16 sm:min-h-[32rem] sm:px-8 sm:py-24">
        <ReframeStarsBackground />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Pubblichi ogni giorno, segui ogni regola dei guru. Eppure sei in burnout e i clienti
              non arrivano.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
              Il problema non è la costanza: è che la tua voce <Highlight>si è persa</Highlight> nel
              marasma delle professioniste che comunicano tutte allo stesso modo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6b. Escalation del dolore: mille corsi, mille contenuti, mille strategie */}
      <section
        className="px-4 py-14 text-center sm:px-8 sm:py-20"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="eyebrow">Ti riconosci?</p>
            <div className="mt-6 space-y-2 text-xl text-ink-muted opacity-70 sm:text-2xl">
              <p className="line-through decoration-2">Hai seguito mille corsi.</p>
              <p className="line-through decoration-2">Hai scritto mille contenuti.</p>
              <p className="line-through decoration-2">Hai applicato mille strategie diverse.</p>
            </div>
            <p className="mt-8 text-3xl sm:text-4xl">
              Eppure, <Highlight dark>niente funziona</Highlight>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Riprova sociale immediata */}
      <section className="bg-background px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="text-lg leading-snug text-foreground sm:text-xl">
            Ci sarà un motivo se{" "}
            <strong className="font-semibold">
              Ambiziosa ha funzionato con centinaia di professioniste diverse
            </strong>{" "}
            in settori completamente diversi tra di loro, no?
          </p>
        </div>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {SECTORS.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full px-3 py-1 font-condensed text-[10px] font-semibold uppercase tracking-[0.06em] sm:text-xs sm:tracking-[0.1em]"
              style={{ backgroundColor: "var(--primary)", color: "var(--secondary)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* 4. Card segmentazione pubblico */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Ambiziosa è per te se ti riconosci in una di queste
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {forWhoCards.map((c, i) => (
              <Reveal key={c.role} delay={i * 60}>
                <div className="surface-card h-full p-6">
                  <span className="font-condensed text-2xl font-bold text-primary/70">{c.n}</span>
                  <p className="mt-2 text-base font-semibold text-foreground">{c.role}</p>
                  {/* LOREM - sezione 4, card {c.role}, sostituire con copy reale */}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.lorem}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="surface-card mx-auto mt-6 max-w-2xl p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-destructive">
                Non fa per te se
              </p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {notForYouPoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Box CTA isolato ricorrente #1 */}
      <CtaBox context="Lorem ipsum dolor sit amet, consectetur adipiscing elit: da qui puoi trasformare tutto quello che hai costruito in un sistema che lavora per te ogni giorno." />

      {/* 7. Cerniera visiva problema → soluzione */}
      <section
        className="px-4 py-16 text-center sm:px-8 sm:py-24"
        style={{ backgroundImage: "linear-gradient(180deg, var(--background), var(--cream))" }}
      >
        <Reveal>
          <Sparkles className="mx-auto size-8 text-primary" />
          {/* LOREM - sezione 7, cerniera, sostituire con copy reale */}
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl leading-snug text-ink sm:text-3xl">
            Lorem ipsum dolor sit amet: la differenza è sempre lo stesso ingrediente mancante, un
            sistema.
          </h2>
          <a
            href="#step-1"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary underline underline-offset-4"
          >
            Scopri come funziona Ambiziosa
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </section>

      {/* 8. I 4 step del percorso */}
      <section id="step-1" className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Il percorso in <Highlight>4 step</Highlight>
            </h2>
          </Reveal>

          <div className="mt-14 space-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div
                  className={`grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-12 ${
                    i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <span className="font-condensed text-5xl font-bold text-primary/50 sm:text-6xl">
                      {s.n}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.04em] text-secondary">
                      {s.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {s.description}
                    </p>
                  </div>
                  <div>{stepMockups[i]}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Prima/dopo a colonne specchiate */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Cosa cambia, riga per riga
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div
              className="space-y-4 rounded-2xl border-2 p-6"
              style={{ borderColor: "var(--destructive)" }}
            >
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-destructive">
                Prima
              </p>
              {beforeAfterRows.map((r) => (
                <p key={r.before} className="text-sm leading-relaxed text-foreground/75">
                  {r.before}
                </p>
              ))}
            </div>
            <div
              className="space-y-4 rounded-2xl border-2 p-6"
              style={{ borderColor: "var(--primary)" }}
            >
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                Dopo
              </p>
              {beforeAfterRows.map((r) => (
                <p key={r.after} className="text-sm leading-relaxed text-foreground/75">
                  {r.after}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Proiezione di scenari futuri concreti */}
      <section
        className="px-4 py-14 sm:px-8 sm:py-20"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={carlottaHugImg}
              alt="Carlotta Sgarra con una professionista che segue il suo metodo"
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl sm:text-3xl">
              Immagina tra <Highlight dark>4 mesi</Highlight>
            </h2>
            <div className="mt-6 space-y-4">
              {scenarios.map((s, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-muted sm:text-base">
                  {s}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. Presentazione dei 2 livelli */}
      <section id="prezzi" className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Scegli il tuo livello di accompagnamento
            </h2>
            {/* LOREM - sezione 11, intro card prezzi, sostituire con copy reale */}
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pricingTiers.map((tier) => (
              <Reveal key={tier.id} delay={tier.recommended ? 0 : 80}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
                    tier.recommended ? "surface-cream" : "surface-card"
                  }`}
                  style={tier.recommended ? { boxShadow: "var(--shadow-gold)" } : undefined}
                >
                  {tier.recommended ? (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary-foreground"
                      style={{ backgroundImage: "var(--gradient-gold)" }}
                    >
                      Consigliato
                    </span>
                  ) : null}
                  <p className="font-condensed text-xs uppercase tracking-[0.15em] text-primary">
                    {tier.name}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{tier.payoff}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-xs opacity-70">{tier.priceNote}</span>
                  </div>
                  <p className="mt-1 text-sm opacity-80">{tier.duration}</p>

                  <ul className="mt-6 flex-1 space-y-2.5 text-sm leading-relaxed">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={ANCHOR}
                    className="mt-6 inline-flex w-full flex-col items-center rounded-xl px-6 py-4 text-center transition-transform duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundImage: "var(--gradient-gold)",
                      color: "var(--primary-foreground)",
                      boxShadow: "var(--shadow-gold)",
                    }}
                  >
                    <span className="font-condensed text-sm font-bold uppercase tracking-[0.06em]">
                      Candidati per {tier.name}
                    </span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Bio di Carlotta e Sharon */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Non sei sola nel percorso: <Highlight>lavori con me e con Sharon</Highlight>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal delay={40}>
              <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
                <img
                  src={carlottaPresentingImg}
                  alt="Carlotta Sgarra"
                  loading="lazy"
                  className="size-24 shrink-0 rounded-full object-cover sm:size-28"
                />
                <div>
                  <p className="text-lg font-semibold text-foreground">Carlotta Sgarra</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-secondary">
                    Founder di Rule the Rules
                  </p>
                  {/* LOREM - sezione 12, bio Carlotta, sostituire con copy reale */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua: lavoro con te soprattutto
                    sull'identità, sull'offerta e sulla vendita, gli step 1 e 4 del percorso.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
                <img
                  src={sharonSpeakingImg}
                  alt="Sharon Convertino"
                  loading="lazy"
                  className="size-24 shrink-0 rounded-full object-cover sm:size-28"
                  style={{ objectPosition: "45% 30%" }}
                />
                <div>
                  <p className="text-lg font-semibold text-foreground">Sharon Convertino</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-secondary">
                    Esperta di contenuti
                  </p>
                  {/* LOREM - sezione 12, bio Sharon, sostituire con copy reale */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat: lavoro con te soprattutto sui contenuti, sul
                    piano editoriale e sull'operatività quotidiana, gli step 2 e 3 del percorso.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. → CtaBox #2, dopo il reframe (sezione 6) */}
      <CtaBox context="Lorem ipsum dolor sit amet: se ti riconosci in quello che hai appena letto, il prossimo passo è uno solo." />

      {/* 13. Anteprima della piattaforma/area riservata */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              La tua area dedicata durante i 4 mesi
            </h2>
          </Reveal>
          <Reveal delay={60}>
            {/* placeholder: sostituire con uno screenshot reale dell'area Notion/Slack */}
            <div
              className="surface-card mt-8 flex aspect-video w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-primary/40 p-6"
              style={{ borderRadius: "1.5rem" }}
            >
              <LayoutDashboard className="size-10 text-primary/60" />
              <p className="text-center text-sm text-muted-foreground">
                Mockup illustrativo dell'area riservata — da sostituire con uno screenshot reale
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="surface-card p-4">
                <p className="font-condensed text-2xl font-bold text-secondary">4</p>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  Mesi
                </p>
              </div>
              <div className="surface-card p-4">
                <p className="font-condensed text-2xl font-bold text-secondary">5</p>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  Call*
                </p>
              </div>
              <div className="surface-card p-4">
                <p className="font-condensed text-2xl font-bold text-secondary">4</p>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  Step
                </p>
              </div>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              *5 call su Ambiziosa Program, illimitate su Ambiziosa Mentorship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 14. Bonus */}
      {/* BONUS DA CONFERMARE CON ANDREA - griglia pronta, contenuto e valori non ancora decisi */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              I bonus del percorso
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
              Griglia pronta per i bonus di Ambiziosa — titoli e valori da confermare con Andrea
              prima della pubblicazione.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {["01", "02", "03"].map((n, i) => (
              <Reveal key={n} delay={i * 60}>
                <div className="surface-card h-full border-2 border-dashed border-primary/40 p-6 text-center">
                  <Gift className="mx-auto size-6 text-primary/60" />
                  <p className="mt-3 font-condensed text-xs uppercase tracking-[0.15em] text-primary/70">
                    Bonus {n}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">Titolo da confermare</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Descrizione da confermare con Andrea.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-secondary">Valore: da confermare</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="surface-card mt-6 flex items-center justify-between gap-4 border-2 border-dashed border-primary/40 p-5 text-center sm:p-6">
              <p className="text-sm font-semibold text-foreground sm:text-base">
                Valore totale dei bonus
              </p>
              <p className="shrink-0 text-lg font-bold text-secondary sm:text-xl">Da confermare</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 15. Scomposizione del valore per componenti di mercato */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Quanto varrebbe tutto questo, separatamente?
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {marketBreakdown.map((row) => (
              <Reveal key={row.label} delay={40}>
                <div className="surface-card flex items-center justify-between gap-4 p-4 sm:p-5">
                  <p className="text-sm text-foreground sm:text-base">{row.label}</p>
                  <p className="shrink-0 whitespace-nowrap text-sm font-semibold text-secondary sm:text-base">
                    {row.value} <span className="font-normal opacity-70">{row.unit}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div
              className="surface-cream mt-6 flex items-center justify-between gap-4 p-5 sm:p-6"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <p className="text-sm font-semibold sm:text-base">
                Valore totale se acquistato separatamente
              </p>
              <p className="shrink-0 text-2xl font-bold sm:text-3xl">6.100€+</p>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Con Ambiziosa Program, tutto questo è incluso a partire da 5.000€.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 16. Testimonianze / casi studio */}
      <section
        id="storie"
        className="px-4 py-16 sm:px-8 sm:py-24"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-center">Risultati reali</p>
            <h2 className="mt-3 text-center text-3xl sm:text-4xl">
              Chi ha già percorso <Highlight dark>questa strada</Highlight>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div
                  className="flex h-full flex-col gap-4 rounded-2xl p-6"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--secondary) 82%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--primary) 25%, transparent)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      className="size-12 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.04em] text-ink-muted">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-condensed text-2xl font-bold text-primary" aria-hidden>
                    {t.metric}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    <Quote className="mr-1 mb-0.5 inline size-3.5 opacity-60" />
                    {t.context}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            {/* LOREM - sezione 16, disclaimer, sostituire con copy reale */}
            <div
              className="mx-auto mt-10 max-w-3xl border-l-2 pl-5 text-xs leading-relaxed text-ink-muted"
              style={{ borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit: i risultati riportati sono
              individuali e non rappresentano una promessa o garanzia di risultati futuri. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua: i risultati dipendono da
              variabili individuali come mercato di riferimento, applicazione pratica del metodo e
              impegno personale.
            </div>
          </Reveal>
        </div>
      </section>

      {/* 17. Storia/autorità di Carlotta */}
      <section className="bg-background">
        <img
          src={carlottaLookingImg}
          alt="Carlotta Sgarra"
          loading="lazy"
          className="aspect-[21/9] w-full object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-8 sm:py-20">
          <Reveal>
            {/* LOREM - sezione 17, storia di Carlotta, sostituire con copy reale */}
            <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-2 gap-4 py-2 sm:grid-cols-3">
                <div className="surface-card p-4 text-center">
                  <p className="font-condensed text-2xl font-bold text-secondary">1.500+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Professioniste guidate
                  </p>
                </div>
                <div className="surface-card p-4 text-center">
                  {/* NUMERO DA CONFERMARE CON ANDREA */}
                  <p className="font-condensed text-2xl font-bold text-secondary">XX</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Lorem ipsum
                  </p>
                </div>
                <div className="surface-card p-4 text-center">
                  {/* NUMERO DA CONFERMARE CON ANDREA */}
                  <p className="font-condensed text-2xl font-bold text-secondary">XX</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Lorem ipsum
                  </p>
                </div>
              </div>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* → CtaBox #3, dopo storytelling/autorità (sezione 17) */}
      <CtaBox context="Lorem ipsum dolor sit amet: se il mio percorso ti ha parlato, probabilmente Ambiziosa è la strada giusta anche per te." />

      {/* 17b. Rassicurazione sulla candidatura, sezione dedicata */}
      <section
        className="px-4 py-14 text-center sm:px-8 sm:py-20"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <Reveal>
          <ShieldCheck className="mx-auto size-10 text-primary" />
          <h2 className="mx-auto mt-4 max-w-xl text-2xl sm:text-3xl">
            Candidarti non ti impegna a <Highlight dark>nulla</Highlight>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            La candidatura è gratuita e non richiede nessun pagamento: leggiamo ogni candidatura
            personalmente e ti rispondiamo entro 48 ore lavorative con i prossimi passi. Deciderai
            solo dopo aver parlato con noi se procedere o meno.
          </p>
        </Reveal>
      </section>

      {/* 18. FAQ */}
      <section id="faq" className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Domande frequenti
            </h2>
          </Reveal>
          <Reveal delay={60}>
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

      {/* → CtaBox #4, prima del form finale */}
      <CtaBox context="Lorem ipsum dolor sit amet: sei a un passo dall'inviare la tua candidatura, qui sotto trovi il form." />

      {/* 19. Form di candidatura + chiusura finale */}
      <section id="candidatura" className="bg-background px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-secondary">
              <Users className="size-5" />
              <Video className="size-5" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Invia la tua candidatura
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground sm:text-base">
              Due opzioni disponibili: Ambiziosa Program (5.000€) e Ambiziosa Mentorship (7.000€).
              Compilando il form riceverai una risposta entro 48 ore, senza nessun impegno.
            </p>

            <div className="mt-8">
              <ApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState<"program" | "mentorship" | "unsure">("unsure");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const result = await submitAmbiziosaApplication({ data: { name, email, tier, message } });
      setStatus(result.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="surface-cream flex flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        {/* LOREM - sezione 19, messaggio di conferma, sostituire con copy reale */}
        <p className="text-lg font-semibold">Candidatura inviata!</p>
        <p className="text-sm leading-relaxed text-ink-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit: abbiamo ricevuto la tua
          candidatura e ti risponderemo entro 48 ore lavorative con i prossimi passi. Nessun
          pagamento è stato richiesto o effettuato in questa fase.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nome e cognome"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClassName}
      />
      <input
        type="email"
        name="email"
        placeholder="La tua email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClassName}
      />

      <fieldset className="space-y-2 rounded-lg border border-input p-4">
        <legend className="px-1 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
          Quale livello ti interessa?
        </legend>
        {(
          [
            { id: "program", label: "Ambiziosa Program (5.000€)" },
            { id: "mentorship", label: "Ambiziosa Mentorship (7.000€)" },
            { id: "unsure", label: "Non sono sicura, vorrei un consiglio" },
          ] as const
        ).map((opt) => (
          <label key={opt.id} className="flex items-center gap-2 text-sm text-card-foreground">
            <input
              type="radio"
              name="tier"
              value={opt.id}
              checked={tier === opt.id}
              onChange={() => setTier(opt.id)}
              className="accent-[var(--primary)]"
            />
            {opt.label}
          </label>
        ))}
      </fieldset>

      <textarea
        name="message"
        placeholder="Raccontami a che punto sei con il tuo business e cosa vorresti ottenere da questo percorso"
        required
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={inputClassName}
      />

      {status === "error" ? (
        <p className="text-center text-sm text-destructive">
          Qualcosa è andato storto, riprova tra poco.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full flex-col items-center rounded-xl px-6 py-4 transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
        style={{
          backgroundImage: "var(--gradient-gold)",
          color: "var(--primary-foreground)",
          boxShadow: "var(--shadow-gold)",
        }}
      >
        <span className="font-condensed text-base uppercase tracking-[0.1em] sm:text-lg sm:tracking-[0.14em]">
          {status === "submitting" ? "Invio in corso…" : "Invia la tua candidatura"}
        </span>
      </button>
    </form>
  );
}
