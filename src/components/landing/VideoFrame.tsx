import { Play } from "lucide-react";

type Props = {
  label: string;
  duration?: string;
  poster?: string;
  youtubeId?: string;
  vimeoId?: string;
};

export function VideoFrame({ label, duration, poster, youtubeId, vimeoId }: Props) {
  if (vimeoId) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-primary/25">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&title=0&byline=0&portrait=0`}
          title={label}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  if (youtubeId) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-primary/25">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={label}
          loading="lazy"
          className="h-full w-full"
          allow="accelerate-encoded-media; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-primary/25 bg-muted"
      style={{ boxShadow: "var(--shadow-deep)" }}
    >
      {poster ? (
        <img
          src={poster}
          alt={label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-105"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span
          className="flex size-16 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundImage: "var(--gradient-gold)" }}
        >
          <Play className="size-7 translate-x-0.5 fill-current text-primary-foreground" />
        </span>
        <span className="px-6 text-center font-condensed text-sm uppercase tracking-[0.2em] text-foreground">
          {label}
        </span>
        {duration ? (
          <span className="text-xs text-muted-foreground tabular-nums">{duration}</span>
        ) : null}
      </div>
    </div>
  );
}
