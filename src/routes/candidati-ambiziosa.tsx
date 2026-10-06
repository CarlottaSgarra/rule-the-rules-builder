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
  Check,
  Sparkles,
  Users,
  ShieldCheck,
  Star,
  ChevronDown,
  Wallet,
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
import { WhatsAppIcon } from "@/components/landing/WhatsAppIcon";
import { AmbiziosaJourney } from "@/components/landing/AmbiziosaJourney";
import { ShineSweep } from "@/components/landing/ShineSweep";
import { SectionPhoto } from "@/components/landing/SectionPhoto";
import { Countdown } from "@/components/landing/Countdown";
import { AmbiziosaHeroVideo } from "@/components/landing/AmbiziosaHeroVideo";
import { ProfileBeforeAfter, ResultsCards } from "@/components/landing/AmbiziosaProofCards";
import { TestimonialsExplorer } from "@/components/landing/TestimonialsExplorer";
import {
  PRICE_LOCK_DEADLINE,
  MENTORSHIP_PRICE,
  MENTORSHIP_STATS as mentorshipStats,
  PROGRAM_PRICE,
  PROGRAM_STATS as programStats,
  INSTALLMENT_MONTHS,
  MAX_SEATS,
  UPGRADE_DIFFERENCE,
  WHATSAPP_URL,
} from "@/lib/ambiziosa-config";
import matildeImg from "@/assets/matilde sgarra.jpeg";
import carlottaWalkingImg from "@/assets/carlotta-walking.jpg";
import carlottaTalkingImg from "@/assets/carlotta-talking.jpg";
import carlottaHugImg from "@/assets/carlotta-hug.jpg";
import carlottaCameraImg from "@/assets/Carlotta spostata a sinistra che guarda verso la camera.jpg";
import bonusNotionImg from "@/assets/dashboard notion.png";
import bonusSlackDmImg from "@/assets/dm diretto.png";
import bonusCommunityImg from "@/assets/community.png";
import bonusGptImg from "@/assets/Chat Assistant Carousel in Soft Pink (1).png";
import carlottaCallAvatarImg from "@/assets/carlotta-call-avatar.jpg";
import sharonCallAvatarImg from "@/assets/sharon-call-avatar.jpg";
import carlottaManiInTascaImg from "@/assets/Carlotta mani in tasca che guarda a sinistra.jpg";
import carlottaPresentingImg from "@/assets/carlotta-presenting.jpg";
import sharonSpeakingImg from "@/assets/sharon-speaking.jpg";
import carlottaLookingWideImg from "@/assets/carlotta-looking.jpg";
import carlottaHeroBgImg from "@/assets/Carlotta bianco e nero che guarda in camera.jpg";
import carlottaLeftImg from "@/assets/Carlotta bianco e nerco che guarda a sinistra.jpg";
import winScreenshot1Img from "@/assets/screenshot 1.jpg";
import winScreenshot2Img from "@/assets/screenshot 2.png";
import winScreenshot3Img from "@/assets/screenshot 3.png";
import winScreenshot4Img from "@/assets/screenshot 4.jpg";
import winScreenshot5Img from "@/assets/screenshot 5.jpg";
import winScreenshot6Img from "@/assets/screenshot 6.png";
import winScreenshot7Img from "@/assets/screenshot 7.png";
import winScreenshot9Img from "@/assets/screenshot 9.jpg";
import winScreenshot10Img from "@/assets/screenshot 10.png";
import winScreenshot12Img from "@/assets/screenshot 12.png";
import winScreenshot13Img from "@/assets/screenshot 13.png";
import winScreenshot15Img from "@/assets/screenshot 15.png";
import winScreenshot16Img from "@/assets/screenshot 16.png";
import winScreenshot18Img from "@/assets/screenshot 18.png";
import winScreenshot19Img from "@/assets/screenshot 19.png";
import winScreenshot116Img from "@/assets/screenshot 116.png";
import winScreenshot117Img from "@/assets/screenshot 117.png";
import carlottaAlLavoroImg from "@/assets/method-bg.jpg";
import hoCreatoUnaziendaImg from "@/assets/ho-creato-unazienda-identita-riconoscibile.jpg";
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
const PRICE_LOCK_MS = new Date(PRICE_LOCK_DEADLINE).getTime();
const CTA_LABEL = "Voglio candidarmi ad Ambiziosa";

