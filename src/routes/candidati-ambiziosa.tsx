import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IdCard,
  CalendarDays,
  Heart,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Check,
  XCircle,
  Sparkles,
  ArrowRight,
  LayoutDashboard,
  Users,
  Video,
  ShieldCheck,
  Gift,
  Star,
  ChevronDown,
} from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AmbiziosaTopbar } from "@/components/landing/AmbiziosaTopbar";
import { AmbiziosaCtaButton } from "@/components/landing/AmbiziosaCtaButton";
import { AmbiziosaHeroVideo } from "@/components/landing/AmbiziosaHeroVideo";
import { TestimonialsExplorer } from "@/components/landing/TestimonialsExplorer";
import { submitAmbiziosaApplication } from "@/lib/ambiziosa-application";
import carlottaPresentingImg from "@/assets/carlotta-presenting.jpg";
import sharonSpeakingImg from "@/assets/sharon-speaking.jpg";
import carlottaHugImg from "@/assets/carlotta-hug.jpg";
import carlottaLookingImg from "@/assets/carlotta-looking-2.jpg";
import carlottaLookingWideImg from "@/assets/carlotta-looking.jpg";
import carlottaHeroBgImg from "@/assets/Carlotta bianco e nero che guarda in camera.jpg";
import carlottaLeftImg from "@/assets/Carlotta bianco e nerco che guarda a sinistra.jpg";
import carlottaTalkingImg from "@/assets/carlotta-talking.jpg";
import elenaRosaImg from "@/assets/elena-rosa.jpg";
import silviaBedinImg from "@/assets/silvia-bedin.jpg";
import mariangelaSimioliImg from "@/assets/mariangela-simioli.jpg";
import giuliaSantelliImg from "@/assets/giulia-santelli.jpg";
import ilariaMatteiImg from "@/assets/ilaria-mattei.jpg";
import giuliaAriganelloImg from "@/assets/giulia-ariganello.jpg";
import valeriaSalussoliImg from "@/assets/valeria-salussoli.avif";
import vanessaSciorioImg from "@/assets/vanessa-sciorio.jpg";
import elisaMonasteroloImg from "@/assets/elisa-monasterolo.jpg";
import giusyPanneseImg from "@/assets/giusy-pannese.jpg";
import biancaLucaciImg from "@/assets/bianca-lucaci.jpg";
import rosannaCafarellaImg from "@/assets/rosanna-cafarella.jpg";
import mariannaTaurielloImg from "@/assets/marianna-tauriello.jpg";
import valentinaGiuriatoImg from "@/assets/valentina-giuriato.jpg";
import sharonConvertinoImg from "@/assets/sharon-convertino.jpg";
import silviaErricoImg from "@/assets/silvia-errico.jpeg";
import elisabettaBettonteImg from "@/assets/elisabetta-bettonte.jpg";
import francescaSolignaniImg from "@/assets/francesca-solignani.jpeg";
import cristinaBuligaImg from "@/assets/cristina-buliga.jpg";
import robertaTrabuccoImg from "@/assets/roberta-trabucco.jpg";
import martinaFerrariImg from "@/assets/martina-ferrari.jpg";
import client1Img from "@/assets/client-1.jpg";
import client2Img from "@/assets/client-2.png";
import client3Img from "@/assets/client-3.png";
import client4Img from "@/assets/client-4.jpg";
import client5Img from "@/assets/client-5.png";

// ---------------------------------------------------------------------------
// Microcopy condiviso — l'hero (sezione 2) e ogni box CTA ricorrente
// (sezione 5) devono usare esattamente questo stesso testo, senza varianti.
// ---------------------------------------------------------------------------
const ANCHOR = "#candidatura";
const CTA_LABEL = "Voglio candidarmi ad Ambiziosa";
const REASSURANCE = "Ti rispondo entro 48 ore.";

// Testo del box CTA ricorrente (CtaBox): stesso identico testo in ogni
// sezione che lo richiama, come da indicazione esplicita.
const CTA_BOX_CONTEXT = (
  <>
    4 mesi con me e il mio team:{" "}
    <strong className="font-semibold">
      una strategia di comunicazione completa che parte da te
    </strong>
    , messa in pratica <strong className="font-semibold">fin dalle prime call</strong>.
  </>
);

// ---------------------------------------------------------------------------
// Dati reali (struttura e contenuti confermati)
// ---------------------------------------------------------------------------

// Un settore per pillola, abbinato alla testimonianza più rappresentativa
// (stessa persona/video presente in VIDEO_TESTIMONIALS più sotto) per il
// fumetto che appare al passaggio del mouse (o al tocco, da telefono).
const SECTOR_TESTIMONIALS = [
  {
    sector: "Coach",
    name: "Silvia Bedin",
    before: "Life coach, solo offerte low ticket: 400€/mese.",
    after: "31.000€ in organico in poche settimane.",
    photo: silviaBedinImg,
  },
  {
    sector: "Consulenti d'immagine",
    name: "Valentina Giuriato",
    before: "Faceva tutto da sola, nessun flusso costante di clienti.",
    after: "Business trasformato, pieno di clienti allineati.",
    photo: valentinaGiuriatoImg,
  },
  {
    sector: "Nutrizioniste",
    name: "Vanessa Sciorio",
    before: "Clientela insufficiente, difficoltà a comunicare il suo valore.",
    after: "Fatturato a cinque cifre mensili, clientela targetizzata.",
    photo: vanessaSciorioImg,
  },
  {
    sector: "Tatuatrici",
    name: "Rosanna Cafarella",
    before: "10 anni di esperienza, ma clienti low cost e poco costanti.",
    after: "10.000€ mensili costanti in soli 3 mesi.",
    photo: rosannaCafarellaImg,
  },
  {
    sector: "Makeup artist",
    name: "Giusy Pannese",
    before: "Agenda piena ma clientela solo locale, tariffe basse.",
    after: "Spose a livello nazionale e internazionale.",
    photo: giusyPanneseImg,
  },
  {
    sector: "SEO e copywriter",
    name: "Ilaria Mattei",
    before: "Nessuna offerta chiara, prezzi troppo bassi.",
    after: "6.500€/mese costanti, poi 10.000€.",
    photo: ilariaMatteiImg,
  },
  {
    sector: "Wedding planner",
    name: "Martina Ferrari",
    before: "Business avviato ma identità professionale in crisi.",
    after: "30 clienti e fatturato raddoppiato in 6 mesi.",
    photo: martinaFerrariImg,
  },
  {
    sector: "Brand strategist",
    name: "Elisa Monasterolo",
    before: "Vicina a chiudere la P.IVA, nessuna stabilità.",
    after: "Stabilità economica vera, clienti a lungo termine.",
    photo: elisaMonasteroloImg,
  },
];

// Stesso bannerino "avatar + stelle" già usato in Rule the Rules (src/routes/index.tsx).
const HERO_SOCIAL_AVATARS = [client1Img, client2Img, client3Img, client4Img, client5Img];

// Testi accorciati rispetto all'originale per stare nei riquadri a destra
// della sezione hero (su richiesta esplicita, non sono più il copy esatto).
// "bold" è la parte in grassetto, "rest" il resto della frase.
const HERO_CHECKLIST = [
  { bold: "4 mesi di percorso", rest: ", seguita da me con call dedicate" },
  {
    bold: "Una strategia completa",
    rest: " sulla tua identità e sulla tua unicità, costruita sul tuo progetto",
  },
  { bold: "Contenuti che ti rispecchiano al 100%", rest: ": sai sempre cosa pubblicare" },
  {
    bold: "Un metodo già provato",
    rest: " da centinaia di professioniste, in settori molto diversi",
  },
];

// Frasi che le professioniste si ritrovano a dirsi (sezione 3b, reframe del
// problema): copy esatto fornito, testo tra virgolette perché sono pensieri
// riportati in prima persona.
const CONTENT_PAIN_POINTS = [
  "Non so più cosa pubblicare.",
  "Ho salvato mille strategie e alla fine sono ancora più confusa.",
  "Il piano editoriale mi fa sentire in gabbia.",
  "Quando registro mi sembra di recitare.",
  "Non mi riconosco più in quello che pubblico.",
  "Vedo le altre e mi sembra di essere uguale.",
];

