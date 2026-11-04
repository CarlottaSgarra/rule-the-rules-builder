import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "@/components/landing/SignupForm";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroBg from "@/assets/Carlotta spostata a sinistra che guarda verso la camera.jpg";
import heroCutout from "@/assets/ambiziosa-carlotta-cutout.png";
import heroBgDesktop from "@/assets/carlotta appoggiata a muro che guarda.jpg";
import heroCutoutDesktop from "@/assets/ambiziosa-carlotta-muro-cutout.webp";
import carlottaPresenting from "@/assets/carlotta-presenting.jpg";
import carlottaTalking from "@/assets/carlotta-talking.jpg";
import carlottaLooking2 from "@/assets/carlotta-looking-2.jpg";
import carlottaHug from "@/assets/carlotta-hug.jpg";
import carlottaWalking from "@/assets/carlotta-walking.jpg";
import carlottaWall from "@/assets/ambiziosa-carlotta-muro-web.jpg";
import carlottaWallRight from "@/assets/Carlotta che guarda a destra appoggiata al muro.jpg";
import carlottaPointing from "@/assets/carlotta-pointing.jpg";
import community from "@/assets/community.png";
import participantsSmiling from "@/assets/social-proof-1.jpg";
import participantNotes from "@/assets/social-proof-11.jpg";
import participantsRoom from "@/assets/social-proof-4.jpg";
import participantsHug from "@/assets/social-proof-7.jpg";

// Form Systeme della lista d'attesa dell'evento dal vivo.
const WAITLIST_ACTION = "https://systeme.io/embedded/46305405/subscription";


export const Route = createFileRoute("/lista-attesa-ambiziosa")({
  head: () => ({
    meta: [
      { title: "Lista d'attesa · Ambiziosa dal vivo" },
      {
        name: "description",
        content:
          "Il prossimo evento dal vivo di Ambiziosa: si lavora sulla tua azienda, insieme ad altre imprenditrici. Le vendite aprono il 7 dicembre.",
      },
    ],
  }),
  component: ListaAttesaAmbiziosa,
});

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
// Avanzamento (0-1) di una fase che va da `from` a `to` dentro il progresso totale.
const phase = (p: number, from: number, to: number) => clamp((p - from) / (to - from));

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

function useIsDesktop() {
  const [desktop, setDesktop] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}

// Telefoni e tablet: le sfocature parola per parola costano troppo, lì si
// tiene solo la dissolvenza.
function useLowPower() {
  const [low, setLow] = useState(false);
  useEffect(() => {
    setLow(window.matchMedia("(max-width: 767px), (pointer: coarse)").matches);
  }, []);
  return low;
}

// Progresso (0-1) dello scroll. "sticky": dentro una sezione alta con un figlio
// sticky (0 quando la sezione tocca il bordo alto, 1 quando sta per uscire).
// "pass": un elemento normale che attraversa lo schermo (0 quando entra dal
// basso, 1 quando arriva a metà schermo).
function useScrollProgress<T extends HTMLElement>(mode: "sticky" | "pass" | "reveal" = "sticky") {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const next =
        mode === "sticky"
          ? clamp(-rect.top / Math.max(node.offsetHeight - vh, 1))
          : mode === "reveal"
            ? // Parte quando il testo arriva poco sotto il centro dello schermo,
              // così i blocchi si accendono uno dopo l'altro.
              clamp((vh * 0.72 - rect.top) / (vh * 0.25 + rect.height * 0.6))
            : clamp((vh - rect.top) / (vh * 0.5 + rect.height * 0.5));
      setProgress((prev) => (Math.abs(prev - next) < 0.0005 ? prev : next));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Si ascolta lo scroll solo mentre la sezione è vicina allo schermo: le
    // sezioni lontane non ricalcolano niente. All'uscita un ultimo
    // aggiornamento la lascia nello stato giusto (0 o 1).
    let listening = false;
    const start = () => {
      if (listening) return;
      listening = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      update();
    };
    const stop = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      update();
    };
    const io = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()), {
      rootMargin: "50% 0px",
    });
    if (ref.current) io.observe(ref.current);
    update();
    return () => {
      io.disconnect();
      stop();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mode, reduced]);

  return { ref, progress };
}

function useInView<T extends HTMLElement>({ threshold = 0.2, rootMargin = "0px" }: IntersectionObserverInit = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin]);
  return { ref, inView };
}

// Da telefono un blocco compare solo quando ci si arriva sopra scorrendo. Su
// computer resta sempre visibile.
function Appear({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15, rootMargin: "0px 0px -12% 0px" });
  const desktop = useIsDesktop();
  const reduced = useReducedMotion();
  const shown = desktop || reduced || inView;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translate3d(0, 28px, 0)",
        transition: "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}

