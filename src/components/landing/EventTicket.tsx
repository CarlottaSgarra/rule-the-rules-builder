type Props = {
  attendeeName?: string;
};

export function EventTicket({ attendeeName = "Giulia Bianchi" }: Props) {
  return (
    <div
      className="relative mx-auto flex max-w-lg overflow-hidden rounded-2xl transition-transform duration-300 ease-out hover:-rotate-2 hover:scale-[1.02]"
      style={{
        backgroundImage:
          "linear-gradient(100deg, var(--secondary) 0%, var(--secondary) 55%, color-mix(in oklab, var(--primary) 30%, var(--secondary)) 100%)",
        border: "2px solid var(--primary)",
        boxShadow:
          "var(--shadow-gold), 0 40px 80px -30px color-mix(in oklab, var(--primary) 40%, transparent)",
      }}
    >
      <div className="flex-1 p-5 sm:p-6" style={{ color: "var(--secondary-foreground)" }}>
        <p className="font-condensed text-[10px] uppercase tracking-[0.3em] text-primary">
          Biglietto ufficiale
        </p>
        <p className="mt-1 font-display text-2xl sm:text-3xl">Rule The Rules</p>
        <p className="font-condensed text-sm uppercase tracking-[0.15em] text-primary">2026</p>

        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
          <div>
            <p className="uppercase tracking-[0.1em] text-ink-muted/70">Intestato a</p>
            <p className="mt-0.5 font-semibold">{attendeeName}</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.1em] text-ink-muted/70">Date</p>
            <p className="mt-0.5 font-semibold">5-6-7 Ottobre</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.1em] text-ink-muted/70">Ora</p>
            <p className="mt-0.5 font-semibold">19:30</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.1em] text-ink-muted/70">Dove</p>
            <p className="mt-0.5 font-semibold">Live su Zoom</p>
          </div>
        </div>
      </div>

      <div
        className="relative flex w-24 shrink-0 flex-col items-center justify-center gap-2 border-l-2 border-dashed px-3 py-4 text-center sm:w-28"
        style={{
          borderColor: "color-mix(in oklab, var(--primary) 55%, transparent)",
          color: "var(--secondary-foreground)",
        }}
      >
        <span
          className="absolute -top-2 left-0 size-4 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: "var(--background)" }}
          aria-hidden
        />
        <span
          className="absolute -bottom-2 left-0 size-4 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: "var(--background)" }}
          aria-hidden
        />
        <p className="font-condensed text-[9px] uppercase leading-tight tracking-[0.15em] text-primary">
          Ammessa
        </p>
        <p className="font-display text-2xl">1</p>
        <p className="font-condensed text-[9px] uppercase leading-tight tracking-[0.1em] text-ink-muted/70">
          N° RTR-2026
        </p>
      </div>
    </div>
  );
}
