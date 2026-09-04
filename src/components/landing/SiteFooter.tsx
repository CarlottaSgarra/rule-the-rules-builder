export function SiteFooter() {
  return (
    <footer
      className="bg-secondary"
      style={
        {
          color: "var(--secondary-foreground)",
          "--foreground": "var(--secondary-foreground)",
          "--muted-foreground": "oklch(0.85 0.03 40)",
          "--border": "color-mix(in oklab, var(--background) 14%, transparent)",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-4xl space-y-6 px-5 py-14 text-xs leading-relaxed text-muted-foreground">
        <p>
          Questo sito non fa parte del sito web di Facebook né di Meta Platforms, Inc. Inoltre,
          questo sito NON è approvato da Facebook in alcun modo. FACEBOOK è un marchio di Meta
          Platforms, Inc.
        </p>
        <p>
          Non possiamo e non garantiamo in alcun modo la tua capacità di ottenere risultati o
          guadagnare denaro con le nostre idee, informazioni, strumenti o strategie. Ciò che
          possiamo garantire è la tua soddisfazione con la nostra formazione. Offriamo una garanzia
          di soddisfazione al 100% per 30 giorni sui prodotti che vendiamo, quindi se non sei
          soddisfatto per qualsiasi motivo della qualità della nostra formazione, richiedi
          semplicemente il rimborso. Dovresti sapere che tutti i prodotti e servizi della nostra
          azienda sono solo a scopo educativo e informativo. Nulla in questa pagina, in nessuno dei
          nostri siti web o in qualsiasi nostro contenuto o curriculum costituisce una promessa o
          una garanzia di risultati o guadagni futuri, e non offriamo alcun consiglio legale,
          medico, fiscale o di altro tipo. Qualsiasi numero finanziario menzionato qui o in uno dei
          nostri siti è solo illustrativo di concetti e non deve essere considerato come guadagni
          medi, guadagni esatti o promesse di prestazioni attuali o future. Usa cautela e consulta
          sempre il tuo commercialista, avvocato o consulente professionale prima di agire su queste
          informazioni o su qualsiasi informazione relativa a un cambiamento di stile di vita, alla
          tua attività o alle tue finanze. Sei solo tu il responsabile delle tue decisioni, azioni e
          risultati nella vita, e con la tua registrazione qui accetti di non tentare di ritenerci
          responsabili per le tue decisioni, azioni o risultati, in qualsiasi momento e sotto
          qualsiasi circostanza.
        </p>
        <div className="border-t border-border pt-6">
          <p className="font-condensed uppercase tracking-[0.16em] text-foreground">
            C.S. ENDLESS GROUP SRL
          </p>
          <p className="mt-2">P.iva: 14295170964</p>
          <p>Viale Emilio Caldara 44 - Milano</p>
          <p>
            Email:{" "}
            <a href="mailto:info@carlottasgarra.it" style={{ color: "var(--gold-deep)" }}>
              info@carlottasgarra.it
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