// Giornata tipo dopo Ambiziosa (sezione 3c): copy esatto fornito, spezzato
// in label (il momento della giornata) + testo del riquadro.
// Titoli che sintetizzano il contenuto di ogni riquadro (non più l'orario
// della giornata), con un'icona coerente per ciascuno.
const JOURNEY_STEPS = [
  {
    label: "Identità chiara",
    icon: IdCard,
    text: (
      <>
        Una mattina qualsiasi apri il tuo profilo Instagram e pensi:{" "}
        <strong className="font-semibold">questa sono io.</strong> Quello che pubblichi racconta chi
        sei e cosa fai: chi arriva sulla tua pagina lo capisce in pochi secondi.
      </>
    ),
  },
  {
    label: "Piano editoriale cucito su di te",
    icon: CalendarDays,
    text: (
      <>
        Quando decidi cosa pubblicare apri la tua banca idee, scegli e registri con{" "}
        <strong className="font-semibold">
          la serenità di chi sa perché sta dicendo quella cosa
        </strong>
        . Hai una struttura che ti sostiene, quindi sei libera di essere creativa.
      </>
    ),
  },
  {
    label: "Clienti in target",
    icon: Users,
    text: (
      <>
        Nel pomeriggio rispondi ai messaggi di persone che hanno già capito cosa fai e perché sei
        diversa. Le loro richieste sono dettagliate e mirate, il tuo prezzo lo dici con sicurezza e{" "}
        <strong className="font-semibold">scegli tu con chi lavorare</strong>.
      </>
    ),
  },
  {
    label: "Un brand riconoscibile",
    icon: Sparkles,
    text: (
      <>
        La sera chiudi il computer senza la sensazione di essere sempre un passo indietro. Se scorri
        i profili delle altre lo fai con serenità, perché{" "}
        <strong className="font-semibold">il tuo si riconosce tra tutti</strong>.{" "}
        <strong className="font-semibold">La tua ambizione si è riversata nel tuo business</strong>,
        che ora ti rispecchia davvero.
      </>
    ),
  },
  {
    label: "Il metodo è tuo",
    icon: ShieldCheck,
    text: (
      <>
        E quando arriva il momento di costruire la strategia successiva la fai tu, partendo da
        quello che sei, perché{" "}
        <strong className="font-semibold">il metodo ormai lo conosci e sai usarlo da sola</strong>.
      </>
    ),
  },
];

const steps = [
  {
    n: "01",
    title: "Radica chi sei",
    subtitle: "Costruzione Identità e Offerta",
    description:
      "Costruiamo insieme la tua Identità e la tua Offerta: le basi di un business identitario e fruttuoso.",
  },
  {
    n: "02",
    title: "Progetta i contenuti",
    subtitle: "Costruzione Strategia Contenuti Identitaria e Piano Editoriale ad hoc",
    description:
      "Costruiamo la tua Strategia Contenuti Identitaria e il tuo Piano Editoriale ad hoc.",
  },
  {
    n: "03",
    title: "Attiva i contenuti",
    subtitle: "Pubblicazione con editing identitario e strategie per vendere",
    description:
      "Pubblichiamo i contenuti con editing identitario e strategie pensate per vendere.",
  },
  {
    n: "04",
    title: "Chiudi e scala",
    subtitle: "Dal follower al cliente, tra DM e call conoscitiva",
    description: "Trasformiamo il follower in cliente, tra DM e call conoscitiva.",
  },
];

const pricingTiers = [
  {
    id: "program",
    name: "Ambiziosa Program",
    payoff: "Trasformiamo la tua Ambizione in Carriera",
    price: "5.000€",
    priceNote: "IVA inclusa",
    duration: "4 mesi di percorso",
    recommended: true,
    features: [
      "Materiali audio/video ed esercizi pratici per ogni step",
      "5 call totali: 1 call iniziale + 1 call dopo ogni step",
      "GPT dedicato per i contenuti in stile alter-ego",
      "Notion dedicato al percorso",
      "Community Slack",
      "Lavoro diretto con Carlotta e Sharon",
      "Assistenza lunedì–giovedì, 10:00–16:00",
    ],
  },
  {
    id: "mentorship",
    name: "Ambiziosa Mentorship",
    payoff: "Trasformiamo la tua Ambizione in Carriera",
    price: "7.000€",
    priceNote: "IVA inclusa",
    duration: "4 mesi di percorso",
    recommended: false,
    features: [
      "Materiali audio/video ed esercizi pratici per ogni step",
      "Call 1:1 illimitate per tutti i 4 mesi",
      "GPT dedicato per i contenuti in stile alter-ego",
      "Notion dedicato al percorso",
      "Community Slack",
      "Lavoro diretto con Carlotta e Sharon",
      "Assistenza lunedì–giovedì, 10:00–16:00",
    ],
  },
];

