import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Highlight } from "@/components/landing/Highlight";
import { SignupForm } from "@/components/landing/SignupForm";
import { SiteFooter } from "@/components/landing/SiteFooter";
import carlottaPresenting from "@/assets/carlotta-presenting.jpg";
import carlottaTalking from "@/assets/carlotta-talking.jpg";
import carlottaHug from "@/assets/carlotta-hug.jpg";
import sharonCarlotta from "@/assets/Sharon e Carlotta che ridono.jpg";
import sharonSpeaking from "@/assets/sharon-speaking.jpg";
import carlottaWalking from "@/assets/carlotta-walking.jpg";

// TODO Andrea: sostituire con il form Systeme della lista d'attesa dell'evento
// dal vivo (oggi punta al form standard di Rule The Rules, che va cambiato
// prima di pubblicare la pagina).
const WAITLIST_ACTION = "https://systeme.io/embedded/44087792/subscription";

export const Route = createFileRoute("/lista-attesa-ambiziosa")({
  head: () => ({
    meta: [
      { title: "Lista d'attesa — Ambiziosa dal vivo" },
      {
        name: "description",
        content:
          "Il prossimo evento dal vivo di Ambiziosa: si lavora sulla tua azienda, insieme ad altre imprenditrici. Le iscrizioni aprono il 7 dicembre.",
      },
    ],
  }),
  component: ListaAttesaAmbiziosa,
});

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Avanzamento (0-1) dello scroll dentro la sezione alta, che resta ferma
// mentre si scorre: la foto centrale si rimpicciolisce e le colonne laterali
// entrano dai bordi.
function useStickyProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const distance = node.offsetHeight - window.innerHeight;
      setProgress(clamp(-rect.top / Math.max(distance, 1)));
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

  return { ref, progress };
}

function SidePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl sm:rounded-3xl">
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
    </div>
  );
}

function Hero() {
  const { ref, progress } = useStickyProgress<HTMLElement>();
  const shrink = ease(clamp(progress / 0.7));
  const sides = ease(clamp((progress - 0.15) / 0.6));
  const titleOut = clamp(progress / 0.25);
  const headline = clamp((progress - 0.55) / 0.3);

  return (
    <section ref={ref} className="relative h-[260vh] bg-background">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          className="flex h-full w-full items-start justify-center gap-2 sm:gap-4"
          style={{ padding: `${lerp(0, 16, shrink)}px ${lerp(0, 16, shrink)}px 0` }}
        >
          <div
            className="flex shrink-0 flex-col gap-2 sm:gap-4"
            style={{
              width: `${lerp(0, 22, shrink)}%`,
              height: "62%",
              transform: `translateX(${lerp(-120, 0, sides)}%)`,
              opacity: sides,
            }}
          >
            <SidePhoto src={carlottaHug} alt="Carlotta abbraccia una partecipante all'evento" />
            <SidePhoto src={sharonSpeaking} alt="Sharon parla sul palco" />
          </div>

          <div
            className="relative shrink-0 overflow-hidden"
            style={{
              width: `${lerp(100, 52, shrink)}%`,
              height: `${lerp(100, 62, shrink)}%`,
              borderRadius: `${lerp(0, 28, shrink)}px`,
            }}
          >
            <img
              src={carlottaPresenting}
              alt="Carlotta sul palco durante un evento dal vivo"
              className="absolute inset-0 size-full object-cover"
              style={{ objectPosition: "45% 30%" }}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end"
              style={{
                opacity: 1 - titleOut,
                backgroundImage:
                  "linear-gradient(to top, color-mix(in oklab, var(--secondary) 70%, transparent), transparent 55%)",
              }}
            >
              <span className="px-5 pb-1 font-condensed text-xs uppercase tracking-[0.3em] text-white/85 sm:px-8 sm:text-sm">
                Il prossimo evento dal vivo
              </span>
              <h1
                className="px-3 pb-6 text-[17vw] font-semibold uppercase leading-[0.85] tracking-tight text-white sm:px-6 sm:text-[13vw]"
                style={{ transform: `translateY(${titleOut * 30}%)` }}
              >
                Ambiziosa
              </h1>
            </div>
          </div>

          <div
            className="flex shrink-0 flex-col gap-2 sm:gap-4"
            style={{
              width: `${lerp(0, 22, shrink)}%`,
              height: "62%",
              transform: `translateX(${lerp(120, 0, sides)}%)`,
              opacity: sides,
            }}
          >
            <SidePhoto src={sharonCarlotta} alt="Sharon e Carlotta ridono insieme" />
            <SidePhoto src={carlottaTalking} alt="Carlotta parla al pubblico" />
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 flex h-[38%] flex-col items-center justify-center px-5 text-center"
          style={{ opacity: headline, transform: `translateY(${(1 - headline) * 24}px)` }}
        >
          <span className="font-condensed text-xs uppercase tracking-[0.25em] text-foreground/70 sm:text-sm">
            Ambiziosa dal vivo
          </span>
          <p className="mt-3 max-w-3xl font-display text-2xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Voglio cambiare il modo in cui si fa formazione dal vivo.
          </p>
        </div>
      </div>
    </section>
  );
}

