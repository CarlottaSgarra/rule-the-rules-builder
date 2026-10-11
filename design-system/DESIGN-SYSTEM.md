# Design system · Carlotta Sgarra (Rule The Rules · Ambiziosa)

Documentazione completa e autosufficiente del sito `rules.carlottasgarra.it`, ricavata **solo dal codice** del repository `CarlottaSgarra/rule-the-rules-builder` (branch `design-system`, 11 ottobre 2026). Ogni valore riporta il file e la riga da cui viene. Quando un elemento non esiste nel sito è scritto **"non presente"**.

File di questa cartella:

| File | Cosa contiene |
| --- | --- |
| `DESIGN-SYSTEM.md` | Questo documento |
| `tokens.css` | Tutti i valori come variabili CSS (214 token) + base facoltativa |
| `tokens.json` | Gli stessi token, con nomi identici, valore, gruppo, descrizione e sorgente |
| `showcase.html` | Pagina unica che mostra palette, tipografia, spazi, raggi, ombre e ogni componente in tutti gli stati, desktop e mobile (375px) |
| `componenti/*.html` | Un file per componente, pronto da copiare: usa solo le variabili di `tokens.css` |

> Le immagini dello showcase e dei componenti puntano a `../src/assets/` e `../../src/assets/`: aprili dalla cartella del repository. I font arrivano da Google Fonts (serve la connessione).

## Indice