// Stessa sezione "video testimonianze" di Rule the Rules (src/routes/index.tsx,
// costante videoTestimonials), importata qui tale quale: stesso componente
// TestimonialsExplorer, stessi dati, stesse card.
const videoTestimonials = [
  {
    name: "Elena Rosa",
    role: "Mental Coach Cinofila",
    tagline: "Da lavorare tantissimo senza risultati a superare i 5.000€/mese.",
    before:
      "Quando ha iniziato il percorso, Elena si trovava in una fase delicata: tanta voglia di crescere, un progetto forte tra le mani, ma ancora nessuna struttura per farlo diventare un business sostenibile. Lavorava tantissimo senza una vera direzione strategica.",
    after: (
      <>
        Ha chiarito il suo posizionamento come mental coach nel mondo cinofilo, strutturato
        un’offerta forte e alzato i prezzi. Oggi supera i{" "}
        <strong className="font-semibold text-ink">5.000€ al mese</strong> ed è la sua vita a
        basarsi sul business, non più il contrario.
      </>
    ),
    youtubeId: "O75oxbgxdjY",
    photo: elenaRosaImg,
  },
  {
    name: "Silvia Bedin",
    role: "Life Coach",
    tagline: "Da 400€/mese a 31.000€ in organico in poche settimane.",
    before:
      "Silvia lavorava come coach energetica con sole offerte low ticket. Dopo un anno e mezzo guadagnava in media 400€ al mese e non aveva una struttura chiara: mancavano identità, offerta e direzione.",
    after: (
      <>
        Ha costruito un business autentico, fondato su un’offerta high ticket chiara e potente. In
        poche settimane ha generato{" "}
        <strong className="font-semibold text-ink">31.000€ in organico</strong>, superando
        definitivamente il loop dei low ticket.
      </>
    ),
    youtubeId: "A0vabIP_Srk",
    photo: silviaBedinImg,
  },
  {
    name: "Valeria Salussolia",
    role: "Titolare di un Centro Benessere & Consulente d’Immagine",
    tagline: "Fattura in una settimana quello che guadagnava in un mese da dipendente.",
    before:
      "Valeria lavorava come estetista con contratti instabili e provava, senza convinzione, ad avviare la consulenza d’immagine online. Dopo l’ennesimo licenziamento ha deciso di cambiare tutto e ha trovato lo spazio per il suo primo centro.",
    after: (
      <>
        Ha un’attività tutta sua, costruita sulle sue vere competenze. Oggi{" "}
        <strong className="font-semibold text-ink">
          fattura in una settimana quello che guadagnava in un mese da dipendente
        </strong>{" "}
        e si sente finalmente protagonista della sua vita.
      </>
    ),
    youtubeId: "gFKD9AkVaZw",
    photo: valeriaSalussoliImg,
  },
  {
    name: "Mariangela Simioli",
    role: "Marketing Strategist",
    tagline: "Regime forfettario superato in 4 mesi, obiettivo 500k in vista.",
    before:
      "Si è licenziata da una multinazionale, con tante paure e appena 500€ sul conto. Il suo business era tutto da costruire: offerta, personal brand, contenuti, vendita.",
    after: (
      <>
        Ha superato il{" "}
        <strong className="font-semibold text-ink">regime forfettario in soli 4 mesi</strong>,
        costruendosi una vita basata sul suo business. Vive di clienti costanti ogni settimana e ha
        in progetto un fatturato di 500k.
      </>
    ),
    youtubeId: "Qd6QLXPzcMs",
    photo: mariangelaSimioliImg,
  },
  {
    name: "Giulia Santelli",
    role: "Personal Trainer e Life Coach",
    tagline: "Con soli 6 contenuti, clienti high ticket da 2.000€.",
    before:
      "Giulia lavorava come networker e dipendente all’estero, divisa tra mille lavori. Si sentiva un criceto sulla ruota: sempre di corsa, mai pagata davvero per il valore che dava.",
    after: (
      <>
        Si è licenziata dal lavoro da dipendente, ha{" "}
        <strong className="font-semibold text-ink">raddoppiato lo stipendio</strong> in pochi mesi e
        vive del suo programma personale. Con soli 6 contenuti ha chiuso{" "}
        <strong className="font-semibold text-ink">clienti high ticket da 2.000€</strong>.
      </>
    ),
    youtubeId: "MVOsgoJEHI0",
    photo: giuliaSantelliImg,
  },
  {
    name: "Ilaria Mattei",
    role: "SEO e Copywriter",
    tagline: "Da nessuna offerta chiara a 6.500€/mese costanti, poi 10.000€.",
    before:
      "Quando è arrivata, non sapeva nemmeno da dove iniziare. Non conosceva davvero il suo valore: nessuna offerta chiara, nessun contenuto, prezzi troppo bassi per la qualità che offriva.",
    after: (
      <>
        Ha un business strutturato e replicabile. Incassa{" "}
        <strong className="font-semibold text-ink">6.500€ al mese in modo costante</strong> e ha
        raddoppiato il suo obiettivo iniziale, toccando i{" "}
        <strong className="font-semibold text-ink">10.000€</strong>.
      </>
    ),
    youtubeId: "BxQDPKy141U",
    photo: ilariaMatteiImg,
  },
  {
    name: "Giulia Ariganello",
    role: "Business Mentor per le Educatrici",
    tagline: "Fatturato mensile a cinque cifre, figura di riferimento nel settore.",
    before:
      "Giulia si sentiva bloccata nel suo percorso imprenditoriale. Non aveva una direzione chiara, faticava a definire la sua offerta e a comunicare il proprio valore professionale.",
    after: (
      <>
        In pochi mesi ha radicalmente trasformato il suo business, raggiungendo un{" "}
        <strong className="font-semibold text-ink">fatturato mensile a cinque cifre</strong>. Ora è
        una figura di riferimento per le educatrici del suo settore.
      </>
    ),
    youtubeId: "Qzhc1dBGVpM",
    photo: giuliaAriganelloImg,
  },
  {
    name: "Vanessa Sciorio",
    role: "Nutrizionista al femminile",
    tagline: "Fatturato a cinque cifre mensili, clientela finalmente targetizzata.",
    before:
      "Vanessa lottava per ottenere una clientela sufficiente e stabile. Sapeva di avere valore, ma si sentiva bloccata nel comunicarlo e nel far crescere il suo business.",
    after: (
      <>
        In pochi mesi ha raggiunto un{" "}
        <strong className="font-semibold text-ink">fatturato a cinque cifre mensili</strong>,
        acquisendo una clientela targetizzata e consolidando la sua posizione come nutrizionista di
        riferimento.
      </>
    ),
    youtubeId: "mJh2hT3BIgE",
    photo: vanessaSciorioImg,
  },
  {
    name: "Elisa Monasterolo",
    role: "Brand Strategist",
    tagline: "Da vicina a chiudere la P.IVA a stabilità economica vera.",
    before:
      "Elisa si trovava in un momento critico, considerando persino di chiudere la partita IVA. Dopo numerosi preventivi rifiutati, sentiva l’ansia della mancanza di stabilità.",
    after: (
      <>
        Ha trasformato mentalità e attività, raggiungendo una{" "}
        <strong className="font-semibold text-ink">stabilità economica</strong> e clienti a lungo
        termine. Vive del suo business con un solido equilibrio finanziario.
      </>
    ),
    youtubeId: "fB1zSchLTiI",
    photo: elisaMonasteroloImg,
  },
  {
    name: "Giusy Pannese",
    role: "Makeup Artist",
    tagline: "Da clientela solo locale a spose a livello internazionale.",
    before:
      "Giusy si sentiva bloccata nonostante un’agenda piena di clienti. Aveva difficoltà a valorizzare il proprio lavoro, limitandosi a richieste generiche e a una clientela locale.",
    after: (
      <>
        In pochi mesi ha acquisito sicurezza, aumentato le tariffe e ampliato il mercato, arrivando
        a{" "}
        <strong className="font-semibold text-ink">
          spose a livello nazionale e internazionale
        </strong>
        .
      </>
    ),
    youtubeId: "IUeaewJX9iU",
    photo: giusyPanneseImg,
  },
  {
    name: "Bianca Lucaci",
    role: "Influencer Coach",
    tagline: "Dalla commessa alla prima Academy per influencer in Italia.",
    before:
      "Bianca si sentiva bloccata nel suo lavoro come commessa in un centro commerciale. Aveva il sogno di trasformare la sua passione in una vera carriera, ma non sapeva come fare il salto.",
    after: (
      <>
        Ha lasciato il lavoro, creato la{" "}
        <strong className="font-semibold text-ink">prima Academy per influencer in Italia</strong> e
        raggiunto la libertà finanziaria e personale che desiderava.
      </>
    ),
    youtubeId: "Kw2nsluTO2A",
    photo: biancaLucaciImg,
  },
  {
    name: "Rosanna Cafarella",
    role: "Tatuatrice",
    tagline: "10.000€ mensili costanti in soli 3 mesi.",
    before:
      "Rosanna, tatuatrice con 10 anni di esperienza, lottava con clienti low cost e richieste poco costanti, senza riuscire a comunicare la sua unicità.",
    after: (
      <>
        In soli <strong className="font-semibold text-ink">tre mesi</strong> ha raggiunto{" "}
        <strong className="font-semibold text-ink">10.000€ mensili costanti</strong> con un business
        riorganizzato, attirando una clientela in linea con il suo stile unico.
      </>
    ),
    youtubeId: "Ek8tUbgTJGk",
    photo: rosannaCafarellaImg,
  },
  {
    name: "Mariella Tauriello",
    role: "Instagram e Visual Coach",
    tagline: "Programma sold out grazie a contenuti finalmente chiari.",
    before:
      "Mariella si sentiva bloccata e sopraffatta da troppe idee. Non riusciva a concretizzare la formazione ricevuta in un business sano e pieno di clienti.",
    after: (
      <>
        In pochi mesi ha esaurito le iscrizioni al suo{" "}
        <strong className="font-semibold text-ink">programma sold out</strong>, grazie a una
        gestione chiara dei contenuti su Instagram e a un’offerta finalmente mirata.
      </>
    ),
    youtubeId: "-D9QGDLWue0",
    photo: mariannaTaurielloImg,
  },
  {
    name: "Valentina Giuriato",
    role: "Consulente d’Immagine",
    tagline: "Business trasformato e riempito di clienti allineati.",
    before:
      "Valentina, abituata a fare tutto da sola, aveva difficoltà a comunicare la sua offerta unica e a ottenere un flusso costante di clienti.",
    after: (
      <>
        Ha trasformato e <strong className="font-semibold text-ink">riempito di clienti</strong> il
        suo business, imparando a valorizzare la sua unicità con un aumento significativo del
        fatturato.
      </>
    ),
    youtubeId: "yDGIN_aaz0k",
    photo: valentinaGiuriatoImg,
  },
  {
    name: "Sharon Convertino",
    role: "Social Media Manager e Consulente di Web Marketing",
    tagline: "Da burnout a selezionare lei stessa i propri clienti.",
    before:
      "Clienti tossici e una situazione di burnout l’avevano portata a voler abbandonare tutto. Nonostante la sua competenza, si sottovalutava e non chiedeva il giusto compenso.",
    after: (
      <>
        Ha ritrovato sicurezza in sé stessa. Ora è lei a{" "}
        <strong className="font-semibold text-ink">selezionare i clienti</strong>, offrendo servizi
        di alta qualità senza più compromessi.
      </>
    ),
    youtubeId: "eA4QQQXlG54",
    photo: sharonConvertinoImg,
  },
  {
    name: "Silvia Errico",
    role: "Coach di LinkedIn e Instagram",
    tagline: "Da zero clienti a vivere del proprio lavoro.",
    before:
      "Silvia partiva da tanta paura, zero clienti e un business inesistente. Era bloccata dal giudizio su sé stessa, incapace di mostrarsi come la professionista che era.",
    after: (
      <>
        Ha completamente trasformato mentalità e business. Ora{" "}
        <strong className="font-semibold text-ink">vive del suo lavoro</strong>, con un’attività che
        riflette al 100% la sua personalità.
      </>
    ),
    youtubeId: "G-ElGXQXcNg",
    photo: silviaErricoImg,
  },
  {
    name: "Elisabetta Bettonte",
    role: "Parent Coach",
    tagline: "Da -10.000€ a 6.000€ mensili, ora seleziona lei i clienti.",
    before:
      "Partiva da una situazione di -10.000€, dopo aver investito in molteplici corsi senza risultati concreti. Aveva una motivazione bassissima.",
    after: (
      <>
        Ha raggiunto i <strong className="font-semibold text-ink">6.000€ mensili</strong>,
        trasformandosi in una vera imprenditrice. Ora è lei a selezionare i clienti, con una
        mentalità vincente.
      </>
    ),
    youtubeId: "zVAuDJ4xJC8",
    photo: elisabettaBettonteImg,
  },
  {
    name: "Francesca Solignani",
    role: "Instagram Coach per Nutrizionisti",
    tagline: "Da zero richieste a flusso costante di clienti.",
    before:
      "Francesca era in una fase di stallo, con zero richieste da parte dei clienti. Veniva da un’esperienza negativa con un coaching precedente che l’aveva lasciata demotivata.",
    after: (
      <>
        Oggi è una <strong className="font-semibold text-ink">figura di riferimento</strong> nel
        settore dei nutrizionisti su Instagram, con un flusso costante di clienti e piena
        soddisfazione personale.
      </>
    ),
    youtubeId: "h7V0kkYzhec",
    photo: francescaSolignaniImg,
  },
  {
    name: "Cristina Buliga",
    role: "Life & Business Coach",
    tagline: "Cinque clienti High Ticket acquisiti in quattro mesi.",
    before:
      "Cristina si trovava in una fase di confusione, con tante idee ma senza sapere come trasformarle in un’offerta concreta e attrarre i primi clienti.",
    after: (
      <>
        In soli quattro mesi ha acquisito{" "}
        <strong className="font-semibold text-ink">cinque clienti High Ticket</strong> e lanciato
        con successo il suo business, con una presenza online che converte follower in clienti.
      </>
    ),
    youtubeId: "8JrTY4ulPZQ",
    photo: cristinaBuligaImg,
  },
  {
    name: "Roberta Trabucco",
    role: "Make Up Alchemist",
    tagline: "Ha creato un’identità unica: la “Make Up Alchemist”.",
    before:
      "Roberta ha attraversato momenti difficili: dopo aver perso il lavoro si è trovata a un punto morto, senza una direzione chiara su come reinventarsi.",
    after: (
      <>
        Ha unito le sue diverse competenze in un’identità unica, la{" "}
        <strong className="font-semibold text-ink">“Make Up Alchemist”</strong>. Ora seleziona i
        clienti allineati alla sua visione, con serenità e consapevolezza.
      </>
    ),
    youtubeId: "2Q3Keue0i7w",
    photo: robertaTrabuccoImg,
  },
  {
    name: "Martina Ferrari",
    role: "Wedding Planner · Coach per Wedding Planner",
    tagline: "Da crisi d’identità come wedding planner a 30 clienti in 6 mesi.",
    before:
      "Quando ha iniziato il percorso, Martina aveva già un business avviato come wedding planner, clienti e risultati, ma si trovava in una fase di forte confusione. Sentiva che quel ruolo non riusciva più a rappresentarla completamente e cercava di incastrarsi in un’identità professionale che ormai le stava stretta.",
    after: (
      <>
        Ha capito di non essere soltanto una wedding planner, ma{" "}
        <strong className="font-semibold text-ink">un’imprenditrice</strong> con il bisogno di
        creare, evolvere e mettere tutte le sue competenze in un progetto che la rappresentasse
        davvero. Ha creato il suo programma dedicato alle professioniste del mondo wedding e, nei
        primi sei mesi, ha raggiunto{" "}
        <strong className="font-semibold text-ink">30 clienti e raddoppiato il fatturato</strong>.
        Continua a far evolvere il suo brand e sta per aprire anche il suo studio.
      </>
    ),
    youtubeId: "lFtIzpBgW9c",
    photo: martinaFerrariImg,
  },
];

