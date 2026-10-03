import {
  Check,
  ChevronDown,
  Compass,
  Flag,
  IdCard,
  LayoutDashboard,
  LayoutTemplate,
  Lightbulb,
  MessageCircle,
  Target,
} from "lucide-react";

// Illustrazioni dei 6 punti della sezione "Nei 4 mesi di Ambiziosa lavoriamo
// su tutti questi punti": stesso linguaggio grafico di SessionHighlight (card
// bianche, etichette condensed, chip oro/viola), ma ognuna rappresenta le
// righe della checklist del proprio punto.

export type PillarVisualVariant =
  "identity" | "macro-topics" | "idea-bank" | "structure" | "direction" | "strategy";

const card = "rounded-xl bg-white shadow-[0_20px_45px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/5";
const label = "font-condensed text-[9px] uppercase tracking-[0.15em] text-muted-foreground";
const strong = "text-[11px] font-semibold leading-tight text-foreground";
const gold = { backgroundImage: "var(--gradient-gold)" };

function CardHeader({ title, icon: Icon }: { title: string; icon: typeof IdCard }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className={label}>{title}</span>
      <Icon className="size-3.5 shrink-0 text-secondary" />
    </div>
  );
}

function Bar({ className = "w-full" }: { className?: string }) {
  return <span className={`block h-1.5 rounded-full bg-foreground/15 ${className}`} />;
}

// 1 · Chi sei, cosa vuoi comunicare, come vuoi essere percepita.
function Identity() {
  return (
    <div className={`${card} w-full max-w-[290px] -rotate-2 p-4`}>
      <CardHeader title="Carta identitaria" icon={IdCard} />
      <div className="mt-3 flex items-center gap-3">
        <span className="size-10 shrink-0 rounded-full" style={gold} />
        <div className="flex-1 space-y-1.5">
          <p className={strong}>Chi sei come professionista</p>
          <Bar className="w-4/5" />
        </div>
      </div>

      <p className={`${label} mt-4`}>I tuoi valori</p>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {["Autenticità", "Competenza", "Ambizione"].map((v, i) => (
          <span
            key={v}
            className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
            style={
              i === 1
                ? { backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }
                : { ...gold, color: "var(--primary-foreground)" }
            }
          >
            {v}
          </span>
        ))}
      </div>

      <p className={`${label} mt-4`}>Cosa vuoi comunicare</p>
      <div className="mt-1.5 flex items-start gap-1.5">
        <MessageCircle className="mt-0.5 size-3 shrink-0 text-secondary" />
        <div className="flex-1 space-y-1 rounded-lg rounded-tl-sm bg-foreground/[0.06] p-2">
          <Bar />
          <Bar className="w-3/5" />
        </div>
      </div>

      <p className={`${label} mt-4`}>La percezione che vuoi costruire</p>
      <div className="relative mt-2.5">
        <Bar />
        <span className="absolute inset-y-0 left-0 block w-[78%] rounded-full" style={gold} />
        <span
          className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full ring-2 ring-white"
          style={{ left: "calc(78% - 6px)", backgroundColor: "var(--secondary)" }}
        />
      </div>
    </div>
  );
}

