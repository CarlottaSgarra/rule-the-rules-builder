// Costanti condivise della pagina /candidati-ambiziosa. Unica fonte di
// verità per scadenza candidature, link esterni ancora da fornire e il
// copy del bottone "Candidati ora" (identico in tutta la pagina).

// Istante assoluto di chiusura delle candidature, con fuso orario: è lo
// stesso momento per tutti i visitatori, ovunque si trovino.
export const APPLICATIONS_DEADLINE = "2026-10-16T23:59:59+02:00";

// TODO: valorizzare quando Carlotta fornisce il link della lista d'attesa.
export const WAITLIST_URL = "";

// TODO: valorizzare quando Carlotta fornisce il link Calendly.
export const CALENDLY_URL = "";

// TODO: valorizzare con l'URL del video di presentazione di Carlotta
// (YouTube, Vimeo, o un file video) quando sarà registrato.
export const HERO_VIDEO_URL = "";

export const CTA_LABEL = "Candidati ora";

// Riga piccola sotto l'etichetta del bottone grande, come il "sub" di CtaButton.
export const CTA_SUB = "Ti rispondo entro 48 ore";

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
