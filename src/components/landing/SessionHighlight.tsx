import { CalendarDays, IdCard, SlidersHorizontal } from "lucide-react";

type Variant = "identity-card" | "content-os" | "editorial-plan";

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

export function SessionHighlight({ variant, className = "" }: Props) {
  const content =
    variant === "identity-card" ? (
      <IdentityCard />
    ) : variant === "content-os" ? (
      <ContentOS />
    ) : (
      <EditorialPlan />
    );

  return <div className={className}>{content}</div>;
}
