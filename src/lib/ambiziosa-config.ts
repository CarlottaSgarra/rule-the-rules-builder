// Costanti condivise della pagina /candidati-ambiziosa. Unica fonte di
// verità per data del prezzo bloccato, posti, link esterni ancora da fornire e il
// copy del bottone "Candidati ora" (identico in tutta la pagina).

// Fino a questo istante i prezzi di Program e Mentorship sono bloccati, poi
// salgono. Le candidature invece restano aperte anche dopo. Con fuso orario:
// è lo stesso momento per tutti i visitatori, ovunque si trovino.
export const PRICE_LOCK_DEADLINE = "2026-10-16T23:59:59+02:00";

// Posti disponibili in tutto: Carlotta e Sharon lavorano a stretto contatto con
// ogni professionista, più di nove non si riescono a seguire come si deve.
export const MAX_SEATS = 9;

// Le candidature si aprono alla fine della seconda serata di Rule The Rules
// (martedì 6 ottobre, 19:30-20:30): fino a questo istante la pagina delle
// registrazioni non mostra niente di Ambiziosa, poi tutto compare da solo.
export const APPLICATIONS_OPEN_AT = "2026-10-06T20:30:00+02:00";

// TODO: valorizzare con il link a cui porta il pulsante di candidatura
// (es. il calendario per prenotare la call conoscitiva). Finché è vuoto, i
// pulsanti "Candidati" portano alla sezione prezzi (#prezzi).
export const APPLICATION_URL = "";

// WhatsApp del supporto clienti (risponde Matilde), con un messaggio già
// scritto che la persona può modificare prima di inviarlo.
const WHATSAPP_NUMBER = "393513728127";
const WHATSAPP_MESSAGE =
  "Ciao, sono interessata ad Ambiziosa (Program o Mentorship) ma ho una domanda.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Prezzi delle due versioni.
// DA CONFERMARE: IVA inclusa o esclusa (per ora non indicata in pagina).
export const PROGRAM_PRICE = "4.500€";
export const MENTORSHIP_PRICE = "7.000€";

// Passaggio dal Program alla Mentorship entro il primo mese: si paga solo la
// differenza tra i due prezzi, senza interessi e senza sovrapprezzo.
export const UPGRADE_DIFFERENCE = "2.500€";

// Rateizzazione disponibile per entrambe le versioni.
export const INSTALLMENT_MONTHS = 4;

// TODO: valorizzare con l'URL del video di presentazione di Carlotta
// (YouTube, Vimeo, o un file video) quando sarà registrato.
export const HERO_VIDEO_URL = "";

export const CTA_LABEL = "Candidati ora";

// Riga piccola sotto l'etichetta del bottone grande, come il "sub" di CtaButton.
export const CTA_SUB = "Prezzo bloccato fino al 16 ottobre";

// Numeri chiave delle due versioni di Ambiziosa, usati come badge nella
// pagina di vendita e nella pagina delle registrazioni.
export const PROGRAM_STATS = [
  { n: "4", label: "mesi" },
  { n: "5", label: "call in totale" },
  { n: "1", label: "call Identità con me" },
  { n: "1", label: "call Strategia contenuti con Sharon" },
];

export const MENTORSHIP_STATS = [
  { n: "4", label: "mesi" },
  { n: "22", label: "call in totale" },
  { n: "1", label: "call a settimana con Sharon" },
  { n: "4", label: "call con me, una al mese" },
];
