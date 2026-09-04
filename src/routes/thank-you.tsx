import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AddToCalendarBox } from "@/components/landing/AddToCalendarBox";
import { QuestionnaireBox } from "@/components/landing/QuestionnaireBox";
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
              Iscrizione confermata! <Highlight>Ci vediamo il 5 ottobre</Highlight>
            </h1>
            <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2 text-sm text-foreground/75">
              <Mail className="size-4 shrink-0" />
              Ti abbiamo appena inviato un’email di conferma con tutti i dettagli: controlla anche
              lo spam.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8">
              <VideoFrame label="Cosa succede adesso" duration="1:32" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-center font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
              Il tuo biglietto
            </p>
            <h2 className="mt-2 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Ecco il tuo posto a Rule The Rules
            </h2>
            <div className="mt-8">
              <EventTicket />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
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
