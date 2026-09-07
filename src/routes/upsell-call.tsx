import { createFileRoute } from "@tanstack/react-router";
import { IdCard, Wand2 } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import sharonSpeakingImg from "@/assets/sharon-speaking.jpg";
import chiTiGuideraImg from "@/assets/chi-ti-guidera-in-questi-tre-giorni-in-diretta.jpg";

export const Route = createFileRoute("/upsell-call")({
  head: () => ({
    meta: [
      { title: "Call di implementazione 1:1 | Rule The Rules 2026" },
      {
        name: "description",
        content:
          "Implementa con Carlotta e Sharon, in una call 1:1, tutto quello che impari durante Rule The Rules 2026. Solo 12 posti disponibili.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UpsellCall,
});

const CALL_PRICE = 247;
const CHECKOUT_HREF = "https://rules.carlottasgarra.it/checkout-call-implementazione";
const DECLINE_HREF = "https://rules.carlottasgarra.it/grazie-iscrizione-standard";

const guides = [
  {
    icon: IdCard,
    name: "Con me",
    d: "Lavoriamo su identità e posizionamento: chi sei, cosa vuoi rappresentare e come comunicarlo senza copiare nessuno.",
    photo: chiTiGuideraImg,
    photoPosition: "50% 12%",
  },
  {
    icon: Wand2,
    name: "Con Sharon",
    d: "Lavorate su piano editoriale, contenuti, editing e template: la parte operativa che trasforma la tua identità in contenuti pubblicabili.",
    photo: sharonSpeakingImg,
  },
];

function CallChoice() {
  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <CtaButton
        href={CHECKOUT_HREF}
        target="_top"
        label={`Sì, voglio la call di implementazione a ${CALL_PRICE}€`}
        sub="Solo 12 posti disponibili, adesso"
      />
      <a
        href={DECLINE_HREF}
        target="_top"
        className="text-sm text-foreground/60 underline underline-offset-2 transition-colors hover:text-foreground"
      >
        No, non mi interessa
      </a>
    </div>
  );
}

function UpsellCall() {
  return (
    <div className="bg-background">
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
              Vuoi implementare con me e Sharon, in una <Highlight>call one-to-one</Highlight>,
              tutto quello che imparerai durante l’evento?
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8">
              <VideoFrame label="Guarda come funziona la call di implementazione" duration="3:02" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="mx-auto mt-6 max-w-xl rounded-2xl p-6 text-center"
              style={{ backgroundColor: "var(--secondary)", border: "2px solid var(--primary)" }}
            >
              <p className="font-condensed text-lg font-bold uppercase tracking-[0.1em] text-white">
                Solo 12 posti disponibili
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="size-3 rounded-full"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-white/85">
                I posti andranno via veloci. Ti consiglio di prenotare il tuo ora.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              La call di implementazione 1:1 con me e Sharon costa{" "}
              <strong className="font-semibold text-foreground">solo {CALL_PRICE}€</strong>. Quanto
              costerebbe una consulenza con me?{" "}
              <strong className="font-semibold text-foreground">500€ + IVA</strong>. Qui paghi
              praticamente la metà, e hai{" "}
              <strong className="font-semibold text-foreground">due professioniste con te</strong>,
              non una.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              E se poi deciderai di accedere al{" "}
              <strong className="font-semibold text-foreground">
                mio percorso di affiancamento
              </strong>
              , che aprirò durante le 3 serate,{" "}
              <strong className="font-semibold text-foreground">
                l’intero investimento di questa call di implementazione ti verrà scalato dal
                percorso
              </strong>
              : non lo perdi, lo trasformi in un acconto.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mx-auto mt-8 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
              {guides.map((g) => (
                <div
                  key={g.name}
                  className="relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-xl"
                >
                  {g.photo ? (
                    <>
                      <img
                        src={g.photo}
                        alt={g.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ objectPosition: g.photoPosition }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 border border-border/70 bg-card/50" />
                  )}
                  <div className="relative p-5">
                    {!g.photo ? <g.icon className="size-5 text-secondary" /> : null}
                    <p
                      className={`mt-3 font-semibold ${g.photo ? "text-white" : "text-foreground"}`}
                    >
                      {g.name}
                    </p>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${g.photo ? "text-white/90" : "text-foreground/80"}`}
                    >
                      {g.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <CallChoice />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
