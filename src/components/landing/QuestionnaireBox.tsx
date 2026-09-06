import { ClipboardList } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import questionarioCoverImg from "@/assets/questionario-cover.png";

const QUESTIONNAIRE_HREF = "https://forms.gle/aUKTMs5HKfUuCqoz5";

export function QuestionnaireBox() {
  return (
    <div className="group grid overflow-hidden rounded-2xl border border-border/70 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.35)] sm:grid-cols-[2fr_3fr]">
      <div className="relative flex items-center justify-center border-b-2 border-dashed p-4 sm:border-b-0 sm:border-r-2">
        <img
          src={questionarioCoverImg}
          alt="Copertina del questionario anonimo"
          loading="lazy"
          className="max-h-56 w-full rounded-lg object-contain shadow-lg transition-transform duration-300 group-hover:-rotate-2 sm:max-h-full"
        />
        <span
          className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          <ClipboardList className="size-6 text-primary-foreground" />
        </span>
      </div>

      <div className="p-6 text-left sm:p-8">
        <p className="text-lg font-semibold text-foreground">
          Compila il questionario anonimo dell’evento
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          Ho creato un breve questionario anonimo per{" "}
          <strong className="font-semibold">
            conoscere i tuoi bisogni e la tua situazione attuale
          </strong>
          , in modo da poter migliorare ancora di più l’evento e personalizzarlo su di te.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          Compilalo cliccando qui sotto:{" "}
          <strong className="font-semibold">ci metti solo un minuto</strong>.
        </p>
        <CtaButton
          href={QUESTIONNAIRE_HREF}
          label="Compila il questionario anonimo"
          sub="Ci metti solo un minuto"
          className="mt-5"
        />
      </div>
    </div>
  );
}