const faqs = [
  {
    q: "Come funziona la candidatura, cosa succede dopo che la invio?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, riceverai una risposta entro 48 ore lavorative con i prossimi passi.",
  },
  {
    q: "Qual è la differenza tra Program e Mentorship?",
    a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat: l'impianto è identico, cambia solo la modalità delle call di accompagnamento.",
  },
  {
    q: "Devo aver già seguito Rule the Rules per candidarmi?",
    a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    q: "Quali sono le modalità di pagamento?",
    a: "Curabitur pretium tincidunt lacus, ut interdum tellus elit sed risus, maecenas eget condimentum velit, sit amet feugiat lectus, ne parliamo nel dettaglio durante la call di candidatura.",
  },
  {
    q: "Quanto tempo a settimana richiede il percorso?",
    a: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas, vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante donec eu libero.",
  },
  {
    q: "Funziona anche se il mio settore è molto tecnico/di nicchia?",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
  },
  {
    q: "Cosa succede se dopo la candidatura non vengo selezionata / decido di non proseguire?",
    a: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est.",
  },
];

const forWhoCards = [
  {
    n: "01",
    role: "La coach 1:1",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ha costruito le fondamenta ma non le ha ancora rese un sistema.",
  },
  {
    n: "02",
    role: "La consulente",
    lorem:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, sa esattamente chi è ma fatica a trasformarlo in contenuti che vendono.",
  },
  {
    n: "03",
    role: "La professionista con servizi 1:1",
    lorem:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, ha clienti soddisfatte ma nessun sistema per acquisirne di nuove con costanza.",
  },
  {
    n: "04",
    role: "La professionista in transizione",
    lorem:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sta cambiando direzione e vuole ripartire su basi solide, questa volta.",
  },
];

const notForYouPoints = [
  "Lorem ipsum dolor sit amet, stai cercando l'ennesimo corso da guardare senza mai applicarlo.",
  "Consectetur adipiscing elit, non hai ancora chiuso nessuna delle 3 serate di Rule the Rules.",
  "Sed do eiusmod tempor incididunt, cerchi un format già pronto invece di costruire il tuo sistema identitario.",
];

const scenarios = [
  "Lorem ipsum dolor sit amet, apri Instagram e sai esattamente cosa pubblicare oggi, senza ansia da pagina bianca.",
  "Consectetur adipiscing elit, rispondi a un DM e nel giro di pochi minuti fissi una call conoscitiva.",
  "Sed do eiusmod tempor incididunt, chiudi la settimana sapendo esattamente da dove arriveranno le prossime clienti.",
  "Ut labore et dolore magna aliqua, guardi il calendario dei contenuti e non è più un pensiero, è un sistema che gira da solo.",
  "Quis nostrud exercitation ullamco laboris, ti senti finalmente riconoscibile in un mercato pieno di professioniste uguali.",
];

const beforeAfterRows = [
  {
    before: "“Lavoro tantissimo e a fine mese guadagno troppo poco.”",
    after: "“Guadagno molto di più, in proporzione al valore che porto ai miei clienti.”",
  },
  {
    before: "“Mi sottovaluto: i miei prezzi sono troppo bassi per la qualità che offro.”",
    after: "“So quanto vale il mio lavoro e chiedo il giusto compenso con sicurezza.”",
  },
  {
    before: "“Tengo clienti che mi sfiniscono per paura di restare senza.”",
    after: "“Scelgo io con chi lavorare.”",
  },
  {
    before: "“Le richieste che ricevo sono generiche e arrivano a singhiozzo.”",
    after: "“Mi scrivono persone che hanno già capito cosa faccio e vogliono lavorare con me.”",
  },
  {
    before: "“Vorrei che essere me bastasse.”",
    after: "“Essere me basta: mi riconoscono e mi scelgono per come sono.”",
  },
  {
    before: "“Ho speso tempo e soldi in corsi e coach e i risultati concreti non sono arrivati.”",
    after: "“Ho una strategia costruita sul mio progetto e la applico da subito.”",
  },
  {
    before: "“Ogni volta mi serve qualcuno che mi dica cosa comunicare.”",
    after: "“So come far evolvere da sola la mia strategia di comunicazione.”",
  },
];