- [0. Come è costruito il sito](#0-come-è-costruito-il-sito)
- [1. Fondamenta del brand](#1-fondamenta-del-brand)
- [2. Colori](#2-colori)
- [3. Tipografia](#3-tipografia)
- [4. Spaziature e layout](#4-spaziature-e-layout)
- [5. Forme ed effetti](#5-forme-ed-effetti)
- [6. Icone e immagini](#6-icone-e-immagini)
- [7. Componenti](#7-componenti)
- [8. Movimento](#8-movimento)
- [9. Accessibilità](#9-accessibilità)
- [10. Pagine e template](#10-pagine-e-template)
- [11. Tono visivo e regole d'uso](#11-tono-visivo-e-regole-duso)
- [12. Incoerenze trovate](#12-incoerenze-trovate)
- [13. Cosa non si ricava dal codice](#13-cosa-non-si-ricava-dal-codice)

---

## 0. Come è costruito il sito

- **Framework:** TanStack Start (React 19 + Vite), routing a file in `src/routes/` (13 pagine), deploy su Vercel. Analytics PostHog (`src/lib/posthog.ts`).
- **CSS:** Tailwind CSS v4 senza file di configurazione. Tutti i token sono in `src/styles.css`: blocchi `@theme inline` (mappatura a classi Tailwind), `:root` (valori in oklch), regole `@layer base`, utility personalizzate `@utility` e keyframe. Il resto dello stile è scritto con classi Tailwind dentro i componenti e con molti `style={{…}}` inline (gradienti, ombre, `color-mix`).
- **Componenti:** 28 componenti di brand in `src/components/landing/`. In `src/components/ui/` ci sono 46 componenti shadcn/ui generici: **il sito ne usa uno solo, `accordion.tsx`** (le FAQ).
- **Dati condivisi:** `src/lib/ambiziosa-config.ts` (prezzi, posti, link, date di Ambiziosa), `src/data/offer.tsx` (value stack di Rule The Rules), `src/lib/signup-window.ts` (finestre di iscrizione).
- **Asset:** 115 file in `src/assets/` (100 usati, 15 non usati) e `public/favicon.ico`. C'è anche un file sparso `src/Dash board Notion.png` (1,6 MB) non usato.
- **Dimensione base:** `html { font-size: 18px }` da 640px in su e `16px` sotto (`src/styles.css:166-175`). Tutto ciò che è in `rem` (testi, spazi, raggi, larghezze) è quindi **12,5% più grande da desktop**. Nelle tabelle trovi entrambi i valori in pixel.
- **Documentazione preesistente:** `docs/DESIGN_SYSTEM.md` (217 righe, regole d'uso). Questo documento la completa e non la sostituisce nel repository.

---

## 1. Fondamenta del brand

**Nome.** Il sito ospita due marchi della stessa persona, Carlotta Sgarra:
- **Rule The Rules 2026**: evento live di 3 serate su Zoom (5-6-7 ottobre 2026). Pagine `/`, `/b`, checkout, thank-you, VIP, upsell, registrazioni.
- **Ambiziosa**: percorso di 4 mesi in due versioni (Program, Mentorship). Pagina `/candidati-ambiziosa`.

Società: C.S. ENDLESS GROUP SRL, P.IVA 14295170964, Viale Emilio Caldara 44, Milano, info@carlottasgarra.it (`src/components/landing/SiteFooter.tsx:43-55`).

**Logo.** **Non presente.** Nel repository non c'è nessun file di logo (né SVG né immagine). Il "logo" è tipografico: il nome scritto come titolo-logo in Fraunces maiuscolo:
- "RULE THE RULES" con testo a gradiente Mulberry (`text-gradient-gold`, `src/routes/index.tsx:1074`), con lo sticker oro ruotato "Unico evento 2026".
- "AMBIZIOSA" in bianco caldo con fascia verde che scorre sulle lettere (`src/routes/candidati-ambiziosa.tsx:1816-1843`), con lo sticker "Percorso di 4 mesi".
- Varianti su chiaro/scuro: la prima vive su fondo rosa (gradient-night), la seconda su fondo Mulberry. Spazio di rispetto, dimensioni minime e versioni monocromatiche: **non presenti** (nessuna regola nel codice).

**Favicon.** `public/favicon.ico`, 256×256: è l'icona predefinita di Lovable (cuore arancio-viola), **non** un'icona del brand (vedi Incoerenze).

**Immagini social (og:image, twitter:image).** **Non presenti.** In `src/routes/__root.tsx:79-90` ci sono `og:title` e `og:description` ancora con i testi segnaposto "Lovable App" / "Lovable Generated Project" e `twitter:site` = "@Lovable". Le singole pagine sovrascrivono solo `title` e `description`.

**Titoli delle pagine (meta title):** vedi la tabella in [Pagine e template](#10-pagine-e-template).

---

## 2. Colori

Il sito scrive tutti i colori in **oklch** in `src/styles.css` (righe 64-129). Qui sotto c'è il valore HEX/RGB calcolato con la conversione esatta oklch → sRGB (arrotondata all'intero). Nel codice i colori si usano con classi Tailwind (`bg-secondary`, `text-ink`…) o con `var(--…)` inline, quasi sempre con trasparenze `color-mix(in oklab, …)`.

### 2.1 Palette

| Token | HEX | RGB | oklch nel codice | Ruolo e uso | Fonte |
| --- | --- | --- | --- | --- | --- |
| `--color-background` | `#fee1d9` | 254 225 217 | oklch(0.931 0.034 35.9) | Rosa pastello · sfondo pagina e sezioni chiare | `src/styles.css:68` |
| `--color-foreground` | `#5f0032` | 95 0 50 | oklch(0.316 0.129 357.5) | Mulberry Wood · testo su sfondo chiaro, titoli | `src/styles.css:69` |
| `--color-card` | `#f7d1c8` | 247 209 200 | oklch(0.89 0.045 33) | Card chiare (usata quasi sempre al 50%: bg-card/50) | `src/styles.css:71` |
| `--color-card-foreground` | `#5f0032` | 95 0 50 |  | Testo dentro card e input (= foreground) | `src/styles.css:72` |
| `--color-primary` | `#e8f9a2` | 232 249 162 | oklch(0.95 0.111 117.6) | Tidal · verde lime d'accento: etichette e numeri su fondo scuro, bordi luminosi, focus | `src/styles.css:76` |
| `--color-primary-foreground` | `#5f0032` | 95 0 50 |  | Testo sopra elementi oro/lime (bottoni, badge) | `src/styles.css:77` |
| `--color-secondary` | `#5f0032` | 95 0 50 |  | Mulberry Wood · sfondo delle sezioni scure, topbar, footer | `src/styles.css:79` |
| `--color-secondary-foreground` | `#efefef` | 239 239 239 | oklch(0.952 0 89.9) | Bianco caldo · testo sulle sezioni scure | `src/styles.css:80` |
| `--color-muted` | `#e1d0cd` | 225 208 205 | oklch(0.87 0.02 30) | Grigio-rosa tenue · fondo del VideoFrame segnaposto | `src/styles.css:82` |
| `--color-muted-foreground` | `#7c3e55` | 124 62 85 | oklch(0.45 0.09 357.5) | Testo secondario su fondo chiaro | `src/styles.css:83` |
| `--color-muted-foreground-on-dark` | `#e0c8bf` | 224 200 191 | oklch(0.85 0.03 40) | Override di --muted-foreground dentro topbar, footer, FAQ e box scuri | `src/components/landing/SiteTopbar.tsx:33` |
| `--color-accent` | `#5f0032` | 95 0 50 |  | = Mulberry Wood (token shadcn, usato solo da hover:bg-accent nella pagina di errore) | `src/styles.css:85` |
| `--color-accent-foreground` | `#efefef` | 239 239 239 |  | = bianco caldo | `src/styles.css:86` |
| `--color-destructive` | `#cc272e` | 204 39 46 | oklch(0.55 0.2 25) | Rosso · solo i pallini dei posti occupati in /upsell-call | `src/styles.css:88` |
| `--color-destructive-foreground` | `#f8f8f8` | 248 248 248 | oklch(0.98 0 0) | Non usato nelle pagine | `src/styles.css:89` |
| `--color-border` | `#c0a7a3` | 192 167 163 | oklch(0.75 0.03 30) | Bordi su fondo chiaro (quasi sempre al 70%) | `src/styles.css:91` |
| `--color-input` | `#c0a7a3` | 192 167 163 |  | Bordo dei campi del form (= border) | `src/styles.css:92` |
| `--color-ring` | `#e8f9a2` | 232 249 162 |  | Colore del focus (= primary): nel sito solo focus:border-primary sugli input | `src/styles.css:93` |
| `--color-cream` | `#5f0032` | 95 0 50 |  | Nome storico: oggi è Mulberry Wood, fondo dei pannelli scuri incassati (surface-cream) | `src/styles.css:110` |
| `--color-gold-deep` | `#e8f9a2` | 232 249 162 |  | = primary · link e icone check su fondo scuro | `src/styles.css:111` |
| `--color-ink` | `#efefef` | 239 239 239 |  | Bianco caldo · testo su pannelli/sezioni scure (text-ink) | `src/styles.css:112` |
| `--color-ink-muted` | `#e0c8bf` | 224 200 191 | oklch(0.85 0.03 40) | Testo secondario su fondo scuro | `src/styles.css:113` |
| `--color-white` | `#ffffff` | 255 255 255 |  | Bianco puro: testo su foto con overlay nero, bordi screenshot, fondi mockup (text-white, bg-white) | `src/routes/index.tsx:1138` |
| `--color-black` | `#000000` | 0 0 0 |  | Nero: solo in overlay e ombre con trasparenza | `src/routes/index.tsx:1137` |
| `--color-whatsapp` | `#25d366` | 37 211 102 |  | Verde WhatsApp ufficiale · bottone 'Scrivi a Matilde' | `src/routes/candidati-ambiziosa.tsx:3502` |
| `--color-whatsapp-hover` | `#1ebe5d` | 30 190 93 |  | Verde WhatsApp in hover | `src/routes/candidati-ambiziosa.tsx:3502` |
| `--color-seat-free` | `#22c55e` | 34 197 94 |  | Verde dei pallini 'posto libero' in /upsell-call | `src/routes/upsell-call.tsx:110` |
| `--color-live-dot` | `#fb2c36` | 251 44 54 |  | Rosso del pallino lampeggiante 'live' (Tailwind red-500) | `src/components/landing/LiveRegistrationsNotice.tsx:11` |
| `--color-journey-pain` | `#cc8bc5` | 204 139 197 | oklch(0.72 0.11 330) | Viola chiaro della linea 'prima' nel grafico Journey | `src/components/landing/AmbiziosaJourney.tsx:49` |
| `--color-glow-light` | `#f5ffd1` | 245 255 209 | oklch(0.98 0.06 117.6) | Punto più chiaro del bordo luminoso rotante | `src/styles.css:233` |
| `--color-gold-1` | `#c3c55a` | 195 197 90 | oklch(0.8 0.13 110) | Stop 1 di gradient-gold | `src/styles.css:117` |
| `--color-gold-2` | `#e9fcb0` | 233 252 176 | oklch(0.96 0.1 120) | Stop 2 di gradient-gold | `src/styles.css:118` |
| `--color-gold-3` | `#cbd870` | 203 216 112 | oklch(0.85 0.13 115) | Stop 3 di gradient-gold | `src/styles.css:119` |
| `--color-ink-1` | `#4b0025` | 75 0 37 | oklch(0.26 0.12 357) | Stop 1 di gradient-ink | `src/styles.css:123` |
| `--color-ink-2` | `#6b1346` | 107 19 70 | oklch(0.36 0.13 350) | Stop 2 di gradient-ink | `src/styles.css:124` |
| `--color-ink-3` | `#570231` | 87 2 49 | oklch(0.3 0.12 355) | Stop 3 di gradient-ink | `src/styles.css:125` |
| `--color-night-1` | `#fee0d9` | 254 224 217 | oklch(0.93 0.035 34) | Stop 1 di gradient-night | `src/styles.css:127` |
| `--color-night-2` | `#f8d5cf` | 248 213 207 | oklch(0.9 0.04 30) | Stop 2 di gradient-night | `src/styles.css:127` |
| `--color-chart-1` | `#e8f9a2` | 232 249 162 |  | Definito ma non usato (grafici shadcn) | `src/styles.css:95` |
| `--color-chart-2` | `#5f0032` | 95 0 50 |  | Definito ma non usato | `src/styles.css:96` |
| `--color-chart-3` | `#fee1d9` | 254 225 217 |  | Definito ma non usato | `src/styles.css:97` |
| `--color-chart-4` | `#ac713e` | 172 113 62 | oklch(0.6 0.1 60) | Definito ma non usato | `src/styles.css:98` |
| `--color-chart-5` | `#4e463c` | 78 70 60 | oklch(0.4 0.02 75) | Definito ma non usato | `src/styles.css:99` |

**Palette di brand in sintesi:** tre colori identitari, più un bianco caldo.
- **Rosa pastello** `#fee1d9`: sfondo.
- **Mulberry Wood** `#5f0032`: testo, sezioni scure, pannelli.
- **Tidal** `#e8f9a2`: verde lime d'accento.
- **Bianco caldo** `#efefef`: testo su fondo scuro.

Il "oro" di bottoni e badge è un gradiente di tre verdi-lime (`gradient-gold`). Successo, errore e avviso non hanno un colore semantico dedicato:
- **errore:** non presente come colore. L'unico messaggio d'errore usa il lime `--primary` (`src/routes/accedi-registrazioni.tsx:127`).
- **successo:** non presente. Il verde `#22c55e` appare solo nei pallini dei posti liberi.
- **avviso:** non presente.
- **rosso:** `--destructive` serve solo ai pallini dei posti occupati.

### 2.2 Dove si usa ogni colore e con cosa si abbina

| Colore | Si usa per | Abbinamenti reali |
| --- | --- | --- |
| Rosa `background` | Sfondo di pagina e delle sezioni chiare, fondo degli input, fori del biglietto | Testo Mulberry (pieno, 85%, 75%), card `card/50`, bordi `border/70` |
| Mulberry `foreground`/`secondary`/`cream` | Testo su chiaro; sfondo delle sezioni scure alternate, topbar, footer, FAQ, pannelli `surface-cream`, card Mentorship | Su Mulberry: testo `ink`/`ink-muted`, etichette e numeri lime, bordi lime 25-55%, card bianche al 6% |
| Lime `primary`/`gold-deep` | Etichette ed eyebrow su scuro, numeri del countdown, check su scuro, link su scuro, bordo del biglietto e della Mentorship, bordo luminoso rotante, evidenziatore su scuro (55%), focus degli input | Solo su Mulberry o su foto scure. **Mai come testo su rosa** (contrasto 1.09:1) |
| Gradiente oro (`gold-1..3`) | Tutti i bottoni CTA, badge, pillole, cerchi icona, etichette delle serate | Testo Mulberry sopra; ombra `shadow-gold` sotto |
| Bianco caldo `ink`/`secondary-foreground` | Testo su Mulberry | Mulberry; grassetti in `ink`, corpo in `ink-muted` |
| `ink-muted` `#e0c8bf` | Testo secondario su scuro (anche come `--muted-foreground` ridefinito nelle aree scure) | Mulberry |
| `card` `#f7d1c8` | Card chiare (quasi sempre al 50%), `surface-card` | Testo Mulberry, bordo `border/70` |
| `border` `#c0a7a3` | Bordi su chiaro (al 70%), tratteggi, filetti punteggiati | Rosa e card |
| Bianco puro `#fff` | Testo su foto con overlay nero, cornici degli screenshot, fondo dei mockup | Foto con overlay nero 55-90% |
| Verde WhatsApp `#25d366` | Solo il bottone WhatsApp di Matilde | Testo bianco (contrasto insufficiente, vedi Accessibilità) |

### 2.3 Gradienti

| Token | Valore | Uso | Fonte |
| --- | --- | --- | --- |
| `--gradient-gold` | `linear-gradient(100deg, var(--color-gold-1), var(--color-gold-2), var(--color-gold-3))` | Ogni bottone CTA, badge, pillola e cerchio-icona | `src/styles.css:115` |
| `--gradient-ink` | `linear-gradient(100deg, var(--color-ink-1), var(--color-ink-2), var(--color-ink-3))` | Testo dei titoli-logo 'RULE THE RULES' (utility text-gradient-gold) | `src/styles.css:121` |
| `--gradient-night` | `linear-gradient(180deg, var(--color-night-1), var(--color-night-2))` | Sfondo dell'hero di Rule The Rules e della pagina di accesso | `src/styles.css:127` |
| `--gradient-ticket` | `linear-gradient(100deg, var(--color-secondary) 0%, var(--color-secondary) 45%, color-mix(in oklab, var(--color-primary) 32%, var(--color-secondary)) 100%)` | Box biglietto con form (hero RTR, checkout, accesso) | `src/routes/index.tsx:1119` |
| `--gradient-event-ticket` | `linear-gradient(100deg, var(--color-secondary) 0%, var(--color-secondary) 55%, color-mix(in oklab, var(--color-primary) 30%, var(--color-secondary)) 100%)` | Biglietto EventTicket (thank-you) | `src/components/landing/EventTicket.tsx:15` |
| `--overlay-photo-bottom-strong` | `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.25), transparent)` | Foto con testo bianco in basso (biglietto hero) | `src/routes/index.tsx:1137` |
| `--overlay-photo-bottom` | `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1), transparent)` | Foto delle card serate con titolo h3 bianco | `src/routes/index.tsx:1593` |
| `--overlay-photo-full` | `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.4))` | Card foto 'Costruire la tua comunicazione' (La scelta) | `src/routes/index.tsx:2169` |
| `--overlay-photo-top` | `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.1), transparent)` | Foto con testo in alto (Ricapitolando) | `src/routes/index.tsx:2209` |
| `--overlay-section-dark` | `linear-gradient(180deg, color-mix(in oklab, var(--color-secondary) 35%, transparent), color-mix(in oklab, var(--color-secondary) 15%, transparent) 40%, var(--color-secondary) 100%)` | Foto a tutta sezione sotto le sezioni scure (Il metodo) | `src/routes/index.tsx:1475` |
| `--overlay-hero-ambiziosa` | `linear-gradient(to bottom, color-mix(in oklab, var(--color-secondary) 68%, transparent) 0%, color-mix(in oklab, var(--color-secondary) 80%, transparent) 72%, var(--color-background) 100%)` | Velatura viola sulla foto dell'hero Ambiziosa | `src/routes/candidati-ambiziosa.tsx:1800` |
| `--overlay-video-poster` | `linear-gradient(to top, color-mix(in oklab, var(--color-background) 90%, transparent), color-mix(in oklab, var(--color-background) 30%, transparent), transparent)` | Copertina del VideoFrame segnaposto | `src/components/landing/VideoFrame.tsx:74` |
| `--overlay-fade-dark-top` | `linear-gradient(180deg, var(--color-secondary), transparent)` | Sfumatura sopra/sotto le colonne di foto in scorrimento (fondo scuro) | `src/routes/index.tsx:1856` |
| `--overlay-fade-light-top` | `linear-gradient(180deg, var(--color-background), transparent)` | Sfumatura sopra/sotto la colonna di screenshot (fondo chiaro) | `src/routes/candidati-ambiziosa.tsx:2286` |
| `--shine-gradient` | `linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)` | Riflesso che attraversa i bottoni (ShineSweep) | `src/components/landing/ShineSweep.tsx:12` |

### 2.4 Trasparenze e overlay sulle foto

- **Tinte ricorrenti** (tutte `color-mix(in oklab, X N%, transparent)`):

| Token | Valore | Uso | Fonte |
| --- | --- | --- | --- |
| `--tint-highlight-light` | `color-mix(in oklab, var(--color-secondary) 25%, transparent)` | Evidenziatore <Highlight> su fondo chiaro | `src/components/landing/Highlight.tsx:37` |
| `--tint-highlight-dark` | `color-mix(in oklab, var(--color-primary) 55%, transparent)` | Evidenziatore <Highlight dark> su fondo scuro | `src/components/landing/Highlight.tsx:36` |
| `--tint-panel-on-dark` | `color-mix(in oklab, var(--color-secondary) 35%, transparent)` | Box 'chi ti guida', riprova sociale, pill del hero su fondo scuro | `src/routes/index.tsx:1630` |
| `--tint-panel-border-on-dark` | `color-mix(in oklab, var(--color-primary) 30%, transparent)` | Bordo 1px dei box sopra | `src/routes/index.tsx:1631` |
| `--tint-card-on-dark` | `color-mix(in oklab, var(--color-background) 6%, transparent)` | Fondo delle card nelle sezioni scure (serate, step, bonus) | `src/routes/index.tsx:1572` |
| `--tint-card-border-on-dark` | `color-mix(in oklab, var(--color-background) 14%, transparent)` | Bordo card nelle sezioni scure e bordi del footer/FAQ | `src/routes/index.tsx:1570` |
| `--tint-dashed-on-dark` | `color-mix(in oklab, var(--color-primary) 55%, transparent)` | Bordo tratteggiato del biglietto/ticket | `src/routes/index.tsx:1147` |
| `--tint-avatar-border` | `color-mix(in oklab, var(--color-primary) 45%, transparent)` | Bordo tratteggiato degli avatar e del badge outline | `src/routes/index.tsx:1647` |
| `--tint-glass-step` | `color-mix(in oklab, var(--color-secondary) 82%, transparent)` | Card 'metodo' semitrasparenti sopra la foto (con blur 6px) | `src/routes/index.tsx:1520` |
| `--tint-glass-step-border` | `color-mix(in oklab, var(--color-primary) 25%, transparent)` | Bordo delle card 'metodo' | `src/routes/index.tsx:1522` |
| `--tint-topbar` | `color-mix(in oklab, var(--color-secondary) 95%, transparent)` | Fondo della topbar sticky (con backdrop-blur) | `src/components/landing/SiteTopbar.tsx:31` |
| `--tint-decor-number` | `color-mix(in oklab, var(--color-primary) 16%, transparent)` | Numero gigante decorativo dietro le card delle serate/step | `src/routes/index.tsx:1577` |
| `--tint-mentorship-extra` | `color-mix(in oklab, var(--color-primary) 12%, transparent)` | Box 'solo con la Mentorship' e bolle 'dopo' del Journey | `src/routes/candidati-ambiziosa.tsx:3424` |
| `--tint-mentorship-extra-border` | `color-mix(in oklab, var(--color-primary) 40%, transparent)` | Bordo del box sopra e del box 'iscrizioni chiuse' | `src/routes/candidati-ambiziosa.tsx:3425` |
| `--tint-dots-pattern` | `color-mix(in oklab, var(--color-secondary) 22%, transparent)` | Puntini del pattern di sfondo della sezione Problema | `src/routes/index.tsx:1355` |
| `--tint-call-chip-border` | `color-mix(in oklab, var(--color-secondary) 25%, transparent)` | Bordo dei chip call nella card Program | `src/routes/candidati-ambiziosa.tsx:1259` |
| `--tint-proof-light-panel` | `color-mix(in oklab, var(--color-secondary) 10%, transparent)` | Box riprova sociale su fondo chiaro (checkout) | `src/routes/checkout.tsx:104` |
| `--tint-proof-light-border` | `color-mix(in oklab, var(--color-secondary) 18%, transparent)` | Bordo del box sopra | `src/routes/checkout.tsx:105` |

- **Overlay sulle foto:** nero dal basso verso l'alto (55-90%) quando c'è testo bianco sopra la foto. Velatura Mulberry (35-80%) quando la foto fa da sfondo a una sezione scura. Velatura rosa (90% → 30%) sul segnaposto video.
- **Foto decorative di sezione** (`SectionPhoto`): opacità 0.22 di default (0.25-0.3 nei casi reali), sfumate ai bordi con `mask-image`. Fusione `multiply` su fondo chiaro e `luminosity` su fondo scuro.
- **Testo sopra le foto:** `text-shadow: 0 2px 24px rgba(0,0,0,.65)` sui titoli, `0 1px 16px rgba(0,0,0,.7)` sui paragrafi (`src/routes/index.tsx:1497, 1504`).
- **Texture oro** (`texture-gold.jpg`) all'8% in `mix-blend-overlay` sull'hero di Rule The Rules e sulle pagine di accesso/registrazioni.

### 2.5 Contrasto (combinazioni reali)

Rapporti WCAG 2.1 calcolati sui colori convertiti (le trasparenze sono composte sul loro sfondo reale).
- **AA normale:** almeno 4.5:1.
- **AA testo grande ed elementi grafici:** almeno 3:1.

| Combinazione | Testo | Sfondo | Rapporto | Esito |
| --- | --- | --- | --- | --- |
| Testo principale: foreground su background | `#5f0032` | `#fee1d9` | **11.08:1** | ✅ AA |
| Testo corpo: foreground/85 su background | `#77224b` | `#fee1d9` | **8.03:1** | ✅ AA |
| Testo secondario: foreground/75 su background | `#87385c` | `#fee1d9` | **6.18:1** | ✅ AA |
| Testo secondario: foreground/70 su background | `#8f4464` | `#fee1d9` | **5.34:1** | ✅ AA |
| muted-foreground su background | `#7c3e55` | `#fee1d9` | **6.34:1** | ✅ AA |
| text-secondary (etichette) su background | `#5f0032` | `#fee1d9` | **11.08:1** | ✅ AA |
| foreground su card/50 (card chiare) | `#5f0032` | `#fad9d0` | **10.37:1** | ✅ AA |
| foreground/85 su card/50 | `#76214a` | `#fad9d0` | **7.62:1** | ✅ AA |
| placeholder card-foreground/50 su background (input) | `#ae7086` | `#fee1d9` | **3.11:1** | ⚠️ solo testo grande / grafica |
| ink (bianco) su secondary (sezioni scure) | `#efefef` | `#5f0032` | **11.92:1** | ✅ AA |
| ink-muted su secondary | `#e0c8bf` | `#5f0032` | **8.6:1** | ✅ AA |
| ink-muted/70 su secondary | `#b98c95` | `#5f0032` | **4.73:1** | ✅ AA |
| ink-muted/60 su secondary | `#ac7887` | `#5f0032` | **3.78:1** | ⚠️ solo testo grande / grafica |
| ink-muted/50 su secondary (icona ✕) | `#a06478` | `#5f0032` | **2.99:1** | ❌ non passa |
| primary (lime) su secondary: etichette, countdown | `#e8f9a2` | `#5f0032` | **12.07:1** | ✅ AA |
| primary-foreground su gradient-gold (stop scuro) | `#5f0032` | `#c3c55a` | **7.47:1** | ✅ AA |
| primary-foreground su gradient-gold (stop chiaro) | `#5f0032` | `#e9fcb0` | **12.41:1** | ✅ AA |
| primary-foreground/80 su gold (riga sotto CTA) | `#73273a` | `#c3c55a` | **5.51:1** | ✅ AA |
| bianco su #25D366 (bottone WhatsApp) | `#ffffff` | `#25d366` | **1.98:1** | ❌ non passa |
| bianco puro su secondary (thank-you banner) | `#ffffff` | `#5f0032` | **13.7:1** | ✅ AA |
| primary (lime) su background (link Privacy su fondo chiaro) | `#e8f9a2` | `#fee1d9` | **1.09:1** | ❌ non passa |
| destructive su secondary (pallini posti) | `#cc272e` | `#5f0032` | **2.54:1** | ❌ non passa |
| #22c55e su secondary (pallini posti liberi) | `#22c55e` | `#5f0032` | **6.01:1** | ✅ AA |
| pain #cc8bc5 su secondary (grafico Journey) | `#cc8bc5` | `#5f0032` | **5.26:1** | ✅ AA |
| text-white/85 su secondary | `#e7d9e0` | `#5f0032` | **10.05:1** | ✅ AA |
| foreground su gradient-night stop 2 | `#5f0032` | `#f8d5cf` | **10.05:1** | ✅ AA |

---

## 3. Tipografia

### 3.1 Famiglie, pesi e caricamento

Tutti i font sono caricati da **Google Fonts** in `src/routes/__root.tsx:96-101`, con `preconnect` e `display=swap`:

```
https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Oswald:wght@400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap
```

| Famiglia | Token | Pesi caricati | Pesi usati | Ruolo |
| --- | --- | --- | --- | --- |
| **Fraunces** (serif, asse ottico 9-144) | `--font-display` | 400, 600, 700, 900 | 400 (titoli), 600 (h2/h3 semibold), 700 (numeri decorativi) | Titoli h1-h3, frasi d'effetto, prezzi, numeri delle statistiche |
| **Oswald** (condensed) | `--font-condensed` | 400, 500, 600 | 400, 600, **700 richiesto ma non caricato** | Etichette, badge, bottoni, menu, countdown, numeri degli step |
| **Poppins** (sans) | `--font-body` | 300, 400, 500, 600, 700 | 400, 500, 600 (582 grassetti), 700 | Testo corrente, liste, lead, titoli delle card |

Corsivo: solo con sintesi del browser (nessuno stile corsivo caricato), 6 usi: la citazione del pannello "Cos'è" e le note del Workbook. Fallback: Georgia (serif), system-ui (sans).

Regola base (`src/styles.css:190-196`): `h1, h2, h3 { font-family: var(--font-display); letter-spacing: -0.02em; }`. Il peso dei titoli resta 400 se non è indicato altrimenti.

### 3.2 Scala completa

Dimensioni in px: **mobile (rem = 16px) / desktop da 640px (rem = 18px)**. "→" indica il passaggio al breakpoint `sm` (640px) salvo indicazione diversa.

| Livello | Font | Peso | Dimensione mobile → desktop | Interlinea | Spaziatura | Maiuscolo | Colore | Fonte |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Titolo-logo (h1 hero RTR e Ambiziosa) | Fraunces | 400 | 60 → 108px (`text-6xl sm:text-8xl`) | 0.95 | -0.025em | Sì | gradient-ink su chiaro / ink su scuro | `src/routes/index.tsx:1074 · candidati-ambiziosa.tsx:1816` |
| H1 di pagina (checkout, thank-you, VIP, upsell) | Fraunces | 400 | 30 → 40,5px (`text-3xl sm:text-4xl`) | 1.2 → 1.11 | -0.02em | No | foreground | `src/routes/checkout.tsx:90` |
| H1 pagina di accesso/registrazioni | Fraunces | 400 | 36 → 54px (`text-4xl sm:text-5xl`) | 1.11 → 1 | -0.02em | No | foreground | `src/routes/accedi-registrazioni.tsx:67` |
| H2 di sezione | Fraunces | 400 | 30 → 40,5px (`text-3xl sm:text-4xl`) | 1.2 → 1.11 | -0.02em | No | foreground / ink | `src/routes/index.tsx:1362 (67 h2)` |
| H2/H3 semibold (sottotitoli di sezione) | Fraunces | 600 | 24 → 33,75px (`text-2xl sm:text-3xl`) | 1.33 → 1.2 | -0.02em | No | foreground / ink | `src/routes/index.tsx:1386 · thank-you.tsx:96` |
| H3 di card (versioni, team, bonus) | Fraunces | 400 | 24 → 33,75px | 1.33 → 1.2 | -0.02em | No | foreground / ink | `src/routes/candidati-ambiziosa.tsx:2790` |
| H3 su foto (titolo serata) | Fraunces | 400 | 20 → 27px (`text-xl sm:text-2xl`) | 1.4 → 1.33 | -0.02em | No | bianco | `src/routes/index.tsx:1594` |
| Frase d'effetto / citazione display | Fraunces | 400 | 20 → 27px | 1.375 | - | No | foreground / ink | `src/routes/index.tsx:1306` |
| Prezzo Ambiziosa | Fraunces | 400 | 48 → 54px Program (`text-5xl`), 60 → 67,5px Mentorship (`text-6xl`) | 1 | - | No | foreground / ink | `src/routes/candidati-ambiziosa.tsx:3328, 3391` |
| Prezzo 27€ | Poppins | 700 | 36 → 54px (`text-4xl sm:text-5xl`) | 1.11 → 1 | - | No | secondary / primary su scuro | `src/routes/index.tsx:2256` |
| Numero statistica (chip) | Fraunces | 400 / 700 | 18 → 20,25px (`text-lg`) | 1 | - | No | secondary / Mulberry su oro | `src/routes/candidati-ambiziosa.tsx:2797` |
| Numero step (ol) / card metodo | Oswald | 400 | 30 → 33,75px (`text-3xl`); metodo 36 → 54px | 1 | - | No | secondary / primary | `src/routes/candidati-ambiziosa.tsx:2817 · index.tsx:1525` |
| Lead / sottotitolo hero | Poppins | 600 | 18 → 27px (`text-lg sm:text-2xl`) | 1.375 | - | No | foreground / ink | `src/routes/index.tsx:1093` |
| Titolo di card / riga in grassetto | Poppins | 600 | 18 → 22,5px (`text-lg sm:text-xl`) | 1.55 → 1.4 | - | No | foreground / ink | `src/routes/index.tsx:1375` |
| Paragrafo | Poppins | 400 (grassetti 600) | 16 → 18px (`text-base`), a volte `sm:text-lg` 20,25px | 1.625 (relaxed) | - | No | foreground/85 · ink-muted | `src/routes/index.tsx:1390` |
| Testo piccolo (card, liste) | Poppins | 400 | 14 → 15,75px (`text-sm`), spesso `sm:text-base` | 1.625 | - | No | foreground/85 · ink-muted | `src/routes/index.tsx:1376` |
| Didascalia / testo legale | Poppins | 400 | 12 → 13,5px (`text-xs`) | 1.625 | - | No | muted-foreground | `src/components/landing/SiteFooter.tsx:17` |
| Micro-testo (badge mobile, mockup) | Oswald / Poppins | 400 | 8-11px fissi (`text-[8px]`…`text-[11px]`) | - | - | Badge sì | vari | `src/routes/index.tsx:1078` |
| Etichetta / eyebrow | Oswald | 400 | 12 → 13,5px (`text-xs`) | 1.33 | 0.2em (anche 0.15, 0.25) | Sì | secondary su chiaro, primary su scuro | `src/routes/index.tsx:2290` |
| Kicker dell'hero | Oswald | 400 | 12 → 15,75px (`text-xs sm:text-sm`) | 1.33 | 0.4em | Sì | secondary / primary | `src/routes/index.tsx:1067` |
| Badge / pillola | Oswald | 400 (700 nei badge 'bold') | 10px → 13,5px (`text-[10px] sm:text-xs`) | 1.5 | 0.2em | Sì | Mulberry su oro | `src/routes/index.tsx:1487` |
| Testo bottone CTA | Oswald | 700 (non caricato) | 14 → 18px (`text-sm sm:text-base`) | 1.43 → 1.5 | 0.04em | Sì | Mulberry su oro | `src/components/landing/CtaButton.tsx:30` |
| Riga sotto il bottone | Poppins | 500 | 9px → 15,75px (`text-[9px] sm:text-sm`) | - | - | No | Mulberry 80% | `src/components/landing/CtaButton.tsx:33` |
| Testo bottone submit form | Oswald | 400 | 16 → 20,25px (`text-base sm:text-lg`) | - | 0.1em → 0.14em | Sì | Mulberry su oro | `src/components/landing/SignupForm.tsx:137` |
| Bottone topbar | Oswald | 400 | 10px → 15,75px | 1.25 | 0.03em → 0.12em | Sì | Mulberry su oro | `src/components/landing/SiteTopbar.tsx:66` |
| Menu topbar | Oswald | 400 | 12 → 13,5px (`text-xs`) | - | 0.15em | Sì | muted → foreground in hover | `src/components/landing/AmbiziosaTopbar.tsx:73` |
| Numeri countdown compatto | Oswald | 400 | 16 → 27px (`text-base sm:text-2xl`) | - | - | - | primary (lime) | `src/components/landing/Countdown.tsx:43` |
| Numeri countdown esteso | Oswald | 400 | 24 → 33,75px (`text-2xl sm:text-3xl`) | - | - | - | primary | `src/components/landing/Countdown.tsx:62` |
| Unità countdown | Poppins | 400 | 11px (compatto, nascoste < 640px) / 10px | - | 0.1em / 0.15em | Sì | muted-foreground | `src/components/landing/Countdown.tsx:46` |
| Citazione con filetto | Poppins corsivo | 400 | 18 → 20,25px (`text-lg`) | 1.625 | - | No | ink, filetto gold-deep | `src/routes/index.tsx:1295` |
| Domanda FAQ | Poppins | 500 | 16 → 18px (`text-base`) | 1.5 | - | No | foreground (su scuro) | `src/routes/index.tsx:2355` |
| Risposta FAQ | Poppins | 400 | 14 → 15,75px | 1.625 | - | No | muted-foreground | `src/routes/index.tsx:2358` |

H4, H5, H6: **non presenti** (il sito usa al massimo h3; i titoletti interni sono `<p>` con classi).

### 3.3 Regole d'uso del testo

- **Grassetto in ogni paragrafo.** Quasi ogni paragrafo ha una parte in `<strong className="font-semibold">`, colorata come il testo pieno (`text-foreground` su chiaro, `text-ink` su scuro). Il resto del paragrafo è più tenue (`foreground/85` o `/75`, `ink-muted`). È la regola tipografica più ricorrente del sito (582 `font-semibold`).
- **Evidenziazioni nei titoli** (`<Highlight>`): una o più parole chiave per titolo. Vengono marcate con un rettangolo che si stende da sinistra a destra:
  - **fondo chiaro:** Mulberry 25%;
  - **fondo scuro:** lime 55%, con la prop `dark`.

  È il modo standard per "colorare" parole dentro i titoli: **non ci sono parole in un colore diverso** dentro i titoli.
- **Maiuscolo:** solo per Oswald (etichette, badge, bottoni, menu, countdown) e per i due titoli-logo. I titoli h1 di pagina, h2 e h3 sono sempre in maiuscolo/minuscolo normale.
- **Sottolineature:** solo sui link (`underline`, a volte `underline-offset-2`).
- **Testo barrato** (`line-through`): solo per i prezzi di listino nel riepilogo del valore e nei bonus VIP.
- **Frasi d'effetto in Fraunces:** si alternano ai paragrafi in Poppins per dare ritmo, con `font-display text-xl sm:text-2xl leading-snug`.
- **Corsivo:** raro (citazione con filetto, note).
- **Numeri tabulari** (`tabular-nums`) nel countdown e nella durata dei video.

---

## 4. Spaziature e layout

### 4.1 Scala delle spaziature

Scala Tailwind: 1 unità = 0.25rem (4px mobile / 4,5px desktop). Valori realmente usati, con frequenza:

| Token | rem | px mobile / desktop | Usi nel codice (p/m/gap/space) | Note |
| --- | --- | --- | --- | --- |
| `--space-0-5` | 0.125rem | 2 / 2.25px | 42 | 2px · gap tra stelle |
| `--space-1` | 0.25rem | 4 / 4.5px | 114 | 4px |
| `--space-1-5` | 0.375rem | 6 / 6.75px | 76 | 6px · py dei badge |
| `--space-2` | 0.5rem | 8 / 9px | 160 | 8px · gap più usato (61) |
| `--space-2-5` | 0.625rem | 10 / 11.25px | 27 | 10px |
| `--space-3` | 0.75rem | 12 / 13.5px | 207 | 12px · mt-3 (87 usi) |
| `--space-4` | 1rem | 16 / 18px | 278 | 16px · gutter topbar, gap |
| `--space-5` | 1.25rem | 20 / 22.5px | 183 | 20px · gutter di pagina (px-5), padding card |
| `--space-6` | 1.5rem | 24 / 27px | 167 | 24px · padding card |
| `--space-7` | 1.75rem | 28 / 31.5px | 21 | 28px · padding card prezzi |
| `--space-8` | 2rem | 32 / 36px | 124 | 32px · padding card desktop |
| `--space-9` | 2.25rem | 36 / 40.5px | 1 | 36px · padding card Program desktop (sm:p-9) |
| `--space-10` | 2.5rem | 40 / 45px | 93 | 40px · gap griglie |
| `--space-12` | 3rem | 48 / 54px | 23 | 48px · padding pannelli desktop (sm:px-12) |
| `--space-14` | 3.5rem | 56 / 63px | 60 | 56px · stacco prima della CTA di fine sezione |
| `--space-16` | 4rem | 64 / 72px | 21 | 64px · padding verticale pannelli |
| `--space-20` | 5rem | 80 / 90px | 95 | 80px · padding verticale standard di sezione (py-20) |
| `--space-24` | 6rem | 96 / 108px | 3 | 96px |
| `--space-32` | 8rem | 128 / 144px | 2 | 128px |
| `--section-padding-y` | 5rem | | | py-20: sezione standard (80px mobile / 90px desktop) · `src/routes/index.tsx:1360` |
| `--section-padding-y-compact` | 3.5rem | | | py-14 (sm:py-20): sezioni checkout/thank-you/FAQ · `src/routes/index.tsx:2327` |
| `--section-inset-padding-y` | 2.5rem | | | py-10 (sm:py-14): sezione che contiene un pannello surface-cream · `src/routes/index.tsx:1285` |
| `--page-gutter` | 1.25rem | | | px-5: margine laterale dei contenitori · `src/routes/index.tsx:1360` |
| `--page-gutter-tight` | 1rem | | | px-4: topbar e sezioni con pannello (sm:px-8) · `src/components/landing/SiteTopbar.tsx:37` |
| `--header-h` | 88px | | | Altezza topbar Ambiziosa sotto 1024px (64px da 1024px) · `src/styles.css:138` |
| `--header-h-desktop` | 64px | | | Altezza topbar Ambiziosa da 1024px · `src/styles.css:143` |

### 4.2 Contenitori, griglie, margini

- **Contenitori** (sempre `mx-auto` con margine laterale):

| Token | rem | px mobile / desktop | Uso |
| --- | --- | --- | --- |
| `--container-xs` | 20rem | 320 / 360px | max-w-xs: immagine garanzia, Workbook |
| `--container-sm` | 24rem | 384 / 432px | max-w-sm: colonna del form nel biglietto |
| `--container-md` | 28rem | 448 / 504px | max-w-md: pagina 404 |
| `--container-lg` | 32rem | 512 / 576px | max-w-lg: EventTicket |
| `--container-xl` | 36rem | 576 / 648px | max-w-xl: larghezza massima dei bottoni CTA |
| `--container-2xl` | 42rem | 672 / 756px | max-w-2xl: testi centrati |
| `--container-3xl` | 48rem | 768 / 864px | max-w-3xl: FAQ, intro centrate |
| `--container-4xl` | 56rem | 896 / 1008px | max-w-4xl: pannelli, checkout, footer |
| `--container-5xl` | 64rem | 1024 / 1152px | max-w-5xl: sezioni di testo (32 usi) |
| `--container-6xl` | 72rem | 1152 / 1296px | max-w-6xl: sezioni larghe, topbar |

- **Margine laterale (gutter):**
  - `px-5`: 1.25rem, 20px mobile / 22,5px desktop. È quello delle sezioni standard.
  - `px-4 sm:px-8`: per le sezioni che contengono un pannello o un form.
  - `px-4` / `sm:px-5`: topbar.
- **Padding verticale delle sezioni:**
  - **standard:** `py-20` (80 / 90px);
  - **compatto:** `py-14 sm:py-20` (FAQ, checkout, thank-you, garanzia);
  - **sezione con pannello incassato:** `py-10 sm:py-14`, con dentro il pannello `py-16 sm:py-20` e `px-6 sm:px-12`.
- **Stacchi interni ricorrenti:**
  - eyebrow → titolo: `mt-4`;
  - titolo → testo: `mt-6`;
  - testo → griglia: `mt-8` / `mt-10`;
  - griglia → CTA finale: `mt-14`;
  - tra card: `gap-4` / `gap-6`;
  - tra paragrafi: `space-y-4` / `space-y-5`.
- **Griglie:**
  - 1 colonna su mobile;
  - 2 colonne da `sm` (card) o da `md` (layout testo + immagine), spesso asimmetriche: `0.85fr/1.15fr`, `0.7fr/1.3fr`, `3fr/7fr`, `2fr/3fr` (box informativi), `1.1fr/0.9fr`, `1.3fr/1fr`;
  - 3 colonne solo da `lg` nella sezione "Il principio mancante" (`0.9fr/1.1fr/0.9fr`).
- **Alternanza di sezioni:** chiare (`bg-background`) e scure (`bg-secondary`), a blocchi di 1-3 sezioni consecutive dello stesso colore.

### 4.3 Breakpoint

Breakpoint di viewport di Tailwind v4 (in rem del browser, quindi sempre in px fissi):

| Breakpoint | Valore | Usi | Cosa cambia |
| --- | --- | --- | --- |
| *(base)* | < 640px | | Tutto in colonna; rem = 16px; topbar in versione compatta; unità del countdown nascoste; foto dell'hero Ambiziosa a tutta larghezza |
| `sm` | 640px | 713 | rem = 18px (tutto cresce del 12,5%); testi un gradino più grandi (`text-3xl → sm:text-4xl`…); griglie a 2 colonne per le card; padding di card e bottoni più ampi; topbar RTR su 3 colonne |
| `md` | 768px | 102 | Layout testo/immagine affiancati; numero gigante decorativo visibile nelle card; biglietto con foto a sinistra e intagli sopra/sotto; freccia SVG verso le due versioni |
| `lg` | 1024px | 82 | Topbar Ambiziosa su una riga; foto dell'hero Ambiziosa solo nella metà destra; esploratore testimonianze a 2 colonne con video sticky; card prezzi affiancate; foto decorative di sezione visibili |
| `xl` | 1280px | 14 | Menu desktop completo nella topbar Ambiziosa; banner posti + countdown su una riga |
| `2xl` | 1536px | 1 | Etichetta "Prezzo bloccato per" nella topbar Ambiziosa |

Container queries: **non presenti**.

---

## 5. Forme ed effetti

### 5.1 Raggi degli angoli

`--radius` = 0.5rem (8px mobile, 9px desktop); gli altri raggi sono calcolati su questo valore (`src/styles.css:21-28`).

| Token | Valore | Uso | Fonte |
| --- | --- | --- | --- |
| `--radius-base` | `0.5rem` | --radius del sito (8px mobile / 9px desktop) | `src/styles.css:65` |
| `--radius-xs` | `0.25rem` | rounded (Tailwind): link del menu a tendina | `Tailwind` |
| `--radius-sm` | `calc(0.5rem - 4px)` | rounded-sm | `src/styles.css:22` |
| `--radius-md` | `calc(0.5rem - 2px)` | rounded-md: bottone topbar, chip call | `src/styles.css:23` |
| `--radius-lg` | `0.5rem` | rounded-lg: input, screenshot | `src/styles.css:24` |
| `--radius-xl` | `calc(0.5rem + 4px)` | rounded-xl: bottoni CTA, card chiare, box | `src/styles.css:25` |
| `--radius-2xl` | `calc(0.5rem + 8px)` | rounded-2xl: card, foto, video (62 usi) | `src/styles.css:26` |
| `--radius-3xl` | `calc(0.5rem + 12px)` | rounded-3xl: banner posti (tablet) | `src/styles.css:27` |
| `--radius-panel` | `1.75rem` | Pannelli surface-cream e card Mentorship (inline style) | `src/routes/index.tsx:1288` |
| `--radius-ticket` | `2rem` | Box biglietto con form (rounded-[2rem]) | `src/routes/index.tsx:1112` |
| `--radius-full` | `9999px` | rounded-full: badge, pill, avatar (112 usi) | `Tailwind` |
| `--radius-highlight` | `0.15em` | Angoli dell'evidenziatore | `src/components/landing/Highlight.tsx:42` |

### 5.2 Bordi

- Spessori: **1px** (card, box, input, filetti); **2px** (bordo lime del biglietto e della Mentorship, tratteggi dei divisori, cornici bianche degli screenshot, avatar sovrapposti, filetto delle citazioni); **3px** (bordo luminoso rotante).
- Stili:
  - **continuo** (quasi sempre);
  - **tratteggiato** (`border-dashed`, 25 usi): divisori del biglietto, dei box informativi e di EventTicket, avatar "chi ti guida";
  - **punteggiato** (`border-dotted`, 6 usi): righe del riepilogo valore.
- Colori: `border/70` su chiaro; bianco 14% (`tint-card-border-on-dark`) o lime 25-55% su scuro; bordo Mulberry in hover delle card chiare; bordo lime in hover delle card scure.

### 5.3 Ombre

| Token | Valore | Uso | Fonte |
| --- | --- | --- | --- |
| `--shadow-gold` | `0 18px 50px -18px rgba(232, 249, 162, 0.5)` | Sotto bottoni e badge oro (60 usi) | `src/styles.css:128` |
| `--shadow-deep` | `0 30px 70px -30px rgba(0, 0, 0, 0.85)` | Sotto foto/video in rilievo e surface-card | `src/styles.css:129` |
| `--shadow-ticket-glow` | `0 60px 100px -30px color-mix(in oklab, var(--color-primary) 45%, transparent)` | Alone lime sotto il biglietto e la card Mentorship (insieme a shadow-gold) | `src/routes/index.tsx:1122` |
| `--shadow-event-ticket-glow` | `0 40px 80px -30px color-mix(in oklab, var(--color-primary) 40%, transparent)` | Alone sotto EventTicket | `src/components/landing/EventTicket.tsx:18` |
| `--shadow-card-lift` | `0 24px 60px -20px rgba(0, 0, 0, 0.55)` | Hover delle card su fondo scuro | `src/routes/index.tsx:1570` |
| `--shadow-card-hover` | `0 20px 45px -20px rgba(0, 0, 0, 0.35)` | Hover dei box info su fondo chiaro | `src/components/landing/InstagramFollowBox.tsx:9` |
| `--shadow-screenshot` | `0 20px 40px -12px rgba(0, 0, 0, 0.45)` | Screenshot inclinati con cornice bianca | `src/routes/index.tsx:1689` |
| `--shadow-mockup` | `0 20px 45px -15px rgba(0, 0, 0, 0.45)` | Mini-mockup bianchi (SessionHighlight, PillarVisual) | `src/components/landing/SessionHighlight.tsx:11` |
| `--shadow-wins` | `0 20px 45px -25px rgba(0, 0, 0, 0.45)` | Screenshot delle wins in scorrimento | `src/routes/candidati-ambiziosa.tsx:2277` |
| `--shadow-bonus-image` | `0 20px 45px -20px rgba(0, 0, 0, 0.6)` | Immagini delle card bonus | `src/routes/candidati-ambiziosa.tsx:2968` |
| `--shadow-session-tag` | `0 10px 24px -8px rgba(0, 0, 0, 0.5)` | Etichette oro 'Serata 1 · …' e badge sul Workbook | `src/routes/index.tsx:1662` |
| `--shadow-whatsapp` | `0 12px 30px -12px rgba(37, 211, 102, 0.7)` | Bottone WhatsApp | `src/routes/candidati-ambiziosa.tsx:3502` |
| `--text-shadow-on-photo` | `0 2px 24px rgba(0, 0, 0, 0.65)` | Titoli sopra foto nelle sezioni scure | `src/routes/index.tsx:1497` |
| `--text-shadow-on-photo-soft` | `0 1px 16px rgba(0, 0, 0, 0.7)` | Paragrafi sopra foto | `src/routes/index.tsx:1504` |

Ombre Tailwind usate (3-1 volte): `shadow-lg` (immagini dei box informativi), `shadow-md`, `shadow-sm`.

### 5.4 Sfocature

- `backdrop-filter: blur(8px)` della topbar sticky;
- `blur(6px)` delle card "metodo" sopra la foto e dell'alone del titolo AMBIZIOSA;
- `backdrop-blur-sm` (8px) della didascalia sulle foto VIP.

### 5.5 Livelli (z-index)

| Valore | Uso |
| --- | --- |
| -1 | Bordo luminoso dietro la card (`.ticket-border-glow::before`) |
| 0 | Righe di testo animate dell'hero RTR |
| 10 | Contenuto sopra le foto/texture, tendina del menu, nastro "Il percorso più completo" |
| 50 | Topbar sticky (SiteTopbar, AmbiziosaTopbar) |

### 5.6 Separatori e forme decorative

- **Separatori:**
  - filetto `border-t` (footer, riepilogo);
  - tratteggio 2px tra le colonne del biglietto e dei box informativi;
  - riga punteggiata nel value stack;
  - filetto verticale lime a sinistra (citazioni, nota legale).
- **Intagli del biglietto:** semicerchi color rosa con bordo lime sul taglio. Stanno al 30% sopra e sotto da 768px, e ai lati sotto 768px (`src/routes/index.tsx:1210-1259`).
- **Fori di EventTicket:** cerchi rosa da 1rem sul tratteggio.
- **Bordo luminoso rotante** (`.ticket-border-glow`): gradiente conico lime che gira in 4s attorno a biglietto, card Mentorship e box di accesso.
- **Numero gigante** (Fraunces 700, 40rem, lime 16%) dietro le card di serate e step, da 768px.
- **Pattern a puntini:** radiale Mulberry 22% su griglia 26px, nella sezione Problema.
- **Righe di frasi giganti** che scorrono (Oswald 7-9vh, Mulberry 4%) nell'hero RTR.
- **Badge circolare** SVG con testo "Dall'ambizione alla carriera" che ruota in 30s (`src/routes/candidati-ambiziosa.tsx:1709`).
- **Freccia SVG** che si sdoppia verso Program e Mentorship (`src/routes/candidati-ambiziosa.tsx:2767`).
- **Simbolo ✹** lime davanti ai titoli dei bonus.
- **Mini-mockup** bianchi ruotati che illustrano le serate e i 4 step (`SessionHighlight`, `AmbiziosaPillarVisual`, `TakeawayVisual`).

---

## 6. Icone e immagini

### 6.1 Icone

- **Libreria:** `lucide-react` 0.575 (tratto 2px, angoli arrotondati, `currentColor`). Un solo SVG personalizzato: il logo di WhatsApp (`src/components/landing/WhatsAppIcon.tsx`, da simple-icons).
- **Dimensioni:**
  - `size-3.5` (0.875rem): pillole, stelle;
  - `size-4` (1rem): check delle liste;
  - `size-5` (1.25rem): righe "Cosa ti porti a casa", icone del Journey su mobile;
  - `size-6` (1.5rem): dentro i cerchi oro;
  - `size-7` (1.75rem): play del video, check della thank-you, Journey da desktop.
- **Colori:**
  - Mulberry (`text-secondary`) su chiaro;
  - lime (`gold-deep`/`primary`) su scuro;
  - Mulberry sopra il gradiente oro;
  - `ink-muted/60` per le voci "già incluse".
- **Varianti:** stelle e play riempite (`fill-current`); Journey con `strokeWidth={1.75}`.
- **Simboli testuali** usati come icone: ✓ ✕ (liste per chi è/non è, prima/dopo), ✹ (bonus), · (separatori), emoji nelle card Problema.

Icone usate (37) e dove:

| Icona Lucide | Dove |
| --- | --- |
| `BadgeEuro` | components/landing/AmbiziosaJourney.tsx |
| `CalendarCheck` | components/landing/AmbiziosaPillarVisual.tsx |
| `CalendarDays` | components/landing/SessionHighlight.tsx, components/landing/TakeawayVisual.tsx, routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `CalendarPlus` | components/landing/AddToCalendarBox.tsx |
| `Check` | components/landing/AmbiziosaPillarVisual.tsx, routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/registrazioni.tsx, routes/upsell-story-identity.tsx |
| `CheckCircle2` | routes/thank-you-vip.tsx, routes/thank-you.tsx |
| `ChevronDown` | components/landing/AmbiziosaTopbar.tsx, routes/candidati-ambiziosa.tsx |
| `CircleArrowRight` | components/landing/AmbiziosaJourney.tsx |
| `ClipboardList` | components/landing/QuestionnaireBox.tsx |
| `Compass` | components/landing/AmbiziosaJourney.tsx |
| `Crown` | components/landing/AmbiziosaJourney.tsx |
| `FileCheck2` | routes/thank-you-vip.tsx, routes/vip.tsx |
| `HeartHandshake` | components/landing/AmbiziosaJourney.tsx |
| `IdCard` | components/landing/AmbiziosaPillarVisual.tsx, components/landing/SessionHighlight.tsx, components/landing/TakeawayVisual.tsx, routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-call.tsx, routes/upsell-story-identity.tsx |
| `Instagram` | components/landing/InstagramFollowBox.tsx |
| `Layers` | components/landing/AmbiziosaPillarVisual.tsx |
| `ListX` | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `Lock` | components/landing/AmbiziosaJourney.tsx, routes/checkout.tsx |
| `Mail` | routes/thank-you-vip.tsx, routes/thank-you.tsx |
| `MessageCircle` | components/landing/AmbiziosaPillarVisual.tsx, components/landing/WhatsAppGroupBox.tsx |
| `Play` | components/landing/AmbiziosaHeroVideo.tsx, components/landing/AmbiziosaPillarVisual.tsx, components/landing/VideoFrame.tsx |
| `Puzzle` | components/landing/AmbiziosaJourney.tsx |
| `Scissors` | components/landing/AmbiziosaPillarVisual.tsx |
| `Send` | components/landing/AmbiziosaPillarVisual.tsx |
| `ShieldCheck` | routes/candidati-ambiziosa.tsx, routes/checkout.tsx |
| `Shirt` | components/landing/AmbiziosaJourney.tsx |
| `SlidersHorizontal` | components/landing/SessionHighlight.tsx, components/landing/TakeawayVisual.tsx |
| `Sparkles` | components/landing/AmbiziosaPillarVisual.tsx, routes/candidati-ambiziosa.tsx |
| `Star` | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/checkout.tsx, routes/index.tsx |
| `TrendingDown` | components/landing/AmbiziosaJourney.tsx |
| `TrendingUp` | components/landing/AmbiziosaPillarVisual.tsx |
| `UserX` | components/landing/AmbiziosaJourney.tsx |
| `Users` | routes/candidati-ambiziosa.tsx, routes/thank-you-vip.tsx, routes/vip.tsx |
| `Video as VideoIcon` | routes/thank-you-vip.tsx, routes/vip.tsx |
| `Wallet` | routes/candidati-ambiziosa.tsx |
| `Wand2` | components/landing/TakeawayVisual.tsx, routes/b.tsx, routes/index.tsx, routes/upsell-call.tsx, routes/upsell-story-identity.tsx |
| `Zap` | routes/checkout.tsx |

### 6.2 Trattamento delle foto

- **Fotografia:** reportage di Carlotta (e Sharon) a eventi live, sul palco, in posa su muro/strada. Alcune in bianco e nero ("Carlotta bianco e nero…").
- **Ritagli** (`aspect-*`):
  - `aspect-video` (16:9): video e foto dei relatori;
  - `aspect-[4/3]`: foto delle serate e degli step;
  - `aspect-[4/5]`: ritratti verticali "Chi sono" e team;
  - `aspect-[3/4]`: galleria eventi;
  - `aspect-square`: Matilde.
- **Inquadratura:** sempre `object-cover` con `object-position` tarato a mano su ogni foto (es. `50% 25%`, `30% 6%`). Una foto è specchiata (`scaleX(-1)`, `src/routes/candidati-ambiziosa.tsx:2130`).
- **Angoli:**
  - `rounded-2xl` per foto e video;
  - `rounded-xl` per screenshot e galleria;
  - `rounded-full` per avatar (`size-9` sovrapposti con `-space-x-3` e bordo 2px; `size-11`/`size-14` con bordo tratteggiato lime).
- **Cornici e rotazioni:**
  - screenshot con bordo bianco 2px, ombra `shadow-screenshot` e rotazione ±5°;
  - card prova a ±3-5°;
  - Workbook a -3°;
  - mini-mockup a ±6°.
- **Filtri:** nessun filtro CSS sulle foto. Solo opacità (texture 8%, poster video 55%, foto di sezione 22-30%), `mix-blend-mode` (overlay, multiply, luminosity) e overlay a gradiente.
- **Illustrazioni:** non ci sono file di illustrazione. Le "illustrazioni" sono componenti React disegnati in CSS: `SessionHighlight`, `TakeawayVisual`, `AmbiziosaPillarVisual`, `AmbiziosaProofCards`, il grafico `AmbiziosaJourney`.
- **Sticker:** badge oro ruotati (11°) sui titoli-logo; badge circolare rotante; etichette oro a cavallo dei bordi.

### 6.3 Elenco degli asset

| File (`src/assets/`) | Dimensioni | Peso | Dove è usato |
| --- | --- | --- | --- |
| `Carlotta bianco e nerco che guarda a sinistra.jpg` | 1067×1600 | 236 KB | routes/candidati-ambiziosa.tsx |
| `Carlotta che guarda a destra appoggiata al muro.jpg` | 1067×1600 | 339 KB | components/landing/AmbiziosaJourney.tsx |
| `Carlotta mani in tasca che guarda a sinistra.jpg` | 1067×1600 | 205 KB | routes/candidati-ambiziosa.tsx |
| `Carlotta spostata a sinistra che guarda verso la camera.jpg` | 1067×1600 | 309 KB | routes/candidati-ambiziosa.tsx |
| `Chat Assistant Carousel in Soft Pink (1).png` | 1672×941 | 501 KB | routes/candidati-ambiziosa.tsx |
| `Sharon e Carlotta che ridono.jpg` | 3165×4096 | 448 KB | routes/candidati-ambiziosa.tsx |
| `bianca-lucaci.jpg` | 320×320 | 16 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `carlotta appoggiata a muro che guarda.jpg` | 1600×1067 | 788 KB | components/landing/AmbiziosaProofCards.tsx |
| `carlotta-call-avatar.jpg` | 240×240 | 11 KB | routes/candidati-ambiziosa.tsx |
| `carlotta-hug.jpg` | 1376×2064 | 149 KB | routes/candidati-ambiziosa.tsx |
| `carlotta-looking.jpg` | 1919×1080 | 67 KB | routes/candidati-ambiziosa.tsx |
| `carlotta-pointing.jpg` | 320×480 | 20 KB | routes/b.tsx, routes/checkout.tsx, routes/index.tsx, routes/upsell-story-identity-2.tsx, routes/upsell-story-identity.tsx |
| `carlotta-presenting.jpg` | 1600×900 | 107 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-call.tsx, routes/upsell-story-identity.tsx |
| `carlotta-talking.jpg` | 1919×1080 | 107 KB | routes/candidati-ambiziosa.tsx |
| `carlotta-walking.jpg` | 1376×2064 | 109 KB | routes/candidati-ambiziosa.tsx |
| `client-1.jpg` | 80×80 | 2 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/checkout.tsx, routes/index.tsx |
| `client-2.png` | 320×320 | 123 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/checkout.tsx, routes/index.tsx |
| `client-3.png` | 80×80 | 3 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/checkout.tsx, routes/index.tsx |
| `client-4.jpg` | 80×80 | 2 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/checkout.tsx, routes/index.tsx |
| `client-5.png` | 320×320 | 189 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/checkout.tsx, routes/index.tsx |
| `client-6.png` | 320×320 | 131 KB | routes/b.tsx, routes/checkout.tsx, routes/index.tsx |
| `community.png` | 1640×924 | 79 KB | routes/candidati-ambiziosa.tsx |
| `copertina-registrazione-live.png` | 1640×924 | 184 KB | routes/vip.tsx |
| `costruisci-un-sistema-che-non-ti-comandi.jpg` | 1376×2064 | 255 KB | routes/b.tsx, routes/index.tsx, routes/registrazioni.tsx, routes/upsell-story-identity.tsx |
| `cristina-buliga.jpg` | 320×320 | 14 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `dashboard notion.png` | 1640×924 | 181 KB | routes/candidati-ambiziosa.tsx |
| `dm diretto.png` | 1640×924 | 161 KB | routes/candidati-ambiziosa.tsx |
| `elena-rosa.jpg` | 320×320 | 32 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `elisa-monasterolo.jpg` | 320×320 | 15 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `elisabetta-bettonte.jpg` | 320×320 | 23 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `fatturato-2024-2026.jpg` | 962×541 | 37 KB | components/landing/AmbiziosaProofCards.tsx |
| `francesca-solignani.jpeg` | 200×200 | 10 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `giulia-ariganello.jpg` | 320×569 | 30 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `giulia-santelli.jpg` | 320×320 | 17 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `giusy-pannese.jpg` | 320×320 | 18 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `ho-creato-unazienda-identita-riconoscibile.jpg` | 1376×2064 | 191 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity-2.tsx, routes/upsell-story-identity.tsx |
| `il-metodo-circolo-vizioso-delle-regolette.jpg` | 1067×1600 | 287 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `ilaria-mattei.jpg` | 320×421 | 26 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `insight-interazione.jpg` | 736×800 | 48 KB | components/landing/AmbiziosaProofCards.tsx |
| `insight-panoramica.jpg` | 736×1090 | 71 KB | components/landing/AmbiziosaProofCards.tsx |
| `invito-per-te-costruire-la-tua-comunicazione.jpg` | 1376×2064 | 145 KB | routes/b.tsx, routes/index.tsx, routes/vip.tsx |
| `licenzia-le-regole.jpg` | 1376×2064 | 255 KB | routes/b.tsx, routes/index.tsx, routes/registrazioni.tsx, routes/upsell-story-identity.tsx |
| `mariangela-simioli.jpg` | 320×320 | 19 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `marianna-tauriello.jpg` | 320×320 | 12 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `martina-ferrari.jpg` | 320×320 | 10 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `matilde sgarra.jpeg` | 640×641 | 30 KB | routes/candidati-ambiziosa.tsx |
| `method-bg.jpg` | 1273×606 | 79 KB | routes/candidati-ambiziosa.tsx |
| `non-voglio-darti-altre-regole-da-seguire.jpg` | 1376×2064 | 158 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `profilo-ig-carlotta.png` | 1378×584 | 258 KB | components/landing/AmbiziosaProofCards.tsx, components/landing/InstagramFollowBox.tsx |
| `questionario-cover.png` | 1214×1210 | 402 KB | components/landing/QuestionnaireBox.tsx |
| `roberta-trabucco.jpg` | 320×320 | 20 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `rosanna-cafarella.jpg` | 320×320 | 19 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `salva-evento-calendario.png` | 1980×926 | 163 KB | components/landing/AddToCalendarBox.tsx |
| `screenshot 1.jpg` | 1178×1350 | 315 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 10.png` | 990×558 | 252 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 116.png` | 898×374 | 144 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 117.png` | 742×338 | 138 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 12.png` | 1158×320 | 141 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 13.png` | 786×336 | 127 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 15.png` | 920×416 | 202 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 16.png` | 592×730 | 285 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 18.png` | 1420×300 | 121 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 19.png` | 638×752 | 326 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 2.png` | 662×914 | 332 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 3.png` | 606×312 | 90 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 4.jpg` | 1179×803 | 183 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 5.jpg` | 1179×1510 | 328 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 6.png` | 692×732 | 290 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 7.png` | 708×432 | 153 KB | routes/candidati-ambiziosa.tsx |
| `screenshot 9.jpg` | 1179×652 | 146 KB | routes/candidati-ambiziosa.tsx |
| `sharon-call-avatar.jpg` | 240×240 | 9 KB | routes/candidati-ambiziosa.tsx |
| `sharon-convertino.jpg` | 320×320 | 17 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `sharon-speaking.jpg` | 960×540 | 62 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-call.tsx, routes/upsell-story-identity.tsx |
| `silvia-bedin.jpg` | 320×320 | 24 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `silvia-errico.jpeg` | 320×320 | 13 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-1.jpg` | 640×427 | 34 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-10.jpg` | 640×960 | 57 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-11.jpg` | 640×960 | 111 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-12.jpg` | 640×427 | 51 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-13.jpg` | 640×360 | 25 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-14.jpg` | 640×360 | 40 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-15.jpg` | 640×360 | 49 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-2.jpg` | 640×427 | 62 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-3.jpg` | 640×427 | 57 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-4.jpg` | 640×960 | 72 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-5.jpg` | 640×427 | 56 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-6.jpg` | 640×427 | 47 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-7.jpg` | 640×960 | 66 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-8.jpg` | 640×427 | 55 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `social-proof-9.jpg` | 640×427 | 63 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `soddisfatto-o-rimborsato.png` | 800×753 | 48 KB | routes/b.tsx, routes/checkout.tsx, routes/index.tsx, routes/upsell-story-identity-2.tsx |
| `stufata-di-tutto-questo.jpg` | 1376×2064 | 157 KB | routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `texture-gold.jpg` | 1024×576 | 35 KB | routes/accedi-registrazioni.tsx, routes/b.tsx, routes/index.tsx, routes/registrazioni.tsx, routes/upsell-story-identity.tsx |
| `togli-il-costume.jpg` | 1376×2064 | 285 KB | routes/b.tsx, routes/index.tsx, routes/registrazioni.tsx, routes/upsell-story-identity.tsx |
| `valentina-giuriato.jpg` | 320×320 | 20 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `valeria-salussoli.avif` | 320×374 | 15 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `vanessa-sciorio.jpg` | 320×320 | 14 KB | routes/b.tsx, routes/candidati-ambiziosa.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `whatsapp-screenshot-1.png` | 640×559 | 337 KB | components/landing/WhatsAppGroupBox.tsx, routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `whatsapp-screenshot-2.png` | 640×555 | 276 KB | components/landing/WhatsAppGroupBox.tsx, routes/b.tsx, routes/index.tsx, routes/upsell-story-identity.tsx |
| `workbook-cover-v2.png` | 800×1131 | 415 KB | components/landing/Workbook.tsx, routes/vip.tsx |

**Non usati (15):** `Carlotta bianco e nero che guarda in camera.jpg` (1067×1600, 251 KB), `Fatturato 2024-2026.png` (1640×924, 244 KB), `carlotta-looking-2.jpg` (1919×1080, 150 KB), `chi-ti-guidera-in-questi-tre-giorni-in-diretta.jpg` (1067×1600, 355 KB), `hero-carlotta.jpg` (1024×1280, 87 KB), `iphone-start.jpg` (1024×1024, 105 KB), `livestream.jpg` (1280×720, 48 KB), `ok-momento-di-iscriverti.jpg` (1067×1600, 336 KB), `screenshot insight 1.jpeg` (736×1600, 77 KB), `screenshot insight 2.jpeg` (736×1600, 83 KB), `sharon-face.jpg` (240×240, 11 KB), `team.jpg` (1280×853, 111 KB), `template-mockup.png` (1640×924, 1011 KB), `testimonial-1.jpg` (640×640, 27 KB), `workbook-cover.png` (1054×1492, 610 KB).

Altri file: `public/favicon.ico` (256×256, icona di Lovable), `public/robots.txt`, `src/Dash board Notion.png` (1,6 MB, fuori da assets e non usato).

---

## 7. Componenti

Ogni componente ha un file in `componenti/` con tutti gli stati e le varianti, ed è mostrato in `showcase.html`.

**Stati comuni del sito:**
- **hover:**
  - bottoni: sollevamento di 2px in 200ms;
  - card: sollevamento di 4px in 300ms, con bordo Mulberry su chiaro o bordo lime + ombra su scuro;
  - link: cambio colore o sottolineatura.
- **focus:** **nessuno stile dedicato**. Resta il contorno del browser, tranne sugli input, che hanno `outline-none` e solo `focus:border-primary`.
- **attivo (`:active`):** non presente.
- **disabilitato:** solo sul submit della pagina di accesso (`disabled:opacity-60`, `pointer-events-none`).

### Bottoni

Il bottone principale del sito è sempre oro (gradient-gold) con testo Mulberry in Oswald maiuscolo e una riga piccola sotto. Non esiste un bottone 'secondario' di brand: le alternative sono link sottolineati. Stato hover = sollevamento di 2px (200ms). Il sito non definisce uno stile di focus personalizzato (resta il contorno del browser) né uno stato 'attivo': qui sono mostrati come risultano.

**Varianti:** CTA oro con riga sotto (CtaButton), CTA con riflesso (AmbiziosaCtaButton hero), bottone topbar (con e senza riflesso), submit del form, bottone WhatsApp con icona, bottone oro piccolo (thank-you VIP), link di rifiuto 'No, non mi interessa', link testuali (lime su scuro, muted su chiaro), bottoni di sistema 404/errore. **Stati:** normale, hover (−2px), focus (contorno del browser), disabilitato (opacità 60%, solo form). Attivo: non presente. **Dimensioni:** CTA `px-4 py-3` → `sm:px-6 sm:py-5`, larghezza piena fino a 36rem; submit `px-6 py-4`; topbar `px-2 py-1.5` → `sm:px-4 sm:py-2`; oro piccolo `px-4 py-2.5`. Bottone secondario: non presente.

- **Fonte:** src/components/landing/CtaButton.tsx · AmbiziosaCtaButton.tsx · ShineSweep.tsx · SignupForm.tsx:130 · SiteTopbar.tsx:66 · src/routes/candidati-ambiziosa.tsx:3498 (WhatsApp) · src/routes/__root.tsx:17-75 (404/errore)
- **File:** `componenti/bottoni.html`

### Badge, etichette e pillole

Tutte le pillole sono in Oswald maiuscolo con spaziatura larga. Oro (gradient-gold + shadow-gold) per i messaggi principali, contorno lime per quelli secondari, tinta viola trasparente per i dati su fondo scuro.

**Varianti:** badge oro (4 misure), sticker ruotato 11° sul titolo-logo, etichetta oro della serata/step a cavallo del bordo, badge a contorno lime (su scuro) o Mulberry (su chiaro), nastro 'Il percorso più completo', pill valore su scuro con icona, chip statistica (chiara o oro), chip esempio, cerchio icona oro 3rem/3.5rem, etichette testuali (eyebrow, kicker). **Stati:** statici; i bottoni-settore hanno hover −2px e selezione con contorno Mulberry.

- **Fonte:** src/routes/index.tsx:1077 (sticker) · 1487 (badge sezione) · 1662 (etichetta serata) · 2121 (badge su foto) · src/routes/candidati-ambiziosa.tsx:1850 (pill valore) · 2793/2858 (chip statistiche) · 3331/3395 (badge outline) · 3369 · src/components/landing/AmbiziosaTopbar.tsx:31
- **File:** `componenti/badge-pillole.html`

### Countdown

Numeri in Oswald lime (tabular-nums). Versione compatta (topbar e banner) con secondi e due punti; versione estesa senza secondi, con il punto centrale come separatore. Le unità sono nascoste sotto 640px nella versione compatta. Si aggiorna ogni secondo; prima del caricamento mostra 00.

**Varianti:** compatto (giorni:ore:minuti:secondi, separatore ':', unità nascoste sotto 640px) ed esteso (senza secondi, separatore '·'). **Stati:** prima del caricamento '00'; scaduto = tutto 00 (nella topbar Ambiziosa il countdown sparisce).

- **Fonte:** src/components/landing/Countdown.tsx
- **File:** `componenti/countdown.html`

### Evidenziatore (Highlight)

Una o più parole chiave dentro i titoli vengono 'evidenziate' con un rettangolo che si stende da sinistra a destra in 900ms quando entrano in vista (60% visibile). Su fondo chiaro: Mulberry al 25%. Su fondo scuro (variante dark): lime al 55%. Con prefers-reduced-motion è subito pieno.

**Varianti:** chiara (Mulberry 25%) e scura (lime 55%). **Stati:** nascosto (larghezza 0) → visibile quando il 60% entra in vista; con riduzione del movimento è subito pieno.

- **Fonte:** src/components/landing/Highlight.tsx
- **File:** `componenti/evidenziatore.html`

### Banner fisso in alto · Rule The Rules

Barra sticky Mulberry al 95% con sfocatura. Tre zone: data/luogo, countdown, bottone. Stati legati alle finestre di iscrizione: aperte ('Iscrizioni aperte ancora per'), ultima possibilità ('Ultima possibilità, ancora per') e chiuse ('Iscrizioni chiuse', bottone nascosto). Nelle pagine senza finestra (checkout, upsell) l'etichetta è 'L'evento inizia tra'.

**Stati:** iscrizioni aperte, ultima possibilità, iscrizioni chiuse (bottone invisibile), pagine senza finestra ('L'evento inizia tra'). **Layout:** mobile una riga compatta (info · countdown · bottone); da 640px griglia a 3 colonne.

- **Fonte:** src/components/landing/SiteTopbar.tsx · src/lib/signup-window.ts
- **File:** `componenti/topbar-rule-the-rules.html`

### Banner fisso in alto · Ambiziosa (con menu)

Header sticky della pagina di candidatura. Da 1024px una sola riga: badge posti, countdown 'Prezzo bloccato per', menu (da 1280px, altrimenti 'Menu' a tendina) e bottone con riflesso. Sotto 1024px due righe: badge + bottone, poi countdown + menu a tendina (details/summary, accessibile da tastiera). Stato 'aperto' = prezzo bloccato (countdown visibile); stato 'chiuso' = data passata, il countdown sparisce.

**Stati:** prezzo bloccato (countdown visibile) e prezzo scaduto (countdown nascosto); menu a tendina aperto/chiuso; voci del menu in hover. **Layout:** sotto 1024px due righe; da 1024px una riga con menu compresso; da 1280px menu completo; da 1536px etichetta 'Prezzo bloccato per'.

- **Fonte:** src/components/landing/AmbiziosaTopbar.tsx
- **File:** `componenti/topbar-ambiziosa.html`

### Hero · Rule The Rules (pagine / e /b)

Sfondo gradient-night con texture oro all'8% in mix-blend-overlay e righe di frasi giganti (Oswald 7-9vh, Mulberry al 4%) che scorrono in orizzontale. Contenuto centrato: riga kicker, titolo-logo in maiuscolo con testo a gradiente e sticker ruotato, lead in grassetto con evidenziatore, paragrafo. Sotto c'è il biglietto con il form (componente 'biglietto-form'). In /b il video sta prima del biglietto.

**Struttura:** kicker → titolo-logo + sticker → lead con evidenziatore → paragrafo → biglietto con form → h2 di aggancio → video. Altezza minima 700px. Variante /b: video prima del biglietto.

- **Fonte:** src/routes/index.tsx:1025-1282 · src/routes/b.tsx
- **File:** `componenti/hero-rule-the-rules.html`

### Hero · Ambiziosa (/candidati-ambiziosa)

Foto di Sharon e Carlotta sotto una velatura Mulberry che sfuma nel rosa in basso; da 1024px la foto occupa solo la metà destra (58%) con una sfumatura verso il testo. Testo allineato a sinistra: kicker lime, titolo-logo bianco con fascia verde che scorre sulle lettere (glow sweep, alone sfocato al 60% + strato nitido), sticker, pill valore, lead, paragrafi, CTA con riflesso e box di riprova sociale.

**Struttura:** kicker lime → titolo-logo con glow sweep + sticker → 4 pill valore → lead → paragrafi → CTA con riflesso → box riprova sociale → (video, nascosto se manca il link) → pannello 'Prima l'identità, poi i contenuti'. **Responsive:** foto a tutta larghezza (`object-position 8% 18%`) sotto 1024px, metà destra da 1024px.

- **Fonte:** src/routes/candidati-ambiziosa.tsx:1779-1932 · src/styles.css (animate-glow-sweep)
- **File:** `componenti/hero-ambiziosa.html`

### Biglietto con form (Systeme.io)

Box a forma di biglietto: gradiente Mulberry→lime, bordo lime 2px, bordo luminoso rotante attorno (ticket-border-glow), intagli semicircolari sul taglio, colonna foto con overlay e divisore tratteggiato. Dentro c'è il form nativo che invia a Systeme.io (POST https://systeme.io/embedded/44087792/subscription, target _top): nome, email, prefisso + WhatsApp, checkbox privacy obbligatoria, submit oro. Nessun iframe: lo stile è tutto del sito. Validazione solo nativa del browser (required); l'unico messaggio d'errore personalizzato è nella pagina di accesso alle registrazioni (testo lime, role=alert). Sotto 768px la foto va sopra e gli intagli si spostano ai lati.

**Struttura:** colonna foto (3/10) | colonna form (7/10) da 768px, impilate sotto. **Campi:** nome, email, prefisso internazionale (38 paesi) + WhatsApp, checkbox privacy obbligatoria, submit. **Stati dei campi:** vuoto, focus (bordo lime), compilato; errore solo nativo del browser (required) tranne la pagina di accesso (messaggio lime con role=alert). **Stati della finestra di iscrizione:** aperte (form), ultimissima possibilità (banner oro con countdown sopra il form), chiuse ('Le iscrizioni sono chiuse' al posto del form). **Integrazione Systeme.io:** form HTML nativo con `method=post`, `action=https://systeme.io/embedded/44087792/subscription` (VIP: VIP_FORM_ACTION in checkout-vip.tsx), `target=_top`; al submit il prefisso viene aggiunto al numero. Nessun iframe o script di Systeme: lo stile è tutto del sito.

- **Fonte:** src/routes/index.tsx:1111-1262 · src/components/landing/SignupForm.tsx · SignupWindow.tsx (stati) · src/routes/accedi-registrazioni.tsx:83-140 · src/routes/checkout.tsx:141
- **File:** `componenti/biglietto-form.html`

### Card e pannelli

Famiglie di card del sito: card chiara (bg-card/50, bordo border/70, sale di 4px e bordo Mulberry in hover), surface-card (card piena con bordo lime 22% e ombra profonda), pannello surface-cream (Mulberry, raggio 1.75rem, dentro sezioni chiare), card su fondo scuro (fondo bianco 6%, bordo bianco 14%, hover lime con ombra), card vetro (Mulberry 82% + blur), box informativo con immagine e divisore tratteggiato, card team, card 'per chi', card bonus.

**Varianti:** card chiara con emoji, pannello surface-cream, surface-card, card scura con numero gigante, card vetro numerata, riga attiva/inattiva su scuro, box informativo con immagine, card team, card 'per chi', card bonus. **Stati:** hover (−4px, bordo Mulberry su chiaro / lime + ombra su scuro; nel box informativo anche l'immagine ruota di −2°); riga attiva (bordo lime 50%, bianco 10%).

- **Fonte:** src/routes/index.tsx:1370 (problema) · 1517 (metodo) · 1570 (serate) · 2058 (pannello) · src/styles.css (surface-card, surface-cream) · src/components/landing/InstagramFollowBox.tsx · src/routes/candidati-ambiziosa.tsx:2392 (per chi) · 2958 (bonus) · 3070 (team)
- **File:** `componenti/card.html`

### Riprova sociale e testimonianze

Box avatar + 5 stelle (versione scura dentro il biglietto/hero, versione chiara nel checkout), coppia di screenshot WhatsApp inclinati con cornice bianca, colonne di screenshot e foto che scorrono in verticale con sfumature sopra e sotto, selettore dei settori con caso studio, esploratore delle video testimonianze (lista cliccabile + video + Prima/Dopo) e nota legale.

**Varianti:** box avatar + stelle (scuro/chiaro), screenshot inclinati, colonne in scorrimento (screenshot su chiaro, foto su scuro), selettore settori + caso studio, esploratore testimonianze, nota legale. **Stati:** voce selezionata (aria-pressed: fondo lime, testo Mulberry), hover dei settori, scorrimento in pausa al passaggio del mouse sugli screenshot delle wins.

- **Fonte:** src/routes/index.tsx:1172-1205, 1680-1700, 1810-1867 · src/components/landing/TestimonialsExplorer.tsx · src/routes/candidati-ambiziosa.tsx:2048-2118 (settori), 2258-2294 (wins), 3169 (nota) · src/routes/checkout.tsx:100
- **File:** `componenti/riprova-sociale.html`

### Video embed

Riquadro 16:9 con angoli rounded-2xl e bordo lime al 25%. Con Vimeo (autoplay muto di default, oppure solo al clic come nelle registrazioni) o YouTube (youtube-nocookie) è un iframe; senza video mostra la copertina al 55% con velatura rosa, cerchio play oro (ingrandisce in hover) e titolo. Nella pagina Ambiziosa il segnaposto è un riquadro Mulberry ed è nascosto finché non c'è il link.

**Varianti:** iframe Vimeo (autoplay muto di default o al clic), iframe YouTube nocookie, copertina segnaposto con poster, segnaposto Ambiziosa. **Stati:** hover sul segnaposto (poster ×1.05, play ×1.1).

- **Fonte:** src/components/landing/VideoFrame.tsx · AmbiziosaHeroVideo.tsx
- **File:** `componenti/video.html`

### Prezzi e piani di pagamento

Pagina Ambiziosa: banner unico Mulberry con pillola oro dei posti e countdown del prezzo bloccato (su una riga da 1280px), card Program (surface-card, prezzo Fraunces 3rem, badge 'Rateizzabile') e card Mentorship in evidenza (Mulberry, bordo lime, bordo luminoso rotante, nastro 'Il percorso più completo', prezzo 3.75rem, box 'solo con la Mentorship'), box dubbi con Matilde e WhatsApp. Pagine Rule The Rules: riepilogo del valore con prezzi barrati e prezzo finale 27€. /upsell-call: pallini dei posti (rossi occupati, verdi liberi).

**Varianti:** banner posti + countdown, card Program, card Mentorship in evidenza, box 'solo con la Mentorship', box dubbi + WhatsApp, riepilogo del valore (chiaro e dentro il biglietto), pallini dei posti. **Piani di pagamento:** solo il badge 'Rateizzabile fino a 4 mesi' (INSTALLMENT_MONTHS); non ci sono tabelle di rate. **Responsive:** card impilate (Mentorship per prima) sotto 1024px, affiancate (Program a sinistra, più bassa di 2.5rem) da 1024px.

- **Fonte:** src/routes/candidati-ambiziosa.tsx:3263-3515 · src/routes/index.tsx:2194-2269 (Ricapitolando) · src/routes/checkout.tsx:153-200 · src/routes/upsell-call.tsx:98-120
- **File:** `componenti/prezzi.html`

### FAQ e accordion

Sezione FAQ sempre su fondo scuro: titolo con evidenziatore, riga di supporto con email lime, accordion a una voce aperta per volta (Radix). Domanda: testo base, chevron che ruota di 180° all'apertura, sottolineatura in hover. Risposta: text-sm, interlinea relaxed, colore muted. Animazione di apertura/chiusura dell'altezza in 200ms ease-out.

**Stati:** chiuso, aperto (chevron ruotato di 180°), hover (domanda sottolineata). Una sola voce aperta alla volta (`type=single collapsible`). Animazione dell'altezza 200ms ease-out.

- **Fonte:** src/routes/index.tsx:2325-2366 · src/routes/candidati-ambiziosa.tsx:3517-3568 · src/components/ui/accordion.tsx
- **File:** `componenti/faq-accordion.html`

### Liste, chip delle call e dati

Liste con icona Check di Lucide (Mulberry su chiaro, lime su scuro, grigia per le voci 'già incluse'), liste con caratteri ✓ e ✕ (per chi è / non è, prima e dopo), elenchi numerati con numeri in Oswald 1.875rem, coppie etichetta/valore (dl) e chip delle call con foto, testo e numero. Non ci sono tabelle nel sito.

**Varianti:** check Mulberry (chiaro), check lime (scuro), check grigio (voci già incluse), liste ✓/✕ testuali, elenco numerato chiaro/scuro, chip call (chiaro, scuro, evidenziato), coppie etichetta/valore. Tabelle: non presenti.

- **Fonte:** src/routes/index.tsx:1394 (check), 1948 (✓/✕) · src/routes/candidati-ambiziosa.tsx:1242 (CallChip), 2814 (ol), 3003 (dl), 3346
- **File:** `componenti/liste.html`

### Confronti (per chi è, due direzioni, oggi e tra 4 mesi)

Tre schemi a due colonne usati per confrontare: (1) 'Per chi è / per chi non è' su fondo scuro, a sinistra una surface-card con ✓ Mulberry, a destra testo sbiadito con ✕; (2) 'Due direzioni': card chiara con ✕ grigie contro card con foto e overlay nero, ✓ lime e CTA; (3) 'Oggi / Tra 4 mesi' dentro un pannello surface-cream, con badge oro in testa a ogni colonna.

**Varianti:** per chi è / non è, due direzioni con CTA, oggi / tra 4 mesi.

- **Fonte:** src/routes/index.tsx:1931-1975, 2135-2192 · src/routes/candidati-ambiziosa.tsx:2298-2378
- **File:** `componenti/confronti.html`

### Step numerati e timeline

Card delle serate e dei 4 step: card su fondo scuro con etichetta oro a cavallo del bordo superiore, numero gigante decorativo, colonna immagine/illustrazione e colonna con sottotitolo in Fraunces e checklist lime. Percorso verticale 'Quello che succede dopo' con badge oro con icona e chevron Mulberry tra le card. La pagina Ambiziosa ha anche un grafico SVG che si disegna con lo scroll (AmbiziosaJourney): non riprodotto qui perché dipende da JavaScript complesso, ma i suoi colori sono nei token (color-journey-pain, color-primary).

**Varianti:** card serata/step (foto o illustrazione + checklist) con etichetta oro, percorso verticale con chevron, grafico a scorrimento (solo nella pagina, non riprodotto). **Stati:** hover dell'intera card (anche l'etichetta sale di 4px).

- **Fonte:** src/routes/index.tsx:1565-1669 · src/routes/candidati-ambiziosa.tsx:2221-2246 (percorso), 2527-2585 (4 step) · src/components/landing/AmbiziosaJourney.tsx
- **File:** `componenti/step-timeline.html`

### Citazioni e frasi in evidenza

Tre modi di dare peso a una frase: citazione con filetto lime a sinistra e corsivo (pannello Cos'è), frase d'effetto in Fraunces 1.25-1.5rem dentro il testo, nota legale piccola con filetto lime al 45%. Non esiste un elemento <blockquote> nel sito.

**Varianti:** citazione con filetto, frase d'effetto Fraunces, nota legale. Blockquote: non presente.

- **Fonte:** src/routes/index.tsx:1294-1309 · src/routes/candidati-ambiziosa.tsx:2464, 3169
- **File:** `componenti/citazioni.html`

### Call to action di fine sezione

Rule The Rules: CTA oro centrata a 3.5rem dal contenuto, seguita dall'avviso 'live' con pallino rosso pulsante e testo al 70% (eredita il colore della sezione). Ambiziosa: CtaBox, una sezione chiara con frase di contesto (lead semibold) e CTA con riflesso, sempre con lo stesso testo; dentro i pannelli scuri usa la variante dark.

**Varianti:** CTA + avviso live (Rule The Rules), CtaBox con frase di contesto (Ambiziosa, chiaro e dentro pannello scuro).

- **Fonte:** src/routes/index.tsx:1341-1344 · src/components/landing/LiveRegistrationsNotice.tsx · src/routes/candidati-ambiziosa.tsx:1739 (CtaBox), 2366
- **File:** `componenti/cta-fine-sezione.html`

### Footer

Footer Mulberry con testi legali in text-xs muted (disclaimer Meta, disclaimer sui risultati, garanzia di rimborso opzionale), filetto, ragione sociale in Oswald maiuscolo, P.IVA, indirizzo e email lime. La frase sulla garanzia è nascosta nelle pagine Ambiziosa e registrazioni.

**Varianti:** con e senza la frase sulla garanzia di rimborso (`showRefundGuarantee`).

- **Fonte:** src/components/landing/SiteFooter.tsx
- **File:** `componenti/footer.html`

### Biglietto dell'evento (EventTicket)

Biglietto di conferma nella thank-you: gradiente Mulberry→lime, bordo lime 2px, ombra oro + alone, colonna destra separata da tratteggio con due fori rosa. In hover ruota di -2° e cresce del 2% (300ms ease-out).

**Stati:** normale, hover (ruota −2°, scala 1.02).

- **Fonte:** src/components/landing/EventTicket.tsx
- **File:** `componenti/biglietto-evento.html`

### Elementi decorativi e trattamento foto

Pattern a puntini (Mulberry 22%, griglia 26px), foto di sezione a bassa opacità sfumata ai bordi con mask-image (SectionPhoto), badge circolare con testo che ruota in 30s, freccia SVG che si sdoppia verso le due versioni, mini-mockup bianchi inclinati (carta identitaria, piano editoriale), screenshot inclinati ±5°, foto con overlay nero per il testo bianco e foto a tutta sezione con velatura Mulberry.

Pattern a puntini, foto di sezione (multiply/luminosity), badge circolare rotante, freccia sdoppiata, mini-mockup.

- **Fonte:** src/routes/index.tsx:1351-1359 · src/components/landing/SectionPhoto.tsx · src/routes/candidati-ambiziosa.tsx:1709 (badge circolare), 2767 (freccia) · src/components/landing/SessionHighlight.tsx
- **File:** `componenti/decorazioni.html`

### Barra di annuncio (thank-you)

Barra piena larghezza Mulberry con testo bianco semibold centrato, in cima alla thank-you. Non ci sono pop-up né modali nel sito.

Una sola variante. Pop-up e modali: non presenti.

- **Fonte:** src/routes/thank-you.tsx:34-39
- **File:** `componenti/banner-annuncio.html`


### Componenti che non esistono nel sito

- **Pop-up e modali:** non presenti. I componenti `dialog`, `alert-dialog`, `sheet`, `drawer` e `popover` esistono in `src/components/ui/` ma nessuna pagina li usa.
- **Tabelle:** non presenti.
- **Tab, slider, carousel, tooltip, breadcrumb, paginazione:** non presenti nelle pagine.
- **Toast e notifiche:** non presenti.

---

## 8. Movimento

| Token | Valore | Uso | Fonte |
| --- | --- | --- | --- |
| `--duration-default` | `150ms` | Durata Tailwind di default (transition senza duration-*) | `Tailwind` |
| `--duration-fast` | `200ms` | Hover dei bottoni (sollevamento), accordion | `src/components/landing/CtaButton.tsx:23` |
| `--duration-base` | `300ms` | Hover delle card (29 usi) | `src/routes/index.tsx:1370` |
| `--duration-slow` | `500ms` | Zoom del poster video, bolle del Journey | `src/components/landing/VideoFrame.tsx:71` |
| `--duration-highlight` | `900ms` | Evidenziatore che si stende | `src/components/landing/Highlight.tsx:42` |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing di default delle transizioni Tailwind | `Tailwind` |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | ease-out: evidenziatore, EventTicket, accordion | `Tailwind` |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | ease-in-out delle animazioni a ciclo (shine, glow) | `src/styles.css:417` |
| `--animation-shine` | `2.6s` | Riflesso sui bottoni (ShineSweep) | `src/styles.css:417` |
| `--animation-glow-sweep` | `4s` | Fascia verde sulle lettere di AMBIZIOSA | `src/styles.css:447` |
| `--animation-border-spin` | `4s` | Bordo luminoso rotante | `src/styles.css:243` |
| `--animation-marquee-x` | `140s` | Righe di testo dell'hero RTR (260s sotto 768px) | `src/styles.css:309` |
| `--animation-marquee-y` | `32s` | Colonne di foto (default; nella pagina 28s + 6s per colonna, wins 70/80s) | `src/styles.css:389` |
| `--animation-spin-badge` | `30s` | Badge circolare 'Dall'ambizione alla carriera' | `src/routes/candidati-ambiziosa.tsx:1714` |
| `--hover-lift-sm` | `-0.125rem` | hover:-translate-y-0.5 dei bottoni | `src/components/landing/CtaButton.tsx:23` |
| `--hover-lift-md` | `-0.25rem` | hover:-translate-y-1 delle card | `src/routes/index.tsx:1370` |

**Effetti allo scroll:**
- **Evidenziatore** che si stende quando il titolo è visibile al 60% (`Highlight.tsx`).
- **Grafico "Ecco cosa succede quando scegli Ambiziosa":** si disegna con lo scroll, con la linea viola chiaro che diventa lime e le bolle che compaiono (opacità + `translateY(12px) scale(.95)` → normale, 500ms, `AmbiziosaJourney.tsx`).
- **Colonna sticky** di "Cosa ti porti a casa": segue la riga attiva (300ms ease-out, `.takeaway-track`).
- **Scroll morbido** alle ancore (`scroll-behavior: smooth` e `scrollIntoView`).
- Il componente `Reveal` (`src/components/landing/Reveal.tsx`) **non anima nulla**: è un `<div>` che ignora la prop `delay`. Le comparse allo scroll non sono attive.

**Animazioni continue:**
- riflesso sui bottoni (2.6s);
- fascia verde su AMBIZIOSA (4s);
- bordo luminoso rotante (4s, lineare);
- righe di frasi dell'hero RTR (140s, 260s sotto 768px);
- colonne di foto e screenshot (28-80s; quelle di screenshot si fermano al passaggio del mouse);
- badge circolare (30s);
- pallino "live" (`animate-ping`, 1s).

**Hover:**
- bottoni: `-translate-y-0.5`;
- card: `-translate-y-1`;
- immagini dei box: `-rotate-2`;
- poster video: `scale-105`, play `scale-110`;
- EventTicket: `-rotate-2 scale-[1.02]`;
- Workbook: `-translate-y-2`;
- menu e link: cambio colore.

**`prefers-reduced-motion: reduce`:**
- **si fermano:**
  - scroll morbido (diventa istantaneo);
  - righe e colonne in scorrimento;
  - riflesso e fascia verde (anche nascosti);
  - bordo luminoso;
  - badge circolare (`motion-reduce:animate-none`);
  - grafico Journey (mostrato già completo);
  - evidenziatore (subito pieno).
- **non si fermano:**
  - pallino `animate-ping`;
  - transizioni di hover;
  - apertura dell'accordion;
  - `animate-in` di `TakeawayVisual`.

---

## 9. Accessibilità

**Cosa c'è:**
- **Testi alternativi:** tutte le 87 immagini hanno `alt`. 17 hanno `alt=""` con `aria-hidden` perché sono decorative (texture, avatar ripetuti, galleria).
- **Menu compresso** della topbar Ambiziosa con `<details>/<summary>`: si apre e si chiude da tastiera senza JavaScript.
- **Navigazione** con `aria-label="Navigazione della pagina"`.
- **Bottoni con `aria-pressed`:** selettore settori, esploratore testimonianze.
- **Messaggio d'errore** con `role="alert"`.
- **Elementi decorativi** con `aria-hidden` (icone, intagli, numeri giganti, sfumature).
- **Bottone della topbar a iscrizioni chiuse:** reso invisibile, con `aria-hidden` e `tabindex=-1`.
- **Movimento:** `prefers-reduced-motion` rispettato quasi ovunque (vedi Movimento).

**Problemi trovati:**

1. **Lingua sbagliata:** `<html lang="en">` (`src/routes/__root.tsx:113`), ma tutti i contenuti sono in italiano. Gli screen reader leggono con la pronuncia inglese.
2. **Focus non visibile in modo coerente:**
   - nessuno stile `focus-visible` in tutto il sito;
   - gli input hanno `outline-none` e mostrano solo il bordo lime, che su fondo rosa ha contrasto 1.09:1 ed è praticamente invisibile (`SignupForm.tsx:84, 91, 99, 111`, `accedi-registrazioni.tsx:20`).
3. **Contrasti insufficienti** (vedi tabella 2.5):
   - testo bianco sul bottone WhatsApp: 1.98:1;
   - icone ✕ a `ink-muted/50`: 2.99:1;
   - placeholder degli input: 3.11:1;
   - pallini rossi dei posti su Mulberry: 2.54:1, sotto il 3:1 richiesto per gli elementi grafici.
4. **Target touch piccoli:**
   - bottone della topbar su mobile: `px-2 py-1.5`, testo 10px, circa 26px di altezza;
   - "Menu" compresso: circa 26px;
   - link del menu a tendina: circa 26px;
   - tutti sotto i 44px consigliati (24px è il minimo WCAG 2.2 AA, quindi passano di poco).
5. **Testo molto piccolo:** 8-10px in badge, riga sotto i bottoni (9px su mobile) e mini-mockup.
6. **Gerarchia dei titoli:**
   - nella pagina Ambiziosa il primo titolo dopo l'h1 è un **h3** ("Prima l'identità, poi i contenuti", `candidati-ambiziosa.tsx:1965`) prima di qualsiasi h2;
   - i titoli dei 4 step sono h3 dentro un'etichetta oro posizionata sopra la card (`:2576`);
   - nella thank-you, gli h2 sono `text-2xl font-semibold`, quelli delle altre pagine `text-3xl` regolari.
7. **Countdown:**
   - non ha `aria-live` né un'etichetta testuale accessibile;
   - su mobile le unità (giorni, ore…) sono nascoste e restano solo i numeri.
8. **Video Vimeo:** sono in autoplay muto di default (`VideoFrame.tsx:30`).
9. **Righe "cliccabili"** di "Cosa ti porti a casa": hanno `tabIndex=0` ma sono `div` senza ruolo (`index.tsx:1907`).

---

## 10. Pagine e template

| URL | File | Meta title | Topbar | Footer |
| --- | --- | --- | --- | --- |
| `/` | `src/routes/index.tsx` | Rule The Rules 2026: rompi le regole, costruisci la tua identità | SiteTopbar con finestra di iscrizione | Con garanzia |
| `/b` | `src/routes/b.tsx` | Rule The Rules 2026: rompi le regole, costruisci la tua identità | SiteTopbar con finestra di iscrizione | Con garanzia |
| `/candidati-ambiziosa` | `src/routes/candidati-ambiziosa.tsx` | Candidatura Ambiziosa — Program e Mentorship | AmbiziosaTopbar | Senza garanzia |
| `/registrazioni` | `src/routes/registrazioni.tsx` | Recupera le registrazioni dell’evento — Rule The Rules 2026 | Non presente | Senza garanzia |
| `/accedi-registrazioni` | `src/routes/accedi-registrazioni.tsx` | Accedi alle registrazioni — Rule The Rules 2026 | Non presente | Senza garanzia |
| `/checkout` | `src/routes/checkout.tsx` | Completa la tua iscrizione — Rule The Rules 2026 | SiteTopbar | Con garanzia |
| `/checkout-vip` | `src/routes/checkout-vip.tsx` | Completa l’iscrizione VIP — Rule The Rules 2026 | SiteTopbar | Con garanzia |
| `/thank-you` | `src/routes/thank-you.tsx` | Iscrizione confermata — Rule The Rules 2026 | Barra di annuncio | Con garanzia |
| `/thank-you-vip` | `src/routes/thank-you-vip.tsx` | Sei VIP! — Rule The Rules 2026 | Barra di annuncio | Con garanzia |
| `/vip` | `src/routes/vip.tsx` | Upgrade VIP: disponibile solo qui \| Rule The Rules 2026 | Non presente | Con garanzia |
| `/upsell-call` | `src/routes/upsell-call.tsx` | Call di implementazione 1:1 \| Rule The Rules 2026 | Non presente | Con garanzia |
| `/upsell-story-identity` | `src/routes/upsell-story-identity.tsx` | Rule The Rules 2026: il prossimo passo dopo Story Identity | SiteTopbar | Non presente |
| `/upsell-story-identity-2` | `src/routes/upsell-story-identity-2.tsx` | Rule The Rules 2026: tutto quello che ti porti a casa | SiteTopbar | Con garanzia |
| (404) | `src/routes/__root.tsx` | Page not found (in inglese) | - | - |
| (errore) | `src/routes/__root.tsx` | This page didn't load (in inglese) | - | - |

### 10.1 Sequenza delle sezioni

**`/` Rule The Rules (pagina A)** · `src/routes/index.tsx`
1. Topbar con finestra di iscrizione
2. **Hero** (gradient-night + texture + frasi in scorrimento): kicker, titolo-logo + sticker, lead, paragrafo, **biglietto con form Systeme.io**, h2 di aggancio, video di presentazione
3. **Cos'è**: pannello surface-cream con citazione, frasi d'effetto, foto, CTA
4. **Problema**: pattern a puntini, griglia di 6 card chiare con emoji, h3, testo con liste di check e foto sticky
5. **Il metodo**: sezione scura con foto e velatura, 3 card vetro numerate, CTA
6. **Cosa ottieni: le 3 serate**: card scure con etichetta oro, numero gigante, mockup, checklist, "chi ti guida"; box bonus community WhatsApp
7. **Chi guida le serate**: 2 relatori (foto 16:9, nome, ruolo, testo), CTA
8. **Galleria eventi**: 5 colonne di foto in scorrimento verticale con sfumature
9. **Cosa ti porti a casa**: illustrazione sticky + righe evidenziabili, CTA
10. **Per chi è / per chi non è**
11. **Riprova sociale**: esploratore video testimonianze, CTA
12. **Bonus: il Workbook**: copertina inclinata, badge, card dei giorni
13. **Chi sono**: pannello surface-cream con storia e foto con badge
14. **La scelta**: due direzioni, CTA
15. **Ricapitolando**: card con foto e value stack, 27€, CTA
16. **Garanzia di rimborso**: immagine, testo, box "Parola di Carlotta", CTA
17. **FAQ**: sezione scura con accordion
18. Footer

**`/b` Rule The Rules (pagina B):** identica alla A tranne l'hero, dove il video di presentazione sta prima del biglietto con il form.

**`/candidati-ambiziosa`** · `src/routes/candidati-ambiziosa.tsx`
1. AmbiziosaTopbar
2. **Hero** con foto Sharon e Carlotta, value pill, lead, CTA, riprova sociale; video nascosto finché non c'è il link; pannello scuro "Prima l'identità, poi i contenuti" con checklist
3. **Riprova sociale**: testo + selettore settori con caso studio
4. **Reframe del problema**: scura con foto specchiata, lista ✕, frase d'effetto
5. **Quello che succede dopo**: percorso verticale + colonne di screenshot delle wins
6. **Oggi / Tra 4 mesi**: pannello surface-cream con CtaBox scuro
7. **Per chi è**: card surface-cream per professione con caso, esempi
8. **CtaBox**
9. **I 4 step** (`#programma`): foto di sezione, card scure con etichetta oro, illustrazioni React
10. **Il mio obiettivo è renderti unica**: foto con badge circolare
11. **Il principio mancante**: profilo prima/dopo, testo, screenshot di insight e fatturato
12. **Grafico Journey** che si disegna con lo scroll
13. **Le due versioni** (`#versioni`): pannello con foto, freccia sdoppiata, card Program e Mentorship con elenchi numerati e chip delle call
14. **CtaBox**
15. **Bonus** (`#bonus`): 4 card bonus
16. **Il team**: 2 card team
17. **Video testimonianze** (`#testimonianze`), nota legale, CTA
18. **Chi sono**: come nella home
19. **Prezzi** (`#prezzi`): banner posti/countdown, card Program e Mentorship, box dubbi con Matilde e WhatsApp
20. **FAQ** (`#faq`)
21. Footer senza garanzia

**`/registrazioni`** (accesso protetto da password)
1. Hero gradient-night con texture
2. 3 card delle registrazioni: video Vimeo o copertina "Video in arrivo"
3. "Il prossimo passo: Ambiziosa", visibile dal 6 ottobre 20:30: badge, titolo, testo, 4 step, due versioni, CTA
4. Footer senza garanzia

**`/accedi-registrazioni`**
1. Hero con box biglietto e form email/password, errore e stato "Verifica in corso…"
2. Footer

**`/checkout`**
1. SiteTopbar
2. Intro: badge, h1, testo, riprova sociale chiara
3. Biglietto: riepilogo ordine e value stack | form Systeme.io
4. Garanzia
5. FAQ rapide (scura)
6. Ultimo richiamo
7. Footer

**`/checkout-vip`**
1. SiteTopbar
2. Intro
3. Biglietto con form VIP
4. Footer

**`/thank-you`**
1. Barra di annuncio
2. Conferma: cerchio check oro, h1, testo, video, CTA Workbook
3. EventTicket
4. 4 box informativi: calendario, WhatsApp, questionario, Instagram
5. Footer

**`/thank-you-vip`**
1. Barra di annuncio
2. Conferma
3. EventTicket
4. Sezione scura "Come accedere al VIP": righe con icona e bottone oro piccolo
5. Box finali
6. Footer

**`/vip`** (upsell)
1. Intro: badge, h1, video, testo
2. Una sezione per ogni bonus, alternando scura e chiara, con foto e didascalia sfocata, testo, valore barrato, scelta CTA + "No, non mi interessa"
3. Recap finale
4. Footer

**`/upsell-call`**
1. Intro: badge, h1, video, pallini dei posti, testo, 2 card relatori con foto, scelta CTA + rifiuto
2. Footer

**`/upsell-story-identity`**
1. SiteTopbar
2. Ponte "Aspetta un secondo prima di continuare"
3. Hero RTR
4. Sezioni della home da "Cos'è" a "Chi sono"

**`/upsell-story-identity-2`**
1. SiteTopbar
2. Ricapitolando
3. Garanzia
4. FAQ
5. Footer

### 10.2 Template riutilizzabili

- **Pagina di vendita lunga:**
  1. topbar sticky con countdown;
  2. hero con titolo-logo;
  3. alternanza di sezioni chiare/scure;
  4. ogni 2-3 sezioni una CTA di fine sezione;
  5. riprova sociale;
  6. chi sono;
  7. prezzo;
  8. garanzia;
  9. FAQ scura;
  10. footer.
- **Checkout:**
  1. topbar;
  2. intro centrata (badge + h1 con evidenziatore + testo + riprova sociale);
  3. biglietto a due colonne (riepilogo | form);
  4. garanzia;
  5. FAQ;
  6. footer.
- **Thank-you:**
  1. barra di annuncio;
  2. conferma con cerchio oro e video;
  3. biglietto evento;
  4. box informativi in colonna;
  5. footer.
- **Upsell (one-click):** sezione unica centrata `max-w-4xl` con badge "Offerta esclusiva", h1, video, prova di scarsità, CTA grande + link di rifiuto.
- **Area riservata:**
  1. hero gradient-night con box biglietto;
  2. contenuti in card scure;
  3. footer senza garanzia.

---

## 11. Tono visivo e regole d'uso

**Lo stile in poche righe.**
- **Editoriale, caldo e "da evento".** Un serif espressivo (Fraunces) per le frasi importanti, un condensed in maiuscolo spaziato (Oswald) per etichette e bottoni, un sans morbido (Poppins) per il testo.
- **Tre colori:**
  - rosa pastello per respirare;
  - Mulberry per i momenti intensi;
  - lime/oro per tutto ciò che si deve cliccare o notare.
- **Foto vere di Carlotta** sul palco e con le persone, mai stock.
- **Dettagli "da biglietto":** intagli, tratteggi, bordo luminoso, sticker ruotati.
- **Testo in prima persona, diretto,** con una parola chiave evidenziata in ogni titolo e un grassetto in ogni paragrafo.

**Do**
- Alterna sezioni rosa e Mulberry. Su Mulberry usa `ink`/`ink-muted` per il testo e `<Highlight dark>` per le evidenziazioni (`src/routes/index.tsx:1874`).
- Evidenzia 1-4 parole chiave per titolo con `<Highlight>` invece di cambiarne il colore (`src/routes/index.tsx:1742`).
- Metti in grassetto (`font-semibold` + colore pieno) la frase che conta in ogni paragrafo (`src/routes/index.tsx:1104`).
- Usa il gradiente oro per ogni azione: bottoni, badge, cerchi icona. Testo sempre Mulberry, maiuscolo Oswald.
- Chiudi le sezioni con una CTA oro centrata (`mt-14`) e, per Rule The Rules, l'avviso live sotto.
- Usa le foto con `object-position` tarato. Sotto il testo bianco metti un overlay nero dal basso.
- Usa i titoli in maiuscolo/minuscolo normale; il maiuscolo è riservato a Oswald e ai titoli-logo.
- Usa lo stesso testo per le CTA ripetute della stessa pagina, per esempio "Candidati ora · Prezzo bloccato fino al 16 ottobre" (`src/lib/ambiziosa-config.ts`).

**Don't**
- Non usare il lime come testo su fondo rosa: contrasto 1.09:1.
- Non usare `text-foreground` o `text-muted-foreground` nelle sezioni scure senza ridefinire le variabili come fanno topbar, footer e FAQ (`style={{ "--foreground": "var(--secondary-foreground)" }}`).
- Non introdurre colori estranei alla palette. Le uniche eccezioni nel sito sono il verde WhatsApp e i pallini dei posti.
- Non usare `<Highlight>` senza `dark` su fondo scuro: il Mulberry al 25% sparisce.
- Non scrivere titoli h2/h3 in maiuscolo.
- Non creare bottoni secondari colorati: l'alternativa al bottone oro è un link sottolineato (es. "No, non mi interessa").

---

## 12. Incoerenze trovate

Ordinate per importanza. Nessuna è stata corretta nel sito; per ognuna c'è una proposta di valore ufficiale.

Totale: **20 incoerenze**. Le prime tre sono le più importanti.

### 1. Identità del sito ancora "Lovable": favicon, meta e lingua
- **Dove:**
  - `public/favicon.ico` è il cuore di Lovable;
  - `src/routes/__root.tsx:82-89`: title "Lovable App", description "Lovable Generated Project", author "Lovable", og:title/og:description uguali, twitter:site "@Lovable";
  - `src/routes/__root.tsx:113`: `<html lang="en">`.
- **Effetto:**
  - nelle schede del browser e nelle anteprime social, quando una pagina non sovrascrive i meta, compare Lovable;
  - la lingua è dichiarata inglese.
- **Proposta:**
  - favicon con un monogramma del brand (Mulberry/lime);
  - meta di default "Carlotta Sgarra" con og:image dedicata;
  - `lang="it"`.

### 2. Lo stesso colore scritto a mano invece del token
- **Dove:** `oklch(0.85 0.03 40)` (= `--ink-muted`) è ripetuto **19 volte** come override di `--muted-foreground`:
  - `SiteTopbar.tsx:33`
  - `AmbiziosaTopbar.tsx:141`
  - `SiteFooter.tsx:12`
  - `checkout.tsx:156, 285`
  - `checkout-vip.tsx:83`
  - `upsell-story-identity-2.tsx:271`
  - `b.tsx:1131, 2321`
  - `index.tsx:1124, 2332`
  - `candidati-ambiziosa.tsx:3298, 3525`
  - `registrazioni.tsx:141, 162`
  - `vip.tsx:136, 220`
  - `accedi-registrazioni.tsx:93`
- **Altri valori scritti a mano:**
  - `#EFEFEF` (= `--secondary-foreground`) in `AmbiziosaHeroVideo.tsx:35`;
  - `#22c55e` in `upsell-call.tsx:110`;
  - `#25D366`/`#1EBE5D` in `candidati-ambiziosa.tsx:3502`.
- **Proposta:** valore ufficiale `var(--ink-muted)` (`#e0c8bf`). Una classe/utility "contesto scuro" che ridefinisca in un punto solo `--foreground`, `--muted-foreground` e `--border` (oggi ripetuti a mano in topbar, footer, FAQ, biglietti).

### 3. Il peso Oswald 700 è usato ma non caricato
- **Dove:** Google Fonts carica Oswald 400/500/600 (`__root.tsx:100`), ma `font-condensed` + `font-bold` (700) compare **13 volte**:
  - `CtaButton.tsx:30` (etichetta di ogni CTA)
  - `AmbiziosaCtaButton.tsx:63`
  - `SiteTopbar.tsx:38`
  - `index.tsx:1054, 2121`
  - `b.tsx:1054, 2110`
  - `candidati-ambiziosa.tsx:2398, 3249`
  - `thank-you-vip.tsx:155`
  - `upsell-call.tsx:100`
  - `upsell-story-identity.tsx:939, 1837`
- **Effetto:** il browser simula il grassetto (faux bold): il risultato cambia da browser a browser.
- **Pesi caricati ma mai usati:** Fraunces 900, Poppins 300.
- **Proposta:** caricare Oswald 700 (è il peso dei bottoni, quindi il più visibile) e togliere Fraunces 900 e Poppins 300 dall'URL.

### 4. Due bianchi diversi su Mulberry
- **Dove:**
  - il testo su fondo scuro usa `ink` (`#efefef`) nella maggior parte delle sezioni;
  - `text-white` (`#ffffff`) è usato 22 volte, non solo su foto: barra di annuncio (`thank-you.tsx:35`, `thank-you-vip.tsx:71`), card posti (`upsell-call.tsx:100, 115`), suggerimento dell'esploratore testimonianze (`TestimonialsExplorer.tsx:37`).
- **Proposta:** `ink` per il testo su Mulberry; `#fff` solo sul testo sopra foto con overlay nero.

### 5. Ombre nere scritte in 8 versioni diverse
- **Dove:** oltre al token `--shadow-deep` (`0 30px 70px -30px` nero 85%):
  - `0_20px_40px_-12px/.45`: screenshot, `index.tsx:1689`, `WhatsAppGroupBox.tsx:17`, `AmbiziosaProofCards.tsx:11`;
  - `0_24px_60px_-20px/.55`: hover delle card scure, `index.tsx:1570`, `candidati-ambiziosa.tsx:2532, 2959`, `registrazioni.tsx:273`;
  - `0_10px_24px_-8px/.5`: etichette serata, `index.tsx:1662`, `Workbook.tsx:19`;
  - `0_20px_45px_-20px/.35`: hover box informativi, `AddToCalendarBox.tsx:77` e altri 3;
  - `0_20px_45px_-15px/.45`: mockup, `SessionHighlight.tsx:11`, `AmbiziosaPillarVisual.tsx:20`;
  - `0_20px_45px_-25px/.45`: `candidati-ambiziosa.tsx:2277`;
  - `0_20px_45px_-20px/.6`: `candidati-ambiziosa.tsx:2968`;
  - `0_30px_70px_-20px/.55`: `TakeawayVisual.tsx:4`.
- **Proposta:** tre livelli ufficiali.
  - `shadow-card-hover` per gli hover su chiaro;
  - `shadow-screenshot` per elementi inclinati e mockup (assorbe `-15px`, `-20px/.6`, `-25px`);
  - `shadow-card-lift` per gli hover su scuro (assorbe `30px_70px`).
  - Più `shadow-deep` e `shadow-gold` come oggi.

### 6. Raggio dei pannelli grandi: tre valori
- **Dove:**
  - `1.75rem` inline in 17 punti (pannelli surface-cream, Mentorship, box dubbi: `index.tsx:1288`, `candidati-ambiziosa.tsx:2745, 3367`…);
  - `rounded-[2rem]` per il biglietto con form (`index.tsx:1112`, `checkout.tsx:144`, `accedi-registrazioni.tsx:82`, `vip.tsx:209`…);
  - `1rem` per le card "per chi" (`candidati-ambiziosa.tsx:2394`);
  - `rounded-2xl` per le altre card.
- **Proposta:**
  - `--radius-panel: 1.75rem` per pannelli e card in evidenza (è il più usato);
  - `--radius-2xl` per le card normali;
  - portare il biglietto a 1.75rem e le card "per chi" a `rounded-2xl`.

### 7. Bottoni principali con misure e lettering diversi
- **Dove:**
  - **CtaButton:** `px-4 py-3 sm:px-6 sm:py-5`; etichetta Oswald **700**, `text-sm sm:text-base`, `tracking 0.04em`; riga sotto `whitespace-nowrap` (`CtaButton.tsx:23, 30, 33`).
  - **Submit del form:** `px-6 py-4` fisso; etichetta Oswald **400**, `text-base sm:text-lg`, `tracking 0.1em → 0.14em` (`SignupForm.tsx:130, 137`; `accedi-registrazioni.tsx:135`).
  - **AmbiziosaCtaButton:** riga sotto `text-balance` invece di `nowrap` (`AmbiziosaCtaButton.tsx:66`).
  - **WhatsApp:** `px-6 py-4`, Oswald 400 `tracking 0.12em` (`candidati-ambiziosa.tsx:3502`).
  - **Oro piccolo:** `px-4 py-2.5` 700 `tracking 0.06em` (`thank-you-vip.tsx:155`).
- **Proposta:** CtaButton come riferimento (è il più usato: 30+ istanze). Submit e WhatsApp con le stesse misure e lo stesso lettering. Riga sotto con `text-balance` (va a capo bene su mobile).

### 8. Badge oro con 8 combinazioni di padding/spaziatura e ombra opzionale
- **Dove:**
  - `px-4 py-1.5 tracking-[0.2em]` (23 usi, il più comune);
  - `px-5 py-2 0.25em` (`index.tsx:1156`, 3 usi);
  - `px-4 py-2 0.1em → sm:0.25em` (`index.tsx:2009`);
  - `px-3 py-1 0.15em` (9 usi, es. `AmbiziosaTopbar.tsx:31`);
  - `px-4 py-1.5 0.08em` bold (5 usi);
  - `px-2.5 py-1 0.12em`, `px-2.5 py-0.5 0.15em`, `px-5 py-2 0.2em`.
- **Ombra:** alcuni badge non hanno `shadow-gold` (`candidati-ambiziosa.tsx:3304, 3475`).
- **Proposta:** due taglie ufficiali, sempre con `shadow-gold`.
  - **Standard:** `px-4 py-1.5`, `0.2em`, `10px → 12px`.
  - **Piccola:** `px-3 py-1`, `0.15em`.

### 9. Tre ricette diverse per le card su fondo scuro
- **Dove:**
  - fondo `background 6%` + bordo `background 14%` (serate, step, bonus: `index.tsx:1570-1572`, `candidati-ambiziosa.tsx:2959`);
  - `bg-white/5` + `border-white/10` (`index.tsx:1902-1903`, `candidati-ambiziosa.tsx:2000`, `thank-you-vip.tsx:145`);
  - `secondary 35%` + bordo `primary 30%` (box "chi ti guida", pill).
- **Proposta:**
  - `tint-card-on-dark` / `tint-card-border-on-dark` per le card;
  - `tint-panel-on-dark` per i box informativi dentro le card;
  - eliminare `white/5`-`white/10`.

### 10. Liste: icona e simboli testuali mescolati, colori del check diversi
- **Dove:**
  - icona Lucide `Check` in quasi tutte le liste;
  - caratteri `✓`/`✕` in 13 punti (`index.tsx:1951, 1966, 2153, 2178`, `candidati-ambiziosa.tsx:2173, 2331, 2357`, `b.tsx`, `upsell-story-identity.tsx`).
- **Colore del check:**
  - `text-secondary` (`index.tsx:1396`);
  - `gold-deep` inline (`index.tsx:1620`);
  - `ink-muted/60` (`candidati-ambiziosa.tsx:3415`).
- **Proposta:**
  - icona `Check` / `X` di Lucide ovunque;
  - colore Mulberry su chiaro, lime su scuro, `ink-muted/60` solo per "già incluso".

### 11. Padding verticale e margine laterale delle sezioni non uniformi
- **Dove:**
  - sezioni standard `px-5 py-20` (`index.tsx:1360`);
  - sezioni con pannello `px-4 sm:px-8 py-10 sm:py-14` (`index.tsx:2058`);
  - FAQ/garanzia `px-4 sm:px-8 py-14 sm:py-20` (`index.tsx:2272, 2327`);
  - hero Ambiziosa `pb-16 pt-10 sm:pb-20 sm:pt-20`;
  - CtaBox `-mt-6 pb-20` (`candidati-ambiziosa.tsx:1742`).
- **Effetto:** il margine laterale cambia tra 20px e 16-32px da una sezione all'altra.
- **Proposta:**
  - gutter unico `px-5`;
  - padding `py-20` per tutte le sezioni;
  - `py-14 sm:py-20` solo per le pagine brevi (checkout, thank-you).

### 12. Titoli di pari livello con pesi e misure diversi
- **Dove:**
  - gli h2 di sezione sono Fraunces 400 `text-3xl sm:text-4xl` (67 casi);
  - nella thank-you e nelle pagine VIP gli h2 sono `text-2xl font-semibold sm:text-3xl` (`thank-you.tsx:96, 109`, `thank-you-vip.tsx:118, 138, 176`, `vip.tsx:227`);
  - gli h3 sono a volte 600 (`index.tsx:1386`, `candidati-ambiziosa.tsx:1965`) e a volte 400 (`candidati-ambiziosa.tsx:2790, 3079`).
- **Proposta:**
  - h2 = Fraunces 400 `text-3xl sm:text-4xl`;
  - h3 = Fraunces 400 `text-2xl sm:text-3xl`;
  - il semibold solo per i titoli-domanda dentro le sezioni.

### 13. Gradiente del biglietto in due versioni
- **Dove:**
  - box con form: Mulberry fino al **45%**, lime al **32%** (`index.tsx:1119`, `checkout.tsx:151`, `accedi-registrazioni.tsx:88`);
  - EventTicket: Mulberry fino al **55%**, lime al **30%** (`EventTicket.tsx:15`).
- **Proposta:** `gradient-ticket` (45% / 32%) per entrambi.

### 14. Due rossi e due verdi fuori palette
- **Rossi:**
  - `--destructive` `#cc272e` per i posti occupati (`upsell-call.tsx:110`);
  - Tailwind `red-500` `#fb2c36` per il pallino live (`LiveRegistrationsNotice.tsx:11`).
- **Verdi:**
  - `#22c55e` per i posti liberi;
  - `#25D366` per WhatsApp.
- **Proposta:**
  - un solo rosso, `--destructive`, alzato di luminosità per passare 3:1 su Mulberry;
  - WhatsApp resta col suo verde ufficiale;
  - posti liberi in lime `--primary` (colore di brand, 12:1 su Mulberry).

### 15. Nomi dei token che non corrispondono al valore
- **Dove:**
  - `--cream` è Mulberry scuro (`styles.css:110`, il commento lo ammette);
  - l'utility `text-gradient-gold` usa `--gradient-ink` (`styles.css:198-203`);
  - `--gold-deep`, `--primary`, `--ring` e `--chart-1` hanno lo stesso valore;
  - `--foreground`, `--secondary`, `--accent`, `--cream`, `--primary-foreground`, `--card-foreground` e `--chart-2` hanno tutti `#5f0032`.
- **Proposta:** nel design system nominare per ruolo:
  - `color-brand-mulberry`, `color-brand-tidal`, `color-brand-rose`;
  - `surface-dark` al posto di `cream`;
  - `text-gradient-ink`.

### 16. Utility e token definiti ma mai usati
- **Dove:**
  - `@utility surface-gold` (`styles.css:284`);
  - `@utility eyebrow` (`styles.css:270`). Lo stile eyebrow però è riscritto a mano 28 volte (`font-condensed text-xs uppercase tracking-[0.2em]`), con spaziatura 0.2em invece dello 0.28em dell'utility;
  - `animate-float` (`:334`), `animate-sway` (`:354`);
  - `--chart-1…5`, `--destructive-foreground`, `--sidebar-*`;
  - 45 componenti su 46 di `src/components/ui/`.
- **Proposta:**
  - usare `eyebrow` con 0.2em (il valore reale) al posto delle classi ripetute;
  - rimuovere le utility mai usate.

### 17. `Reveal` accetta un ritardo ma non anima nulla
- **Dove:** `src/components/landing/Reveal.tsx:6-11`. La prop `delay` viene passata centinaia di volte (es. `delay={80}`), ma il componente restituisce un semplice `<div>`.
- **Effetto:** il codice fa pensare a comparse animate che non esistono.
- **Proposta:** decidere se ripristinare l'animazione (dissolvenza + 16px verso l'alto, ritardo da prop, disattivata con `prefers-reduced-motion`) o togliere la prop.

### 18. Separatori del countdown diversi
- **Dove:**
  - versione compatta con `:` (`Countdown.tsx:50`);
  - versione estesa con `·` (`Countdown.tsx:69`).
- **Proposta:** `:` in entrambe (è la versione visibile in topbar e banner).

### 19. Sezioni duplicate in tre pagine
- **Dove:** `index.tsx`, `b.tsx` e `upsell-story-identity.tsx` contengono le stesse sezioni copiate (Cos'è, Problema, Metodo, Serate, Chi sono…). `candidati-ambiziosa.tsx` copia "Chi sono", "Testimonianze" e "FAQ".
- **Effetto:** ogni modifica va ripetuta a mano. I testi sono già divergenti: il fatturato è stato aggiornato in tutte, ma la struttura dell'hero di /b è diversa.
- **Proposta:** estrarre ogni sezione in un componente condiviso.

### 20. Interlinea e dimensioni scalate dal rem a 18px
- **Dove:** `styles.css:166-175` porta il rem a 18px da 640px. Tutte le dimensioni Tailwind in rem crescono del 12,5% da desktop. Le dimensioni in px fisse (`text-[9px]`, `text-[10px]`, `size` delle immagini in px, `max-w-[220px]`) invece no.
- **Effetto:** il rapporto tra badge in px e testo in rem cambia da mobile a desktop.
- **Proposta:** non è un errore, ma va tenuto presente. Nei nuovi componenti usare rem anche per i micro-testi (`0.625rem` invece di `10px`).


---

## 13. Cosa non si ricava dal codice

- **Logo e marchio grafico:** nel repository non c'è un file di logo, né regole su spazio di rispetto, dimensioni minime o versioni monocromatiche.
- **Favicon e og:image di brand:** la favicon è quella di Lovable; og:image e twitter:image mancano.
- **Font:** sono caricati da Google Fonts. Nel repository non ci sono file di font né licenze, e il peso Oswald 700 usato dal sito non viene scaricato.
- **Contenuti e grafiche su Systeme.io:** il form invia a Systeme.io (`https://systeme.io/embedded/44087792/subscription` e il form VIP). Pagine di pagamento, email, conferme e messaggi d'errore lato Systeme non sono nel codice. Gli export HTML per Systeme.io sono in un altro repository (`CarlottaSgarra/rule-the-rules`, cartella `deliverables/`): non sono stati analizzati qui.
- **Video:** sono su Vimeo e YouTube (solo gli ID sono nel codice). Le copertine dei video Vimeo non sono nel repository.
- **Calendario di candidatura (TidyCal), gruppo WhatsApp, questionario Google Forms, Workbook (Notion):** servizi esterni con il loro stile.
- **Colori in HEX "ufficiali" del brand:** il codice ne dichiara tre in commento (`#fee1d9`, `#5f0032`, `#e8f9a2`, `src/styles.css:68-76`); tutti gli altri HEX di questo documento sono conversioni dagli oklch.
- **Valori dinamici:** prezzi, date, posti e link cambiano in `src/lib/ambiziosa-config.ts` e `src/data/offer.tsx`. I testi di esempio nei componenti non sono contenuti ufficiali.
