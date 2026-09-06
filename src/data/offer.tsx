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
          Con il biglietto standard sblocchi la diretta delle tre serate. Con l’upgrade VIP hai
          anche <strong className="font-semibold">l’accesso a vita alla registrazione</strong> delle
          tre serate.
        </p>
        <p>
          Se vuoi rivederti un dettaglio che ti è sfuggito, fare un esercizio o rivedere una parte
          del metodo, con la registrazione lo fai{" "}
          <strong className="font-semibold">quante volte vuoi, al tuo ritmo</strong>, senza nessun
          problema.
        </p>
      </>
    ),
    value: 147,
  },
  {
    id: "live-analisi",
    title: "Live esclusiva il giorno dopo l’evento, l’8 ottobre",
    d: (
      <>
        <p>
          Chi ha il biglietto standard accede alle tre dirette dell’evento. Chi ha il biglietto VIP
          accede anche a{" "}
          <strong className="font-semibold">una quarta diretta esclusiva di gruppo</strong>, con me
          e il mio team.
        </p>
        <p>
          Parliamo di due cose fondamentali per qualsiasi business:{" "}
          <strong className="font-semibold">come vendere online</strong> e{" "}
          <strong className="font-semibold">come ottimizzare il tuo profilo Instagram</strong>.
        </p>
        <p>
          Ti spiego il mio metodo di vendita, lo stesso che uso con le oltre 1.500 professioniste
          che ho già seguito, e analizziamo insieme i profili Instagram di chi è in diretta con me.
        </p>
      </>
    ),
    value: 197,
  },
  {
    id: "correzione-workbook",
    title: "Correzione del tuo Workbook",
    d: (
      <>
        <p>Con il biglietto standard hai già il Workbook da scaricare e compilare.</p>
        <p>
          Con l’upgrade al biglietto VIP,{" "}
          <strong className="font-semibold">te lo correggo io, insieme al mio team</strong>, e ti do
          suggerimenti personalizzati: un Workbook{" "}
          <strong className="font-semibold">specifico su di te e sul tuo business</strong>.
        </p>
      </>
    ),
    value: 147,
  },
];

export const vipBonusesTotal = vipBonuses.reduce((sum, b) => sum + b.value, 0);

export const VIP_PRICE = 97;
