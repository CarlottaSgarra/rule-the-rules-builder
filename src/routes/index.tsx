import { createFileRoute } from "@tanstack/react-router";
import {
  Clapperboard,
  Copy,
  ImageIcon,
  Lock,
  ListChecks,
  PenLine,
  Presentation,
  ShieldAlert,
  Star,
  User,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/landing/CtaButton";
import { Countdown } from "@/components/landing/Countdown";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { Reveal } from "@/components/landing/Reveal";
import { SignupForm } from "@/components/landing/SignupForm";
import { Workbook } from "@/components/landing/Workbook";
import { Highlight } from "@/components/landing/Highlight";
import teamImg from "@/assets/team.jpg";
import iphoneImg from "@/assets/iphone-start.jpg";
import livestreamImg from "@/assets/livestream.jpg";
import goldTexture from "@/assets/texture-gold.jpg";
import testimonialImg from "@/assets/testimonial-1.jpg";
import heroImg from "@/assets/hero-carlotta.jpg";
import methodBgImg from "@/assets/method-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rule The Rules 2026: rompi le regole, costruisci la tua identità" },
      {
        name: "description",
        content:
          "3 serate live dal 5 al 7 ottobre con Carlotta Sgarra per smettere di comunicare come ti hanno insegnato e costruire il tuo modo di comunicare. Biglietto a 27€.",
      },
      {
        property: "og:title",
        content: "Rule The Rules 2026: rompi le regole, costruisci la tua identità",
      },
      {
        property: "og:description",
        content:
          "Tre serate live con Carlotta Sgarra per rompere le regole del marketing e ritrovarti nella tua comunicazione.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const avatarPlaceholders = [
  "oklch(0.55 0.09 40)",
  "oklch(0.5 0.1 280)",
  "oklch(0.6 0.12 20)",
  "oklch(0.45 0.08 200)",
  "oklch(0.58 0.1 140)",
];

const systemSteps = [
  {
    n: "01",
    tag: "Identità",
    label: "Radica chi sei",
    d: (
      <>
        Prima di scrivere anche un solo contenuto, mettiamo nero su bianco{" "}
        <strong className="font-semibold text-ink">chi sei davvero</strong>: voce, valori,
        contraddizioni, la tua storia. Senza questo, ogni regola che applichi ti allontana da te
        invece di avvicinarti a chi vuoi raggiungere.
      </>
    ),
  },
  {
    n: "02",
    tag: "Contenuti",
    label: "Le tue Anti-Regole",
    d: (
      <>
        Prendiamo hook, script, format che segui oggi per obbligo e li sostituiamo con{" "}
        <strong className="font-semibold text-ink">le tue regole</strong>: quelle che funzionano
        perché sono tue, non perché le ha dette un guru.
      </>
    ),
  },
  {
    n: "03",
    tag: "Piano editoriale",
    label: "Costruisci la tua strategia",
    d: (
      <>
        Trasformiamo identità e Anti-Regole in un piano editoriale che{" "}
        <strong className="font-semibold text-ink">riesci davvero a sostenere</strong>, non
        l’ennesimo calendario rigido che abbandoni dopo due settimane.
      </>
    ),
  },
];

const sessions = [
  {
    n: "1",
    date: "5 ottobre",
    time: "20:00",
    guides: [{ name: "Carlotta", role: "CEO e founder dell’evento" }],
    quote: "Prima di comunicare, devi tornare a te.",
    intro: (
      <>
        Partiamo da qui: chi sei quando togli la maschera della “professionista giusta”. Ti mostro
        il modello COSA/CHI/COME, analizziamo insieme un profilo, e costruisci le{" "}
        <strong className="font-semibold text-ink">tue prime Carte Identitarie</strong>. Chiudi la
        serata già sapendo cosa vuoi rappresentare e cosa non vuoi più rappresentare.
      </>
    ),
    bullets: [
      <>
        Il <strong className="font-semibold text-ink">modello COSA/CHI/COME</strong> per capire cosa
        dici, chi sei mentre lo dici, come lo comunichi
      </>,
      <>
        <strong className="font-semibold text-ink">Analisi live di un profilo</strong>: cosa vediamo
        oggi, cosa può diventare
      </>,
      <>
        Costruzione delle tue prime{" "}
        <strong className="font-semibold text-ink">Carte Identitarie</strong>
      </>,
    ],
  },
  {
    n: "2",
    date: "6 ottobre",
    time: "20:00",
    guides: [
      { name: "Carlotta", role: "CEO e founder dell’evento" },
      { name: "Sharon", role: "esperta di contenuti" },
    ],
    quote: "Il piano editoriale non è una gabbia.",
    intro: (
      <>
        Prendiamo ogni regola che ti hanno insegnato su hook, script, CTA e frequenza, e ti chiedo
        una sola domanda per ognuna: funziona per te? Da qui nascono{" "}
        <strong className="font-semibold text-ink">le tue Anti-Regole</strong> e il tuo primo metodo
        personale di creazione contenuti. Il giorno dopo crei un contenuto senza seguire nessuna
        regola, solo ascoltando te stessa.
      </>
    ),
    bullets: [
      <>
        Le regole che segui oggi (hook, script, CTA, frequenza){" "}
        <strong className="font-semibold text-ink">messe alla prova</strong>, una per una
      </>,
      <>
        Costruzione delle tue{" "}
        <strong className="font-semibold text-ink">Anti-Regole personali</strong>
      </>,
      <>
        Il tuo primo <strong className="font-semibold text-ink">metodo personale</strong> di
        creazione contenuti
      </>,
    ],
  },
  {
    n: "3",
    date: "7 ottobre",
    time: "20:00",
    guides: [{ name: "Carlotta", role: "CEO e founder dell’evento" }],
    quote: "Costruisci la tua strategia.",
    intro: (
      <>
        Identità più metodo personale diventano{" "}
        <strong className="font-semibold text-ink">una strategia vera</strong>. Con Sharon lavoriamo
        sulla struttura creativa (format, banca idee), poi trasformiamo tutto in un piano editoriale
        che ha una funzione per il tuo business, non solo per la tua immagine.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Struttura creativa</strong> con Sharon: format,
        tipologie di contenuto, banca idee
      </>,
      <>
        I <strong className="font-semibold text-ink">4 obiettivi</strong> di ogni contenuto:
        attrarre, connettere, posizionare, convertire
      </>,
      <>
        Le <strong className="font-semibold text-ink">5 domande guida</strong> per costruire il tuo
        piano editoriale, contenuto per contenuto
      </>,
    ],
  },
];

const outcomes = [
  "Le tue Carte Identitarie",
  "Le tue Anti-Regole personali",
  "Il tuo metodo personale di creazione contenuti",
  "I primi format da testare",
  "La tua banca idee",
  "La struttura del tuo piano editoriale",
];

