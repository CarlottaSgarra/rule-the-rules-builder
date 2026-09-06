import { ClipboardList } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";

// TODO: sostituire con il link reale del questionario anonimo (Google Form,
// Typeform o simili) — per ora è un placeholder.
const QUESTIONNAIRE_HREF = "#questionario-todo";

export function QuestionnaireBox() {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-border/70 bg-card/50 sm:grid-cols-[2fr_3fr]">
      <div className="relative flex aspect-[4/3] items-center justify-center border-b-2 border-dashed p-6 text-center sm:aspect-auto sm:border-b-0 sm:border-r-2">
        <p className="font-condensed text-xs uppercase leading-relaxed tracking-[0.15em] text-muted-foreground/60">
          Placeholder
          <br />
          screenshot questionario
        </p>
        <span
          className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full"
          style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          <ClipboardList className="size-6 text-primary-foreground" />
        </span>
      </div>

      <div className="p-6 text-left sm:p-8">
        <p className="text-lg font-semibold text-foreground">Un evento su misura anche per te</p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          Ho creato un breve questionario anonimo per conoscere i tuoi bisogni e la tua situazione
          attuale, in modo da poter migliorare ancora di più l’evento e personalizzarlo su di te.
          Compilalo cliccando qui sotto: ci metti solo un minuto.
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
