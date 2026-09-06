import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2, Users, Video as VideoIcon } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { Highlight } from "@/components/landing/Highlight";
import { VideoFrame } from "@/components/landing/VideoFrame";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { vipBonuses, vipBonusesTotal, VIP_PRICE } from "@/data/offer";
import carlottaLookingImg from "@/assets/carlotta-looking.jpg";
import carlottaPresentingImg from "@/assets/carlotta-presenting.jpg";
import workbookCoverImg from "@/assets/workbook-cover.png";

export const Route = createFileRoute("/vip")({
  head: () => ({
    meta: [
      { title: "Upgrade VIP: disponibile solo qui | Rule The Rules 2026" },
      {
        name: "description",
        content:
          "L’upgrade VIP a Rule The Rules 2026 è disponibile solo su questa pagina: registrazione delle serate, live esclusiva il giorno dopo e correzione del workbook. Solo 97€.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Vip,
});

const bonusIcons = [VideoIcon, Users, FileCheck2];
const bonusPhotos = [carlottaLookingImg, carlottaPresentingImg, workbookCoverImg];
const bonusPhotoAlts = ["Carlotta Sgarra", "Carlotta Sgarra", "Copertina del Workbook"];

const VIP_CHECKOUT_HREF = "/checkout-vip";
const DECLINE_HREF = "/thank-you";

function VipChoice({ note }: { note?: string }) {
  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <CtaButton
        href={VIP_CHECKOUT_HREF}
        target="_top"
        label={`Sì, voglio fare l’upgrade a soli ${VIP_PRICE}€`}
        sub={note ?? "Disponibile solo su questa pagina, adesso"}
      />
      <a
        href={DECLINE_HREF}
        target="_top"
        className="text-sm text-foreground/60 underline underline-offset-2 transition-colors hover:text-foreground"
      >
        No, resto con lo standard
      </a>
    </div>
  );
}

function Vip() {
  return (
    <div className="bg-background">
      {/* Intro */}
      <section className="bg-background px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span
              className="inline-block rounded-full px-4 py-1.5 font-condensed text-[10px] uppercase tracking-[0.2em] text-primary-foreground sm:text-xs"
              style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Offerta esclusiva · Solo su questa pagina
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl">
              Aspetta! <Highlight>Prima di continuare</Highlight>, c’è una cosa che devi sapere
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8">
              <VideoFrame label="Guarda perché conviene fare l’upgrade" duration="2:14" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Hai appena sbloccato l’accesso alle 3 serate live. Ma le 3 serate sono live e non sono
              registrate. O almeno, lo sono se fai{" "}
              <strong className="font-semibold text-foreground">l’upgrade al pacchetto VIP</strong>{" "}
              che trovi in questa pagina. Se vuoi avere la possibilità di{" "}
              <strong className="font-semibold text-foreground">
                rivedere tutte le serate, tutte le volte che vuoi
              </strong>
              , allora ti consiglio di fare l’upgrade.{" "}
              <strong className="font-semibold text-foreground">
                Lo trovi solo su questa pagina e solo ora.
              </strong>
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Il VIP ti sblocca anche un altro bonus: una diretta con me, il giorno dopo l’ultima
              serata, in cui parliamo di vendita online e analizziamo i profili Instagram di chi
              partecipa.{" "}
              <strong className="font-semibold text-foreground">
                Prendila come una consulenza direttamente con me
              </strong>
              : una cosa che non faccio praticamente mai.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <VipChoice />
          </Reveal>
        </div>
      </section>

      {/* Bonus */}
      {vipBonuses.map((bonus, i) => {
        const Icon = bonusIcons[i] ?? VideoIcon;
        const photo = bonusPhotos[i];
        const dark = i % 2 === 0;
        const imageFirst = i % 2 === 1;
        return (
          <section
            key={bonus.id}
            className={
              dark ? "bg-secondary px-4 py-20 sm:px-8" : "bg-background px-4 py-20 sm:px-8"
            }
            style={
              dark
                ? ({
                    color: "var(--secondary-foreground)",
                    "--foreground": "var(--secondary-foreground)",
                    "--muted-foreground": "oklch(0.85 0.03 40)",
                  } as React.CSSProperties)
                : undefined
            }
          >
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <div className="grid items-center gap-10 sm:grid-cols-2">
                  <div className={imageFirst ? "sm:order-2" : ""}>
                    <div
                      className="relative overflow-hidden rounded-2xl"
                      style={{ boxShadow: "var(--shadow-deep)" }}
                    >
                      <img
                        src={photo}
                        alt={bonusPhotoAlts[i] ?? "Carlotta Sgarra"}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span
                        className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full"
                        style={{
                          backgroundImage: "var(--gradient-gold)",
                          boxShadow: "var(--shadow-gold)",
                        }}
                      >
                        <Icon className="size-6 text-primary-foreground" />
                      </span>
                    </div>
                  </div>

                  <div className={imageFirst ? "sm:order-1" : ""}>
                    <p
                      className={`font-condensed text-xs uppercase tracking-[0.25em] ${dark ? "text-primary" : "text-secondary"}`}
                    >
                      Bonus VIP {i + 1} di {vipBonuses.length}
                    </p>
                    <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{bonus.title}</h2>
                    <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
                      {bonus.d}
                    </div>
                    <p className="mt-6 text-lg text-foreground/60">
                      Valore: <span className="font-semibold line-through">{bonus.value}€</span>{" "}
                      <span className={`font-semibold ${dark ? "text-primary" : "text-secondary"}`}>
                        oggi incluso a costo zero nel tuo upgrade
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <VipChoice />
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Recap finale */}
      <section className="bg-background px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="ticket-border-glow relative rounded-[2rem]">
              <div
                className="relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-10"
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
                <p className="font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                  Riepilogo upgrade VIP
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                  Ecco tutto quello che stai per sbloccare
                </h2>

                <div className="mt-8 space-y-4 text-left text-sm">
                  {vipBonuses.map((b) => (
                    <div key={b.id} className="flex items-baseline gap-2">
                      <span className="min-w-0 font-medium text-foreground">{b.title}</span>
                      <span
                        className="mb-1 flex-1 border-b border-dotted border-border"
                        aria-hidden
                      />
                      <span className="shrink-0 text-muted-foreground line-through">
                        {b.value}€
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-dashed border-border pt-4">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-foreground">Valore totale bonus VIP</span>
                    <span className="text-muted-foreground line-through">{vipBonusesTotal}€</span>
                  </div>
                  <p className="mt-2 text-5xl font-bold text-primary sm:text-6xl">{VIP_PRICE}€</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    disponibile solo qui
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <VipChoice note="Ultima occasione, sul serio: non torna più" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