const marketBreakdown = [
  {
    label: "Una consulenza 1:1 su identità e posizionamento",
    value: "1.500€",
    unit: "una tantum",
  },
  {
    label: "Un percorso di content strategy dedicato",
    value: "2.200€",
    unit: "/ 3 mesi",
  },
  {
    label: "Accesso a una community di professioniste ambiziose",
    value: "600€",
    unit: "/ anno",
  },
  {
    label: "Accompagnamento diretto su vendita e chiusura clienti",
    value: "1.800€",
    unit: "/ 3 mesi",
  },
];

const stepMockups = [
  // 01 · Radica chi sei → mockup "Carta Identitaria"
  <div className="surface-card mx-auto w-full max-w-xs p-5" style={{ borderRadius: "1.25rem" }}>
    <div className="flex items-center gap-3">
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      >
        <IdCard className="size-5 text-primary-foreground" />
      </span>
      <div className="min-w-0">
        <p className="eyebrow">Carta Identitaria</p>
        <p className="text-sm font-semibold text-foreground">Il tuo DNA comunicativo</p>
      </div>
    </div>
    <div className="mt-4 space-y-2">
      {[100, 80, 90, 60].map((w, i) => (
        <div key={i} className="h-2 rounded-full bg-foreground/10" style={{ width: `${w}%` }} />
      ))}
    </div>
  </div>,
  // 02 · Progetta i contenuti → mockup piano editoriale
  <div className="surface-card mx-auto w-full max-w-xs p-5" style={{ borderRadius: "1.25rem" }}>
    <div className="flex items-center gap-3">
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      >
        <CalendarDays className="size-5 text-primary-foreground" />
      </span>
      <p className="text-sm font-semibold text-foreground">Piano editoriale ad hoc</p>
    </div>
    <div className="mt-4 grid grid-cols-4 gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-md"
          style={
            [0, 2, 5, 7].includes(i)
              ? { backgroundImage: "var(--gradient-gold)" }
              : { backgroundColor: "color-mix(in oklab, var(--foreground) 8%, transparent)" }
          }
        />
      ))}
    </div>
  </div>,
  // 03 · Attiva i contenuti → mockup post pubblicato
  <div
    className="surface-card mx-auto w-full max-w-xs overflow-hidden"
    style={{ borderRadius: "1.25rem" }}
  >
    <div className="flex items-center gap-2 p-3">
      <span className="size-7 shrink-0 rounded-full bg-foreground/15" />
      <div className="h-2 w-24 rounded-full bg-foreground/15" />
    </div>
    <div className="aspect-square w-full" style={{ backgroundImage: "var(--gradient-gold)" }} />
    <div className="flex items-center gap-3 p-3 text-primary">
      <Heart className="size-4 fill-current" />
      <MessageCircle className="size-4" />
    </div>
  </div>,
  // 04 · Chiudi e scala → mockup DM → call
  <div
    className="surface-card mx-auto w-full max-w-xs space-y-2 p-5"
    style={{ borderRadius: "1.25rem" }}
  >
    <div
      className="ml-auto w-3/4 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-gold)" }}
    >
      Ciao! Mi racconti come lavori?
    </div>
    <div className="w-3/4 rounded-2xl rounded-tl-sm bg-foreground/10 px-3 py-2 text-xs text-foreground/80">
      Certo, prenotiamo una call conoscitiva?
    </div>
    <div className="mt-3 flex items-center gap-2 rounded-xl border border-primary/40 px-3 py-2 text-xs font-semibold text-secondary">
      <PhoneCall className="size-4" />
      Call conoscitiva fissata
    </div>
  </div>,
];

const inputClassName =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-card-foreground/50 focus:border-primary";

// ---------------------------------------------------------------------------

export const Route = createFileRoute("/candidati-ambiziosa")({
  head: () => ({
    meta: [
      { title: "Candidatura Ambiziosa — Program e Mentorship" },
      {
        name: "description",
        content:
          "Candidati ad Ambiziosa Program o Ambiziosa Mentorship: il percorso di mentoring per trasformare il lavoro fatto a Rule the Rules in un sistema di comunicazione e acquisizione clienti operativo.",
      },
    ],
  }),
  component: CandidaturaAmbiziosa,
});

function CtaBox({ context }: { context: React.ReactNode }) {
  return (
    <section className="bg-background px-4 py-14 sm:px-8 sm:py-16">
      <Reveal>
        <div
          className="ticket-border-glow relative mx-auto max-w-xl rounded-[1.75rem]"
          style={{ borderRadius: "1.75rem" }}
        >
          <div
            className="surface-cream flex flex-col items-center gap-4 p-6 text-center sm:p-8"
            style={{ borderRadius: "1.75rem" }}
          >
            <p className="text-sm leading-relaxed sm:text-base">{context}</p>
            <a
              href={ANCHOR}
              className="inline-flex w-full max-w-sm flex-col items-center rounded-xl px-6 py-4 text-center transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundImage: "var(--gradient-gold)",
                color: "var(--primary-foreground)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              <span className="font-condensed text-sm font-bold uppercase tracking-[0.06em] sm:text-base">
                {CTA_LABEL}
              </span>
            </a>
            <p className="text-xs text-ink-muted">{REASSURANCE}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// Segno di spunta bordeaux su cerchio verde acido, per la lista di 4 punti
// della hero.
function HeroCheck() {
  return (
    <span
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: "var(--primary)" }}
      aria-hidden
    >
      <Check className="size-3" style={{ color: "var(--secondary)" }} strokeWidth={3} />
    </span>
  );
}

