import { Countdown } from "@/components/landing/Countdown";

type Props = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function SiteTopbar({ ctaHref = "#iscriviti", ctaLabel = "Prendi il biglietto" }: Props) {
  return (
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-1 px-4 py-2 text-sm text-muted-foreground sm:grid sm:grid-cols-3 sm:gap-3 sm:px-5 sm:py-4">
        <p className="min-w-0 flex-1 font-condensed text-[10px] font-bold uppercase tracking-[0.06em] text-foreground sm:flex-none sm:text-base sm:leading-tight sm:tracking-[0.15em] sm:justify-self-start">
          <span className="sm:block">
            Live su Zoom<span className="sm:hidden"> · </span>
          </span>
          <span className="whitespace-nowrap sm:block">5-6-7 Ottobre</span>
        </p>
        <div className="flex flex-1 items-center justify-center gap-1 sm:flex-none sm:flex-wrap sm:gap-x-4 sm:gap-y-2 sm:justify-self-center">
          <span className="hidden font-condensed text-xs uppercase tracking-[0.15em] text-muted-foreground sm:inline">
            L’evento inizia tra
          </span>
          <Countdown compact />
        </div>
        <a
          href={ctaHref}
          className="min-w-0 shrink-0 rounded-md px-2 py-1.5 text-center font-condensed text-[10px] uppercase leading-tight tracking-[0.03em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.12em] sm:justify-self-end"
          style={{
            backgroundImage: "var(--gradient-gold)",
            color: "var(--primary-foreground)",
          }}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
