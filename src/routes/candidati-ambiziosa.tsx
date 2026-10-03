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
  LayoutDashboard,
  Users,
  Video,
  ShieldCheck,
  Gift,
  Star,
  ChevronDown,
  Lightbulb,
  LayoutTemplate,
  Compass,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import {
  AmbiziosaPillarVisual,
  type PillarVisualVariant,
} from "@/components/landing/AmbiziosaPillarVisual";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { AmbiziosaTopbar } from "@/components/landing/AmbiziosaTopbar";
import { AmbiziosaCtaButton } from "@/components/landing/AmbiziosaCtaButton";
import { AmbiziosaHeroVideo } from "@/components/landing/AmbiziosaHeroVideo";
import { ProfileBeforeAfter, ResultsCards } from "@/components/landing/AmbiziosaProofCards";
import { TestimonialsExplorer } from "@/components/landing/TestimonialsExplorer";
import { submitAmbiziosaApplication } from "@/lib/ambiziosa-application";
import carlottaLookingImg from "@/assets/carlotta-looking-2.jpg";
import carlottaLookingWideImg from "@/assets/carlotta-looking.jpg";
import carlottaHeroBgImg from "@/assets/Carlotta bianco e nero che guarda in camera.jpg";
import carlottaLeftImg from "@/assets/Carlotta bianco e nerco che guarda a sinistra.jpg";
import carlottaTalkingImg from "@/assets/carlotta-talking.jpg";
import carlottaAlLavoroImg from "@/assets/method-bg.jpg";
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
// sezione che lo richiama, come da indicazione esplicita. `dark` sceglie la
// tinta di Highlight in base allo sfondo, come in Rule The Rules.
function CtaBoxContext({ dark = false }: { dark?: boolean }) {
  return (
    <>
      4 mesi con me e il mio team:{" "}
      <Highlight dark={dark}>una strategia di comunicazione completa che parte da te</Highlight>,
      messa in pratica fin dalle prime call.
    </>
  );
}

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
    role: "Coach e mentor",
    photo: francescaSolignaniImg,
    paragraphs: [
      <>Hai passato la settimana tra sessioni, messaggi e contenuti da preparare.</>,
      <>
        Venerdì sera fai i conti:{" "}
        <strong className="font-semibold">
          lavori tantissimo e non c'è una proporzione reale con quello che guadagni
        </strong>
        .
      </>,
      <>
        Ripensi ai corsi e ai coach in cui hai investito tempo e soldi, ai{" "}
        <strong className="font-semibold">risultati concreti che non sono mai arrivati</strong>.
      </>,
    ],
    examples: ["Business coach", "Life coach", "Mental coach", "Mentor"],
  },
  {
    n: "02",
    role: "Consulenti e strategist",
    photo: valeriaSalussoliImg,
    paragraphs: [
      <>Mandi un preventivo e aspetti.</>,
      <>
        Dopo qualche giorno arriva la risposta di sempre:{" "}
        <strong className="font-semibold">"Ci pensiamo."</strong>
      </>,
      <>
        Eppure i tuoi{" "}
        <strong className="font-semibold">
          prezzi sono già troppo bassi per la qualità che offri
        </strong>
        , perché non sei ancora riuscita a farti riconoscere per quello che vali.
      </>,
      <>
        Intanto apri Instagram e{" "}
        <strong className="font-semibold">
          ti chiedi se là fuori ci sia sempre qualcuna più brava di te
        </strong>
        .
      </>,
    ],
    examples: [
      "Consulente di marketing",
      "Brand strategist",
      "Consulente d'immagine",
      "Web marketing",
    ],
  },
  {
    n: "03",
    role: "Professioniste della bellezza e del benessere",
    photo: silviaBedinImg,
    paragraphs: [
      <>Hai anni di esperienza e un lavoro che sai fare benissimo.</>,
      <>
        Le richieste che ricevi, però, sono <strong className="font-semibold">generiche</strong>:
        chi ti scrive vuole sapere solo il prezzo e spesso cerca il{" "}
        <strong className="font-semibold">low cost</strong>.
      </>,
      <>
        Il tuo lavoro vale molto di più ma{" "}
        <strong className="font-semibold">online questo valore non si vede</strong>, per questo ti
        scelgono in base al costo.
      </>,
    ],
    examples: ["Make-up artist", "Estetista", "Nutrizionista", "Personal trainer"],
  },
  {
    n: "04",
    role: "Social media manager",
    photo: valentinaGiuriatoImg,
    paragraphs: [
      <>
        Passi le giornate a curare la comunicazione dei tuoi clienti e per la tua non resta mai
        tempo.
      </>,
      <>
        C'è quel cliente tossico che ti scrive a qualsiasi ora e non rispetta il tuo lavoro, ma lo
        tieni perché <strong className="font-semibold">ti sottovaluti</strong> e{" "}
        <strong className="font-semibold">non riesci a chiedere il giusto compenso</strong>.
      </>,
      <>A fine giornata sei stanca e a volte ti viene voglia di mollare tutto.</>,
    ],
    examples: [
      "Social media manager",
      "Content creator",
      "Community manager",
      "Consulente di web marketing",
    ],
  },
];

