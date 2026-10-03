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
// variant "hero": grande, sfondo bordeaux/testo chiaro, con la riga di
// rassicurazione sotto — usato nella hero e nelle altre sezioni "piene".
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
    <div className={`flex flex-col items-center ${className}`}>
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl px-6 text-center font-condensed text-sm font-bold uppercase tracking-[0.06em] transition-[filter] duration-200 hover:brightness-90 sm:w-auto sm:min-w-[280px] sm:text-base"
        style={{ backgroundColor: "var(--secondary)", color: "#EFEFEF" }}
      >
        {CTA_LABEL}
      </a>
      <p className="mt-3 text-center text-[0.875rem] italic text-foreground/70">{CTA_MICROCOPY}</p>
    </div>
  );
}
