import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "@/components/landing/SignupForm";
import { SiteFooter } from "@/components/landing/SiteFooter";
import heroBg from "@/assets/Carlotta spostata a sinistra che guarda verso la camera.jpg";
import heroCutout from "@/assets/ambiziosa-carlotta-cutout.png";
import carlottaPresenting from "@/assets/carlotta-presenting.jpg";
import carlottaTalking from "@/assets/carlotta-talking.jpg";
import carlottaLooking from "@/assets/carlotta-looking.jpg";
import carlottaLooking2 from "@/assets/carlotta-looking-2.jpg";
import carlottaHug from "@/assets/carlotta-hug.jpg";
import carlottaWalking from "@/assets/carlotta-walking.jpg";
import carlottaWall from "@/assets/ambiziosa-carlotta-muro-web.jpg";
import carlottaWallRight from "@/assets/Carlotta che guarda a destra appoggiata al muro.jpg";
import carlottaBw from "@/assets/Carlotta bianco e nero che guarda in camera.jpg";
import sharonCarlotta from "@/assets/ambiziosa-sharon-carlotta-web.jpg";
import sharonSpeaking from "@/assets/sharon-speaking.jpg";
import community from "@/assets/community.png";
import livestream from "@/assets/livestream.jpg";

// TODO Andrea: sostituire con il form Systeme della lista d'attesa dell'evento
// dal vivo (oggi punta al form standard di Rule The Rules, che va cambiato
// prima di pubblicare la pagina).
const WAITLIST_ACTION = "https://systeme.io/embedded/44087792/subscription";

// Apertura delle vendite: 7 dicembre 2026 (ora da confermare).
const SALES_OPEN = new Date("2026-12-07T00:00:00+01:00").getTime();

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

