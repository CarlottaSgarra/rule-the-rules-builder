import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/landing/Reveal";
import { SignupForm } from "@/components/landing/SignupForm";
import { Highlight } from "@/components/landing/Highlight";
import { SiteTopbar } from "@/components/landing/SiteTopbar";
import { SiteFooter } from "@/components/landing/SiteFooter";
import {
  valueStack,
  valueStackTotal,
  TICKET_PRICE,
  vipBonuses,
  vipBonusesTotal,
  VIP_PRICE,
} from "@/data/offer";

export const Route = createFileRoute("/checkout-vip")({
  head: () => ({
    meta: [
      { title: "Completa l’iscrizione VIP — Rule The Rules 2026" },
      {
        name: "description",
        content:
          "Assicurati il pacchetto VIP di Rule The Rules 2026: le 3 serate live più registrazioni, live esclusiva e correzione del workbook.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutVip,
});

// TODO: sostituire con l'URL reale del prodotto/form systeme.io per il
// pacchetto VIP completo (non è lo stesso form del biglietto standard).
const VIP_FORM_ACTION = "#vip-checkout-todo";

const vipOrderItems = [
  ...valueStack,
  ...vipBonuses.map((b) => ({ t: b.title, d: b.d, value: b.value })),
];
const vipOrderTotal = valueStackTotal + vipBonusesTotal;
const VIP_TOTAL_PRICE = TICKET_PRICE + VIP_PRICE;

function CheckoutVip() {
  return (
    <div className="bg-background">
      <SiteTopbar />

      {/* Intro */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
              style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Live su Zoom · 5-6-7 ottobre
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl">
              Il tuo pacchetto <Highlight>VIP</Highlight> ti aspetta
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Completa l’iscrizione qui sotto: le 3 serate live più tutti i bonus VIP, per{" "}
              {VIP_TOTAL_PRICE}€.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Checkout box */}
      <section className="bg-background px-4 pb-14 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal delay={80}>
            <div className="ticket-border-glow relative rounded-[2rem]">
              <div
                className="relative overflow-hidden rounded-[2rem]"
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
                <div className="grid grid-cols-1 text-left md:grid-cols-2">
                  <div className="p-6 sm:p-10">
                    <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                      Il tuo ordine VIP
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                      Tutto quello che ricevi
                    </p>

                    <div className="mt-6 space-y-4 text-sm">
                      {vipOrderItems.map((v) => (
                        <div key={v.t}>
                          <div className="flex items-baseline gap-2">
                            <span className="min-w-0 font-medium text-foreground">{v.t}</span>
                            <span
                              className="mb-1 flex-1 border-b border-dotted border-border"
                              aria-hidden
                            />
                            <span className="shrink-0">
                              {v.value ? (
                                <span className="text-muted-foreground line-through">
                                  {v.value}€
                                </span>
                              ) : (
                                <span className="text-muted-foreground">–</span>
                              )}
                            </span>
                          </div>
                          <div className="space-y-1 text-xs text-muted-foreground">{v.d}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-dashed border-border pt-4">
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="text-foreground">Valore totale</span>
                        <span className="text-muted-foreground line-through">{vipOrderTotal}€</span>
                      </div>
                      <p className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
                        {VIP_TOTAL_PRICE}€
                      </p>
                    </div>
                  </div>

                  <div
                    className="border-t-2 border-dashed p-6 sm:p-10 md:border-l-2 md:border-t-0"
                    style={{
                      borderColor: "color-mix(in oklab, var(--primary) 55%, transparent)",
                    }}
                  >
                    <p className="text-center text-base font-semibold text-foreground">
                      Inserisci i tuoi dati per completare l’iscrizione VIP
                    </p>
                    <SignupForm
                      className="mt-6"
                      action={VIP_FORM_ACTION}
                      submitSub={`Soli €${VIP_TOTAL_PRICE} · 5-6-7 ottobre · Garanzia di rimborso`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