// I 6 punti del percorso, costruiti come le "3 serate" di Rule The Rules:
// illustrazione React del punto + titolo + intro a sinistra, checklist a
// destra, titolo del punto nel badge oro.
const communicationPillars: {
  n: string;
  title: string;
  visual: PillarVisualVariant;
  intro: React.ReactNode;
  bullets: React.ReactNode[];
}[] = [
  {
    n: "1",
    title: "La tua identità",
    visual: "identity",
    intro: (
      <>
        È il primo passo, e{" "}
        <strong className="font-semibold text-ink">
          la base su cui costruiamo tutto il lavoro successivo
        </strong>
        .
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Chi sei come professionista</strong>: cosa vuoi
        rappresentare e quali sono i valori che guidano il tuo lavoro.
      </>,
      <>
        <strong className="font-semibold text-ink">Cosa vuoi comunicare</strong>: il messaggio che
        deve arrivare a chi ti segue, senza copiare quello che fanno le altre.
      </>,
      <>
        <strong className="font-semibold text-ink">La percezione che vuoi costruire</strong>: come
        vuoi che ti vedano le persone che ti scelgono.
      </>,
    ],
  },
  {
    n: "2",
    title: "I tuoi macro topic",
    visual: "macro-topics",
    intro: (
      <>
        Il mio team prende tutto il lavoro emerso sull'identità e{" "}
        <strong className="font-semibold text-ink">lo trasforma nella tua strategia</strong>.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">I temi grandi della tua comunicazione</strong>: i
        macro topic su cui costruisci tutto quello che pubblichi.
      </>,
      <>
        <strong className="font-semibold text-ink">Una base che parte da te</strong>: ogni tema
        nasce da quello che è emerso sulla tua identità, non da un modello uguale per tutte.
      </>,
    ],
  },
  {
    n: "3",
    title: "La tua banca idee personalizzata",
    visual: "idea-bank",
    intro: (
      <>
        Idee di contenuti{" "}
        <strong className="font-semibold text-ink">pensate per te e per il tuo progetto</strong>.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Mai più pagina bianca</strong>: quando ti chiedi
        cosa pubblicare oggi, hai già dove guardare.
      </>,
      <>
        <strong className="font-semibold text-ink">Idee su misura</strong>: nascono dai tuoi macro
        topic, non sono prese in prestito da chi fa un altro lavoro.
      </>,
    ],
  },
  {
    n: "4",
    title: "La struttura dei tuoi contenuti",
    visual: "structure",
    intro: (
      <>
        La struttura strategica che{" "}
        <strong className="font-semibold text-ink">tiene insieme quello che pubblichi</strong>,
        costruita sul tuo progetto.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">
          Sai perché pubblichi quello che pubblichi
        </strong>
        : ogni contenuto ha un ruolo preciso.
      </>,
      <>
        <strong className="font-semibold text-ink">Basta contenuti a caso</strong>: smetti di
        pubblicare tanto per esserci.
      </>,
    ],
  },
  {
    n: "5",
    title: "La tua direzione comunicativa",
    visual: "direction",
    intro: (
      <>
        Dove vuoi portare la tua comunicazione,{" "}
        <strong className="font-semibold text-ink">
          costruita sulla tua identità e sui tuoi obiettivi
        </strong>
        .
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Una direzione precisa</strong>: sai dove stai
        andando fin dai primi contenuti.
      </>,
      <>
        <strong className="font-semibold text-ink">Obiettivi tuoi</strong>: la rotta parte da quello
        che vuoi ottenere tu, non da quello che funziona per le altre.
      </>,
    ],
  },
  {
    n: "6",
    title: "La tua strategia completa di comunicazione",
    visual: "strategy",
    intro: (
      <>
        Tutti i pezzi si uniscono in{" "}
        <strong className="font-semibold text-ink">una strategia completa che parte da te</strong>.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">
          Sai cosa pubblicare, perché lo pubblichi e dove stai andando
        </strong>
        : hai il quadro completo della tua comunicazione.
      </>,
      <>
        <strong className="font-semibold text-ink">La applichi già durante il percorso</strong>: la
        affiniamo insieme, così a fine percorso sai farla evolvere anche da sola.
      </>,
      <>
        <strong className="font-semibold text-ink">Mentorship e Program</strong>: nella Mentorship
        ci lavori ogni settimana con il mio team e 4 volte con me, nel Program attraverso gli step e
        i momenti di confronto previsti.
      </>,
    ],
  },
];

// Le due versioni di Ambiziosa: numeri chiave (badge) e passi numerati.
type VersionStep = { title: string; text: React.ReactNode };

const programStats = [
  { n: "4", label: "mesi" },
  { n: "4", label: "call in totale" },
  { n: "1", label: "call individuale con me" },
  { n: "1", label: "call individuale con il mio team" },
];

const mentorshipStats = [
  { n: "4", label: "mesi" },
  { n: "20+", label: "call in totale" },
  { n: "1", label: "call a settimana con il mio team" },
  { n: "4", label: "call con me, una al mese" },
];

const programSteps: VersionStep[] = [
  {
    title: "La call iniziale",
    text: (
      <>
        Con me e con il mio team guardiamo la tua situazione attuale, definiamo gli obiettivi e{" "}
        <strong className="font-semibold text-foreground">costruiamo una prima direzione</strong>{" "}
        per il lavoro dei 4 mesi.
      </>
    ),
  },
  {
    title: "La parte introduttiva",
    text: (
      <>
        Dopo la call accedi alla parte introduttiva: entri nel metodo Ambiziosa e inizi a{" "}
        <strong className="font-semibold text-foreground">
          mettere a fuoco gli elementi fondamentali
        </strong>{" "}
        del tuo progetto professionale.
      </>
    ),
  },
  {
    title: "Lo step sull'identità",
    text: (
      <>
        Il primo grande lavoro è l'identità: chi sei come professionista e cosa vuoi comunicare. A
        fine step hai una{" "}
        <strong className="font-semibold text-foreground">call individuale con me</strong> su quello
        che è emerso.{" "}
        <strong className="font-semibold text-foreground">
          Da qui parte tutto il lavoro successivo.
        </strong>
      </>
    ),
  },
  {
    title: "La tua strategia di comunicazione",
    text: (
      <>
        Tu continui con gli step e inizi a studiare la teoria della strategia e della comunicazione.
        Nel frattempo{" "}
        <strong className="font-semibold text-foreground">
          il mio team prende il lavoro fatto e lo trasforma in una strategia concreta
        </strong>
        , costruita sul tuo progetto.{" "}
        <strong className="font-semibold text-foreground">
          Puoi iniziare a pubblicare senza aspettare di aver finito la formazione.
        </strong>
      </>
    ),
  },
  {
    title: "La strategia in pratica",
    text: (
      <>
        Mentre pubblichi continui a studiare. La strategia ti serve per comunicare subito e per
        vedere come quello che impari si applica al tuo progetto. Piano piano{" "}
        <strong className="font-semibold text-foreground">la affiniamo insieme</strong> e la fai
        evolvere.
      </>
    ),
  },
  {
    title: "La call con il mio team sulla strategia",
    text: (
      <>
        Durante il percorso hai una{" "}
        <strong className="font-semibold text-foreground">call individuale con il mio team</strong>:
        ti confronti con noi sul lavoro fatto, su come stai applicando la strategia e su come farla
        evolvere con quello che impari.
      </>
    ),
  },
  {
    title: "La call finale",
    text: (
      <>
        I 4 mesi finiscono con una call con me e con il mio team: rileggiamo il percorso, guardiamo
        cosa è cambiato e{" "}
        <strong className="font-semibold text-foreground">
          definiamo la direzione con cui continuare a lavorare in autonomia.
        </strong>
      </>
    ),
  },
];

