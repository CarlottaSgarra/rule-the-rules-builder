import profiloIgCarlottaImg from "@/assets/profilo-ig-carlotta.png";
import insightPanoramicaImg from "@/assets/insight-panoramica.jpg";
import insightInterazioneImg from "@/assets/insight-interazione.jpg";
import fatturatoImg from "@/assets/fatturato-2024-2026.jpg";
import carlottaMuroImg from "@/assets/carlotta appoggiata a muro che guarda.jpg";

// Card inclinate e sovrapposte per la sezione "Il principio mancante":
// stessa ricetta degli screenshot WhatsApp di Rule The Rules (bordo,
// ombra, rotazione ±5°), con il bordo colorato richiesto dal riferimento.

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

// Una foto di Carlotta e, sovrapposto, il suo profilo Instagram oggi
// (screenshot reale).
export function ProfileBeforeAfter() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] pb-28">
      <div
        className={`${cardClass} w-[88%] overflow-hidden`}
        style={{
          transform: "rotate(-5deg)",
          borderColor: "color-mix(in oklab, var(--foreground) 25%, transparent)",
        }}
      >
        <img
          src={carlottaMuroImg}
          alt="Carlotta Sgarra appoggiata a un muro, guarda in camera"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
          style={{ objectPosition: "33% 40%" }}
        />
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

function ProofBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block rounded-lg px-3 py-1.5 text-center font-condensed text-[10px] uppercase leading-snug tracking-[0.1em] text-primary-foreground shadow-sm sm:text-xs"
      style={{ backgroundImage: "var(--gradient-gold)" }}
    >
      {children}
    </span>
  );
}

// I risultati di Carlotta: gli insight reali del Reel non scriptato e il
// fatturato 2024–2026.
export function ResultsCards() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* Gli insight reali di Instagram: panoramica (visualizzazioni e curva)
          e interazione (visite al profilo, follow, clic) */}
      <div className="relative">
        <div
          className={`${cardClass} relative ml-auto w-[90%] overflow-hidden`}
          style={{ transform: "rotate(3deg)", borderColor: "var(--secondary)" }}
        >
          {/* Il badge sta dentro il riquadro, in una fascia sopra lo
              screenshot, così non copre i dati */}
          <div className="px-2 pt-2">
            <ProofBadge>Dati da un reel non scriptato e che non seguiva le "regole"</ProofBadge>
          </div>
          <img
            src={insightPanoramicaImg}
            alt="Insight di un reel: 161.636 visualizzazioni, 188 follow e la curva delle visualizzazioni"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div
          className={`${cardClass} absolute -bottom-28 left-0 w-[58%] overflow-hidden`}
          style={{
            transform: "rotate(-5deg)",
            borderColor: "color-mix(in oklab, var(--foreground) 25%, transparent)",
          }}
        >
          <img
            src={insightInterazioneImg}
            alt="Insight di un reel: 638 visite al profilo, 44 follow, 18 clic sul link della biografia"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>

      {/* Il fatturato reale 2024–2026, a destra sotto gli insight */}
      <div
        className={`${cardClass} relative ml-auto mt-32 w-[88%] overflow-hidden`}
        style={{ transform: "rotate(2deg)", borderColor: "var(--secondary)" }}
      >
        <div className="px-2 py-2">
          <ProofBadge>Il mio fatturato degli ultimi due anni</ProofBadge>
        </div>
        <img
          src={fatturatoImg}
          alt="Fatturato 2024–2026: totale 272.859,77€"
          loading="lazy"
          className="w-full"
        />
      </div>
    </div>
  );
}
