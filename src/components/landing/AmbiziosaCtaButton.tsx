import { CTA_LABEL, CTA_MICROCOPY } from "@/lib/ambiziosa-config";

// Bottone "Candidati ora" riutilizzabile per /candidati-ambiziosa: legge
// CTA_LABEL (ed eventualmente CTA_MICROCOPY) da ambiziosa-config.ts così il
// testo resta identico ovunque venga usato nella pagina. Fa scroll morbido
// all'ancora `targetId` (di default "candidature") e non genera errori se
// quella sezione non esiste ancora: il browser ignora semplicemente l'href
// "#id" senza corrispondenza.
//
// variant "topbar": piccolo, sfondo verde acido/testo bordeaux, senza riga
// di rassicurazione — usato nella barra sticky.
// variant "hero": grande, stesso sfondo a gradiente verde/oro e stessa
// struttura (flex-col dentro un unico <a>) degli altri pulsanti CTA della
// pagina (card prezzo, form finale); la riga di rassicurazione è una
// seconda riga dentro al pulsante stesso, non un testo separato sotto.
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
      className={`inline-flex w-full flex-col items-center gap-1 rounded-xl px-6 py-4 text-center transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto sm:min-w-[280px] ${className}`}
      style={{
        backgroundImage: "var(--gradient-gold)",
        color: "var(--primary-foreground)",
        boxShadow: "var(--shadow-gold)",
      }}
    >
      <span className="font-condensed text-sm font-bold uppercase tracking-[0.06em] sm:text-base">
        {CTA_LABEL}
      </span>
      <span className="font-body text-xs font-normal normal-case tracking-normal opacity-80">
        {CTA_MICROCOPY}
      </span>
    </a>
  );
}
