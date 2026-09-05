import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AddToCalendarBox } from "@/components/landing/AddToCalendarBox";
import { QuestionnaireBox } from "@/components/landing/QuestionnaireBox";
import { EventTicket } from "@/components/landing/EventTicket";
import carlottaHugImg from "@/assets/carlotta-hug.jpg";

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
              Ci sei dentro! <Highlight>Il 5 ottobre si cambia rotta</Highlight>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-foreground/75">
              <Mail className="mr-1.5 mb-0.5 inline size-4 align-text-bottom" /> Ti abbiamo appena
              inviato un’email di conferma con tutti i dettagli:{" "}
              <strong className="font-semibold text-foreground">vai a controllarla adesso</strong>{" "}
              (occhio anche allo spam, sai com’è).
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-foreground/75">
              Da qui a poche settimane, la tua comunicazione{" "}
              <strong className="font-semibold text-foreground">non sarà più la stessa</strong>. Ci
              vediamo dall’altra parte.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8">
              <VideoFrame label="Cosa succede adesso" duration="1:32" />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex items-center gap-4 rounded-xl border border-border/70 bg-card/50 p-4 text-left">
              <img
                src={carlottaHugImg}
                alt="Carlotta Sgarra"
                loading="lazy"
                className="size-16 shrink-0 rounded-full object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
              <p className="text-sm font-bold leading-snug text-foreground">
                Parola di Carlotta: sono davvero felice che tu abbia scelto di essere qui. Non vedo
                l’ora di conoscerti il 5 ottobre.
              </p>
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
