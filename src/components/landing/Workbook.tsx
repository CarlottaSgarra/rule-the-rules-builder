export function Workbook() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl"
        style={{ backgroundColor: "var(--cream)", opacity: 0.5 }}
        aria-hidden
      />
      <div
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl"
        style={{ backgroundColor: "var(--cream)", opacity: 0.75 }}
        aria-hidden
      />

      <div
        className="surface-gold relative flex aspect-[3/4] flex-col justify-between overflow-hidden p-8"
        style={{ borderRadius: "1.25rem", boxShadow: "var(--shadow-deep)" }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-3"
          style={{ backgroundColor: "color-mix(in oklab, black 18%, transparent)" }}
          aria-hidden
        />

        <div>
          <p className="font-condensed text-xs uppercase tracking-[0.32em] text-primary-foreground/75">
            Rule The Rules
          </p>
          <h3 className="mt-3 font-display text-4xl leading-none text-primary-foreground">
            Il
            <br />
            Workbook
          </h3>
        </div>

        <div className="space-y-2">
          {["Giorno 1", "Giorno 2", "Giorno 3"].map((d) => (
            <div
              key={d}
              className="rounded-md px-3 py-1.5 font-condensed text-[11px] uppercase tracking-[0.18em] text-primary-foreground"
              style={{ backgroundColor: "color-mix(in oklab, black 15%, transparent)" }}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
