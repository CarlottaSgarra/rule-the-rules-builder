import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AddToCalendarBox } from "@/components/landing/AddToCalendarBox";
import { WhatsAppGroupBox } from "@/components/landing/WhatsAppGroupBox";
import { QuestionnaireBox } from "@/components/landing/QuestionnaireBox";
import { InstagramFollowBox } from "@/components/landing/InstagramFollowBox";
import { EventTicket } from "@/components/landing/EventTicket";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Iscrizione confermata — Rule The Rules 2026" },
      {
        name: "description",
        content: "La tua iscrizione a Rule The Rules 2026 è confermata. Ecco cosa fare adesso.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
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
              Ci sei! <Highlight>Il 5 ottobre si cambia rotta</Highlight>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-foreground/75 sm:text-lg">
              <Mail className="mr-1.5 mb-0.5 inline size-4 align-text-bottom" /> Ti ho appena
              inviato un’email di conferma con tutti i dettagli:{" "}
              <strong className="font-semibold text-foreground">vai a controllarla adesso</strong>{" "}
              (occhio anche allo spam, sai com’è).
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-foreground/75 sm:text-lg">
              Da qui a poche settimane, la tua comunicazione{" "}
              <strong className="font-semibold text-foreground">non sarà più la stessa</strong>. Ci
              vediamo dall’altra parte.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8">
              <VideoFrame label="Cosa succede adesso" vimeoId="1224559302" />
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
              Ecco il tuo posto a <Highlight>Rule The Rules</Highlight>
            </h2>
            <div className="mt-5">
              <EventTicket />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
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
