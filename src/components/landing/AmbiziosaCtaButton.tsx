import { CTA_LABEL, CTA_SUB } from "@/lib/ambiziosa-config";

// Bottone di candidatura per /candidati-ambiziosa, con le stesse ricette
// grafiche della pagina Rule The Rules: "topbar" = pulsante di SiteTopbar,
// "hero" = CtaButton (etichetta + riga piccola sotto). Fa scroll morbido
// all'ancora `targetId` (di default "candidatura", la sezione del form).
type Props = {
  variant: "topbar" | "hero";
  label?: string;
  sub?: string;
  targetId?: string;
  className?: string;
};

export function AmbiziosaCtaButton({
  variant,
  label = CTA_LABEL,
  sub = CTA_SUB,
  targetId = "candidatura",
  className = "",
}: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (variant === "topbar") {
    return (
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        className={`min-w-0 shrink-0 rounded-md px-2 py-1.5 text-center font-condensed text-[10px] uppercase leading-tight tracking-[0.03em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.12em] ${className}`}
        style={{ backgroundImage: "var(--gradient-gold)", color: "var(--primary-foreground)" }}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
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
