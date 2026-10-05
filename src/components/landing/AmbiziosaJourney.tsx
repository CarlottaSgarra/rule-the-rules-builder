import { useEffect, useRef, useState } from "react";
import {
  CircleArrowRight,
  Compass,
  Crown,
  Frown,
  Lock,
  MessagesSquare,
  Palette,
  Puzzle,
  Shirt,
  Tornado,
} from "lucide-react";
import { Highlight } from "@/components/landing/Highlight";

// "Ecco cosa succede quando scegli Ambiziosa": un grafico che si disegna
// mentre si scorre la pagina. La sezione resta ferma sullo schermo (sticky)
// per tutta l'altezza del contenitore e lo scroll fa avanzare la linea:
// la punta della linea resta al centro dello schermo e il grafico scorre
// verso sinistra. Prima la linea è piatta e viola (i problemi), poi sale e
// diventa verde (i risultati dopo Ambiziosa). Con prefers-reduced-motion
// si vede una versione statica a due colonne.

type JourneyPoint = { text: string; icon: typeof Frown };

const PAIN_POINTS: JourneyPoint[] = [
  { text: "Ti senti fuori posto online", icon: Puzzle },
  { text: "Cambi stile ogni settimana", icon: Shirt },
  { text: "Ti vergogni un po' di quello che pubblichi", icon: Frown },
  { text: "Ti blocchi, rimandi, molli", icon: Lock },
  { text: "Creare = stress", icon: Tornado },
];

const WIN_POINTS: JourneyPoint[] = [
  { text: "Ti senti centrata nel tuo mercato", icon: Compass },
  { text: "Valorizzi la tua identità", icon: Crown },
  { text: "Pubblicare è naturale", icon: MessagesSquare },
  { text: "Vai avanti con costanza", icon: CircleArrowRight },
  { text: "Creare = piacere", icon: Palette },
];

// Colori della linea: viola chiaro (leggibile sul fondo Mulberry) e verde
// Tidal del brand.
const PAIN_COLOR = "oklch(0.72 0.11 330)";
const WIN_COLOR = "var(--primary)";

function smoothstep(t: number) {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function JourneyTitle() {
  return (
    <h2 className="text-center text-3xl sm:text-4xl">
      Ecco cosa succede quando <Highlight dark>scegli Ambiziosa</Highlight>
    </h2>
  );
}

function Bubble({ point, win, visible }: { point: JourneyPoint; win: boolean; visible: boolean }) {
  const Icon = point.icon;
  return (
    <div
      className="flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left transition-all duration-500 sm:gap-3 sm:px-5 sm:py-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
        backgroundColor: win
          ? "color-mix(in oklab, var(--primary) 12%, transparent)"
          : "color-mix(in oklab, var(--background) 8%, transparent)",
        border: `1px solid ${win ? WIN_COLOR : `color-mix(in oklab, ${PAIN_COLOR} 60%, transparent)`}`,
        boxShadow: win
          ? "0 0 30px -8px color-mix(in oklab, var(--primary) 60%, transparent)"
          : "none",
      }}
    >
      <Icon
        className="size-5 shrink-0 sm:size-7"
        style={{ color: win ? WIN_COLOR : PAIN_COLOR }}
        strokeWidth={1.75}
      />
      <span className="text-sm font-semibold leading-snug text-ink sm:text-lg">{point.text}</span>
    </div>
  );
}

