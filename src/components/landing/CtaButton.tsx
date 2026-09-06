type Props = {
  label?: string;
  sub?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export function CtaButton({
  label = "Ottieni il biglietto a soli 27€",
  sub = "5-6-7 ottobre · 27€ · Garanzia rimborso",
  className = "",
  href = "#iscriviti",
  target,
  rel,
}: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group inline-flex w-full max-w-xl flex-col items-center rounded-xl px-4 py-3 text-center transition-transform duration-200 hover:-translate-y-0.5 sm:px-6 sm:py-5 ${className}`}
      style={{
        backgroundImage: "var(--gradient-gold)",
        boxShadow: "var(--shadow-gold)",
        color: "var(--primary-foreground)",
      }}
    >
      <span className="font-condensed text-sm font-bold uppercase tracking-[0.04em] sm:text-base sm:tracking-[0.04em]">
        {label}
      </span>
      <span className="mt-1 whitespace-nowrap text-[9px] font-medium opacity-80 sm:text-sm">
        {sub}
      </span>
    </a>
  );
}
