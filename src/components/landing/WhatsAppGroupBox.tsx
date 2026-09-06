import { MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";

// TODO: sostituire con il link di invito reale al gruppo WhatsApp
// dell'evento — per ora è un placeholder.
const WHATSAPP_GROUP_HREF = "#whatsapp-group-todo";

export function WhatsAppGroupBox() {
  return (
    <div className="group grid overflow-hidden rounded-2xl border border-border/70 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.35)] sm:grid-cols-[2fr_3fr]">
      <div className="relative flex aspect-[4/3] items-center justify-center border-b-2 border-dashed p-6 text-center sm:aspect-auto sm:border-b-0 sm:border-r-2">
        <p className="font-condensed text-xs uppercase leading-relaxed tracking-[0.15em] text-muted-foreground/60">
          Placeholder
          <br />
          screenshot gruppo WhatsApp
        </p>
        <span
          className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          <MessageCircle className="size-6 text-primary-foreground" />
        </span>
      </div>

      <div className="p-6 text-left sm:p-8">
        <p className="text-lg font-semibold text-foreground">
          Accedi al gruppo WhatsApp dell’evento
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          Per tutta la durata dell’evento hai la possibilità di accedere al{" "}
          <strong className="font-semibold">gruppo WhatsApp</strong> dove io e il mio team
          rispondiamo alle tue domande, ci confrontiamo insieme e ci prepariamo all’evento del 5, 6,
          7 ottobre.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          <strong className="font-semibold">
            È un modo unico per poter confrontarti con me, con il mio team e con le altre
            partecipanti.
          </strong>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          Clicca qui sotto per accedere ora.
        </p>
        <CtaButton
          href={WHATSAPP_GROUP_HREF}
          label="Accedi al gruppo WhatsApp"
          sub="Attivo per tutta la durata dell’evento"
          className="mt-5"
        />
      </div>
    </div>
  );
}
