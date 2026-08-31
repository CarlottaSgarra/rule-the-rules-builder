type Props = {
  label?: string;
  sub?: string;
  className?: string;
};

export function CtaButton({
  label = "Ottieni il biglietto a soli 27€",
  sub = "Costruisci il modo in cui vuoi comunicare",
  className = "",
}: Props) {
  return (
    <a
      href="#iscriviti"
      className={`group inline-flex w-full max-w-xl flex-col items-center rounded-xl px-8 py-5 text-center transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
      style={{
        backgroundImage: "var(--gradient-gold)",
        boxShadow: "var(--shadow-gold)",
        color: "var(--primary-foreground)",
      }}
    >
      <span className="font-condensed text-lg uppercase tracking-[0.12em] sm:text-2xl">
        {label}
      </span>
      <span className="mt-1 text-xs font-medium opacity-80 sm:text-sm">{sub}</span>
    </a>
  );
}
