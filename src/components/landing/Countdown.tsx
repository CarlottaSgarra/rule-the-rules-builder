import { useEffect, useState } from "react";

// PLACEHOLDER: conferma la data/ora esatta di chiusura iscrizioni (l'evento è il 5-6-7 ottobre 2026).
const TARGET = new Date("2026-10-04T23:59:59+02:00").getTime();

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

type Props = {
  compact?: boolean;
};

export function Countdown({ compact = false }: Props) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(TARGET - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const ms = Math.max(0, left ?? 0);
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms / 3600000) % 24);
  const minutes = Math.floor((ms / 60000) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  const cells = [
    { v: days, l: compact ? "gg" : "giorni" },
    { v: hours, l: compact ? "hh" : "ore" },
    { v: minutes, l: compact ? "mm" : "minuti" },
    { v: seconds, l: compact ? "ss" : "secondi" },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        {cells.map((c, i) => (
          <span key={c.l} className="flex items-baseline gap-0.5">
            <span className="font-condensed text-sm tabular-nums text-primary">
              {left === null ? "00" : pad(c.v)}
            </span>
            <span className="text-[9px] uppercase text-muted-foreground">{c.l}</span>
            {i < cells.length - 1 ? <span className="text-muted-foreground/50">:</span> : null}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {cells.map((c) => (
        <div
          key={c.l}
          className="min-w-16 rounded-lg border border-primary/30 bg-card px-3 py-2 text-center transition-transform duration-300 hover:-translate-y-0.5 sm:min-w-20 sm:px-4"
        >
          <div className="font-condensed text-2xl text-primary tabular-nums sm:text-3xl">
            {left === null ? "00" : pad(c.v)}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
