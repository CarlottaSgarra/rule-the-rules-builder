import { CalendarPlus } from "lucide-react";

// Un solo file .ics con i tre eventi: funziona con Apple Calendar, Outlook
// e Google Calendar (import), un solo download invece di tre link separati.
// Orari in UTC (le serate sono 19:30–20:30 CEST = 17:30–18:30 UTC).
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
  "DESCRIPTION:Live in streaming su Zoom. Il link di accesso arriva via email.",
  "LOCATION:Zoom (link via email)",
  "END:VEVENT",
  "BEGIN:VEVENT",
  "UID:rule-the-rules-2026-serata-2@carlottasgarra.it",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261006T173000Z",
  "DTEND:20261006T183000Z",
  "SUMMARY:Rule The Rules 2026 – Serata 2",
  "DESCRIPTION:Live in streaming su Zoom. Il link di accesso arriva via email.",
  "LOCATION:Zoom (link via email)",
  "END:VEVENT",
  "BEGIN:VEVENT",
  "UID:rule-the-rules-2026-serata-3@carlottasgarra.it",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261007T173000Z",
  "DTEND:20261007T183000Z",
  "SUMMARY:Rule The Rules 2026 – Serata 3",
  "DESCRIPTION:Live in streaming su Zoom. Il link di accesso arriva via email.",
  "LOCATION:Zoom (link via email)",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

const ICS_HREF = `data:text/calendar;charset=utf-8,${encodeURIComponent(ICS_CONTENT)}`;

export function AddToCalendarBox() {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/50 p-6 text-center sm:p-8">
      <span
        className="mx-auto flex size-12 items-center justify-center rounded-full"
        style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
      >
        <CalendarPlus className="size-6 text-primary-foreground" />
      </span>
      <p className="mt-4 text-lg font-semibold text-foreground">
        Perfetto! Salvati le date delle tre serate
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        5, 6 e 7 ottobre 2026 · dalle 19:30 alle 20:30 · Live su Zoom
      </p>
      <a
        href={ICS_HREF}
        download="rule-the-rules-2026.ics"
        className="mt-5 inline-flex items-center justify-center rounded-lg px-6 py-3 font-condensed text-sm uppercase tracking-[0.1em] transition-transform duration-200 hover:-translate-y-0.5"
        style={{
          backgroundImage: "var(--gradient-gold)",
          boxShadow: "var(--shadow-gold)",
          color: "var(--primary-foreground)",
        }}
      >
        Salva le tre serate in calendario
      </a>
    </div>
  );
}
