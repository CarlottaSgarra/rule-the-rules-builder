import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { SiteFooter } from "@/components/landing/SiteFooter";
import goldTexture from "@/assets/texture-gold.jpg";

// Pagina mostrata da /accedi-registrazioni e /registrazioni dopo la chiusura
// delle registrazioni: niente form di accesso e niente video, solo l'avviso.
export function RegistrazioniChiuse() {
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

          <Reveal delay={80} className="mt-10 w-full">
            <div className="ticket-border-glow relative rounded-[2rem]">
              <div
                className="relative overflow-hidden rounded-[2rem] p-6 text-center sm:p-10"
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
                <h1 className="mt-6 text-3xl text-foreground sm:text-4xl">
                  Le registrazioni non sono <Highlight dark>più disponibili</Highlight>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
                  Le registrazioni delle 3 serate di Rule The Rules{" "}
                  <strong className="font-semibold text-foreground">sono state chiuse</strong>.
                  Grazie per aver partecipato all’evento.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <SiteFooter showRefundGuarantee={false} />
    </div>
  );
}
