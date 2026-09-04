import { ClipboardList } from "lucide-react";

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
      <p className="mt-4 text-lg font-semibold text-foreground">
        Aiutaci a personalizzare l’evento sui tuoi bisogni
      </p>
      <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
        Rispondi a un breve questionario anonimo: ci aiuta a modellare i contenuti delle tre serate
        su quello che ti serve davvero.
      </p>
      <a
        href={QUESTIONNAIRE_HREF}
        className="mt-5 inline-flex items-center justify-center rounded-lg border border-secondary/30 px-6 py-3 font-condensed text-sm uppercase tracking-[0.1em] text-secondary transition-colors duration-200 hover:bg-secondary/10"
      >
        Compila il questionario anonimo
      </a>
    </div>
  );
}