function WaitlistForm({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-5 text-left sm:p-7"
      // Il link alla privacy usa text-primary (verde lime), illeggibile sulla
      // card chiara: qui lo riportiamo al Mulberry Wood.
      style={
        {
          boxShadow: "var(--shadow-deep)",
          "--primary": "var(--secondary)",
        } as React.CSSProperties
      }
    >
      <SignupForm compact action={WAITLIST_ACTION} submitLabel="Entra in lista d'attesa" />
      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        Iscriverti è gratis e non ti impegna a comprare. Le iscrizioni aprono il{" "}
        <strong className="font-semibold text-foreground">7 dicembre</strong>: chi è in lista
        d'attesa lo sa per prima e ha un prezzo riservato.
      </p>
    </div>
  );
}

function ListaAttesaAmbiziosa() {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      <section className="px-5 pb-20 pt-6 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto max-w-2xl text-lg text-foreground/80 sm:text-xl">
            Un evento in cui lavori sulla tua azienda insieme ad altre imprenditrici e torni a casa
            con il piano già in mano.
          </p>
          <div className="mt-10">
            <WaitlistForm id="lista-attesa" />
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-ink sm:text-5xl">
            Ti è mai capitato di tornare da un evento con{" "}
            <Highlight dark>la testa piena e le mani vuote?</Highlight>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-ink-muted">
            <p>
              Hai preso il treno, magari anche l'hotel. Ti sei seduta in terza fila con il quaderno
              nuovo e hai scritto tutto: le frasi dal palco, le slide, le idee che ti venivano
              mentre gli speaker parlavano.
            </p>
            <p>
              Poi sei tornata a casa. Il lunedì sono arrivate le clienti, le mail, i contenuti da
              pubblicare. Quel quaderno è finito in un cassetto, insieme a tutte le cose che "prima
              o poi faccio".
            </p>
            <p>
              Succede a quasi tutte, perché la maggior parte degli eventi dal vivo funziona così: tu
              stai seduta, qualcuno parla dal palco e tu ti segni dei compiti che dovrai fare da
              sola, quando avrai tempo. Il tempo poi non arriva mai.
            </p>
          </div>
          <p className="mt-8 text-xl font-semibold text-ink sm:text-2xl">
            Ti sei portata a casa mille domande e nessuna risposta.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-5xl">
              Per questo il prossimo evento di Ambiziosa{" "}
              <Highlight>lo faccio al contrario.</Highlight>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-foreground/80">
              <p>
                Mi sono rotta le palle degli eventi in cui si applaude, si fanno due foto e poi il
                lunedì non cambia niente. Li ho organizzati anch'io. So quanto costano, a chi li fa e
                a chi ci va.
              </p>
              <p>
                Questa volta si lavora. Sul palco ci sono io con il mio team, le persone che ogni
                giorno fanno funzionare la mia azienda. Ti portiamo tutto quello che c'è dietro: gli
                errori, i numeri, le notti insonni, le cose che hanno funzionato davvero. Poi ci si
                mette al lavoro sulla tua azienda, insieme ad altre imprenditrici.
              </p>
            </div>
            <p className="mt-8 text-xl font-semibold sm:text-2xl">
              Non esci con domande. Esci con risposte.
            </p>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl">
            <img
              src={carlottaWalking}
              alt="Carlotta"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-ink sm:text-5xl">
            Tutti ti insegnano a trovare clienti.{" "}
            <Highlight dark>Nessuno ti racconta cosa succede dopo.</Highlight>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-ink-muted">
            <p>
              Quando le clienti arrivano e i soldi pure, il business cambia faccia. Se fai contenuti
              e gestisci clienti senza una struttura, a un certo punto soffochi: non hai più tempo né
              spazio in testa per capire cosa vuoi davvero e dove vuoi andare.
            </p>
            <p>
              Io ci sono passata. Ero una freelance e mi sono ritrovata, quasi per sbaglio, a dover
              aprire una società. Ho perso tempo, soldi e un bel pezzo di libertà per imparare a
              diventare un'azienda senza perdere me stessa.
            </p>
            <p>
              Al prossimo evento ti porto il passaggio fatto bene: un'azienda che ti assomiglia, con
              una vita dentro, del tempo libero e la voglia di divertirti ancora.
            </p>
          </div>
          <p className="mt-10 font-display text-4xl text-ink sm:text-6xl">
            Da freelance ad azienda.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-condensed text-xs uppercase tracking-[0.25em] text-foreground/70 sm:text-sm">
            Per chi è
          </span>
          <p className="mt-4 text-xl leading-relaxed sm:text-2xl">
            È per te se hai un business avviato da almeno un anno e hai già delle clienti, ma quello
            che hai costruito ormai ti sta stretto. Vuoi qualcosa di più grande e non sai ancora
            come starci dentro.
          </p>
          <p className="mt-5 text-lg text-foreground/70">
            Se stai partendo da zero, questo evento non fa ancora per te.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 pt-4 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-6xl">
            Segnati questa data:{" "}
            <span className="whitespace-nowrap">
              <Highlight>7 dicembre.</Highlight>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
            Il 7 dicembre aprono le iscrizioni. I posti sono 100: quando finiscono, finiscono.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-lg text-foreground/80">
            Chi è in lista d'attesa può iscriversi per prima, con un prezzo riservato solo a lei.
            Lasciami nome ed email e ti avviso io.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
          <p className="mt-10 font-display text-2xl">Carlotta 🌷</p>
        </div>
      </section>

      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