const startingPointCards = [
  {
    id: "riscrivi",
    icon: PenLine,
    title: "La riscrittura infinita",
    text: (
      <>
        Apri Instagram con un’idea, la scrivi, la cancelli, la riscrivi{" "}
        <strong className="font-semibold text-foreground">“in un modo più professionale”</strong>.
      </>
    ),
  },
  {
    id: "font-diverso",
    icon: Copy,
    title: "La fotocopia involontaria",
    text: (
      <>
        Guardi il profilo di un’altra professionista del tuo settore e ti sembra di vedere il tuo,{" "}
        <strong className="font-semibold text-foreground">con un font diverso</strong>.
      </>
    ),
  },
  {
    id: "recitare",
    icon: Clapperboard,
    title: "La recita del Reel",
    text: (
      <>
        Quando registri un Reel ti senti{" "}
        <strong className="font-semibold text-foreground">
          recitare una parte che non ti appartiene
        </strong>
        .
      </>
    ),
  },
  {
    id: "non-riconosci",
    icon: ListChecks,
    title: "Tutto giusto, eppure niente",
    text: (
      <>
        Hai imparato hook, CTA, piano editoriale, frequenza di pubblicazione: hai fatto tutto come
        si deve, eppure oggi{" "}
        <strong className="font-semibold text-foreground">non ti riconosci più</strong> guardando il
        tuo profilo.
      </>
    ),
  },
  {
    id: "paura",
    icon: ShieldAlert,
    title: "La paura di rompere",
    text: (
      <>
        Hai paura che smettere di seguire le regole significhi{" "}
        <strong className="font-semibold text-foreground">
          far smettere di funzionare i tuoi contenuti
        </strong>
        .
      </>
    ),
  },
  {
    id: "gabbia",
    icon: Lock,
    title: "Il piano-gabbia",
    text: (
      <>
        Il piano editoriale che segui ti fa sentire{" "}
        <strong className="font-semibold text-foreground">in gabbia</strong> invece che aiutarti a
        crescere.
      </>
    ),
  },
];

const heroWhispers = [
  "SONO STUFA DI SEGUIRE LE REGOLE DI INSTAGRAM",
  "CHE PALLE QUESTI GANCI",
  "NON MI SENTO PIÙ",
  "NON MI RICONOSCO PIÙ IN QUELLO CHE PUBBLICO",
  "QUANDO REGISTRO MI SEMBRA DI RECITARE",
  "BASTA HOOK",
  "BASTA REGOLE",
  "BASTA COPIONI",
  "BASTA FORMULE",
  "BASTA PIANI EDITORIALI",
];

const forWhoYes = [
  "Ti senti una fotocopia delle altre professioniste del tuo settore",
  "Sei stanca di seguire regole che non senti tue",
  "Vuoi costruire un modo di comunicare che parte davvero da chi sei",
  "Hai già provato format e strategie “che funzionano” senza sentirti mai a tuo agio",
  "Vuoi un metodo tuo, non l’ennesimo format universale",
];

const forWhoNo = [
  "Cerchi la formula magica per il Reel che diventa virale",
  "Vuoi l’ennesimo corso su “come si fa un contenuto fatto bene”",
  "Non sei disposta a metterti in discussione sulla tua identità",
  "Cerchi scorciatoie senza costruire nulla di tuo",
];

const mythReality = [
  {
    myth: "Esiste un modo giusto di stare su Instagram, e devo trovarlo.",
    reality: (
      <>
        Il nemico non è Instagram. È l’idea che esista un modo giusto di starci. Non sei tu che devi
        adattarti a Instagram:{" "}
        <strong className="font-semibold text-foreground">
          è Instagram che deve iniziare ad avere la tua faccia
        </strong>
        .
      </>
    ),
  },
  {
    myth: "Fare tutto “come si deve” mi farà emergere.",
    reality: (
      <>
        Fare tutto “come si deve” è probabilmente il motivo per cui oggi nessuno riesce a
        distinguerti. Le regole ti hanno resa brava.{" "}
        <strong className="font-semibold text-foreground">
          Ora bisogna renderti riconoscibile.
        </strong>
      </>
    ),
  },
  {
    myth: "Se rompo le regole, i contenuti smettono di funzionare.",
    reality: (
      <>
        Non si tratta di eliminare le regole, ma di{" "}
        <strong className="font-semibold text-foreground">smettere di subirle</strong>. Una regola
        resta utile solo se ti aiuta a comunicare meglio senza farti sparire.
      </>
    ),
  },
  {
    myth: "Rompere le regole vuol dire fare quello che mi pare, senza strategia.",
    reality: (
      <>
        La libertà arriva da una struttura solida abbastanza da permetterti di essere creativa, non
        dal caos.{" "}
        <strong className="font-semibold text-foreground">
          Prima costruiamo l’identità. Poi la strategia attorno a te.
        </strong>{" "}
        Mai il contrario.
      </>
    ),
  },
  {
    myth: "Non so nemmeno chi sono “senza personaggio”.",
    reality: (
      <>
        Non devi mostrare la personalità in astratto. Devi trovare gli elementi concreti che ti
        rendono riconoscibile e non sostituibile. È un lavoro guidato,{" "}
        <strong className="font-semibold text-foreground">le Carte Identitarie</strong>. Non
        qualcosa che devi già sapere.
      </>
    ),
  },
];

const caseStudies = [
  { name: "Sofia", role: "Intervista completa", duration: "14:17" },
  { name: "Valentina Giuriato", role: "Intervista completa", duration: "20:05" },
  { name: "Dani", role: "Intervista completa", duration: "16:53" },
  { name: "Mariangela", role: "Intervista completa", duration: "26:17" },
  { name: "Ilaria Mattei", role: "Intervista completa", duration: "20:41" },
  { name: "Vanessa", role: "Intervista completa", duration: "16:30" },
  { name: "Jessica", role: "Intervista completa", duration: "14:43" },
  { name: "Giulia Ariganello", role: "Intervista completa", duration: "22:30" },
  {
    name: "Elisabetta Bettonte",
    role: "Da -10k a 6.000€ come Parent Coach",
    duration: "23:58",
  },
];

const storyStats = [
  { v: "500K+", l: "reach organico generato da Instagram" },
  { v: "Centinaia", l: "di professioniste italiane aiutate" },
  { v: "9", l: "storie di successo documentate" },
];

const beforeAfter = {
  before: [
    "Ogni contenuto è una performance: davanti alla camera ti senti “un’altra”.",
    "Segui regole che non senti tue, senza sapere se funzionano davvero per te.",
    "Il piano editoriale è una gabbia che ti fa sentire sempre in ritardo.",
    "I tuoi contenuti potrebbero essere pubblicati identici da qualsiasi altra professionista del tuo settore.",
  ],
  after: [
    "Riconosci come comunichi davvero, quando smetti di recitare.",
    "Hai le tue Anti-Regole personali, costruite su come sei fatta tu.",
    "Hai un piano editoriale che è uno strumento al tuo servizio, non il tuo capo.",
    "Il tuo modo di comunicare è impossibile da confondere con quello di un’altra.",
  ],
};

const twoPaths = {
  a: {
    title: "Continuare come adesso",
    d: "Profili tecnicamente corretti, contenuti fatti bene, script perfetti. E la sensazione, sempre uguale, di essere una fotocopia che nessuno ricorda.",
  },
  b: {
    title: "Costruire la tua comunicazione",
    d: "Parti dalla tua identità, costruisci il tuo metodo, hai finalmente un piano editoriale che è tuo. E che ti rende riconoscibile.",
  },
};

