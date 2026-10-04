import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { verifyRegistrazioniAccess, REGISTRAZIONI_TOKEN_KEY } from "@/lib/registrazioni-auth";
import goldTexture from "@/assets/texture-gold.jpg";

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
        localStorage.setItem(REGISTRAZIONI_TOKEN_KEY, result.token);
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
      <header
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-night)" }}
      >
        <img
          src={goldTexture}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-overlay"
        />
        <div className="relative mx-auto flex max-w-xl flex-col items-center px-5 pb-20 pt-16 text-center sm:pt-24">
          <Reveal>
            <p className="font-condensed text-xs uppercase tracking-[0.4em] text-secondary sm:text-sm">
              Rule The Rules 2026 · Le 3 serate
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">
              Accedi alle <Highlight>registrazioni</Highlight>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
              Inserisci{" "}
              <strong className="font-semibold text-foreground">
                l’email e la password che hai ricevuto
              </strong>{" "}
              per accedere alle registrazioni dell’evento.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-10 w-full">
            <div className="ticket-border-glow relative rounded-[2rem]">
              <div
                className="relative overflow-hidden rounded-[2rem] p-6 text-left sm:p-10"
                style={
                  {
                    backgroundImage:
                      "linear-gradient(100deg, var(--secondary) 0%, var(--secondary) 45%, color-mix(in oklab, var(--primary) 32%, var(--secondary)) 100%)",
                    border: "2px solid var(--primary)",
                    boxShadow:
                      "var(--shadow-gold), 0 60px 100px -30px color-mix(in oklab, var(--primary) 45%, transparent)",
                    "--foreground": "var(--secondary-foreground)",
                    "--muted-foreground": "oklch(0.85 0.03 40)",
                  } as React.CSSProperties
                }
              >
                <div className="flex justify-center">
                  <span
                    className="inline-block rounded-full px-5 py-2 font-condensed text-xs uppercase tracking-[0.25em] text-primary-foreground sm:text-sm"
                    style={{
                      backgroundImage: "var(--gradient-gold)",
                      boxShadow: "var(--shadow-gold)",
                    }}
                  >
                    Area registrazioni
                  </span>
                </div>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                  {error ? (
                    <p className="text-center text-sm text-primary" role="alert">
                      {error}
                    </p>
                  ) : null}
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
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
