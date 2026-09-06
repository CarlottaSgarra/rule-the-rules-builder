import { ClipboardList } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";

// TODO: sostituire con il link reale del questionario anonimo (Google Form,
// Typeform o simili) — per ora è un placeholder.
const QUESTIONNAIRE_HREF = "#questionario-todo";

export function QuestionnaireBox() {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/50 p-6 text-center sm:p-8">
      <span
        className="mx-auto flex size-12 items-center justify-center rounded-full"
        style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
      >
        <ClipboardList className="size-6 text-primary-foreground" />
      </span>
      <p className="mt-4 text-lg font-semibold text-foreground">Un evento su misura anche per te</p>
      <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
        Ho creato un breve questionario anonimo per conoscere i tuoi bisogni e la tua situazione
        attuale, in modo da poter migliorare ancora di più l’evento e personalizzarlo su di te.
        Compilalo cliccando qui sotto: ci metti solo un minuto.
      </p>
      <div className="mt-5 flex justify-center">
        <CtaButton
          href={QUESTIONNAIRE_HREF}
          label="Compila il questionario anonimo"
          sub="Ci metti solo un minuto"
        />
      </div>
    </div>
  );
}
