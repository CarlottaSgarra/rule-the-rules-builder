import {
  CalendarCheck,
  Check,
  IdCard,
  Layers,
  MessageCircle,
  Play,
  Scissors,
  Send,
  Sparkles,
  TrendingUp,
} from "lucide-react";

// Illustrazioni dei 4 step della sezione "#programma": stesso linguaggio
// grafico di SessionHighlight (card bianche, etichette condensed, chip
// oro/viola), ma ognuna rappresenta le righe della checklist del proprio step.

export type PillarVisualVariant = "radica" | "progetta" | "attiva" | "chiudi";

const card = "rounded-xl bg-white shadow-[0_20px_45px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/5";
const label = "font-condensed text-[9px] uppercase tracking-[0.15em] text-muted-foreground";
const strong = "text-[11px] font-semibold leading-tight text-foreground";
const gold = { backgroundImage: "var(--gradient-gold)" };
const mulberry = { backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" };

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

function Chip({ children, variant }: { children: React.ReactNode; variant: "gold" | "mulberry" }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${variant === "gold" ? "text-primary-foreground" : ""}`}
      style={variant === "gold" ? gold : mulberry}
    >
      {children}
    </span>
  );
}

// 1 · Radica chi sei: identità e sistema di offerte, con Carlotta.
function Radica() {
  const offers = [
    { name: "Offerta d'ingresso", w: "w-[55%]" },
    { name: "Il tuo percorso", w: "w-[75%]" },
    { name: "Offerta premium", w: "w-full" },
  ];
  return (
    <div className="relative w-full max-w-[290px] pb-2">
      <div className={`${card} -rotate-2 p-4`}>
        <CardHeader title="La tua identità" icon={IdCard} />
        <div className="mt-3 flex items-center gap-3">
          <span className="size-9 shrink-0 rounded-full" style={gold} />
          <div className="flex-1 space-y-1.5">
            <p className={strong}>Chi sei come professionista</p>
            <Bar className="w-4/5" />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          <Chip variant="gold">Valori</Chip>
          <Chip variant="mulberry">Posizionamento</Chip>
          <Chip variant="gold">Percezione</Chip>
        </div>
      </div>

      <div className={`${card} relative -mt-2 ml-6 rotate-1 p-4`}>
        <CardHeader title="Il tuo sistema di offerte" icon={Layers} />
        <div className="mt-3 space-y-1.5">
          {offers.map((o, i) => (
            <div key={o.name} className={`${o.w} ml-auto`}>
              <div
                className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5"
                style={
                  i === offers.length - 1
                    ? gold
                    : { backgroundColor: "color-mix(in oklab, var(--secondary) 12%, white)" }
                }
              >
                <span
                  className={`text-[9px] font-semibold ${i === offers.length - 1 ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {o.name}
                </span>
                <TrendingUp
                  className={`size-3 shrink-0 ${i === offers.length - 1 ? "text-primary-foreground" : "text-secondary"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <span
        className="absolute -right-2 -top-3 rotate-6 rounded-full px-2.5 py-1 font-condensed text-[9px] uppercase tracking-[0.12em] shadow-md"
        style={mulberry}
      >
        Con Carlotta
      </span>
    </div>
  );
}

// 2 · Progetta i contenuti: strategia e piano editoriale su misura, con Sharon.
function Progetta() {
  const days = ["Lun", "Mar", "Mer", "Gio", "Ven"];
  const plan: ({ role: string; topic: number } | null)[] = [
    { role: "Attira", topic: 1 },
    null,
    { role: "Educa", topic: 2 },
    { role: "Attira", topic: 3 },
    { role: "Vende", topic: 1 },
  ];
  const roleStyle: Record<string, React.CSSProperties> = {
    Attira: {
      backgroundColor: "color-mix(in oklab, var(--primary) 55%, white)",
      color: "var(--foreground)",
    },
    Educa: {
      backgroundColor: "color-mix(in oklab, var(--secondary) 18%, white)",
      color: "var(--foreground)",
    },
    Vende: mulberry,
  };
  return (
    <div className="relative w-full max-w-[290px]">
      <div className={`${card} rotate-1 p-4`}>
        <CardHeader title="Il tuo piano editoriale" icon={CalendarCheck} />
        <div className="mt-3 flex flex-wrap gap-1">
          {[1, 2, 3].map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 rounded-full bg-foreground/[0.06] px-1.5 py-0.5"
            >
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: t === 2 ? "var(--secondary)" : "var(--primary)" }}
              />
              <span className="text-[8px] font-semibold text-foreground/70">Macro topic {t}</span>
            </span>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-5 gap-1">
          {days.map((d, i) => {
            const slot = plan[i];
            return (
              <div key={d} className="flex flex-col items-center gap-1">
                <span className="text-[8px] font-semibold text-muted-foreground">{d}</span>
                {slot ? (
                  <div
                    className="flex h-14 w-full flex-col justify-between rounded-md p-1"
                    style={roleStyle[slot.role]}
                  >
                    <span className="text-[7px] font-semibold opacity-70">T{slot.topic}</span>
                    <span className="font-condensed text-[7.5px] uppercase tracking-[0.04em]">
                      {slot.role}
                    </span>
                  </div>
                ) : (
                  <div className="h-14 w-full rounded-md border border-dashed border-foreground/15" />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <Check className="size-3.5 shrink-0 text-secondary" />
          <span className={strong}>Ogni contenuto ha un ruolo</span>
        </div>
      </div>
      <span
        className="absolute -left-2 -top-3 -rotate-6 rounded-full px-2.5 py-1 font-condensed text-[9px] uppercase tracking-[0.12em] text-primary-foreground shadow-md"
        style={gold}
      >
        Con Sharon
      </span>
    </div>
  );
}

// 3 · Attiva i contenuti: si pubblica, editing identitario, strategie per vendere.
function Attiva() {
  const clips = [
    "color-mix(in oklab, var(--secondary) 75%, white)",
    "color-mix(in oklab, var(--primary) 70%, white)",
    "color-mix(in oklab, var(--secondary) 40%, white)",
    "color-mix(in oklab, var(--primary) 45%, white)",
  ];
  return (
    <div className="relative w-full max-w-[290px] pt-4">
      <div className={`${card} -rotate-1 p-4`}>
        <CardHeader title="Il tuo editing identitario" icon={Scissors} />
        <div
          className="relative mt-3 flex aspect-[16/8] items-center justify-center rounded-lg"
          style={{ backgroundImage: "var(--gradient-night)" }}
        >
          <span className="flex size-8 items-center justify-center rounded-full" style={gold}>
            <Play className="ml-0.5 size-3.5 text-primary-foreground" fill="currentColor" />
          </span>
          <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded bg-white/90 px-1.5 py-0.5 text-[8px] font-semibold text-foreground">
            Il tuo stile, riconoscibile
          </span>
        </div>
        <div className="mt-2 flex gap-0.5">
          {clips.map((c, i) => (
            <span
              key={i}
              className={`h-3 rounded-sm ${i === 1 ? "flex-[2]" : "flex-1"}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-foreground/[0.06] px-2 py-1.5">
          <Sparkles className="size-3 shrink-0 text-secondary" />
          <span className="flex-1 text-[9px] font-semibold text-foreground">
            Strategia di vendita nel contenuto
          </span>
          <Chip variant="mulberry">Vende</Chip>
        </div>
      </div>
      <span
        className={`${card} absolute -right-2 top-0 flex rotate-3 items-center gap-1.5 rounded-full px-2.5 py-1`}
      >
        <span className="flex size-3.5 items-center justify-center rounded-full" style={gold}>
          <Check className="size-2.5 text-primary-foreground" strokeWidth={3} />
        </span>
        <span className="text-[9px] font-semibold text-foreground">Pubblicato</span>
      </span>
    </div>
  );
}

// 4 · Chiudi e scala: da follower a cliente, messaggi privati, call conoscitiva.
function Chiudi() {
  const funnel = ["Follower", "Messaggio", "Call", "Cliente"];
  return (
    <div className="w-full max-w-[290px] space-y-2">
      <div className={`${card} rotate-1 p-4`}>
        <CardHeader title="Messaggi privati" icon={MessageCircle} />
        <div className="mt-3 space-y-1.5">
          <div className="max-w-[80%] rounded-xl rounded-bl-sm bg-foreground/[0.06] px-2.5 py-1.5 text-[9px] text-foreground">
            Ciao! Il tuo ultimo reel mi ha colpita, come posso lavorare con te?
          </div>
          <div
            className="ml-auto max-w-[80%] rounded-xl rounded-br-sm px-2.5 py-1.5 text-[9px]"
            style={mulberry}
          >
            Che bello! Ti va una call conoscitiva?
          </div>
        </div>
        <div
          className="mt-3 flex items-center gap-2 rounded-lg px-2 py-1.5"
          style={{ backgroundColor: "color-mix(in oklab, var(--primary) 30%, white)" }}
        >
          <CalendarCheck className="size-3.5 shrink-0 text-secondary" />
          <span className="flex-1 text-[9px] font-semibold text-foreground">
            Call conoscitiva · confermata
          </span>
          <Send className="size-3 shrink-0 text-secondary" />
        </div>
      </div>
      <div className={`${card} -rotate-1 px-3 py-2.5`}>
        <div className="flex items-center justify-between gap-1">
          {funnel.map((f, i) => (
            <div key={f} className="flex items-center gap-1">
              <span
                className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${i === funnel.length - 1 ? "text-primary-foreground" : "bg-foreground/[0.06] text-foreground"}`}
                style={i === funnel.length - 1 ? gold : undefined}
              >
                {f}
              </span>
              {i < funnel.length - 1 ? (
                <span className="text-[9px] text-muted-foreground">›</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const VARIANTS: Record<PillarVisualVariant, () => React.JSX.Element> = {
  radica: Radica,
  progetta: Progetta,
  attiva: Attiva,
  chiudi: Chiudi,
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
