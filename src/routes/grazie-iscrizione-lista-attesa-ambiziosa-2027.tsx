import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, CheckCircle2, ClipboardList, Instagram, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { CtaButton } from "@/components/landing/CtaButton";
import whatsappScreenshot1Img from "@/assets/whatsapp-screenshot-1.png";
import whatsappScreenshot2Img from "@/assets/whatsapp-screenshot-2.png";
import profiloIgCarlottaImg from "@/assets/profilo-ig-carlotta.png";

// Pagina dopo l'iscrizione alla lista d'attesa di Ambiziosa 2027: stessa
// struttura della thank you di Rule The Rules, con la grafica di Ambiziosa 2027.

// Da inserire quando arrivano: link del gruppo WhatsApp di Ambiziosa 2027 e
// del questionario Google Form. Finché sono null il bottone dice "in arrivo".
const WHATSAPP_GROUP_HREF: string | null = null;
const QUESTIONNAIRE_HREF: string | null = null;
const INSTAGRAM_HREF = "https://www.instagram.com/carlottasgarra.web/";

// Apertura delle vendite: evento di un giorno intero il 7 dicembre 2026.
const CALENDAR_TITLE = "Ambiziosa 2027: aprono le vendite";
const CALENDAR_DETAILS =
  "Oggi aprono le vendite di Ambiziosa 2027. Chi è in lista d'attesa riceve l'email con l'early ticket.";
