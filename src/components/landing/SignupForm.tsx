type Props = {
  compact?: boolean;
  className?: string;
  submitLabel?: string;
  submitSub?: string;
};

export function SignupForm({
  compact = false,
  className = "",
  submitLabel = "Vai al pagamento",
  submitSub,
}: Props) {
  return (
    <form className={`space-y-4 ${className}`} onSubmit={(e) => e.preventDefault()}>
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
      {compact ? null : (
        <input
          type="tel"
          placeholder="Il tuo WhatsApp"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
        />
      )}
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
        className="flex w-full flex-col items-center rounded-xl px-6 py-4 transition-transform hover:-translate-y-0.5"
        style={{
          backgroundImage: "var(--gradient-gold)",
          color: "var(--primary-foreground)",
          boxShadow: "var(--shadow-gold)",
        }}
      >
        <span className="font-condensed text-lg uppercase tracking-[0.14em]">{submitLabel}</span>
        {submitSub ? (
          <span className="mt-1 text-xs font-medium opacity-80">{submitSub}</span>
        ) : null}
      </button>
    </form>
  );
}
