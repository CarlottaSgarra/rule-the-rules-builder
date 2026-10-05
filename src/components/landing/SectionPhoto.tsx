// Foto di Carlotta come sfondo decorativo di una sezione: appoggiata su un
// lato, a bassa opacità e sfumata verso il centro (e in alto e in basso),
// così aggiunge varietà senza coprire i testi. La sezione deve essere
// `relative` (con overflow nascosto) e i contenuti `relative`, per stare
// sopra alla foto.
type Props = {
  src: string;
  side: "left" | "right";
  // Dimensioni e posizione verticale (default: tutta l'altezza della sezione).
  className?: string;
  opacity?: number;
  objectPosition?: string;
  // "luminosity" sui fondi scuri (foto tinta di viola), "multiply" sui chiari.
  blend?: "luminosity" | "multiply" | "normal";
};

export function SectionPhoto({
  src,
  side,
  className = "inset-y-0 w-[45%]",
  opacity = 0.22,
  objectPosition = "50% 25%",
  blend = "normal",
}: Props) {
  const mask = `linear-gradient(to ${side === "left" ? "right" : "left"}, #000 35%, transparent), linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent)`;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${side === "left" ? "left-0" : "right-0"} ${className}`}
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
        style={{ opacity, objectPosition, mixBlendMode: blend }}
      />
    </div>
  );
}
