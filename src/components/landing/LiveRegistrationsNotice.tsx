type Props = {
  className?: string;
};

export function LiveRegistrationsNotice({ className = "" }: Props) {
  return (
    <div
      className={`mt-3 flex items-center justify-center gap-2 text-center text-xs text-foreground/70 sm:text-sm ${className}`}
    >
      <span className="relative flex size-2 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-red-500" />
      </span>
      <span>Le registrazioni delle tre serate sono disponibili fino a venerdì 9 ottobre</span>
    </div>
  );
}
