// Riflesso di luce interno che attraversa un bottone da sinistra a destra e
// ricomincia (animazione animate-shine-sweep in styles.css, ferma con
// prefers-reduced-motion). Il bottone deve avere `relative overflow-hidden` e
// il suo contenuto `relative`, così il testo resta sopra al riflesso.
export function ShineSweep() {
  return (
    <span
      aria-hidden
      className="animate-shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3"
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent)",
      }}
    />
  );
}
