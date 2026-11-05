import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "@/components/landing/SignupForm";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroBg from "@/assets/ambiziosa-carlotta-muro-hero.webp";
import heroCutout from "@/assets/ambiziosa-carlotta-muro-cutout.webp";
import carlottaPresenting from "@/assets/carlotta-presenting.jpg";
import carlottaTalking from "@/assets/carlotta-talking.jpg";
import carlottaLooking2 from "@/assets/carlotta-looking-2.jpg";
import carlottaWalking from "@/assets/carlotta-walking.jpg";
import carlottaWall from "@/assets/ambiziosa-carlotta-muro-web.jpg";
import carlottaWallRight from "@/assets/Carlotta che guarda a destra appoggiata al muro.jpg";
import carlottaStage from "@/assets/method-bg.jpg";
import participantsSmiling from "@/assets/social-proof-1.jpg";
import participantNotes from "@/assets/social-proof-11.jpg";
import participantsRoom from "@/assets/social-proof-4.jpg";
import participantsHug from "@/assets/social-proof-7.jpg";
import participantWriting from "@/assets/social-proof-10.jpg";
import participantHandUp from "@/assets/social-proof-12.jpg";

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

// Misura di un elemento, aggiornata solo quando cambia davvero.
function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const update = () => setSize({ w: node.clientWidth, h: node.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);
  return { ref, size };
}

