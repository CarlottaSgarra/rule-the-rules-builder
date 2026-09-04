# Rule The Rules — Design System

Riferimento unico per costruire nuove pagine (checkout, thank-you, upsell,
webinar, ecc.) mantenendo la stessa identità visiva della landing
principale. Non duplica i valori — quelli vivono in `src/styles.css` e nei
componenti sotto `src/components/landing/` — ma spiega **cosa esiste, dove
si trova e quando usarlo**.

> Fonte di verità per i valori: `src/styles.css` (design tokens) e
> `src/data/offer.tsx` (dati commerciali condivisi: value stack, prezzo).
> Questo documento va aggiornato ogni volta che uno di questi cambia.

---

## 1. Brand

**Rule The Rules 2026** — evento live di Carlotta Sgarra, 3 serate in
diretta streaming (5-6-7 ottobre 2026). Tono: diretto, in prima/seconda
persona singolare ("tu"), mai "voi" impersonale. Palette: rosa pastello di
sfondo, Mulberry Wood (viola scuro) e Tidal (verde lime) come colori
identitari — nessun altro colore "estraneo" viene introdotto.

## 2. Palette colori

Tutti i colori sono definiti in oklch in `src/styles.css` (`:root`) e
mappati a utility Tailwind via `@theme inline`. Non scrivere mai colori hex
o rgb hardcoded: usa i token.

| Token (`var(--...)`)              | Utility Tailwind                                       | Valore / ruolo                                                               |
| --------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `--background`                    | `bg-background`, `text-background`                     | Rosa pastello `oklch(0.931 0.034 35.9)` — sfondo pagina light                |
| `--foreground`                    | `text-foreground`                                      | Mulberry Wood `oklch(0.316 0.129 357.5)` — testo su sfondo light             |
| `--card`                          | `bg-card`                                              | Card leggermente più scure del background                                    |
| `--primary`                       | `bg-primary`, `text-primary`                           | **Tidal** (verde lime) `oklch(0.95 0.111 117.6)` — colore d'accento/CTA      |
| `--primary-foreground`            | `text-primary-foreground`                              | Mulberry Wood — testo sopra elementi `primary`                               |
| `--secondary`                     | `bg-secondary`, `text-secondary`                       | Mulberry Wood — **sfondo delle sezioni scure alternate**                     |
| `--secondary-foreground`          | `text-secondary-foreground`                            | Bianco caldo `oklch(0.952 0 89.9)` — testo su sfondo `secondary`             |
| `--muted` / `--muted-foreground`  | `bg-muted` / `text-muted-foreground`                   | Grigio-rosa tenue, testo secondario su sfondo light                          |
| `--border` / `--input` / `--ring` | `border-border`, ecc.                                  | Bordi e focus ring                                                           |
| `--cream`                         | `surface-cream` (utility)                              | = Mulberry Wood: i "pannelli scuri incassati" dentro sezioni light (vedi §5) |
| `--gold-deep`                     | usato inline (`style={{ color: "var(--gold-deep)" }}`) | = Tidal, per link/testo dorato su sfondi scuri                               |
| `--ink` / `--ink-muted`           | `text-ink` / `text-ink-muted`                          | Testo chiaro per contenuti su sfondi/pannelli scuri                          |

**Gradients e ombre riutilizzabili:**

- `--gradient-gold` → il gradiente dorato di **ogni** badge/pillola/bottone CTA del sito
- `--gradient-ink` → gradiente Mulberry Wood, usato su `text-gradient-gold` (titoli scuri con testo gradiente) e sfondi pannello scuro
- `--shadow-gold` → ombra calda sotto badge e bottoni dorati
- `--shadow-deep` → ombra scura sotto immagini/card in rilievo

### Regola critica: sezioni chiare vs scure

Il sito alterna sezioni `bg-background` (chiare) e `bg-secondary` (scure,
viola) per dare ritmo alla pagina. **Ogni volta che una sezione è
`bg-secondary`:**

1. Il testo deve usare i token "ink" (`text-ink`, `text-ink-muted`), mai
   `text-foreground` / `text-muted-foreground` (pensati per sfondo chiaro).
2. `<Highlight>` deve avere la prop `dark` (`<Highlight dark>...</Highlight>`) —
   altrimenti il colore di evidenziazione (`--secondary` tinto) si confonde
   con lo sfondo `--secondary` stesso e diventa invisibile. Questo bug è
   stato trovato e corretto più volte in questa pagina: quando crei un
   nuovo titolo su sfondo viola, controlla sempre questa prop.
3. Se serve riusare un componente pensato per sfondo chiaro dentro una
   sezione scura (es. una card con `text-foreground`/`text-muted-foreground`
   hardcoded), non riscrivere il componente: avvolgilo in un `<div>` che
   sovrascrive le custom property localmente:

   ```tsx
   <div
     style={
       {
         "--foreground": "var(--secondary-foreground)",
         "--muted-foreground": "oklch(0.85 0.03 40)",
         "--border": "color-mix(in oklab, var(--background) 14%, transparent)",
       } as React.CSSProperties
     }
   >
     {/* i componenti figli con text-foreground / text-muted-foreground
         ora leggono i valori sovrascritti, senza dover toccare le loro classi */}
   </div>
   ```

   Questa tecnica è usata per la card-biglietto nella hero, per la sezione
   FAQ e per il footer.

