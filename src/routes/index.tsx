import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Check,
  Clapperboard,
  Copy,
  IdCard,
  ListChecks,
  ListX,
  Lock,
  PenLine,
  ShieldAlert,
  Star,
  Wand2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/landing/CtaButton";
import { Countdown } from "@/components/landing/Countdown";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { Reveal } from "@/components/landing/Reveal";
import { SignupForm } from "@/components/landing/SignupForm";
import { Workbook } from "@/components/landing/Workbook";
import { SessionHighlight } from "@/components/landing/SessionHighlight";
import { Highlight } from "@/components/landing/Highlight";
import livestreamImg from "@/assets/livestream.jpg";
import goldTexture from "@/assets/texture-gold.jpg";
import client1Img from "@/assets/client-1.jpg";
import client2Img from "@/assets/client-2.png";
import client3Img from "@/assets/client-3.png";
import client4Img from "@/assets/client-4.jpg";
import client5Img from "@/assets/client-5.png";
import client6Img from "@/assets/client-6.png";
import carlottaPresentingImg from "@/assets/carlotta-presenting.jpg";
import methodBgImg from "@/assets/method-bg.jpg";
import carlottaHugImg from "@/assets/carlotta-hug.jpg";
import carlottaPointingImg from "@/assets/carlotta-pointing.jpg";
import carlottaLookingImg from "@/assets/carlotta-looking.jpg";
import carlottaLooking2Img from "@/assets/carlotta-looking-2.jpg";
import carlottaTalkingImg from "@/assets/carlotta-talking.jpg";
import carlottaWalkingImg from "@/assets/carlotta-walking.jpg";
import sharonSpeakingImg from "@/assets/sharon-speaking.jpg";
import socialProof1Img from "@/assets/social-proof-1.jpg";
import socialProof2Img from "@/assets/social-proof-2.jpg";
import socialProof3Img from "@/assets/social-proof-3.jpg";
import socialProof4Img from "@/assets/social-proof-4.jpg";
import socialProof5Img from "@/assets/social-proof-5.jpg";
import socialProof6Img from "@/assets/social-proof-6.jpg";
import socialProof7Img from "@/assets/social-proof-7.jpg";
import socialProof8Img from "@/assets/social-proof-8.jpg";
import socialProof9Img from "@/assets/social-proof-9.jpg";
import socialProof10Img from "@/assets/social-proof-10.jpg";
import socialProof11Img from "@/assets/social-proof-11.jpg";
import socialProof12Img from "@/assets/social-proof-12.jpg";
import socialProof13Img from "@/assets/social-proof-13.jpg";
import socialProof14Img from "@/assets/social-proof-14.jpg";
import socialProof15Img from "@/assets/social-proof-15.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rule The Rules 2026: rompi le regole, costruisci la tua identità" },
      {
        name: "description",
        content:
          "3 serate live dal 5 al 7 ottobre con Carlotta Sgarra per smettere di comunicare come ti hanno insegnato e costruire il tuo modo di comunicare. Biglietto a 27€.",
      },
      {
        property: "og:title",
        content: "Rule The Rules 2026: rompi le regole, costruisci la tua identità",
      },
      {
        property: "og:description",
        content:
          "Tre serate live con Carlotta Sgarra per rompere le regole del marketing e ritrovarti nella tua comunicazione.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const clientAvatars = [client1Img, client2Img, client3Img, client4Img, client5Img, client6Img];

const galleryPhotos = [
  socialProof1Img,
  socialProof2Img,
  socialProof3Img,
  socialProof4Img,
  socialProof5Img,
  socialProof6Img,
  socialProof7Img,
  socialProof8Img,
  socialProof9Img,
  socialProof10Img,
  socialProof11Img,
  socialProof12Img,
  socialProof13Img,
  socialProof14Img,
  socialProof15Img,
];

const galleryColumns = Array.from({ length: 5 }, (_, col) =>
  Array.from({ length: 5 }, (_, i) => galleryPhotos[(col * 5 + i) % galleryPhotos.length]),
);

const systemSteps = [
  {
    n: "01",
    tag: "Identità",
    label: "Radica chi sei",
    d: (
      <>
        Prima di scrivere anche un solo contenuto, mettiamo nero su bianco{" "}
        <strong className="font-semibold text-ink">chi sei davvero</strong>: voce, valori,
        contraddizioni, la tua storia. Senza questo, ogni regola che applichi ti allontana da te
        invece di avvicinarti a chi vuoi raggiungere.
      </>
    ),
  },
  {
    n: "02",
    tag: "Contenuti",
    label: "Le tue Anti-Regole",
    d: (
      <>
        Prendiamo hook, script, format che segui oggi per obbligo e li sostituiamo con{" "}
        <strong className="font-semibold text-ink">le tue regole</strong>: quelle che funzionano
        perché sono tue, non perché le ha dette un guru.
      </>
    ),
  },
  {
    n: "03",
    tag: "Piano editoriale",
    label: "Costruisci la tua strategia",
    d: (
      <>
        Trasformiamo identità e Anti-Regole in un piano editoriale che{" "}
        <strong className="font-semibold text-ink">riesci davvero a sostenere</strong>, non
        l’ennesimo calendario rigido che abbandoni dopo due settimane.
      </>
    ),
  },
];

const sessions = [
  {
    n: "1",
    date: "5 ottobre",
    time: "20:00",
    guides: [
      {
        name: "Carlotta",
        role: "CEO e founder dell’evento",
        photo: carlottaPointingImg,
        photoPosition: "50% 12%",
      },
    ],
    heroImage: { src: carlottaLookingImg, position: "45% 25%" },
    highlight: "identity-card" as const,
    title: "Togli il Costume",
    intro: (
      <>
        Prima di capire cosa pubblicare, dobbiamo capire{" "}
        <strong className="font-semibold text-ink">
          chi è rimasto sotto tutto quello che hai imparato a fare “bene”
        </strong>
        .
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Identity Excavation</strong>: domande fuori
        copione per riportare a galla la persona che il marketing ha progressivamente coperto
      </>,
      <>
        <strong className="font-semibold text-ink">Profilo sotto interrogatorio</strong>: guarderai
        il tuo Instagram come se non fosse tuo: cosa racconta davvero di te? Cosa promette? Cosa
        nasconde?
      </>,
      <>
        <strong className="font-semibold text-ink">La lista delle cose che hai censurato</strong>:
        lati, opinioni, storie, modi di fare e caratteristiche che hai smesso di mostrare perché
        “non abbastanza professionali”
      </>,
      <>
        <strong className="font-semibold text-ink">Il tuo DNA comunicativo</strong>: ciò che può
        appartenere soltanto a te: visione, linguaggio, energia, ossessioni, contraddizioni,
        esperienze
      </>,
      <>
        <strong className="font-semibold text-ink">Carte Identitarie</strong>: trasformiamo tutto
        questo in una bussola concreta da usare ogni volta che crei, parli, vendi o prendi posizione
      </>,
    ],
  },
  {
    n: "2",
    date: "6 ottobre",
    time: "20:00",
    guides: [
      {
        name: "Carlotta",
        role: "CEO e founder dell’evento",
        photo: carlottaPointingImg,
        photoPosition: "50% 12%",
      },
      {
        name: "Sharon",
        role: "esperta di contenuti",
        photo: sharonSpeakingImg,
        photoPosition: "42% 35%",
      },
    ],
    heroImage: { src: carlottaLooking2Img, position: "55% 25%" },
    highlight: "content-os" as const,
    title: "Licenzia le Regole",
    intro: (
      <>
        Qui prendiamo tutte le cose che ti hanno insegnato sui contenuti e le mettiamo{" "}
        <strong className="font-semibold text-ink">sul banco degli imputati</strong>.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Il cimitero delle regole</strong>: hook nei primi
        3 secondi, CTA obbligatorie, script perfetti, frequenze ideali, setting giusti, format che
        “funzionano”: cosa merita davvero di sopravvivere?
      </>,
      <>
        <strong className="font-semibold text-ink">Rule Autopsy</strong>: sezioniamo una regola alla
        volta per capire se ti aiuta, ti limita o ti trasforma in una copia
      </>,
      <>
        <strong className="font-semibold text-ink">Le tue Anti-Regole</strong>: non quelle di
        Carlotta, non quelle del mercato: le condizioni in cui TU comunichi meglio
      </>,
      <>
        <strong className="font-semibold text-ink">Content Personality Test</strong>: scopri come
        crei quando smetti di cercare di sembrare una content creator
      </>,
      <>
        <strong className="font-semibold text-ink">Content Lab</strong>: script o bullet? batch o
        istinto? talking o voice-over? pulito o sporco? breve o lungo? Testiamo invece di presumere
      </>,
      <>
        <strong className="font-semibold text-ink">Il tuo Operating System creativo</strong>: il
        modo in cui riesci a produrre contenuti che funzionano senza perdere te stessa nel processo
      </>,
    ],
  },
  {
    n: "3",
    date: "7 ottobre",
    time: "20:00",
    guides: [
      {
        name: "Carlotta",
        role: "CEO e founder dell’evento",
        photo: carlottaPointingImg,
        photoPosition: "50% 12%",
      },
    ],
    heroImage: { src: carlottaTalkingImg, position: "58% 30%" },
    highlight: "editorial-plan" as const,
    title: "Costruisci un Sistema che non ti Comandi",
    intro: (
      <>
        Ora prendiamo tutto quello che hai scoperto e gli diamo una struttura. Non una gabbia
        colorata chiamata “piano editoriale”.{" "}
        <strong className="font-semibold text-ink">Un sistema che lavori per te.</strong>
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">I tuoi Signature Format</strong>: i contenuti che
        possono diventare immediatamente associabili al tuo nome
      </>,
      <>
        <strong className="font-semibold text-ink">The Idea Vault</strong>: una banca di idee
        costruita sulla tua identità, non sui trend della settimana
      </>,
      <>
        <strong className="font-semibold text-ink">Content Jobs</strong>: ogni contenuto avrà un
        lavoro preciso: attirare, creare relazione, posizionarti o portare verso una scelta
      </>,
      <>
        <strong className="font-semibold text-ink">Identity Matching</strong>: ogni idea dovrà
        superare una domanda: “questa cosa potrebbe pubblicarla chiunque o ha davvero la mia
        faccia?”
      </>,
      <>
        <strong className="font-semibold text-ink">Il piano editoriale al contrario</strong>: non
        partiremo dal calendario per decidere cosa dire. Partiremo da ciò che vuoi dire per decidere
        quando e come farlo
      </>,
      <>
        <strong className="font-semibold text-ink">Il tuo sistema editoriale personale</strong>:
        format, idee, obiettivi e ritmo cuciti sul tuo modo di comunicare
      </>,
      <>
        <strong className="font-semibold text-ink">RULE THE RULES · Il Manifesto finale</strong>: le
        regole che da oggi scegli tu per la tua comunicazione
      </>,
    ],
  },
];

const takeawayCards = [
  {
    id: "carte-identitarie",
    icon: IdCard,
    title: "Le tue Carte Identitarie",
    text: (
      <>
        Un documento che mette nero su bianco cosa vuoi rappresentare, cosa non vuoi più
        rappresentare, quali parti di te hai nascosto perché “poco professionali” e quali invece
        vuoi rendere riconoscibili.{" "}
        <strong className="font-semibold text-ink">
          È la base su cui costruisci tutto il resto
        </strong>
        , dalla prima serata.
      </>
    ),
  },
  {
    id: "anti-regole",
    icon: ListX,
    title: "Le tue Anti-Regole personali",
    text: (
      <>
        Per ogni regola che segui oggi per obbligo (hook, script, CTA, frequenza, setting), scrivi
        la tua risposta a “questa cosa funziona per me?”. Un elenco concreto, scritto durante la
        seconda serata:{" "}
        <strong className="font-semibold text-ink">cosa tieni, cosa butti via</strong>.
      </>
    ),
  },
  {
    id: "metodo-creazione",
    icon: Wand2,
    title: "Il tuo primo metodo di creazione contenuti",
    text: (
      <>
        Testi format diversi in diretta: script contro bullet point, talking Reel contro voice-over,
        contenuti brevi contro lunghi.{" "}
        <strong className="font-semibold text-ink">
          Alla fine sai qual è il tuo modo naturale di creare
        </strong>
        , quello che riesci a sostenere senza odiarlo dopo due settimane.
      </>
    ),
  },
  {
    id: "piano-editoriale",
    icon: CalendarDays,
    title: "Una prima bozza del tuo piano editoriale",
    text: (
      <>
        Cinque domande guidano ogni contenuto: cosa voglio dire, perché, quale parte di me, che
        funzione ha nel mio business, qual è il modo più naturale per raccontarlo.{" "}
        <strong className="font-semibold text-ink">Una struttura legata ai tuoi obiettivi</strong>:
        attrarre, connettere, posizionare, convertire.
      </>
    ),
  },
];

const startingPointCards = [
  {
    id: "riscrivi",
    icon: PenLine,
    title: "Scrivo, cancello, riscrivo",
    text: (
      <>
        Hai un’idea per un post, la scrivi, la cancelli, la riscrivi{" "}
        <strong className="font-semibold text-foreground">“in un modo più professionale”</strong>.
      </>
    ),
  },
  {
    id: "font-diverso",
    icon: Copy,
    title: "Mi sento una fotocopia",
    text: (
      <>
        Guardi il profilo di un’altra professionista e ti sembra il tuo, solo{" "}
        <strong className="font-semibold text-foreground">con un font diverso</strong>.
      </>
    ),
  },
  {
    id: "recitare",
    icon: Clapperboard,
    title: "Quando registro, recito",
    text: (
      <>
        Accendi la telecamera e ti senti{" "}
        <strong className="font-semibold text-foreground">
          recitare una parte che non ti appartiene
        </strong>
        .
      </>
    ),
  },
  {
    id: "non-riconosci",
    icon: ListChecks,
    title: "Ho fatto tutto giusto, eppure...",
    text: (
      <>
        Hai fatto tutto “per bene”, eppure oggi{" "}
        <strong className="font-semibold text-foreground">non ti riconosci più</strong> nel tuo
        profilo.
      </>
    ),
  },
  {
    id: "paura",
    icon: ShieldAlert,
    title: "Ho paura di rompere le regole",
    text: (
      <>
        Hai paura che smettere di seguirle{" "}
        <strong className="font-semibold text-foreground">
          faccia smettere di funzionare tutto
        </strong>
        .
      </>
    ),
  },
  {
    id: "gabbia",
    icon: Lock,
    title: "Il mio piano mi va stretto",
    text: (
      <>
        Il piano editoriale che segui ti fa sentire{" "}
        <strong className="font-semibold text-foreground">in gabbia</strong>, non ti aiuta a
        crescere.
      </>
    ),
  },
];

const heroWhispers = [
  "SONO STUFA DI SEGUIRE LE REGOLE DI INSTAGRAM",
  "CHE PALLE QUESTI GANCI",
  "NON MI SENTO PIÙ",
  "NON MI RICONOSCO PIÙ IN QUELLO CHE PUBBLICO",
  "QUANDO REGISTRO MI SEMBRA DI RECITARE",
  "BASTA HOOK",
  "BASTA REGOLE",
  "BASTA COPIONI",
  "BASTA FORMULE",
  "BASTA PIANI EDITORIALI",
];

const forWhoYes = [
  "Prima di pubblicare apri il profilo di un’altra e controlli come ha scritto lei quel post",
  "Hai già clienti vere e risultati veri, ma il tuo Instagram non lo racconta per niente",
  "Hai un raccoglitore di corsi su hook, CTA e piani editoriali che non riapri da mesi",
  "Scrivi una caption, la cancelli, la riscrivi “più professionale” e alla fine non la pubblichi",
  "Vuoi smettere di aprire Instagram con l’ansia e ricominciare ad avere qualcosa da dire",
];

const forWhoNo = [
  "Non hai ancora un servizio o un’offerta pronta da vendere",
  "Cerchi un trucco per l’algoritmo, non un lavoro vero sulla tua comunicazione",
  "Pensi di guardare le tre dirette e basta, senza fare gli esercizi in mezzo",
  "Non sei disposta a metterti in discussione su come comunichi oggi",
  "Preferisci un corso registrato da guardare quando capita, non tre serate live",
];

const videoTestimonials = [
  {
    name: "Elena Rosa",
    role: "Mental Coach Cinofila",
    result: "Superati i 5.000€/mese in pochi mesi",
    youtubeId: "O75oxbgxdjY",
  },
  {
    name: "Silvia Bedin",
    role: "Life Coach",
    result: "Da 400€/mese a 31.000€ in organico in poche settimane",
    youtubeId: "A0vabIP_Srk",
  },
  {
    name: "Valeria Salussolia",
    role: "Titolare Centro Benessere & Consulente d’Immagine",
    result: "Fattura in una settimana quello che guadagnava in un mese da dipendente",
    youtubeId: "gFKD9AkVaZw",
  },
  {
    name: "Mariangela Simioli",
    role: "Marketing Strategist",
    result: "Regime forfettario superato in 4 mesi",
    youtubeId: "Qd6QLXPzcMs",
  },
  {
    name: "Giulia Santelli",
    role: "Personal Trainer e Life Coach",
    result: "Cliente high ticket da 2.000€ con soli 6 contenuti",
    youtubeId: "MVOsgoJEHI0",
  },
  {
    name: "Ilaria Mattei",
    role: "SEO e Copywriter",
    result: "6.500€/mese costanti, poi 10.000€ raggiunti",
    youtubeId: "BxQDPKy141U",
  },
  {
    name: "Giulia Ariganello",
    role: "Business Mentor per le Educatrici",
    result: "Fatturato mensile a cinque cifre",
    youtubeId: "Qzhc1dBGVpM",
  },
  {
    name: "Vanessa Sciorio",
    role: "Nutrizionista al femminile",
    result: "Fatturato a cinque cifre mensili",
    youtubeId: "mJh2hT3BIgE",
  },
  {
    name: "Elisa Monasterolo",
    role: "Brand Strategist",
    result: "Da vicina a chiudere la P.IVA a stabilità economica",
    youtubeId: "fB1zSchLTiI",
  },
  {
    name: "Giusy Pannese",
    role: "Makeup Artist",
    result: "Da clientela solo locale a spose a livello nazionale e internazionale",
    youtubeId: "IUeaewJX9iU",
  },
  {
    name: "Bianca Lucaci",
    role: "Influencer Coach",
    result: "Dalla commessa alla prima Academy per influencer in Italia",
    youtubeId: "Kw2nsluTO2A",
  },
  {
    name: "Rosanna Cafarella",
    role: "Tatuatrice",
    result: "10.000€ mensili costanti in soli 3 mesi",
    youtubeId: "Ek8tUbgTJGk",
  },
  {
    name: "Mariella Tauriello",
    role: "Instagram e Visual Coach",
    result: "Programma sold out",
    youtubeId: "-D9QGDLWue0",
  },
  {
    name: "Valentina Giuriato",
    role: "Consulente d’Immagine",
    result: "Business trasformato e riempito di clienti",
    youtubeId: "yDGIN_aaz0k",
  },
  {
    name: "Sharon Convertino",
    role: "Social Media Manager e Consulente Web Marketing",
    result: "Da burnout a selezionare lei i clienti",
    youtubeId: "eA4QQQXlG54",
  },
  {
    name: "Silvia Errico",
    role: "Coach di LinkedIn e Instagram",
    result: "Da zero clienti a vivere del suo lavoro",
    youtubeId: "G-ElGXQXcNg",
  },
  {
    name: "Elisabetta Bettonte",
    role: "Parent Coach",
    result: "Da -10.000€ a 6.000€/mese",
    youtubeId: "zVAuDJ4xJC8",
  },
  {
    name: "Francesca Solignani",
    role: "Instagram Coach per Nutrizionisti",
    result: "Flusso costante di clienti, figura di riferimento nel settore",
    youtubeId: "h7V0kkYzhec",
  },
  {
    name: "Cristina Buliga",
    role: "Life & Business Coach",
    result: "5 clienti high ticket in 4 mesi",
    youtubeId: "8JrTY4ulPZQ",
  },
  {
    name: "Roberta Trabucco",
    role: "Make Up Alchemist",
    result: "Identità professionale unica, clienti allineati alla sua visione",
    youtubeId: "2Q3Keue0i7w",
  },
];

const aboutStats = [
  { v: "1.500+", l: "professioniste guidate" },
  { v: "—", l: "anni di esperienza [da confermare]" },
  { v: "—", l: "clienti seguite in Ambiziosa [da confermare]" },
  { v: "—", l: "[numero distintivo da confermare]" },
];

const beforeAfterTable = [
  {
    before: "Scrivi un contenuto seguendo hook, script e CTA “come si deve”",
    after: "Scrivi un contenuto partendo da quello che vuoi dire davvero",
  },
  {
    before: "Guardi il profilo di un’altra professionista e ti sembra il tuo, con un font diverso",
    after: "Il tuo profilo è impossibile da confondere con un altro",
  },
  {
    before: "Segui un piano editoriale rigido che ti fa sentire in gabbia",
    after: "Hai un piano editoriale costruito sulle tue Anti-Regole",
  },
  {
    before: "Registri un Reel e ti senti recitare una parte",
    after: "Crei contenuti nel formato che senti davvero tuo",
  },
  {
    before: "Hai paura che rompere le regole faccia smettere di funzionare tutto",
    after: "Sai quali regole tenere e quali buttare, una per una",
  },
  {
    before: "Non sai chi sei “senza personaggio”",
    after: "Hai le tue Carte Identitarie scritte nero su bianco",
  },
];

const twoPaths = {
  a: {
    title: "Continuare come adesso",
    d: "Profili tecnicamente corretti, contenuti fatti bene, script perfetti. E la sensazione, sempre uguale, di essere una fotocopia che nessuno ricorda.",
  },
  b: {
    title: "Costruire la tua comunicazione",
    d: "Parti dalla tua identità, costruisci il tuo metodo, hai finalmente un piano editoriale che è tuo. E che ti rende riconoscibile.",
  },
};

const workbookDays = [
  {
    t: "Giorno 1 · Chi sono",
    d: (
      <>
        Le tue Carte Identitarie: il documento in cui metti nero su bianco{" "}
        <strong className="font-semibold text-foreground">cosa ti rende riconoscibile</strong>.
      </>
    ),
  },
  {
    t: "Giorno 2 · Come comunico",
    d: (
      <>
        Le tue Anti-Regole personali e{" "}
        <strong className="font-semibold text-foreground">il tuo Content Lab</strong>, per iniziare
        a creare contenuti con il tuo metodo.
      </>
    ),
  },
  {
    t: "Giorno 3 · Come costruisco il sistema",
    d: (
      <>
        Format, banca idee e{" "}
        <strong className="font-semibold text-foreground">
          la struttura del tuo piano editoriale
        </strong>
        , costruito insieme durante la serata.
      </>
    ),
  },
];

const valueStack = [
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
    value: null,
  },
];

