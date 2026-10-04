// Costanti condivise della pagina /candidati-ambiziosa. Unica fonte di
// verità per scadenza candidature, link esterni ancora da fornire e il
// copy del bottone "Candidati ora" (identico in tutta la pagina).

// Istante assoluto di chiusura delle candidature, con fuso orario: è lo
// stesso momento per tutti i visitatori, ovunque si trovino.
export const APPLICATIONS_DEADLINE = "2026-10-16T23:59:59+02:00";

// Le candidature si aprono alla fine della seconda serata di Rule The Rules
// (martedì 6 ottobre, 19:30-20:30): fino a questo istante la pagina delle
// registrazioni non mostra niente di Ambiziosa, poi tutto compare da solo.
export const APPLICATIONS_OPEN_AT = "2026-10-06T20:30:00+02:00";

// TODO: valorizzare quando Carlotta fornisce il link della lista d'attesa.
export const WAITLIST_URL = "";

// TODO: valorizzare quando Carlotta fornisce il link Calendly.
export const CALENDLY_URL = "";

// TODO: valorizzare con il link WhatsApp personale di Carlotta (es.
// https://wa.me/39XXXXXXXXXX). Finché è vuoto, la frase "scrivimi su
// WhatsApp" nel riquadro dei dubbi non viene mostrata.
export const WHATSAPP_URL = "";

// Prezzi delle due versioni.
// DA CONFERMARE: IVA inclusa o esclusa (per ora non indicata in pagina).
export const PROGRAM_PRICE = "4.500€";
export const MENTORSHIP_PRICE = "7.000€";

// TODO: valorizzare con l'URL del video di presentazione di Carlotta
// (YouTube, Vimeo, o un file video) quando sarà registrato.
export const HERO_VIDEO_URL = "";

export const CTA_LABEL = "Candidati ora";

// Riga piccola sotto l'etichetta del bottone grande, come il "sub" di CtaButton.
export const CTA_SUB = "Le candidature chiudono venerdì 16 ottobre";

// Numeri chiave delle due versioni di Ambiziosa, usati come badge nella
// pagina di vendita e nella pagina delle registrazioni.
export const PROGRAM_STATS = [
  { n: "4", label: "mesi" },
  { n: "4", label: "call in totale" },
  { n: "1", label: "call individuale con me" },
  { n: "1", label: "call individuale con il mio team" },
];

export const MENTORSHIP_STATS = [
  { n: "4", label: "mesi" },
  { n: "20+", label: "call in totale" },
  { n: "1", label: "call a settimana con il mio team" },
  { n: "4", label: "call con me, una al mese" },
];
