import { CalendarPlus } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import calendarSaveImg from "@/assets/salva-evento-calendario.png";

const EVENT_DETAILS = "Live in streaming su Zoom. Il link di accesso arriva via email.";
const EVENT_LOCATION = "Zoom (link via email)";

// Usato per la live VIP dell'8 ottobre (13:00-14:00 ora italiana = 11:00-12:00 UTC).
export function googleCalendarUrl(date: string, label: string) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Rule The Rules 2026 – ${label}`,
    dates: `${date}T110000Z/${date}T120000Z`,
    details: EVENT_DETAILS,
    location: EVENT_LOCATION,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

const RECURRING_CALENDAR_URL = (() => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Rule The Rules - Unico Evento Live 2026 con Carlotta Sgarra",
    dates: "20261005T173000Z/20261005T183000Z",
    recur: "RRULE:FREQ=DAILY;COUNT=3",
    details: EVENT_DETAILS,
    location: EVENT_LOCATION,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
})();

// Un solo file .ics con i tre eventi, per chi preferisce Apple Calendar o
// Outlook (lì un file multi-evento funziona bene, a differenza di Google).
const ICS_CONTENT = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Rule The Rules 2026//IT",
  "CALSCALE:GREGORIAN",
  "BEGIN:VEVENT",
  "UID:rule-the-rules-2026-serata-1@carlottasgarra.it",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261005T173000Z",
  "DTEND:20261005T183000Z",
  "SUMMARY:Rule The Rules 2026 – Serata 1",
  `DESCRIPTION:${EVENT_DETAILS}`,
  `LOCATION:${EVENT_LOCATION}`,
  "END:VEVENT",
  "BEGIN:VEVENT",
  "UID:rule-the-rules-2026-serata-2@carlottasgarra.it",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261006T173000Z",
  "DTEND:20261006T183000Z",
  "SUMMARY:Rule The Rules 2026 – Serata 2",
  `DESCRIPTION:${EVENT_DETAILS}`,
  `LOCATION:${EVENT_LOCATION}`,
  "END:VEVENT",
  "BEGIN:VEVENT",
  "UID:rule-the-rules-2026-serata-3@carlottasgarra.it",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261007T173000Z",
  "DTEND:20261007T183000Z",
  "SUMMARY:Rule The Rules 2026 – Serata 3",
  `DESCRIPTION:${EVENT_DETAILS}`,
  `LOCATION:${EVENT_LOCATION}`,
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

const ICS_HREF = `data:text/calendar;charset=utf-8,${encodeURIComponent(ICS_CONTENT)}`;

type Props = {
  vip?: boolean;
};

export function AddToCalendarBox({ vip = false }: Props) {
  return (
    <div className="group grid overflow-hidden rounded-2xl border border-border/70 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.35)] sm:grid-cols-[2fr_3fr]">
      <div className="relative flex items-center justify-center border-b-2 border-dashed p-4 sm:border-b-0 sm:border-r-2">
        <img
          src={calendarSaveImg}
          alt="Come salvare l’evento su Google Calendar"
          loading="lazy"
          className="max-h-56 w-full rounded-lg object-contain shadow-lg transition-transform duration-300 group-hover:-rotate-2 sm:max-h-full"
        />
        <span
          className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          <CalendarPlus className="size-6 text-primary-foreground" />
        </span>
      </div>

      <div className="p-6 text-left sm:p-8">
        <p className="text-lg font-semibold text-foreground">Salvati le date delle tre serate</p>
        <p className="mt-1 text-sm text-muted-foreground">
          5, 6 e 7 ottobre 2026 · dalle 19:30 alle 20:30 · Live su Zoom
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          So quanti impegni potresti avere durante la giornata, e non vorrei mai che ti perdessi le
          tre serate.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          {vip ? (
            <>
              <strong className="font-semibold">Le 3 serate sono in diretta con me</strong>, e tu
              puoi anche vedere la registrazione successivamente, visto che hai il biglietto VIP. Ti
              consiglio comunque di salvarti le date in calendario cliccando qui sotto.
            </>
          ) : (
            <>
              <strong className="font-semibold">
                Non sono registrate, sono in diretta live con me.
              </strong>{" "}
              Ti consiglio una cosa: salvati le date in calendario cliccando qui sotto.
            </>
          )}
        </p>

        <p className="mt-5 font-condensed text-sm uppercase tracking-[0.15em] text-muted-foreground">
          Aggiungi a Google Calendar
        </p>
        <CtaButton
          href={RECURRING_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          label="Salva tutte e tre le date"
          sub="5, 6 e 7 ottobre · dalle 19:30"
          className="mt-2"
        />

        <a
          href={ICS_HREF}
          download="rule-the-rules-2026.ics"
          className="mt-4 inline-block text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
        >
          Usi Apple Calendar o Outlook? Scarica il file con tutte e tre le date
        </a>
      </div>
    </div>
  );
}
