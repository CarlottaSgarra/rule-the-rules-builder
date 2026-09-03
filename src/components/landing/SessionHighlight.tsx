import { CalendarDays, IdCard, ListX } from "lucide-react";

type Variant = "identity-card" | "anti-rule" | "editorial-plan";

type Props = {
  variant: Variant;
  className?: string;
};

const wrapperClass =
  "w-36 rounded-xl bg-white p-3 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:w-40";

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

function AntiRule() {
  return (
    <div className={`${wrapperClass} rotate-6`}>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
          Regola #04
        </span>
        <ListX className="size-3.5 text-destructive" />
      </div>
      <div className="relative mt-2">
        <span className="block h-1.5 w-full rounded-full bg-foreground/25" />
        <span className="absolute inset-y-0 left-0 right-0 top-1/2 h-px -rotate-3 bg-destructive/70" />
      </div>
      <span className="mt-1.5 block h-1 w-3/5 rounded-full bg-foreground/15" />
      <span
        className="mt-2 inline-block rounded-full px-2 py-0.5 font-condensed text-[8px] uppercase tracking-[0.1em] text-destructive"
        style={{ backgroundColor: "color-mix(in oklab, var(--destructive) 14%, transparent)" }}
      >
        Licenziata
      </span>
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

export function SessionHighlight({ variant, className = "" }: Props) {
  const content =
    variant === "identity-card" ? (
      <IdentityCard />
    ) : variant === "anti-rule" ? (
      <AntiRule />
    ) : (
      <EditorialPlan />
    );

  return <div className={className}>{content}</div>;
}