const workbookDays = [
  {
    t: "Giorno 1 · Chi sono",
    d: (
      <>
        Le tue Carte Identitarie: il documento in cui metti nero su bianco{" "}
        <strong className="font-semibold text-foreground">cosa ti rende riconoscibile</strong>.
      </>
    ),
  },
  {
    t: "Giorno 2 · Come comunico",
    d: (
      <>
        Le tue Anti-Regole personali e{" "}
        <strong className="font-semibold text-foreground">il tuo Content Lab</strong>, per iniziare
        a creare contenuti con il tuo metodo.
      </>
    ),
  },
  {
    t: "Giorno 3 · Come costruisco il sistema",
    d: (
      <>
        Format, banca idee e{" "}
        <strong className="font-semibold text-foreground">
          la struttura del tuo piano editoriale
        </strong>
        , costruito insieme durante la serata.
      </>
    ),
  },
];

const valueStack = [
  { t: "Accesso alle 3 serate live", d: "Dal 5 al 7 ottobre, in diretta streaming.", value: 97 },
  { t: "Workbook completo", d: "Il documento che ti accompagna serata per serata.", value: 47 },
  {
    t: "Le tue Carte Identitarie",
    d: "Il documento su cosa ti rende riconoscibile.",
    value: 67,
  },
  {
    t: "Le tue Anti-Regole personali",
    d: "L’alternativa alle regole che non senti tue.",
    value: 67,
  },
  { t: "Il tuo Content Lab", d: "Il tuo metodo personale di creazione contenuti.", value: 97 },
  {
    t: "La struttura del tuo piano editoriale",
    d: "Costruita insieme durante la terza serata.",
    value: 97,
  },
  {
    t: "Garanzia soddisfatta o rimborsata",
    d: "Fino all’inizio della seconda serata.",
    value: null,
  },
];

const valueStackTotal = valueStack.reduce((sum, v) => sum + (v.value ?? 0), 0);

