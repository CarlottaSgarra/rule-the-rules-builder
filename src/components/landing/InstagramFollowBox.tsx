import { Instagram } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import profiloIgCarlottaImg from "@/assets/profilo-ig-carlotta.png";

const INSTAGRAM_HREF = "https://www.instagram.com/carlottasgarra.web/";

export function InstagramFollowBox() {
  return (
    <div className="group grid overflow-hidden rounded-2xl border border-border/70 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.35)] sm:grid-cols-[2fr_3fr]">
      <div className="relative flex items-center justify-center border-b-2 border-dashed p-4 sm:border-b-0 sm:border-r-2">
        <img
          src={profiloIgCarlottaImg}
          alt="Profilo Instagram di Carlotta Sgarra"
          loading="lazy"
          className="max-h-56 w-full rounded-lg object-contain shadow-lg transition-transform duration-300 group-hover:-rotate-2 sm:max-h-full"
        />
        <span
          className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          <Instagram className="size-6 text-primary-foreground" />
        </span>
      </div>

      <div className="p-6 text-left sm:p-8">
        <p className="text-lg font-semibold text-foreground">Seguimi su Instagram</p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          Nei prossimi giorni condividerò diversi contenuti legati all’evento:{" "}
          <strong className="font-semibold">
            assicurati di seguire il mio profilo per non perderti nulla
          </strong>
          .
        </p>
        <CtaButton
          href={INSTAGRAM_HREF}
          target="_blank"
          rel="noopener noreferrer"
          label="Seguimi su Instagram"
          sub="@carlottasgarra.web"
          className="mt-5"
        />
      </div>
    </div>
  );
}