const valueStackTotal = valueStack.reduce((sum, v) => sum + (v.value ?? 0), 0);

const faqs = [
  {
    q: "Cos’è esattamente Rule The Rules 2026?",
    a: (
      <>
        È uno show formativo in live streaming con Carlotta Sgarra e il suo team, in tre serate dal
        5 al 7 ottobre 2026. Ti do gli strumenti per costruire la tua identità, il tuo metodo
        personale di creazione contenuti e{" "}
        <strong className="font-semibold text-ink">un piano editoriale che è davvero tuo</strong>,
        non l’ennesimo format universale.
      </>
    ),
  },
  {
    q: "È un corso registrato o un evento dal vivo?",
    a: (
      <>
        È un <strong className="font-semibold text-ink">evento dal vivo in streaming</strong>, ci
        connetteremo usando il software Zoom.
      </>
    ),
  },
  {
    q: "A chi è rivolto?",
    a: (
      <>
        A professioniste, coach, consulenti e imprenditrici che si sentono una fotocopia delle
        altre, sono stufe di seguire regole che non sentono loro, e{" "}
        <strong className="font-semibold text-ink">
          vogliono costruire una comunicazione che parte davvero da chi sono
        </strong>
        .
      </>
    ),
  },
  {
    q: "Funziona anche nel mio settore?",
    a: (
      <>
        Sì. Carlotta ha già aiutato nutrizionisti, tatuatrici, consulenti d’immagine, coach, social
        media manager, make-up artist e tanti altri a smettere di comunicare come tutti gli altri
        nel loro settore. Il principio è lo stesso:{" "}
        <strong className="font-semibold text-ink">
          parti dalla tua identità, non da un format che “funziona”
        </strong>
        .
      </>
    ),
  },
  {
    q: "E se non riesco a seguirlo live?",
    a: (
      <>
        Con il biglietto standard puoi seguire solo in diretta, non è prevista la registrazione. Se
        vuoi rivedere l’evento tutte le volte che vuoi, fermarti sui passaggi cruciali o prenderti
        appunti con calma,{" "}
        <strong className="font-semibold text-ink">
          scegli il biglietto VIP, che include la registrazione completa
        </strong>
        .
      </>
    ),
  },
  {
    q: "Se non fa per me, posso riavere indietro i soldi?",
    a: (
      <>
        Sì. Se dopo la prima serata capisci che “Rule The Rules” non fa per te, scrivici prima
        dell’inizio della seconda serata live (6 ottobre) e{" "}
        <strong className="font-semibold text-ink">
          ti rimborsiamo il biglietto, senza bisogno di spiegazioni
        </strong>
        .
      </>
    ),
  },
  {
    q: "Perché il prezzo è così basso?",
    a: (
      <>
        Perché Rule The Rules 2026 è l’introduzione al nostro modo di lavorare: vogliamo che più
        professioniste possibile abbiano gli strumenti giusti per ritrovarsi nella propria
        comunicazione. Consideralo un biglietto d’ingresso:{" "}
        <strong className="font-semibold text-ink">
          un prezzo accessibile per un contenuto che può cambiare il modo in cui ti presenti online
        </strong>
        .
      </>
    ),
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div
        className="sticky top-0 z-50 border-b border-border/60 backdrop-blur"
        style={
          {
            backgroundColor: "color-mix(in oklab, var(--secondary) 95%, transparent)",
            "--foreground": "var(--secondary-foreground)",
            "--muted-foreground": "oklch(0.85 0.03 40)",
          } as React.CSSProperties
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-1 px-2 py-2 text-sm text-muted-foreground sm:grid sm:grid-cols-3 sm:gap-3 sm:px-5 sm:py-4">
          <p className="min-w-0 flex-1 font-condensed text-[10px] font-bold uppercase tracking-[0.06em] text-foreground sm:flex-none sm:text-base sm:tracking-[0.15em] sm:justify-self-start">
            <span className="sm:hidden">Live su Zoom · </span>
            <span className="whitespace-nowrap">5-6-7 Ottobre</span>
          </p>
          <div className="flex shrink-0 items-center gap-1 sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-2 sm:justify-self-center">
            <span className="hidden font-condensed text-xs uppercase tracking-[0.15em] text-muted-foreground sm:inline">
              L’evento inizia tra
            </span>
            <Countdown compact />
          </div>
          <a
            href="#iscriviti"
            className="min-w-0 shrink-0 rounded-md px-2 py-1.5 text-center font-condensed text-[10px] uppercase leading-tight tracking-[0.03em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.12em] sm:justify-self-end"
            style={{
              backgroundImage: "var(--gradient-gold)",
              color: "var(--primary-foreground)",
            }}
          >
            Prendi il biglietto
          </a>
        </div>
      </div>

      {/* Hero */}
      <header
        className="relative grid min-h-screen grid-cols-1"
        style={{ backgroundImage: "var(--gradient-night)" }}
      >
        <img
          src={goldTexture}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-overlay"
        />

        <div
          className="pointer-events-none sticky top-0 z-0 col-start-1 row-start-1 grid h-screen w-full md:h-[90vh]"
          style={{ gridTemplateRows: `repeat(${heroWhispers.length}, 1fr)` }}
          aria-hidden
        >
          {heroWhispers.map((phrase, i) => {
            const padded = Array(8).fill(phrase).join("   ·   ");
            return (
              <div key={i} className="flex w-full items-center overflow-hidden">
                <div
                  className={`flex w-max shrink-0 gap-12 ${
                    i % 2 === 0 ? "animate-marquee-ltr" : "animate-marquee-rtl"
                  }`}
                >
                  {[padded, padded].map((p, j) => (
                    <span
                      key={j}
                      className="whitespace-nowrap font-condensed text-[9vh] font-bold uppercase leading-none tracking-tight text-[color:var(--foreground)]/[0.04] md:text-[7vh]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 col-start-1 row-start-1 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-20 pt-10 text-center sm:pt-20">
          <Reveal>
            <p className="font-condensed text-xs uppercase tracking-[0.4em] text-secondary sm:text-sm">
              Live su Zoom · 5, 6, 7 ottobre · ore 20:00
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mt-6 inline-block">
              <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-tight text-gradient-gold sm:text-8xl">
                Rule The Rules
              </h1>
              <span
                className="absolute select-none whitespace-nowrap rounded-full px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary-foreground sm:text-xs"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  boxShadow: "var(--shadow-gold)",
                  top: "-0.6rem",
                  right: "-0.5rem",
                  transform: "rotate(11deg)",
                }}
              >
                Unico evento 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-snug text-foreground sm:text-2xl">
              In 3 serate distruggiamo le regole che i guru ti hanno sempre detto di seguire per
              fatturare online e scolpisci le tue regole per creare una{" "}
              <Highlight>comunicazione identitaria</Highlight>.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              Hook, script, editing, formule: non sei stanca di dover seguire un copione tutte le
              volte che apri Instagram? E se ci fosse la soluzione per{" "}
              <strong className="font-semibold text-foreground">
                vendere senza più seguire queste regole
              </strong>
              ?
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-10 w-full">
            <div
              className="relative overflow-hidden rounded-[2rem]"
              style={
                {
                  backgroundImage:
                    "linear-gradient(100deg, var(--secondary) 0%, var(--secondary) 45%, color-mix(in oklab, var(--primary) 32%, var(--secondary)) 100%)",
                  border: "2px solid var(--primary)",
                  boxShadow:
                    "var(--shadow-gold), 0 60px 100px -30px color-mix(in oklab, var(--primary) 45%, transparent)",
                  "--foreground": "var(--secondary-foreground)",
                  "--muted-foreground": "oklch(0.85 0.03 40)",
                } as React.CSSProperties
              }
            >
              <div className="grid grid-cols-1 text-left md:grid-cols-[3fr_7fr]">
                <div className="relative h-96 w-full md:h-full">
                  <img
                    src={carlottaHugImg}
                    alt="Carlotta Sgarra abbraccia una partecipante a un suo evento live"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "50% 25%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-5 text-center text-lg font-semibold leading-snug text-white sm:p-6 sm:text-xl">
                    Questo invito è per te, che sei stanca di sottometterti alle regole
                    dell’algoritmo e vuoi far uscire <Highlight dark>la vera te stessa</Highlight>.
                  </p>
                </div>

                <div
                  className="relative border-t-2 border-dashed p-6 sm:p-10 md:border-l-2 md:border-t-0"
                  style={{ borderColor: "color-mix(in oklab, var(--primary) 55%, transparent)" }}
                >
                  <div className="mx-auto max-w-sm">
                    <p className="text-center text-base font-semibold text-foreground">
                      Pronta a rompere le regole una volta per tutte e a ridefinire la tua
                      comunicazione identitaria?
                    </p>
                    <div className="mt-3 flex justify-center">
                      <span
                        className="inline-block rounded-full px-5 py-2 font-condensed text-xs uppercase tracking-[0.25em] text-primary-foreground sm:text-sm"
                        style={{
                          backgroundImage: "var(--gradient-gold)",
                          boxShadow: "var(--shadow-gold)",
                        }}
                      >
                        Live su Zoom · 5-6-7 ottobre
                      </span>
                    </div>
                    <SignupForm
                      className="mt-6"
                      submitSub="Soli €27 · 5-6-7 ottobre · Garanzia di rimborso"
                    />
                    <div className="mt-4 flex justify-center">
                      <div
                        className="inline-flex flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 sm:flex-row sm:items-center sm:gap-3"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
                          border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                        }}
                      >
                        <div className="flex -space-x-3">
                          {clientAvatars.slice(0, 5).map((src, i) => (
                            <img
                              key={i}
                              src={src}
                              alt=""
                              aria-hidden
                              loading="lazy"
                              className="size-9 shrink-0 rounded-full border-2 object-cover"
                              style={{ borderColor: "var(--secondary)" }}
                            />
                          ))}
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="flex justify-center gap-0.5 text-primary sm:justify-start">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="size-3.5 fill-current" />
                            ))}
                          </div>
                          <p className="mt-0.5 whitespace-nowrap text-[10px] text-foreground/85 sm:text-sm">
                            +1.500 professioniste formate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span
                className="absolute hidden h-6 w-12 -translate-x-1/2 md:block"
                style={{
                  left: "30%",
                  top: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "0 2px 2px 2px",
                  borderColor: "var(--primary)",
                  borderRadius: "0 0 999px 999px",
                }}
                aria-hidden
              />
              <span
                className="absolute hidden h-6 w-12 -translate-x-1/2 md:block"
                style={{
                  left: "30%",
                  bottom: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "2px 2px 0 2px",
                  borderColor: "var(--primary)",
                  borderRadius: "999px 999px 0 0",
                }}
                aria-hidden
              />
              <span
                className="absolute top-96 h-12 w-6 -translate-y-1/2 md:hidden"
                style={{
                  left: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "2px 2px 2px 0",
                  borderColor: "var(--primary)",
                  borderRadius: "0 999px 999px 0",
                }}
                aria-hidden
              />
              <span
                className="absolute top-96 h-12 w-6 -translate-y-1/2 md:hidden"
                style={{
                  right: "-2px",
                  backgroundColor: "var(--background)",
                  borderStyle: "solid",
                  borderWidth: "2px 0 2px 2px",
                  borderColor: "var(--primary)",
                  borderRadius: "999px 0 0 999px",
                }}
                aria-hidden
              />
            </div>
          </Reveal>

          <Reveal delay={340} className="mt-24 w-full">
            <h2 className="mx-auto max-w-5xl text-3xl sm:text-4xl">
              Sai qual è il risultato di seguire mille regole per piacere all’algoritmo? Che ora hai
              la nausea quando crei i contenuti e <Highlight>ti fa schifo vendere online</Highlight>
              .
            </h2>
            <p className="mx-auto mt-4 max-w-5xl text-base text-foreground/75 sm:text-lg">
              Durante l’evento rompiamo tutti questi schemi per tornare alla{" "}
              <strong className="font-semibold text-foreground">tua vera identità</strong>.
            </p>
            <div className="mt-10">
              <VideoFrame
                label="Guarda il video di presentazione di Rule The Rules"
                duration="06:15"
                poster={livestreamImg}
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Cos'è */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-4xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <h2 className="text-3xl text-ink sm:text-4xl">
              Rule the Rules è il mio <Highlight dark>unico show live del 2026</Highlight>
            </h2>
            <p
              className="mt-6 border-l-2 pl-5 text-lg italic leading-relaxed text-ink"
              style={{ borderColor: "var(--gold-deep)" }}
            >
              “Ogni volta che pubblico non mi sento più me stessa, e mi faccio schifo a seguire
              tutte queste regole.”
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Parlo ogni giorno con decine di professioniste online, e quasi tutte mi dicono
                questa frase con parole diverse.
              </p>
              <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                Seguono le regole di Instagram. Seguono le regole che gli danno i guru. Seguono i
                format che funzionano per tutte.
              </p>
              <p>
                E il risultato è che oggi{" "}
                <strong className="font-semibold text-ink">
                  nessuna di loro comunica più a modo suo
                </strong>
                . Comunicano a modo di qualcun altro.
              </p>
              <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                Io non voglio darti altre regole da seguire.
              </p>
              <p>
                Il 5, 6 e 7 ottobre, dalle 20 alle 21, in diretta su Zoom, ti mostro come smettere
                di farlo.
              </p>
              <p>
                Prendiamo le regole che ti hanno insegnato e le buttiamo via una a una, e al loro
                posto <strong className="font-semibold text-ink">costruiamo le tue</strong>: quelle
                che ti fanno riconoscere invece che confondere con qualsiasi altra professionista
                del tuo settore.
              </p>
            </div>

            <img
              src={carlottaPresentingImg}
              alt="Carlotta Sgarra sul palco durante uno dei suoi speech"
              loading="lazy"
              width={3504}
              height={1972}
              className="mt-10 aspect-video w-full rounded-2xl object-cover"
            />

            <div className="mt-6 flex justify-center">
              <CtaButton label="Rompiamo le regole, allora?" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Se leggendo qui sotto ti trovi ad annuire, credimi che{" "}
              <Highlight>so come ti senti</Highlight>. Ci sono passata anch’io.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {startingPointCards.map(({ id, icon: Icon, title, text }, i) => (
              <Reveal key={id} delay={i * 60}>
                <div className="flex h-full min-h-[9.5rem] items-start gap-4 rounded-xl border border-border/70 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary">
                  <Icon className="mt-1 size-5 shrink-0 text-secondary" />
                  <div>
                    <p className="text-lg font-semibold text-foreground sm:text-xl">{title}</p>
                    <span className="mt-1 block text-sm leading-relaxed text-foreground/85 sm:text-base">
                      {text}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-16 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Io mi sono <Highlight>stufata di tutto questo</Highlight>. Tu no?
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-5 text-base leading-relaxed text-foreground/85">
                <p>
                  Tutti i guru che segui online ti hanno insegnato che bisogna fare le cose così:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>Questo hook</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>Questo script</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>Questa CTA</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>Questo orario di pubblicazione</span>
                  </li>
                </ul>
                <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                  Stare dentro lo schema, per vendere online.
                </p>
                <p>
                  Eppure lo vedi anche tu: i profili che oggi ottengono davvero visibilità sono
                  quelli che escono dallo schema, non quelli che lo seguono alla lettera.
                </p>
                <p>
                  E con l’intelligenza artificiale che scrive uno script corretto in trenta secondi,
                  seguire lo schema alla perfezione non ti distingue più da nessuna.
                </p>
                <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                  Ti rende sostituibile.
                </p>
                <p>
                  Il vero asset non è più sapere le regole.{" "}
                  <strong className="font-semibold text-foreground">Sei tu</strong>:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>Il tuo modo di spiegare</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>Il tuo punto di vista</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>La tua energia</span>
                  </li>
                </ul>
                <p>
                  Nelle tre serate ti mostro esattamente come si fa a metterlo al centro della tua
                  comunicazione, con un metodo, non a caso.
                </p>
              </div>
              <img
                src={carlottaWalkingImg}
                alt="Carlotta Sgarra durante un suo evento live"
                loading="lazy"
                width={1376}
                height={2064}
                className="mx-auto aspect-[4/5] w-[85%] rounded-2xl object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Il metodo: Identità -> Espressione -> Strategia */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
        <img
          src={methodBgImg}
          alt="Carlotta Sgarra sul palco"
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "25% center" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, color-mix(in oklab, var(--secondary) 35%, transparent), color-mix(in oklab, var(--secondary) 15%, transparent) 40%, color-mix(in oklab, var(--secondary) 30%, transparent))",
          }}
          aria-hidden
        />
        <div
          className="relative mx-auto max-w-6xl px-5 py-20"
          style={{ color: "var(--secondary-foreground)" }}
        >
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <Reveal>
              <div className="md:sticky md:top-28">
                <span
                  className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  Il 5-6-7 ottobre ti mostro tutto questo in diretta
                </span>
                <h2
                  className="mt-4 text-3xl sm:text-4xl"
                  style={{ textShadow: "0 2px 24px rgba(0,0,0,0.65)" }}
                >
                  Il metodo per rompere il{" "}
                  <Highlight dark>circolo vizioso delle regolette</Highlight>
                </h2>
                <p
                  className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg"
                  style={{ textShadow: "0 1px 16px rgba(0,0,0,0.7)" }}
                >
                  Non esiste un modo giusto di stare su Instagram.{" "}
                  <strong className="font-semibold text-ink">Esiste il tuo.</strong> Per costruirlo
                  lavoriamo su 3 livelli, uno alla volta: prima chi sei, poi cosa dici, poi come lo
                  dici ogni giorno.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {systemSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div
                    className="flex gap-6 rounded-2xl p-6"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--secondary) 82%, transparent)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid color-mix(in oklab, var(--primary) 25%, transparent)",
                    }}
                  >
                    <span className="shrink-0 font-condensed text-4xl text-primary sm:text-5xl">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                        {step.tag}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-ink sm:text-xl">{step.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                        {step.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cosa ottieni: le 3 serate, in evidenza */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Tutto questo lo vediamo nelle <Highlight dark>tre serate</Highlight>, dal 5 al 7
              ottobre
            </h2>
          </Reveal>

          <div className="mt-16 space-y-14">
            {sessions.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group relative">
                  <div
                    className="relative grid gap-8 overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--background)_14%,transparent)] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:p-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-10"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--background) 6%, transparent)",
                    }}
                  >
                    <span
                      className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[40rem] font-bold leading-none md:block"
                      style={{ color: "color-mix(in oklab, var(--primary) 16%, transparent)" }}
                      aria-hidden
                    >
                      {s.n}
                    </span>

                    <div className="relative">
                      <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl">
                          <img
                            src={s.heroImage.src}
                            alt={s.title}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                            style={{ objectPosition: s.heroImage.position }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                          <h3 className="absolute inset-x-0 bottom-0 p-5 text-xl text-white sm:text-2xl">
                            {s.title}
                          </h3>
                        </div>
                        <SessionHighlight
                          variant={s.highlight}
                          className="absolute -right-7 -top-3 sm:-right-5 sm:-top-5"
                        />
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                        {s.intro}
                      </p>
                    </div>

                    <div className="relative">
                      <p className="text-lg font-semibold text-ink sm:text-xl">
                        Che cosa ti porti a casa da questa serata?
                      </p>
                      <ul className="mt-3 space-y-3">
                        {s.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                          >
                            <Check
                              className="mt-1 size-4 shrink-0"
                              style={{ color: "var(--gold-deep)" }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className="mt-6 rounded-xl px-4 py-4"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
                          border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                        }}
                      >
                        <p className="whitespace-nowrap font-condensed text-[10px] font-semibold uppercase tracking-[0.08em] text-ink sm:text-xs sm:tracking-[0.2em]">
                          Chi ti guiderà in questa serata?
                        </p>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                          {s.guides.map((g) => (
                            <div key={g.name} className="flex items-center gap-3">
                              <img
                                src={g.photo}
                                alt={g.name}
                                loading="lazy"
                                className="size-11 shrink-0 rounded-full border border-dashed object-cover"
                                style={{
                                  borderColor:
                                    "color-mix(in oklab, var(--primary) 45%, transparent)",
                                  objectPosition: g.photoPosition,
                                }}
                              />
                              <p className="text-sm text-ink-muted">
                                <span className="font-semibold text-ink">{g.name}</span>, {g.role}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <span
                    className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-3 py-2 font-condensed text-[10px] font-semibold uppercase tracking-[0.05em] text-primary-foreground shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1 sm:-left-3 sm:translate-x-0 sm:px-5 sm:py-3 sm:text-base sm:tracking-[0.15em] md:-left-5 md:px-6"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    Serata {s.n} · {s.date}, ore {s.time}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria eventi: colonne di foto in scorrimento continuo */}
      <section
        className="relative min-h-screen overflow-hidden py-20"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl" style={{ color: "var(--secondary-foreground)" }}>
              Ai miei eventi live hanno partecipato <Highlight dark>più di 500 persone</Highlight> e
              tutte sono tornate a casa con una visione nuova sulla loro comunicazione.
            </h2>
          </Reveal>
        </div>

        <div
          className="relative mt-14 grid grid-cols-3 gap-3 px-3 sm:grid-cols-5 sm:gap-4 sm:px-5"
          style={{ height: "max(46rem, calc(100vh + 16rem))" }}
        >
          {galleryColumns.map((col, ci) => (
            <div
              key={ci}
              className={`overflow-hidden rounded-xl ${ci >= 3 ? "hidden sm:block" : ""}`}
            >
              <div
                className={`flex flex-col gap-3 sm:gap-4 ${
                  ci % 2 === 0 ? "animate-marquee-down" : "animate-marquee-up"
                }`}
                style={{ animationDuration: `${28 + ci * 6}s` }}
              >
                {[...col, ...col].map((img, ii) => (
                  <img
                    key={ii}
                    src={img}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="aspect-[3/4] w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-40"
          style={{
            backgroundImage: "linear-gradient(180deg, var(--secondary), transparent)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40"
          style={{
            backgroundImage: "linear-gradient(0deg, var(--secondary), transparent)",
          }}
          aria-hidden
        />
      </section>

      {/* Cosa ti porti a casa */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Alla fine delle 3 serate avrai in mano il <Highlight>TUO</Highlight> metodo di
              comunicazione identitaria, che segue le tue regole per vendere online (e non quelle di
              altri).
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <img
                src={carlottaPresentingImg}
                alt="Carlotta Sgarra sul palco durante uno dei suoi speech"
                loading="lazy"
                width={3504}
                height={1972}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                style={{ objectPosition: "55% 15%" }}
              />
            </Reveal>

            <Reveal delay={60}>
              <div className="divide-y divide-ink/15">
                {takeawayCards.map(({ id, icon: Icon, title, text }) => (
                  <div key={id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <Icon className="mt-1 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-lg font-semibold text-ink sm:text-xl">{title}</p>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-muted sm:text-base">
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Per chi è / per chi non è */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-4xl">
              Ok, ma questo evento è <Highlight dark>giusto per te</Highlight> o no?
            </h2>
            <p className="mt-3 text-center text-base text-ink-muted sm:text-lg">
              Te lo dico subito.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="surface-card h-full p-7">
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-secondary">
                  Fa per te se…
                </p>
                <ul className="mt-5 space-y-4">
                  {forWhoYes.map((y) => (
                    <li key={y} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-0.5 text-secondary">✓</span>
                      <span>{y}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full p-7">
                <p className="font-condensed text-sm uppercase tracking-[0.18em] text-ink-muted/60">
                  Non fa per te se…
                </p>
                <ul className="mt-5 space-y-4">
                  {forWhoNo.map((n) => (
                    <li key={n} className="flex gap-3 text-sm leading-relaxed text-ink-muted/70">
                      <span className="mt-0.5 text-ink-muted/50">✕</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Riprova sociale */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              <Highlight dark>Ascolta le parole di chi ha già seguito il mio metodo</Highlight>
            </h2>
            <p className="mt-3 text-base text-ink-muted sm:text-lg">
              Se con loro ha funzionato, perché con te non dovrebbe funzionare?
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((c, i) => (
              <Reveal key={c.name} delay={(i % 8) * 40}>
                <div className="surface-card overflow-hidden">
                  <VideoFrame
                    label={c.name}
                    youtubeId={c.youtubeId}
                    poster={`https://img.youtube.com/vi/${c.youtubeId}/hqdefault.jpg`}
                  />
                  <div className="p-4">
                    <p className="font-condensed text-sm uppercase tracking-[0.12em] text-secondary">
                      {c.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{c.role}</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{c.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <CtaButton label="Voglio rompere le mie regole" />
          </div>
        </div>
      </section>

      {/* Bonus: il Workbook */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <Reveal>
              <Workbook />
            </Reveal>

            <div>
              <Reveal>
                <span
                  className="inline-block rounded-full px-5 py-2 font-condensed text-xs uppercase tracking-[0.25em] text-primary-foreground sm:text-sm"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  Durante le serate metterai in pratica tutto questo, ovviamente
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl">
                  Ricevi il <Highlight>Workbook</Highlight> di Rule The Rules
                </h2>
                <p className="mt-5 text-base leading-relaxed text-foreground/85">
                  Non è un PDF “in più”. È il documento che ti accompagna serata per serata, e che
                  alla fine delle tre giornate{" "}
                  <strong className="font-semibold text-foreground">
                    rappresenta fisicamente il percorso che hai fatto
                  </strong>
                  .
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {workbookDays.map((w, i) => (
                  <Reveal key={w.t} delay={i * 90}>
                    <div
                      className="surface-card p-5 transition-transform duration-300 hover:-translate-y-1"
                      style={{ boxShadow: "none" }}
                    >
                      <p className="font-condensed text-base uppercase tracking-[0.12em] text-secondary">
                        {w.t}
                      </p>
                      <p className="mt-2 text-sm text-foreground/80">{w.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <p className="mt-6 text-sm italic text-muted-foreground">
                  E alla fine, una pagina conclusiva tutta tua: “Le Mie Regole”, il manifesto
                  personale della tua comunicazione.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Chi sono */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <h2 className="text-3xl text-ink sm:text-4xl">
              Ho creato un’azienda da <em className="not-italic text-ink-muted/60">[fatturato]</em>{" "}
              di fatturato grazie a <Highlight dark>un’identità riconoscibile</Highlight>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <Reveal>
              <div className="space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Non sono nata con i riflettori puntati. Avevo solo un telefono in mano, due
                  fratelli nella stessa stanza e una paura fortissima di fallire agli occhi dei miei
                  genitori.
                </p>
                <p>
                  Pubblicavo in modo ossessivo e non avevo mai un risultato. Accettavo clienti che
                  non rispettavano il mio valore, vendendo a 200€. Studiavo fino alle 3 di notte pur
                  di sentirmi “abbastanza”, e ogni mese il conto in banca restava fisso sugli 800€,
                  nonostante 10 ore di lavoro al giorno.
                </p>
                <p>
                  Ma non ho mollato. Ho trasformato quella frustrazione in benzina e ho iniziato a
                  costruire pezzo dopo pezzo:{" "}
                  <strong className="font-semibold text-ink">
                    prima l’identità, poi i contenuti, poi le vendite
                  </strong>
                  .
                </p>
                <p>
                  Anche quando ho imparato a fare “tutto giusto” — avevo studiato il mercato
                  americano, spagnolo e italiano, e speso più di 70.000€ in formazione — il mio
                  business restava instabile: un mese 5.000€, un mese 800€.{" "}
                  <strong className="font-semibold text-ink">Quello che non c’era ero io.</strong>{" "}
                  Stavo eseguendo piani editoriali scritti da altri e regole decise da creator che
                  non conoscevo.
                </p>
                <p>
                  <strong className="font-semibold text-ink">
                    Non puoi costruire un’azienda sulla base del prodotto che sei. Puoi costruirla
                    solo sulla persona che sei.
                  </strong>{" "}
                  Da quel momento ho smesso di chiedermi “cosa funziona” e ho iniziato a chiedermi
                  chi volevo essere.
                </p>
                <p>
                  Sono cambiati i contenuti, sono cambiati i clienti, sono cambiati i soldi. È
                  arrivata la struttura, è arrivato un team che oggi è diventato famiglia, ed è
                  arrivato un metodo che ha funzionato per me e per centinaia di professioniste
                  italiane, ognuna con il proprio settore, il proprio pubblico, le proprie regole da
                  rompere.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-5">
                <img
                  src={carlottaPointingImg}
                  alt="Carlotta Sgarra sul palco durante uno dei suoi speech"
                  loading="lazy"
                  width={1376}
                  height={2064}
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <div className="grid grid-cols-2 gap-3">
                  {aboutStats.map((s) => (
                    <div
                      key={s.l}
                      className="rounded-xl bg-white p-4 text-center shadow-[0_16px_40px_-24px_rgba(0,0,0,0.15)]"
                    >
                      <div className="font-condensed text-xl" style={{ color: "var(--gold-deep)" }}>
                        {s.v}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prima vs dopo */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Cosa cambia <Highlight>dopo le tre serate</Highlight>
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-10 overflow-hidden rounded-xl border border-border/70">
              <div className="hidden sm:grid sm:grid-cols-2">
                <p className="border-b border-border/70 bg-card/60 px-6 py-3 font-condensed text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Prima
                </p>
                <p className="border-b border-l border-border/70 bg-card px-6 py-3 font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                  Dopo
                </p>
              </div>
              {beforeAfterTable.map((row, i) => (
                <div
                  key={row.before}
                  className={`grid gap-0 sm:grid-cols-2 ${i > 0 ? "border-t border-border/70" : ""}`}
                >
                  <div className="flex items-start gap-3 bg-card/60 p-5">
                    <span className="mt-0.5 shrink-0 text-muted-foreground">✕</span>
                    <span className="text-sm leading-relaxed text-foreground/75">{row.before}</span>
                  </div>
                  <div className="flex items-start gap-3 border-t border-border/70 bg-card p-5 sm:border-l sm:border-t-0">
                    <span className="mt-0.5 shrink-0 text-secondary">✓</span>
                    <span className="text-sm leading-relaxed text-foreground/90">{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* La scelta */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Da qui puoi andare in <Highlight>due direzioni</Highlight>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-border/70 bg-background p-5 sm:p-7">
                <p className="font-condensed text-lg uppercase tracking-[0.12em] text-muted-foreground">
                  {twoPaths.a.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{twoPaths.a.d}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="surface-card h-full p-5 sm:p-7">
                <p className="font-condensed text-lg uppercase tracking-[0.12em] text-secondary">
                  {twoPaths.b.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{twoPaths.b.d}</p>
                <div className="mt-6">
                  <CtaButton label="Ovviamente scelgo la B" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ricapitolando */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl">
                Registrati e ottieni <Highlight>tutto questo</Highlight>:
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-card mt-10 grid overflow-hidden sm:grid-cols-[0.9fr_1.1fr]">
              <img
                src={carlottaWalkingImg}
                alt="Carlotta Sgarra durante un suo evento live"
                loading="lazy"
                width={1376}
                height={2064}
                className="h-64 w-full object-cover sm:h-full"
                style={{ objectPosition: "60% 25%" }}
              />
              <div className="p-6 sm:p-8">
                <p className="font-condensed text-sm uppercase tracking-[0.2em] text-secondary">
                  Rule The Rules · Cosa ottieni
                </p>
                <p className="mt-1 text-xs text-muted-foreground">5, 6 e 7 ottobre 2026 · Online</p>

                <div className="mt-6 space-y-4 text-sm">
                  {valueStack.map((v) => (
                    <div key={v.t}>
                      <div className="flex items-baseline gap-2">
                        <span className="min-w-0 font-medium text-foreground">{v.t}</span>
                        <span
                          className="mb-1 flex-1 border-b border-dotted border-border"
                          aria-hidden
                        />
                        <span className="shrink-0">
                          {v.value ? (
                            <span className="text-muted-foreground line-through">{v.value}€</span>
                          ) : (
                            <span className="text-muted-foreground">–</span>
                          )}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{v.d}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-dashed border-border pt-4">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-foreground">Subtotale</span>
                    <span className="text-muted-foreground line-through">{valueStackTotal}€</span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between text-lg font-semibold">
                    <span className="text-foreground">Da pagare oggi</span>
                    <span style={{ color: "var(--gold-deep)" }}>27€</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex justify-center">
              <CtaButton label="Ok, mi hai convinta" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Garanzia rimborso */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-gold mx-auto max-w-3xl px-6 py-14 text-center sm:px-10 sm:py-16"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <p className="text-4xl">🛡️</p>
            <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">
              <Highlight>Soddisfatta o rimborsata</Highlight>, senza fare domande.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90">
              Se dopo la prima serata pensi che “Rule The Rules” non faccia per te, scrivici prima
              dell’inizio della seconda serata live (6 ottobre) e{" "}
              <strong className="font-semibold text-primary-foreground">
                ti rimborsiamo il biglietto, senza bisogno di spiegazioni
              </strong>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form iscrizione */}
      <section id="iscriviti" className="bg-secondary">
        <div className="mx-auto max-w-2xl px-5 py-20">
          <Reveal>
            <div className="surface-card p-8">
              <p className="text-center font-condensed text-3xl uppercase tracking-[0.1em] text-gradient-gold">
                27€
              </p>
              <p className="mt-2 text-center text-sm text-foreground/85">
                Il tuo biglietto per Rule The Rules 2026
              </p>
              <p className="mt-4 text-center text-sm text-foreground/85">
                Compila il form per <strong>riservare il tuo posto</strong> ↓
              </p>
              <SignupForm className="mt-8" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-3xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <h2 className="text-3xl text-ink sm:text-4xl">
              Domande <Highlight dark>Frequenti</Highlight>
            </h2>
            <p className="mt-3 text-sm text-ink-muted">
              Hai bisogno di supporto? Scrivi a{" "}
              <a
                href="mailto:info@carlottasgarra.it"
                className="underline"
                style={{ color: "var(--gold-deep)" }}
              >
                info@carlottasgarra.it
              </a>
            </p>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-ink/15">
                  <AccordionTrigger className="text-left text-base text-ink">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <section
        className="border-t border-border/60"
        style={{ backgroundImage: "var(--gradient-night)" }}
      >
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <p className="font-condensed text-2xl uppercase tracking-[0.2em] text-secondary">
              Il tuo posto ti aspetta:
            </p>
            <p className="mt-4 text-base text-foreground/85">
              Prendi il biglietto per Rule The Rules 2026 a 27€ e inizia a costruire{" "}
              <strong>il tuo modo di comunicare, quello che nessun’altra può copiare</strong>.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton label="Ultima chiamata, promesso" />
            </div>
            <p className="mt-10 text-sm italic text-muted-foreground">
              P.S. Ti hanno insegnato talmente bene a fare contenuti che hai smesso di esserci
              dentro. Il 5 ottobre iniziamo a cambiarlo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto max-w-4xl space-y-6 px-5 py-14 text-xs leading-relaxed text-muted-foreground">
          <p>
            Questo sito non fa parte del sito web di Facebook né di Meta Platforms, Inc. Inoltre,
            questo sito NON è approvato da Facebook in alcun modo. FACEBOOK è un marchio di Meta
            Platforms, Inc.
          </p>
          <p>
            Non possiamo e non garantiamo in alcun modo la tua capacità di ottenere risultati o
            guadagnare denaro con le nostre idee, informazioni, strumenti o strategie. Ciò che
            possiamo garantire è la tua soddisfazione con la nostra formazione. Offriamo una
            garanzia di soddisfazione al 100% per 30 giorni sui prodotti che vendiamo, quindi se non
            sei soddisfatto per qualsiasi motivo della qualità della nostra formazione, richiedi
            semplicemente il rimborso. Dovresti sapere che tutti i prodotti e servizi della nostra
            azienda sono solo a scopo educativo e informativo. Nulla in questa pagina, in nessuno
            dei nostri siti web o in qualsiasi nostro contenuto o curriculum costituisce una
            promessa o una garanzia di risultati o guadagni futuri, e non offriamo alcun consiglio
            legale, medico, fiscale o di altro tipo. Qualsiasi numero finanziario menzionato qui o
            in uno dei nostri siti è solo illustrativo di concetti e non deve essere considerato
            come guadagni medi, guadagni esatti o promesse di prestazioni attuali o future. Usa
            cautela e consulta sempre il tuo commercialista, avvocato o consulente professionale
            prima di agire su queste informazioni o su qualsiasi informazione relativa a un
            cambiamento di stile di vita, alla tua attività o alle tue finanze. Sei solo tu il
            responsabile delle tue decisioni, azioni e risultati nella vita, e con la tua
            registrazione qui accetti di non tentare di ritenerci responsabili per le tue decisioni,
            azioni o risultati, in qualsiasi momento e sotto qualsiasi circostanza.
          </p>
          <div className="border-t border-border pt-6">
            <p className="font-condensed uppercase tracking-[0.16em] text-foreground">
              C.S. Genesis Holding SRL
            </p>
            <p className="mt-2">P.iva: 14295170964</p>
            <p>Viale Emilio Caldara 44 - Milano</p>
            <p>
              Email:{" "}
              <a href="mailto:info@carlottasgarra.it" className="text-secondary">
                info@carlottasgarra.it
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
