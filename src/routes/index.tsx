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

const pains = [
  "“Quando registro mi sembra di recitare.”",
  "“So di essere brava, ma Instagram non riesce a raccontarlo.”",
  "“Vedo le altre e mi sembra di essere uguale a tutte.”",
  "“Sono stanca di seguire regole che non sento mie.”",
  "“Vorrei che essere semplicemente me stessa bastasse.”",
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

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-20 text-center">
          <Reveal>
            <p className="font-condensed text-xs uppercase tracking-[0.4em] text-primary sm:text-sm">
              Show live · 5, 6 e 7 ottobre 2026
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.95] tracking-tight text-gradient-gold sm:text-8xl">
              Rule The Rules
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
              Per anni ti hanno insegnato come comunicare: cosa dire, come vestirti, quando
              pubblicare. Tre serate live per rompere quelle regole e tornare alla domanda che conta
              davvero: <strong>tu, come vuoi comunicare?</strong>
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-10 w-full max-w-xl">
            <SectionLabel>Video di presentazione</SectionLabel>
            <VideoFrame
              label="Guarda il video di presentazione di Rule The Rules"
              duration="06:15"
              poster={livestreamImg}
            />
          </Reveal>

          <Reveal delay={280} className="mt-10 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-3 font-condensed text-sm uppercase tracking-[0.12em]">
              <span className="rounded-md border border-primary/30 bg-black/30 px-4 py-2 backdrop-blur">
                Quando:{" "}
                <span className="text-primary">5, 6 e 7 ottobre 2026 · orario in arrivo</span>
              </span>
              <span className="rounded-md border border-primary/30 bg-black/30 px-4 py-2 backdrop-blur">
                Dove: <span className="text-primary">Online</span>
              </span>
            </div>

            <p className="mt-6 text-sm font-semibold italic text-secondary-foreground">
              Le iscrizioni chiudono domenica 4 ottobre a mezzanotte!
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              mancano:
            </p>
            <div className="mt-3">
              <Countdown />
            </div>

            <div className="mt-8">
              <CtaButton />
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
                E a forza di imparare a comunicare “bene”, tantissime professioniste hanno iniziato
                a comunicare tutte nello stesso modo: profili tecnicamente corretti, contenuti fatti
                bene, script perfetti.
              </p>
              <p className="font-semibold text-ink">Ma nessuna identità.</p>
              <p>
                In tre serate live rompiamo quelle regole, una per una, e costruiamo la tua
                comunicazione: quella che parte da chi sei, non da un format che “funziona”.
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

            <p
              className="mt-8 text-center font-condensed uppercase tracking-[0.16em]"
              style={{ color: "var(--gold-deep)" }}
            >
              Questa offerta scade domenica 4 ottobre a mezzanotte!
            </p>
            <div className="mt-6 flex justify-center">
              <CtaButton />
            </div>
          </Reveal>
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

      {/* Problema */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <SectionLabel>Il punto di partenza</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">In questo momento, probabilmente pensi:</h2>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {pains.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <li className="flex gap-4 rounded-xl border border-border/70 bg-card/50 p-5 transition-colors duration-300 hover:border-primary/40">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm italic leading-relaxed text-foreground/85 sm:text-base">
                    {p}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/85">
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

      {/* Bonus: il Workbook */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <SectionLabel>Bonus incluso</SectionLabel>
            <h2 className="text-3xl sm:text-4xl">Ricevi il Workbook di Rule The Rules</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              Non è un PDF “in più”. È il documento che ti accompagna serata per serata, e che alla
              fine delle tre giornate rappresenta fisicamente il percorso che hai fatto.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            {workbookDays.map((w, i) => (
              <Reveal key={w.t} delay={i * 90}>
                <div className="surface-card p-6 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-condensed text-base uppercase tracking-[0.12em] text-primary">
                    {w.t}
                  </p>
                  <p className="mt-2 text-sm text-foreground/80">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-sm italic text-muted-foreground">
              E alla fine, una pagina conclusiva tutta tua: “Le Mie Regole”, il manifesto personale
              della tua comunicazione.
            </p>
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
              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Nome e cognome"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="La tua email migliore"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="Numero di telefono"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <label className="flex items-start gap-3 text-xs text-muted-foreground">
                  <input type="checkbox" className="mt-0.5 accent-[oklch(0.79_0.15_84)]" />
                  <span>
                    Ho visto e accettato la{" "}
                    <a
                      href="https://www.iubenda.com/privacy-policy/47892266"
                      className="text-primary underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-xl px-6 py-4 font-condensed text-lg uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    color: "var(--primary-foreground)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  Vai allo STEP #2
                </button>
              </form>
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
