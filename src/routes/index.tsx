import { createFileRoute } from "@tanstack/react-router";
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
import teamImg from "@/assets/team.jpg";
import iphoneImg from "@/assets/iphone-start.jpg";
import livestreamImg from "@/assets/livestream.jpg";
import goldTexture from "@/assets/texture-gold.jpg";
import testimonialImg from "@/assets/testimonial-1.jpg";

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

const heroStats = [
  { v: "3", l: "giorni" },
  { v: "Live", l: "online" },
  { v: "27€", l: "biglietto" },
];

const frameworkSteps = [
  {
    n: "1",
    label: "Identità",
    d: "Chi sei, cosa ti rende riconoscibile, cosa vuoi smettere di rappresentare.",
  },
  {
    n: "2",
    label: "Espressione",
    d: "Come comunichi davvero, con le tue Anti-Regole e il tuo metodo di creazione contenuti.",
  },
  {
    n: "3",
    label: "Strategia",
    d: "Un piano editoriale che è uno strumento al tuo servizio, non una gabbia da seguire.",
  },
];

const sessions = [
  {
    n: "1",
    date: "5 Ottobre",
    focus: "Identità",
    title: "Prima di comunicare, devi tornare a te.",
    intro:
      "Togliamo la maschera della “professionista giusta”, quella più seria, più autorevole, più perfetta, e iniziamo a recuperare la persona dietro alla professionista. Scoprirai:",
    bullets: [
      "Il tuo storytelling: il prima e il dopo della tua comunicazione, e perché senza identità diventi sostituibile.",
      "Il modello Cosa / Chi / Come, per capire cosa ti rende davvero riconoscibile e non intercambiabile con nessun’altra.",
      "Un’analisi live di un profilo, per vedere in modo concreto cosa cambia quando la persona torna al centro.",
    ],
  },
  {
    n: "2",
    date: "6 Ottobre",
    focus: "Contenuti con le tue regole",
    title: "Non un altro metodo universale: il tuo metodo di creazione contenuti.",
    intro:
      "Decostruiamo tutto ciò che ci è stato insegnato sui contenuti e mettiamo in discussione le regole che, invece di aiutarci, ci hanno reso più rigide e più simili a tutte le altre. Scoprirai:",
    bullets: [
      "Le regole che ci hanno insegnato, e perché sono uno strumento, non una gabbia da subire.",
      "Come costruire le tue Anti-Regole, l’alternativa personale a ogni regola che oggi segui senza chiederti se funziona per te.",
      "Perché le persone comprano le persone, e come ascoltarti diventa parte della strategia, non il suo contrario.",
    ],
  },
  {
    n: "3",
    date: "7 Ottobre",
    focus: "Strategia + Piano editoriale",
    title: "Il piano editoriale non è una gabbia.",
    intro:
      "Con identità e metodo personale di creazione già costruiti, li trasformiamo in una strategia vera: un piano editoriale che sostiene il tuo business invece di soffocarti. Scoprirai:",
    bullets: [
      "I quattro macro-obiettivi di ogni contenuto: attrarre, connettere, posizionare, convertire.",
      "Come costruire la tua struttura creativa: format, tipologie di contenuto, banca idee.",
      "La nuova idea di piano editoriale: non più giorni fissi da riempire, ma contenuti che sai perché stai pubblicando.",
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

const pains = [
  "“Non mi riconosco più in quello che pubblico.”",
  "“Quando registro mi sembra di recitare.”",
  "“Mi sembra che per funzionare debba diventare qualcun’altra.”",
  "“Ho salvato mille strategie e alla fine sono ancora più confusa.”",
  "“Il piano editoriale mi fa sentire in gabbia.”",
  "“Ho un business, delle competenze e delle cose da dire, ma online non si percepiscono davvero.”",
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
    reality:
      "Il nemico non è Instagram. È l’idea che esista un modo giusto di starci. Non sei tu che devi adattarti a Instagram: è Instagram che deve iniziare ad avere la tua faccia.",
  },
  {
    myth: "Fare tutto “come si deve” mi farà emergere.",
    reality:
      "Fare tutto “come si deve” è probabilmente il motivo per cui oggi nessuno riesce a distinguerti. Le regole ti hanno resa brava. Ora bisogna renderti riconoscibile.",
  },
  {
    myth: "Se rompo le regole, i contenuti smettono di funzionare.",
    reality:
      "Non si tratta di eliminare le regole, ma di smettere di subirle. Una regola resta utile solo se ti aiuta a comunicare meglio senza farti sparire.",
  },
  {
    myth: "Rompere le regole vuol dire fare quello che mi pare, senza strategia.",
    reality:
      "La libertà arriva da una struttura solida abbastanza da permetterti di essere creativa, non dal caos. Prima costruiamo l’identità. Poi la strategia attorno a te. Mai il contrario.",
  },
  {
    myth: "Non so nemmeno chi sono “senza personaggio”.",
    reality:
      "Non devi mostrare la personalità in astratto. Devi trovare gli elementi concreti che ti rendono riconoscibile e non sostituibile. È un lavoro guidato, le Carte Identitarie. Non qualcosa che devi già sapere.",
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
    d: "Le tue Carte Identitarie: il documento in cui metti nero su bianco cosa ti rende riconoscibile.",
  },
  {
    t: "Giorno 2 · Come comunico",
    d: "Le tue Anti-Regole personali e il tuo Content Lab, per iniziare a creare contenuti con il tuo metodo.",
  },
  {
    t: "Giorno 3 · Come costruisco il sistema",
    d: "Format, banca idee e la struttura del tuo piano editoriale, costruito insieme durante la serata.",
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
    a: "È uno show formativo in live streaming con Carlotta Sgarra e il suo team, in tre serate dal 5 al 7 ottobre 2026. Ti do gli strumenti per costruire la tua identità, il tuo metodo personale di creazione contenuti e un piano editoriale che è davvero tuo, non l’ennesimo format universale.",
  },
  {
    q: "È un corso registrato o un evento dal vivo?",
    a: "È un evento dal vivo in streaming, ci connetteremo usando il software Zoom.",
  },
  {
    q: "A chi è rivolto?",
    a: "A professioniste, coach, consulenti e imprenditrici che si sentono una fotocopia delle altre, sono stufe di seguire regole che non sentono loro, e vogliono costruire una comunicazione che parte davvero da chi sono.",
  },
  {
    q: "Funziona anche nel mio settore?",
    a: "Sì. Carlotta ha già aiutato nutrizionisti, tatuatrici, consulenti d’immagine, coach, social media manager, make-up artist e tanti altri a smettere di comunicare come tutti gli altri nel loro settore. Il principio è lo stesso: parti dalla tua identità, non da un format che “funziona”.",
  },
  {
    q: "E se non riesco a seguirlo live?",
    a: "Con il biglietto standard puoi seguire solo in diretta, non è prevista la registrazione. Se vuoi rivedere l’evento tutte le volte che vuoi, fermarti sui passaggi cruciali o prenderti appunti con calma, scegli il biglietto VIP, che include la registrazione completa.",
  },
  {
    q: "Se non fa per me, posso riavere indietro i soldi?",
    a: "Sì. Se dopo la prima serata capisci che “Rule The Rules” non fa per te, scrivici prima dell’inizio della seconda serata live (6 ottobre) e ti rimborsiamo il biglietto, senza bisogno di spiegazioni.",
  },
  {
    q: "Perché il prezzo è così basso?",
    a: "Perché Rule The Rules 2026 è l’introduzione al nostro modo di lavorare: vogliamo che più professioniste possibile abbiano gli strumenti giusti per ritrovarsi nella propria comunicazione. Consideralo un biglietto d’ingresso: un prezzo accessibile per un contenuto che può cambiare il modo in cui ti presenti online.",
  },
];

function SectionLabel({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "ink";
}) {
  return (
    <p
      className="mb-4 font-condensed text-[0.72rem] uppercase tracking-[0.28em]"
      style={{ color: tone === "gold" ? "var(--primary)" : "var(--gold-deep)" }}
    >
      {children}
    </p>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div className="border-b border-border/60 bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-4 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            <span className="font-semibold text-foreground">Serve aiuto?</span>{" "}
            <a href="mailto:info@carlottasgarra.it" className="text-primary">
              info@carlottasgarra.it
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs uppercase tracking-[0.15em] text-muted-foreground sm:inline">
              Iscrizioni chiuse tra
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
        className="relative flex min-h-[90vh] items-center overflow-hidden"
        style={{ backgroundImage: "var(--gradient-night)" }}
      >
        <img
          src={goldTexture}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-overlay"
        />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-20 text-center">
          <Reveal>
            <p className="font-condensed text-xs uppercase tracking-[0.4em] text-primary sm:text-sm">
              Show live · dal 5 ottobre 2026 · l’unico evento del 2026
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
                  transform: "rotate(-11deg)",
                }}
              >
                Unico evento 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
              Ti hanno insegnato a fare tutto come si deve. Ed è proprio per questo che oggi nessuno
              riesce a distinguerti. Tre serate live per smettere di subire le regole e iniziare a
              comunicare come sei fatta <strong>tu</strong>.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-10 w-full">
            <div
              className="grid gap-8 rounded-3xl border-2 bg-card/60 p-6 text-left backdrop-blur sm:p-10 md:grid-cols-2 md:items-start"
              style={{ borderColor: "var(--gold-deep)" }}
            >
              <div>
                <SectionLabel>Video di presentazione</SectionLabel>
                <VideoFrame
                  label="Guarda il video di presentazione di Rule The Rules"
                  duration="06:15"
                  poster={livestreamImg}
                />
              </div>

              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex flex-wrap justify-center gap-3 font-condensed text-sm uppercase tracking-[0.12em] md:justify-start">
                  <span
                    className="rounded-md border px-4 py-2 text-foreground"
                    style={{
                      borderColor: "var(--gold-deep)",
                      backgroundColor: "color-mix(in oklab, var(--gold-deep) 12%, transparent)",
                    }}
                  >
                    Quando: <span className="text-primary">dal 5 ottobre 2026</span>
                  </span>
                  <span
                    className="rounded-md border px-4 py-2 text-foreground"
                    style={{
                      borderColor: "var(--gold-deep)",
                      backgroundColor: "color-mix(in oklab, var(--gold-deep) 12%, transparent)",
                    }}
                  >
                    Dove: <span className="text-primary">Online</span>
                  </span>
                </div>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  mancano:
                </p>
                <div className="mt-3">
                  <Countdown />
                </div>

                <div
                  className="mt-6 grid w-full max-w-md grid-cols-3 gap-2 rounded-xl border p-4 text-center"
                  style={{
                    borderColor: "var(--gold-deep)",
                    backgroundColor: "color-mix(in oklab, var(--gold-deep) 12%, transparent)",
                  }}
                >
                  {heroStats.map((s) => (
                    <div key={s.l}>
                      <div className="font-condensed text-xl text-primary">{s.v}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2 text-sm font-medium text-foreground/90">
                  <p>🛡️ Garanzia: soddisfatta o rimborsata entro la seconda serata.</p>
                  <p>
                    Oltre 1.500 professioniste italiane aiutate a smettere di essere una fotocopia.
                  </p>
                </div>

                <div className="surface-card mt-6 w-full p-6">
                  <p className="text-center text-sm text-foreground/85">
                    Compila il form per <strong>riservare il tuo posto</strong> ↓
                  </p>
                  <SignupForm compact className="mt-6" />
                </div>
              </div>
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
            <SectionLabel tone="ink">Cos’è</SectionLabel>
            <h2 className="text-3xl text-ink sm:text-4xl">
              “Rule The Rules” non è un altro corso su come fare contenuti “corretti”. È il
              contrario.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                Per anni ci hanno insegnato come creare contenuti. Come parlare. Come vestirci. Come
                iniziare un Reel. Quanto pubblicare. Come essere professionali.
              </p>
              <p>
                E a forza di fare tutto come si deve, tantissime professioniste sono diventate
                tecnicamente perfette. E indistinguibili da chiunque altra nel loro settore.
              </p>
              <p className="font-semibold text-ink">Ma nessuna identità.</p>
              <p className="font-semibold text-ink">
                Il nemico non è Instagram. È l’idea che esista un modo giusto di starci.
              </p>
              <p>
                Non sei tu che devi adattarti a Instagram. È Instagram che deve iniziare ad avere la
                tua faccia.
              </p>
              <p>
                In tre serate live rompiamo quelle regole, una per una. Non voglio rendere i tuoi
                contenuti più corretti. Voglio renderli impossibili da copiare.
              </p>
            </div>
            <p
              className="mt-8 border-l-2 pl-5 text-lg font-semibold text-ink"
              style={{ borderColor: "var(--gold-deep)" }}
            >
              Prima costruiamo chi sei. Poi costruiamo una strategia attorno a te.
            </p>

            <img
              src={teamImg}
              alt="Il team dietro Rule The Rules"
              loading="lazy"
              width={1280}
              height={853}
              className="mt-10 w-full rounded-2xl object-cover"
            />

            <div className="mt-6 flex justify-center">
              <CtaButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Il metodo: Identità -> Espressione -> Strategia */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <SectionLabel>Il metodo</SectionLabel>
            <h2 className="max-w-2xl text-3xl sm:text-4xl">
              Tre serate, tre passaggi, un unico percorso lineare.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {frameworkSteps.map((step, i) => (
              <div key={step.n} className="contents">
                <Reveal delay={i * 100}>
                  <div className="surface-card flex h-full flex-col items-center p-6 text-center">
                    <span
                      className="flex size-10 items-center justify-center rounded-full font-condensed text-lg"
                      style={{
                        backgroundImage: "var(--gradient-gold)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      {step.n}
                    </span>
                    <p className="mt-4 font-condensed text-lg uppercase tracking-[0.14em] text-primary">
                      {step.label}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </Reveal>
                {i < frameworkSteps.length - 1 ? (
                  <div className="flex items-center justify-center text-2xl text-primary/60 md:rotate-0">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa ottieni: le 3 serate, in evidenza */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <SectionLabel tone="ink">Incluso nel tuo biglietto</SectionLabel>
            <h2 className="text-3xl text-ink sm:text-4xl">
              Ecco tutto ciò che avrai il 5, 6 e 7 ottobre acquistando ORA il tuo biglietto per
              “Rule The Rules” a soli €27:
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {sessions.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative overflow-hidden rounded-2xl bg-white pl-8 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.2)] sm:pl-10">
                  <span
                    className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[9rem] leading-none sm:text-[11rem]"
                    style={{ color: "color-mix(in oklab, var(--gold-deep) 14%, transparent)" }}
                    aria-hidden
                  >
                    {s.n}
                  </span>
                  <div
                    className="relative border-l-4 py-8 pl-6 pr-8"
                    style={{ borderColor: "var(--gold-deep)" }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="rounded-full px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground"
                        style={{ backgroundImage: "var(--gradient-gold)" }}
                      >
                        Serata {s.n} · {s.date}
                      </span>
                      <span className="rounded-full bg-ink/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                        Focus: {s.focus}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl text-ink sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {s.intro}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
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
                  </div>
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
                <p className="font-condensed text-lg uppercase tracking-[0.2em] text-ink-muted">
                  Il tuo biglietto per Rule The Rules 2026
                </p>
                <p className="mt-3 font-condensed text-4xl uppercase tracking-[0.1em] text-gradient-gold">
                  27€
                </p>
                <p className="mt-4 text-sm text-ink-muted">
                  Accesso alle 3 serate live dal 5 al 7 ottobre, in diretta streaming, più il
                  Workbook incluso.
                </p>
                <div className="mt-6 flex justify-center">
                  <CtaButton />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cosa ti porti a casa */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <SectionLabel>Cosa ti porti a casa</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">
              Non esci con un piano editoriale da seguire. Esci sapendo finalmente come crearne uno
              che ti assomiglia.
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

      {/* Problema */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <SectionLabel>Il punto di partenza</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">In questo momento, probabilmente pensi:</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pains.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-xl border border-border/70 bg-card/50 p-5 transition-colors duration-300 hover:border-primary/40">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm italic leading-relaxed text-foreground/85 sm:text-base">
                    {p}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/85">
              <p className="font-semibold text-foreground">
                Il problema non è che non sai fare contenuti. È che hai imparato a farli come tutte
                le altre.
              </p>
              <p>E la sensazione, in fondo, è sempre la stessa:</p>
              <p className="font-semibold text-primary">Sono diventata una fotocopia.</p>
              <p>
                Non vuoi più contenuti, non vuoi più follower: vuoi guardare il tuo profilo e
                pensare “questa sono io”.
              </p>
              <p className="font-semibold text-primary">👉 In tre serate, cambiamo questo.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Per chi è / per chi non è */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <SectionLabel>Rule The Rules fa per te?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">Prima di iscriverti, leggi qui.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="surface-card h-full p-7">
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-primary">
                  Fa per te se…
                </p>
                <ul className="mt-5 space-y-4">
                  {forWhoYes.map((y) => (
                    <li key={y} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-0.5 text-primary">✓</span>
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
            <SectionLabel>Le tue obiezioni</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">Quello che pensi vs come stanno le cose.</h2>
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
                    <p className="font-condensed text-[10px] uppercase tracking-[0.2em] text-primary">
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
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <SectionLabel>Riprova sociale</SectionLabel>
            <h2 className="max-w-3xl text-3xl sm:text-4xl">
              Ho documentato decine di storie di successo delle nostre clienti: donne meravigliose,
              tenaci, che hanno dato nuova forma al loro dolore e hanno ottenuto ciò che
              desideravano.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/85">
              Te le mostro così che tu possa sentire che tutto ciò che sto per raccontarti è davvero
              possibile.
            </p>
            <p className="mt-3 max-w-3xl text-sm italic text-muted-foreground">
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
                    <p className="font-condensed text-base uppercase tracking-[0.14em] text-primary">
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
                  disperata, dicendo “Oddio ti prego lavora con me”. Ora so quanto valgo. Mi
                  presento con un’offerta all’altezza, senza sconti, senza paura di dire “Avanti il
                  prossimo” se non capiscono il mio valore. Ho capito che non devo più sminuirmi. E
                  oggi mi sveglio con meno ansia, meno mal di stomaco e più consapevole di chi sono
                  e di cosa posso fare.»
                </p>
                <p className="mt-4 font-condensed uppercase tracking-[0.16em] text-primary">
                  Ilaria Mattei
                </p>
                <p className="text-sm text-muted-foreground">SEO &amp; Copywriter</p>
              </div>
            </div>

            <p className="mt-10 text-center text-sm font-semibold text-foreground/80">
              Attenzione: non iscriverti a “Rule The Rules 2026” se non sei pronta a riconoscerti di
              nuovo in quello che pubblichi.
            </p>
            <div className="mt-6 flex justify-center">
              <CtaButton />
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
            <SectionLabel tone="ink">La storia</SectionLabel>
            <h2 className="text-3xl text-ink sm:text-5xl">
              Da un Iphone ad un’Azienda: come ho fatto e come puoi farlo anche tu.
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
                  <div className="mt-1 text-xs text-ink-muted">{s.l}</div>
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
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <SectionLabel>Lo show</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">
              Ho creato uno show live unico nel suo genere che ti mostrerà davvero come si rompono
              le regole della comunicazione:
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>Sono stanca di eventi che ti lasciano solo slide e offerte per spennarti.</p>
              <p>
                Sono stanca che tu veda imprenditori felici che fanno soldi su soldi, sentendoti una
                merda di più ogni giorno che passa.
              </p>
              <p>Per questo ho deciso di fare davvero questa follia.</p>
              <p className="font-semibold text-foreground">
                Durante questo show in diretta streaming:
              </p>
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
              Ti consegno il metodo per smettere di comunicare come tutte le altre e diventare
              impossibile da confondere.
            </h3>
            <p className="mt-6 text-base italic text-foreground/85">
              E dal <strong>5 al 7 ottobre non vedrai solo Carlotta...</strong>
            </p>
            <p className="mt-2 text-base text-foreground/85">
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
            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                <strong>
                  È la prima volta che in Italia qualcuno ti mostra davvero che cos’è un’azienda
                </strong>{" "}
                e CHI ci lavora dietro capendo come puoi costruirla anche tu partendo dal tuo
                Iphone, come ho fatto io.
              </p>
              <p>
                Per poi diventare (finalmente) leader della tua vita gestendo un team di persone che
                lavorano per la tua azienda mentre sei nel mare cristallino della Sardegna.
              </p>
              <p>Sì, libera professionista e imprenditrice, questa volta ci prendiamo tutto.</p>
              <p className="font-semibold text-foreground">Però, c’è un però…</p>
            </div>

            <div className="surface-card mt-8 p-8 text-center">
              <p className="font-condensed text-2xl uppercase tracking-[0.2em] text-primary">
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
                <p>E questa sarà la tua occasione di cambiare tutto.</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <CtaButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prima vs dopo */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <SectionLabel>La trasformazione</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">Prima di Rule The Rules, dopo Rule The Rules.</h2>
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
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-primary">
                  Dopo
                </p>
                <ul className="mt-5 space-y-4">
                  {beforeAfter.after.map((a) => (
                    <li key={a} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                      <span className="mt-0.5 text-primary">✓</span>
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
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <SectionLabel>La scelta</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">Da qui puoi andare in due direzioni.</h2>
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
                <p className="font-condensed text-lg uppercase tracking-[0.12em] text-primary">
                  {twoPaths.b.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{twoPaths.b.d}</p>
                <div className="mt-6">
                  <CtaButton />
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
                <SectionLabel>Bonus incluso</SectionLabel>
                <h2 className="text-3xl sm:text-4xl">Ricevi il Workbook di Rule The Rules</h2>
                <p className="mt-5 text-base leading-relaxed text-foreground/85">
                  Non è un PDF “in più”. È il documento che ti accompagna serata per serata, e che
                  alla fine delle tre giornate rappresenta fisicamente il percorso che hai fatto.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {workbookDays.map((w, i) => (
                  <Reveal key={w.t} delay={i * 90}>
                    <div className="surface-card p-5 transition-transform duration-300 hover:-translate-y-1">
                      <p className="font-condensed text-base uppercase tracking-[0.12em] text-primary">
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
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Reveal>
            <SectionLabel>Ricapitolando</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">Registrati e ottieni tutto questo:</h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {valueStack.map((v, i) => (
              <Reveal key={v.t} delay={i * 60}>
                <div className="flex items-center justify-between gap-4 rounded-lg border border-border/70 bg-background px-5 py-4">
                  <div>
                    <p className="font-semibold text-foreground">{v.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    {v.value ? (
                      <p className="font-condensed text-sm text-muted-foreground line-through">
                        Valore {v.value}€
                      </p>
                    ) : null}
                    <p className="font-condensed text-xs uppercase tracking-[0.14em] text-primary">
                      Incluso
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface-card mt-6 flex flex-wrap items-center justify-between gap-3 p-6">
              <div>
                <p className="font-condensed text-sm uppercase tracking-[0.14em] text-muted-foreground">
                  Valore totale
                </p>
                <p className="font-condensed text-2xl text-muted-foreground line-through">
                  {valueStackTotal}€
                </p>
              </div>
              <div className="text-right">
                <p className="font-condensed text-sm uppercase tracking-[0.14em] text-primary">
                  Il tuo biglietto oggi
                </p>
                <p className="font-condensed text-3xl text-gradient-gold">27€</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex justify-center">
              <CtaButton />
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
            <p className="mt-4 font-condensed text-xs uppercase tracking-[0.28em] text-primary-foreground/80">
              Garanzia
            </p>
            <h2 className="mt-2 text-3xl text-primary-foreground sm:text-4xl">
              Soddisfatta o rimborsata, senza fare domande.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90">
              Se dopo la prima serata pensi che “Rule The Rules” non faccia per te, scrivici prima
              dell’inizio della seconda serata live (6 ottobre) e ti rimborsiamo il biglietto, senza
              bisogno di spiegazioni.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form iscrizione */}
      <section id="iscriviti" className="border-y border-border/60 bg-card/40">
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
            <SectionLabel tone="ink">Supporto</SectionLabel>
            <h2 className="text-3xl text-ink sm:text-4xl">Domande Frequenti</h2>
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
            <p className="font-condensed text-2xl uppercase tracking-[0.2em] text-primary">
              Il tuo posto ti aspetta:
            </p>
            <p className="mt-4 text-base text-foreground/85">
              Prendi il biglietto per Rule The Rules 2026 a 27€ e inizia a costruire{" "}
              <strong>il tuo modo di comunicare, quello che nessun’altra può copiare</strong>.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton label="Riserva il tuo posto a soli 27€" />
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
              <a href="mailto:info@carlottasgarra.it" className="text-primary">
                info@carlottasgarra.it
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