## 3. Tipografia

Tre famiglie, ciascuna con un ruolo fisso — non mescolarle:

| Font                             | Variabile CSS      | Utility Tailwind                                 | Uso                                                                                            |
| -------------------------------- | ------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Fraunces** (serif, editoriale) | `--font-display`   | `font-display`, e automaticamente `h1`/`h2`/`h3` | Titoli di sezione. `letter-spacing: -0.02em`                                                   |
| **Oswald** (condensed)           | `--font-condensed` | `font-condensed`                                 | SOLO per badge/eyebrow/etichette: `uppercase tracking-[0.15em]` o più largo, mai per paragrafi |
| **Poppins** (sans, body)         | `--font-body`      | font di default (`font-sans` → `--font-body`)    | Tutto il resto: paragrafi, form, bottoni, titoletti in grassetto                               |

Dimensione base: `18px` su desktop, `16px` sotto i 640px (`@layer base` in
`styles.css`). Non impostare `font-size` sul `body`/`html` altrove.

**Titoletti enfatizzati** (es. "Se rientri qui, prendi subito il
biglietto"): `font-bold` (Poppins, non condensed) + `uppercase` +
`tracking-[0.05em]`, non `font-condensed` — il condensed è riservato a badge
molto brevi.

## 4. Layout e spaziatura

- **Container width per contesto**: `max-w-3xl` (testo stretto, FAQ),
  `max-w-4xl` (garanzia, recap prezzi), `max-w-5xl` (la maggior parte delle
  sezioni), `max-w-6xl` (gallery, grid larghe). Scegli in base alla densità
  di contenuto, non a caso.
- **Padding sezione standard**: `px-5 py-20` (desktop-first) oppure
  `px-4 py-14 sm:px-8 sm:py-20` (quando serve un padding mobile più
  compatto). Mantieni coerenza all'interno della stessa pagina.
- **Border radius**: `rounded-xl` per card piccole, `rounded-2xl` per
  immagini/card principali, `1.75rem` inline per i pannelli `surface-cream`.
- **Griglia mobile-first**: classi senza prefisso = mobile, `sm:`/`md:`/`lg:`
  per override desktop. Non scrivere mai `lg:` senza aver pensato al layout
  mobile di base prima.
- **Overflow**: se un elemento decorativo deve poter "sconfinare" oltre il
  bordo di una card (badge, sticker, bordo animato), **non** mettere
  `overflow-hidden` sullo stesso elemento che porta lo sfondo/i bordi
  arrotondati — altrimenti lo sconfinamento viene tagliato. Separa in un
  wrapper esterno (senza overflow) + un wrapper interno (con
  `overflow-hidden`, per immagini/contenuto), oppure usa
  `overflow-visible md:overflow-hidden` se il problema è solo mobile.
  Bug reale trovato due volte in questa pagina (card biglietto hero, card
  "tre serate").

## 5. Componenti riutilizzabili

Tutti in `src/components/landing/`. Importali sempre da lì — non
duplicarne la logica in una nuova pagina.

| Componente             | Props chiave                                                   | Cosa fa                                                                                                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Reveal`               | `delay` (ms)                                                   | Wrapper che fa comparire il contenuto con fade/slide-in quando entra nel viewport. Avvolgi ogni blocco visibile "sopra la piega" o ogni card di una lista (con `delay={i * 60}` per l'effetto a cascata).                                                                                          |
| `Highlight`            | `dark?`                                                        | Span con sweep-in animato di uno sfondo colorato dietro al testo (via `IntersectionObserver`). **Senza** `dark` = tinta `--secondary` (per sfondo chiaro). **Con** `dark` = tinta `--primary` (per sfondo `bg-secondary`). Usa SEMPRE su almeno una frase chiave di ogni `<h2>`/`<h3>` di sezione. |
| `CtaButton`            | `label`, `sub`, `className`                                    | Bottone-pillola gradiente oro, `<a href="#iscriviti">`. È un **anchor**, non un submit — serve a portare l'utente al form, non a inviarlo.                                                                                                                                                         |
| `SignupForm`           | `compact?`, `submitLabel`, `submitSub`                         | Il vero form di lead-gen: nome, email, (telefono se non `compact`), privacy checkbox. `action="https://systeme.io/embedded/44087792/subscription"` — invio reale, non simulato. Il prefisso telefonico viene concatenato al numero in `onSubmit` prima dell'invio.                                 |
| `Countdown`            | `compact?`                                                     | Countdown a `TARGET` (in `Countdown.tsx`, va aggiornato manualmente quando cambia la data di chiusura iscrizioni). `compact` mostra anche i secondi, pensato per la topbar.                                                                                                                        |
| `SessionHighlight`     | `variant: "identity-card" \| "content-os" \| "editorial-plan"` | Mini-mockup "adesivo" bianco e ruotato che rappresenta visivamente un concetto del prodotto (Carta Identitaria, toggle Anti-Regole, calendario editoriale). Pensato per essere ancorato con `position: absolute` sopra un'immagine, leggermente storto (`rotate-*`).                               |
| `TakeawayVisual`       | `activeId`                                                     | Variante "compatta e dritta" degli stessi mockup di `SessionHighlight`, usata nella sezione "Cosa ti porti a casa": cambia in base a quale riga della lista è in hover/focus, e mostra un badge "Ne parliamo il primo/secondo/terzo giorno".                                                       |
| `VideoFrame`           | `label`, `youtubeId` o `poster`+`duration`                     | Player embed YouTube (privacy-enhanced) con overlay play-button quando non c'è `youtubeId`.                                                                                                                                                                                                        |
| `TestimonialsExplorer` | `testimonials`                                                 | Selettore di testimonianze: griglia di card cliccabili sotto, video + citazione "prima/dopo" sopra (sticky su desktop). Include già l'hint mobile "Clicca sulle testimonianze qui sotto...".                                                                                                       |
| `Workbook`             | —                                                              | Mockup della copertina prodotto con badge d'angolo.                                                                                                                                                                                                                                                |

## 6. Motivi visivi ricorrenti (da riusare, non reinventare)

- **Badge/eyebrow dorato**: la "firma" grafica più ripetuta del sito.
  ```tsx
  <span
    className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
    style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
  >
    Testo breve
  </span>
  ```
  Usalo sopra ogni titolo che introduce un'offerta, una data o una sezione
  "bonus".
- **Card bordata su sfondo scuro** (invece del vecchio pattern a
  divisore/trattino): `rounded-xl border p-5`, con `border-white/10
bg-white/5` di base e `border-primary/50 bg-white/10` quando attiva/in
  hover — mai un semplice `divide-y`.
- **Pattern a pois decorativo**: sfondo vivace ma leggero dietro sezioni
  "pain point"/emotive:
  ```css
  background-image: radial-gradient(
    circle,
    color-mix(in oklab, var(--secondary) 22%, transparent) 1.5px,
    transparent 1.5px
  );
  background-size: 26px 26px;
  ```
- **Bordo animato "a luce che gira"** (`.ticket-border-glow` in
  `styles.css`): conic-gradient in rotazione continua via `@property
--border-angle`, con `mask-composite: exclude` per creare solo l'anello.
  Riservato a UN elemento per pagina (la card più importante — es. il
  form). Ricorda: va su un wrapper **senza** `overflow-hidden` (vedi §4).
- **Emoji al posto delle iconcine** nelle card "pain point" in prima
  persona: comunica meglio lo stato emotivo di un'icona lineare generica.

## 7. Contenuti e tono

- Seconda persona singolare ("tu"), mai il "voi" impersonale da corso online.
- Date sempre nel formato `5-6-7 ottobre`, mai con virgole (`5, 6, 7`).
- Orari: solo l'orario di **inizio** (`19:30`), mai un intervallo
  ("dalle 19:30 alle 21:00").
- Prezzo biglietto: **27€** — unica fonte: `TICKET_PRICE` in
  `src/data/offer.tsx`. Il value stack (`valueStack`/`valueStackTotal`,
  stesso file) genera sia il recap prezzi in home sia quello in
  `/checkout`: se cambia un bonus o il suo valore, si aggiorna in un solo
  posto.
- Ragione sociale in footer: **C.S. ENDLESS GROUP SRL**.
- Garanzia: "Come funziona?" (con punto interrogativo), sempre in prima
  persona singolare ("ti rimborso", non "ti rimborsiamo") quando è
  affiancata dalla foto/citazione diretta di Carlotta.

## 8. Come costruire una nuova pagina

1. Nuovo file in `src/routes/<nome>.tsx` (routing a file, vedi
   `src/routes/README.md` — **non** creare cartelle `pages/` o `app/`).
2. `export const Route = createFileRoute("/<nome>")({ head: () => ({ meta: [...] }), component: NomeComponente })` —
   copia il blocco `head` da `index.tsx` come riferimento per i meta tag
   (title, description, og:*).
3. Importa solo componenti da `@/components/landing/*` e dati condivisi da
   `@/data/*` — non copiare/incollare JSX di sezioni esistenti: se una
   sezione serve identica altrove, va estratta in un componente prima.
4. Alterna sezioni `bg-background` / `bg-secondary` per dare ritmo, e
   applica sempre la regola del §2 quando usi `bg-secondary`.
5. Ogni `<h2>`/`<h3>` di sezione ha un `<Highlight>` (con `dark` se la
   sezione è scura) su almeno una frase chiave.
6. Avvolgi ogni blocco visibile in `<Reveal>` (con `delay` a cascata per
   liste).
7. Prima di consegnare: build (`bun run format && bun run lint && bun run build`),
   poi verifica visiva a 1280/390/360/320px (nessun overflow orizzontale) —
   vedi il workflow descritto in questo repo per gli screenshot con
   Playwright durante lo sviluppo.