function useInView<T extends HTMLElement>() {
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
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
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
      className={`fixed left-1/2 top-4 z-50 grid w-[92%] max-w-3xl -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-full px-4 py-2 sm:gap-3 sm:px-5 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-lg md:bg-background/80 md:backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Bottone sempre al centro; data a sinistra e, dopo il primo scroll,
          "I posti sono limitati" a destra con lo stesso peso della data. */}
      <span className="font-condensed text-[11px] uppercase leading-tight tracking-[0.1em] text-foreground/80 sm:text-xs sm:tracking-[0.2em]">
        Le vendite aprono il{"\u00a0"}7/12
      </span>
      <a
        href="#lista-attesa"
        onClick={scrollToWaitlist}
        className="glow-sweep relative rounded-full bg-primary px-3 py-2.5 text-center font-condensed text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:min-w-[13rem] sm:px-10 sm:text-sm"
      >
        Entra in lista
      </a>
      <span
        className={`text-right font-condensed text-[11px] uppercase leading-tight tracking-[0.1em] text-foreground/80 transition-all duration-500 sm:text-xs sm:tracking-[0.2em] ${
          scrolled ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        I posti sono limitati
      </span>
    </header>
  );
}

/* ---------------------------------------------------------------- 1. Apertura */

const TITLE = "AMBIZIOSA".split("");

// Colonna laterale già nella sua posizione finale: entra solo con transform e
// opacità, così il telefono non deve ricalcolare l'impaginazione.
function SideColumn({ images, side, t }: { images: string[]; side: "left" | "right"; t: number }) {
  const dir = side === "left" ? -1 : 1;
  return (
    <div
      className={`absolute bottom-[30%] top-[84px] flex w-[calc(33%-28px)] flex-row gap-3 will-change-transform ${
        side === "left" ? "left-4" : "right-4"
      }`}
      style={{ transform: `translate3d(${lerp(dir * 115, 0, t)}%, 0, 0)`, opacity: t }}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="relative h-full flex-1 overflow-hidden rounded-3xl"
          style={{ transform: `translate3d(0, ${lerp(25 + i * 20, 0, t)}%, 0)` }}
        >
          <img src={src} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
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
  // La foto resta a tutto schermo e si "ritaglia" fino alla scheda centrale.
  const insetX = desktop ? 33 : 6;
  const insetBottom = desktop ? 30 : 36;
  const clip = `inset(${84 * shrink}px ${insetX * shrink}% ${insetBottom * shrink}% ${insetX * shrink}% round ${24 * shrink}px)`;

  return (
    <section ref={ref} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-svh overflow-hidden">
        {desktop ? <SideColumn images={[carlottaHug, sharonSpeaking]} side="left" t={sides} /> : null}

        <div className="absolute inset-0" style={{ clipPath: clip, WebkitClipPath: clip }}>
          {/* Scende con il bordo alto del ritaglio (la testa resta in vista) e su computer
              si sposta a sinistra per tenere Carlotta al centro della scheda. */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{ transform: `translate3d(${(desktop ? -9 : 0) * shrink}%, ${84 * shrink}px, 0)` }}
          >
            <img
              src={heroBg}
              alt="Carlotta sul lungomare di Genova"
              className="absolute inset-0 size-full object-cover"
              style={{ objectPosition: "62% 12%" }}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center"
              style={{
                opacity: 1 - titleOut,
                transform: `translate3d(0, ${-titleOut * 200}px, 0)`,
              }}
            >
              <span className="whitespace-nowrap font-condensed text-[21vw] font-semibold uppercase leading-[0.85] tracking-tight text-primary">
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
            <img
              src={heroCutout}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 size-full object-cover"
              style={{ objectPosition: "62% 12%" }}
            />
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
              <span className="relative whitespace-nowrap font-condensed text-[21vw] font-semibold uppercase leading-[0.85] tracking-tight">
                <span className="invisible">AMBIZIOSA</span>
                <span className="absolute bottom-full left-[0.06em] mb-2 max-w-[48%] whitespace-normal font-condensed text-[11px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-secondary sm:mb-3 sm:text-sm md:max-w-none md:whitespace-nowrap md:tracking-[0.3em]"
                  style={{ textShadow: "0 0 10px rgb(255 255 255 / 0.95), 0 0 2px rgb(255 255 255 / 0.9)" }}
                >
                  Il mio nuovo evento dal vivo del 2027
                </span>
              </span>
            </div>
          </div>
          <h1 className="sr-only">Ambiziosa, il mio nuovo evento dal vivo del 2027</h1>
        </div>

        {desktop ? <SideColumn images={[sharonCarlotta, carlottaTalking]} side="right" t={sides} /> : null}

        <div
          className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center px-5 text-center md:justify-start md:pt-8"
          style={{
            height: `${insetBottom}%`,
            opacity: caption,
            transform: `translate3d(0, ${(1 - caption) * 30}px, 0)`,
          }}
        >
          {/* Su computer due righe esatte, così il testo resta sotto le foto laterali. */}
          <p className="max-w-5xl font-display text-2xl leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            Voglio cambiare il mondo della formazione <br className="hidden md:block" />
            imprenditoriale dal vivo in Italia.
          </p>
          <p className="mt-4 font-condensed text-sm uppercase tracking-[0.25em] text-foreground/75 sm:text-base">
            <span className="text-foreground">Ambiziosa</span> sarà un evento dal vivo completamente diverso dai soliti
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 2. Titoli che ruotano */

// La parola chiave di ogni frase è in oro.
const FLIP_LINES = [
  { before: "Basta speech dove prendi solo ", key: "appunti", after: "." },
  { before: "Basta speech dove torni a casa con un sacco di ", key: "domande", after: "." },
  { before: "In due giorni lavoriamo sulla tua ", key: "struttura di business", after: "." },
  { before: "Contenuti, offerte, funnel, ads. E ", key: "il mio team", after: " ti controlla tutto." },
];

// Video di presentazione: finché manca, al suo posto c'è un riquadro con il tasto play.
const PRESENTATION_VIDEO_SRC: string | null = null;

function FlipHeadlines() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>("sticky");
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
          <p className="mb-4 text-center font-condensed text-sm uppercase tracking-[0.25em] text-foreground sm:text-base">
            Clicca qui sotto e guarda il video
          </p>
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-secondary shadow-2xl">
            {PRESENTATION_VIDEO_SRC ? (
              <video src={PRESENTATION_VIDEO_SRC} controls playsInline preload="metadata" className="h-full w-full object-cover" />
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
          </div>
        </div>
      </div>
    </div>
  );
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
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => {
        const t = clamp(progress * words.length * 1.15 - i);
        const emphasis = emphasisFrom !== undefined && i >= emphasisFrom;
        return (
          <span
            key={i}
            className={`inline-block ${emphasis ? emphasisClassName : ""}`}
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
          text="Voglio creare insieme a te la struttura che ti fa respirare. Due giorni dal vivo in cui lavori sul tuo business insieme ad altre imprenditrici e torni a casa con il piano del tuo 2027 già in mano."
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 4. Il problema */

const PROBLEM_SLIDES = [
  { src: carlottaPresenting, line: "Hai le clienti." },
  { src: carlottaTalking, line: "Fai contenuti." },
  { src: carlottaLooking2, line: "Il fatturato cresce." },
  { src: sharonSpeaking, line: "E poi?" },
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
          <div className="absolute inset-0 bg-black/45" style={{ opacity: 1 - split * 0.6 }} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: 1 - split }}>
            {PROBLEM_SLIDES.map((s, i) => (
              <BlurLine key={s.line} text={s.line} t={clamp(slide - i)} lowPower={lowPower} />
            ))}
          </div>
        </div>

        {desktop ? (
          <div
            className="absolute bottom-6 right-4 top-24 w-[calc(28%-28px)] overflow-hidden rounded-3xl will-change-transform"
            style={{ opacity: split, transform: `translate3d(${lerp(110, 0, split)}%, 0, 0)` }}
          >
            <img src={sharonCarlotta} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

// Dopo che le foto si sono raggruppate al centro, il racconto compare parola
// per parola, come il testo dopo le foto di MONO. Il titolo è il testo
// principale; i paragrafi sono più piccoli, con a destra una foto che cambia
// a ogni paragrafo.
const PROBLEM_PARAGRAPHS = [
  {
    text: "Magari quest'anno hai fatturato più di quanto pensavi. Ma se ti chiedo come ci sei arrivata, come lo rifai l'anno prossimo e dove vuoi arrivare negli anni dopo, la risposta non è così chiara.",
    src: carlottaLooking,
    pos: "50% 30%",
  },
  {
    text: "Io ci sono passata. Sono uscita dal forfettario senza un previsionale e ho lavorato due anni in perdita: ogni volta che arrivava una cliente facevo il conto di quanto mi restava in tasca, quasi niente. Poi un giorno di giugno ho aperto un F24 da 51 mila euro.",
    src: carlottaBw,
    pos: "50% 20%",
  },
  {
    text: "Nessuno me ne aveva parlato. Tutti insegnano a fare contenuti, offerte e ganci: le tasse, il previsionale, il team e le notti passate a decidere tutto da sola restano fuori.",
    src: livestream,
    pos: "50% 40%",
  },
];

function ProblemText() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const items = listRef.current?.children;
      if (!items) return;
      const line = window.innerHeight * 0.6;
      let next = 0;
      Array.from(items).forEach((el, i) => {
        if (el.getBoundingClientRect().top < line) next = i;
      });
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative overflow-clip bg-secondary px-6 pb-28 pt-16 md:px-12 md:pb-40 md:pt-24">
      <div className="relative mx-auto max-w-6xl">
        <WordReveal
          as="h2"
          blur={30}
          minOpacity={0}
          className="max-w-4xl font-display text-4xl leading-tight text-ink sm:text-6xl"
          text="Trovi clienti ogni mese. Sei sicura di trovarli anche fra due mesi?"
          emphasisFrom={4}
          emphasisClassName="text-primary"
        />
        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[1fr_0.8fr] md:gap-16">
          <div ref={listRef} className="space-y-10 md:space-y-[40vh] md:pb-[20vh]">
            {PROBLEM_PARAGRAPHS.map((p) => (
              <WordReveal
                key={p.text}
                blur={12}
                minOpacity={0}
                className="max-w-xl text-lg leading-relaxed text-ink/85 md:text-xl"
                text={p.text}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="sticky top-28 aspect-[4/5] w-full overflow-hidden rounded-3xl">
              {PROBLEM_PARAGRAPHS.map((p, i) => (
                <img
                  key={p.text}
                  src={p.src}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-opacity duration-700"
                  style={{ objectPosition: p.pos, opacity: i === active ? 1 : 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
    <section ref={ref} className="relative bg-secondary" style={{ height: "460vh" }}>
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
        <p>
          Mi sono rotta le palle degli eventi in cui si applaude, si fanno due foto e poi il lunedì
          non cambia niente. Li ho organizzati anch'io. So quanto costano, a chi li fa e a chi ci
          va.
        </p>
        <p>
          Questa volta si lavora. Sul palco ci sono io con il mio team, le persone che ogni giorno
          fanno funzionare la mia azienda. Ti portiamo tutto quello che c'è dietro: gli errori, i
          numeri, le notti insonni, le cose che hanno funzionato davvero. Poi ci si mette al lavoro
          sulla tua azienda, insieme ad altre imprenditrici.
        </p>
        <p className="pt-4 font-display text-3xl leading-tight text-white sm:text-5xl">
          Non esci con domande. <em className="italic text-primary">Esci con risposte.</em>
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 6. Le tre tappe */

const STEPS = [
  {
    when: "Oggi",
    title: "Entri in lista d'attesa",
    text: "Gratis. Entrare in lista non ti impegna a comprare.",
    tag: "Gratis",
    src: carlottaWallRight,
    pos: "50% 25%",
  },
  {
    when: "7 dicembre",
    title: "Aprono le vendite",
    text: "Chi è in lista d'attesa lo sa per prima e ha un prezzo riservato.",
    tag: "Prezzo riservato",
    src: carlottaPresenting,
    pos: "45% 30%",
    highlight: true,
  },
  {
    when: "Febbraio 2027",
    title: "Ambiziosa dal vivo",
    text: "100 posti in tutto.",
    tag: "100 posti",
    src: sharonCarlotta,
    pos: "50% 35%",
  },
];

function Steps() {
  return (
    <section className="bg-background px-4 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-display text-3xl leading-tight text-foreground sm:text-5xl">
          Come si arriva ad <em className="italic">Ambiziosa dal vivo</em>
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-5">
          {STEPS.map((s, i) => (
            <StepCard key={s.when} index={i} {...s} />
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <a
            href="#lista-attesa"
            onClick={scrollToWaitlist}
            className="glow-sweep relative rounded-full bg-primary px-8 py-4 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            Entra in lista d'attesa
          </a>
          <p className="text-sm text-foreground/70">Entrare in lista è gratis e non ti impegna a comprare.</p>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  when,
  title,
  text,
  tag,
  src,
  pos,
  highlight,
  index,
}: (typeof STEPS)[number] & { index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="group transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-3xl ${highlight ? "ring-4 ring-primary" : ""}`}>
        <img
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: pos }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-5 left-5 font-display text-4xl text-white sm:text-5xl">{when}</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-foreground/70">{text}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 font-condensed text-xs uppercase tracking-[0.12em] ${
            highlight ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
          }`}
        >
          {tag}
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- 7. Conto alla rovescia */

function useTimeLeft(target: number) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(target - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const ms = Math.max(0, left ?? 0);
  return [
    { v: Math.floor(ms / 86400000), l: "giorni" },
    { v: Math.floor((ms / 3600000) % 24), l: "ore" },
    { v: Math.floor((ms / 60000) % 60), l: "minuti" },
    { v: Math.floor((ms / 1000) % 60), l: "secondi" },
  ].map((c) => ({ ...c, v: left === null ? "--" : String(c.v).padStart(2, "0") }));
}

function CountdownBand() {
  const cells = useTimeLeft(SALES_OPEN);
  const { ref, progress } = useScrollProgress<HTMLElement>("pass");

  return (
    <section ref={ref} className="bg-background">
      <div className="relative h-[60vh] overflow-hidden md:h-[80vh]">
        <img
          src={carlottaPresenting}
          alt="Carlotta sul palco"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: "45% 30%", transform: `scale(${lerp(1.15, 1, progress)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <p className="absolute inset-x-0 bottom-8 px-5 text-center font-condensed text-sm uppercase tracking-[0.3em] text-white sm:bottom-12 sm:text-base">
          All'apertura delle vendite mancano
        </p>
      </div>
      <div className="grid grid-cols-2 border-b border-foreground/15 md:grid-cols-4">
        {cells.map((c, i) => (
          <div
            key={c.l}
            className={`flex flex-col items-center gap-1 px-4 py-8 md:py-12 ${i > 0 ? "md:border-l md:border-foreground/15" : ""} ${i % 2 === 1 ? "border-l border-foreground/15 md:border-l" : ""} ${i < 2 ? "border-b border-foreground/15 md:border-b-0" : ""}`}
          >
            <span className="font-condensed text-[11px] uppercase tracking-[0.25em] text-foreground/60">
              {c.l}
            </span>
            <span className="font-display text-5xl tabular-nums text-foreground sm:text-6xl lg:text-7xl">
              {c.v}
            </span>
          </div>
        ))}
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
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
            Tutti ti insegnano a trovare clienti.{" "}
            <em className="italic">Nessuno ti racconta cosa succede dopo.</em>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-foreground/80">
            <p>
              Quando le clienti arrivano e i soldi pure, il business cambia faccia. Se lo porti avanti
              senza una struttura, a un certo punto soffochi: non hai più tempo né spazio in testa per
              capire cosa vuoi davvero e dove vuoi andare.
            </p>
            <p>
              La struttura è quello che tiene in piedi il tuo business anche fra due mesi. Sapere che
              fatturato vuoi, con quali offerte e con quali contenuti, quanto paghi di tasse e chi
              lavora con te. E stare bene mentre lo fai, perché saper comunicare è il 20% del lavoro:
              il resto è gestione emotiva.
            </p>
            <p>
              Io ho imparato tutto questo da sola, perdendo tempo, soldi e un bel pezzo di libertà. Ora
              voglio costruire insieme a te un'azienda che ti assomiglia, con una vita dentro, del
              tempo libero e la voglia di divertirti ancora.
            </p>
          </div>
          <p className="mt-10 font-condensed text-4xl uppercase tracking-tight text-foreground sm:text-6xl">
            Da freelance ad azienda.
          </p>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl">
          <img src={carlottaWalking} alt="Carlotta" loading="lazy" className="absolute inset-0 size-full object-cover" />
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-3xl rounded-3xl border border-foreground/15 p-8 text-center sm:p-12">
        <span className="font-condensed text-xs uppercase tracking-[0.3em] text-foreground/60">Per chi è</span>
        <p className="mt-4 text-xl leading-relaxed text-foreground sm:text-2xl">
          È per te se hai un business avviato da almeno un anno, trovi clienti e fai contenuti, ma
          non sai se tutto questo reggerà fra due mesi. Vuoi qualcosa di più grande e non vuoi più
          costruirlo da sola.
        </p>
        <p className="mt-5 text-lg text-foreground/70">
          Se stai partendo da zero, questo evento non fa ancora per te.
        </p>
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
        <span className="font-condensed text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
          Segnati questa data
        </span>
        <h2 className="mt-4 font-condensed text-[22vw] font-semibold uppercase leading-[0.85] tracking-tight text-white sm:text-[12rem]">
          7.12
        </h2>
        <p className="mt-2 font-display text-2xl text-primary sm:text-3xl">7 dicembre, aprono le vendite.</p>
        <p className="mx-auto mt-8 max-w-xl text-lg text-white/85">
          I posti sono 100: quando finiscono, finiscono. Chi è in lista d'attesa può iscriversi per
          prima, con un prezzo riservato solo a lei. Lasciami nome ed email e ti avviso io.
        </p>
        <div
          id="lista-attesa"
          className="mx-auto mt-10 w-full max-w-md scroll-mt-28 rounded-3xl bg-card p-6 text-left sm:p-8"
          // Il link alla privacy usa text-primary (oro), poco leggibile sulla
          // card chiara: qui lo riportiamo al nero sporco.
          style={{ boxShadow: "var(--shadow-deep)", "--primary": "var(--secondary)" } as React.CSSProperties}
        >
          <SignupForm compact action={WAITLIST_ACTION} submitLabel="Entra in lista d'attesa" />
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Entrare in lista è gratis e non ti impegna a comprare.
          </p>
        </div>
        <p className="mt-10 font-display text-2xl text-white">Carlotta 🌷</p>
      </div>
    </section>
  );
}

function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById("lista-attesa");
      const formVisible = form ? form.getBoundingClientRect().top < window.innerHeight : false;
      setShow(window.scrollY > window.innerHeight * 2 && !formVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#lista-attesa"
      onClick={scrollToWaitlist}
      className="glow-sweep fixed bottom-5 left-1/2 z-40 whitespace-nowrap rounded-full bg-primary px-6 py-3 font-condensed text-sm uppercase tracking-[0.15em] text-primary-foreground shadow-xl transition-all duration-500"
      style={{
        opacity: show ? 1 : 0,
        transform: `translate(-50%, ${show ? 0 : 20}px)`,
        pointerEvents: show ? "auto" : "none",
      }}
    >
      Entra in lista d'attesa · 7 dicembre
    </a>
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
      <Steps />
      <CountdownBand />
      <PromiseSection />
      <Closing />
      <FloatingCta />
      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
