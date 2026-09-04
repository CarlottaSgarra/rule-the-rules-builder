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
        Le serate live durano il tempo che durano, ma la trasformazione che ti porti a casa non
        dovrebbe avere una scadenza. Con la registrazione completa{" "}
        <strong className="font-semibold">
          puoi tornare su ogni singolo passaggio quante volte vuoi
        </strong>
        : quel dettaglio che ti è sfuggito, quell’esercizio che vuoi rifare con calma, quella frase
        di Carlotta che vuoi risentire perché ti ha colpita. Niente ansia di prendere appunti in
        diretta: <strong className="font-semibold">il metodo resta tuo, per sempre</strong>.
      </>
    ),
    value: 97,
  },
  {
    id: "live-analisi",
    title: "Live esclusiva il giorno dopo l’evento",
    d: (
      <>
        Il giorno dopo l’ultima serata, mentre tutte le altre tornano alla loro routine, tu hai
        ancora <strong className="font-semibold">un’ora intera con Carlotta</strong>, dedicata solo
        a te e al tuo profilo. Niente teoria generica: analizziamo insieme cosa funziona davvero
        nella tua comunicazione e cosa no, e ti do gli strumenti pratici per trasformare quello che
        hai appena imparato in{" "}
        <strong className="font-semibold">vendite vere, non solo in follower in più</strong>. È il
        passaggio che separa chi guarda un evento da chi lo trasforma in risultati.
      </>
    ),
    value: 147,
  },
  {
    id: "correzione-workbook",
    title: "Correzione del tuo Workbook",
    d: (
      <>
        Il Workbook che compili durante le tre serate è la mappa della tua nuova identità
        comunicativa, ma una mappa vale solo se qualcuno di esperto controlla che tu l’abbia
        disegnata bene.{" "}
        <strong className="font-semibold">
          Carlotta e il suo team leggono personalmente il tuo Workbook
        </strong>{" "}
        e ti restituiscono correzioni e suggerimenti su misura, così non resti con il dubbio di aver
        fatto l’esercizio “giusto”:{" "}
        <strong className="font-semibold">
          sai esattamente dove sei forte e dove lavorare ancora
        </strong>
        .
      </>
    ),
    value: 97,
  },
];

export const vipBonusesTotal = vipBonuses.reduce((sum, b) => sum + b.value, 0);

export const VIP_PRICE = 97;
