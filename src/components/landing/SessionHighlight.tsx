import {
  CalendarDays,
  Compass,
  IdCard,
  LayoutDashboard,
  Lightbulb,
  SlidersHorizontal,
} from "lucide-react";

type Variant =
  "identity-card" | "content-os" | "editorial-plan" | "macro-topics" | "idea-bank" | "direction";

type Props = {
  variant: Variant;
  className?: string;
};

const wrapperClass =
  "w-28 rounded-xl bg-white p-2.5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:w-40 sm:p-3";

function IdentityCard() {
  return (
    <div className={`${wrapperClass} -rotate-6`}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
          Carta identitaria
        </span>
        <IdCard className="size-3.5 text-secondary" />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span
          className="size-8 shrink-0 rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)" }}
        />
        <div className="flex-1 space-y-1">
          <span className="block h-1.5 w-full rounded-full bg-foreground/70" />
          <span className="block h-1.5 w-2/3 rounded-full bg-foreground/30" />
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <span className="block h-1 w-full rounded-full bg-foreground/15" />
        <span className="block h-1 w-4/5 rounded-full bg-foreground/15" />
      </div>
    </div>
  );
}

function ContentOS() {
  const toggles = [true, false, true];
  return (
    <div className={`${wrapperClass} rotate-6`}>
      <div className="flex items-start justify-between gap-2">
        <span className="font-condensed text-[8px] uppercase leading-tight tracking-[0.1em] text-muted-foreground">
          Il tuo sistema operativo di contenuti
        </span>
        <SlidersHorizontal className="size-3.5 shrink-0 text-secondary" />
      </div>
      <div className="mt-2.5 space-y-2">
        {toggles.map((on, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <span
              className={`block h-1 rounded-full bg-foreground/15 ${i === 0 ? "w-12" : i === 1 ? "w-8" : "w-10"}`}
            />
            <span
              className={`flex h-3 w-5 shrink-0 items-center rounded-full p-0.5 ${on ? "justify-end" : "justify-start"}`}
              style={{
                backgroundColor: on
                  ? "var(--primary)"
                  : "color-mix(in oklab, var(--foreground) 15%, transparent)",
              }}
            >
              <span className="size-2 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialPlan() {
  const cells = [1, 0, 2, 1, 0, 0, 2, 1];
  const dotColor = (v: number) =>
    v === 1
      ? "var(--primary)"
      : v === 2
        ? "var(--secondary)"
        : "color-mix(in oklab, var(--foreground) 12%, transparent)";
  return (
    <div className={`${wrapperClass} rotate-3`}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
          Il tuo piano
        </span>
        <CalendarDays className="size-3.5 text-secondary" />
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1">
        {cells.map((v, i) => (
          <span
            key={i}
            className="aspect-square rounded-[3px]"
            style={{ backgroundColor: dotColor(v) }}
          />
        ))}
      </div>
      <span className="mt-2 block h-1 w-3/5 rounded-full bg-foreground/15" />
    </div>
  );
}

function MacroTopics() {
  const topics = [
    { w: "w-14", c: "var(--primary)" },
    { w: "w-10", c: "var(--secondary)" },
    { w: "w-8", c: "color-mix(in oklab, var(--foreground) 15%, transparent)" },
    { w: "w-12", c: "var(--secondary)" },
    { w: "w-9", c: "var(--primary)" },
  ];
  return (
    <div className={`${wrapperClass} rotate-6`}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
          I tuoi macro topic
        </span>
        <LayoutDashboard className="size-3.5 text-secondary" />
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1">
        {topics.map((t, i) => (
          <span
            key={i}
            className={`block h-3 rounded-full ${t.w}`}
            style={{ backgroundColor: t.c }}
          />
        ))}
      </div>
      <span className="mt-2 block h-1 w-4/5 rounded-full bg-foreground/15" />
    </div>
  );
}

function IdeaBank() {
  const ideas = ["var(--primary)", "var(--secondary)", "var(--primary)"];
  return (
    <div className={`${wrapperClass} -rotate-3`}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
          Banca idee
        </span>
        <Lightbulb className="size-3.5 text-secondary" />
      </div>
      <div className="mt-2.5 space-y-1.5">
        {ideas.map((c, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: c }} />
            <span
              className={`block h-1.5 rounded-full bg-foreground/15 ${i === 1 ? "w-3/5" : "w-full"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Direction() {
  return (
    <div className={`${wrapperClass} -rotate-6`}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
          La tua direzione
        </span>
        <Compass className="size-3.5 text-secondary" />
      </div>
      <div className="relative mt-3">
        <span className="block h-1.5 w-full rounded-full bg-foreground/15" />
        <span
          className="absolute inset-y-0 left-0 block w-2/3 rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)" }}
        />
        <span
          className="absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full ring-2 ring-white"
          style={{ left: "calc(66% - 5px)", backgroundColor: "var(--secondary)" }}
        />
      </div>
      <div className="mt-2.5 space-y-1">
        <span className="block h-1 w-full rounded-full bg-foreground/15" />
        <span className="block h-1 w-3/5 rounded-full bg-foreground/15" />
      </div>
    </div>
  );
}

const VARIANTS: Record<Variant, () => React.JSX.Element> = {
  "identity-card": IdentityCard,
  "content-os": ContentOS,
  "editorial-plan": EditorialPlan,
  "macro-topics": MacroTopics,
  "idea-bank": IdeaBank,
  direction: Direction,
};

export function SessionHighlight({ variant, className = "" }: Props) {
  const Content = VARIANTS[variant];
  return (
    <div className={className}>
      <Content />
    </div>
  );
}