function scrollToWaitlist(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("lista-attesa")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* ---------------------------------------------------------------- Barra */

function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 grid w-[92%] max-w-4xl -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-full px-4 py-2 sm:gap-3 sm:px-5 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-lg md:bg-background/80 md:backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Bottone sempre al centro; data a sinistra e, dopo il primo scroll,
          "Posti limitati · Early ticket per gli iscritti" a destra con lo stesso peso
          della data. Da telefono, dove la colonna è stretta, resta "Early ticket". */}
      <div className="min-w-0">
        {/* Con left + translate il testo scorre da accanto al bottone al bordo sinistro. */}
        <span
          className={`relative inline-block font-condensed text-[11px] uppercase leading-tight tracking-[0.1em] text-foreground/80 transition-all duration-500 sm:text-xs sm:tracking-[0.12em] ${
            scrolled ? "left-0 translate-x-0 text-left" : "left-full -translate-x-full text-right"
          }`}
        >
          Le vendite ufficiali aprono il{"\u00a0"}7/12
        </span>
      </div>
      <a
        href="#lista-attesa"
        onClick={scrollToWaitlist}
        className="glow-sweep relative rounded-full bg-primary px-3 py-2.5 text-center font-condensed text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-background transition-transform hover:-translate-y-0.5 sm:min-w-[13rem] sm:px-10 sm:text-sm"
      >
        Entra in lista d'attesa
      </a>
      <span
        className={`text-balance text-right font-condensed text-[11px] uppercase leading-tight tracking-[0.1em] text-foreground/80 transition-all duration-500 sm:text-xs sm:tracking-[0.12em] ${
          scrolled ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        <span className="hidden sm:inline">Posti limitati</span>
        <span className="hidden md:inline"> · Early ticket per gli iscritti</span>
        <span className="block md:hidden">Early ticket</span>
      </span>
    </header>
  );
}

/* ---------------------------------------------------------------- 1. Apertura */

const TITLE = "AMBIZIOSA".split("");

// Distanza delle foto dell'apertura dal bordo alto, per staccarle dal menu.
const HERO_PHOTOS_TOP = 112;
// Cornice iniziale della foto su computer: sotto il menu, con un po' di margine.
const HERO_FRAME = { top: 88, x: 3, bottom: 3 };

// Colonna laterale già nella sua posizione finale: entra solo con transform e
// opacità, così il telefono non deve ricalcolare l'impaginazione.
function SideColumn({ images, side, t }: { images: { src: string; position: string }[]; side: "left" | "right"; t: number }) {
  const dir = side === "left" ? -1 : 1;
  return (
    <div
      className={`absolute bottom-[34%] flex w-[calc(33%-28px)] flex-row gap-3 will-change-transform ${
        side === "left" ? "left-4" : "right-4"
      }`}
      style={{ top: HERO_PHOTOS_TOP, transform: `translate3d(${lerp(dir * 115, 0, t)}%, 0, 0)`, opacity: t }}
    >
      {images.map(({ src, position }, i) => (
        <div
          key={src}
          className="relative h-full flex-1 overflow-hidden rounded-3xl"
          style={{ transform: `translate3d(0, ${lerp(25 + i * 20, 0, t)}%, 0)` }}
        >
          <img src={src} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" style={{ objectPosition: position }} />
        </div>
      ))}
    </div>
  );
}

function Hero() {
  const { ref, progress } = useScrollProgress<HTMLElement>("sticky");
  const desktop = useIsDesktop();
  const shrink = ease(phase(progress, 0, 0.6));
  const sides = ease(phase(progress, 0.15, 0.7));
  const titleOut = phase(progress, 0, 0.3);
  const caption = phase(progress, 0.6, 0.85);
  // La foto si "ritaglia" fino alla scheda centrale. Da telefono parte a tutto
  // schermo; su computer parte già in una cornice sotto il menu, con la foto
  // orizzontale, così si vede Carlotta intera e non solo un dettaglio.
  const insetX = desktop ? 33 : 6;
  const insetBottom = desktop ? 34 : 36;
  const startTop = desktop ? HERO_FRAME.top : 0;
  const startX = desktop ? HERO_FRAME.x : 0;
  const startBottom = desktop ? HERO_FRAME.bottom : 0;
  const clip = `inset(${lerp(startTop, HERO_PHOTOS_TOP, shrink)}px ${lerp(startX, insetX, shrink)}% ${lerp(startBottom, insetBottom, shrink)}% ${lerp(startX, insetX, shrink)}% round ${lerp(desktop ? 24 : 0, 24, shrink)}px)`;
  const photoPosition = desktop ? "35% 5%" : "62% 12%";

  return (
    <section ref={ref} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-svh overflow-hidden">
        {desktop ? <SideColumn images={[{ src: participantsHug, position: "45% 50%" }, { src: participantsSmiling, position: "62% 50%" }]} side="left" t={sides} /> : null}

        <div className="absolute inset-0" style={{ clipPath: clip, WebkitClipPath: clip }}>
          {/* Scende con il bordo alto del ritaglio (la testa resta in vista). Su computer
              si sposta a destra e si rimpicciolisce per tenere Carlotta al centro della scheda. */}
          <div
            className="absolute inset-0 will-change-transform"
            style={
              desktop
                ? {
                    top: HERO_FRAME.top,
                    left: `${HERO_FRAME.x}%`,
                    right: `${HERO_FRAME.x}%`,
                    bottom: `${HERO_FRAME.bottom}%`,
                    transformOrigin: "38% 0",
                    transform: `translate3d(${11 * shrink}vw, ${(HERO_PHOTOS_TOP - HERO_FRAME.top) * shrink}px, 0) scale(${lerp(1, 0.72, shrink)})`,
                  }
                : { transform: `translate3d(0, ${HERO_PHOTOS_TOP * shrink}px, 0)` }
            }
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={heroBgDesktop} />
              <img
                src={heroBg}
                alt="Carlotta"
                className="absolute inset-0 size-full rounded-3xl object-cover max-md:rounded-none"
                style={{ objectPosition: photoPosition }}
              />
            </picture>
            <div
              aria-hidden
              className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center"
              style={{
                opacity: 1 - titleOut,
                transform: `translate3d(0, ${-titleOut * 200}px, 0)`,
              }}
            >
              <span className="whitespace-nowrap font-condensed text-[21vw] font-semibold uppercase leading-[0.85] tracking-tight md:text-[19vw] text-primary">
                {TITLE.map((letter, i) => (
                  <span
                    key={i}
                    className="amb-letter gold-glow-letter inline-block"
                    style={{
                      // Salita della lettera, poi la luce che passa da sinistra a destra.
                      animationName: "amb-letter-up, gold-glow-letter",
                      animationDuration: "0.9s, 5s",
                      animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1), ease-in-out",
                      animationIterationCount: "1, infinite",
                      animationFillMode: "forwards, none",
                      animationDelay: `${0.15 + i * 0.07}s, ${1.8 + i * 0.09}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </div>
            <picture>
              <source media="(min-width: 768px)" srcSet={heroCutoutDesktop} />
              <img
                src={heroCutout}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 size-full object-cover"
                style={{ objectPosition: photoPosition }}
              />
            </picture>
            {/* Davanti allo scontorno: una copia invisibile del titolo dà la misura,
                così l'etichetta parte esattamente dalla A di AMBIZIOSA. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-center"
              style={{
                opacity: 1 - titleOut,
                transform: `translate3d(0, ${-titleOut * 200}px, 0)`,
              }}
            >
              <span className="relative whitespace-nowrap font-condensed text-[21vw] font-semibold uppercase leading-[0.85] tracking-tight md:text-[19vw]">
                <span className="invisible">AMBIZIOSA</span>
                <span className="absolute bottom-full left-[0.06em] mb-2 max-w-[48%] whitespace-normal md:left-auto md:right-[0.06em] font-condensed text-[11px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-secondary sm:mb-3 sm:text-sm md:max-w-none md:whitespace-nowrap md:tracking-[0.3em]"
                  style={{ textShadow: "0 0 10px rgb(255 255 255 / 0.95), 0 0 2px rgb(255 255 255 / 0.9)" }}
                >
                  Il mio nuovo evento dal vivo del 2027
                </span>
              </span>
            </div>
          </div>
          <h1 className="sr-only">Ambiziosa, il mio nuovo evento dal vivo del 2027</h1>
        </div>

        {desktop ? <SideColumn images={[{ src: participantNotes, position: "50% 40%" }, { src: participantsRoom, position: "50% 50%" }]} side="right" t={sides} /> : null}

        <div
          className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center px-5 text-center md:justify-start md:pt-6"
          style={{
            height: `${insetBottom}%`,
            opacity: caption,
            transform: `translate3d(0, ${(1 - caption) * 30}px, 0)`,
          }}
        >
          {/* Su computer tre righe esatte, così il testo resta sotto le foto laterali. */}
          <p className="max-w-5xl text-balance font-display text-xl leading-tight text-foreground sm:text-3xl lg:text-[clamp(1.6rem,4.4vh,2.1rem)]">
            <span className="text-[var(--gold-text)]">Ambiziosa</span> è il mio evento live di 2 giorni, a febbraio, <br className="hidden md:block" />
            dedicato a donne imprenditrici che hanno l'ambizione <br className="hidden md:block" />
            di trasformare la loro attività in un'azienda strutturata.
          </p>
          <p className="mt-3 max-w-4xl text-balance font-condensed text-xs uppercase leading-relaxed tracking-[0.2em] text-foreground/75 sm:text-base">
            Lavoriamo su quello che veramente ti serve per creare un'azienda che cresce:{" "}
            <span className="text-foreground">funnel, ads, fisco, visione aziendale, delega e team.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 2. Titoli che ruotano */

// La parola chiave di ogni frase è in oro.
const FLIP_LINES = [
  { before: "Ambiziosa non è un evento dove prendi ", key: "appunti", after: " passivamente." },
  { before: "In due giorni lavoriamo sulla tua ", key: "struttura di business", after: "." },
  { before: "Contenuti, offerte, funnel, ads. Con il supporto del ", key: "mio team", after: " in diretta." },
];

// Video di presentazione: finché manca, al suo posto c'è un riquadro con il tasto play.
const PRESENTATION_VIDEO_SRC: string | null = null;

function FlipHeadlines() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>("sticky");
  const [videoStarted, setVideoStarted] = useState(false);
  // Una tappa in più dopo i titoli: l'ultima frase sparisce e arriva il video.
  const step = 1 / (FLIP_LINES.length + 1);
  const video = phase(progress, FLIP_LINES.length * step - 0.02, FLIP_LINES.length * step + 0.12);

  return (
    <div ref={ref} className="relative" style={{ height: "420vh" }}>
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden px-4">
        <div className="relative w-full max-w-6xl" style={{ perspective: "1000px" }}>
          <div className="relative min-h-[1.4em] text-[9vw] md:text-[5vw]">
            {FLIP_LINES.map((line, i) => {
              // Entra ruotando dal basso, resta, esce ruotando verso l'alto.
              const enter = phase(progress, i * step - 0.08, i * step + 0.08);
              const last = i === FLIP_LINES.length - 1;
              const exit = last
                ? phase(progress, (i + 1) * step - 0.1, (i + 1) * step)
                : phase(progress, (i + 1) * step - 0.08, (i + 1) * step + 0.08);
              const first = i === 0;
              const rot = exit > 0 ? lerp(0, 90, exit) : first ? 0 : lerp(-90, 0, enter);
              const opacity = exit > 0 ? 1 - exit : first ? 1 : enter;
              return (
                <h2
                  key={line.key}
                  className="absolute inset-0 flex items-center justify-center text-center font-display font-semibold leading-tight tracking-tight text-foreground"
                  style={{
                    transform: `rotateX(${rot}deg)`,
                    opacity,
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span>
                    {line.before}
                    <span className="text-[var(--gold-text)]">{line.key}</span>
                    {line.after}
                  </span>
                </h2>
              );
            })}
          </div>
        </div>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-5"
          style={{
            opacity: video,
            transform: `translate3d(0, ${(1 - video) * 40}px, 0)`,
            pointerEvents: video > 0.5 ? "auto" : "none",
          }}
        >
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-secondary shadow-2xl">
            {PRESENTATION_VIDEO_SRC ? (
              <video
                src={PRESENTATION_VIDEO_SRC}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setVideoStarted(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-20 sm:w-20">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 sm:h-9 sm:w-9" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="sr-only">Video di presentazione in arrivo</span>
              </div>
            )}
            {/* Sopra al tasto play, dentro il video: fuori finirebbe sotto il menu. */}
            {videoStarted ? null : (
              <p className="pointer-events-none absolute inset-x-4 bottom-[calc(50%+2.75rem)] text-center font-condensed text-xs uppercase tracking-[0.2em] text-white [text-shadow:0_1px_8px_rgb(0_0_0_/_0.6)] sm:bottom-[calc(50%+3.5rem)] sm:text-base sm:tracking-[0.25em]">
                Clicca qui sotto e guarda il video
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Divide un testo in parole; i pezzi tra **due asterischi** vanno in grassetto
// (nei paragrafi lunghi servono sempre dei grassetti che guidano la lettura).
function splitWords(text: string) {
  let bold = false;
  return text.split(" ").map((raw) => {
    let w = raw;
    if (w.startsWith("**")) {
      bold = true;
      w = w.slice(2);
    }
    const isBold = bold;
    if (w.includes("**")) {
      bold = false;
      w = w.replace("**", "");
    }
    return { w, bold: isBold };
  });
}

// Testo che si rivela parola per parola mentre attraversa lo schermo: ogni
// parola passa da sfocata e trasparente a nitida. `emphasisFrom` mette in
// corsivo evidenziato le parole da quell'indice in poi.
function WordReveal({
  text,
  className = "",
  as: Tag = "p",
  blur = 8,
  minOpacity = 0.12,
  emphasisFrom,
  emphasisClassName = "",
}: {
  text: string;
  className?: string;
  as?: "p" | "h2";
  blur?: number;
  minOpacity?: number;
  emphasisFrom?: number;
  emphasisClassName?: string;
}) {
  const { ref, progress } = useScrollProgress<HTMLHeadingElement>("reveal");
  const lowPower = useLowPower();
  const words = splitWords(text);
  return (
    <Tag ref={ref} className={className}>
      {words.map(({ w, bold }, i) => {
        const t = clamp(progress * words.length * 1.15 - i);
        const emphasis = emphasisFrom !== undefined && i >= emphasisFrom;
        return (
          <span
            key={i}
            className={`inline-block ${emphasis ? emphasisClassName : ""} ${bold ? "font-semibold" : ""}`}
            style={{
              opacity: lerp(minOpacity, 1, t),
              filter: lowPower ? undefined : `blur(${lerp(blur, 0, t)}px)`,
              transition: lowPower ? "opacity 0.15s linear" : "opacity 0.15s linear, filter 0.15s linear",
              marginRight: "0.28em",
            }}
          >
            {w}
          </span>
        );
      })}
    </Tag>
  );
}

function Manifesto() {
  return (
    <section className="bg-background">
      <FlipHeadlines />
      <div className="px-6 pb-24 pt-4 md:px-12 md:pb-32">
        <WordReveal
          className="mx-auto max-w-4xl text-center text-2xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl"
          text="Se sei imprenditrice e vuoi trasformare la tua attività in un'azienda, non puoi basare tutto solo sui contenuti, ma devi avere **una struttura solida alle spalle.** Nei **2 giorni di evento live** lavori proprio su questo: **struttura di funnel, ads, fisco, previsione annuale dei clienti.**"
        />
        <WordReveal
          className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-foreground/80 sm:text-xl"
          text="È questo che fa crescere il tuo business. I contenuti sono solo la parte iniziale, ma **da soli non bastano** se il tuo obiettivo è arrivare a costruire un'azienda."
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 4. Il problema */

const PROBLEM_SLIDES = [
  { src: carlottaPresenting, line: "I contenuti sono il primo step." },
  { src: carlottaTalking, line: "Ma da soli non tengono in piedi un'azienda." },
  { src: carlottaLooking2, line: "E non ti garantiscono un fatturato costante." },
  { src: carlottaPointing, line: "In Ambiziosa 2027 lavoriamo su tutta la struttura." },
];

function BlurLine({ text, t, lowPower }: { text: string; t: number; lowPower: boolean }) {
  // t: 0 nascosta, 0.5 a fuoco, 1 di nuovo nascosta
  const words = text.split(" ");
  return (
    <h2 className="absolute max-w-4xl px-6 text-center font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
      {words.map((w, i) => {
        const local = clamp(t * 2 * (1 + words.length * 0.12) - i * 0.12);
        const visible = t < 0.5 ? local : clamp((1 - t) * 2 * (1 + words.length * 0.12) - (words.length - 1 - i) * 0.12);
        return (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: visible,
              filter: `blur(${lerp(lowPower ? 6 : 30, 0, visible)}px)`,
              marginRight: "0.25em",
            }}
          >
            {w}
          </span>
        );
      })}
    </h2>
  );
}

function ProblemSplit() {
  const { ref, progress } = useScrollProgress<HTMLElement>("sticky");
  const desktop = useIsDesktop();
  const lowPower = useLowPower();
  const slidesEnd = 0.72;
  const slide = phase(progress, 0, slidesEnd) * PROBLEM_SLIDES.length;
  const split = ease(phase(progress, slidesEnd + 0.04, 1));
  // Come nell'apertura: la foto centrale si ritaglia, le laterali entrano con transform.
  const top = (desktop ? 96 : 80) * split;
  const side = desktop ? `${28 * split}%` : `${16 * split}px`;
  const clip = `inset(${top}px ${side} ${24 * split}px ${side} round ${24 * split}px)`;

  return (
    <section ref={ref} className="relative bg-secondary" style={{ height: "520vh" }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        {desktop ? (
          <div
            className="absolute bottom-6 left-4 top-24 w-[calc(28%-28px)] overflow-hidden rounded-3xl will-change-transform"
            style={{ opacity: split, transform: `translate3d(${lerp(-110, 0, split)}%, 0, 0)` }}
          >
            <img src={carlottaHug} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
        ) : null}

        <div className="absolute inset-0" style={{ clipPath: clip, WebkitClipPath: clip }}>
          {PROBLEM_SLIDES.map((s, i) => (
            <img
              key={s.line}
              src={s.src}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
              style={{
                // Ogni foto entra a cavallo del cambio di titolo, in poco scroll.
                opacity: i === 0 ? 1 : clamp((slide - i + 0.1) / 0.2),
                transform: `scale(${lerp(1.08, 1, clamp(slide - i + 0.1))})`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/45" style={{ opacity: 1 - split * 0.3 }} />
          {/* L'ultima frase non sparisce: resta al centro e si rimpicciolisce
              insieme alla foto quando arrivano le foto laterali. */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `scale(${lerp(1, desktop ? 0.62 : 0.9, split)})` }}
          >
            {PROBLEM_SLIDES.map((s, i) => {
              const t = clamp(slide - i);
              const last = i === PROBLEM_SLIDES.length - 1;
              return <BlurLine key={s.line} text={s.line} t={last ? Math.min(t, 0.5) : t} lowPower={lowPower} />;
            })}
          </div>
        </div>

        {desktop ? (
          <div
            className="absolute bottom-6 right-4 top-24 w-[calc(28%-28px)] overflow-hidden rounded-3xl will-change-transform"
            style={{ opacity: split, transform: `translate3d(${lerp(110, 0, split)}%, 0, 0)` }}
          >
            <img src={carlottaWalking} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

// Dopo che le foto si sono raggruppate al centro arriva il racconto: il
// titolo, poi un solo paragrafo in tre parti che si accende parola per parola.
// Accanto, un piccolo elemento animato mostra la parte che si sta leggendo.
const PROBLEM_TITLE = "È vero, in questo momento stai trovando clienti ogni mese. Ma sei sicura di trovarli anche fra due mesi?";
// Da questa parola in poi il titolo è in oro.
const PROBLEM_TITLE_GOLD_FROM = 10;
const PROBLEM_PARTS = [
  "Magari quest'anno hai fatturato più di quanto pensavi. Ma se ti chiedo come ci sei arrivata, **come lo rifai l'anno prossimo** e dove vuoi arrivare negli anni dopo, la risposta non è così chiara.",
  "Io ci sono passata. Sono uscita dal forfettario **senza un previsionale, senza una struttura.** Ho lavorato due anni in perdita: ogni volta che arrivava una cliente facevo il conto di quanto mi restava in tasca, quasi niente. Poi un giorno di giugno ho aperto **un F24 da 51 mila euro.**",
  "Nessuno me ne aveva parlato. Tutti insegnano a fare contenuti, offerte e ganci: **i funnel di vendita, le ads, il previsionale dei clienti, il team e la delega, e la visione aziendale** non te li spiega mai nessuno.",
];

/* Parte 1: il fatturato del 2026 cresce, il 2027 è un punto di domanda. */
const REVENUE_2026 = [28, 33, 30, 38, 36, 44, 41, 50, 56, 52, 63, 72];
const MONTHS = ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"];

function RevenueVisual({ on }: { on: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-baseline justify-between font-condensed text-xs uppercase tracking-[0.25em] text-ink/60">
        <span>Fatturato 2026</span>
        <span className="text-primary">2027 ?</span>
      </div>
      <div className="mt-6 flex flex-1 items-end gap-1.5">
        {REVENUE_2026.map((v, i) => (
          <div key={i} className="flex h-full flex-1 flex-col justify-end">
            <div
              className="rounded-t-md bg-primary transition-all duration-700 ease-out"
              // I mesi si riempiono uno dopo l'altro, da gennaio a dicembre.
              style={{
                height: on ? `${v}%` : "0%",
                transitionDuration: "450ms",
                transitionDelay: on ? `${i * 110}ms` : "0ms",
              }}
            />
          </div>
        ))}
        <div className="mx-1 h-full w-px bg-ink/15" />
        {[0, 1, 2].map((i) => (
          <div key={`n${i}`} className="flex h-full flex-1 flex-col justify-end">
            <div
              className="flex items-start justify-center rounded-t-md border border-dashed border-primary/70 pt-1 font-display text-sm text-primary transition-all duration-700 ease-out"
              style={{ height: on ? "60%" : "0%", opacity: on ? 1 : 0, transitionDelay: on ? `${1500 + i * 150}ms` : "0ms" }}
            >
              ?
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1.5 font-condensed text-[10px] text-ink/40">
        {MONTHS.map((m, i) => (
          <span key={i} className="flex-1 text-center">
            {m}
          </span>
        ))}
        <span className="mx-1 w-px" />
        {[0, 1, 2].map((i) => (
          <span key={`m${i}`} className="flex-1" />
        ))}
      </div>
    </div>
  );
}

/* Parte 2: il previsionale, cioè quante clienti ti servono ogni mese. I
   numeri sono un esempio; l'ultimo mese resta un punto di domanda. */
const CLIENTS_PLAN = [
  { month: "Marzo", clients: 3 },
  { month: "Aprile", clients: 5 },
  { month: "Maggio", clients: 4 },
  { month: "Giugno", clients: 6 },
];

function ClientsVisual({ on }: { on: boolean }) {
  let dot = 0;
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-baseline justify-between font-condensed text-xs uppercase tracking-[0.25em] text-ink/60">
        <span>Previsionale</span>
        <span className="text-primary">Quante clienti ti servono?</span>
      </div>
      <ul className="mt-6 flex flex-1 flex-col justify-between">
        {CLIENTS_PLAN.map((row, r) => (
          <li
            key={row.month}
            className="flex items-center gap-4 border-b border-ink/10 pb-3 transition-opacity duration-500"
            style={{ opacity: on ? 1 : 0, transitionDelay: on ? `${r * 350}ms` : "0ms" }}
          >
            <span className="w-20 font-condensed text-sm uppercase tracking-[0.2em] text-ink/80">{row.month}</span>
            <span className="flex flex-1 gap-1.5">
              {Array.from({ length: row.clients }).map((_, i) => {
                const d = dot++;
                return (
                  <span
                    key={i}
                    className="size-4 rounded-full bg-primary transition-all duration-300"
                    style={{
                      opacity: on ? 1 : 0,
                      transform: on ? "scale(1)" : "scale(0.4)",
                      transitionDelay: on ? `${r * 350 + 150 + i * 90}ms` : "0ms",
                    }}
                  />
                );
              })}
            </span>
            <span className="font-display text-lg tabular-nums text-ink">{row.clients}</span>
          </li>
        ))}
        <li
          className="flex items-center gap-4 pt-1 transition-opacity duration-500"
          style={{ opacity: on ? 1 : 0, transitionDelay: on ? `${CLIENTS_PLAN.length * 350 + 300}ms` : "0ms" }}
        >
          <span className="w-20 font-condensed text-sm uppercase tracking-[0.2em] text-ink/80">Poi</span>
          <span className="flex-1 border-t border-dashed border-primary/60" />
          <span className="font-display text-3xl text-primary">?</span>
        </li>
      </ul>
    </div>
  );
}

/* Parte 3: la piramide da freelance ad azienda, costruita dal basso. I primi
   due gradini li insegnano tutti; sopra la linea c'è quello che non spiega
   nessuno, ed è lì che lavora Ambiziosa. */
const PYRAMID = [
  { label: "Contenuti · Ganci · Script", width: 100 },
  { label: "Offerte", width: 88 },
  { label: "Funnel e ads", width: 76 },
  { label: "Previsionale", width: 64 },
  { label: "Fisco e team", width: 52 },
  { label: "Visione", width: 40 },
];
const PYRAMID_LINE_AFTER = 2;

function PyramidVisual({ on }: { on: boolean }) {
  const step = 260;
  const levels = PYRAMID.map((level, i) => {
    const above = i >= PYRAMID_LINE_AFTER;
    // Dopo la linea c'è una pausa, poi si costruisce la parte in oro.
    const delay = i * step + (above ? 400 : 0);
    return (
      <div
        key={level.label}
        className={`mx-auto flex min-h-0 flex-1 items-center justify-center rounded-lg font-condensed text-xs uppercase tracking-[0.18em] transition-all duration-500 sm:text-sm ${
          above ? "bg-primary font-semibold text-primary-foreground" : "bg-ink/10 text-ink/80"
        }`}
        style={{
          width: `${level.width}%`,
          opacity: on ? 1 : 0,
          transform: on ? "translateY(0) scaleX(1)" : "translateY(14px) scaleX(0.9)",
          transitionDelay: on ? `${delay}ms` : "0ms",
        }}
      >
        {level.label}
      </div>
    );
  });
  const lineDelay = PYRAMID_LINE_AFTER * step + 100;

  return (
    <div className="flex h-full flex-col">
      <p className="text-center font-condensed text-xs uppercase tracking-[0.25em] text-primary">Azienda</p>
      {/* Dal basso verso l'alto: column-reverse mette il primo gradino in fondo. */}
      <div className="my-3 flex min-h-0 flex-1 flex-col-reverse gap-1.5">
        {levels.slice(0, PYRAMID_LINE_AFTER)}
        <div
          className="flex items-center gap-3 py-1 transition-opacity duration-500"
          style={{ opacity: on ? 1 : 0, transitionDelay: on ? `${lineDelay}ms` : "0ms" }}
        >
          <span className="flex-1 border-t border-dashed border-ink/40" />
          <span className="font-condensed text-[10px] uppercase tracking-[0.2em] text-ink/60 sm:text-xs">
            Qui si fermano quasi tutti
          </span>
          <span className="flex-1 border-t border-dashed border-ink/40" />
        </div>
        {levels.slice(PYRAMID_LINE_AFTER)}
      </div>
      <p className="text-center font-condensed text-xs uppercase tracking-[0.25em] text-ink/60">Freelance</p>
    </div>
  );
}

const PROBLEM_VISUALS = [RevenueVisual, ClientsVisual, PyramidVisual];
const PART_WORDS = PROBLEM_PARTS.map(splitWords);
const TOTAL_WORDS = PART_WORDS.reduce((n, w) => n + w.length, 0);

function VisualCard({ active }: { active: number }) {
  return (
    <div
      className="relative h-[340px] w-full rounded-3xl border border-ink/10 bg-ink/[0.04] p-6 transition-opacity duration-700 md:h-[min(380px,52vh)] md:p-8"
      style={{ opacity: active < 0 ? 0 : 1 }}
    >
      {PROBLEM_VISUALS.map((Visual, i) => (
        <div
          key={i}
          className="absolute inset-6 transition-opacity duration-500 md:inset-8"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Visual on={i === active} />
        </div>
      ))}
    </div>
  );
}

// Su computer la sezione resta ferma mentre si scorre: il titolo si accende,
// poi i tre paragrafi parola per parola, e l'elemento a destra segue la parte
// letta. Il blocco parte sotto la barra in alto e i caratteri seguono l'altezza
// dello schermo, così niente finisce sotto il menu o fuori dal fondo.
function ProblemStory() {
  const { ref, progress } = useScrollProgress<HTMLElement>("sticky");
  const lowPower = useLowPower();
  const titleWords = PROBLEM_TITLE.split(" ");
  const titleT = phase(progress, 0, 0.12);
  const textT = phase(progress, 0.14, 0.82);
  const shown = textT * TOTAL_WORDS * 1.05;
  const reading = Math.min(Math.floor(textT * TOTAL_WORDS), TOTAL_WORDS - 1);
  let active = 0;
  let count = 0;
  PART_WORDS.forEach((w, i) => {
    if (reading >= count) active = i;
    count += w.length;
  });
  // Il primo elemento compare solo quando inizia il primo paragrafo.
  const visual = textT > 0 ? active : -1;

  let index = 0;
  return (
    <section ref={ref} className="relative bg-secondary" style={{ height: "380vh" }}>
      <div className="sticky top-0 flex h-svh items-start overflow-hidden px-12 pb-6 pt-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[1.15fr_0.85fr] items-center gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,4.4vh,3rem)] leading-tight text-ink">
              {titleWords.map((w, i) => {
                const t = clamp(titleT * titleWords.length * 1.15 - i);
                return (
                  <span
                    key={i}
                    className={`inline-block ${i >= PROBLEM_TITLE_GOLD_FROM ? "text-primary" : ""}`}
                    style={{
                      opacity: t,
                      filter: lowPower ? undefined : `blur(${lerp(20, 0, t)}px)`,
                      marginRight: "0.28em",
                    }}
                  >
                    {w}
                  </span>
                );
              })}
            </h2>
            <div className="mt-[3vh] space-y-[1.4em] text-[clamp(0.95rem,2.3vh,1.45rem)] leading-relaxed text-ink">
              {PART_WORDS.map((words, part) => (
                <p key={part}>
                  {words.map(({ w, bold }) => {
                    const i = index++;
                    const t = clamp(shown - i);
                    return (
                      <span
                        key={i}
                        className={`inline-block ${bold ? "font-semibold text-primary" : ""}`}
                        style={{
                          opacity: t * (part === active ? 1 : 0.45),
                          filter: lowPower ? undefined : `blur(${lerp(10, 0, t)}px)`,
                          transition: "opacity 0.3s linear",
                          marginRight: "0.28em",
                        }}
                      >
                        {w}
                      </span>
                    );
                  })}
                </p>
              ))}
            </div>
          </div>
          <VisualCard active={visual} />
        </div>
      </div>
    </section>
  );
}

// Da telefono non c'è spazio per tenere tutto fermo: titolo, poi ogni parte
// del paragrafo con il suo elemento animato sotto.
function ProblemStoryMobile() {
  return (
    <section className="bg-secondary px-5 pb-24 pt-16">
      <WordReveal
        as="h2"
        blur={20}
        minOpacity={0}
        className="font-display text-4xl leading-tight text-ink"
        text={PROBLEM_TITLE}
        emphasisFrom={PROBLEM_TITLE_GOLD_FROM}
        emphasisClassName="text-primary"
      />
      <div className="mt-10 space-y-10">
        {PROBLEM_PARTS.map((text, i) => (
          <MobilePart key={i} text={text} index={i} />
        ))}
      </div>
    </section>
  );
}

function MobilePart({ text, index }: { text: string; index: number }) {
  // L'elemento compare e si anima solo quando ci si arriva sopra, a testo finito.
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.85, rootMargin: "0px 0px -8% 0px" });
  const Visual = PROBLEM_VISUALS[index] ?? RevenueVisual;
  return (
    <div className="space-y-6">
      <WordReveal blur={8} minOpacity={0} className="text-xl leading-relaxed text-ink" text={text} />
      <div ref={ref} className="h-[300px]">
        <div
          className="h-full rounded-3xl border border-ink/10 bg-ink/[0.04] p-5"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translate3d(0, 28px, 0)",
            transition: "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <Visual on={inView} />
        </div>
      </div>
    </div>
  );
}

function ProblemText() {
  const desktop = useIsDesktop();
  return desktop ? <ProblemStory /> : <ProblemStoryMobile />;
}

/* ---------------------------------------------------------------- 5. Il cambio */

const STACK = [
  { src: carlottaWall, line: "Per questo lo faccio al contrario." },
  { src: carlottaTalking, line: "Sul palco, io e il team." },
  { src: carlottaLooking2, line: "Errori, numeri, notti insonni." },
  { src: community, line: "Poi si lavora sulla tua azienda." },
];

function ZoomStack() {
  const { ref, progress } = useScrollProgress<HTMLElement>("sticky");
  const per = 1 / STACK.length;

  return (
    <section ref={ref} className="relative -mt-px bg-secondary" style={{ height: "460vh" }}>
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden px-4">
        <div className="relative h-[72vh] w-full max-w-5xl md:h-[80vh]">
          {STACK.map((card, i) => {
            const t = ease(phase(progress, i * per, i * per + per * 0.85));
            const covered = i < STACK.length - 1 ? ease(phase(progress, (i + 1) * per, (i + 1) * per + per * 0.85)) : 0;
            return (
              <div
                key={card.line}
                className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl"
                style={{
                  zIndex: i,
                  opacity: i === 0 ? 1 : t,
                  transform:
                    i === 0
                      ? `scale(${lerp(1, 0.92, covered)})`
                      : `translate3d(0, ${lerp(100, 0, t)}%, 0) scale(${lerp(0.8, 1, t) - covered * 0.08})`,
                }}
              >
                <img src={card.src} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 font-display text-3xl leading-tight text-white sm:p-10 sm:text-5xl lg:text-6xl">
                  {card.line}
                </p>
                <span className="absolute left-6 top-6 font-condensed text-sm tracking-[0.3em] text-white/70 sm:left-10 sm:top-10">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChangeText() {
  return (
    <section className="bg-secondary px-5 pb-24 pt-8 sm:pb-32">
      <div className="mx-auto max-w-3xl space-y-5 text-lg text-white/75">
        <Appear><p>
          Mi sono rotta le palle degli eventi in cui si applaude, si fanno due foto e poi{" "}
          <strong className="font-semibold text-white">il lunedì non cambia niente.</strong> Li ho
          organizzati anch'io. So quanto costano, a chi li fa e a chi ci va.
        </p></Appear>
        <Appear><p>
          <strong className="font-semibold text-white">Questa volta si lavora.</strong> Sul palco ci
          sono io con il mio team, le persone che ogni giorno fanno funzionare la mia azienda. Ti
          portiamo tutto quello che c'è dietro: gli errori, i numeri, le notti insonni, le cose che
          hanno funzionato davvero. Poi ci si mette al lavoro{" "}
          <strong className="font-semibold text-white">sulla tua azienda</strong>, insieme ad altre
          imprenditrici.
        </p></Appear>
        <Appear><p className="pt-4 font-display text-3xl leading-tight text-white sm:text-5xl">
          Non esci con domande. <em className="italic text-primary">Esci con risposte.</em>
        </p></Appear>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 6. Iscrizione */

// Subito dopo le foto impilate: il form della lista d'attesa, con il perché
// conviene iscriversi adesso.
function WaitlistSignup() {
  return (
    <section className="bg-background px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Appear>
          <span className="font-condensed text-xs uppercase tracking-[0.3em] text-foreground/60 sm:text-sm">
            Le vendite aprono il 7 dicembre
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Iscriviti alla lista d'attesa di <span className="text-[var(--gold-text)]">Ambiziosa</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Il 7 dicembre aprono le vendite e i posti sono 100. Chi è in lista d'attesa lo sa per
              prima: ti scrivo io appena si aprono, così puoi entrare prima che i posti finiscano.{" "}
              <strong className="font-semibold text-foreground">
                E hai l'early ticket, il prezzo riservato solo a chi è in lista.
              </strong>
            </p>
          </div>
        </Appear>
        <Appear>
        <div
          id="lista-attesa"
          data-waitlist
          className="w-full scroll-mt-28 rounded-3xl bg-card p-6 sm:p-8"
          // Il link alla privacy usa text-primary (oro), poco leggibile sulla
          // card chiara: qui lo riportiamo al nero sporco.
          style={{ boxShadow: "var(--shadow-deep)", "--primary": "var(--secondary)", "--primary-foreground": "var(--background)" } as React.CSSProperties}
        >
          <SignupForm compact action={WAITLIST_ACTION} submitLabel="Entra in lista d'attesa" />
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Entrare in lista è gratis e non ti impegna a comprare.
          </p>
        </div>
        </Appear>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 8. La promessa */

function PromiseSection() {
  return (
    <section className="bg-background px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Appear><h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
            Tutti ti insegnano a trovare clienti.{" "}
            <em className="italic">Nessuno ti racconta cosa succede dopo.</em>
          </h2></Appear>
          <div className="mt-8 space-y-5 text-lg text-foreground/80">
            <Appear><p>
              Quando le clienti arrivano e i soldi pure, il business cambia faccia. Se lo porti avanti
              senza una struttura, <strong className="font-semibold text-foreground">a un certo punto soffochi</strong>: non hai più tempo né spazio in testa per
              capire cosa vuoi davvero e dove vuoi andare.
            </p></Appear>
            <Appear><p>
              <strong className="font-semibold text-foreground">
                La struttura è quello che tiene in piedi il tuo business anche fra due mesi.
              </strong>{" "}
              Sapere che
              fatturato vuoi, con quali offerte e con quali contenuti, quanto paghi di tasse e chi
              lavora con te. E stare bene mentre lo fai, perché saper comunicare è il 20% del lavoro:
              il resto è gestione emotiva.
            </p></Appear>
            <Appear><p>
              Io ho imparato tutto questo da sola, perdendo tempo, soldi e un bel pezzo di libertà. Ora
              voglio costruire insieme a te{" "}
              <strong className="font-semibold text-foreground">un'azienda che ti assomiglia</strong>,
              con una vita dentro, del tempo libero e la voglia di divertirti ancora.
            </p></Appear>
          </div>
          <Appear><p className="mt-10 font-condensed text-4xl uppercase tracking-tight text-foreground sm:text-6xl">
            Da freelance ad azienda.
          </p></Appear>
        </div>
        <Appear className="w-full">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl">
          <img src={carlottaWalking} alt="Carlotta" loading="lazy" className="absolute inset-0 size-full object-cover" />
        </div>
        </Appear>
      </div>

    </section>
  );
}

/* ---------------------------------------------------------------- 9. Chiusura */

function Closing() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={carlottaWallRight}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: "50% 25%" }}
      />
      <div className="absolute inset-0 bg-secondary/70" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
        <Appear>
        <span className="font-condensed text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
          Segnati questa data
        </span>
        <h2 className="mt-4 font-condensed text-[22vw] font-semibold uppercase leading-[0.85] tracking-tight text-white sm:text-[12rem]">
          7.12
        </h2>
        <p className="mt-2 font-display text-2xl text-primary sm:text-3xl">7 dicembre, aprono le vendite.</p>
        <p className="mx-auto mt-8 max-w-xl text-lg text-white/85">
          <strong className="font-semibold text-white">I posti sono 100: quando finiscono, finiscono.</strong>{" "}
          Chi è in lista d'attesa può iscriversi per prima, con un prezzo riservato solo a lei.
          Lasciami nome ed email e ti avviso io.
        </p>
        </Appear>
        <Appear>
        <div
          data-waitlist
          className="mx-auto mt-10 w-full max-w-md scroll-mt-28 rounded-3xl bg-card p-6 text-left sm:p-8"
          // Il link alla privacy usa text-primary (oro), poco leggibile sulla
          // card chiara: qui lo riportiamo al nero sporco.
          style={{ boxShadow: "var(--shadow-deep)", "--primary": "var(--secondary)", "--primary-foreground": "var(--background)" } as React.CSSProperties}
        >
          <SignupForm compact action={WAITLIST_ACTION} submitLabel="Entra in lista d'attesa" />
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Entrare in lista è gratis e non ti impegna a comprare.
          </p>
        </div>
        </Appear>
        <p className="mt-10 font-display text-2xl text-white">Carlotta 🌷</p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Domande frequenti */

const FAQS = [
  {
    q: "Quando si svolge Ambiziosa?",
    a: "A febbraio 2027, dal vivo, in 2 giorni. La data esatta e il luogo li trovi all'apertura delle vendite, il 7 dicembre.",
  },
  {
    q: "Quando aprono le vendite?",
    a: "Il 7 dicembre. Chi è in lista d'attesa può iscriversi per prima, con un prezzo riservato solo a lei.",
  },
  {
    q: "Entrare in lista d'attesa mi impegna a comprare?",
    a: "No. Entrare in lista è gratis e non ti impegna a comprare: ti avviso io quando si aprono le vendite e poi decidi tu.",
  },
  {
    q: "Quanto costa il biglietto?",
    a: "Il prezzo lo comunico all'apertura delle vendite. Chi è in lista d'attesa ha un prezzo riservato.",
  },
  {
    q: "Quanti posti ci sono?",
    a: "100. Quando finiscono, finiscono.",
  },
  {
    q: "Va bene anche se sto partendo da zero?",
    a: "Ambiziosa è pensata per chi ha già un'attività avviata e dei clienti, e vuole trasformarla in un'azienda strutturata. Se stai partendo da zero, non è ancora il momento giusto.",
  },
  {
    q: "Su cosa lavoriamo nei 2 giorni?",
    a: "Su quello che ti serve per creare un'azienda che cresce: funnel, ads, fisco, visione aziendale, delega e team.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-background px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Appear><h2 className="text-center font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Domande <span className="text-[var(--gold-text)]">frequenti</span>
        </h2></Appear>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((f) => (
            <Appear key={f.q}>
              <AccordionItem value={f.q}>
                <AccordionTrigger className="text-left text-base text-foreground sm:text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-foreground/75 sm:text-base">{f.a}</AccordionContent>
              </AccordionItem>
            </Appear>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ListaAttesaAmbiziosa() {
  return (
    <div className="theme-ambiziosa-2027 bg-background text-foreground">
      <Topbar />
      <Hero />
      <Manifesto />
      <ProblemSplit />
      <ProblemText />
      <ZoomStack />
      <ChangeText />
      <WaitlistSignup />
      <PromiseSection />
      <Closing />
      <Faq />
      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
