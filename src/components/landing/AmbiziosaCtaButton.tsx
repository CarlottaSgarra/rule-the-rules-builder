import { CTA_LABEL } from "@/lib/ambiziosa-config";

// Bottone "Candidati ora" riutilizzabile per /candidati-ambiziosa: legge
// CTA_LABEL da ambiziosa-config.ts così il testo resta identico ovunque
// venga usato nella pagina. Fa scroll morbido all'ancora `targetId` (di
// default "candidature") e non genera errori se quella sezione non esiste
// ancora: il browser ignora semplicemente l'href "#id" senza corrispondenza.
type Props = {
  variant: "topbar";
  targetId?: string;
  className?: string;
};

export function AmbiziosaCtaButton({ variant, targetId = "candidature", className = "" }: Props) {
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
        className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-center font-condensed text-[11px] font-semibold uppercase leading-tight tracking-[0.06em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:text-xs sm:tracking-[0.1em] ${className}`}
        style={{ backgroundColor: "var(--primary)", color: "var(--secondary)" }}
      >
        {CTA_LABEL}
      </a>
    );
  }

  return null;
}
