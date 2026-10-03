import { Play } from "lucide-react";
import { HERO_VIDEO_URL } from "@/lib/ambiziosa-config";

// Video di presentazione nella hero di /candidati-ambiziosa. Finché
// HERO_VIDEO_URL è vuota (in src/lib/ambiziosa-config.ts) mostra un
// segnaposto pulito. Quando sarà valorizzata: un link YouTube/Vimeo diventa
// un iframe responsivo a caricamento differito, qualunque altro URL viene
// trattato come un file video diretto. Mai autoplay con audio.

function parseYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{6,})/,
    /youtube(?:-nocookie)?\.com\/watch\?v=([a-zA-Z0-9_-]{6,})/,
    /youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{6,})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function parseVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

const containerClassName = "mx-auto aspect-video w-full overflow-hidden rounded-2xl";

export function AmbiziosaHeroVideo() {
  if (!HERO_VIDEO_URL) {
    return (
      <div
        className={`${containerClassName} flex flex-col items-center justify-center gap-3 px-4 text-center`}
        style={{ backgroundColor: "var(--secondary)", color: "#EFEFEF" }}
      >
        <span
          className="flex size-14 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--primary)" }}
          aria-hidden
        >
          <Play
            className="size-6 translate-x-0.5 fill-current"
            style={{ color: "var(--secondary)" }}
          />
        </span>
        <p className="text-sm">Video di presentazione di Carlotta: da registrare</p>
      </div>
    );
  }

  const youtubeId = parseYouTubeId(HERO_VIDEO_URL);
  if (youtubeId) {
    return (
      <div className={containerClassName}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title="Video di presentazione di Carlotta"
          loading="lazy"
          className="h-full w-full"
          allow="accelerate-encoded-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const vimeoId = parseVimeoId(HERO_VIDEO_URL);
  if (vimeoId) {
    return (
      <div className={containerClassName}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
          title="Video di presentazione di Carlotta"
          loading="lazy"
          className="h-full w-full"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <video
        controls
        playsInline
        preload="metadata"
        className="h-full w-full"
        src={HERO_VIDEO_URL}
      />
    </div>
  );
}
