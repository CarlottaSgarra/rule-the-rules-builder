import { CalendarPlus } from "lucide-react";

const EVENT_DETAILS = "Live in streaming su Zoom. Il link di accesso arriva via email.";
const EVENT_LOCATION = "Zoom (link via email)";

const sessions = [
  { date: "20261005", label: "5 ottobre" },
  { date: "20261006", label: "6 ottobre" },
  { date: "20261007", label: "7 ottobre" },
];

// Google Calendar non supporta più eventi in un solo link "quick add": serve
// un link per data. Su mobile è la via più affidabile per salvare davvero
// l'evento (il download di un .ics spesso si perde nei Download e non apre
// mai Google Calendar).
function googleCalendarUrl(date: string, label: string) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Rule The Rules 2026 – ${label}`,
    dates: `${date}T173000Z/${date}T183000Z`,
    details: EVENT_DETAILS,
    location: EVENT_LOCATION,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

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

export function AddToCalendarBox() {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-border/70 bg-card/50 sm:grid-cols-2">
      <div className="relative flex aspect-[4/3] items-center justify-center border-b-2 border-dashed p-6 text-center sm:aspect-auto sm:border-b-0 sm:border-r-2">
        <p className="font-condensed text-xs uppercase leading-relaxed tracking-[0.15em] text-muted-foreground/60">
          Placeholder
          <br />
          screenshot Google Calendar
        </p>
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
          tre serate: non sono registrate, sono in diretta live con me. Ti consiglio una cosa:
          salvati le date in calendario cliccando qui sotto.
        </p>

        <p className="mt-5 font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Aggiungi a Google Calendar
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {sessions.map((s) => (
            <a
              key={s.date}
              href={googleCalendarUrl(s.date, s.label)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-condensed text-xs uppercase tracking-[0.08em] transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundImage: "var(--gradient-gold)",
                boxShadow: "var(--shadow-gold)",
                color: "var(--primary-foreground)",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

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
