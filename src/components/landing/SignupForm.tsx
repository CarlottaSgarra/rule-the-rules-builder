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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const phoneInput = e.currentTarget.elements.namedItem("phone_number");
    if (phoneInput instanceof HTMLInputElement) {
      const value = phoneInput.value.trim();
      if (value && !value.startsWith("+")) {
        phoneInput.value = `+39 ${value}`;
      }
    }
  }

  return (
    <form
      method="post"
      action="https://systeme.io/embedded/44087792/subscription"
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
    >
      <input
        type="text"
        name="first_name"
        placeholder="Nome"
        required
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />
      <input
        type="email"
        name="email"
        placeholder="La tua email migliore"
        required
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />
      {compact ? null : (
        <div className="flex gap-2">
          <span className="flex shrink-0 items-center justify-center rounded-lg border border-input bg-background px-3 py-3 text-sm text-muted-foreground">
            🇮🇹 +39
          </span>
          <input
            type="tel"
            name="phone_number"
            placeholder="Il tuo WhatsApp"
            className="w-full min-w-0 rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      )}
      <label className="flex items-start gap-3 text-xs text-muted-foreground">
        <input type="checkbox" required className="mt-0.5 accent-[var(--primary)]" />
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
          <span className="mt-1 text-[10px] font-medium opacity-80 sm:text-xs">{submitSub}</span>
        ) : null}
      </button>
    </form>
  );
}
