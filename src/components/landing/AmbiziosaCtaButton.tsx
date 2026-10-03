import { CTA_LABEL } from "@/lib/ambiziosa-config";

// Bottone "Candidati ora" riutilizzabile per /candidati-ambiziosa: legge
// CTA_LABEL da ambiziosa-config.ts così il testo resta identico ovunque
// venga usato nella pagina. Fa scroll morbido all'ancora `targetId` (di
// default "candidature") e non genera errori se quella sezione non esiste
// ancora: il browser ignora semplicemente l'href "#id" senza corrispondenza.
//
// variant "topbar": piccolo, sfondo verde acido/testo bordeaux — usato
// nella barra sticky.
// variant "hero": grande, stesso sfondo a gradiente verde/oro degli altri
// pulsanti CTA della pagina (card prezzo, form finale); solo l'etichetta,
// senza riga di rassicurazione sotto.
type Props = {
  variant: "topbar" | "hero";
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

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`inline-flex min-w-[260px] items-center justify-center rounded-xl px-8 py-5 text-center font-condensed text-base font-bold uppercase tracking-[0.06em] transition-transform duration-200 hover:-translate-y-0.5 sm:min-w-[360px] sm:text-lg ${className}`}
      style={{
        backgroundImage: "var(--gradient-gold)",
        color: "var(--primary-foreground)",
        boxShadow: "var(--shadow-gold)",
      }}
    >
      {CTA_LABEL}
    </a>
  );
}
