import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, Video as VideoIcon, Users, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AddToCalendarBox } from "@/components/landing/AddToCalendarBox";
import { QuestionnaireBox } from "@/components/landing/QuestionnaireBox";
import { valueStack, vipBonuses } from "@/data/offer";
import carlottaLooking2Img from "@/assets/carlotta-looking-2.jpg";

export const Route = createFileRoute("/thank-you-vip")({
  head: () => ({
    meta: [
      { title: "Sei VIP! — Rule The Rules 2026" },
      {
        name: "description",
        content:
          "Il tuo upgrade VIP a Rule The Rules 2026 è confermato. Ecco come accedere a tutto.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouVip,
});

const vipAccessInfo = [
  {
    icon: VideoIcon,
    title: "Registrazione delle tre serate",
    d: (
      <>
        Al termine dell’evento ti inviamo via email il link privato per rivedere tutte e tre le
        serate <strong className="font-semibold text-ink">quando vuoi, quante volte vuoi</strong>.
        Salvalo da qualche parte sicuro: è tuo per sempre.
      </>
    ),
  },
  {
    icon: Users,
    title: "Live esclusiva del giorno dopo",
    d: (
      <>
        Il link Zoom per la tua ora con Carlotta ti arriva via email{" "}
        <strong className="font-semibold text-ink">qualche giorno prima dell’evento</strong>.
        Tienilo d’occhio: è il momento in cui il tuo profilo e la tua strategia di vendita passano
        sotto la lente, uno a uno.
      </>
    ),
  },
  {
    icon: FileCheck2,
    title: "Correzione del Workbook",
    d: (
      <>
        Compila il Workbook durante le tre serate come tutte le altre. Una volta ricevuto,{" "}
        <strong className="font-semibold text-ink">
          ti scriviamo via email le istruzioni per inviarcelo
        </strong>{" "}
        e riceverai le correzioni personali di Carlotta e del suo team.
      </>
    ),
  },
];

function ThankYouVip() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="mx-auto flex size-14 items-center justify-center rounded-full"
              style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              <CheckCircle2 className="size-7 text-primary-foreground" />
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl">
              Upgrade confermato: <Highlight>sei ufficialmente VIP</Highlight>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-foreground/75">
              <Mail className="mr-1.5 mb-0.5 inline size-4 align-text-bottom" /> Ti abbiamo appena
              inviato un’email di conferma con tutti i dettagli:{" "}
              <strong className="font-semibold text-foreground">vai a controllarla adesso</strong>{" "}
              (occhio anche allo spam).
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-foreground/75">
              Hai scelto di andare oltre, e{" "}
              <strong className="font-semibold text-foreground">
                te lo sei guadagnata sul serio
              </strong>
              . Adesso hai in mano molto più di un biglietto.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8">
              <VideoFrame label="Cosa succede adesso, versione VIP" duration="1:48" />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex items-center gap-4 rounded-xl border border-border/70 bg-card/50 p-4 text-left">
              <img
                src={carlottaLooking2Img}
                alt="Carlotta Sgarra"
                loading="lazy"
                className="size-16 shrink-0 rounded-full object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
              <p className="text-sm font-bold leading-snug text-foreground">
                Parola di Carlotta: le VIP sono le persone che seguo più da vicino. Preparati,
                perché il 6 ottobre ci vediamo davvero uno a uno.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Come accedere al VIP */}
      <section
        className="bg-secondary px-4 py-14 sm:px-8 sm:py-20"
        style={{ color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-center font-condensed text-xs uppercase tracking-[0.2em] text-primary">
              Come accedere al VIP
            </p>
            <h2 className="mt-2 text-center text-2xl font-semibold text-ink sm:text-3xl">
              Tutto quello che hai appena sbloccato
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {vipAccessInfo.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <item.icon className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recap completo: standard + VIP */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-center font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
              Il tuo pacchetto completo
            </p>
            <h2 className="mt-2 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Ecco tutto quello che ti porti a casa
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4 text-sm">
            {[...valueStack, ...vipBonuses.map((b) => ({ t: b.title, d: b.d }))].map((item) => (
              <div key={item.t} className="rounded-xl border border-border/70 bg-card/50 p-4">
                <p className="font-medium text-foreground">{item.t}</p>
                <p className="mt-1 leading-relaxed text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 pb-14 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-2xl space-y-6">
          <Reveal>
            <AddToCalendarBox />
          </Reveal>
          <Reveal delay={80}>
            <QuestionnaireBox />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