// Testo del box CTA ricorrente (CtaBox): stesso identico testo in ogni
// sezione che lo richiama, come da indicazione esplicita. `dark` sceglie la
// tinta di Highlight in base allo sfondo, come in Rule The Rules.
function CtaBoxContext({ dark = false }: { dark?: boolean }) {
  return (
    <>
      4 mesi con me e il mio team, a partire da martedì 20 ottobre:{" "}
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

// Le due versioni a confronto nella sezione prezzi (#prezzi). La Mentorship
// è messa in evidenza: card scura con bordo oro animato e badge.
const programFeatures: React.ReactNode[] = [
  <>
    <strong className="font-semibold text-foreground">
      Due kick off call, una con me e una con Sharon
    </strong>
    : partiamo dalla tua situazione e fissiamo la direzione dei 4 mesi.
  </>,
  <>
    <strong className="font-semibold text-foreground">La parte introduttiva</strong> per entrare nel
    metodo Ambiziosa.
  </>,
  <>
    <strong className="font-semibold text-foreground">Lo step Identità</strong>, con una call
    individuale con me alla fine.
  </>,
  <>
    <strong className="font-semibold text-foreground">
      La tua strategia completa di comunicazione
    </strong>
    , costruita dal mio team sul tuo progetto: macro topic, banca idee personalizzata, struttura dei
    contenuti, direzione comunicativa.
  </>,
  <>
    <strong className="font-semibold text-foreground">Gli step formativi</strong> per capire il
    metodo mentre pubblichi.
  </>,
  <>
    <strong className="font-semibold text-foreground">La strategia affinata insieme a noi</strong>{" "}
    mentre la metti in pratica.
  </>,
  <>
    <strong className="font-semibold text-foreground">
      Una call Strategia contenuti con Sharon
    </strong>
    .
  </>,
  <>
    <strong className="font-semibold text-foreground">La call finale con me e con Sharon</strong>{" "}
    per definire come continuare in autonomia.
  </>,
  <>
    <strong className="font-semibold text-foreground">
      Puoi passare alla Mentorship entro il primo mese
    </strong>
    : paghi solo la differenza di {UPGRADE_DIFFERENCE}, senza interessi e senza sovrapprezzo, e fai
    5 mesi invece di 4, perché il primo mese te lo regaliamo noi.
  </>,
];

const mentorshipBaseFeatures: React.ReactNode[] = [
  <>
    <strong className="font-semibold text-ink">
      Due kick off call, una con me e una con Sharon
    </strong>
    : definiamo punto di partenza, obiettivi, priorità e il giorno della tua call settimanale.
  </>,
  <>
    <strong className="font-semibold text-ink">La parte introduttiva</strong> per entrare nel metodo
    Ambiziosa.
  </>,
  <>
    <strong className="font-semibold text-ink">Gli step formativi</strong> per capire il metodo
    mentre pubblichi.
  </>,
  <>
    <strong className="font-semibold text-ink">Lo step Identità</strong>, con il confronto con me.
  </>,
  <>
    <strong className="font-semibold text-ink">La tua strategia completa di comunicazione</strong>,
    costruita dal mio team sul tuo progetto: macro topic, banca idee personalizzata, struttura dei
    contenuti, direzione comunicativa.
  </>,
];

const mentorshipExtraFeatures: React.ReactNode[] = [
  <>
    <strong className="font-semibold text-ink">22 call in 4 mesi</strong>, contro le 5 del Program.
  </>,
  <>
    <strong className="font-semibold text-ink">
      Una call individuale di 30 minuti ogni settimana con il mio team
    </strong>
    , a giorno fisso per tutti i 4 mesi.
  </>,
  <>
    <strong className="font-semibold text-ink">Una call al mese con me per 4 mesi</strong>, per
    lavorare sulla tua evoluzione.
  </>,
  <>
    <strong className="font-semibold text-ink">Un confronto settimanale su tutto</strong>: dubbi,
    contenuti, scelte comunicative, difficoltà e nuove idee, senza aspettare la fine di uno step.
  </>,
  <>
    <strong className="font-semibold text-ink">Un affiancamento continuo mentre applichi</strong>:
    lavoriamo sulla strategia mentre la pubblichi.
  </>,
  <>
    <strong className="font-semibold text-ink">
      La strategia analizzata e corretta passo dopo passo
    </strong>{" "}
    durante il percorso, finché sai farla evolvere da sola.
  </>,
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

// Domande frequenti finali. Le domande ancora da confermare (cosa succede
// dopo la call, ore a settimana, durata e costo della call conoscitiva) non
// sono in pagina finché Carlotta non dà le risposte.
const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Quando inizia Ambiziosa e quanto dura?",
    a: (
      <>
        Si parte <strong className="font-semibold text-foreground">martedì 20 ottobre</strong> e il
        percorso dura 4 mesi, quindi si arriva a febbraio. I posti sono {MAX_SEATS} in tutto e i
        prezzi di oggi restano bloccati fino al 16 ottobre.
      </>
    ),
  },
  {
    q: "Che differenza c'è tra Ambiziosa Program e Ambiziosa Mentorship?",
    a: (
      <>
        La Mentorship comprende tutto il Program e in più ti accompagna per tutti i 4 mesi. Nel
        Program hai 5 call: le due di kick off, una con me e una con Sharon, una sull'identità con
        me, una sulla strategia dei contenuti con Sharon e la finale con entrambe. Nella Mentorship
        hai <strong className="font-semibold text-foreground">22 call</strong>: le due di kick off,{" "}
        <strong className="font-semibold text-foreground">
          una call individuale di 30 minuti ogni settimana con il mio team
        </strong>{" "}
        e <strong className="font-semibold text-foreground">una call al mese con me</strong>. La
        strategia viene{" "}
        <strong className="font-semibold text-foreground">
          affinata insieme a noi durante tutto il percorso
        </strong>
        .
      </>
    ),
  },
  {
    q: "Quanto costa Ambiziosa?",
    a: (
      <>
        Ambiziosa Program costa{" "}
        <strong className="font-semibold text-foreground">{PROGRAM_PRICE}</strong> e Ambiziosa
        Mentorship <strong className="font-semibold text-foreground">{MENTORSHIP_PRICE}</strong>.
      </>
    ),
  },
  {
    q: "Posso rateizzare il pagamento?",
    a: (
      <>
        Sì,{" "}
        <strong className="font-semibold text-foreground">
          puoi rateizzare fino a {INSTALLMENT_MONTHS} mesi
        </strong>
        , sia per il Program sia per la Mentorship.
      </>
    ),
  },
  {
    q: "Posso iniziare dal Program e passare alla Mentorship?",
    a: (
      <>
        Sì: inizia dal Program, hai un mese per salire. Non devi decidere tutto subito.{" "}
        <strong className="font-semibold text-foreground">
          Entro il primo mese puoi passare alla Mentorship pagando solo la differenza di{" "}
          {UPGRADE_DIFFERENCE}
        </strong>
        , senza interessi e senza sovrapprezzo. E fai 5 mesi invece di 4: il primo mese te lo
        regaliamo noi.
      </>
    ),
  },
  {
    q: "Ho comprato la call di implementazione durante Rule The Rules: posso scalare l'importo dal percorso?",
    a: (
      <>
        Sì: se durante Rule The Rules hai comprato la call di implementazione 1:1,{" "}
        <strong className="font-semibold text-foreground">
          puoi scalare quell'importo dal percorso
        </strong>
        .
      </>
    ),
  },
  {
    q: "Non so cosa comunicare: posso partire lo stesso?",
    a: (
      <>
        Sì, non devi avere già le idee chiare. Lavori sulla tua identità e{" "}
        <strong className="font-semibold text-foreground">
          il mio team costruisce la strategia sul tuo progetto
        </strong>
        , così puoi iniziare a pubblicare senza aspettare di aver finito la formazione.
      </>
    ),
  },
  {
    q: "Il mio settore è molto tecnico o di nicchia: funziona lo stesso?",
    a: (
      <>
        Il metodo parte da te:{" "}
        <strong className="font-semibold text-foreground">
          ha funzionato anche per una tatuatrice, una nutrizionista e una wedding planner
        </strong>
        . Guarda le storie di chi ha lavorato con me e trova quella più vicina alla tua.
      </>
    ),
  },
  {
    q: "Se cambio il mio modo di comunicare, i contenuti smettono di funzionare?",
    a: (
      <>
        Quello che oggi funziona lo teniamo.{" "}
        <strong className="font-semibold text-foreground">
          Prima costruiamo la tua identità, poi la strategia attorno a te
        </strong>
        : i tuoi contenuti hanno una struttura solida e finalmente ti somigliano.
      </>
    ),
  },
  {
    q: "Devo seguire un calendario fisso?",
    a: (
      <>
        No, non c'è un calendario mese per mese:{" "}
        <strong className="font-semibold text-foreground">ognuna va con il suo ritmo</strong>.
        L'ordine dei 4 step però è lo stesso per tutte: radica chi sei, progetta i contenuti, attiva
        i contenuti, chiudi e scala.
      </>
    ),
  },
  {
    q: "Che supporto ho tra una call e l'altra?",
    a: (
      <>
        Su Slack hai{" "}
        <strong className="font-semibold text-foreground">
          il supporto diretto con me e con Sharon
        </strong>
        , dal lunedì al giovedì dalle 10:00 alle 16:00, con risposta entro 24 ore. In più hai Notion
        con audio, esercizi e piano di lavoro, la community e il tuo GPT Alterego per i contenuti.
      </>
    ),
  },
  {
    q: "Perché i posti sono limitati a 9?",
    a: (
      <>
        I posti sono limitati perché{" "}
        <strong className="font-semibold text-foreground">
          io e Sharon lavoriamo a stretto contatto con ogni professionista
        </strong>
        : più di nove non riusciamo a seguirle come vogliamo. Quando i {MAX_SEATS} posti sono
        occupati, non ne apriamo altri.
      </>
    ),
  },
  {
    q: "Cosa succede dopo il 16 ottobre?",
    a: (
      <>
        <strong className="font-semibold text-foreground">I prezzi salgono.</strong> Fino al 16
        ottobre Ambiziosa Program resta bloccato a {PROGRAM_PRICE} e Ambiziosa Mentorship a{" "}
        {MENTORSHIP_PRICE}.
      </>
    ),
  },
];

const forWhoCards = [
  {
    n: "01",
    role: "Coach e mentor",
    story: {
      name: "Elisabetta Bettonte",
      role: "parent coach",
      photo: elisabettaBettonteImg,
      from: "-10.000€ investiti in corsi senza risultati",
      to: "6.000€ al mese",
    },
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
    story: {
      name: "Mariangela Simioli",
      role: "marketing strategist",
      photo: mariangelaSimioliImg,
      from: "500€ sul conto dopo essersi licenziata",
      to: "superare il regime forfettario in 4 mesi",
    },
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
    story: {
      name: "Valeria Salussolia",
      role: "titolare di un centro benessere",
      photo: valeriaSalussoliImg,
      from: "contratti instabili da estetista",
      to: "fatturare in una settimana quello che guadagnava in un mese",
    },
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
    story: {
      name: "Mariella Tauriello",
      role: "Instagram e visual coach",
      photo: mariannaTaurielloImg,
      from: "sentirsi sopraffatta da troppe idee",
      to: "fare sold out con il suo programma",
    },
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

// Screenshot dei messaggi "wins" delle clienti, divisi in due colonne che
// scorrono in direzioni opposte nella sezione "Quello che succede dopo
// Ambiziosa". w/h servono a riservare lo spazio prima del caricamento.
const WIN_SCREENSHOTS = [
  { src: winScreenshot1Img, w: 1178, h: 1350 },
  { src: winScreenshot2Img, w: 662, h: 914 },
  { src: winScreenshot3Img, w: 606, h: 312 },
  { src: winScreenshot4Img, w: 1179, h: 803 },
  { src: winScreenshot5Img, w: 1179, h: 1510 },
  { src: winScreenshot6Img, w: 692, h: 732 },
  { src: winScreenshot7Img, w: 708, h: 432 },
  { src: winScreenshot9Img, w: 1179, h: 652 },
  { src: winScreenshot10Img, w: 990, h: 558 },
  { src: winScreenshot12Img, w: 1158, h: 320 },
  { src: winScreenshot13Img, w: 786, h: 336 },
  { src: winScreenshot15Img, w: 920, h: 416 },
  { src: winScreenshot16Img, w: 592, h: 730 },
  { src: winScreenshot18Img, w: 1420, h: 300 },
  { src: winScreenshot19Img, w: 638, h: 752 },
  { src: winScreenshot116Img, w: 898, h: 374 },
  { src: winScreenshot117Img, w: 742, h: 338 },
];
const WIN_COLUMNS = [
  WIN_SCREENSHOTS.filter((_, i) => i % 2 === 0),
  WIN_SCREENSHOTS.filter((_, i) => i % 2 === 1),
];

// Le frasette di valore sotto il titolo dell'hero.
const heroValuePoints = [
  { icon: Sparkles, text: "Percorso esclusivo di 4 mesi" },
  { icon: CalendarDays, text: "Inizia martedì 20 ottobre" },
  { icon: Users, text: "Lavori con me e Sharon" },
  { icon: Star, text: `Solo ${MAX_SEATS} posti in tutto` },
];

// I 4 step del percorso, costruiti come le "3 serate" di Rule The Rules:
// illustrazione React dello step + intro a sinistra, checklist a destra,
// titolo dello step nel badge oro. Nessuna scansione mese per mese: ognuna va
// con il suo ritmo, ma l'ordine è lo stesso per tutte.
const communicationPillars: {
  n: string;
  title: string;
  subtitle: string;
  visual: PillarVisualVariant;
  intro: React.ReactNode;
  bullets: React.ReactNode[];
}[] = [
  {
    n: "1",
    title: "Radica chi sei",
    subtitle: "Identità e sistema di offerte, con me",
    visual: "radica",
    intro: (
      <>
        È il punto di partenza e lo facciamo insieme, io e te, perché{" "}
        <strong className="font-semibold text-ink">
          tutto quello che viene dopo si regge su questo
        </strong>
        .
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Chi sei come professionista</strong>: i valori
        che guidano il tuo lavoro, cosa vuoi rappresentare e come vuoi essere percepita.
      </>,
      <>
        <strong className="font-semibold text-ink">Il tuo sistema di offerte</strong>: cosa vendi, a
        chi e in che ordine, così ogni contenuto ha una direzione precisa verso cui portare.
      </>,
      <>
        <strong className="font-semibold text-ink">Un posizionamento che è solo tuo</strong>: smetti
        di somigliare alle altre del tuo settore e inizi a farti riconoscere.
      </>,
    ],
  },
  {
    n: "2",
    title: "Progetta i contenuti",
    subtitle: "Strategia e piano editoriale su misura, con Sharon",
    visual: "progetta",
    intro: (
      <>
        Con{" "}
        <strong className="font-semibold text-ink">
          Sharon, che nel mio team segue i contenuti
        </strong>
        , trasformiamo la tua identità in un piano concreto.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">I tuoi macro topic</strong>: i temi grandi su cui
        costruisci tutto quello che pubblichi, nati dalla tua identità e non da un modello uguale
        per tutte.
      </>,
      <>
        <strong className="font-semibold text-ink">La tua strategia di contenuti</strong>: ogni
        contenuto ha un ruolo preciso, basta pubblicare tanto per esserci.
      </>,
      <>
        <strong className="font-semibold text-ink">Un piano editoriale su misura</strong>: sai cosa
        pubblicare e perché, e quando ti chiedi cosa postare oggi hai già la risposta.
      </>,
    ],
  },
  {
    n: "3",
    title: "Attiva i contenuti",
    subtitle: "Si pubblica, editing identitario e strategie per vendere",
    visual: "attiva",
    intro: (
      <>
        Qui <strong className="font-semibold text-ink">si inizia a pubblicare davvero</strong>: il
        piano smette di restare sulla carta e diventa contenuti online.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Si pubblica</strong>: metti online i contenuti
        del tuo piano, con un ritmo sostenibile per te.
      </>,
      <>
        <strong className="font-semibold text-ink">Editing identitario</strong>: uno stile e un
        montaggio che ti rendono riconoscibile fin dai primi secondi.
      </>,
      <>
        <strong className="font-semibold text-ink">Strategie per vendere</strong>: i contenuti che
        portano chi ti segue verso le tue offerte, senza sembrare una televendita.
      </>,
    ],
  },
  {
    n: "4",
    title: "Chiudi e scala",
    subtitle: "Da follower a cliente, messaggi privati e call conoscitiva",
    visual: "chiudi",
    intro: (
      <>
        L'ultimo step è quello che{" "}
        <strong className="font-semibold text-ink">trasforma la tua visibilità in clienti</strong>.
      </>
    ),
    bullets: [
      <>
        <strong className="font-semibold text-ink">Da follower a cliente</strong>: il percorso che
        porta chi ti segue a sceglierti, passo dopo passo.
      </>,
      <>
        <strong className="font-semibold text-ink">I messaggi privati</strong>: come aprire e
        gestire le conversazioni senza essere invadente.
      </>,
      <>
        <strong className="font-semibold text-ink">La call conoscitiva</strong>: come condurla per
        chiudere con naturalezza, senza sentirti una venditrice.
      </>,
      <>
        <strong className="font-semibold text-ink">Un sistema che scala</strong>: continua a
        funzionare anche dopo la fine del percorso.
      </>,
    ],
  },
];

// Le call di ogni versione e con chi si fanno. Ogni call è un piccolo
// riquadro con la foto di Carlotta e/o di Sharon, mostrato sotto il passo
// della sezione "Ambiziosa ha due versioni" in cui viene citata. Il totale
// (5 e 22) si ricava sommando `count` delle call di tutti i passi.
type CallWho = "carlotta" | "sharon" | "both";
type CallBox = { title: string; count: number; who: CallWho; highlight?: boolean };

const KICKOFF_CALLS: CallBox[] = [
  { title: "Kick off call con Carlotta", count: 1, who: "carlotta" },
  { title: "Kick off call con Sharon", count: 1, who: "sharon" },
];

const CALL_PEOPLE: Record<CallWho, { name: string; photos: { src: string; alt: string }[] }> = {
  carlotta: {
    name: "Carlotta",
    photos: [{ src: carlottaCallAvatarImg, alt: "Carlotta Sgarra" }],
  },
  sharon: {
    name: "Sharon",
    photos: [{ src: sharonCallAvatarImg, alt: "Sharon Convertino" }],
  },
  both: {
    name: "Carlotta e Sharon",
    photos: [
      { src: carlottaCallAvatarImg, alt: "Carlotta Sgarra" },
      { src: sharonCallAvatarImg, alt: "Sharon Convertino" },
    ],
  },
};

function CallChip({ call, dark = false }: { call: CallBox; dark?: boolean }) {
  const person = CALL_PEOPLE[call.who];
  return (
    <div
      className="flex items-center gap-2.5 rounded-lg border p-2 pr-3"
      style={
        dark
          ? {
              backgroundColor: call.highlight
                ? "color-mix(in oklab, var(--primary) 14%, transparent)"
                : "color-mix(in oklab, var(--background) 6%, transparent)",
              borderColor: call.highlight
                ? "var(--primary)"
                : "color-mix(in oklab, var(--background) 14%, transparent)",
            }
          : {
              backgroundColor: "var(--background)",
              borderColor: "color-mix(in oklab, var(--secondary) 25%, transparent)",
            }
      }
    >
      <div className="flex shrink-0 -space-x-2.5">
        {person.photos.map((ph) => (
          <img
            key={ph.alt}
            src={ph.src}
            alt={ph.alt}
            loading="lazy"
            className="size-9 rounded-md object-cover"
            style={
              person.photos.length > 1
                ? { border: `2px solid ${dark ? "var(--secondary)" : "var(--background)"}` }
                : undefined
            }
          />
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-semibold leading-snug ${
            dark ? (call.highlight ? "text-primary" : "text-ink") : "text-foreground"
          }`}
        >
          {call.title}
        </p>
        <p className={`text-[11px] leading-snug ${dark ? "text-ink-muted" : "text-foreground/70"}`}>
          {call.count === 1
            ? `Questa call la fai con ${person.name}`
            : `Queste ${call.count} call le fai con ${person.name}`}
        </p>
      </div>
      <span
        className={`shrink-0 font-display text-xl leading-none ${
          dark ? "text-primary" : "text-secondary"
        }`}
      >
        {call.count}
      </span>
    </div>
  );
}

// Totale delle call in fondo alla card (mt-auto): con le due card alte uguali
// la riga "Call totali" del Program e della Mentorship è sulla stessa linea.
function CallTotal({ steps, dark = false }: { steps: VersionStep[]; dark?: boolean }) {
  const calls = steps.flatMap((s) => s.calls ?? []);
  const total = calls.reduce((sum, c) => sum + c.count, 0);
  return (
    <div className="mt-auto pt-8">
      <div
        className="border-t pt-6"
        style={{
          borderColor: dark
            ? "color-mix(in oklab, var(--primary) 30%, transparent)"
            : "color-mix(in oklab, var(--secondary) 20%, transparent)",
        }}
      >
        <p
          className={`font-condensed text-xs uppercase tracking-[0.2em] ${
            dark ? "text-primary" : "text-secondary"
          }`}
        >
          Call totali
        </p>
        <p
          className={`mt-2 font-display text-5xl leading-none ${dark ? "text-primary" : "text-foreground"}`}
        >
          {total} call
        </p>
        <p
          className={`mt-2 text-sm font-semibold ${dark ? "text-ink-muted" : "text-foreground/70"}`}
        >
          {calls.map((c) => c.count).join(" + ")}
        </p>
      </div>
    </div>
  );
}

// Le due versioni di Ambiziosa: numeri chiave (badge) e passi numerati.
type VersionStep = { title: string; text: React.ReactNode; calls?: CallBox[] };

const programSteps: VersionStep[] = [
  {
    title: "Le due kick off call",
    calls: KICKOFF_CALLS,
    text: (
      <>
        Una con me e una con Sharon: guardiamo la tua situazione attuale, definiamo gli obiettivi e{" "}
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
    calls: [{ title: "1 call Identità con Carlotta", count: 1, who: "carlotta" }],
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
    title: "La call Strategia contenuti con Sharon",
    calls: [{ title: "1 call Strategia contenuti con Sharon", count: 1, who: "sharon" }],
    text: (
      <>
        Durante il percorso hai una{" "}
        <strong className="font-semibold text-foreground">call individuale con Sharon</strong>: ti
        confronti con noi sul lavoro fatto, su come stai applicando la strategia e su come farla
        evolvere con quello che impari.
      </>
    ),
  },
  {
    title: "La call finale",
    calls: [{ title: "Call finale con Carlotta e Sharon", count: 1, who: "both" }],
    text: (
      <>
        I 4 mesi finiscono con una call con me e con Sharon: rileggiamo il percorso, guardiamo cosa
        è cambiato e{" "}
        <strong className="font-semibold text-foreground">
          definiamo la direzione con cui continuare a lavorare in autonomia.
        </strong>
      </>
    ),
  },
];

const mentorshipSteps: VersionStep[] = [
  {
    title: "Le due kick off call",
    calls: KICKOFF_CALLS,
    text: (
      <>
        Una con me e una con Sharon: guardiamo il tuo punto di partenza, gli obiettivi, le priorità
        e la direzione dei 4 mesi. Lì{" "}
        <strong className="font-semibold text-ink">
          fissiamo anche il giorno della tua call settimanale con Sharon.
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
    title: "Una call a settimana con Sharon",
    calls: [
      { title: "1 call ogni settimana con Sharon", count: 16, who: "sharon", highlight: true },
    ],
    text: (
      <>
        Ogni settimana hai una{" "}
        <strong className="font-semibold text-ink">call individuale di 30 minuti con Sharon</strong>
        . Il giorno lo fissiamo nelle kick off call e diventa un appuntamento fisso per tutta la
        Mentorship. Dubbi, contenuti, scelte comunicative, difficoltà e nuove idee: li porti lì,{" "}
        <strong className="font-semibold text-ink">senza aspettare la fine di uno step.</strong>
      </>
    ),
  },
  {
    title: "Una call al mese con me",
    calls: [{ title: "1 call al mese con Carlotta", count: 4, who: "carlotta" }],
    text: (
      <>
        Per 4 mesi hai <strong className="font-semibold text-ink">una call al mese con me</strong>,
        4 in tutto: lavoriamo sulla tua evoluzione e sui temi che emergono lungo il percorso.
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

// Cosa trovi dentro Ambiziosa: i 4 strumenti/bonus del percorso. Ogni card
// ha uno screenshot del bonus, due badge di
// valore, descrizione, dettagli e, dove serve, una chiusura in evidenza.
const ambiziosaBonuses: {
  title: string;
  image: { src: string; alt: string };
  badges: [string, string];
  intro: React.ReactNode;
  details?: { label: string; text: React.ReactNode }[];
  bulletsTitle?: string;
  bullets: React.ReactNode[];
  closing?: React.ReactNode;
}[] = [
  {
    title: "Il tuo HQ: Notion",
    image: { src: bonusNotionImg, alt: "La dashboard Notion di Ambiziosa Mentorship" },
    badges: ["Tutto in un unico posto", "Piano step by step"],
    intro: (
      <>
        Notion è il tuo centro operativo, il posto dove costruisci:{" "}
        <strong className="font-semibold text-ink">
          tutto il percorso in un unico spazio ordinato
        </strong>
        , così sai sempre a che punto sei e cosa viene dopo.
      </>
    ),
    bulletsTitle: "Dentro trovi",
    bullets: [
      <>
        <strong className="font-semibold text-ink">Tutti gli audio formativi</strong>, da ascoltare
        quando vuoi.
      </>,
      <>
        <strong className="font-semibold text-ink">Gli esercizi da svolgere</strong>, uno dopo
        l'altro.
      </>,
      <>
        <strong className="font-semibold text-ink">Il tuo piano di lavoro step by step</strong>,
        costruito sul tuo progetto.
      </>,
      <>
        <strong className="font-semibold text-ink">Il calendario con tutte le call</strong>, per non
        perderne nemmeno una.
      </>,
    ],
  },
  {
    title: "Supporto diretto su Slack",
    image: { src: bonusSlackDmImg, alt: "Messaggi diretti con Carlotta su Slack" },
    badges: ["Risposta entro 24 ore", "Lun-gio · 10-16"],
    intro: (
      <>
        Hai accesso al{" "}
        <strong className="font-semibold text-ink">supporto diretto con me e con Sharon</strong>:
        quando ti blocchi non devi aspettare la call successiva.
      </>
    ),
    details: [
      { label: "Quando", text: "dal lunedì al giovedì, dalle 10:00 alle 16:00" },
      { label: "Tempo di risposta", text: "entro 24 ore" },
      { label: "Puoi scrivere", text: "a me e a Sharon" },
    ],
    bulletsTitle: "Per",
    bullets: [
      <>
        <strong className="font-semibold text-ink">Dubbi</strong> su quello che stai facendo.
      </>,
      <>
        <strong className="font-semibold text-ink">Blocchi</strong> che ti fermano.
      </>,
      <>
        <strong className="font-semibold text-ink">Feedback</strong> sui tuoi contenuti e sul tuo
        lavoro.
      </>,
      <>
        <strong className="font-semibold text-ink">Direzione</strong>, quando non sai quale sia il
        prossimo passo.
      </>,
    ],
  },
  {
    title: "Community e confronto",
    image: { src: bonusCommunityImg, alt: "Il canale #wins della community su Slack" },
    badges: ["Mai più da sola", "Professioniste come te"],
    intro: (
      <>
        Slack serve anche per questo: è lo spazio dove{" "}
        <strong className="font-semibold text-ink">
          ti confronti con altre professioniste che fanno il tuo stesso percorso
        </strong>
        .
      </>
    ),
    bulletsTitle: "Hai uno spazio per",
    bullets: [
      <>
        <strong className="font-semibold text-ink">Fare domande</strong>, senza sentirti mai fuori
        luogo.
      </>,
      <>
        <strong className="font-semibold text-ink">Condividere i tuoi progressi</strong> e
        festeggiare le tue wins.
      </>,
      <>
        <strong className="font-semibold text-ink">Confrontarti con altre donne come te</strong>,
        ambiziose e con i tuoi stessi obiettivi.
      </>,
    ],
    closing: (
      <>
        Perché crescere da sola è lento.{" "}
        <strong className="font-semibold text-ink">Crescere insieme è un'altra cosa.</strong>
      </>
    ),
  },
  {
    title: "Il tuo GPT Alterego per i contenuti",
    image: {
      src: bonusGptImg,
      alt: "Una chat con il GPT Alterego che trasforma una call in un carosello per Instagram",
    },
    badges: ["Contenuti più veloci", "La tua voce, sempre"],
    intro: (
      <>
        Hai accesso a <strong className="font-semibold text-ink">un GPT costruito per te</strong>,
        il tuo alter ego quando devi creare i contenuti.
      </>
    ),
    bulletsTitle: "Ti aiuta a",
    bullets: [
      <>
        <strong className="font-semibold text-ink">Velocizzare</strong> la scrittura dei tuoi
        contenuti.
      </>,
      <>
        <strong className="font-semibold text-ink">Strutturare</strong> ogni contenuto in modo
        chiaro.
      </>,
      <>
        <strong className="font-semibold text-ink">Mantenere la tua identità</strong> in tutto
        quello che pubblichi.
      </>,
    ],
  },
];

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

            <Reveal delay={120}>
              <ul className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {heroValuePoints.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-ink sm:text-sm"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
                      border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                    }}
                  >
                    <Icon className="size-3.5 shrink-0" style={{ color: "var(--gold-deep)" }} />
                    {text}
                  </li>
                ))}
              </ul>
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
                  , dove io, Sharon e te lavoriamo insieme sulla tua identità, la tua comunicazione,
                  i tuoi contenuti e la tua strategia.
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
                  className="flex w-full flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 sm:inline-flex sm:w-auto sm:flex-row sm:items-center sm:gap-3"
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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
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

          <div className="relative h-[36rem] overflow-hidden lg:h-auto">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 sm:gap-4">
              {WIN_COLUMNS.map((col, ci) => (
                <div key={ci} className="overflow-hidden">
                  <div
                    className={`flex flex-col gap-3 hover:[animation-play-state:paused] sm:gap-4 ${
                      ci === 0 ? "animate-marquee-up" : "animate-marquee-down"
                    }`}
                    style={{ animationDuration: `${ci === 0 ? 70 : 80}s` }}
                  >
                    {[...col, ...col].map((shot, ii) => (
                      <img
                        key={ii}
                        src={shot.src}
                        width={shot.w}
                        height={shot.h}
                        alt={ii < col.length ? "Messaggio di una cliente di Carlotta" : ""}
                        aria-hidden={ii >= col.length || undefined}
                        loading="lazy"
                        className="h-auto w-full rounded-xl bg-white shadow-[0_20px_45px_-25px_rgba(0,0,0,0.45)] ring-1 ring-black/5"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36"
              style={{ backgroundImage: "linear-gradient(180deg, var(--background), transparent)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36"
              style={{ backgroundImage: "linear-gradient(0deg, var(--background), transparent)" }}
              aria-hidden
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
                <div
                  className="surface-cream flex h-full flex-col"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="flex h-full flex-col p-6 sm:p-7">
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
                    <div
                      className="mt-6 flex items-center gap-4 rounded-xl px-4 py-4"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
                        border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                      }}
                    >
                      <img
                        src={c.story.photo}
                        alt={c.story.name}
                        loading="lazy"
                        className="size-14 shrink-0 rounded-full border border-dashed object-cover"
                        style={{
                          borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)",
                        }}
                      />
                      <p className="text-sm leading-relaxed text-ink-muted">
                        Come è successo a{" "}
                        <span className="font-semibold text-ink">{c.story.name}</span>,{" "}
                        {c.story.role}, che è passata da {c.story.from} a{" "}
                        <strong className="font-semibold text-ink">{c.story.to}</strong>.
                      </p>
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

      {/* 7. I 4 step su cui lavoriamo nei 4 mesi */}
      <section
        id="programma"
        className="relative overflow-x-clip bg-secondary"
        style={{ color: "var(--secondary-foreground)" }}
      >
        {/* Sfondo: Carlotta che parla a un evento, dietro l'introduzione */}
        <SectionPhoto
          src={carlottaTalkingImg}
          side="right"
          className="top-0 hidden h-[640px] w-[55%] md:block"
          opacity={0.3}
          objectPosition="40% 30%"
          blend="luminosity"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">
              Nei 4 mesi di Ambiziosa lavoriamo <Highlight dark>in 4 step</Highlight>.
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
                , seguendo 4 step. Non ti do un calendario mese per mese, perché ognuna va con il
                suo ritmo, ma{" "}
                <strong className="font-semibold text-ink">l'ordine è lo stesso per tutte</strong>.
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
                      <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                        {p.subtitle}
                      </p>
                      <p className="mt-6 text-lg font-semibold text-ink sm:text-xl">
                        Che cosa costruiamo insieme in questo step?
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
      <section className="relative overflow-hidden bg-background">
        {/* Sfondo: Carlotta che cammina, nello spazio libero in basso a sinistra */}
        <SectionPhoto
          src={carlottaWalkingImg}
          side="left"
          className="bottom-0 hidden h-[55%] w-[35%] lg:block"
          opacity={0.28}
          objectPosition="50% 20%"
          blend="multiply"
        />
        <div className="relative mx-auto max-w-5xl px-5 pb-12 pt-20 text-center">
          <Reveal>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              <Highlight>Il principio mancante</Highlight>
              <br className="hidden sm:block" /> dei contenuti e dell'identità online
            </h2>
          </Reveal>
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-4">
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

      {/* 7d-bis. Prima e dopo Ambiziosa: grafico che si disegna con lo scroll */}
      <AmbiziosaJourney />

      {/* 7e. Le due versioni: Program e Mentorship */}
      <section id="versioni" className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div
              className="surface-cream mx-auto grid max-w-4xl overflow-hidden md:grid-cols-[1.15fr_0.85fr]"
              style={{ borderRadius: "1.75rem" }}
            >
              <img
                src={carlottaManiInTascaImg}
                alt="Carlotta Sgarra con le mani in tasca"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover md:order-2 md:aspect-auto"
                style={{ objectPosition: "50% 22%" }}
              />
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:order-1">
                <h2 className="text-3xl text-ink sm:text-4xl">
                  Ambiziosa ha due versioni: <Highlight dark>Program o Mentorship</Highlight>.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                  Puoi scegliere quella che preferisci. La durata resta sempre di 4 mesi, si parte
                  martedì 20 ottobre e in entrambe hai{" "}
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
            <Reveal className="h-full">
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
                        {step.calls ? (
                          <div className="mt-3 space-y-2">
                            {step.calls.map((c) => (
                              <CallChip key={c.title} call={c} />
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
                <CallTotal steps={programSteps} />
              </div>
            </Reveal>

            <Reveal delay={80} className="h-full">
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
                      al mese con me, oltre alle due call di kick off:{" "}
                      <strong className="font-semibold text-ink">22 call in totale</strong>.
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
                          {step.calls ? (
                            <div className="mt-3 space-y-2">
                              {step.calls.map((c) => (
                                <CallChip key={c.title} call={c} dark />
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                  <CallTotal steps={mentorshipSteps} dark />
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

      {/* 7i. Cosa trovi dentro Ambiziosa: i 4 bonus */}
      <section
        id="bonus"
        className="overflow-x-clip bg-secondary"
        style={{ color: "var(--secondary-foreground)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                Cosa trovi dentro Ambiziosa
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Le call sono solo l'inizio: dentro Ambiziosa hai{" "}
                <Highlight dark>tutto quello che ti serve per non fermarti mai</Highlight>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
                Il lavoro vero succede tra una call e l'altra. Per questo, oltre alle call, hai{" "}
                <strong className="font-semibold text-ink">
                  4 strumenti che ti accompagnano ogni giorno
                </strong>
                , così non resti mai sola e non perdi mai il ritmo.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {ambiziosaBonuses.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 100}>
                <div
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--background)_14%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--background) 6%, transparent)",
                  }}
                >
                  <img
                    src={b.image.src}
                    alt={b.image.alt}
                    loading="lazy"
                    className="m-4 mb-0 aspect-[16/9] rounded-xl bg-white object-cover object-top shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] sm:m-5 sm:mb-0"
                  />

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="rounded-full px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary-foreground sm:text-xs"
                        style={{
                          backgroundImage: "var(--gradient-gold)",
                          boxShadow: "var(--shadow-gold)",
                        }}
                      >
                        {b.badges[0]}
                      </span>
                      <span
                        className="rounded-full border px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary sm:text-xs"
                        style={{
                          borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)",
                        }}
                      >
                        {b.badges[1]}
                      </span>
                    </div>

                    <h3 className="mt-5 flex items-baseline gap-2 text-2xl text-ink sm:text-3xl">
                      <span className="text-primary" aria-hidden>
                        ✹
                      </span>
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {b.intro}
                    </p>

                    {b.details ? (
                      <dl
                        className="mt-5 space-y-2 rounded-xl p-4 text-sm sm:text-base"
                        style={{
                          backgroundColor: "color-mix(in oklab, var(--background) 8%, transparent)",
                        }}
                      >
                        {b.details.map((d) => (
                          <div key={d.label} className="flex flex-wrap gap-x-2">
                            <dt className="font-semibold text-ink">{d.label}:</dt>
                            <dd className="text-ink-muted">{d.text}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    {b.bulletsTitle ? (
                      <p className="mt-5 font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                        {b.bulletsTitle}
                      </p>
                    ) : null}
                    <ul className="mt-3 space-y-2.5">
                      {b.bullets.map((item, bi) => (
                        <li
                          key={bi}
                          className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                        >
                          <Check
                            className="mt-1 size-4 shrink-0"
                            style={{ color: "var(--gold-deep)" }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {b.closing ? (
                      <p className="mt-6 font-display text-xl leading-snug text-ink-muted sm:text-2xl">
                        {b.closing}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                  src={carlottaPresentingImg}
                  alt="Carlotta Sgarra"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-[4/5] sm:max-w-[220px]"
                  style={{ objectPosition: "38% 30%" }}
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
                      Nel Program ci sono io{" "}
                      <strong className="font-semibold text-foreground">
                        nella kick off call, nella call sull'identità e nella call finale
                      </strong>
                      . Nella Mentorship, oltre alla kick off call, ti seguo con una call al mese.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="surface-card grid gap-6 p-6 sm:grid-cols-[220px_1fr] sm:p-8">
                <img
                  src={sharonSpeakingImg}
                  alt="Sharon Convertino"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-[4/5] sm:max-w-[220px]"
                  style={{ objectPosition: "47% 30%" }}
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
                      Con lei fai la kick off call. Nel Program ti segue nella call sulla strategia
                      dei contenuti e nella call finale; nella Mentorship hai con lei una call
                      individuale di 30 minuti ogni settimana:{" "}
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

      {/* 7h. Chi sono — stessa sezione di Rule the Rules (src/routes/index.tsx) */}
      <section className="bg-background px-4 py-10 sm:px-8 sm:py-14">
        <div
          className="surface-cream mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20"
          style={{ borderRadius: "1.75rem" }}
        >
          <Reveal>
            <h2 className="text-3xl text-ink sm:text-4xl">
              Ho creato un’azienda da 300.000€ di fatturato in 3 anni grazie a{" "}
              <Highlight dark>un’identità riconoscibile</Highlight>
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
                  Anche quando ho imparato a fare “tutto giusto”, dopo aver studiato il mercato
                  americano, spagnolo e italiano e speso più di 70.000€ in formazione, il mio
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
              <div className="relative">
                <img
                  src={hoCreatoUnaziendaImg}
                  alt="Carlotta Sgarra sul palco durante uno dei suoi speech"
                  loading="lazy"
                  width={1376}
                  height={2064}
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <span
                  className="absolute bottom-4 left-4 rounded-full px-4 py-1.5 font-condensed text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  1.500+ professioniste guidate
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. Due percorsi, due livelli di accompagnamento */}
      <section id="prezzi" className="relative overflow-x-clip bg-background">
        {/* Sfondo: Carlotta che guarda verso la camera, a destra del titolo */}
        <SectionPhoto
          src={carlottaCameraImg}
          side="right"
          className="top-0 hidden h-[560px] w-[34%] lg:block"
          opacity={0.3}
          objectPosition="62% 15%"
          blend="multiply"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl text-foreground sm:text-4xl">
                Due percorsi, <Highlight>due livelli di accompagnamento</Highlight>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
                Il Program ti dà{" "}
                <strong className="font-semibold text-foreground">
                  il metodo e 5 call nei momenti chiave
                </strong>
                . La Mentorship{" "}
                <strong className="font-semibold text-foreground">
                  ti affianca ogni settimana per tutti i 4 mesi, con 22 call
                </strong>
                .
              </p>
              {/* Posti disponibili e prezzo bloccato, uno accanto all'altro */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <span
                  className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-condensed text-xs uppercase tracking-[0.15em] text-primary-foreground sm:inline-flex sm:w-auto sm:text-sm"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  <Users className="size-4 shrink-0" />
                  Solo {MAX_SEATS} posti disponibili
                </span>
                <div
                  className="flex w-full flex-col items-center gap-2 rounded-2xl bg-secondary px-5 py-3 sm:inline-flex sm:w-auto sm:flex-row sm:gap-4 sm:rounded-full sm:px-7"
                  style={
                    {
                      "--foreground": "var(--secondary-foreground)",
                      "--muted-foreground": "oklch(0.85 0.03 40)",
                    } as React.CSSProperties
                  }
                >
                  <span className="font-condensed text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
                    Il prezzo resta bloccato ancora per
                  </span>
                  <Countdown compact target={PRICE_LOCK_MS} />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            {/* Ambiziosa Program */}
            <Reveal className="order-2 lg:order-1 lg:mt-10">
              <div className="surface-card flex h-full flex-col p-7 sm:p-9">
                <p className="font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                  Ambiziosa Program
                </p>
                <p className="mt-3 flex items-baseline gap-2">
                  {/* DA CONFERMARE: IVA inclusa o esclusa */}
                  <span className="font-display text-5xl text-foreground">{PROGRAM_PRICE}</span>
                  <span className="text-sm text-foreground/70">· 4 mesi</span>
                </p>
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-secondary/40 px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-secondary sm:text-xs">
                  <Wallet className="size-3.5 shrink-0" />
                  Rateizzabile fino a {INSTALLMENT_MONTHS} mesi
                </span>
                <p className="mt-3 text-base leading-relaxed text-foreground/85">
                  Il metodo Ambiziosa con{" "}
                  <strong className="font-semibold text-foreground">
                    5 call nei momenti chiave
                  </strong>
                  .
                </p>

                <p className="mt-7 font-condensed text-xs uppercase tracking-[0.2em] text-secondary">
                  Cosa hai
                </p>
                <ul className="mt-3 flex-1 space-y-3">
                  {programFeatures.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <Check className="mt-1 size-4 shrink-0 text-secondary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <AmbiziosaCtaButton variant="hero" label="Candidati ad Ambiziosa Program" />
                </div>
              </div>
            </Reveal>

            {/* Ambiziosa Mentorship, in evidenza */}
            <Reveal className="order-1 lg:order-2">
              <div className="ticket-border-glow relative mt-4 rounded-[1.75rem]">
                <span
                  className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 font-condensed text-xs uppercase tracking-[0.2em] text-primary-foreground sm:text-sm"
                  style={{
                    backgroundImage: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  Il percorso più completo
                </span>
                <div
                  className="surface-cream relative flex flex-col p-7 pt-10 sm:p-10 sm:pt-12"
                  style={{
                    borderRadius: "1.75rem",
                    border: "2px solid var(--primary)",
                    boxShadow:
                      "var(--shadow-gold), 0 60px 100px -30px color-mix(in oklab, var(--primary) 45%, transparent)",
                  }}
                >
                  <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                    Ambiziosa Mentorship
                  </p>
                  <p className="mt-3 flex items-baseline gap-2">
                    {/* DA CONFERMARE: IVA inclusa o esclusa */}
                    <span className="font-display text-6xl text-ink">{MENTORSHIP_PRICE}</span>
                    <span className="text-sm text-ink-muted">· 4 mesi</span>
                  </p>
                  <span
                    className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-primary sm:text-xs"
                    style={{ borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }}
                  >
                    <Wallet className="size-3.5 shrink-0" />
                    Rateizzabile fino a {INSTALLMENT_MONTHS} mesi
                  </span>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
                    Tutto il percorso del Program, con in più{" "}
                    <strong className="font-semibold text-ink">
                      un accompagnamento continuo per tutti i 4 mesi
                    </strong>
                    : ogni settimana con il mio team e ogni mese con me.
                  </p>

                  <p className="mt-7 font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                    Tutto quello che c'è nel Program
                  </p>
                  <ul className="mt-3 space-y-3">
                    {mentorshipBaseFeatures.map((f, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                        <Check className="mt-1 size-4 shrink-0 text-ink-muted/60" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-7 rounded-2xl p-5 sm:p-6"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--primary) 12%, transparent)",
                      border: "1px solid color-mix(in oklab, var(--primary) 40%, transparent)",
                    }}
                  >
                    <p className="font-display text-xl text-ink sm:text-2xl">
                      E in più, <Highlight dark>solo con la Mentorship</Highlight>:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {mentorshipExtraFeatures.map((f, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                        >
                          <Check
                            className="mt-1 size-4 shrink-0"
                            style={{ color: "var(--gold-deep)" }}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <AmbiziosaCtaButton variant="hero" label="Candidati ad Ambiziosa Mentorship" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Dubbi prima di prenotare: foto di Matilde (supporto clienti) a sinistra, testo e
              bottone WhatsApp a destra, largo quanto le card dei prezzi */}
          <Reveal>
            <div className="mt-16 grid gap-6 rounded-[1.75rem] border border-secondary/40 bg-transparent p-6 sm:p-8 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)] lg:gap-10 lg:p-10">
              <div className="relative">
                <img
                  src={matildeImg}
                  alt="Matilde, che si occupa del supporto clienti"
                  loading="lazy"
                  className="mx-auto aspect-square w-full max-w-[200px] rounded-2xl object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:max-w-none"
                  style={{ objectPosition: "30% 35%" }}
                />
              </div>

              <div>
                <span
                  className="inline-flex rounded-full px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.08em] text-primary-foreground sm:text-xs sm:tracking-[0.15em]"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                >
                  Matilde ti risponde entro poche ore
                </span>
                <h3 className="mt-3 text-2xl text-foreground sm:text-3xl">
                  Hai un dubbio <Highlight>prima di prenotare</Highlight>?
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
                  Qualsiasi dubbio puoi chiarirlo{" "}
                  <strong className="font-semibold text-foreground">
                    nella call conoscitiva di candidatura
                  </strong>
                  : non ti impegna a iscriverti, ma ti spiego come Ambiziosa può funzionare{" "}
                  <strong className="font-semibold text-foreground">
                    sul tuo profilo e sul tuo progetto
                  </strong>
                  , e se è adatta a te. Altrimenti puoi scrivere su WhatsApp a{" "}
                  <strong className="font-semibold text-foreground">Matilde</strong>, che si occupa
                  del supporto clienti.
                </p>

                {/* Apre WhatsApp con Matilde e un messaggio già scritto (WHATSAPP_URL) */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#25D366] px-6 py-4 font-condensed text-sm uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1EBE5D] sm:text-base"
                >
                  <ShineSweep />
                  <WhatsAppIcon className="relative size-5 shrink-0" />
                  <span className="relative sm:hidden">Scrivi a Matilde su WhatsApp</span>
                  <span className="relative hidden sm:inline">
                    Clicca qui per scrivere a Matilde su WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ finali, stessa sezione di Rule The Rules (src/routes/index.tsx) */}
      <section
        id="faq"
        className="relative overflow-hidden bg-secondary px-4 py-14 sm:px-8 sm:py-20"
        style={
          {
            color: "var(--secondary-foreground)",
            "--foreground": "var(--secondary-foreground)",
            "--muted-foreground": "oklch(0.85 0.03 40)",
            "--border": "color-mix(in oklab, var(--background) 14%, transparent)",
          } as React.CSSProperties
        }
      >
        {/* Sfondo: Carlotta che abbraccia una partecipante, a destra */}
        <SectionPhoto
          src={carlottaHugImg}
          side="right"
          className="inset-y-0 hidden w-[32%] lg:block"
          opacity={0.25}
          objectPosition="50% 20%"
          blend="luminosity"
        />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              Domande <Highlight dark>frequenti</Highlight>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
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

      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
