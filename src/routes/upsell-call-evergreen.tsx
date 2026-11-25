import { createFileRoute } from "@tanstack/react-router";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import sharonSpeakingImg from "@/assets/sharon-speaking.jpg";
import carlottaPresentingImg from "@/assets/carlotta-presenting.jpg";
import shot1 from "@/assets/screenshot 1.jpg";
import shot2 from "@/assets/screenshot 2.png";
import shot3 from "@/assets/screenshot 3.png";
import shot4 from "@/assets/screenshot 4.jpg";
import shot5 from "@/assets/screenshot 5.jpg";
import shot6 from "@/assets/screenshot 6.png";
import shot7 from "@/assets/screenshot 7.png";
import shot9 from "@/assets/screenshot 9.jpg";
import shot10 from "@/assets/screenshot 10.png";
import shot12 from "@/assets/screenshot 12.png";
import shot13 from "@/assets/screenshot 13.png";
import shot15 from "@/assets/screenshot 15.png";
import shot16 from "@/assets/screenshot 16.png";
import shot18 from "@/assets/screenshot 18.png";
import shot19 from "@/assets/screenshot 19.png";
import shot116 from "@/assets/screenshot 116.png";
import shot117 from "@/assets/screenshot 117.png";

// Upsell della Call di Implementazione nel funnel evergreen di Rule the Rules (25/11/2026).
// Copy verificato: clienti/carlotta-sgarra/pagine/rule-the-rules/upsell-call-evergreen/copy-finale-upsell-call-evergreen.md
// Va incorporata nel passaggio Systeme rules.carlottasgarra.it/upsell-call-implementazione-e284078d.
export const Route = createFileRoute("/upsell-call-evergreen")({
  head: () => ({
    meta: [
      { title: "Call di implementazione 1:1 | Rule the Rules" },
      {
        name: "description",
        content:
          "Applica subito le 3 masterclass di Rule the Rules al tuo profilo, con Carlotta e Sharon in una call 1:1.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UpsellCallEvergreen,
});

const CALL_PRICE = 247;
const CHECKOUT_HREF = "https://rules.carlottasgarra.it/checkout-call-implementazione-4e80e584";
const DECLINE_HREF = "https://rules.carlottasgarra.it/grazie-iscrizione-standard-af4177f4";
// Video della call: da aggiungere quando Carlotta lo registra senza riferimenti all'evento di ottobre.
const VIMEO_ID: string | null = null;

const DETAILS = ["Call 1:1 su Zoom", "Circa un'ora", "Con me e Sharon", "Registrata"];

const GUIDES = [
  {
    name: "Con me",
    d: "Lavoriamo su identità e posizionamento: chi sei, cosa vuoi rappresentare e come comunicarlo senza copiare nessuno.",
    photo: carlottaPresentingImg,
  },
  {
    name: "Con Sharon",
    d: "Sharon lavora con te su piano editoriale, contenuti, editing e template: la parte operativa che trasforma la tua identità in contenuti da pubblicare. È l'esperta di contenuti del mio team e prima ancora è stata mia cliente.",
    photo: sharonSpeakingImg,
  },
];

const ROW_A = [shot1, shot3, shot4, shot7, shot9, shot12, shot15, shot18, shot116];
const ROW_B = [shot2, shot5, shot6, shot10, shot13, shot16, shot19, shot117];

function Details() {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-2">
      {DETAILS.map((d) => (
        <span
          key={d}
          className="rounded-full border border-secondary/30 px-3 py-1 font-condensed text-[11px] uppercase tracking-[0.12em] text-secondary sm:text-xs"
        >
          {d}
        </span>
      ))}
    </div>
  );
}

function BuyButton() {
  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <CtaButton
        href={CHECKOUT_HREF}
        target="_top"
        label={`Sì, voglio la call di implementazione a ${CALL_PRICE} €`}
        sub="Solo su questa pagina"
      />
      <p className="max-w-md text-center text-xs italic text-foreground/70 sm:text-sm">
        {CALL_PRICE} € scalati se poi entri nel mio percorso di affiancamento
      </p>
    </div>
  );
}

function ShotRow({ shots, dir }: { shots: string[]; dir: "ltr" | "rtl" }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center gap-4 hover:[animation-play-state:paused] ${
          dir === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl"
        }`}
        style={{ animationDuration: "90s" }}
      >
        {[...shots, ...shots].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i < shots.length ? "Messaggio di una cliente di Carlotta" : ""}
            aria-hidden={i >= shots.length || undefined}
            loading="lazy"
            className="h-44 w-auto shrink-0 rounded-xl bg-white object-contain shadow-[0_20px_45px_-25px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:h-56"
          />
        ))}
      </div>
    </div>
  );
}

function UpsellCallEvergreen() {
  return (
    <div className="bg-background">
      {/* 1. Conferma dell'acquisto */}
      <div className="bg-secondary px-4 py-2.5 text-center text-white">
        <p className="text-xs sm:text-sm">
          <span className="mr-2 font-condensed uppercase tracking-[0.16em] text-primary">
            Acquisto completato
          </span>
          Le 3 masterclass di Rule the Rules sono tue, a vita.
        </p>
      </div>

      {/* 2-5. Badge, titolo, (video), offerta */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span
              className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
              style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Offerta esclusiva · Solo su questa pagina
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl">
              Vuoi applicare subito le 3 masterclass al tuo profilo,{" "}
              <Highlight>con me e Sharon in una call 1:1?</Highlight>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Le masterclass le guardi al tuo ritmo. Se vuoi metterle in pratica adesso e portare nei
              DM le clienti giuste, ho aperto degli slot con me e Sharon: vanno via velocemente e non
              sono sempre disponibili.
            </p>
          </Reveal>

          {VIMEO_ID ? (
            <Reveal delay={80}>
              <div className="mx-auto mt-8 aspect-video max-w-3xl overflow-hidden rounded-2xl">
                <iframe
                  src={`https://player.vimeo.com/video/${VIMEO_ID}`}
                  title="Guarda come funziona la call di implementazione"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={100}>
            <div
              className="mx-auto mt-8 max-w-xl rounded-2xl p-6 text-center"
              style={{ backgroundColor: "var(--secondary)", border: "2px solid var(--primary)" }}
            >
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                Slot limitati
              </p>
              <p className="mt-2 font-condensed text-lg font-bold uppercase tracking-[0.08em] text-white">
                Gli slot con me e Sharon sono pochi.
              </p>
              <p className="mt-2 text-sm text-white/85">Se vuoi il tuo, ti consiglio di prenderlo adesso.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              La call di implementazione 1:1 con me e Sharon costa{" "}
              <strong className="font-semibold text-foreground">{CALL_PRICE} €</strong>. Quanto
              costerebbe una consulenza con me?{" "}
              <strong className="font-semibold text-foreground">500 € + IVA</strong>. Qui paghi meno
              della metà e hai{" "}
              <strong className="font-semibold text-foreground">due professioniste sul tuo caso.</strong>
            </p>
            <Details />
            <BuyButton />
          </Reveal>
        </div>
      </section>

      {/* 6. Corpo persuasivo */}
      <section className="bg-background px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="surface-cream px-6 py-12 sm:px-12 sm:py-14" style={{ borderRadius: "1.75rem" }}>
            <h2 className="text-center text-2xl sm:text-3xl">
              Le masterclass ti danno il metodo. <Highlight>La call lo porta sul tuo profilo.</Highlight>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                Nelle 3 masterclass costruisci la tua identità, licenzi le regole che non ti
                somigliano e imposti il tuo piano editoriale. Il punto è che, appena chiudi il
                workbook, arriva quasi sempre la stessa domanda:
              </p>
              <p className="text-center text-lg font-semibold text-foreground">
                "Sì, ma nel mio caso come funziona?"
              </p>
              <p>Quando ho chiesto alle professioniste cosa le avesse frenate finora, mi hanno risposto così:</p>
              <ul className="space-y-2 border-l-2 border-secondary/40 pl-4 italic text-foreground/80">
                <li>"Tanto metodo uguale per tutte, poco tempo sul mio caso."</li>
                <li>
                  "Tanta teoria che mi ha confuso e che senza qualcuno esperto non riuscirei a mettere
                  in pratica."
                </li>
                <li>"Ma ho paura e trovo sempre una scusa per iniziare dopo."</li>
              </ul>
              <p>
                Ecco perché ho aperto la call di implementazione:{" "}
                <strong className="font-semibold text-foreground">
                  circa un'ora su Zoom in cui io e Sharon lavoriamo sul TUO profilo, sui tuoi
                  contenuti e sul tuo settore.
                </strong>{" "}
                Così il lavoro delle masterclass non resta negli appunti del workbook (dove di solito
                resta tutto quello che studi da sola). Lo mettiamo insieme sul tuo profilo, per fare
                video senza l'ansia di essere perfetta e portare nei DM le clienti giuste. In questi
                anni ho accompagnato più di 1.500 professioniste, per cui so quanto conta lavorare sul
                singolo caso.
              </p>
            </div>
          </div>

          <h2 className="mt-14 text-center text-2xl sm:text-3xl">Cosa facciamo nella call</h2>
          <div className="mx-auto mt-6 grid gap-4 text-left sm:grid-cols-2">
            {GUIDES.map((g) => (
              <div
                key={g.name}
                className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-xl"
              >
                <img src={g.photo} alt={g.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="relative p-5">
                  <p className="font-semibold text-white">{g.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/90">{g.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-foreground/75">
            La call viene registrata, così potrai riguardarla. Dopo il pagamento riceverai un'email con
            le indicazioni per fissarla.
          </p>
        </div>
      </section>

      {/* 7. Per chi è */}
      <section className="bg-background px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl sm:text-3xl">
            Questa call fa per te se <Highlight>vuoi vedere la differenza sul tuo profilo adesso</Highlight>
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-secondary p-6 text-white">
              <ul className="space-y-3 text-sm leading-relaxed sm:text-base">
                {[
                  "vuoi applicare le masterclass al tuo caso, senza aspettare di averle finite tutte da sola;",
                  "il tuo settore ti sembra troppo particolare per un metodo uguale per tutte;",
                  "vuoi qualcuno che guardi i tuoi contenuti e ti dica cosa tenere e cosa cambiare.",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-secondary/35 p-6">
              <p className="font-semibold text-foreground">Non fa per te se</p>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                {[
                  "preferisci guardare le masterclass con calma e arrivarci da sola, restano tue a vita;",
                  "cerchi un piano editoriale già pronto da copiare.",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-secondary">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="font-semibold text-foreground">Perché gli slot sono pochi</p>
            <p className="mt-2 text-base leading-relaxed text-foreground/80">
              Io e Sharon lavoriamo su ogni caso specifico. Se aprissimo troppi slot, non riusciremmo a
              darti la stessa attenzione.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Scalo */}
      <section className="bg-background px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl">
            E se poi vuoi andare <Highlight>ancora più a fondo?</Highlight>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
            Se più avanti decidi di entrare nel{" "}
            <strong className="font-semibold text-foreground">mio percorso di affiancamento</strong>, i{" "}
            {CALL_PRICE} € di questa call ti vengono scalati. In pratica{" "}
            <strong className="font-semibold text-foreground">diventano un acconto.</strong>
          </p>
        </div>
      </section>

      {/* 9. Slider di screenshot e ripetizione dell'offerta */}
      <section className="bg-background pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
          <h2 className="text-2xl sm:text-3xl">Le professioniste che hanno lavorato con me</h2>
          <p className="mt-3 text-base text-foreground/75">
            Alcuni messaggi di chi ha fatto con me il percorso di affiancamento.
          </p>
        </div>
        <div className="relative mt-8 space-y-4">
          <ShotRow shots={ROW_A} dir="rtl" />
          <ShotRow shots={ROW_B} dir="ltr" />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24"
            style={{ backgroundImage: "linear-gradient(90deg, var(--background), transparent)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24"
            style={{ backgroundImage: "linear-gradient(270deg, var(--background), transparent)" }}
            aria-hidden
          />
        </div>

        <div className="mx-auto mt-14 max-w-3xl px-4 text-center sm:px-8">
          <h2 className="text-2xl sm:text-3xl">
            Applica le 3 masterclass al tuo profilo, <Highlight>con me e Sharon</Highlight>
          </h2>
          <Details />
          <BuyButton />
          {/* 10. Uscita */}
          <a
            href={DECLINE_HREF}
            target="_top"
            className="mt-6 inline-block text-sm text-foreground/60 underline underline-offset-2 transition-colors hover:text-foreground"
          >
            No grazie, preferisco seguire le masterclass da sola. Portami alle mie masterclass
          </a>
        </div>
      </section>

      {/* 12. Footer in 3 colonne */}
      <footer className="bg-secondary px-5 py-12 text-xs leading-relaxed text-white/75">
        <div className="mx-auto max-w-5xl">
          <p className="mx-auto max-w-2xl text-center text-white/60">
            I risultati mostrati sono personali e dipendono dal mercato e dall'impegno di ognuna: non
            rappresentano una promessa di guadagno.
          </p>
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-3 sm:text-left">
            <div>
              <p className="mb-2 font-condensed uppercase tracking-[0.16em] text-primary">
                C.S. ENDLESS GROUP SRL
              </p>
              <p>P.iva: 14295170964</p>
              <p>Viale Emilio Caldara 44 · Milano</p>
            </div>
            <div>
              <p className="mb-2 font-condensed uppercase tracking-[0.16em] text-primary">Contatti</p>
              <a href="mailto:info@carlottasgarra.it" className="underline underline-offset-2">
                info@carlottasgarra.it
              </a>
            </div>
            <div>
              <p className="mb-2 font-condensed uppercase tracking-[0.16em] text-primary">
                Informazioni legali
              </p>
              <p>
                <a
                  href="https://www.iubenda.com/privacy-policy/47892266"
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="https://www.iubenda.com/privacy-policy/47892266/cookie-policy"
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
