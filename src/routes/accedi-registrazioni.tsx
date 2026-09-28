import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { verifyRegistrazioniAccess } from "@/lib/registrazioni-auth";

export const Route = createFileRoute("/accedi-registrazioni")({
  head: () => ({
    meta: [
      { title: "Accedi alle registrazioni — Rule The Rules 2026" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccediRegistrazioni,
});

const inputClassName =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-card-foreground outline-none placeholder:text-card-foreground/50 focus:border-primary";

function AccediRegistrazioni() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const result = await verifyRegistrazioniAccess({ data: { email, password } });
      if (result.ok) {
        await navigate({ to: "/registrazioni" });
      } else {
        setError(result.error);
      }
    } catch {
      setError("Qualcosa è andato storto, riprova.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-background">
      <section className="bg-background px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-sm">
          <Reveal>
            <h1 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Accedi alle <Highlight>registrazioni</Highlight>
            </h1>
            <p className="mt-3 text-center text-sm leading-relaxed text-foreground/75 sm:text-base">
              Inserisci l’email e la password che hai ricevuto per accedere alle registrazioni
              dell’evento.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="email"
                name="email"
                placeholder="La tua email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClassName}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClassName}
              />
              {error ? <p className="text-center text-sm text-destructive">{error}</p> : null}
              <button
                type="submit"
                disabled={submitting}
                className="flex w-full flex-col items-center rounded-xl px-6 py-4 transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  color: "var(--primary-foreground)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                <span className="font-condensed text-base uppercase tracking-[0.1em] sm:text-lg sm:tracking-[0.14em]">
                  {submitting ? "Verifica in corso…" : "Accedi"}
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
