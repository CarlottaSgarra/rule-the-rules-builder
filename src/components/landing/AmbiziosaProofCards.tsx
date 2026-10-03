import { Play, TrendingUp } from "lucide-react";
import profiloIgCarlottaImg from "@/assets/profilo-ig-carlotta.png";

// Card inclinate e sovrapposte per la sezione "Il principio mancante":
// stessa ricetta degli screenshot WhatsApp di Rule The Rules (bordo,
// ombra, rotazione ±5°), con il bordo colorato richiesto dal riferimento.
// TODO: quando Carlotta fornisce gli screenshot reali (profilo prima/dopo,
// statistiche del Reel non scriptato) sostituire le card illustrate.

const cardClass = "rounded-xl border-2 bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)]";
const label = "font-condensed text-[9px] uppercase tracking-[0.15em] text-muted-foreground";

function Pill({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 font-condensed text-[9px] uppercase tracking-[0.15em] ${
        gold ? "text-primary-foreground" : "bg-foreground/10 text-foreground/60"
      }`}
      style={gold ? { backgroundImage: "var(--gradient-gold)" } : undefined}
    >
      {children}
    </span>
  );
}

// Il profilo Instagram di Carlotta: prima (piano editoriale scritto da altri,
// contenuti tutti uguali) e oggi (screenshot reale).
export function ProfileBeforeAfter() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] pb-28">
      <div
        className={`${cardClass} w-[88%] p-4`}
        style={{
          transform: "rotate(-5deg)",
          borderColor: "color-mix(in oklab, var(--foreground) 25%, transparent)",
        }}
      >
        <div className="flex items-center justify-between">
          <Pill>Prima</Pill>
          <span className={label}>Il mio profilo</span>
        </div>
        <p className="mt-2.5 text-[10px] font-semibold text-foreground/60">
          Piano editoriale scritto da altri
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="size-10 shrink-0 rounded-full bg-foreground/15" />
          <div className="flex-1 space-y-1.5">
            <span className="block h-1.5 w-3/4 rounded-full bg-foreground/20" />
            <span className="block h-1.5 w-1/2 rounded-full bg-foreground/10" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="aspect-square rounded-[3px] bg-foreground/10" />
          ))}
        </div>
      </div>

      <div
        className={`${cardClass} absolute bottom-0 right-0 w-[88%] overflow-hidden`}
        style={{ transform: "rotate(5deg)", borderColor: "var(--secondary)" }}
      >
        <div className="flex items-center justify-between px-3 pt-3">
          <Pill gold>Oggi</Pill>
          <span className={label}>Il mio profilo</span>
        </div>
        <img
          src={profiloIgCarlottaImg}
          alt="Il profilo Instagram di Carlotta Sgarra oggi"
          loading="lazy"
          className="w-full"
        />
      </div>
    </div>
  );
}

// I risultati di Carlotta: il Reel non scriptato oltre 130.000 visualizzazioni
// e l'azienda da 500.000€ in 3 anni (dato già presente su Rule The Rules).
export function ResultsCards() {
  const reelBars = [18, 22, 20, 30, 26, 38, 52, 70, 64, 82, 90, 100];
  const revenueBars = [20, 34, 52, 74, 100];
  return (
    <div className="relative mx-auto w-full max-w-[320px] pb-44">
      <div
        className={`${cardClass} w-[88%] p-4`}
        style={{
          transform: "rotate(-4deg)",
          borderColor: "color-mix(in oklab, var(--foreground) 25%, transparent)",
        }}
      >
        <div className="flex items-center justify-between">
          <span className={label}>La mia azienda</span>
          <TrendingUp className="size-3.5 text-secondary" />
        </div>
        <p className="mt-2 font-display text-3xl leading-none text-foreground">500.000€</p>
        <p className="mt-1 text-[10px] font-semibold text-foreground/60">di fatturato in 3 anni</p>
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {revenueBars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[3px]"
              style={{
                height: `${h}%`,
                backgroundColor:
                  i === revenueBars.length - 1
                    ? "var(--secondary)"
                    : "color-mix(in oklab, var(--foreground) 15%, transparent)",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`${cardClass} absolute bottom-0 right-0 w-[88%] p-4`}
        style={{ transform: "rotate(4deg)", borderColor: "var(--secondary)" }}
      >
        <div className="flex items-center justify-between">
          <Pill gold>Reel non scriptato</Pill>
          <Play className="size-3.5 fill-current text-secondary" />
        </div>
        <p className={`${label} mt-3`}>Visualizzazioni</p>
        <p className="mt-1 font-display text-3xl leading-none text-foreground">130.000+</p>
        <div className="mt-3 flex h-14 items-end gap-1">
          {reelBars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[2px]"
              style={{
                height: `${h}%`,
                backgroundImage: i >= reelBars.length - 4 ? "var(--gradient-gold)" : undefined,
                backgroundColor:
                  i >= reelBars.length - 4
                    ? undefined
                    : "color-mix(in oklab, var(--secondary) 35%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