const GOOGLE_CALENDAR_URL = (() => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: CALENDAR_TITLE,
    dates: "20261207/20261208",
    details: CALENDAR_DETAILS,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
})();
const ICS_HREF = `data:text/calendar;charset=utf-8,${encodeURIComponent(
  [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ambiziosa 2027//IT",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:ambiziosa-2027-apertura-vendite@carlottasgarra.it",
    "DTSTAMP:20261102T000000Z",
    "DTSTART;VALUE=DATE:20261207",
    "DTEND;VALUE=DATE:20261208",
    `SUMMARY:${CALENDAR_TITLE}`,
    `DESCRIPTION:${CALENDAR_DETAILS}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n"),
)}`;

export const Route = createFileRoute("/grazie-iscrizione-lista-attesa-ambiziosa-2027")({
  head: () => ({
    meta: [
      { title: "Sei in lista · Ambiziosa 2027" },
      {
        name: "description",
        content: "La tua iscrizione alla lista d'attesa di Ambiziosa 2027 è confermata. Ecco cosa fare adesso.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouAmbiziosa,
});

/* ---------------------------------------------------------------- Box */

// Un passo da fare: a sinistra un'immagine, a destra testo e bottone, come
// nei box della thank you di Rule The Rules.
function StepBox({
  visual,
  icon,
  title,
  sub,
  children,
  cta,
}: {
  visual: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  sub?: string;
  children: React.ReactNode;
  cta: React.ReactNode;
}) {
  return (
    <div className="group grid overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.35)] sm:grid-cols-[2fr_3fr]">
      <div className="relative flex min-h-56 items-center justify-center border-b-2 border-dashed border-border p-6 sm:border-b-0 sm:border-r-2">
        {visual}
        <span
          className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          {icon}
        </span>
      </div>
      <div className="p-6 text-left sm:p-8">
        <p className="font-display text-2xl leading-tight text-foreground">{title}</p>
        {sub ? (
          <p className="mt-2 font-condensed text-xs uppercase tracking-[0.2em] text-muted-foreground">{sub}</p>
        ) : null}
        <div className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/80">{children}</div>
        {cta}
      </div>
    </div>
  );
}

// Bottone di un link che non c'è ancora: stesso aspetto, ma spento.
function PendingButton({ label }: { label: string }) {
  return (
    <span className="mt-5 inline-flex w-full max-w-xl cursor-not-allowed flex-col items-center rounded-xl border border-dashed border-foreground/30 px-4 py-3 text-center text-foreground/60 sm:px-6 sm:py-5">
      <span className="font-condensed text-sm font-bold uppercase tracking-[0.04em] sm:text-base">{label}</span>
      <span className="mt-1 text-[9px] font-medium sm:text-sm">Link in arrivo</span>
    </span>
  );
}

/* ---------------------------------------------------------------- Immagini dei box */

function CalendarSheet() {
  return (
    <div className="w-40 overflow-hidden rounded-2xl bg-background text-center shadow-lg transition-transform duration-300 group-hover:-rotate-2">
      <div className="bg-secondary py-2 font-condensed text-sm uppercase tracking-[0.3em] text-secondary-foreground">
        Dicembre
      </div>
      <p className="py-3 font-display text-7xl leading-none text-foreground">7</p>
      <p className="pb-4 font-condensed text-xs uppercase tracking-[0.2em] text-[var(--gold-text)]">
        Aprono le vendite
      </p>
    </div>
  );
}

function WhatsAppScreens() {
  return (
    <div className="relative w-full max-w-[220px]">
      <img
        src={whatsappScreenshot1Img}
        alt="Screenshot di una conversazione nel gruppo WhatsApp"
        loading="lazy"
        className="w-4/5 rounded-lg border-2 border-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)]"
        style={{ transform: "rotate(-5deg)" }}
      />
      <img
        src={whatsappScreenshot2Img}
        alt="Screenshot di un'altra conversazione nel gruppo WhatsApp"
        loading="lazy"
        className="absolute bottom-0 right-0 w-4/5 rounded-lg border-2 border-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)]"
        style={{ transform: "rotate(5deg)" }}
      />
    </div>
  );
}

function QuestionnaireSheet() {
  return (
    <div className="w-48 rounded-2xl bg-background p-4 shadow-lg transition-transform duration-300 group-hover:-rotate-2">
      <p className="font-display text-lg leading-tight text-foreground">Ambiziosa 2027</p>
      <p className="mt-1 font-condensed text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Questionario
      </p>
      <div className="mt-3 space-y-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`size-3.5 rounded-full border-2 ${i === 1 ? "border-primary bg-primary" : "border-foreground/30"}`} />
            <span className="h-2 flex-1 rounded-full bg-foreground/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Pagina */

function ThankYouAmbiziosa() {
  return (
    <div className="theme-ambiziosa-2027 bg-background text-foreground">
      <div className="bg-secondary px-4 py-3 text-center font-condensed text-xs uppercase tracking-[0.2em] text-secondary-foreground sm:text-sm">
        Leggi qui sotto: ci sono quattro cose da fare adesso e ci metti pochi minuti
      </div>

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="mx-auto flex size-14 items-center justify-center rounded-full text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              <CheckCircle2 className="size-7" />
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-6xl">
              Sei in lista!{" "}
              <span className="text-[var(--gold-text)]">Il 7 dicembre aprono le vendite</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              <Mail className="mb-0.5 mr-1.5 inline size-4 align-text-bottom" /> Ti ho appena mandato
              un'email di conferma:{" "}
              <strong className="font-semibold text-foreground">vai a controllarla adesso</strong>{" "}
              (occhio anche allo spam, sai com'è).
            </p>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-foreground/80">
              Il 7 dicembre <strong className="font-semibold text-foreground">ti scrivo per prima</strong>{" "}
              con l'early ticket, il prezzo riservato a chi è in lista. I posti sono 100. Intanto ci sono
              quattro cose che puoi fare adesso.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl leading-tight text-foreground sm:text-4xl">
              Quattro cose da fare <span className="text-[var(--gold-text)]">adesso</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal delay={40}>
              <StepBox
                visual={<CalendarSheet />}
                icon={<CalendarPlus className="size-6" />}
                title="Segna la data in calendario"
                sub="7 dicembre 2026 · aprono le vendite di Ambiziosa 2027"
                cta={
                  <>
                    <CtaButton
                      href={GOOGLE_CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Aggiungi al calendario"
                      sub="Google Calendar"
                      className="glow-sweep relative mt-5"
                    />
                    <a
                      href={ICS_HREF}
                      download="ambiziosa-2027-apertura-vendite.ics"
                      className="mt-4 inline-block text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                    >
                      Usi Apple Calendar o Outlook? Scarica il file con la data
                    </a>
                  </>
                }
              >
                <p>
                  <strong className="font-semibold text-foreground">Salvati la data adesso</strong>: il 7
                  dicembre ti arriva l'email con l'apertura delle vendite.
                </p>
              </StepBox>
            </Reveal>

            <Reveal delay={80}>
              <StepBox
                visual={<WhatsAppScreens />}
                icon={<MessageCircle className="size-6" />}
                title="Entra nel gruppo WhatsApp di Ambiziosa 2027"
                cta={
                  WHATSAPP_GROUP_HREF ? (
                    <CtaButton
                      href={WHATSAPP_GROUP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Entra nel gruppo WhatsApp"
                      sub="Gratis, puoi uscire quando vuoi"
                      className="glow-sweep relative mt-5"
                    />
                  ) : (
                    <PendingButton label="Entra nel gruppo WhatsApp" />
                  )
                }
              >
                <p>
                  Nel gruppo{" "}
                  <strong className="font-semibold text-foreground">ti scrivo le novità su Ambiziosa 2027</strong>.
                </p>
              </StepBox>
            </Reveal>

            <Reveal delay={120}>
              <StepBox
                visual={<QuestionnaireSheet />}
                icon={<ClipboardList className="size-6" />}
                title="Dimmi a che punto sei"
                cta={
                  QUESTIONNAIRE_HREF ? (
                    <CtaButton
                      href={QUESTIONNAIRE_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Rispondi alle domande"
                      sub="Google Form"
                      className="glow-sweep relative mt-5"
                    />
                  ) : (
                    <PendingButton label="Rispondi alle domande" />
                  )
                }
              >
                <p>
                  Rispondi a qualche domanda sul tuo business:{" "}
                  <strong className="font-semibold text-foreground">mi aiuta a conoscerti meglio</strong>. Ci
                  metti pochi minuti.
                </p>
              </StepBox>
            </Reveal>

            <Reveal delay={160}>
              <StepBox
                visual={
                  <img
                    src={profiloIgCarlottaImg}
                    alt="Profilo Instagram di Carlotta Sgarra"
                    loading="lazy"
                    className="max-h-56 w-full rounded-lg object-contain shadow-lg transition-transform duration-300 group-hover:-rotate-2"
                  />
                }
                icon={<Instagram className="size-6" />}
                title="Seguimi su Instagram"
                cta={
                  <CtaButton
                    href={INSTAGRAM_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    label="Seguimi su Instagram"
                    sub="@carlottasgarra.web"
                    className="glow-sweep relative mt-5"
                  />
                }
              >
                <p>
                  Nelle prossime settimane racconto Ambiziosa 2027 sul mio profilo:{" "}
                  <strong className="font-semibold text-foreground">seguimi lì</strong>.
                </p>
              </StepBox>
            </Reveal>
          </div>

          <p className="mt-14 text-center font-display text-3xl text-foreground">Carlotta 🌷</p>
        </div>
      </section>

      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