const mentorshipSteps: VersionStep[] = [
  {
    title: "La call iniziale",
    text: (
      <>
        Con me e con il mio team guardiamo il tuo punto di partenza, gli obiettivi, le priorità e la
        direzione dei 4 mesi. In quella call{" "}
        <strong className="font-semibold text-ink">
          fissiamo anche il giorno della tua call settimanale con il mio team.
        </strong>
      </>
    ),
  },
  {
    title: "Il lavoro sull'identità",
    text: (
      <>
        Inizi dall'identità, il punto da cui nasce una comunicazione coerente e riconoscibile. In
        questa fase hai anche il{" "}
        <strong className="font-semibold text-ink">confronto con me</strong>.
      </>
    ),
  },
  {
    title: "La tua strategia di comunicazione",
    text: (
      <>
        Il mio team lavora direttamente sul tuo progetto e costruisce la tua strategia completa di
        comunicazione: macro topic, banca idee personalizzata, struttura dei contenuti e direzione
        comunicativa. Intanto tu studi la teoria e puoi creare e pubblicare subito.{" "}
        <strong className="font-semibold text-ink">
          Prima imparo e poi applico? Qui le due cose avvengono insieme.
        </strong>
      </>
    ),
  },
  {
    title: "La strategia in pratica",
    text: (
      <>
        Mentre applichi la strategia continui a studiare il metodo. Con il supporto e il confronto
        costante della Mentorship{" "}
        <strong className="font-semibold text-ink">la affiniamo insieme</strong> passo dopo passo,
        così a fine percorso{" "}
        <strong className="font-semibold text-ink">sai come farla evolvere anche da sola</strong>.
      </>
    ),
  },
  {
    title: "Una call al mese con me",
    text: (
      <>
        Per 4 mesi hai <strong className="font-semibold text-ink">una call al mese con me</strong>,
        4 in tutto: lavoriamo sulla tua evoluzione e sui temi che emergono lungo il percorso.
      </>
    ),
  },
  {
    title: "Una call a settimana con il mio team",
    text: (
      <>
        Ogni settimana hai una{" "}
        <strong className="font-semibold text-ink">
          call individuale di 30 minuti con il mio team
        </strong>
        . Il giorno lo fissiamo nella call iniziale e diventa un appuntamento fisso per tutta la
        Mentorship. Dubbi, contenuti, scelte comunicative, difficoltà e nuove idee: li porti lì,{" "}
        <strong className="font-semibold text-ink">senza aspettare la fine di uno step.</strong>
      </>
    ),
  },
  {
    title: "La call finale",
    text: (
      <>
        L'ultima call è con me e con il mio team: guardiamo il lavoro dei 4 mesi, quello che è
        cambiato e soprattutto{" "}
        <strong className="font-semibold text-ink">
          quello che ora sai portare avanti da sola.
        </strong>
      </>
    ),
  },
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

// Testo disposto in cerchio, ripetuto, sull'angolo in alto a sinistra della
// foto della sezione "Il mio obiettivo è renderti unica". textLength adatta
// il testo alla circonferenza (2π·80 ≈ 503) a prescindere dal font.
function CircularBadge({ className = "" }: { className?: string }) {
  const text = "Dall'ambizione alla carriera · Dall'ambizione alla carriera · ";
  return (
    <svg
      viewBox="0 0 200 200"
      className={`animate-[spin_30s_linear_infinite] motion-reduce:animate-none ${className}`}
      aria-hidden
    >
      <defs>
        <path
          id="ambiziosa-badge-circle"
          d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
        />
      </defs>
      <text
        fill="var(--primary)"
        fontSize="16"
        fontWeight="600"
        style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase" }}
      >
        <textPath href="#ambiziosa-badge-circle" textLength="500" lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

// Segue sempre una sezione chiara: -mt-6 lo accosta al testo che lo precede,
// alla stessa distanza delle CTA interne alle sezioni di Rule The Rules.
function CtaBox() {
  return (
    <section className="bg-background">
      <div className="mx-auto -mt-6 max-w-4xl px-5 pb-20">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="max-w-2xl text-lg font-semibold leading-snug text-foreground sm:text-2xl">
              <CtaBoxContext />
            </p>
            <div className="mt-8 flex w-full justify-center">
              <AmbiziosaCtaButton variant="hero" label={CTA_LABEL} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
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

          <div
            className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 text-left sm:pb-20 sm:pt-20"
            style={{ color: "var(--secondary-foreground)" }}
          >
            <Reveal>
              <p className="font-condensed text-xs uppercase tracking-[0.4em] text-primary sm:text-sm">
                Program e Mentorship · Candidature aperte
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative mt-6 inline-block">
                <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-tight text-ink sm:text-8xl">
                  Ambiziosa
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
                  Percorso di 4 mesi
                </span>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-8 max-w-3xl text-lg font-semibold leading-snug text-ink sm:text-2xl">
                Il mio programma esclusivo per professioniste e imprenditrici che vogliono{" "}
                <Highlight dark>farsi riconoscere</Highlight> e trasformare l'ambizione in carriera.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-ink-muted sm:text-lg">
                <p>
                  <strong className="font-semibold text-ink">
                    Ambiziosa è il mio percorso esclusivo, di 4 mesi
                  </strong>
                  , dove io e te lavoriamo insieme sulla tua identità, la tua comunicazione, i tuoi
                  contenuti e la tua strategia.
                </p>
                <p>
                  Non è un corso registrato da guardare quando capita, ma un percorso in cui
                  costruiamo passo dopo passo chi sei online e come lo comunichi, fino a diventare{" "}
                  <strong className="font-semibold text-ink">
                    un sistema che continua a funzionare anche dopo la fine del percorso
                  </strong>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 max-w-xl">
                <AmbiziosaCtaButton variant="hero" />
              </div>

              <div className="mt-4">
                <div
                  className="inline-flex flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 sm:flex-row sm:items-center sm:gap-3"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                  }}
                >
                  <div className="flex -space-x-3">
                    {HERO_SOCIAL_AVATARS.map((src, i) => (
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
                    <p className="mt-0.5 text-[10px] text-ink/85 sm:text-sm">
                      Centinaia di professioniste hanno già usato il mio metodo
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-5 pt-10">
          <AmbiziosaHeroVideo />
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-10 pt-20">
          <div className="relative overflow-hidden" style={{ borderRadius: "1.75rem" }}>
            <img
              src={carlottaLookingWideImg}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, color-mix(in oklab, var(--secondary) 80%, transparent), var(--secondary) 100%)",
              }}
            />

            <div
              className="relative grid gap-10 px-6 py-16 sm:px-12 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:items-start"
              style={{ color: "var(--secondary-foreground)" }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-ink sm:text-3xl">
                  Prima l'identità, poi i contenuti. <Highlight dark>Questo è il segreto</Highlight>
                  .
                </h3>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted">
                  <p>
                    Ambiziosa è il percorso di 4 mesi in cui lavoriamo insieme sulla tua identità
                    per trasformarla in{" "}
                    <strong className="font-semibold text-ink">
                      una comunicazione che ti fa riconoscere
                    </strong>
                    .
                  </p>
                  <p>
                    Inizi a pubblicare mentre studi il metodo, senza aspettare di aver finito la
                    formazione:{" "}
                    <strong className="font-semibold text-ink">
                      hai già tra le mani una strategia costruita sul tuo progetto
                    </strong>
                    .
                  </p>
                  <p>
                    Alla fine arrivi con{" "}
                    <strong className="font-semibold text-ink">
                      una strategia completa che hai già messo in pratica
                    </strong>{" "}
                    e sai come farla evolvere anche da sola.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {HERO_CHECKLIST.map((item) => (
                  <div
                    key={item.bold}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <Check className="mt-1 size-4 shrink-0" style={{ color: "var(--gold-deep)" }} />
                    <span className="text-sm leading-relaxed text-ink-muted sm:text-base">
                      <strong className="font-semibold text-ink">{item.bold}</strong>
                      {item.rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Riprova sociale immediata */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              Ci sarà un motivo se Ambiziosa ha funzionato con{" "}
              <Highlight>centinaia di professioniste diverse</Highlight> in settori completamente
              diversi tra di loro, no?
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                La maggior parte delle professioniste che finisce in burnout su Instagram, pensando
                di mollare il proprio business,{" "}
                <strong className="font-semibold text-foreground">
                  parte da strategie che non sono specifiche per loro
                </strong>
                , ma che hanno solo visto funzionare per altri.
              </p>
              <p>
                In realtà, le professioniste che riescono davvero a sfondare online hanno tutte una
                cosa in comune:{" "}
                <strong className="font-semibold text-foreground">
                  un'identità forte, chiara e definita
                </strong>
                .
              </p>
              <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                In Ambiziosa facciamo esattamente questo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col rounded-xl border border-border/70 bg-card/50 p-5 sm:p-7">
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                Questi sono solo alcuni dei settori che abbiamo seguito
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {SECTOR_TESTIMONIALS.map((item) => (
                  <button
                    key={item.sector}
                    type="button"
                    onMouseEnter={() => setActiveSector(item.sector)}
                    onFocus={() => setActiveSector(item.sector)}
                    onClick={() => setActiveSector(item.sector)}
                    aria-pressed={activeSector === item.sector}
                    className="inline-block w-full cursor-pointer rounded-full px-4 py-1.5 text-center font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:text-xs"
                    style={{
                      backgroundImage: "var(--gradient-gold)",
                      boxShadow: "var(--shadow-gold)",
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
                    className="mt-5 flex flex-1 items-start gap-4 rounded-xl px-4 py-4 text-left"
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
                      className="size-11 shrink-0 rounded-full border border-dashed object-cover"
                      style={{
                        borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)",
                      }}
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{active.name}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        <span className="font-semibold text-ink">Punto A: </span>
                        {active.before}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        <span className="font-semibold text-ink">Punto B: </span>
                        {active.after}
                      </p>
                      <button
                        type="button"
                        onClick={() => goToTestimonial(active.name)}
                        className="mt-2.5 cursor-pointer text-left text-sm underline"
                        style={{ color: "var(--gold-deep)" }}
                      >
                        Guarda la sua video testimonianza
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </Reveal>
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
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, color-mix(in oklab, var(--secondary) 70%, transparent), color-mix(in oklab, var(--secondary) 82%, transparent) 40%, var(--secondary) 100%)",
          }}
        />

        <div
          className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center"
          style={{ color: "var(--secondary-foreground)" }}
        >
          <Reveal>
            <h2
              className="text-3xl sm:text-4xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.65)" }}
            >
              Hai seguito mille corsi e corsetti e le regole le sai. Eppure{" "}
              <Highlight dark>non ti senti tu</Highlight> su Instagram.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Hai studiato e hai imparato hook, script e CTA. Hai salvato strategie su strategie e
                hai tenuto un piano editoriale anche quando ti stava stretto. In tutto questo hai
                investito tempo, energie e magari soldi in corsi e metodi diversi, quindi{" "}
                <strong className="font-semibold text-ink">l'impegno non ti è mai mancato</strong>.
              </p>
              <p>
                E nonostante questo{" "}
                <strong className="font-semibold text-ink">ti ritrovi a dire</strong>:
              </p>

              <ul className="space-y-4">
                {CONTENT_PAIN_POINTS.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                  >
                    <span className="mt-0.5 text-ink-muted/50">✕</span>
                    <span>“{p}”</span>
                  </li>
                ))}
              </ul>

              <p>
                E questa cosa ti dà fastidio, dentro di te, perché{" "}
                <strong className="font-semibold text-ink">
                  vorresti differenziarti ma non riesci a trasmetterlo
                </strong>
                . Hai paura che anche i tuoi potenziali clienti vedano questo: perché dovrebbero
                venire da te e non andare da un'altra?
              </p>

              <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                Il problema non è quanto pubblichi o quanto sei costante: è che nei tuoi contenuti
                non si riconosce chi sei davvero.
              </p>

              <p>
                Hai competenze e lo sai, però ti senti identica a mille altre professioniste.{" "}
                <strong className="font-semibold text-ink">
                  Ora bisogna renderti riconoscibile.
                </strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3c. Quello che succede dopo Ambiziosa: giornata tipo a riquadri */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <h2 className="text-3xl text-foreground sm:text-4xl">
                Quello che succede <Highlight>dopo Ambiziosa</Highlight> è questo.
              </h2>
              <p className="mt-4 text-base text-foreground/75 sm:text-lg">
                E non te lo dico io, ma te lo confermano{" "}
                <strong className="font-semibold text-foreground">
                  le centinaia di professioniste che hanno lavorato con me
                </strong>
                .
              </p>
            </Reveal>

            <div className="mt-8">
              {JOURNEY_STEPS.map((step, i) => (
                <Reveal key={step.label} delay={i * 60}>
                  <div className="rounded-xl border border-border/70 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-condensed text-xs uppercase tracking-[0.2em] text-primary-foreground sm:text-sm"
                      style={{
                        backgroundImage: "var(--gradient-gold)",
                        boxShadow: "var(--shadow-gold)",
                      }}
                    >
                      <step.icon className="size-4 shrink-0" />
                      {step.label}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
                      {step.text}
                    </p>
                  </div>
                  {i < JOURNEY_STEPS.length - 1 ? (
                    <div className="flex justify-center py-1" aria-hidden>
                      <ChevronDown className="size-5 text-secondary" />
                    </div>
                  ) : null}
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-base leading-relaxed text-foreground/85">
              Sei la stessa professionista di prima, con la stessa ambizione. La differenza è che
              adesso{" "}
              <strong className="font-semibold text-foreground">
                online si vede chi sei davvero
              </strong>
              .
            </p>
          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-24">
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

      {/* 9. Prima/dopo a colonne specchiate */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <div
            className="surface-cream px-6 py-16 sm:px-12 sm:py-20"
            style={{ borderRadius: "1.75rem" }}
          >
            <Reveal>
              <h2 className="text-center text-3xl text-ink sm:text-4xl">
                Oggi sei qui, ma <Highlight dark>tra quattro mesi</Highlight> ecco dove sarai.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Reveal>
                <div className="h-full p-7">
                  <div className="flex justify-center">
                    <span
                      className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
                      style={{
                        backgroundImage: "var(--gradient-gold)",
                        boxShadow: "var(--shadow-gold)",
                      }}
                    >
                      Oggi
                    </span>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {beforeAfterRows.map((r) => (
                      <li
                        key={r.before}
                        className="flex gap-3 text-sm leading-relaxed text-ink-muted/70"
                      >
                        <span className="mt-0.5 text-ink-muted/50">✕</span>
                        <span>{r.before}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="surface-card h-full p-7">
                  <div className="flex justify-center">
                    <span
                      className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
                      style={{
                        backgroundImage: "var(--gradient-gold)",
                        boxShadow: "var(--shadow-gold)",
                      }}
                    >
                      Tra 4 mesi
                    </span>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {beforeAfterRows.map((r) => (
                      <li
                        key={r.after}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                      >
                        <span className="mt-0.5 text-secondary">✓</span>
                        <span>{r.after}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-14 flex flex-col items-center text-center">
                <p className="max-w-2xl text-lg font-semibold leading-snug text-ink sm:text-xl">
                  <CtaBoxContext dark />
                </p>
                <div className="mt-8 flex w-full justify-center">
                  <AmbiziosaCtaButton variant="hero" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Card segmentazione pubblico */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-center text-3xl text-foreground sm:text-4xl">
              Se rientri in una delle categorie qui sotto, allora Ambiziosa è{" "}
              <Highlight>il percorso perfetto per te</Highlight>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {forWhoCards.map((c, i) => (
              <Reveal key={c.role} delay={i * 60}>
                <div className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl">
                  <img
                    src={c.photo}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, color-mix(in oklab, var(--secondary) 82%, transparent), color-mix(in oklab, var(--secondary) 90%, transparent) 40%, var(--secondary) 100%)",
                    }}
                  />
                  <div
                    className="relative flex h-full flex-col p-6 sm:p-7"
                    style={{ color: "var(--secondary-foreground)" }}
                  >
                    <span
                      className="self-start rounded-full px-4 py-1.5 font-condensed text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground sm:text-sm"
                      style={{
                        backgroundImage: "var(--gradient-gold)",
                        boxShadow: "var(--shadow-gold)",
                      }}
                    >
                      {c.n} · {c.role}
                    </span>
                    <div className="mt-5 space-y-3">
                      {c.paragraphs.map((p, pi) => (
                        <p key={pi} className="text-sm leading-relaxed text-ink-muted sm:text-base">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {c.examples.map((ex) => (
                        <span
                          key={ex}
                          className="rounded-xl px-3 py-1.5 text-xs text-ink"
                          style={{
                            backgroundColor:
                              "color-mix(in oklab, var(--secondary) 35%, transparent)",
                            border:
                              "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                          }}
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl space-y-5 text-center">
              <p className="text-base leading-relaxed text-foreground/85">
                Qualsiasi sia la tua professione, sotto, quasi sempre,{" "}
                <strong className="font-semibold text-foreground">c'è lo stesso pensiero</strong>:
              </p>
              <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                “So di essere brava, ma Instagram non riesce a raccontarlo.”
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                <strong className="font-semibold text-foreground">
                  Non importa che il tuo settore sia molto tecnico o molto di nicchia.
                </strong>{" "}
                Ogni professionista con cui ho lavorato è riuscita a tirar fuori un'identità e un
                posizionamento unici, anche in settori difficili.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Box CTA isolato ricorrente #1 */}
      <CtaBox />

      {/* 7. I punti su cui lavoriamo nei 4 mesi */}
      <section
        id="programma"
        className="overflow-x-clip bg-secondary"
        style={{ color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Nei 4 mesi di Ambiziosa lavoriamo su <Highlight dark>tutti questi punti</Highlight>.
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Oggi ti bloccano soprattutto queste domande:{" "}
                <strong className="font-semibold text-ink">cosa pubblicare</strong>, che tipo di
                contenuti creare, chi sei e come posizionarti.
              </p>
              <p>
                Se continui a fare quello che fanno tutte le altre, prima o poi{" "}
                <strong className="font-semibold text-ink">
                  arrivi al burnout senza esserti mai distinta
                </strong>
                .
              </p>
              <p>
                Per questo{" "}
                <strong className="font-semibold text-ink">
                  dalle prime call mettiamo in pratica tutto sul tuo progetto
                </strong>
                .
              </p>
            </div>
          </Reveal>

          <div className="mt-16 space-y-14">
            {communicationPillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="group relative">
                  <div
                    className="relative grid gap-8 overflow-visible rounded-2xl border border-[color-mix(in_oklab,var(--background)_14%,transparent)] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:p-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-10 md:overflow-hidden"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--background) 6%, transparent)",
                    }}
                  >
                    <span
                      className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[40rem] font-bold leading-none md:block"
                      style={{ color: "color-mix(in oklab, var(--primary) 16%, transparent)" }}
                      aria-hidden
                    >
                      {p.n}
                    </span>

                    <div className="relative">
                      <AmbiziosaPillarVisual variant={p.visual} />
                      <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                        {p.intro}
                      </p>
                    </div>

                    <div className="relative">
                      <p className="text-lg font-semibold text-ink sm:text-xl">
                        Che cosa costruiamo insieme in questo passaggio?
                      </p>
                      <ul className="mt-3 space-y-3">
                        {p.bullets.map((b, bi) => (
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
                    </div>
                  </div>

                  <h3
                    className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-3 py-2 font-condensed text-[10px] font-semibold uppercase tracking-[0.05em] text-primary-foreground shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1 sm:-left-3 sm:translate-x-0 sm:px-5 sm:py-3 sm:text-base sm:tracking-[0.15em] md:-left-5 md:px-6"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    {p.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7c. Obiettivo del metodo e versatilità nei settori */}
      <section
        className="overflow-x-clip bg-secondary"
        style={{ color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative pl-10 pt-12 sm:pl-14 sm:pt-14">
                <img
                  src={carlottaAlLavoroImg}
                  alt="Carlotta Sgarra al lavoro durante un suo evento"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                  style={{ objectPosition: "30% 40%" }}
                />
                <CircularBadge className="absolute left-0 top-0 size-32 sm:size-40" />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl text-ink sm:text-4xl">
                Il mio obiettivo è renderti <Highlight dark>unica</Highlight>.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted">
                <p>
                  Se un giorno deciderai di lanciare un corso, aprire uno studio, creare un
                  programma tutto tuo o cambiare settore, saprai con certezza una cosa:{" "}
                  <strong className="font-semibold text-ink">
                    finché dietro c'è la tua identità, le persone sceglieranno te.
                  </strong>
                </p>
                <p>
                  Ho avuto professioniste che hanno applicato questo metodo con successo in{" "}
                  <strong className="font-semibold text-ink">
                    alcuni dei settori più particolari
                  </strong>{" "}
                  che si possano immaginare.
                </p>
                <p>
                  Tra le mie clienti ci sono{" "}
                  <strong className="font-semibold text-ink">
                    tatuatrici, nutrizioniste, wedding planner, makeup artist e mental coach nel
                    mondo cinofilo
                  </strong>
                  .
                </p>
                <p>
                  Con me ha lavorato perfino una commessa di un centro commerciale:{" "}
                  <strong className="font-semibold text-ink">
                    oggi ha lasciato il lavoro e ha un'academy tutta sua
                  </strong>
                  .
                </p>
                <p>
                  Il{" "}
                  <strong className="font-semibold text-ink">
                    metodo funziona in qualsiasi settore
                  </strong>{" "}
                  perché parte da te, a patto di applicarlo fino in fondo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7d. Il principio mancante, raccontato in prima persona */}
      <section className="overflow-x-clip bg-background">
        <div className="mx-auto max-w-5xl px-5 pb-12 pt-20 text-center">
          <Reveal>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              <Highlight>Il principio mancante</Highlight>
              <br className="hidden sm:block" /> dei contenuti e dell'identità online
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-4">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:items-start lg:gap-10">
            <Reveal>
              <ProfileBeforeAfter />
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-5 text-base leading-relaxed text-foreground/85">
                <p>
                  La maggior parte degli "esperti" di social ti dirà che la strada è{" "}
                  <strong className="font-semibold text-foreground">
                    fare quello che funziona per gli altri
                  </strong>
                  : gli stessi hook e lo stesso piano editoriale, anche se quei contenuti non ti
                  assomigliano per niente.
                </p>
                <p>
                  E{" "}
                  <strong className="font-semibold text-foreground">
                    anch'io sono caduta in questa trappola
                  </strong>
                  .
                </p>
                <p>
                  E anche se all'epoca sapevo tutto questo, tecnicamente,{" "}
                  <strong className="font-semibold text-foreground">
                    quel modo di comunicare non mi faceva sentire me stessa
                  </strong>
                  .
                </p>
                <p>
                  Così ho fatto il contrario:{" "}
                  <strong className="font-semibold text-foreground">
                    ho smesso di chiedermi cosa funziona e ho iniziato a chiedermi chi voglio
                    essere.
                  </strong>
                </p>
                <p>
                  Ho scelto una voce e un modo di stare nel business, poi{" "}
                  <strong className="font-semibold text-foreground">
                    ho costruito i miei contenuti partendo da lì
                  </strong>
                  .
                </p>
                <p>
                  Sono cambiati i contenuti e con loro i clienti, poi sono cambiati i soldi. Col
                  tempo sono arrivati anche la struttura, il team e{" "}
                  <strong className="font-semibold text-foreground">
                    una vita che mi assomiglia
                  </strong>
                  .
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="lg:mt-56">
                <ResultsCards />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7e. Le due versioni: Program e Mentorship */}
      <section id="versioni" className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div
              className="surface-cream mx-auto grid max-w-4xl overflow-hidden md:grid-cols-[1.15fr_0.85fr]"
              style={{ borderRadius: "1.75rem" }}
            >
              <img
                src={carlottaLookingImg}
                alt="Carlotta Sgarra"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover md:order-2 md:aspect-auto"
                style={{ objectPosition: "60% 30%" }}
              />
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:order-1">
                <h2 className="text-3xl text-ink sm:text-4xl">
                  Ambiziosa ha due versioni: <Highlight dark>Program o Mentorship</Highlight>.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                  Puoi scegliere quella che preferisci. La durata resta sempre di 4 mesi e in
                  entrambe hai{" "}
                  <strong className="font-semibold text-ink">me e il mio team con te.</strong>
                </p>
              </div>
            </div>
          </Reveal>

          <svg
            viewBox="0 0 800 90"
            preserveAspectRatio="none"
            className="mt-4 hidden h-20 w-full md:block"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M400 4 C400 60 200 26 200 82" vectorEffect="non-scaling-stroke" />
            <path d="M191 70 L200 84 L209 70" vectorEffect="non-scaling-stroke" />
            <path d="M400 4 C400 60 600 26 600 82" vectorEffect="non-scaling-stroke" />
            <path d="M591 70 L600 84 L609 70" vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="mt-12 grid gap-10 md:mt-4 md:grid-cols-2 md:items-stretch md:gap-6">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-8">
                <p className="font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                  Le call nei momenti chiave
                </p>
                <h3 className="mt-2 text-2xl text-foreground sm:text-3xl">Ambiziosa Program</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {programStats.map((s) => (
                    <span
                      key={s.label}
                      className="inline-flex items-baseline gap-1.5 rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs text-foreground/85 sm:text-sm"
                    >
                      <span className="font-display text-lg leading-none text-secondary">
                        {s.n}
                      </span>
                      {s.label}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
                  <p>
                    È il metodo Ambiziosa con le call nei momenti chiave:{" "}
                    <strong className="font-semibold text-foreground">
                      definisci la tua identità e ricevi una strategia di comunicazione costruita
                      sul tuo progetto
                    </strong>
                    .
                  </p>
                  <p>
                    <strong className="font-semibold text-foreground">Le call sono 4</strong>: la
                    iniziale, una sull'identità con me, una sulla strategia con il mio team e la
                    finale.
                  </p>
                </div>
                <ol className="mt-8 space-y-5 border-t border-border/70 pt-8">
                  {programSteps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="w-7 shrink-0 font-condensed text-3xl leading-none text-secondary">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-base font-semibold text-foreground sm:text-lg">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/85 sm:text-base">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="ticket-border-glow relative h-full rounded-[1.75rem]">
                <div
                  className="surface-cream flex h-full flex-col p-6 sm:p-8"
                  style={{
                    borderRadius: "1.75rem",
                    border: "2px solid var(--primary)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                    Accompagnamento continuo per 4 mesi
                  </p>
                  <h3 className="mt-2 text-2xl text-ink sm:text-3xl">Ambiziosa Mentorship</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {mentorshipStats.map((s) => (
                      <span
                        key={s.label}
                        className="inline-flex items-baseline gap-1.5 rounded-full px-3 py-1.5 text-xs text-primary-foreground sm:text-sm"
                        style={{
                          backgroundImage: "var(--gradient-gold)",
                          boxShadow: "var(--shadow-gold)",
                        }}
                      >
                        <span className="font-display text-lg font-bold leading-none">{s.n}</span>
                        {s.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                    <p>
                      È tutto il percorso del Program con in più{" "}
                      <strong className="font-semibold text-ink">
                        un accompagnamento continuo per tutti i 4 mesi
                      </strong>
                      : una call individuale di 30 minuti ogni settimana con il mio team e una call
                      al mese con me, oltre alla call iniziale e a quella finale:{" "}
                      <strong className="font-semibold text-ink">più di 20 call in totale</strong>.
                    </p>
                  </div>
                  <ol
                    className="mt-8 space-y-5 border-t pt-8"
                    style={{ borderColor: "color-mix(in oklab, var(--primary) 30%, transparent)" }}
                  >
                    {mentorshipSteps.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="w-7 shrink-0 font-condensed text-3xl leading-none text-primary">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-base font-semibold text-ink sm:text-lg">
                            {step.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-base">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed text-foreground/85 sm:text-lg">
              In entrambi i casi arrivi alla fine dei 4 mesi con{" "}
              <strong className="font-semibold text-foreground">
                una strategia completa che hai già messo in pratica
              </strong>{" "}
              e sai come farla evolvere da sola.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBox />

      {/* 7f. Il team di Ambiziosa */}
      <section className="bg-secondary" style={{ color: "var(--secondary-foreground)" }}>
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span
                className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
                style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                Il team di Ambiziosa
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Dietro ogni call e ogni strategia ci siamo <Highlight dark>io e Sharon</Highlight>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal>
              <div className="surface-card grid gap-6 p-6 sm:grid-cols-[220px_1fr] sm:p-8">
                <img
                  src={carlottaLookingWideImg}
                  alt="Carlotta Sgarra"
                  loading="lazy"
                  className="aspect-[4/5] w-full max-w-[220px] rounded-2xl object-cover"
                  style={{ objectPosition: "62% 30%" }}
                />
                <div>
                  <h3 className="text-2xl text-foreground sm:text-3xl">Carlotta Sgarra</h3>
                  <p className="mt-1 font-condensed text-xs uppercase tracking-[0.15em] text-secondary">
                    Fondatrice di Ambiziosa
                  </p>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">
                    <p>
                      Sono Carlotta Sgarra e{" "}
                      <strong className="font-semibold text-foreground">
                        ho costruito la mia azienda partendo dalla persona che sono
                      </strong>
                      . Oggi aiuto le professioniste a fare lo stesso, con un metodo che ha
                      funzionato per me e per centinaia di professioniste italiane.
                    </p>
                    <p>
                      In Ambiziosa ci sono io{" "}
                      <strong className="font-semibold text-foreground">
                        nella call iniziale, nel lavoro sull'identità e nella call finale
                      </strong>
                      . Nella Mentorship ti seguo anche una volta al mese.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="surface-card grid gap-6 p-6 sm:grid-cols-[220px_1fr] sm:p-8">
                <img
                  src={sharonConvertinoImg}
                  alt="Sharon Convertino"
                  loading="lazy"
                  className="aspect-[4/5] w-full max-w-[220px] rounded-2xl object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
                <div>
                  <h3 className="text-2xl text-foreground sm:text-3xl">Sharon Convertino</h3>
                  {/* DA CONFERMARE: titolo ufficiale di Sharon */}
                  <p className="mt-1 font-condensed text-xs uppercase tracking-[0.15em] text-secondary">
                    Team Ambiziosa: contenuti, editing e montaggio
                  </p>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">
                    <p>
                      Sharon fa parte del mio team e ogni giorno si occupa di contenuti, editing e
                      montaggio.{" "}
                      <strong className="font-semibold text-foreground">
                        È lei che segue tutta la parte di contenuti di Ambiziosa
                      </strong>
                      : lavora direttamente sul tuo progetto e costruisce macro topic, banca idee
                      personalizzata, struttura dei contenuti e direzione comunicativa, a partire
                      dall'identità emersa con me.
                    </p>
                    <p>
                      Nel Program ti segue nella call individuale sulla strategia. Nella Mentorship
                      hai con lei una call individuale di 30 minuti ogni settimana:{" "}
                      <strong className="font-semibold text-foreground">
                        porti dubbi, contenuti e scelte comunicative, senza aspettare la fine di uno
                        step.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7g. Video testimonianze — stessa sezione di Rule the Rules (src/routes/index.tsx) */}
      <section
        id="testimonianze"
        className="bg-secondary"
        style={{ color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Funziona anche <Highlight dark>nel tuo settore</Highlight>? Guarda qui sotto.
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

      {/* 11. Presentazione dei 2 livelli */}
      <section id="prezzi" className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-center text-3xl text-foreground sm:text-4xl">
              Scegli il tuo <Highlight>livello di accompagnamento</Highlight>
            </h2>
            {/* LOREM - sezione 11, intro card prezzi, sostituire con copy reale */}
            <p className="mx-auto mt-3 max-w-xl text-center text-base text-foreground/75 sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pricingTiers.map((tier) => (
              <Reveal key={tier.id} delay={tier.recommended ? 0 : 80}>
                <div
                  className={`relative flex h-full flex-col p-7 ${
                    tier.recommended ? "surface-cream" : "surface-card"
                  }`}
                  style={tier.recommended ? { borderRadius: "1.75rem" } : undefined}
                >
                  {tier.recommended ? (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
                      style={{
                        backgroundImage: "var(--gradient-gold)",
                        boxShadow: "var(--shadow-gold)",
                      }}
                    >
                      Consigliato
                    </span>
                  ) : null}
                  <p
                    className={`font-condensed text-xs uppercase tracking-[0.2em] ${
                      tier.recommended ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={`mt-2 text-lg font-semibold sm:text-xl ${
                      tier.recommended ? "text-ink" : "text-foreground"
                    }`}
                  >
                    {tier.payoff}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span
                      className={`font-display text-5xl ${
                        tier.recommended ? "text-ink" : "text-foreground"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-xs ${
                        tier.recommended ? "text-ink-muted" : "text-muted-foreground"
                      }`}
                    >
                      {tier.priceNote}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-sm ${
                      tier.recommended ? "text-ink-muted" : "text-foreground/75"
                    }`}
                  >
                    {tier.duration}
                  </p>

                  <ul className="mt-6 flex-1 space-y-4">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`flex gap-3 text-sm leading-relaxed ${
                          tier.recommended ? "text-ink-muted" : "text-foreground/85"
                        }`}
                      >
                        {tier.recommended ? (
                          <Check
                            className="mt-1 size-4 shrink-0"
                            style={{ color: "var(--gold-deep)" }}
                          />
                        ) : (
                          <Check className="mt-1 size-4 shrink-0 text-secondary" />
                        )}
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <AmbiziosaCtaButton variant="hero" label={`Candidati per ${tier.name}`} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. → CtaBox #2, dopo il reframe (sezione 6) */}
      <CtaBox />

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
      <CtaBox />

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
      <CtaBox />

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