// 2 · I temi grandi della comunicazione, che nascono dall'identità.
function MacroTopics() {
  const topics = [
    { n: 1, c: "var(--primary)" },
    { n: 2, c: "var(--secondary)" },
    { n: 3, c: "var(--secondary)" },
    { n: 4, c: "var(--primary)" },
  ];
  return (
    <div className="flex w-full max-w-[300px] flex-col items-center">
      <div className={`${card} flex items-center gap-2 px-3 py-2`}>
        <IdCard className="size-3.5 text-secondary" />
        <span className={strong}>La tua identità</span>
      </div>
      <ChevronDown className="my-1 size-5 text-primary" />
      <div className="grid w-full grid-cols-2 gap-2">
        {topics.map((t, i) => (
          <div key={t.n} className={`${card} p-2.5 ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}>
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: t.c }} />
              <span className={strong}>Macro topic {t.n}</span>
            </div>
            <div className="mt-2 space-y-1">
              <Bar />
              <Bar className="w-2/3" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 font-condensed text-[10px] uppercase tracking-[0.15em] text-ink-muted">
        I temi su cui costruisci tutto
      </p>
    </div>
  );
}

// 3 · Quando ti chiedi cosa pubblicare oggi hai già dove guardare;
//     idee su misura, nate dai tuoi macro topic.
function IdeaBank() {
  const ideas = [
    { topic: 1, c: "var(--primary)", today: true },
    { topic: 2, c: "var(--secondary)", today: false },
    { topic: 4, c: "var(--primary)", today: false },
    { topic: 3, c: "var(--secondary)", today: false },
  ];
  return (
    <div className="relative w-full max-w-[290px] pt-7">
      <span
        className={`${card} absolute left-0 top-0 z-10 -rotate-3 rounded-2xl rounded-bl-sm px-3 py-1.5 ${strong}`}
      >
        Cosa pubblico oggi?
      </span>
      <div className={`${card} rotate-1 p-4`}>
        <CardHeader title="La tua banca idee" icon={Lightbulb} />
        <div className="mt-3 space-y-1.5">
          {ideas.map((idea, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5"
              style={
                idea.today
                  ? { backgroundColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }
                  : undefined
              }
            >
              <Lightbulb className="size-3 shrink-0 text-secondary" />
              <Bar className={i === 2 ? "w-1/2" : "flex-1"} />
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-foreground/[0.06] px-1.5 py-0.5">
                <span className="size-1.5 rounded-full" style={{ backgroundColor: idea.c }} />
                <span className="text-[8px] font-semibold text-foreground/70">
                  Topic {idea.topic}
                </span>
              </span>
              {idea.today ? (
                <span
                  className="shrink-0 rounded-full px-1.5 py-0.5 font-condensed text-[8px] uppercase tracking-[0.1em] text-primary-foreground"
                  style={gold}
                >
                  Oggi
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 4 · Ogni contenuto ha un ruolo preciso: basta contenuti a caso.
function Structure() {
  const tiles = [
    { role: "Attira", bg: "var(--secondary)" },
    { role: "Educa", bg: "color-mix(in oklab, var(--primary) 70%, transparent)" },
    { role: "Vende", bg: "color-mix(in oklab, var(--foreground) 14%, transparent)" },
    { role: "Educa", bg: "color-mix(in oklab, var(--foreground) 14%, transparent)" },
    { role: "Vende", bg: "var(--secondary)" },
    { role: "Attira", bg: "color-mix(in oklab, var(--primary) 70%, transparent)" },
  ];
  return (
    <div className={`${card} w-full max-w-[290px] rotate-2 p-4`}>
      <CardHeader title="La struttura dei tuoi contenuti" icon={LayoutTemplate} />
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-md"
            style={{ backgroundColor: t.bg }}
          >
            <span className="absolute bottom-1 left-1 rounded-full bg-white/95 px-1.5 py-0.5 font-condensed text-[8px] uppercase tracking-[0.08em] text-foreground">
              {t.role}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <Check className="size-3.5 shrink-0 text-secondary" />
        <span className={strong}>Ogni contenuto ha un ruolo</span>
      </div>
    </div>
  );
}

// 5 · Una direzione precisa fin dai primi contenuti, verso i tuoi obiettivi.
function Direction() {
  const steps = ["Oggi", "Primi contenuti", "I tuoi obiettivi"];
  return (
    <div className={`${card} w-full max-w-[290px] -rotate-2 p-4`}>
      <CardHeader title="La tua direzione" icon={Compass} />
      <div className="relative mt-5 px-2">
        <Bar />
        <span className="absolute inset-y-0 left-2 block w-[55%] rounded-full" style={gold} />
        <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
          {steps.map((s, i) =>
            i === steps.length - 1 ? (
              <span
                key={s}
                className="flex size-6 items-center justify-center rounded-full ring-2 ring-white"
                style={gold}
              >
                <Flag className="size-3 text-primary-foreground" />
              </span>
            ) : (
              <span
                key={s}
                className="size-3 rounded-full ring-2 ring-white"
                style={{ backgroundColor: "var(--secondary)" }}
              />
            ),
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        {steps.map((s) => (
          <span
            key={s}
            className="max-w-[5.5rem] text-center text-[9px] font-semibold text-foreground"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-foreground/[0.06] p-2.5">
        <div className="flex items-center gap-1.5">
          <Target className="size-3.5 shrink-0 text-secondary" />
          <span className={strong}>Obiettivi tuoi, non delle altre</span>
        </div>
        <div className="mt-2 space-y-1">
          <Bar />
          <Bar className="w-2/3" />
        </div>
      </div>
    </div>
  );
}

// 6 · Cosa pubblicare, perché e dove stai andando; applicata già durante il
//     percorso; Mentorship e Program.
function Strategy() {
  const rows = ["Cosa pubblicare", "Perché lo pubblichi", "Dove stai andando"];
  return (
    <div className={`${card} w-full max-w-[290px] rotate-1 p-4`}>
      <CardHeader title="La tua strategia completa" icon={LayoutDashboard} />
      <div className="mt-3 space-y-1.5">
        {rows.map((r) => (
          <div
            key={r}
            className="flex items-center gap-2 rounded-lg bg-foreground/[0.06] px-2 py-1.5"
          >
            <span
              className="flex size-4 shrink-0 items-center justify-center rounded-full"
              style={gold}
            >
              <Check className="size-2.5 text-primary-foreground" strokeWidth={3} />
            </span>
            <span className={strong}>{r}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className={label}>Applicata nel percorso</span>
        <span className="text-[9px] font-semibold text-foreground">80%</span>
      </div>
      <div className="relative mt-1.5">
        <Bar />
        <span className="absolute inset-y-0 left-0 block w-4/5 rounded-full" style={gold} />
      </div>
      <div className="mt-4 flex gap-1.5">
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
          style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
        >
          Mentorship
        </span>
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-primary-foreground"
          style={gold}
        >
          Program
        </span>
      </div>
    </div>
  );
}

const VARIANTS: Record<PillarVisualVariant, () => React.JSX.Element> = {
  identity: Identity,
  "macro-topics": MacroTopics,
  "idea-bank": IdeaBank,
  structure: Structure,
  direction: Direction,
  strategy: Strategy,
};

export function AmbiziosaPillarVisual({ variant }: { variant: PillarVisualVariant }) {
  const Content = VARIANTS[variant];
  return (
    <div
      className="flex min-h-[300px] items-center justify-center rounded-2xl border-2 border-dashed p-6 sm:p-8"
      style={{
        backgroundColor: "color-mix(in oklab, var(--background) 6%, transparent)",
        borderColor: "color-mix(in oklab, var(--primary) 35%, transparent)",
      }}
    >
      <Content />
    </div>
  );
}
