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
        <p>Tre serate live, tre orari da incastrare in una vita già piena. Lo so.</p>
        <p>
          Con la registrazione{" "}
          <strong className="font-semibold">te la riguardi quante volte ti serve</strong>: il
          passaggio che ti è sfuggito, l’esercizio che vuoi rifare con calma, la frase che ti ha
          colpita e che vuoi risentire.
        </p>
        <p>
          Zero ansia da appunti mentre parlo.{" "}
          <strong className="font-semibold">Il metodo resta tuo, per sempre</strong>.
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
          Il giorno dopo l’ultima serata, mentre tutte le altre tornano già alla solita routine, tu
          hai ancora <strong className="font-semibold">un’ora tutta per te, con me</strong>, sul tuo
          profilo.
        </p>
        <p>
          Non ti riempio la testa di teoria: guardiamo insieme il tuo Instagram vero, ti dico cosa
          funziona e cosa no, e ti do gli strumenti pratici per trasformarlo in{" "}
          <strong className="font-semibold">vendite vere</strong>.
        </p>
        <p>
          Perché una cosa è ascoltarmi per tre serate, un’altra è uscirne con un piano concreto da
          seguire.
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
        <p>
          Il Workbook lo compili tu, serata dopo serata: è già un bel lavoro su te stessa. Ma da
          sola è facile restare con qualche dubbio.
        </p>
        <p>
          <strong className="font-semibold">
            Io e il mio team lo leggiamo per davvero, uno per uno
          </strong>{" "}
          e ti rispondiamo con correzioni pensate sul tuo caso, non un “brava” generico.
        </p>
        <p>
          Così non resti lì a chiederti se hai capito bene:{" "}
          <strong className="font-semibold">
            sai esattamente dove sei già forte e dove devi ancora lavorare
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
          Durante i Q&A delle tre serate, puoi{" "}
          <strong className="font-semibold">
            portare il tuo profilo o i tuoi contenuti e parlarne direttamente con me
          </strong>
          .
        </p>
        <p>
          Niente domande su casi teorici che non ti riguardano: guardiamo il tuo profilo Instagram
          insieme, e ti dico cosa cambiare, subito.
        </p>
        <p>Un’occasione in più per uscire dalle serate con le idee chiare, non con altri dubbi.</p>
      </>
    ),
    value: 67,
  },
];

export const vipBonusesTotal = vipBonuses.reduce((sum, b) => sum + b.value, 0);

export const VIP_PRICE = 97;
