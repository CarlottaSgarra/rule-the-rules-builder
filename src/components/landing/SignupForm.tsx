type Props = {
  compact?: boolean;
  className?: string;
  submitLabel?: string;
  submitSub?: string;
  action?: string;
};

const STANDARD_TICKET_ACTION = "https://systeme.io/embedded/44087792/subscription";

const countryPrefixes = [
  { code: "+39", flag: "🇮🇹", name: "Italia" },
  { code: "+378", flag: "🇸🇲", name: "San Marino" },
  { code: "+41", flag: "🇨🇭", name: "Svizzera" },
  { code: "+377", flag: "🇲🇨", name: "Monaco" },
  { code: "+33", flag: "🇫🇷", name: "Francia" },
  { code: "+49", flag: "🇩🇪", name: "Germania" },
  { code: "+34", flag: "🇪🇸", name: "Spagna" },
  { code: "+351", flag: "🇵🇹", name: "Portogallo" },
  { code: "+44", flag: "🇬🇧", name: "Regno Unito" },
  { code: "+353", flag: "🇮🇪", name: "Irlanda" },
  { code: "+31", flag: "🇳🇱", name: "Paesi Bassi" },
  { code: "+32", flag: "🇧🇪", name: "Belgio" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+30", flag: "🇬🇷", name: "Grecia" },
  { code: "+352", flag: "🇱🇺", name: "Lussemburgo" },
  { code: "+45", flag: "🇩🇰", name: "Danimarca" },
  { code: "+46", flag: "🇸🇪", name: "Svezia" },
  { code: "+47", flag: "🇳🇴", name: "Norvegia" },
  { code: "+358", flag: "🇫🇮", name: "Finlandia" },
  { code: "+48", flag: "🇵🇱", name: "Polonia" },
  { code: "+420", flag: "🇨🇿", name: "Repubblica Ceca" },
  { code: "+36", flag: "🇭🇺", name: "Ungheria" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+385", flag: "🇭🇷", name: "Croazia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+1", flag: "🇺🇸", name: "USA / Canada" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+55", flag: "🇧🇷", name: "Brasile" },
  { code: "+52", flag: "🇲🇽", name: "Messico" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+90", flag: "🇹🇷", name: "Turchia" },
  { code: "+212", flag: "🇲🇦", name: "Marocco" },
  { code: "+27", flag: "🇿🇦", name: "Sudafrica" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+86", flag: "🇨🇳", name: "Cina" },
  { code: "+81", flag: "🇯🇵", name: "Giappone" },
  { code: "+82", flag: "🇰🇷", name: "Corea del Sud" },
  { code: "+971", flag: "🇦🇪", name: "Emirati Arabi Uniti" },
];

export function SignupForm({
  compact = false,
  className = "",
  submitLabel = "Vai al pagamento",
  submitSub,
  action = STANDARD_TICKET_ACTION,
}: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const phoneInput = e.currentTarget.elements.namedItem("phone_number");
    const prefixSelect = e.currentTarget.querySelector<HTMLSelectElement>("[data-phone-prefix]");
    if (phoneInput instanceof HTMLInputElement) {
      const value = phoneInput.value.trim();
      const prefix = prefixSelect?.value || "+39";
      if (value && !value.startsWith("+")) {
        phoneInput.value = `${prefix} ${value}`;
      }
    }
  }

  return (
    <form
      method="post"
      action={action}
      target="_top"
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
    >
      <input
        type="text"
        name="first_name"
        placeholder="Nome"
        required
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-card-foreground/50 focus:border-primary"
      />
      <input
        type="email"
        name="email"
        placeholder="La tua email migliore"
        required
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-card-foreground/50 focus:border-primary"
      />
      {compact ? null : (
        <div className="flex gap-2">
          <select
            data-phone-prefix
            defaultValue="+39"
            aria-label="Prefisso internazionale"
            className="shrink-0 rounded-lg border border-input bg-background px-2 py-3 text-sm text-card-foreground outline-none focus:border-primary"
          >
            {countryPrefixes.map((c) => (
              <option key={c.code + c.name} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone_number"
            placeholder="WhatsApp (senza prefisso)"
            className="w-full min-w-0 rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-card-foreground/50 focus:border-primary"
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
        <span className="font-condensed text-base uppercase tracking-[0.1em] sm:text-lg sm:tracking-[0.14em]">
          {submitLabel}
        </span>
        {submitSub ? (
          <span className="mt-1 whitespace-nowrap text-[10px] font-medium opacity-80 sm:text-xs">
            {submitSub}
          </span>
        ) : null}
      </button>
    </form>
  );
}