function CandidaturaAmbiziosa() {
  // Settore attivo nel riquadro badge+caso studio: cambia al passaggio del
  // mouse (o al tocco, da telefono) su un badge, ma resta persistente finché
  // non si passa su un badge diverso (così si può uscire dal badge per
  // cliccare il link del caso studio senza farlo sparire). Nome della
  // testimonianza da aprire quando si clicca quel link.
  const [activeSector, setActiveSector] = useState(SECTOR_TESTIMONIALS[0].sector);
  const [activeTestimonialName, setActiveTestimonialName] = useState<string | undefined>(undefined);

  function goToTestimonial(name: string) {
    setActiveTestimonialName(name);
    document
      .getElementById("testimonianze")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="bg-background">
      {/* 1. Header sticky — AmbiziosaTopbar (stato aperto/chiuso, countdown, menu) */}
      <AmbiziosaTopbar />

      {/* 2. Hero */}
      <section className="bg-background">
        <div className="relative overflow-hidden">
          <img
            src={carlottaHeroBgImg}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 18%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in oklab, var(--secondary) 68%, transparent) 0%, color-mix(in oklab, var(--secondary) 80%, transparent) 72%, var(--background) 100%)",
            }}
          />

          <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 text-left sm:px-8 sm:pb-16 sm:pt-16">
            <h1
              className="text-3xl font-semibold sm:max-w-[760px] sm:text-4xl"
              style={{ color: "var(--secondary-foreground)" }}
            >
              <Highlight dark>
                <strong className="font-bold">Ambiziosa:</strong>
              </Highlight>{" "}
              il mio programma esclusivo per professioniste e imprenditrici che vogliono{" "}
              <Highlight dark>farsi riconoscere</Highlight> e trasformare l'ambizione in carriera
            </h1>

            <p
              className="mt-6 text-sm sm:max-w-[640px] sm:text-base"
              style={{ color: "var(--secondary-foreground)" }}
            >
              <strong className="font-semibold">
                Ambiziosa è il mio percorso esclusivo, di 4 mesi
              </strong>
              , dove io e te lavoriamo insieme sulla tua identità, la tua comunicazione, i tuoi
              contenuti e la tua strategia.
            </p>
            <p
              className="mt-3 text-sm sm:max-w-[640px] sm:text-base"
              style={{ color: "var(--secondary-foreground)" }}
            >
              Non è un corso registrato da guardare quando capita, ma un percorso in cui costruiamo
              passo dopo passo chi sei online e come lo comunichi, fino a diventare{" "}
              <strong className="font-semibold">
                un sistema che continua a funzionare anche dopo la fine del percorso
              </strong>
              .
            </p>

            <div className="mt-8">
              <AmbiziosaCtaButton variant="hero" />
            </div>

            <div className="mt-4">
              <div
                className="inline-flex max-w-[260px] flex-col items-center gap-1 rounded-xl px-3 py-2 sm:max-w-[340px] sm:flex-row sm:gap-2"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid var(--secondary-foreground)",
                }}
              >
                <div className="flex -space-x-2.5">
                  {HERO_SOCIAL_AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="size-7 shrink-0 rounded-full border-2 object-cover"
                      style={{ borderColor: "var(--secondary-foreground)" }}
                    />
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <div
                    className="flex justify-center gap-0.5 sm:justify-start"
                    style={{ color: "var(--primary)" }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-current" />
                    ))}
                  </div>
                  <p
                    className="mt-0.5 text-[11px] leading-snug"
                    style={{ color: "var(--secondary-foreground)" }}
                  >
                    Centinaia di professioniste hanno già usato il mio metodo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10">
          <AmbiziosaHeroVideo />
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[1.75rem] sm:mt-20">
          <img
            src={carlottaLookingWideImg}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "color-mix(in oklab, var(--secondary) 76%, transparent)" }}
          />

          <div className="relative grid gap-8 px-5 py-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-start sm:px-10 sm:py-14">
            <div className="space-y-3 text-left" style={{ color: "var(--secondary-foreground)" }}>
              <h3 className="text-xl font-semibold sm:text-2xl">
                Prima l'identità, poi i contenuti. Questo è il segreto.
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Ambiziosa è il percorso di 4 mesi in cui lavoriamo insieme sulla tua identità per
                trasformarla in{" "}
                <strong className="font-semibold" style={{ color: "var(--primary)" }}>
                  una comunicazione che ti fa riconoscere
                </strong>
                .
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Inizi a pubblicare mentre studi il metodo, senza aspettare di aver finito la
                formazione:{" "}
                <strong className="font-semibold" style={{ color: "var(--primary)" }}>
                  hai già tra le mani una strategia costruita sul tuo progetto
                </strong>
                .
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Alla fine arrivi con{" "}
                <strong className="font-semibold" style={{ color: "var(--primary)" }}>
                  una strategia completa che hai già messo in pratica
                </strong>{" "}
                e sai come farla evolvere anche da sola.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {HERO_CHECKLIST.map((item) => (
                <div
                  key={item.bold}
                  className="flex items-start gap-3 rounded-xl p-4 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.14)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <HeroCheck />
                  <span className="text-sm" style={{ color: "var(--secondary-foreground)" }}>
                    <strong className="font-semibold">{item.bold}</strong>
                    {item.rest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Riprova sociale immediata */}
      <section className="bg-background px-4 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Ci sarà un motivo se Ambiziosa ha funzionato con{" "}
              <Highlight>
                <strong className="font-semibold">centinaia di professioniste diverse</strong>
              </Highlight>{" "}
              in settori completamente diversi tra di loro, no?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/85 sm:text-base">
              La maggior parte delle professioniste che finisce in burnout su Instagram, pensando di
              mollare il proprio business, parte da strategie che non sono specifiche per loro, ma
              che hanno solo visto funzionare per altri.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              In realtà, le professioniste che riescono davvero a sfondare online hanno tutte una
              cosa in comune:{" "}
              <strong className="font-semibold">un'identità forte, chiara e definita</strong>.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              In Ambiziosa facciamo esattamente questo.
            </p>
          </div>

          <div
            className="flex flex-col rounded-2xl p-5"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--secondary)" }}
          >
            <p className="mb-3 text-sm font-semibold text-foreground">
              Questi sono solo alcuni dei settori che abbiamo seguito.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {SECTOR_TESTIMONIALS.map((item) => (
                <button
                  key={item.sector}
                  type="button"
                  onMouseEnter={() => setActiveSector(item.sector)}
                  onFocus={() => setActiveSector(item.sector)}
                  onClick={() => setActiveSector(item.sector)}
                  aria-pressed={activeSector === item.sector}
                  className="inline-flex w-full items-center justify-center rounded-full px-3 py-2 text-center font-condensed text-[10px] font-semibold uppercase tracking-[0.06em] transition-transform duration-200 hover:-translate-y-0.5 sm:text-xs sm:tracking-[0.1em]"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--secondary)",
                    outline: activeSector === item.sector ? "2px solid var(--secondary)" : "none",
                    outlineOffset: "2px",
                  }}
                >
                  {item.sector}
                </button>
              ))}
            </div>

            {(() => {
              const active =
                SECTOR_TESTIMONIALS.find((s) => s.sector === activeSector) ??
                SECTOR_TESTIMONIALS[0];
              return (
                <div
                  className="mt-5 flex flex-1 items-start gap-4 rounded-xl p-4 text-left"
                  style={{
                    backgroundColor: "var(--secondary)",
                    color: "var(--secondary-foreground)",
                  }}
                >
                  <img
                    src={active.photo}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="size-14 shrink-0 rounded-full object-cover"
                    style={{ border: "2px solid var(--secondary-foreground)" }}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold sm:text-base">{active.name}</p>
                    <p className="mt-1.5 text-sm leading-snug opacity-90">
                      <span className="font-semibold">Punto A: </span>
                      {active.before}
                    </p>
                    <p className="mt-1 text-sm leading-snug opacity-90">
                      <span className="font-semibold">Punto B: </span>
                      {active.after}
                    </p>
                    <button
                      type="button"
                      onClick={() => goToTestimonial(active.name)}
                      className="mt-2.5 cursor-pointer text-left text-sm font-semibold underline underline-offset-2"
                      style={{ color: "var(--primary)" }}
                    >
                      Guarda la sua video testimonianza
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 3b. Reframe del problema: hai seguito mille corsi... */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
        <img
          src={carlottaLeftImg}
          alt="Carlotta Sgarra"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "30% 6%", transform: "scaleX(-1)" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "color-mix(in oklab, var(--secondary) 74%, transparent)" }}
        />

        <div
          className="relative mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-2 lg:items-center"
          style={{ color: "var(--secondary-foreground)" }}
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Hai seguito mille corsi e corsetti e le regole le sai. Eppure{" "}
            <Highlight dark>non ti senti tu</Highlight> su Instagram.
          </h2>

          <div>
            <p className="text-sm leading-relaxed sm:text-base">
              Hai studiato e hai imparato hook, script e CTA. Hai salvato strategie su strategie e
              hai tenuto un piano editoriale anche quando ti stava stretto. In tutto questo hai
              investito tempo, energie e magari soldi in corsi e metodi diversi, quindi{" "}
              <strong className="font-semibold">l'impegno non ti è mai mancato</strong>.
            </p>
            <p className="mt-4 text-sm leading-relaxed sm:text-base">
              E nonostante questo ti ritrovi a dire:
            </p>

            <ul className="mt-5 space-y-3">
              {CONTENT_PAIN_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                  <XCircle
                    className="mt-0.5 size-5 shrink-0"
                    style={{ color: "#ff8a80" }}
                    strokeWidth={2.25}
                  />
                  <span>“{p}”</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed sm:text-base">
              E questa cosa ti dà fastidio, dentro di te, perché{" "}
              <strong className="font-semibold">
                vorresti differenziarti ma non riesci a trasmetterlo
              </strong>
              . Hai paura che anche i tuoi potenziali clienti vedano questo: perché dovrebbero
              venire da te e non andare da un'altra?
            </p>

            <p className="mt-4 text-base font-semibold sm:text-lg">
              Il problema non è quanto pubblichi o quanto sei costante: è che nei tuoi contenuti non
              si riconosce chi sei davvero.
            </p>

            <p className="mt-4 text-sm leading-relaxed sm:text-base">
              Hai competenze e lo sai, però ti senti identica a mille altre professioniste.{" "}
              <strong className="font-semibold">Ora bisogna renderti riconoscibile.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 3c. Quello che succede dopo Ambiziosa: giornata tipo a riquadri */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Quello che succede dopo Ambiziosa è questo.
            </h2>
            <p className="mt-3 text-sm text-foreground/80 sm:text-base">
              E non te lo dico io, ma te lo confermano le centinaia di professioniste che hanno
              lavorato con me.
            </p>

            <div className="mt-8">
              {JOURNEY_STEPS.map((step, i) => (
                <div key={step.label}>
                  <div
                    className="rounded-xl p-5"
                    style={{ backgroundColor: "var(--card)", border: "1px solid var(--secondary)" }}
                  >
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                      style={{ backgroundColor: "var(--primary)", color: "var(--secondary)" }}
                    >
                      <step.icon className="size-4 shrink-0" />
                      <span className="font-condensed text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm">
                        {step.label}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-foreground sm:text-sm">
                      {step.text}
                    </p>
                  </div>
                  {i < JOURNEY_STEPS.length - 1 ? (
                    <div className="flex justify-center py-1" aria-hidden>
                      <ChevronDown className="size-5" style={{ color: "var(--secondary)" }} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Sei la stessa professionista di prima, con la stessa ambizione. La differenza è che
              adesso <strong className="font-semibold">online si vede chi sei davvero</strong>.
            </p>
          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] lg:sticky lg:top-24">
            <img
              src={carlottaTalkingImg}
              alt="Carlotta Sgarra"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: "58% 35%" }}
            />
          </div>
        </div>
      </section>

      {/* 4. Card segmentazione pubblico */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Ambiziosa è per te se ti riconosci in una di queste
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {forWhoCards.map((c, i) => (
              <Reveal key={c.role} delay={i * 60}>
                <div className="surface-card h-full p-6">
                  <span className="font-condensed text-2xl font-bold text-primary/70">{c.n}</span>
                  <p className="mt-2 text-base font-semibold text-foreground">{c.role}</p>
                  {/* LOREM - sezione 4, card {c.role}, sostituire con copy reale */}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.lorem}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="surface-card mx-auto mt-6 max-w-2xl p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-destructive">
                Non fa per te se
              </p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {notForYouPoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Box CTA isolato ricorrente #1 */}
      <CtaBox context={CTA_BOX_CONTEXT} />

      {/* 7. Cerniera visiva problema → soluzione */}
      <section
        className="px-4 py-16 text-center sm:px-8 sm:py-24"
        style={{ backgroundImage: "linear-gradient(180deg, var(--background), var(--cream))" }}
      >
        <Reveal>
          <Sparkles className="mx-auto size-8 text-primary" />
          {/* LOREM - sezione 7, cerniera, sostituire con copy reale */}
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl leading-snug text-ink sm:text-3xl">
            Lorem ipsum dolor sit amet: la differenza è sempre lo stesso ingrediente mancante, un
            sistema.
          </h2>
          <a
            href="#step-1"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary underline underline-offset-4"
          >
            Scopri come funziona Ambiziosa
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </section>

      {/* 8. I 4 step del percorso */}
      <section id="step-1" className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Il percorso in <Highlight>4 step</Highlight>
            </h2>
          </Reveal>

          <div className="mt-14 space-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div
                  className={`grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-12 ${
                    i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <span className="font-condensed text-5xl font-bold text-primary/50 sm:text-6xl">
                      {s.n}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.04em] text-secondary">
                      {s.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {s.description}
                    </p>
                  </div>
                  <div>{stepMockups[i]}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Prima/dopo a colonne specchiate */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div
          className="mx-auto max-w-4xl rounded-[1.75rem] p-6 sm:p-10"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--secondary)" }}
        >
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Oggi e alla fine dei 4 mesi
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div
              className="space-y-4 rounded-2xl border-2 p-6"
              style={{ borderColor: "var(--destructive)" }}
            >
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-destructive">
                Oggi
              </p>
              {beforeAfterRows.map((r) => (
                <p key={r.before} className="text-sm leading-relaxed text-foreground/75">
                  {r.before}
                </p>
              ))}
            </div>
            <div
              className="space-y-4 rounded-2xl border-2 p-6"
              style={{ borderColor: "var(--primary)" }}
            >
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                Alla fine dei 4 mesi
              </p>
              {beforeAfterRows.map((r) => (
                <p key={r.after} className="text-sm leading-relaxed text-foreground/75">
                  {r.after}
                </p>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                Hai già investito in corsi e coach senza vedere risultati concreti?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
                Se ti è già successo, hai ragione a diffidare. Di solito un corso ti dà un metodo
                uguale per tutte, da applicare da sola. In Ambiziosa{" "}
                <strong className="font-semibold">
                  la strategia la costruiamo insieme, sul tuo progetto
                </strong>
                : la metti in pratica da subito e ti seguo con call dedicate, finché non sai farla
                evolvere da sola.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBox context={CTA_BOX_CONTEXT} />

      {/* 10. Proiezione di scenari futuri concreti */}
      <section
        className="px-4 py-14 sm:px-8 sm:py-20"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={carlottaHugImg}
              alt="Carlotta Sgarra con una professionista che segue il suo metodo"
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl sm:text-3xl">
              Immagina tra <Highlight dark>4 mesi</Highlight>
            </h2>
            <div className="mt-6 space-y-4">
              {scenarios.map((s, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-muted sm:text-base">
                  {s}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. Presentazione dei 2 livelli */}
      <section id="prezzi" className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Scegli il tuo livello di accompagnamento
            </h2>
            {/* LOREM - sezione 11, intro card prezzi, sostituire con copy reale */}
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pricingTiers.map((tier) => (
              <Reveal key={tier.id} delay={tier.recommended ? 0 : 80}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
                    tier.recommended ? "surface-cream" : "surface-card"
                  }`}
                  style={tier.recommended ? { boxShadow: "var(--shadow-gold)" } : undefined}
                >
                  {tier.recommended ? (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary-foreground"
                      style={{ backgroundImage: "var(--gradient-gold)" }}
                    >
                      Consigliato
                    </span>
                  ) : null}
                  <p className="font-condensed text-xs uppercase tracking-[0.15em] text-primary">
                    {tier.name}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{tier.payoff}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-xs opacity-70">{tier.priceNote}</span>
                  </div>
                  <p className="mt-1 text-sm opacity-80">{tier.duration}</p>

                  <ul className="mt-6 flex-1 space-y-2.5 text-sm leading-relaxed">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={ANCHOR}
                    className="mt-6 inline-flex w-full flex-col items-center rounded-xl px-6 py-4 text-center transition-transform duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundImage: "var(--gradient-gold)",
                      color: "var(--primary-foreground)",
                      boxShadow: "var(--shadow-gold)",
                    }}
                  >
                    <span className="font-condensed text-sm font-bold uppercase tracking-[0.06em]">
                      Candidati per {tier.name}
                    </span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Bio di Carlotta e Sharon */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Non sei sola nel percorso: <Highlight>lavori con me e con Sharon</Highlight>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal delay={40}>
              <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
                <img
                  src={carlottaPresentingImg}
                  alt="Carlotta Sgarra"
                  loading="lazy"
                  className="size-24 shrink-0 rounded-full object-cover sm:size-28"
                />
                <div>
                  <p className="text-lg font-semibold text-foreground">Carlotta Sgarra</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-secondary">
                    Founder di Rule the Rules
                  </p>
                  {/* LOREM - sezione 12, bio Carlotta, sostituire con copy reale */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua: lavoro con te soprattutto
                    sull'identità, sull'offerta e sulla vendita, gli step 1 e 4 del percorso.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
                <img
                  src={sharonSpeakingImg}
                  alt="Sharon Convertino"
                  loading="lazy"
                  className="size-24 shrink-0 rounded-full object-cover sm:size-28"
                  style={{ objectPosition: "45% 30%" }}
                />
                <div>
                  <p className="text-lg font-semibold text-foreground">Sharon Convertino</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-secondary">
                    Esperta di contenuti
                  </p>
                  {/* LOREM - sezione 12, bio Sharon, sostituire con copy reale */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat: lavoro con te soprattutto sui contenuti, sul
                    piano editoriale e sull'operatività quotidiana, gli step 2 e 3 del percorso.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. → CtaBox #2, dopo il reframe (sezione 6) */}
      <CtaBox context={CTA_BOX_CONTEXT} />

      {/* 13. Anteprima della piattaforma/area riservata */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              La tua area dedicata durante i 4 mesi
            </h2>
          </Reveal>
          <Reveal delay={60}>
            {/* placeholder: sostituire con uno screenshot reale dell'area Notion/Slack */}
            <div
              className="surface-card mt-8 flex aspect-video w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-primary/40 p-6"
              style={{ borderRadius: "1.5rem" }}
            >
              <LayoutDashboard className="size-10 text-primary/60" />
              <p className="text-center text-sm text-muted-foreground">
                Mockup illustrativo dell'area riservata — da sostituire con uno screenshot reale
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="surface-card p-4">
                <p className="font-condensed text-2xl font-bold text-secondary">4</p>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  Mesi
                </p>
              </div>
              <div className="surface-card p-4">
                <p className="font-condensed text-2xl font-bold text-secondary">5</p>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  Call*
                </p>
              </div>
              <div className="surface-card p-4">
                <p className="font-condensed text-2xl font-bold text-secondary">4</p>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  Step
                </p>
              </div>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              *5 call su Ambiziosa Program, illimitate su Ambiziosa Mentorship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 14. Bonus */}
      {/* BONUS DA CONFERMARE CON ANDREA - griglia pronta, contenuto e valori non ancora decisi */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              I bonus del percorso
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
              Griglia pronta per i bonus di Ambiziosa — titoli e valori da confermare con Andrea
              prima della pubblicazione.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {["01", "02", "03"].map((n, i) => (
              <Reveal key={n} delay={i * 60}>
                <div className="surface-card h-full border-2 border-dashed border-primary/40 p-6 text-center">
                  <Gift className="mx-auto size-6 text-primary/60" />
                  <p className="mt-3 font-condensed text-xs uppercase tracking-[0.15em] text-primary/70">
                    Bonus {n}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">Titolo da confermare</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Descrizione da confermare con Andrea.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-secondary">Valore: da confermare</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="surface-card mt-6 flex items-center justify-between gap-4 border-2 border-dashed border-primary/40 p-5 text-center sm:p-6">
              <p className="text-sm font-semibold text-foreground sm:text-base">
                Valore totale dei bonus
              </p>
              <p className="shrink-0 text-lg font-bold text-secondary sm:text-xl">Da confermare</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 15. Scomposizione del valore per componenti di mercato */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Quanto varrebbe tutto questo, separatamente?
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {marketBreakdown.map((row) => (
              <Reveal key={row.label} delay={40}>
                <div className="surface-card flex items-center justify-between gap-4 p-4 sm:p-5">
                  <p className="text-sm text-foreground sm:text-base">{row.label}</p>
                  <p className="shrink-0 whitespace-nowrap text-sm font-semibold text-secondary sm:text-base">
                    {row.value} <span className="font-normal opacity-70">{row.unit}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div
              className="surface-cream mt-6 flex items-center justify-between gap-4 p-5 sm:p-6"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <p className="text-sm font-semibold sm:text-base">
                Valore totale se acquistato separatamente
              </p>
              <p className="shrink-0 text-2xl font-bold sm:text-3xl">6.100€+</p>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Con Ambiziosa Program, tutto questo è incluso a partire da 5.000€.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 16. Testimonianze / casi studio — stessa sezione "video testimonianze" di Rule
          the Rules (src/routes/index.tsx), importata qui tale quale */}
      <section
        id="testimonianze"
        className="px-4 py-16 sm:px-8 sm:py-24"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Ascolta le parole di chi ha già <Highlight dark>seguito il mio metodo</Highlight>
            </h2>
            <p className="mt-3 text-base text-ink-muted sm:text-lg">
              Se con loro ha funzionato, perché con te non dovrebbe funzionare?
            </p>
          </Reveal>

          <TestimonialsExplorer
            testimonials={videoTestimonials}
            initialName={activeTestimonialName}
          />

          <Reveal delay={200}>
            <div
              className="mx-auto mt-10 max-w-3xl border-l-2 pl-5 text-xs leading-relaxed text-ink-muted"
              style={{ borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }}
            >
              I risultati riportati sono individuali e non rappresentano una promessa o garanzia di
              risultati futuri: dipendono da variabili individuali come mercato di riferimento,
              applicazione pratica del metodo e impegno personale.
            </div>
          </Reveal>

          <div className="mt-10 flex justify-center">
            <AmbiziosaCtaButton variant="hero" />
          </div>
        </div>
      </section>

      {/* 17. Storia/autorità di Carlotta */}
      <section className="bg-background">
        <img
          src={carlottaLookingImg}
          alt="Carlotta Sgarra"
          loading="lazy"
          className="aspect-[21/9] w-full object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-8 sm:py-20">
          <Reveal>
            {/* LOREM - sezione 17, storia di Carlotta, sostituire con copy reale */}
            <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-2 gap-4 py-2 sm:grid-cols-3">
                <div className="surface-card p-4 text-center">
                  <p className="font-condensed text-2xl font-bold text-secondary">1.500+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Professioniste guidate
                  </p>
                </div>
                <div className="surface-card p-4 text-center">
                  {/* NUMERO DA CONFERMARE CON ANDREA */}
                  <p className="font-condensed text-2xl font-bold text-secondary">XX</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Lorem ipsum
                  </p>
                </div>
                <div className="surface-card p-4 text-center">
                  {/* NUMERO DA CONFERMARE CON ANDREA */}
                  <p className="font-condensed text-2xl font-bold text-secondary">XX</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Lorem ipsum
                  </p>
                </div>
              </div>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* → CtaBox #3, dopo storytelling/autorità (sezione 17) */}
      <CtaBox context={CTA_BOX_CONTEXT} />

      {/* 17b. Rassicurazione sulla candidatura, sezione dedicata */}
      <section
        className="px-4 py-14 text-center sm:px-8 sm:py-20"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        <Reveal>
          <ShieldCheck className="mx-auto size-10 text-primary" />
          <h2 className="mx-auto mt-4 max-w-xl text-2xl sm:text-3xl">
            Candidarti non ti impegna a <Highlight dark>nulla</Highlight>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            La candidatura è gratuita e non richiede nessun pagamento: leggiamo ogni candidatura
            personalmente e ti rispondiamo entro 48 ore lavorative con i prossimi passi. Deciderai
            solo dopo aver parlato con noi se procedere o meno.
          </p>
        </Reveal>
      </section>

      {/* 18. FAQ */}
      <section id="faq" className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Domande frequenti
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border/70">
                  <AccordionTrigger className="text-left text-base text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* → CtaBox #4, prima del form finale */}
      <CtaBox context={CTA_BOX_CONTEXT} />

      {/* 19. Form di candidatura + chiusura finale */}
      <section id="candidatura" className="bg-background px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-secondary">
              <Users className="size-5" />
              <Video className="size-5" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Invia la tua candidatura
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground sm:text-base">
              Due opzioni disponibili: Ambiziosa Program (5.000€) e Ambiziosa Mentorship (7.000€).
              Compilando il form riceverai una risposta entro 48 ore, senza nessun impegno.
            </p>

            <div className="mt-8">
              <ApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState<"program" | "mentorship" | "unsure">("unsure");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const result = await submitAmbiziosaApplication({ data: { name, email, tier, message } });
      setStatus(result.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="surface-cream flex flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        {/* LOREM - sezione 19, messaggio di conferma, sostituire con copy reale */}
        <p className="text-lg font-semibold">Candidatura inviata!</p>
        <p className="text-sm leading-relaxed text-ink-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit: abbiamo ricevuto la tua
          candidatura e ti risponderemo entro 48 ore lavorative con i prossimi passi. Nessun
          pagamento è stato richiesto o effettuato in questa fase.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nome e cognome"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClassName}
      />
      <input
        type="email"
        name="email"
        placeholder="La tua email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClassName}
      />

      <fieldset className="space-y-2 rounded-lg border border-input p-4">
        <legend className="px-1 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
          Quale livello ti interessa?
        </legend>
        {(
          [
            { id: "program", label: "Ambiziosa Program (5.000€)" },
            { id: "mentorship", label: "Ambiziosa Mentorship (7.000€)" },
            { id: "unsure", label: "Non sono sicura, vorrei un consiglio" },
          ] as const
        ).map((opt) => (
          <label key={opt.id} className="flex items-center gap-2 text-sm text-card-foreground">
            <input
              type="radio"
              name="tier"
              value={opt.id}
              checked={tier === opt.id}
              onChange={() => setTier(opt.id)}
              className="accent-[var(--primary)]"
            />
            {opt.label}
          </label>
        ))}
      </fieldset>

      <textarea
        name="message"
        placeholder="Raccontami a che punto sei con il tuo business e cosa vorresti ottenere da questo percorso"
        required
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={inputClassName}
      />

      {status === "error" ? (
        <p className="text-center text-sm text-destructive">
          Qualcosa è andato storto, riprova tra poco.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full flex-col items-center rounded-xl px-6 py-4 transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
        style={{
          backgroundImage: "var(--gradient-gold)",
          color: "var(--primary-foreground)",
          boxShadow: "var(--shadow-gold)",
        }}
      >
        <span className="font-condensed text-base uppercase tracking-[0.1em] sm:text-lg sm:tracking-[0.14em]">
          {status === "submitting" ? "Invio in corso…" : "Invia la tua candidatura"}
        </span>
      </button>
    </form>
  );
}
