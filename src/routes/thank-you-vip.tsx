import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, Video as VideoIcon, Users, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AddToCalendarBox, googleCalendarUrl } from "@/components/landing/AddToCalendarBox";
import { WhatsAppGroupBox } from "@/components/landing/WhatsAppGroupBox";
import { QuestionnaireBox } from "@/components/landing/QuestionnaireBox";
import { InstagramFollowBox } from "@/components/landing/InstagramFollowBox";
import { EventTicket } from "@/components/landing/EventTicket";

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
        Al termine dell’evento ti invio via email il link privato per rivedere tutte e tre le serate{" "}
        <strong className="font-semibold text-ink">quando vuoi, quante volte vuoi</strong>.
      </>
    ),
  },
  {
    icon: Users,
    title: "Live esclusiva giovedì 8 ottobre alle 13",
    d: (
      <>
        Il link Zoom per la tua ora con me ti arriva via email{" "}
        <strong className="font-semibold text-ink">qualche giorno prima dell’evento</strong>. Non
        perderti il link: hai 1 ora a disposizione con me per parlare di vendita e per farti
        analizzare il profilo Instagram direttamente da me.
      </>
    ),
    calendarHref: googleCalendarUrl("20261008", "Live VIP - 8 ottobre"),
  },
  {
    icon: FileCheck2,
    title: "Correzione del Workbook",
    d: (
      <>
        Compila il Workbook durante le tre serate come tutte le altre. Una volta ricevuto,{" "}
        <strong className="font-semibold text-ink">
          ti scrivo via email le istruzioni per inviarmelo
        </strong>{" "}
        e riceverai le mie correzioni personali e quelle del mio team.
      </>
    ),
  },
];

function ThankYouVip() {
  return (
    <div className="bg-background">
      <div
        className="px-4 py-3 text-center text-sm font-semibold text-white sm:text-base"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        Leggi le istruzioni qui sotto per partecipare alle 3 serate
      </div>

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
            <p className="mx-auto mt-4 max-w-xl text-base text-foreground/75 sm:text-lg">
              <Mail className="mr-1.5 mb-0.5 inline size-4 align-text-bottom" /> Ti ho appena
              inviato un’email di conferma con tutti i dettagli:{" "}
              <strong className="font-semibold text-foreground">vai a controllarla adesso</strong>{" "}
              (occhio anche allo spam).
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-foreground/75 sm:text-lg">
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
        </div>
      </section>

      <section className="bg-background px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-center font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
              Il tuo biglietto
            </p>
            <h2 className="mt-2 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Ecco il tuo posto <Highlight>VIP</Highlight> a Rule The Rules
            </h2>
            <div className="mt-5">
              <EventTicket label="Biglietto VIP" />
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
              Tutto quello che hai appena <Highlight dark>sbloccato</Highlight>
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
                    {item.calendarHref ? (
                      <a
                        href={item.calendarHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-condensed text-xs font-bold uppercase tracking-[0.06em] transition-transform duration-200 hover:-translate-y-0.5"
                        style={{
                          backgroundImage: "var(--gradient-gold)",
                          boxShadow: "var(--shadow-gold)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        Salva la data della live sul calendario
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-14 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Le ultime cose per trarre il <Highlight>massimo beneficio</Highlight> dall’evento live
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6">
            <Reveal delay={40}>
              <AddToCalendarBox />
            </Reveal>
            <Reveal delay={80}>
              <WhatsAppGroupBox />
            </Reveal>
            <Reveal delay={120}>
              <QuestionnaireBox />
            </Reveal>
            <Reveal delay={160}>
              <InstagramFollowBox />
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
