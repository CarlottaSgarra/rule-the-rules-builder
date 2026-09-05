// Offerta condivisa: il value stack (cosa include il biglietto) è usato sia
// nella pagina principale (recap prezzi) sia nella pagina /checkout, per
// evitare che i due elenchi si disallineino nel tempo.
export const valueStack = [
  { t: "Accesso alle 3 serate live", d: "Dal 5 al 7 ottobre, in diretta streaming.", value: 97 },
  { t: "Workbook completo", d: "Il documento che ti accompagna serata per serata.", value: 47 },
  {
    t: "Le tue Carte Identitarie",
    d: "Il documento su cosa ti rende riconoscibile.",
    value: 67,
  },
  {
    t: "Le tue Anti-Regole personali",
    d: "L’alternativa alle regole che non senti tue.",
    value: 67,
  },
  { t: "Il tuo Content Lab", d: "Il tuo metodo personale di creazione contenuti.", value: 97 },
  {
    t: "La struttura del tuo piano editoriale",
    d: "Costruita insieme durante la terza serata.",
    value: 97,
  },
  {
    t: "Garanzia soddisfatta o rimborsata",
    d: "Fino all’inizio della seconda serata.",
    value: null as number | null,
  },
];

export const valueStackTotal = valueStack.reduce((sum, v) => sum + (v.value ?? 0), 0);

export const TICKET_PRICE = 27;

// Upgrade VIP: proposto una tantum, disponibile solo sulla pagina /vip.
// I valori dei singoli bonus sono una proposta (coerente con la scala di
// prezzi già usata in valueStack) — da confermare/aggiustare prima del lancio.
export const vipBonuses = [
  {
    id: "registrazione",
    title: "Registrazione completa delle tre serate",
    d: (
      <>
        <p>
          Le tre serate sono live: se ti perdi un pezzo o vuoi risentirlo con calma, senza la
          registrazione non puoi.
        </p>
        <p>
          Con l’upgrade VIP hai{" "}
          <strong className="font-semibold">la registrazione completa delle tre serate</strong>: la
          guardi quante volte vuoi, quando vuoi, anche dopo la fine dell’evento.
        </p>
        <p>Il metodo resta tuo per sempre, non solo per tre sere.</p>
      </>
    ),
    value: 97,
  },
  {
    id: "live-analisi",
    title: "Live esclusiva il giorno dopo l’evento",
    d: (
      <>
        <p>Il giorno dopo l’ultima serata faccio una diretta in più, solo per chi ha il VIP.</p>
        <p>
          Parliamo di vendita online e{" "}
          <strong className="font-semibold">
            analizziamo insieme i profili Instagram di chi partecipa
          </strong>
          .
        </p>
        <p>
          Prendila come <strong className="font-semibold">una consulenza diretta con me</strong>:
          una cosa che non faccio praticamente mai.
        </p>
      </>
    ),
    value: 147,
  },
  {
    id: "correzione-workbook",
    title: "Correzione del tuo Workbook",
    d: (
      <>
        <p>Il Workbook lo compili tu, serata dopo serata.</p>
        <p>
          Con l’upgrade VIP, io e il mio team lo leggiamo e ti diamo{" "}
          <strong className="font-semibold">correzioni scritte apposta per te</strong>, non
          generiche.
        </p>
        <p>Così sai esattamente cosa hai fatto bene e cosa puoi migliorare.</p>
      </>
    ),
    value: 97,
  },
];

export const vipBonusesTotal = vipBonuses.reduce((sum, b) => sum + b.value, 0);

export const VIP_PRICE = 97;