function StaticJourney() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <JourneyTitle />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <p
            className="font-condensed text-xs uppercase tracking-[0.2em]"
            style={{ color: PAIN_COLOR }}
          >
            Prima
          </p>
          <div className="mt-4 space-y-3">
            {PAIN_POINTS.map((p) => (
              <Bubble key={p.text} point={p} win={false} visible />
            ))}
          </div>
        </div>
        <div>
          <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
            Dopo Ambiziosa
          </p>
          <div className="mt-4 space-y-3">
            {WIN_POINTS.map((p) => (
              <Bubble key={p.text} point={p} win visible />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AmbiziosaJourney() {
  const reduced = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [viewport, setViewport] = useState({ w: 1280, h: 800 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? -rect.top / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, p)));
      setViewport((v) =>
        v.w === window.innerWidth && v.h === window.innerHeight
          ? v
          : { w: window.innerWidth, h: window.innerHeight },
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (reduced) {
    return (
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <StaticJourney />
      </section>
    );
  }

  // Geometria del grafico, in pixel. Distanza tra i punti in base alla
  // larghezza dello schermo; altezza dell'area del grafico in base all'altezza.
  const spacing = Math.min(400, Math.max(210, viewport.w * 0.3));
  const chartH = Math.min(600, Math.max(320, viewport.h * 0.58));
  const yFlat = chartH * 0.82;
  const yTop = chartH * 0.12;
  const xRiseStart = spacing * (PAIN_POINTS.length + 0.5);
  const nodes = [
    ...PAIN_POINTS.map((point, i) => ({ point, win: false, x: spacing * (i + 1) })),
    ...WIN_POINTS.map((point, i) => ({ point, win: true, x: xRiseStart + spacing * (i + 0.6) })),
  ];
  const xEnd = xRiseStart + spacing * (WIN_POINTS.length - 0.4) + spacing * 0.5;
  const worldW = xEnd + spacing;

  const yAt = (x: number) =>
    x <= xRiseStart
      ? yFlat
      : yFlat - (yFlat - yTop) * smoothstep((x - xRiseStart) / (xEnd - xRiseStart));

  // Linea campionata ogni 6px: piatta, poi una salita morbida.
  const steps = Math.ceil(xEnd / 6);
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = (xEnd * i) / steps;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${yAt(x).toFixed(1)} `;
  }

  // La punta avanza con lo scroll e resta al centro dello schermo; verso la
  // fine il grafico smette di scorrere (la punta va a destra), così alla fine
  // restano in vista tutti i risultati invece di mezzo schermo vuoto.
  const headX = xEnd * progress;
  const headY = yAt(headX);
  const shiftX = Math.max(viewport.w / 2 - headX, viewport.w - xEnd - viewport.w * 0.1);
  const rising = headX > xRiseStart;
  const headColor = rising ? WIN_COLOR : PAIN_COLOR;
  const bubbleW = Math.min(320, spacing - 24);

  return (
    <section
      className="relative bg-secondary"
      style={{ color: "var(--secondary-foreground)" }}
      aria-label="Ecco cosa succede quando scegli Ambiziosa"
    >
      <div ref={containerRef} className="relative" style={{ height: "380vh" }}>
        <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-28 sm:pt-32">
          <div className="px-5">
            <JourneyTitle />
          </div>

          <div className="relative mt-6 flex-1">
            <div
              className="absolute left-0 top-1/2"
              style={{
                width: worldW,
                height: chartH,
                transform: `translate(${shiftX}px, -50%)`,
                willChange: "transform",
              }}
            >
              <svg
                width={worldW}
                height={chartH}
                viewBox={`0 0 ${worldW} ${chartH}`}
                className="absolute inset-0 overflow-visible"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="journey-line"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2={xEnd}
                    y2="0"
                  >
                    <stop offset="0" stopColor={PAIN_COLOR} />
                    <stop offset={xRiseStart / xEnd} stopColor={PAIN_COLOR} />
                    <stop offset={(xRiseStart + spacing * 1.2) / xEnd} stopColor={WIN_COLOR} />
                    <stop offset="1" stopColor={WIN_COLOR} />
                  </linearGradient>
                  <clipPath id="journey-reveal">
                    <rect x="0" y="-50" width={headX} height={chartH + 100} />
                  </clipPath>
                </defs>

                {/* Asse di base e linea ancora da disegnare, appena accennati */}
                <line
                  x1="0"
                  y1={yFlat + 40}
                  x2={xEnd}
                  y2={yFlat + 40}
                  stroke="color-mix(in oklab, var(--background) 15%, transparent)"
                  strokeWidth="1"
                />
                <path
                  d={d}
                  fill="none"
                  stroke="color-mix(in oklab, var(--background) 10%, transparent)"
                  strokeWidth="3"
                  strokeDasharray="2 10"
                  strokeLinecap="round"
                />

                {/* Il momento in cui entri in Ambiziosa */}
                <line
                  x1={xRiseStart}
                  y1={yTop - 20}
                  x2={xRiseStart}
                  y2={yFlat + 40}
                  stroke="color-mix(in oklab, var(--primary) 40%, transparent)"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  style={{
                    opacity: headX >= xRiseStart - spacing * 0.3 ? 1 : 0,
                    transition: "opacity 400ms",
                  }}
                />

                <g clipPath="url(#journey-reveal)">
                  <path
                    d={d}
                    fill="none"
                    stroke="url(#journey-line)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      filter: rising
                        ? "drop-shadow(0 0 10px color-mix(in oklab, var(--primary) 70%, transparent))"
                        : "none",
                    }}
                  />
                </g>

                {/* Punti sulla linea */}
                {nodes.map(({ x, win }) => {
                  const reached = headX >= x;
                  return (
                    <circle
                      key={x}
                      cx={x}
                      cy={yAt(x)}
                      r={reached ? 8 : 5}
                      fill={reached ? (win ? WIN_COLOR : PAIN_COLOR) : "var(--secondary)"}
                      stroke={win ? WIN_COLOR : PAIN_COLOR}
                      strokeWidth="2"
                      style={{ transition: "r 300ms, fill 300ms" }}
                    />
                  );
                })}

                {/* Punta della linea */}
                {progress > 0.001 && progress < 0.999 ? (
                  <circle
                    cx={headX}
                    cy={headY}
                    r="7"
                    fill={headColor}
                    style={{ filter: `drop-shadow(0 0 8px ${headColor})` }}
                  />
                ) : null}
              </svg>

              {/* Etichetta del momento in cui si entra in Ambiziosa */}
              <div
                className="absolute -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary-foreground sm:text-xs"
                style={{
                  left: xRiseStart,
                  top: yFlat + 52,
                  backgroundImage: "var(--gradient-gold)",
                  opacity: headX >= xRiseStart - spacing * 0.3 ? 1 : 0,
                  transition: "opacity 400ms",
                }}
              >
                Entri in Ambiziosa
              </div>

              {/* Fumetti: sopra a ogni punto, compaiono quando la linea ci arriva */}
              {nodes.map(({ point, win, x }) => (
                <div
                  key={point.text}
                  className="absolute flex -translate-x-1/2 flex-col items-center"
                  style={{ left: x, bottom: chartH - yAt(x) + 18, width: bubbleW }}
                >
                  <Bubble point={point} win={win} visible={headX >= x - spacing * 0.15} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-6 pb-8 font-condensed text-[10px] uppercase tracking-[0.2em] sm:text-xs">
            <span style={{ color: PAIN_COLOR }}>Prima</span>
            <span className="text-ink-muted">→</span>
            <span className="text-primary">Dopo Ambiziosa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