// Progresso (0-1) dello scroll. "sticky": dentro una sezione alta con un figlio
// sticky (0 quando la sezione tocca il bordo alto, 1 quando sta per uscire).
// "pass": un elemento normale che attraversa lo schermo (0 quando entra dal
// basso, 1 quando arriva a metà schermo).
// `coarse`: da telefono le animazioni partono a tappe e non seguono il dito, quindi
// basta aggiornare il progresso a passi: niente lavoro a ogni fotogramma.
function useScrollProgress<T extends HTMLElement>(mode: "sticky" | "pass" | "reveal" = "sticky", coarse = false) {
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
      const raw =
        mode === "sticky"
          ? clamp(-rect.top / Math.max(node.offsetHeight - vh, 1))
          : mode === "reveal"
            ? // Parte quando il testo arriva poco sotto il centro dello schermo,
              // così i blocchi si accendono uno dopo l'altro.
              clamp((vh * 0.72 - rect.top) / (vh * 0.25 + rect.height * 0.6))
            : clamp((vh - rect.top) / (vh * 0.5 + rect.height * 0.5));
      const next = coarse ? Math.round(raw * 50) / 50 : raw;
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
  }, [mode, reduced, coarse]);

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
      className={`fixed left-1/2 top-4 z-50 grid w-[92%] max-w-4xl -translate-x-1/2 grid-cols-[minmax(0,auto)_max-content_minmax(0,auto)] items-center justify-between gap-1.5 rounded-full px-3 py-2 sm:gap-3 sm:px-5 md:grid-cols-[1fr_auto_1fr] transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-lg md:bg-background/80 md:backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Bottone sempre al centro, data a sinistra e "Posti limitati · Early ticket per
          gli iscritti" a destra, visibili da subito: allo scroll compare solo lo sfondo
          con l'ombra. Da telefono, dove la colonna è stretta, resta "Early ticket". */}
      <div className="min-w-0">
        <span className="inline-block text-left font-condensed text-[11px] uppercase leading-tight tracking-[0.1em] text-foreground/80 sm:text-xs sm:tracking-[0.12em]">
          <span className="md:hidden">Vendite ufficiali:{"\u00a0"}7/12</span>
          <span className="hidden md:inline">Le vendite ufficiali aprono il{"\u00a0"}7/12</span>
        </span>
      </div>
      <a
        href="#lista-attesa"
        onClick={scrollToWaitlist}
        className="glow-sweep relative whitespace-nowrap rounded-full bg-primary px-3 py-2.5 text-center font-condensed text-xs font-semibold uppercase tracking-[0.05em] sm:tracking-[0.15em] text-background transition-transform hover:-translate-y-0.5 sm:min-w-[13rem] sm:px-10 sm:text-sm"
      >
        Entra in lista d'attesa
      </a>
      <span className="text-balance text-right font-condensed text-[11px] uppercase leading-tight tracking-[0.1em] text-foreground/80 sm:text-xs sm:tracking-[0.12em]">
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

const HERO_SHRINK_MS = 850;

function Hero() {
  const desktop = useIsDesktop();
  const { ref, progress } = useScrollProgress<HTMLElement>("sticky", !desktop);
  const lowPower = useLowPower();
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const motion = useRef<{ from: number; to: number; start: number; running: Animation[] }>({
    from: 0,
    to: 0,
    start: 0,
    running: [],
  });
  // Da telefono la riduzione non segue il dito: parte da sola dopo il primo tratto
  // di scroll e va a tempo, così la gestisce la scheda grafica e resta fluida.
  const shrunk = !desktop && progress > 0.1;
  const { ref: stageRef, size: stage } = useElementSize<HTMLDivElement>();
  const shrink = desktop ? ease(phase(progress, 0, 0.6)) : 0;
  const sides = ease(phase(progress, 0.15, 0.7));
  const titleOut = phase(progress, 0, 0.3);
  const caption = phase(progress, 0.6, 0.85);
  // La foto parte in una cornice sotto il menu e si "ritaglia" fino alla scheda
  // centrale.
  const insetX = desktop ? 33 : 6;
  const insetBottom = desktop ? 34 : 36;
  const clip = `inset(${lerp(HERO_FRAME.top, HERO_PHOTOS_TOP, shrink)}px ${lerp(HERO_FRAME.x, insetX, shrink)}% ${lerp(HERO_FRAME.bottom, insetBottom, shrink)}% ${lerp(HERO_FRAME.x, insetX, shrink)}% round 24px)`;
  const photoPosition = desktop ? "35% 5%" : "31% 5%";
  useEffect(() => {
    const m = motion.current;
    m.running.forEach((a) => a.cancel());
    m.running = [];
    if (desktop || !stage.w || !outerRef.current || !innerRef.current || !titleRef.current) return;
    // La cornice si stringe e il contenuto fa il movimento opposto: la foto resta ferma.
    const frameW = stage.w * (1 - (2 * HERO_FRAME.x) / 100);
    const frameH = stage.h * (1 - HERO_FRAME.bottom / 100) - HERO_FRAME.top;
    const at = (v: number) => {
      const left = (lerp(HERO_FRAME.x, insetX, v) / 100) * stage.w;
      const top = lerp(HERO_FRAME.top, HERO_PHOTOS_TOP, v);
      const bottom = (lerp(HERO_FRAME.bottom, insetBottom, v) / 100) * stage.h;
      const sx = (stage.w - 2 * left) / frameW;
      const sy = (stage.h - top - bottom) / frameH;
      const dx = left - (HERO_FRAME.x / 100) * stage.w;
      const dy = top - HERO_FRAME.top;
      return {
        outer: `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`,
        inner: `scale(${1 / sx}, ${1 / sy}) translate3d(${-dx}px, ${-dy + 12 * v}px, 0)`,
        title: `translate3d(0, calc(${lerp(8.93, 8.5, v)}vw + ${lerp(74, 66, v)}px - 48.5svh), 0) scale(${lerp(1, 0.95, v)})`,
      };
    };
    const now = performance.now();
    const current = lerp(m.from, m.to, ease(clamp((now - m.start) / HERO_SHRINK_MS)));
    const to = shrunk ? 1 : 0;
    const frames = Array.from({ length: 31 }, (_, i) => at(lerp(current, to, ease(i / 30))));
    const options: KeyframeAnimationOptions = { duration: HERO_SHRINK_MS, easing: "linear", fill: "forwards" };
    m.running = [
      outerRef.current.animate(frames.map((f) => ({ transform: f.outer })), options),
      innerRef.current.animate(frames.map((f) => ({ transform: f.inner })), options),
      titleRef.current.animate(frames.map((f) => ({ transform: f.title })), options),
    ];
    m.from = current;
    m.to = to;
    m.start = now;
  }, [desktop, shrunk, stage.w, stage.h, insetX, insetBottom]);
  const titleLetters = useMemo(
    () =>
      TITLE.map((letter, i) => (
        <span
          key={i}
          className="amb-letter gold-glow-letter inline-block"
          style={{
            // Salita della lettera, poi la luce che passa da sinistra a destra.
            // Da telefono la luce resta, senza l'alone che costa troppo.
            animationName: `amb-letter-up, ${lowPower ? "gold-glow-letter-lite" : "gold-glow-letter"}`,
            animationDuration: "0.9s, 5s",
            animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1), ease-in-out",
            animationIterationCount: "1, infinite",
            animationFillMode: "forwards, none",
            animationDelay: `${0.15 + i * 0.07}s, ${1.8 + i * 0.09}s`,
          }}
        >
          {letter}
        </span>
      )),
    [lowPower],
  );
  // Il titolo non sparisce: sale, si rimpicciolisce e resta in cima alla scheda,
  // dietro la testa di Carlotta, così si legge tutto (anche la B). Su computer i
  // valori sono nel sistema della foto, che a sua volta scala e si sposta. Da
  // telefono il corpo di Carlotta lo coprirebbe: sta già in cima alla foto dall'inizio.
  const titleTransform = desktop
    ? `translate3d(${-10.9 * shrink}vw, calc((4.49vw + 38px - 48.5vh) * ${shrink}), 0) scale(${lerp(1, 0.55, shrink)})`
    : `translate3d(0, calc(${lerp(8.93, 8.5, shrink)}vw + ${lerp(74, 66, shrink)}px - 48.5svh), 0) scale(${lerp(1, 0.95, shrink)})`;

  return (
    <section ref={ref} className="relative h-[200vh] bg-background md:h-[300vh]">
      <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden">
        {desktop ? <SideColumn images={[{ src: participantsHug, position: "45% 50%" }, { src: participantsSmiling, position: "62% 50%" }]} side="left" t={sides} /> : null}

        <div
          ref={outerRef}
          className={desktop ? "absolute inset-0" : "absolute overflow-hidden will-change-transform"}
          style={
            desktop
              ? { clipPath: clip, WebkitClipPath: clip }
              : {
                  top: HERO_FRAME.top,
                  left: `${HERO_FRAME.x}%`,
                  right: `${HERO_FRAME.x}%`,
                  bottom: `${HERO_FRAME.bottom}%`,
                  // La cornice si schiaccia in altezza: questo raggio dà angoli tondi anche da ridotta.
                  borderRadius: "24px / 30px",
                  transformOrigin: "0 0",
                }
          }
        >
          {/* Scende con il bordo alto del ritaglio (la testa resta in vista). Su computer
              si sposta a destra e si rimpicciolisce per tenere Carlotta al centro della scheda. */}
          <div
            ref={innerRef}
            className="absolute inset-0 will-change-transform"
            style={
              desktop
                ? {
                    top: HERO_FRAME.top,
                    left: `${HERO_FRAME.x}%`,
                    right: `${HERO_FRAME.x}%`,
                    bottom: `${HERO_FRAME.bottom}%`,
                    transformOrigin: "38% 0",
                    transform: `translate3d(${11 * shrink}vw, ${(HERO_PHOTOS_TOP - HERO_FRAME.top - 1) * shrink}px, 0) scale(${lerp(1, 0.72, shrink)})`,
                  }
                : { transformOrigin: "0 0" }
            }
          >
            <img
              src={heroBg}
              alt="Carlotta"
              className="absolute inset-0 size-full rounded-3xl object-cover"
              style={{ objectPosition: photoPosition }}
            />
            <div
              ref={titleRef}
              aria-hidden
              className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center will-change-transform"
              style={{ transform: titleTransform }}
            >
              {/* Da telefono la luce sul titolo si ferma appena si scorre: niente ridisegni durante lo scroll. */}
              <span
                className={`whitespace-nowrap font-condensed text-[21vw] font-semibold uppercase leading-[0.85] tracking-tight md:text-[19vw] text-primary ${
                  lowPower && progress > 0.02 ? "amb-title-still" : ""
                }`}
              >
                {titleLetters}
              </span>
            </div>
            <img
              src={heroCutout}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 size-full object-cover"
              style={{ objectPosition: photoPosition }}
            />
            {/* Davanti allo scontorno: una copia invisibile del titolo dà la misura,
                così l'etichetta parte esattamente dalla A di AMBIZIOSA. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-center"
              style={{
                opacity: desktop ? 1 - titleOut : shrunk ? 0 : 1,
                transition: desktop ? undefined : "opacity 0.3s ease",
                transform: desktop
                  ? `translate3d(0, ${-titleOut * 200}px, 0)`
                  : "translate3d(0, calc(8.93vw + 74px - 48.5svh), 0)",
              }}
            >
              <span className="relative whitespace-nowrap font-condensed text-[21vw] font-semibold uppercase leading-[0.85] tracking-tight md:text-[19vw]">
                <span className="invisible">AMBIZIOSA</span>
                <span className="absolute bottom-full left-[0.06em] mb-1 whitespace-nowrap font-condensed text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-secondary sm:mb-3 sm:text-sm md:left-auto md:right-[0.06em] md:tracking-[0.3em]"
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
            opacity: desktop ? caption : shrunk ? 1 : 0,
            transform: desktop ? `translate3d(0, ${(1 - caption) * 30}px, 0)` : `translate3d(0, ${shrunk ? 0 : 30}px, 0)`,
            transition: desktop ? undefined : "opacity 0.6s ease 0.35s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s",
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
  const desktop = useIsDesktop();
  const { ref, progress } = useScrollProgress<HTMLDivElement>("sticky", !desktop);
  const [videoStarted, setVideoStarted] = useState(false);
  // Una tappa in più dopo i titoli: l'ultima frase sparisce e arriva il video.
  const step = 1 / (FLIP_LINES.length + 1);
  // Da telefono ogni frase cambia a tempo appena si supera la sua tappa.
  const active = Math.floor(progress / step);
  const video = desktop
    ? phase(progress, FLIP_LINES.length * step - 0.02, FLIP_LINES.length * step + 0.12)
    : active >= FLIP_LINES.length
      ? 1
      : 0;

  return (
    <div ref={ref} className="relative" style={{ height: desktop ? "420vh" : "320vh" }}>
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
              const rot = desktop
                ? exit > 0
                  ? lerp(0, 90, exit)
                  : first
                    ? 0
                    : lerp(-90, 0, enter)
                : i < active
                  ? 90
                  : i > active
                    ? -90
                    : 0;
              const opacity = desktop ? (exit > 0 ? 1 - exit : first ? 1 : enter) : i === active ? 1 : 0;
              return (
                <h2
                  key={line.key}
                  className="absolute inset-0 flex items-center justify-center text-center font-display font-semibold leading-tight tracking-tight text-foreground"
                  style={{
                    transform: `rotateX(${rot}deg)`,
                    opacity,
                    visibility: desktop && opacity <= 0.001 ? "hidden" : "visible",
                    willChange: "transform, opacity",
                    transition: desktop ? undefined : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
                    backfaceVisibility: "hidden",
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
            transition: desktop ? undefined : "opacity 0.5s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
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

/* ---------------------------------------------------------------- Riprova sociale */

// Tutte le foto delle partecipanti, divise su due file che scorrono in versi opposti.
const PARTICIPANT_PHOTOS = Object.entries(
  import.meta.glob<string>("/src/assets/social-proof-*.jpg", { eager: true, import: "default" }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const PROOF_STEP_MOBILE = 276; // larghezza della foto + spazio, in pixel

function ProofRow({ photos, direction }: { photos: string[]; direction: "left" | "right" }) {
  const desktop = useIsDesktop();
  const rowRef = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(false);
  // Fuori dallo schermo lo slider si ferma: non pesa sul resto della pagina.
  useEffect(() => {
    if (!rowRef.current) return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(!!entry?.isIntersecting), { rootMargin: "30% 0px" });
    io.observe(rowRef.current);
    return () => io.disconnect();
  }, []);
  const playState = onScreen ? "running" : "paused";

  return (
    <div ref={rowRef} className="overflow-hidden">
      {desktop ? (
        /* Le foto sono ripetute due volte: a metà corsa il giro riparte senza stacchi. */
        <div
          className={`flex w-max ${direction === "left" ? "animate-marquee-rtl" : "animate-marquee-ltr"}`}
          style={{ animationDuration: "70s", animationPlayState: playState }}
        >
          {[...photos, ...photos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={i < photos.length ? "Partecipanti all'edizione precedente di Ambiziosa" : ""}
              aria-hidden={i >= photos.length}
              loading="lazy"
              className="mr-3 h-44 w-auto max-w-none rounded-2xl object-cover sm:mr-4 md:h-72"
            />
          ))}
        </div>
      ) : (
        /* Da telefono su iPhone una striscia unica così lunga può non essere disegnata
           affatto: ogni foto si muove per conto suo, allineata alle altre. */
        <div className="flex w-max">
          {[...photos, ...photos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={i < photos.length ? "Partecipanti all'edizione precedente di Ambiziosa" : ""}
              aria-hidden={i >= photos.length}
              decoding="async"
              className="proof-item mr-3 h-44 w-[264px] max-w-none rounded-2xl object-cover"
              style={
                {
                  "--proof-row": `${photos.length * PROOF_STEP_MOBILE}px`,
                  animationDuration: "70s",
                  animationDirection: direction === "left" ? "normal" : "reverse",
                  animationPlayState: playState,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SocialProof() {
  return (
    <section className="overflow-hidden bg-background pb-24 md:pb-32">
      <Appear>
        <h2 className="mx-auto max-w-4xl px-5 text-center font-display text-4xl leading-tight text-foreground sm:text-5xl">
          L'edizione precedente di <span className="text-[var(--gold-text)]">Ambiziosa</span> è stata pazzesca.
          <br />
          Sarai con me quest'anno?
        </h2>
      </Appear>
      <div className="mt-10 space-y-3 sm:space-y-4 md:mt-14">
        <ProofRow photos={PARTICIPANT_PHOTOS.slice(0, 8)} direction="left" />
        <ProofRow photos={PARTICIPANT_PHOTOS.slice(8)} direction="right" />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 4. Il problema */

const PROBLEM_SLIDES: { src: string; line: string; position?: string; mobilePosition?: string; shift?: number }[] = [
  { src: carlottaPresenting, line: "Tutti si concentrano sui contenuti, ma quelli sono solo il primo step." },
  { src: carlottaTalking, line: "Ma da soli non tengono in piedi un'azienda." },
  { src: carlottaLooking2, line: "E non ti garantiscono un fatturato costante." },
  // Carlotta è a sinistra nella foto: su computer scorre a destra mentre la foto
  // si stringe, così nella scheda centrale resta al centro.
  { src: carlottaStage, line: "In Ambiziosa 2027 lavoriamo su tutta la struttura.", position: "0% 30%", mobilePosition: "11.5% 30%", shift: 24 },
];

function BlurLine({ text, t, lowPower, on }: { text: string; t: number; lowPower: boolean; on?: boolean }) {
  // t: 0 nascosta, 0.5 a fuoco, 1 di nuovo nascosta
  const words = text.split(" ");
  // Da telefono la frase intera entra ed esce a tempo.
  if (on !== undefined) {
    return (
      <h2
        className="absolute max-w-4xl px-6 text-center font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
        style={{
          opacity: on ? 1 : 0,
          transform: `translate3d(0, ${on ? 0 : 14}px, 0)`,
          transition: "opacity 0.45s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform, opacity",
        }}
      >
        {text}
      </h2>
    );
  }
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
              filter: lowPower ? undefined : `blur(${lerp(30, 0, visible)}px)`,
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
  const desktop = useIsDesktop();
  const { ref, progress } = useScrollProgress<HTMLElement>("sticky", !desktop);
  const lowPower = useLowPower();
  const slidesEnd = 0.72;
  const slide = phase(progress, 0, slidesEnd) * PROBLEM_SLIDES.length;
  // Da telefono foto e frasi cambiano a tempo, senza seguire il dito.
  const current = Math.min(Math.floor(slide), PROBLEM_SLIDES.length - 1);
  const split = desktop ? ease(phase(progress, slidesEnd + 0.04, 1)) : progress > slidesEnd + 0.08 ? 1 : 0;
  const mobileFade = "opacity 0.6s ease";
  // Come nell'apertura: la foto centrale si ritaglia, le laterali entrano con transform.
  const top = (desktop ? 96 : 80) * split;
  const side = desktop ? `${28 * split}%` : `${16 * split}px`;
  const clip = `inset(${top}px ${side} ${24 * split}px ${side} round ${24 * split}px)`;

  return (
    <section ref={ref} className="relative bg-secondary" style={{ height: desktop ? "520vh" : "400vh" }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        {desktop ? (
          <div
            className="absolute bottom-6 left-4 top-24 w-[calc(28%-28px)] overflow-hidden rounded-3xl will-change-transform"
            style={{ opacity: split, transform: `translate3d(${lerp(-110, 0, split)}%, 0, 0)` }}
          >
            <img src={participantWriting} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
        ) : null}

        <div
          className="absolute inset-0"
          style={
            desktop
              ? split > 0
                ? { clipPath: clip, WebkitClipPath: clip }
                : undefined
              : {
                  clipPath: clip,
                  WebkitClipPath: clip,
                  transition: "clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1), -webkit-clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                }
          }
        >
          {PROBLEM_SLIDES.map((s, i) => (
            <img
              key={s.line}
              src={s.src}
              alt=""
              loading={desktop ? "lazy" : "eager"}
              decoding="async"
              className="absolute inset-0 size-full object-cover"
              style={
                desktop
                  ? {
                      // Ogni foto entra a cavallo del cambio di titolo, in poco scroll.
                      opacity: i === 0 ? 1 : clamp((slide - i + 0.1) / 0.2),
                      visibility: i === 0 || slide - i + 0.1 > 0 ? "visible" : "hidden",
                      objectPosition: s.position,
                      transform: `translate3d(${(s.shift ?? 0) * split}vw, 0, 0) scale(${lerp(1.08, 1, clamp(slide - i + 0.1))})`,
                    }
                  : {
                      opacity: i <= current ? 1 : 0,
                      objectPosition: s.mobilePosition,
                      transition: mobileFade,
                      willChange: "opacity",
                    }
              }
            />
          ))}
          <div
            className="absolute inset-0 bg-black/45"
            style={{ opacity: 1 - split * 0.3, transition: desktop ? undefined : mobileFade }}
          />
          {/* L'ultima frase non sparisce: resta al centro e si rimpicciolisce
              insieme alla foto quando arrivano le foto laterali. */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `scale(${lerp(1, desktop ? 0.62 : 0.9, split)})`,
              transition: desktop ? undefined : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {PROBLEM_SLIDES.map((s, i) => {
              const t = clamp(slide - i);
              const last = i === PROBLEM_SLIDES.length - 1;
              return (
                <BlurLine
                  key={s.line}
                  text={s.line}
                  t={last ? Math.min(t, 0.5) : t}
                  lowPower={lowPower}
                  {...(desktop ? {} : { on: i === current })}
                />
              );
            })}
          </div>
        </div>

        {desktop ? (
          <div
            className="absolute bottom-6 right-4 top-24 w-[calc(28%-28px)] overflow-hidden rounded-3xl will-change-transform"
            style={{ opacity: split, transform: `translate3d(${lerp(110, 0, split)}%, 0, 0)` }}
          >
            <img src={participantHandUp} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" style={{ objectPosition: "36% 50%" }} />
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
  { src: carlottaWall, line: "Per questo ho deciso di fare un evento totalmente nuovo." },
  { src: carlottaTalking, line: "Ti mostro tutti i numeri e la struttura della mia azienda." },
  { src: carlottaLooking2, line: "Poi lavoriamo sulla tua struttura insieme al mio team." },
];

function ZoomStack() {
  const desktop = useIsDesktop();
  const { ref, progress } = useScrollProgress<HTMLElement>("sticky", !desktop);
  const per = 1 / STACK.length;
  // Da telefono ogni card sale a tempo appena si supera la sua tappa.
  const entered = (i: number) => i === 0 || progress > i * per - 0.04;

  return (
    <section ref={ref} className="relative -mt-px bg-secondary" style={{ height: desktop ? "345vh" : "280vh" }}>
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden px-4">
        <div className="relative h-[72vh] w-full max-w-5xl md:h-[80vh]">
          {STACK.map((card, i) => {
            const t = ease(phase(progress, i * per, i * per + per * 0.85));
            const covered = i < STACK.length - 1 ? ease(phase(progress, (i + 1) * per, (i + 1) * per + per * 0.85)) : 0;
            const isIn = entered(i);
            const isCovered = i < STACK.length - 1 && entered(i + 1);
            return (
              <div
                key={card.line}
                className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl"
                style={{
                  zIndex: i,
                  willChange: "transform, opacity",
                  ...(desktop
                    ? {
                        visibility: i === 0 || t > 0 ? ("visible" as const) : ("hidden" as const),
                        opacity: i === 0 ? 1 : t,
                        transform:
                          i === 0
                            ? `scale(${lerp(1, 0.92, covered)})`
                            : `translate3d(0, ${lerp(100, 0, t)}%, 0) scale(${lerp(0.8, 1, t) - covered * 0.08})`,
                      }
                    : {
                        opacity: isIn ? 1 : 0,
                        transform: isIn
                          ? `translate3d(0, 0, 0) scale(${isCovered ? 0.92 : 1})`
                          : "translate3d(0, 100%, 0) scale(0.8)",
                        transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease",
                      }),
                }}
              >
                <img src={card.src} alt="" loading={desktop ? "lazy" : "eager"} decoding="async" className="absolute inset-0 size-full object-cover" />
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
          Mi sono rotta le palle degli eventi in cui si applaude tanto, si scrivono appunti, ma poi
          quando torni a casa{" "}
          <strong className="font-semibold text-white">hai ancora più dubbi di prima</strong> e ti
          chiedi se ne sia valsa la pena.
        </p></Appear>
        <Appear><p>
          <strong className="font-semibold text-white">Questa volta si lavora sul serio.</strong> Sul palco ci
          sono io con il mio team, le persone che ogni giorno fanno funzionare la mia azienda. Ti
          portiamo tutto quello che c'è dietro: gli errori, i numeri, le notti insonni, le cose che
          hanno funzionato davvero. Poi, nella seconda parte dell'evento, ci mettiamo al lavoro{" "}
          <strong className="font-semibold text-white">sulla tua azienda</strong>, insieme ad altre
          imprenditrici.
        </p></Appear>
        <Appear><p className="pt-4 font-display text-3xl leading-tight text-white sm:text-5xl">
          Hai presente quella domanda che ti gira in testa legata alla tua azienda?{" "}
          <em className="italic text-primary">Ecco, durante l'evento ti do la risposta una volta per tutte.</em>
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
            Le vendite ufficiali aprono il 7 dicembre, ma per chi è in lista d'attesa c'è l'early ticket dal 6 dicembre
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Iscriviti alla lista d'attesa di <span className="text-[var(--gold-text)]">Ambiziosa</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Il 7 dicembre aprono le vendite ufficiali e i posti sono solo 100. Chi è in lista d'attesa
              però può acquistare il proprio biglietto{" "}
              <strong className="font-semibold text-foreground">
                già 24 ore prima, quindi il 6 dicembre, a prezzo esclusivo
              </strong>
              : ti avviso io non appena le vendite si aprono, così puoi prenotare il tuo posto prima che
              i posti finiscano.
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
          <SignupForm action={WAITLIST_ACTION} submitLabel="Entra in lista d'attesa" phoneRequired phonePlaceholder="Numero di telefono" />
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
            Tutti si concentrano solo sui contenuti.{" "}
            <em className="italic">Nessuno ti racconta come si struttura veramente un'azienda.</em>
          </h2></Appear>
          <div className="mt-8 space-y-5 text-lg text-foreground/80">
            <Appear><p>
              Quando le clienti arrivano e i soldi pure, il business cambia faccia. Se ti concentri solo
              sui contenuti ma non sulla struttura della tua azienda, <strong className="font-semibold text-foreground">a un certo punto soffochi</strong>: non hai più tempo né spazio in testa per
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
              <strong className="font-semibold text-foreground">un'azienda che ti renda veramente libera</strong>,
              con una vita dentro, del tempo libero e la voglia di divertirti ancora.
            </p></Appear>
          </div>
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
        <h2 className="mt-4 font-display text-2xl leading-tight text-primary sm:text-4xl">
          6 dicembre, aprono le vendite per gli iscritti in lista d'attesa.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-white/85">
          <strong className="font-semibold text-white">I posti sono 100: quando finiscono, finiscono.</strong>{" "}
          Iscrivendoti in lista d'attesa puoi prenotare il tuo posto all'evento prima di tutti gli
          altri con un prezzo riservato solo per te.
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
          <SignupForm action={WAITLIST_ACTION} submitLabel="Entra in lista d'attesa" phoneRequired phonePlaceholder="Numero di telefono" />
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
    a: "A febbraio 2027, dal vivo, in 2 giorni. Ti comunicherò la data esatta e il luogo non appena apriremo le vendite dell'evento.",
  },
  {
    q: "Quando aprono le vendite?",
    a: "Il 7 dicembre aprono le vendite ufficiali per chi non è in lista d'attesa. Chi è in lista d'attesa può iscriversi già dal giorno prima a prezzo esclusivo.",
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
    a: "100. Ho voluto creare un evento riservato per poter lavorare bene con ogni imprenditrice che parteciperà ad Ambiziosa.",
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
      <SocialProof />
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