const faqs = [
  {
    q: "Cos’è esattamente Rule The Rules 2026?",
    a: (
      <>
        È uno show formativo in live streaming con Carlotta Sgarra e il suo team, in tre serate dal
        5 al 7 ottobre 2026. Ti do gli strumenti per costruire la tua identità, il tuo metodo
        personale di creazione contenuti e{" "}
        <strong className="font-semibold text-ink">un piano editoriale che è davvero tuo</strong>,
        non l’ennesimo format universale.
      </>
    ),
  },
  {
    q: "È un corso registrato o un evento dal vivo?",
    a: (
      <>
        È un <strong className="font-semibold text-ink">evento dal vivo in streaming</strong>, ci
        connetteremo usando il software Zoom.
      </>
    ),
  },
  {
    q: "A chi è rivolto?",
    a: (
      <>
        A professioniste, coach, consulenti e imprenditrici che si sentono una fotocopia delle
        altre, sono stufe di seguire regole che non sentono loro, e{" "}
        <strong className="font-semibold text-ink">
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
        Sì. Carlotta ha già aiutato nutrizionisti, tatuatrici, consulenti d’immagine, coach, social
        media manager, make-up artist e tanti altri a smettere di comunicare come tutti gli altri
        nel loro settore. Il principio è lo stesso:{" "}
        <strong className="font-semibold text-ink">
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
        Con il biglietto standard puoi seguire solo in diretta, non è prevista la registrazione. Se
        vuoi rivedere l’evento tutte le volte che vuoi, fermarti sui passaggi cruciali o prenderti
        appunti con calma,{" "}
        <strong className="font-semibold text-ink">
          scegli il biglietto VIP, che include la registrazione completa
        </strong>
        .
      </>
    ),
  },
  {
    q: "Se non fa per me, posso riavere indietro i soldi?",
    a: (
      <>
        Sì. Se dopo la prima serata capisci che “Rule The Rules” non fa per te, scrivici prima
        dell’inizio della seconda serata live (6 ottobre) e{" "}
        <strong className="font-semibold text-ink">
          ti rimborsiamo il biglietto, senza bisogno di spiegazioni
        </strong>
        .
      </>
    ),
  },
  {
    q: "Perché il prezzo è così basso?",
    a: (
      <>
        Perché Rule The Rules 2026 è l’introduzione al nostro modo di lavorare: vogliamo che più
        professioniste possibile abbiano gli strumenti giusti per ritrovarsi nella propria
        comunicazione. Consideralo un biglietto d’ingresso:{" "}
        <strong className="font-semibold text-ink">
          un prezzo accessibile per un contenuto che può cambiare il modo in cui ti presenti online
        </strong>
        .
      </>
    ),
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-4 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            <span className="font-semibold text-foreground">Serve aiuto?</span>{" "}
            <a href="mailto:info@carlottasgarra.it" className="text-primary">
              info@carlottasgarra.it
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="hidden text-xs uppercase tracking-[0.15em] text-muted-foreground sm:inline">
              L’evento inizia tra
            </span>
            <Countdown compact />
            <a
              href="#iscriviti"
              className="shrink-0 rounded-md px-4 py-2 font-condensed text-sm uppercase tracking-[0.12em] transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundImage: "var(--gradient-gold)",
                color: "var(--primary-foreground)",
              }}
            >
              Prendi il biglietto
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header
        className="relative grid min-h-screen grid-cols-1"
        style={{ backgroundImage: "var(--gradient-night)" }}
      >
        <img
          src={goldTexture}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-overlay"
        />

        <div
          className="pointer-events-none sticky top-0 z-0 col-start-1 row-start-1 grid h-screen w-full md:h-[90vh]"
          style={{ gridTemplateRows: `repeat(${heroWhispers.length}, 1fr)` }}
          aria-hidden
        >
          {heroWhispers.map((phrase, i) => {
            const padded = Array(8).fill(phrase).join("   ·   ");
            return (
              <div key={i} className="flex w-full items-center overflow-hidden">
                <div
                  className={`flex w-max shrink-0 gap-12 ${
                    i % 2 === 0 ? "animate-marquee-ltr" : "animate-marquee-rtl"
                  }`}
                >
                  {[padded, padded].map((p, j) => (
                    <span
                      key={j}
                      className="whitespace-nowrap font-condensed text-[9vh] font-bold uppercase leading-none tracking-tight text-[color:var(--foreground)]/[0.04] md:text-[7vh]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 col-start-1 row-start-1 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-20 text-center">
          <Reveal>
            <p className="font-condensed text-xs uppercase tracking-[0.4em] text-secondary sm:text-sm">
              Live su Zoom · 5, 6, 7 ottobre · ore 20:00
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mt-6 inline-block">
              <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-tight text-gradient-gold sm:text-8xl">
                Rule The Rules
              </h1>
              <span
                className="absolute select-none whitespace-nowrap rounded-full px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary-foreground sm:text-xs"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                  top: "-0.6rem",
                  right: "-0.5rem",
                  transform: "rotate(11deg)",
                }}
              >
                Unico evento 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-snug text-foreground sm:text-2xl">
              In 3 serate distruggiamo le regole che i guru ti hanno sempre detto di seguire per
              fatturare online e scolpisci le tue regole per creare una{" "}
              <Highlight>comunicazione identitaria</Highlight>.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              Hook, script, editing, formule: non sei stanca di dover seguire un copione tutte le
              volte che apri Instagram? E se ci fosse la soluzione per{" "}
              <strong className="font-semibold text-foreground">
                vendere senza più seguire queste regole
              </strong>
              ?
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-10 w-full">
            <div
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
              <div className="grid grid-cols-1 text-left md:grid-cols-[3fr_7fr]">
                <div className="relative h-96 w-full md:h-full">
                  <img
                    src={heroImg}
                    alt="Carlotta Sgarra"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-5 text-center text-lg font-semibold leading-snug text-white sm:p-6 sm:text-xl">
                    Questo invito è per te, che sei stanca di sottometterti alle regole
                    dell’algoritmo e vuoi far uscire <Highlight dark>la vera te stessa</Highlight>.
                  </p>
                </div>

                <div
                  className="relative border-t-2 border-dashed p-6 sm:p-10 md:border-l-2 md:border-t-0"
                  style={{ borderColor: "color-mix(in oklab, var(--primary) 55%, transparent)" }}
                >
                  <div className="mx-auto max-w-sm">
                    <p className="text-center text-base font-semibold text-foreground">
                      Pronta a rompere le regole una volta per tutte e a ridefinire la tua
                      comunicazione identitaria?
                    </p>
                    <div className="mt-3 flex justify-center">
                      <span
                        className="inline-block rounded-full px-5 py-2 font-condensed text-xs uppercase tracking-[0.25em] text-primary-foreground sm:text-sm"
                        style={{
                          backgroundImage: "var(--gradient-gold)",
                          boxShadow: "var(--shadow-gold)",
                        }}
                      >
                        Live su Zoom · 5-6-7 ottobre
                      </span>
                    </div>
                    <SignupForm
                      className="mt-6"
                      submitSub="Soli €27 · 5-6-7 ottobre · Garanzia di rimborso"
                    />
                    <div className="mt-4 flex justify-center">
                      <div
                        className="inline-flex items-center gap-3 rounded-xl px-4 py-2.5"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
                          border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                        }}
                      >
                        <div className="flex -space-x-3">
                          {avatarPlaceholders.map((c, i) => (
                            <span
                              key={i}
                              className="flex size-9 items-center justify-center rounded-full border-2"
                              style={{ backgroundColor: c, borderColor: "var(--secondary)" }}
                            >
                              <User className="size-4 text-white/85" />
                            </span>
                          ))}
                        </div>
                        <div className="text-left">
                          <div className="flex gap-0.5 text-primary">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="size-3.5 fill-current" />
                            ))}
                          </div>
                          <p className="mt-0.5 text-xs text-foreground/85 sm:text-sm">
                            +1.500 professioniste formate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span
                className="absolute hidden h-6 w-12 -translate-x-1/2 md:block"
                style={{
                  left: "30%",
                  top: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "0 2px 2px 2px",
                  borderColor: "var(--primary)",
                  borderRadius: "0 0 999px 999px",
                }}
                aria-hidden
              />
              <span
                className="absolute hidden h-6 w-12 -translate-x-1/2 md:block"
                style={{
                  left: "30%",
                  bottom: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "2px 2px 0 2px",
                  borderColor: "var(--primary)",
                  borderRadius: "999px 999px 0 0",
                }}
                aria-hidden
              />
              <span
                className="absolute top-96 h-12 w-6 -translate-y-1/2 md:hidden"
                style={{
                  left: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "2px 2px 2px 0",
                  borderColor: "var(--primary)",
                  borderRadius: "0 999px 999px 0",
                }}
                aria-hidden
              />
              <span
                className="absolute top-96 h-12 w-6 -translate-y-1/2 md:hidden"
                style={{
                  right: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "2px 0 2px 2px",
                  borderColor: "var(--primary)",
                  borderRadius: "999px 0 0 999px",
                }}
                aria-hidden
              />
            </div>
          </Reveal>

          <Reveal delay={340} className="mt-24 w-full">
            <h2 className="mx-auto max-w-5xl text-3xl sm:text-4xl">
              Sai qual è il risultato di seguire mille regole per piacere all’algoritmo? Che ora hai
              la nausea quando crei i contenuti e <Highlight>ti fa schifo vendere online</Highlight>
              .
            </h2>
            <p className="mx-auto mt-4 max-w-5xl text-base text-foreground/75 sm:text-lg">
              Durante l’evento rompiamo tutti questi schemi per tornare alla{" "}
              <strong className="font-semibold text-foreground">tua vera identità</strong>.
            </p>
            <div className="mt-10">
              <VideoFrame
                label="Guarda il video di presentazione di Rule The Rules"
                duration="06:15"
                poster={livestreamImg}
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Cos'è */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-4xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <h2 className="text-3xl text-ink sm:text-4xl">
              Rule the Rules è il mio <Highlight dark>unico show live del 2026</Highlight>
            </h2>
            <p
              className="mt-6 border-l-2 pl-5 text-lg italic leading-relaxed text-ink"
              style={{ borderColor: "var(--gold-deep)" }}
            >
              “Ogni volta che pubblico non mi sento più me stessa, e mi faccio schifo a seguire
              tutte queste regole.”
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                Parlo ogni giorno con decine di professioniste online, e quasi tutte mi dicono
                questa frase con parole diverse. Seguono le regole di Instagram, seguono le regole
                che gli danno i guru, seguono i format che funzionano per tutte, e il risultato è
                che oggi{" "}
                <strong className="font-semibold text-ink">
                  nessuna di loro comunica più a modo suo
                </strong>
                . Comunicano a modo di qualcun altro.
              </p>
              <p>
                Io non voglio darti altre regole da seguire. Il 5, 6 e 7 ottobre, dalle 20 alle 21,
                in diretta su Zoom, ti mostro come smettere di farlo. Prendiamo le regole che ti
                hanno insegnato e le buttiamo via una a una, e al loro posto{" "}
                <strong className="font-semibold text-ink">costruiamo le tue</strong>: quelle che ti
                fanno riconoscere invece che confondere con qualsiasi altra professionista del tuo
                settore.
              </p>
            </div>

            <img
              src={heroImg}
              alt="Carlotta Sgarra"
              loading="lazy"
              width={1024}
              height={1280}
              className="mx-auto mt-10 aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
            />

            <div className="mt-6 flex justify-center">
              <CtaButton label="Rompiamo le regole, allora?" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Se leggendo qui sotto ti trovi ad annuire, credimi che{" "}
              <Highlight>so come ti senti</Highlight>. Ci sono passata anch’io.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              {startingPointCards.slice(0, 3).map(({ id, icon: Icon, title, text }, i) => (
                <Reveal key={id} delay={i * 60}>
                  <div className="flex h-full min-h-[14.5rem] items-start gap-4 rounded-xl border border-border/70 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary sm:min-h-[21.25rem] md:min-h-[15.75rem] lg:min-h-[12.5rem]">
                    <Icon className="mt-1 size-5 shrink-0 text-secondary" />
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <span className="mt-1 block text-sm leading-relaxed text-foreground/85 sm:text-base">
                        {text}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="space-y-4">
              {startingPointCards.slice(3, 6).map(({ id, icon: Icon, title, text }, i) => (
                <Reveal key={id} delay={(i + 3) * 60}>
                  <div className="flex h-full min-h-[14.5rem] items-start gap-4 rounded-xl border border-border/70 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary sm:min-h-[21.25rem] md:min-h-[15.75rem] lg:min-h-[12.5rem]">
                    <Icon className="mt-1 size-5 shrink-0 text-secondary" />
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <span className="mt-1 block text-sm leading-relaxed text-foreground/85 sm:text-base">
                        {text}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <h3 className="mt-16 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Ma quindi, come <Highlight>le crei le tue regole</Highlight>?
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4 text-base leading-relaxed text-foreground/85">
                <p>
                  Tutti i guru che segui online ti hanno insegnato che bisogna fare le cose così:
                  questo hook, questo script, questa CTA, questo orario di pubblicazione.{" "}
                  <strong className="font-semibold text-foreground">
                    Stare dentro lo schema, per vendere online.
                  </strong>
                </p>
                <p>
                  Eppure lo vedi anche tu: i profili che oggi ottengono davvero visibilità sono
                  quelli che escono dallo schema, non quelli che lo seguono alla lettera. E con
                  l’intelligenza artificiale che scrive uno script corretto in trenta secondi,
                  seguire lo schema alla perfezione non ti distingue più da nessuna.{" "}
                  <strong className="font-semibold text-foreground">Ti rende sostituibile.</strong>
                </p>
                <p>
                  Il vero asset non è più sapere le regole.{" "}
                  <strong className="font-semibold text-foreground">Sei tu</strong>: il tuo modo di
                  spiegare, il tuo punto di vista, la tua energia. Nelle tre serate ti mostro
                  esattamente come si fa a metterlo al centro della tua comunicazione, con un
                  metodo, non a caso.
                </p>
              </div>
              <img
                src={heroImg}
                alt="Carlotta Sgarra"
                loading="lazy"
                width={1024}
                height={1280}
                className="mx-auto aspect-[4/5] w-[85%] rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Il metodo: Identità -> Espressione -> Strategia */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
        <img
          src={methodBgImg}
          alt="Carlotta Sgarra sul palco"
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "25% center" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, color-mix(in oklab, var(--secondary) 35%, transparent), color-mix(in oklab, var(--secondary) 15%, transparent) 40%, color-mix(in oklab, var(--secondary) 30%, transparent))",
          }}
          aria-hidden
        />
        <div
          className="relative mx-auto max-w-6xl px-5 py-20"
          style={{ color: "var(--secondary-foreground)" }}
        >
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <Reveal>
              <div className="md:sticky md:top-28">
                <h2
                  className="text-3xl sm:text-4xl"
                  style={{ textShadow: "0 2px 24px rgba(0,0,0,0.65)" }}
                >
                  Il metodo per rompere il{" "}
                  <Highlight dark>circolo vizioso delle regolette</Highlight>
                </h2>
                <p
                  className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg"
                  style={{ textShadow: "0 1px 16px rgba(0,0,0,0.7)" }}
                >
                  Non esiste un modo giusto di stare su Instagram.{" "}
                  <strong className="font-semibold text-ink">Esiste il tuo.</strong> Per costruirlo
                  lavoriamo su 3 livelli, uno alla volta: prima chi sei, poi cosa dici, poi come lo
                  dici ogni giorno.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {systemSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div
                    className="flex gap-6 rounded-2xl p-6"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--secondary) 82%, transparent)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid color-mix(in oklab, var(--primary) 25%, transparent)",
                    }}
                  >
                    <span className="shrink-0 font-condensed text-4xl text-primary sm:text-5xl">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                        {step.tag}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-ink sm:text-xl">{step.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                        {step.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cosa ottieni: le 3 serate, in evidenza */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Tutto questo lo vediamo nelle <Highlight dark>tre serate</Highlight>, dal 5 al 7
              ottobre
            </h2>
          </Reveal>

          <div className="mt-16 space-y-14">
            {sessions.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group relative">
                  <div
                    className="relative grid gap-8 overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--background)_14%,transparent)] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:p-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-10"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--background) 6%, transparent)",
                    }}
                  >
                    <span
                      className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[40rem] font-bold leading-none md:block"
                      style={{ color: "color-mix(in oklab, var(--primary) 16%, transparent)" }}
                      aria-hidden
                    >
                      {s.n}
                    </span>

                    <div className="relative flex flex-col items-center text-center">
                      <div
                        className="flex aspect-[4/3] w-full max-w-[220px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed"
                        style={{
                          borderColor: "color-mix(in oklab, var(--primary) 40%, transparent)",
                          backgroundColor: "color-mix(in oklab, var(--background) 8%, transparent)",
                        }}
                      >
                        <Presentation className="size-8 text-ink-muted" />
                        <span className="font-condensed text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                          Foto del palco
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl text-ink sm:text-3xl">“{s.quote}”</h3>
                      <div
                        className="mt-4 h-px w-16"
                        style={{ backgroundColor: "var(--primary)" }}
                        aria-hidden
                      />
                    </div>

                    <div className="relative">
                      <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                        {s.intro}
                      </p>
                      <p className="mt-5 font-condensed text-xs uppercase tracking-[0.2em] text-ink-muted">
                        Cosa facciamo insieme:
                      </p>
                      <ul className="mt-3 space-y-3">
                        {s.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                          >
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: "var(--gold-deep)" }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className="mt-6 rounded-xl px-4 py-4"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
                          border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                        }}
                      >
                        <p className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                          Chi ti guiderà in questa serata?
                        </p>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                          {s.guides.map((g) => (
                            <div key={g.name} className="flex items-center gap-3">
                              <span
                                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-dashed"
                                style={{
                                  borderColor:
                                    "color-mix(in oklab, var(--primary) 45%, transparent)",
                                  backgroundColor:
                                    "color-mix(in oklab, var(--background) 10%, transparent)",
                                }}
                              >
                                <ImageIcon className="size-4 text-ink-muted" />
                              </span>
                              <p className="text-sm text-ink-muted">
                                <span className="font-semibold text-ink">{g.name}</span>, {g.role}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <span
                    className="absolute -top-6 -left-3 rounded-2xl px-5 py-3 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1 sm:text-base md:-left-5 md:px-6"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    Serata {s.n} · {s.date}, ore {s.time}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Offerta */}
          <Reveal>
            <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0_24px_70px_-28px_rgba(0,0,0,0.2)]">
              <img
                src={livestreamImg}
                alt="Rule The Rules in live streaming"
                loading="lazy"
                width={1280}
                height={720}
                className="h-56 w-full object-cover"
              />
              <div className="p-8 text-center">
                <p className="font-condensed text-lg uppercase tracking-[0.2em] text-muted-foreground">
                  Il tuo biglietto per Rule The Rules 2026
                </p>
                <p className="mt-3 font-condensed text-4xl uppercase tracking-[0.1em] text-gradient-gold">
                  27€
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Accesso alle 3 serate live dal 5 al 7 ottobre, in diretta streaming, più il{" "}
                  <strong className="font-semibold text-foreground">Workbook incluso</strong>.
                </p>
                <div className="mt-6 flex justify-center">
                  <CtaButton label="Sì, hai letto bene: 27€" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cosa ti porti a casa */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Non esci con un piano editoriale da seguire. Esci sapendo finalmente{" "}
              <Highlight>come crearne uno che ti assomiglia</Highlight>.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-background p-5">
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full font-condensed text-xs"
                    style={{
                      backgroundImage: "var(--gradient-gold)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    ✓
                  </span>
                  <span className="text-sm text-foreground/90 sm:text-base">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Per chi è / per chi non è */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Prima di iscriverti, <Highlight>leggi qui</Highlight>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="surface-card h-full p-7">
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-secondary">
                  Fa per te se…
                </p>
                <ul className="mt-5 space-y-4">
                  {forWhoYes.map((y) => (
                    <li key={y} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-0.5 text-secondary">✓</span>
                      <span>{y}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-xl border border-border/70 bg-background p-7">
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  Non fa per te se…
                </p>
                <ul className="mt-5 space-y-4">
                  {forWhoNo.map((n) => (
                    <li key={n} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                      <span className="mt-0.5 text-muted-foreground">✕</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quello che pensi vs come stanno le cose */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Quello che pensi vs <Highlight>come stanno le cose</Highlight>.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-5">
            {mythReality.map((m, i) => (
              <Reveal key={m.myth} delay={i * 80}>
                <div className="grid gap-0 overflow-hidden rounded-xl border border-border/70 sm:grid-cols-2">
                  <div className="bg-card/60 p-6">
                    <p className="font-condensed text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Quello che pensi
                    </p>
                    <p className="mt-2 text-sm italic leading-relaxed text-foreground/70">
                      “{m.myth}”
                    </p>
                  </div>
                  <div className="border-t border-border/70 bg-card p-6 sm:border-l sm:border-t-0">
                    <p className="font-condensed text-[10px] uppercase tracking-[0.2em] text-secondary">
                      Come stanno le cose
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">{m.reality}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Riprova sociale */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="max-w-3xl text-3xl sm:text-4xl">
              Ho documentato decine di <Highlight dark>storie di successo</Highlight> delle nostre
              clienti: donne meravigliose, tenaci, che hanno dato nuova forma al loro dolore e hanno
              ottenuto ciò che desideravano.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink">
              Te le mostro così che tu possa sentire che{" "}
              <strong className="font-semibold text-ink">
                tutto ciò che sto per raccontarti è davvero possibile
              </strong>
              .
            </p>
            <p className="mt-3 max-w-3xl text-sm italic text-ink-muted">
              (Questi non sono solo numeri su uno schermo: sono persone reali che hanno agito,
              applicato quello che hanno imparato, e trasformato le loro vite, come ho fatto io).
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.name} delay={i * 50}>
                <div className="surface-card overflow-hidden">
                  <VideoFrame label={c.name} duration={c.duration} poster={testimonialImg} />
                  <div className="p-5">
                    <p className="font-condensed text-base uppercase tracking-[0.14em] text-secondary">
                      {c.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface-card mt-12 grid gap-6 p-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <img
                src={testimonialImg}
                alt="Ilaria Mattei, SEO & Copywriter"
                loading="lazy"
                width={640}
                height={640}
                className="size-24 rounded-full object-cover"
              />
              <div>
                <p className="text-base italic leading-relaxed text-foreground/90">
                  «Ho sempre pensato di essere meno degli altri, che non avrei mai raggiunto
                  determinati risultati. Prima mi approcciavo ai clienti con l’atteggiamento della
                  disperata, dicendo “Oddio ti prego lavora con me”.{" "}
                  <strong className="font-semibold text-foreground">Ora so quanto valgo.</strong> Mi
                  presento con un’offerta all’altezza, senza sconti, senza paura di dire “Avanti il
                  prossimo” se non capiscono il mio valore. Ho capito che non devo più sminuirmi. E
                  oggi mi sveglio con meno ansia, meno mal di stomaco e più consapevole di chi sono
                  e di cosa posso fare.»
                </p>
                <p className="mt-4 font-condensed uppercase tracking-[0.16em] text-secondary">
                  Ilaria Mattei
                </p>
                <p className="text-sm text-muted-foreground">SEO &amp; Copywriter</p>
              </div>
            </div>

            <p className="mt-10 text-center text-sm font-semibold text-ink">
              Attenzione: non iscriverti a “Rule The Rules 2026” se non sei pronta a riconoscerti di
              nuovo in quello che pubblichi.
            </p>
            <div className="mt-6 flex justify-center">
              <CtaButton label="Sono avvisata, iscrivimi" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Storia */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <h2 className="text-3xl text-ink sm:text-5xl">
              Da un Iphone ad <Highlight dark>un’Azienda</Highlight>: come ho fatto e come puoi
              farlo anche tu.
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {storyStats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl bg-white p-5 text-center shadow-[0_16px_40px_-24px_rgba(0,0,0,0.15)]"
                >
                  <div className="font-condensed text-2xl" style={{ color: "var(--gold-deep)" }}>
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <Reveal>
              <div className="space-y-4 text-base leading-relaxed text-ink-muted">
                <p>Ci sono due tipi di professioniste italiane:</p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Quelle che continuano a postare a caso, sperando che i clienti arrivino da soli
                    lamentandosi del perché non hanno risultati
                  </li>
                  <li className="list-disc">
                    Quelle che, nonostante tutto, sanno che ce la faranno perché{" "}
                    <strong className="text-ink">sono spinte da quella fiamma interiore</strong> e
                    vogliono davvero avere una struttura e uno schema da seguire.
                  </li>
                </ul>
                <p>Io sto parlando alla seconda categoria.</p>
                <p className="font-semibold text-ink">
                  Alle professioniste italiane che vogliono davvero cambiare, bruciare, vivere.
                </p>
                <p>Perché sono l’unica che può dirtelo:</p>
                <p>Non sono nata con i riflettori puntati.</p>
                <p>
                  Non avevo investitori alle spalle, né un ufficio panoramico con vista sul mare.
                </p>
                <p>
                  Avevo solo un telefono in mano, due fratelli nella stessa stanza, un gatto che mi
                  teneva compagnia come fosse il mio primo fan e tantissima paura di fallire agli
                  occhi dei miei genitori.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={iphoneImg}
                alt="Gli inizi: un iPhone, una stanza e un gatto"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>All’inizio sembrava tutto un tentativo disperato:</p>
              <ul className="space-y-3 pl-5">
                <li className="list-disc">
                  Ero ossessionata dal pubblicare i contenuti e, spoiler, non avevo mai mezzo
                  risultato;
                </li>
                <li className="list-disc">
                  accettavo clienti che non rispettavano il mio valore, vendendo a 200 euro;
                </li>
                <li className="list-disc">
                  mi sentivo sempre indietro, sempre “non abbastanza”, riducendomi a studiare fino
                  alle 3 di notte (follia);
                </li>
                <li className="list-disc">
                  mi sentivo presa in giro dagli amici e spesso da me stessa: “ma cosa sto facendo
                  con sto telefono?! I miei contenuti sono ridicoli?”
                </li>
                <li className="list-disc">
                  Annaspavo ogni mese, refreshando il conto in banca che era fisso sugli 800 euro
                  nonostante le 10 ore di lavoro quotidiane.
                </li>
              </ul>
              <p>Ma non ho mollato.</p>
              <p>Ho trasformato quella frustrazione in benzina.</p>
              <p>
                Ho iniziato a costruire pezzo dopo pezzo: prima l’identità, poi i contenuti, poi le
                vendite.
              </p>
              <p>E ho capito che non si cresce da soli.</p>
              <p>Oggi non sono più quella ragazza con il telefono e l’ansia nel cuore.</p>
              <p className="font-semibold text-ink">
                Oggi ho un’azienda, un team che è diventato famiglia, e un metodo che ha funzionato
                per me e per centinaia di professioniste italiane.
              </p>
              <p>Ma sono nata dal fango, proprio come te.</p>
              <p>Per questo so che ce la farai, che ce la faremo.</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { t: "La mia storia", d: "...con le cadute, i dubbi e le vittorie." },
                { t: "Il mio metodo...", d: "...semplice, concreto, replicabile." },
                {
                  t: "Il mio team!",
                  d: "...ovvero le persone che ogni giorno sono la mia forza invisibile.",
                },
              ].map((x, i) => (
                <Reveal key={x.t} delay={i * 80}>
                  <div className="rounded-xl bg-white p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-2xl">✨</p>
                    <p
                      className="mt-3 font-condensed text-lg uppercase tracking-[0.12em]"
                      style={{ color: "var(--gold-deep)" }}
                    >
                      {x.t}
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">{x.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-base text-ink-muted">Dal 5 al 7 ottobre ti consegnerò tutto.</p>
          </Reveal>
        </div>
      </section>

      {/* Lo show */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Ho creato uno show live unico nel suo genere che ti mostrerà davvero{" "}
              <Highlight>come si rompono le regole della comunicazione</Highlight>:
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-ink">
              <p>
                Sono stanca di eventi che ti lasciano solo slide e{" "}
                <strong className="font-semibold text-ink">offerte per spennarti</strong>.
              </p>
              <p>
                Sono stanca che tu veda imprenditori felici che fanno soldi su soldi,{" "}
                <strong className="font-semibold text-ink">
                  sentendoti una merda di più ogni giorno che passa
                </strong>
                .
              </p>
              <p>Per questo ho deciso di fare davvero questa follia.</p>
              <p className="font-semibold text-ink">Durante questo show in diretta streaming:</p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Ti racconto come ho costruito quasi mezzo milione in organico solo da Instagram",
                d: "dai contenuti al costruire un team",
              },
              {
                t: "Ti mostro come ho trasformato follower in clienti che restano nel tempo",
                d: "dall’online a anche eventi dal vivo (l’offline sarà la nuova moda)",
              },
              {
                t: "Ti porto dentro le dinamiche del mio team,",
                d: "che ha cambiato per sempre il mio modo di fare business. E lo conoscerai, per davvero.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 80}>
                <div className="surface-card p-6 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-foreground">{x.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-12 text-2xl sm:text-3xl">
              Ti consegno il metodo per smettere di comunicare come tutte le altre e diventare{" "}
              <Highlight dark>impossibile da confondere</Highlight>.
            </h3>
            <p className="mt-6 text-base italic text-ink">
              E dal <strong>5 al 7 ottobre non vedrai solo Carlotta...</strong>
            </p>
            <p className="mt-2 text-base text-ink">
              Vedrai il team intero, le nostre dinamiche, le nostre strategie, le nostre follie.
            </p>
            <img
              src={teamImg}
              alt="Il team al completo"
              loading="lazy"
              width={1280}
              height={853}
              className="mt-8 w-full rounded-2xl border border-primary/20 object-cover"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-ink">
              <p>
                <strong>
                  È la prima volta che in Italia qualcuno ti mostra davvero che cos’è un’azienda
                </strong>{" "}
                e CHI ci lavora dietro capendo come puoi costruirla anche tu partendo dal tuo
                Iphone, come ho fatto io.
              </p>
              <p>
                Per poi diventare (finalmente){" "}
                <strong className="font-semibold text-ink">leader della tua vita</strong> gestendo
                un team di persone che lavorano per la tua azienda mentre sei nel mare cristallino
                della Sardegna.
              </p>
              <p>
                Sì, libera professionista e imprenditrice,{" "}
                <strong className="font-semibold text-ink">questa volta ci prendiamo tutto</strong>.
              </p>
              <p className="font-semibold text-ink">Però, c’è un però…</p>
            </div>

            <div
              className="surface-card mt-8 p-8 text-center"
              style={{ color: "var(--card-foreground)" }}
            >
              <p className="font-condensed text-2xl uppercase tracking-[0.2em] text-secondary">
                Solo live. Solo una volta.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  "📅 5, 6 e 7 ottobre 2026",
                  "🕕 Orario in arrivo",
                  "🌐 100% online, in diretta",
                ].map((x) => (
                  <p
                    key={x}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm"
                  >
                    {x}
                  </p>
                ))}
              </div>
              <div className="mt-6 space-y-2 text-sm text-foreground/85">
                <p>
                  👉 <strong>SOLO chi sarà live riceverà tutto</strong>: regali, follie, sorprese.
                </p>
                <p>👉 Nessun “lo guardo domani”.</p>
                <p>
                  E questa sarà{" "}
                  <strong className="font-semibold text-foreground">
                    la tua occasione di cambiare tutto
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <CtaButton label="Non voglio perdermelo" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prima vs dopo */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Prima di Rule The Rules, <Highlight>dopo Rule The Rules</Highlight>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-border/70 bg-card/40 p-7">
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  Prima
                </p>
                <ul className="mt-5 space-y-4">
                  {beforeAfter.before.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                      <span className="mt-0.5 text-muted-foreground">✕</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="surface-card h-full p-7">
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-secondary">
                  Dopo
                </p>
                <ul className="mt-5 space-y-4">
                  {beforeAfter.after.map((a) => (
                    <li key={a} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                      <span className="mt-0.5 text-secondary">✓</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* La scelta */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Da qui puoi andare in <Highlight>due direzioni</Highlight>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-border/70 bg-background p-7">
                <p className="font-condensed text-lg uppercase tracking-[0.12em] text-muted-foreground">
                  {twoPaths.a.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{twoPaths.a.d}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="surface-card h-full p-7">
                <p className="font-condensed text-lg uppercase tracking-[0.12em] text-secondary">
                  {twoPaths.b.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{twoPaths.b.d}</p>
                <div className="mt-6">
                  <CtaButton label="Ovviamente scelgo la B" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bonus: il Workbook */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <Reveal>
              <Workbook />
            </Reveal>

            <div>
              <Reveal>
                <h2 className="text-3xl sm:text-4xl">
                  Ricevi il <Highlight>Workbook</Highlight> di Rule The Rules
                </h2>
                <p className="mt-5 text-base leading-relaxed text-foreground/85">
                  Non è un PDF “in più”. È il documento che ti accompagna serata per serata, e che
                  alla fine delle tre giornate{" "}
                  <strong className="font-semibold text-foreground">
                    rappresenta fisicamente il percorso che hai fatto
                  </strong>
                  .
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {workbookDays.map((w, i) => (
                  <Reveal key={w.t} delay={i * 90}>
                    <div className="surface-card p-5 transition-transform duration-300 hover:-translate-y-1">
                      <p className="font-condensed text-base uppercase tracking-[0.12em] text-secondary">
                        {w.t}
                      </p>
                      <p className="mt-2 text-sm text-foreground/80">{w.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <p className="mt-6 text-sm italic text-muted-foreground">
                  E alla fine, una pagina conclusiva tutta tua: “Le Mie Regole”, il manifesto
                  personale della tua comunicazione.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Ricapitolando */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl">
                Registrati e ottieni <Highlight>tutto questo</Highlight>:
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mx-auto mt-10 max-w-md">
              <div
                className="h-4"
                style={{
                  backgroundColor: "var(--cream)",
                  backgroundImage:
                    "linear-gradient(135deg, var(--background) 50%, transparent 50%), linear-gradient(-135deg, var(--background) 50%, transparent 50%)",
                  backgroundSize: "16px 16px",
                  backgroundPosition: "bottom",
                  backgroundRepeat: "repeat-x",
                }}
                aria-hidden
              />
              <div
                className="px-6 py-8 font-mono text-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:px-8"
                style={{ backgroundColor: "var(--cream)" }}
              >
                <p
                  className="text-center font-condensed text-sm uppercase tracking-[0.3em]"
                  style={{ color: "var(--gold-deep)" }}
                >
                  Rule The Rules · Scontrino
                </p>
                <p className="mt-1 text-center text-[11px] text-ink-muted">
                  5, 6 e 7 ottobre 2026 · Online
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  {valueStack.map((v) => (
                    <div key={v.t}>
                      <div className="flex items-baseline gap-2">
                        <span className="min-w-0">{v.t}</span>
                        <span
                          className="mb-1 flex-1 border-b border-dotted"
                          style={{ borderColor: "var(--ink-muted)" }}
                          aria-hidden
                        />
                        <span className="shrink-0">
                          {v.value ? (
                            <span className="text-ink-muted line-through">{v.value}€</span>
                          ) : (
                            <span className="text-ink-muted">–</span>
                          )}
                        </span>
                      </div>
                      <p className="text-xs text-ink-muted">{v.d}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 border-t border-dashed pt-4"
                  style={{ borderColor: "var(--ink-muted)" }}
                >
                  <div className="flex items-baseline justify-between text-sm">
                    <span>Subtotale</span>
                    <span className="text-ink-muted line-through">{valueStackTotal}€</span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between text-lg font-semibold">
                    <span>Da pagare oggi</span>
                    <span style={{ color: "var(--gold-deep)" }}>27€</span>
                  </div>
                </div>

                <div
                  className="mt-8 h-8"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 5px)",
                  }}
                  aria-hidden
                />
              </div>
              <div
                className="h-4"
                style={{
                  backgroundColor: "var(--cream)",
                  backgroundImage:
                    "linear-gradient(45deg, var(--background) 50%, transparent 50%), linear-gradient(-45deg, var(--background) 50%, transparent 50%)",
                  backgroundSize: "16px 16px",
                  backgroundPosition: "top",
                  backgroundRepeat: "repeat-x",
                }}
                aria-hidden
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex justify-center">
              <CtaButton label="Ok, mi hai convinta" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Garanzia rimborso */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-gold mx-auto max-w-3xl px-6 py-14 text-center sm:px-10 sm:py-16"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <p className="text-4xl">🛡️</p>
            <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">
              <Highlight>Soddisfatta o rimborsata</Highlight>, senza fare domande.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90">
              Se dopo la prima serata pensi che “Rule The Rules” non faccia per te, scrivici prima
              dell’inizio della seconda serata live (6 ottobre) e{" "}
              <strong className="font-semibold text-primary-foreground">
                ti rimborsiamo il biglietto, senza bisogno di spiegazioni
              </strong>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form iscrizione */}
      <section id="iscriviti" className="bg-secondary">
        <div className="mx-auto max-w-2xl px-5 py-20">
          <Reveal>
            <div className="surface-card p-8">
              <p className="text-center font-condensed text-3xl uppercase tracking-[0.1em] text-gradient-gold">
                27€
              </p>
              <p className="mt-2 text-center text-sm text-foreground/85">
                Il tuo biglietto per Rule The Rules 2026
              </p>
              <p className="mt-4 text-center text-sm text-foreground/85">
                Compila il form per <strong>riservare il tuo posto</strong> ↓
              </p>
              <SignupForm className="mt-8" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-3xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <h2 className="text-3xl text-ink sm:text-4xl">
              Domande <Highlight dark>Frequenti</Highlight>
            </h2>
            <p className="mt-3 text-sm text-ink-muted">
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
                <AccordionItem key={f.q} value={f.q} className="border-ink/15">
                  <AccordionTrigger className="text-left text-base text-ink">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <section
        className="border-t border-border/60"
        style={{ backgroundImage: "var(--gradient-night)" }}
      >
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <p className="font-condensed text-2xl uppercase tracking-[0.2em] text-secondary">
              Il tuo posto ti aspetta:
            </p>
            <p className="mt-4 text-base text-foreground/85">
              Prendi il biglietto per Rule The Rules 2026 a 27€ e inizia a costruire{" "}
              <strong>il tuo modo di comunicare, quello che nessun’altra può copiare</strong>.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton label="Ultima chiamata, promesso" />
            </div>
            <p className="mt-10 text-sm italic text-muted-foreground">
              P.S. Ti hanno insegnato talmente bene a fare contenuti che hai smesso di esserci
              dentro. Il 5 ottobre iniziamo a cambiarlo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto max-w-4xl space-y-6 px-5 py-14 text-xs leading-relaxed text-muted-foreground">
          <p>
            Questo sito non fa parte del sito web di Facebook né di Meta Platforms, Inc. Inoltre,
            questo sito NON è approvato da Facebook in alcun modo. FACEBOOK è un marchio di Meta
            Platforms, Inc.
          </p>
          <p>
            Non possiamo e non garantiamo in alcun modo la tua capacità di ottenere risultati o
            guadagnare denaro con le nostre idee, informazioni, strumenti o strategie. Ciò che
            possiamo garantire è la tua soddisfazione con la nostra formazione. Offriamo una
            garanzia di soddisfazione al 100% per 30 giorni sui prodotti che vendiamo, quindi se non
            sei soddisfatto per qualsiasi motivo della qualità della nostra formazione, richiedi
            semplicemente il rimborso. Dovresti sapere che tutti i prodotti e servizi della nostra
            azienda sono solo a scopo educativo e informativo. Nulla in questa pagina, in nessuno
            dei nostri siti web o in qualsiasi nostro contenuto o curriculum costituisce una
            promessa o una garanzia di risultati o guadagni futuri, e non offriamo alcun consiglio
            legale, medico, fiscale o di altro tipo. Qualsiasi numero finanziario menzionato qui o
            in uno dei nostri siti è solo illustrativo di concetti e non deve essere considerato
            come guadagni medi, guadagni esatti o promesse di prestazioni attuali o future. Usa
            cautela e consulta sempre il tuo commercialista, avvocato o consulente professionale
            prima di agire su queste informazioni o su qualsiasi informazione relativa a un
            cambiamento di stile di vita, alla tua attività o alle tue finanze. Sei solo tu il
            responsabile delle tue decisioni, azioni e risultati nella vita, e con la tua
            registrazione qui accetti di non tentare di ritenerci responsabili per le tue decisioni,
            azioni o risultati, in qualsiasi momento e sotto qualsiasi circostanza.
          </p>
          <div className="border-t border-border pt-6">
            <p className="font-condensed uppercase tracking-[0.16em] text-foreground">
              C.S. Genesis Holding SRL
            </p>
            <p className="mt-2">P.iva: 14295170964</p>
            <p>Viale Emilio Caldara 44 - Milano</p>
            <p>
              Email:{" "}
              <a href="mailto:info@carlottasgarra.it" className="text-secondary">
                info@carlottasgarra.it
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
