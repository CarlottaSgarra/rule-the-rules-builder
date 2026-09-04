import { CalendarDays, IdCard, SlidersHorizontal, Wand2 } from "lucide-react";

const panelClass =
  "w-full max-w-[240px] rounded-2xl bg-white p-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5";

function IdentityCardPanel() {
  return (
    <div className={panelClass}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Carta identitaria
        </span>
        <IdCard className="size-4 text-secondary" />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span
          className="size-10 shrink-0 rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)" }}
        />
        <div className="flex-1 space-y-1.5">
          <span className="block h-2 w-full rounded-full bg-foreground/70" />
          <span className="block h-2 w-2/3 rounded-full bg-foreground/30" />
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        <span className="block h-1.5 w-full rounded-full bg-foreground/15" />
        <span className="block h-1.5 w-4/5 rounded-full bg-foreground/15" />
        <span className="block h-1.5 w-3/5 rounded-full bg-foreground/15" />
      </div>
    </div>
  );
}

function AntiRulesPanel() {
  const rules = [
    { label: "Hook nei primi 3 secondi", on: false },
    { label: "Un formato al giorno", on: true },
    { label: "CTA in ogni caption", on: false },
    { label: "Il tuo modo di spiegare", on: true },
  ];
  return (
    <div className={panelClass}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Le tue anti-regole
        </span>
        <SlidersHorizontal className="size-4 text-secondary" />
      </div>
      <div className="mt-3 space-y-2.5">
        {rules.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-2">
            <span className="text-[11px] leading-tight text-foreground/70">{r.label}</span>
            <span
              className={`flex h-3.5 w-6 shrink-0 items-center rounded-full p-0.5 ${r.on ? "justify-end" : "justify-start"}`}
              style={{
                backgroundColor: r.on
                  ? "var(--primary)"
                  : "color-mix(in oklab, var(--foreground) 15%, transparent)",
              }}
            >
              <span className="size-2.5 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormatLabPanel() {
  const formats = [
    { label: "Script", active: false },
    { label: "Bullet point", active: true },
    { label: "Talking reel", active: false },
    { label: "Voice-over", active: false },
  ];
  return (
    <div className={panelClass}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Il tuo content lab
        </span>
        <Wand2 className="size-4 text-secondary" />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {formats.map((f) => (
          <span
            key={f.label}
            className="rounded-full px-2.5 py-1 text-[10px] font-medium"
            style={{
              backgroundColor: f.active
                ? "var(--primary)"
                : "color-mix(in oklab, var(--foreground) 8%, transparent)",
              color: f.active ? "var(--primary-foreground)" : "var(--foreground)",
              opacity: f.active ? 1 : 0.55,
            }}
          >
            {f.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function EditorialPlanPanel() {
  const cells = [1, 0, 2, 1, 0, 0, 2, 1, 0, 1, 2, 0];
  const dotColor = (v: number) =>
    v === 1
      ? "var(--primary)"
      : v === 2
        ? "var(--secondary)"
        : "color-mix(in oklab, var(--foreground) 12%, transparent)";
  return (
    <div className={panelClass}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Il tuo piano editoriale
        </span>
        <CalendarDays className="size-4 text-secondary" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {cells.map((v, i) => (
          <span
            key={i}
            className="aspect-square rounded-[4px]"
            style={{ backgroundColor: dotColor(v) }}
          />
        ))}
      </div>
      <span className="mt-3 block h-1.5 w-3/5 rounded-full bg-foreground/15" />
    </div>
  );
}

const visuals: Record<string, () => React.ReactNode> = {
  "carte-identitarie": IdentityCardPanel,
  "anti-regole": AntiRulesPanel,
  "metodo-creazione": FormatLabPanel,
  "piano-editoriale": EditorialPlanPanel,
};

const dayOf: Record<string, number> = {
  "carte-identitarie": 1,
  "anti-regole": 2,
  "metodo-creazione": 2,
  "piano-editoriale": 3,
};

const dayLabel = ["", "primo", "secondo", "terzo"];

type Props = {
  activeId: string;
};

export function TakeawayVisual({ activeId }: Props) {
  const Visual = visuals[activeId] ?? IdentityCardPanel;
  const day = dayOf[activeId] ?? 1;

  return (
    <div>
      <div
        className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl p-8"
        style={{ backgroundImage: "var(--gradient-ink)", boxShadow: "var(--shadow-deep)" }}
      >
        <div key={activeId} className="w-full animate-in fade-in zoom-in-95 duration-300">
          <Visual />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <span
          key={activeId}
          className="animate-in fade-in inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
          style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          Ne parliamo il {dayLabel[day]} giorno
        </span>
      </div>
    </div>
  );
}
