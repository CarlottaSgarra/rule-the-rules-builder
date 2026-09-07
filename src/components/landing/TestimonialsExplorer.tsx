import { useState } from "react";
import { VideoFrame } from "@/components/landing/VideoFrame";

export type Testimonial = {
  name: string;
  role: string;
  tagline: string;
  before: React.ReactNode;
  after: React.ReactNode;
  youtubeId?: string;
  photo: string;
};

type Props = {
  testimonials: Testimonial[];
};

export function TestimonialsExplorer({ testimonials }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="order-2 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:order-none">
        <p className="col-span-full mb-1 text-center text-xs text-white lg:hidden">
          Clicca sulle testimonianze qui sotto per farle apparire nel video qui sopra e guardarle
        </p>
        {testimonials.map((t, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={t.name}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              className="flex items-center gap-3 rounded-xl p-3 text-left transition-colors duration-200"
              style={{
                backgroundColor: isActive
                  ? "var(--primary)"
                  : "color-mix(in oklab, var(--background) 8%, transparent)",
              }}
            >
              <img
                src={t.photo}
                alt=""
                aria-hidden
                loading="lazy"
                className="size-11 shrink-0 rounded-full border-2 object-cover"
                style={{ borderColor: isActive ? "var(--primary-foreground)" : "var(--secondary)" }}
              />
              <div className="min-w-0">
                <p
                  className="text-sm font-semibold"
                  style={{ color: isActive ? "var(--primary-foreground)" : "var(--ink)" }}
                >
                  {t.name}
                </p>
                <p
                  className="mt-0.5 text-[11px] leading-snug"
                  style={{
                    color: isActive
                      ? "color-mix(in oklab, var(--primary-foreground) 80%, transparent)"
                      : "color-mix(in oklab, var(--ink-muted) 75%, transparent)",
                  }}
                >
                  {t.tagline}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="order-1 lg:sticky lg:top-24 lg:order-none">
        <VideoFrame label={active.name} youtubeId={active.youtubeId} />
        <p className="mt-5 text-2xl font-semibold text-ink">{active.name}</p>
        <p className="mt-1 font-condensed text-xs uppercase tracking-[0.15em] text-ink-muted/70">
          {active.role}
        </p>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          <p>
            <span className="font-semibold text-ink">Prima: </span>
            {active.before}
          </p>
          <p>
            <span className="font-semibold text-ink">Dopo: </span>
            {active.after}
          </p>
        </div>
      </div>
    </div>
  );
}
