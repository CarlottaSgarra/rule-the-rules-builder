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
          Le serate live durano il tempo che durano, ma la trasformazione che ti porti a casa non
          dovrebbe avere una scadenza.
        </p>
        <p>
          Con la registrazione completa{" "}
          <strong className="font-semibold">
            puoi tornare su ogni singolo passaggio quante volte vuoi
          </strong>
          : quel dettaglio che ti è sfuggito, quell’esercizio che vuoi rifare con calma, quella mia
          frase che vuoi risentire perché ti ha colpita.
        </p>
        <p>
          Niente ansia di prendere appunti in diretta:{" "}
          <strong className="font-semibold">il metodo resta tuo, per sempre</strong>.
        </p>
      </>
    ),
    value: 97,
  },
  {
    id: "live-analisi",
    title: "Live esclusiva il giorno dopo l’evento",
    d: (
      <>
        <p>
          Il giorno dopo l’ultima serata, mentre tutte le altre tornano alla loro routine, tu hai
          ancora <strong className="font-semibold">un’ora intera con me</strong>, dedicata solo a te
          e al tuo profilo.
        </p>
        <p>
          Niente teoria generica: analizziamo insieme cosa funziona davvero nella tua comunicazione
          e cosa no, e ti do gli strumenti pratici per trasformare quello che hai appena imparato in{" "}
          <strong className="font-semibold">vendite vere, non solo in follower in più</strong>.
        </p>
        <p>È il passaggio che separa chi guarda un evento da chi lo trasforma in risultati.</p>
      </>
    ),
    value: 147,
  },
  {
    id: "correzione-workbook",
    title: "Correzione del tuo Workbook",
    d: (
      <>
        <p>
          Il Workbook che compili durante le tre serate è la mappa della tua nuova identità
          comunicativa, ma una mappa vale solo se qualcuno di esperto controlla che tu l’abbia
          disegnata bene.
        </p>
        <p>
          <strong className="font-semibold">
            Io e il mio team leggiamo personalmente il tuo Workbook
          </strong>{" "}
          e ti restituiamo correzioni e suggerimenti su misura.
        </p>
        <p>
          Così non resti con il dubbio di aver fatto l’esercizio “giusto”:{" "}
          <strong className="font-semibold">
            sai esattamente dove sei forte e dove lavorare ancora
          </strong>
          .
        </p>
      </>
    ),
    value: 97,
  },
  {
    id: "profilo-qa",
    title: "Il tuo profilo protagonista nei Q&A",
    d: (
      <>
        <p>
          Durante i momenti di Q&A delle tre serate live, hai la possibilità di{" "}
          <strong className="font-semibold">
            portare il tuo profilo o i tuoi contenuti direttamente alla mia attenzione
          </strong>
          .
        </p>
        <p>
          Niente domande generiche su casi teorici: il confronto è sul tuo Instagram vero, con un
          feedback pratico che puoi applicare da subito.
        </p>
        <p>Un’occasione in più per uscire dalle serate con le idee chiare su cosa cambiare.</p>
      </>
    ),
    value: 67,
  },
];

export const vipBonusesTotal = vipBonuses.reduce((sum, b) => sum + b.value, 0);

export const VIP_PRICE = 97;
