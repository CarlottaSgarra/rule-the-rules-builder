import { useEffect, useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

type Props = {
  label: string;
  duration?: string;
  poster?: string;
  youtubeId?: string;
  vimeoId?: string;
};

type VimeoPlayer = {
  setMuted: (muted: boolean) => Promise<void>;
  setVolume: (volume: number) => Promise<void>;
  play: () => Promise<void>;
};

declare global {
  interface Window {
    Vimeo?: {
      Player: new (element: HTMLIFrameElement) => VimeoPlayer;
    };
  }
}

// Autoplay mutato (richiesto dalle policy dei browser), con un badge
// centrale cliccabile per attivare l'audio: usa il player.js ufficiale di
// Vimeo (caricato a runtime) per poter chiamare setMuted() in risposta al
// click dell'utente.
function VimeoAutoplayEmbed({ label, vimeoId }: { label: string; vimeoId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<VimeoPlayer | null>(null);
  // Se l'utente clicca prima che player.js abbia finito di caricarsi,
  // il player non esiste ancora: ricordiamo l'intenzione e la applichiamo
  // non appena diventa disponibile, invece di perdere silenziosamente il click.
  const wantsUnmuteRef = useRef(false);
  const [unmuted, setUnmuted] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function unmutePlayer(player: VimeoPlayer) {
      // setVolume è rispettato dai browser in modo più affidabile di
      // setMuted per sbloccare l'audio da un iframe cross-origin dopo un
      // gesto dell'utente: le usiamo entrambe per sicurezza.
      player.setVolume(1).catch((err) => console.error("Vimeo setVolume:", err));
      player.setMuted(false).catch((err) => console.error("Vimeo setMuted:", err));
      player.play().catch((err) => console.error("Vimeo play:", err));
    }

    function setup() {
      if (cancelled || !iframeRef.current || !window.Vimeo) return;
      const player = new window.Vimeo.Player(iframeRef.current);
      playerRef.current = player;
      if (wantsUnmuteRef.current) unmutePlayer(player);
    }

    if (window.Vimeo) {
      setup();
    } else {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.onload = setup;
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  function handleUnmute() {
    setUnmuted(true);
    wantsUnmuteRef.current = true;
    const player = playerRef.current;
    if (!player) return;
    player.setVolume(1).catch((err) => console.error("Vimeo setVolume:", err));
    player.setMuted(false).catch((err) => console.error("Vimeo setMuted:", err));
    player.play().catch((err) => console.error("Vimeo play:", err));
  }

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-primary/25 bg-muted"
      style={{ boxShadow: "var(--shadow-deep)" }}
    >
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&title=0&byline=0&portrait=0`}
        title={label}
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
      />
      {!unmuted ? (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
          aria-label="Attiva l’audio del video"
        >
          <span
            className="flex items-center gap-2 rounded-full px-6 py-3 font-condensed text-sm uppercase tracking-[0.2em] text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            <Volume2 className="size-4" />
            Guarda il video
          </span>
        </button>
      ) : null}
    </div>
  );
}

export function VideoFrame({ label, duration, poster, youtubeId, vimeoId }: Props) {
  if (vimeoId) {
    return <VimeoAutoplayEmbed label={label} vimeoId={vimeoId} />;
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
