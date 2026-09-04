import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, Video as VideoIcon, Users, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AddToCalendarBox } from "@/components/landing/AddToCalendarBox";
import { QuestionnaireBox } from "@/components/landing/QuestionnaireBox";
import { valueStack, vipBonuses } from "@/data/offer";

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
    d: "Al termine dell’evento ti inviamo via email il link privato per rivedere tutte e tre le serate quando vuoi.",
  },
  {
    icon: Users,
    title: "Live esclusiva del giorno dopo",
    d: "Il link Zoom per la live di analisi profilo e formazione vendita ti arriva via email prima dell’evento.",
  },
  {
    icon: FileCheck2,
    title: "Correzione del Workbook",
    d: "Ti scriviamo via email le istruzioni per inviarci il tuo workbook compilato una volta ricevuto.",
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
            <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2 text-sm text-foreground/75">
              <Mail className="size-4 shrink-0" />
              Ti abbiamo appena inviato un’email di conferma con tutti i dettagli: controlla anche
              lo spam.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8">
              <VideoFrame label="Cosa succede adesso, versione VIP" duration="1:48" />
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
              Tutto quello che hai sbloccato
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {vipAccessInfo.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <item.icon className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{item.d}</p>
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
              Ecco cosa ti porti a casa
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4 text-sm">
            {[...valueStack, ...vipBonuses.map((b) => ({ t: b.title, d: b.d }))].map((item) => (
              <div key={item.t} className="rounded-xl border border-border/70 bg-card/50 p-4">
                <p className="font-medium text-foreground">{item.t}</p>
                <p className="mt-1 text-muted-foreground">{item.d}</p>
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
