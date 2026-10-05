import { Countdown } from "@/components/landing/Countdown";
import { SIGNUP_FINAL_CLOSE, useSignupPhase } from "@/lib/signup-window";

// Al posto del form: niente quando le iscrizioni sono aperte, il messaggio
// "Le iscrizioni sono chiuse" quando sono chiuse, il banner dell'ultima
// possibilità (con il form sotto) martedì dalle 9 alle 18.
export function SignupGate({ children }: { children: React.ReactNode }) {
  const phase = useSignupPhase();

  if (phase === "closed") {
    return (
      <div
        className="mt-6 rounded-2xl px-5 py-6 text-center"
        style={{
          backgroundColor: "color-mix(in oklab, var(--secondary) 35%, transparent)",
          border: "1px solid color-mix(in oklab, var(--primary) 40%, transparent)",
        }}
      >
        <p className="font-display text-2xl text-foreground sm:text-3xl">
          Le iscrizioni sono chiuse
        </p>
      </div>
    );
  }

  if (phase === "lastChance") {
    return (
      <>
        <div
          className="mt-6 rounded-2xl px-4 py-4 text-center"
          style={{
            backgroundImage: "var(--gradient-gold)",
            boxShadow: "var(--shadow-gold)",
            color: "var(--primary-foreground)",
          }}
        >
          <p className="font-condensed text-xs uppercase tracking-[0.2em] sm:text-sm">
            Ultimissima possibilità
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug sm:text-base">
            Iscrizioni aperte fino alle 18 di martedì 6 ottobre
          </p>
          <div className="mt-2 flex justify-center [&_span]:!text-primary-foreground">
            <Countdown compact target={SIGNUP_FINAL_CLOSE} />
          </div>
        </div>
        {children}
      </>
    );
  }

  return <>{children}</>;
}
