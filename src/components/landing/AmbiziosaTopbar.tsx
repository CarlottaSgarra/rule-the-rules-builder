import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AmbiziosaCtaButton } from "@/components/landing/AmbiziosaCtaButton";
import { APPLICATIONS_DEADLINE, WAITLIST_URL } from "@/lib/ambiziosa-config";

const DEADLINE_MS = new Date(APPLICATIONS_DEADLINE).getTime();

const MENU_ITEMS = [
  { id: "programma", label: "Il programma" },
  { id: "testimonianze", label: "Testimonianze" },
  { id: "faq", label: "FAQ" },
];

function pad2(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

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

function Badge({ isClosed }: { isClosed: boolean }) {
  return (
    <span
      className="inline-flex min-w-0 items-center rounded-full px-3 py-1 text-left font-condensed text-[10px] font-semibold uppercase leading-tight tracking-[0.06em] sm:text-xs sm:tracking-[0.1em] lg:shrink-0 lg:px-2.5 lg:py-1 lg:text-[10px] lg:tracking-[0.04em]"
      style={{ backgroundColor: "var(--primary)", color: "var(--secondary)" }}
    >
      {isClosed
        ? "Iscriviti alla lista d'attesa per la prossima riapertura"
        : "Candidature aperte fino al 16 ottobre"}
    </span>
  );
}

function WaitlistButton({ className = "" }: { className?: string }) {
  // TODO: valorizzare WAITLIST_URL in src/lib/ambiziosa-config.ts quando
  // Carlotta fornisce il link della lista d'attesa.
  const hasUrl = Boolean(WAITLIST_URL);
  return (
    <a
      href={hasUrl ? WAITLIST_URL : "#"}
      target={hasUrl ? "_blank" : undefined}
      rel={hasUrl ? "noopener" : undefined}
      onClick={(e) => {
        if (!hasUrl) e.preventDefault();
      }}
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-center font-condensed text-[11px] font-semibold uppercase leading-tight tracking-[0.06em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:text-xs sm:tracking-[0.1em] ${className}`}
      style={{ backgroundColor: "var(--primary)", color: "var(--secondary)" }}
    >
      Iscriviti
    </a>
  );
}

function CountdownText({ ms, abbreviated }: { ms: number; abbreviated: boolean }) {
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms / 3600000) % 24);
  const minutes = Math.floor((ms / 60000) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  const units = abbreviated
    ? [
        { v: days, l: "gg" },
        { v: hours, l: "h" },
        { v: minutes, l: "min" },
        { v: seconds, l: "s" },
      ]
    : [
        { v: days, l: "giorni" },
        { v: hours, l: "ore" },
        { v: minutes, l: "minuti" },
        { v: seconds, l: "secondi" },
      ];

  return (
    <>
      Chiudono tra{" "}
      {units.map((u, i) => (
        <span key={u.l}>
          <span className="font-semibold tabular-nums">{pad2(u.v)}</span> {u.l}
          {i < units.length - 1 ? " : " : ""}
        </span>
      ))}
    </>
  );
}

function DesktopMenu() {
  return (
    <nav
      aria-label="Navigazione della pagina"
      className="flex shrink-0 items-center gap-3 xl:gap-5"
    >
      {MENU_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={handleAnchorClick(item.id)}
          className="whitespace-nowrap text-[13px] text-[#EFEFEF] underline-offset-4 transition-colors hover:underline xl:text-sm"
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
        className="flex cursor-pointer list-none items-center gap-1 rounded-md px-2 py-1.5 text-xs text-[#EFEFEF] [&::-webkit-details-marker]:hidden"
        aria-label="Navigazione della pagina"
      >
        Menu
        <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <nav
        aria-label="Navigazione della pagina"
        className="absolute right-0 top-full z-10 mt-1 flex min-w-40 flex-col gap-0.5 rounded-md p-2 shadow-lg"
        style={{
          backgroundColor: "var(--secondary)",
          border: "1px solid color-mix(in oklab, var(--primary) 35%, transparent)",
        }}
      >
        {MENU_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleAnchorClick(item.id)}
            className="rounded px-2 py-1.5 text-sm text-[#EFEFEF] hover:underline"
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
  const [forcedState, setForcedState] = useState<"aperto" | "chiuso" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Permette di forzare lo stato con ?stato=aperto / ?stato=chiuso, solo
    // fuori produzione, per poter verificare lo stato "chiuso" in anteprima
    // senza aspettare il 16 ottobre.
    if (import.meta.env.VITE_DEPLOY_ENV !== "production") {
      const params = new URLSearchParams(window.location.search);
      const stato = params.get("stato");
      if (stato === "aperto" || stato === "chiuso") setForcedState(stato);
    }

    const tick = () => setRemainingMs(DEADLINE_MS - Date.now());
    tick();
    const interval = setInterval(tick, 1000);

    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Prima del montaggio mostra sempre lo stato "aperto" con il countdown
  // azzerato: stesso output lato server e lato client, nessun mismatch di
  // hydration. Lo stato reale (compreso "chiuso" per chi apre la pagina
  // dopo la scadenza) viene deciso subito dopo, al primo effetto.
  const isClosed = mounted && (forcedState ? forcedState === "chiuso" : remainingMs <= 0);
  const ms = Math.max(0, remainingMs);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]" : ""
      }`}
      style={{ backgroundColor: "var(--secondary)", color: "#EFEFEF" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Desktop (da 1024px): una sola riga */}
        <div className="hidden lg:flex lg:h-16 lg:items-center lg:justify-between lg:gap-2 xl:gap-5">
          <div className="flex shrink-0 items-center gap-2">
            <Badge isClosed={isClosed} />
            {!isClosed ? (
              <span
                role="timer"
                aria-live="off"
                className="whitespace-nowrap text-[11px] xl:text-xs"
              >
                <CountdownText ms={ms} abbreviated={false} />
              </span>
            ) : null}
          </div>
          {!isClosed ? <DesktopMenu /> : <span />}
          {isClosed ? <WaitlistButton /> : <AmbiziosaCtaButton variant="topbar" />}
        </div>

        {/* Tablet e mobile (sotto 1024px): due righe, menu compresso */}
        <div className="flex flex-col gap-1.5 py-2 lg:hidden">
          <div className="flex items-center justify-between gap-2">
            <Badge isClosed={isClosed} />
            {isClosed ? (
              <WaitlistButton className="shrink-0" />
            ) : (
              <AmbiziosaCtaButton variant="topbar" className="shrink-0" />
            )}
          </div>
          {!isClosed ? (
            <div className="flex items-center justify-between gap-2">
              <div role="timer" aria-live="off" className="min-w-0 text-xs">
                <span className="md:hidden">
                  <CountdownText ms={ms} abbreviated={true} />
                </span>
                <span className="hidden md:inline">
                  <CountdownText ms={ms} abbreviated={false} />
                </span>
              </div>
              <CompressedMenu />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
