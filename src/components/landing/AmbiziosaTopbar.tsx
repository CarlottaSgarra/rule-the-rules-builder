import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AmbiziosaCtaButton } from "@/components/landing/AmbiziosaCtaButton";
import { Countdown } from "@/components/landing/Countdown";
import { MAX_SEATS, PRICE_LOCK_DEADLINE } from "@/lib/ambiziosa-config";

const PRICE_LOCK_MS = new Date(PRICE_LOCK_DEADLINE).getTime();

const MENU_ITEMS = [
  { id: "programma", label: "Il programma" },
  { id: "testimonianze", label: "Testimonianze" },
  { id: "faq", label: "FAQ" },
];

// Scorrimento morbido all'ancora; se la sezione non esiste ancora (verrà
// aggiunta in un prossimo passo) lascia che l'href "#id" normale non faccia
// nulla, senza generare errori.
function handleAnchorClick(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}

function Badge() {
  return (
    <span
      className="inline-flex min-w-0 items-center rounded-full px-3 py-1 font-condensed text-[10px] uppercase leading-tight tracking-[0.15em] text-primary-foreground sm:text-xs lg:shrink-0"
      style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
    >
      {/* Su desktop la riga ospita anche countdown, menu e bottone: lì il badge si
          accorcia a "Solo 9 posti" per non far scorrere la pagina in orizzontale. */}
      <span className="lg:hidden">Candidature aperte · </span>
      <span className="hidden lg:inline">Solo </span>
      {MAX_SEATS} posti
    </span>
  );
}

// Countdown al 16 ottobre, quando i prezzi salgono. Le candidature restano
// aperte anche dopo: passata la data il countdown semplicemente sparisce.
function PriceCountdown({ labelClassName = "hidden sm:inline" }: { labelClassName?: string }) {
  return (
    <div className="flex items-center gap-1 sm:gap-x-4">
      <span
        className={`font-condensed text-xs uppercase tracking-[0.15em] text-muted-foreground ${labelClassName}`}
      >
        Prezzo bloccato per
      </span>
      <Countdown compact target={PRICE_LOCK_MS} />
    </div>
  );
}

function DesktopMenu() {
  return (
    <nav
      aria-label="Navigazione della pagina"
      className="flex shrink-0 items-center gap-4 xl:gap-6"
    >
      {MENU_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={handleAnchorClick(item.id)}
          className="whitespace-nowrap font-condensed text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

// Menu compresso per tablet/mobile: <details>/<summary> è nativamente
// raggiungibile da tastiera (Invio/Spazio per aprire e chiudere) senza
// bisogno di gestire a mano focus o stato della tendina.
function CompressedMenu() {
  return (
    <details className="group relative">
      <summary
        className="flex cursor-pointer list-none items-center gap-1 rounded-md px-2 py-1.5 font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs [&::-webkit-details-marker]:hidden"
        aria-label="Navigazione della pagina"
      >
        Menu
        <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <nav
        aria-label="Navigazione della pagina"
        className="absolute right-0 top-full z-10 mt-1 flex min-w-40 flex-col gap-0.5 rounded-xl p-2"
        style={{
          backgroundColor: "var(--secondary)",
          border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
        }}
      >
        {MENU_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleAnchorClick(item.id)}
            className="rounded px-2 py-1.5 font-condensed text-xs uppercase tracking-[0.15em] text-foreground hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}

export function AmbiziosaTopbar() {
  const [mounted, setMounted] = useState(false);
  const [remainingMs, setRemainingMs] = useState(0);

  useEffect(() => {
    setMounted(true);
    const tick = () => setRemainingMs(PRICE_LOCK_MS - Date.now());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Prima del montaggio il countdown c'è sempre: stesso output lato server e
  // lato client, nessun mismatch di hydration.
  const priceLocked = !mounted || remainingMs > 0;

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/60 backdrop-blur"
      style={
        {
          backgroundColor: "color-mix(in oklab, var(--secondary) 95%, transparent)",
          "--foreground": "var(--secondary-foreground)",
          "--muted-foreground": "oklch(0.85 0.03 40)",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        {/* Desktop (da 1024px): una sola riga */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-4 lg:py-4">
          <div className="flex shrink-0 items-center gap-4">
            <Badge />
            {priceLocked ? <PriceCountdown labelClassName="hidden 2xl:inline" /> : null}
          </div>
          <div className="hidden xl:block">
            <DesktopMenu />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="xl:hidden">
              <CompressedMenu />
            </div>
            <AmbiziosaCtaButton variant="topbar" />
          </div>
        </div>

        {/* Tablet e mobile (sotto 1024px): due righe, menu compresso */}
        <div className="flex flex-col gap-1.5 py-2 lg:hidden">
          <div className="flex items-center justify-between gap-2">
            <Badge />
            <AmbiziosaCtaButton variant="topbar" className="shrink-0" />
          </div>
          <div className="flex items-center justify-between gap-2">
            {priceLocked ? <PriceCountdown /> : <span />}
            <CompressedMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
