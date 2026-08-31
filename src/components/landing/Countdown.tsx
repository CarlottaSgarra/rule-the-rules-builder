import { useEffect, useState } from "react";

const TARGET = new Date("2025-10-24T23:59:59+02:00").getTime();

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function Countdown() {
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
    { v: days, l: "giorni" },
    { v: hours, l: "ore" },
    { v: minutes, l: "minuti" },
    { v: seconds, l: "secondi" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {cells.map((c) => (
        <div
          key={c.l}
          className="min-w-16 rounded-lg border border-primary/30 bg-card px-3 py-2 text-center sm:min-w-20 sm:px-4"
        >
          <div className="font-condensed text-2xl text-primary tabular-nums sm:text-3xl">
            {left === null ? "00" : pad(c.v)}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {c.l}
          </div>
        </div>
      ))}
    </div>
  );
}
