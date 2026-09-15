type Props = {
  className?: string;
};

export function LiveRegistrationsNotice({ className = "" }: Props) {
  return (
    <div
      className={`mt-3 flex items-center justify-center gap-2 text-center text-xs sm:text-sm ${className}`}
    >
      <span className="relative flex size-2 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-red-500" />
      </span>
      {/* No explicit text color: inherits from the section (light or dark) instead of
          forcing --foreground, which would collide with dark bg-secondary sections. */}
      <span className="opacity-70">
        Le registrazioni delle tre serate sono disponibili fino a venerdì 9 ottobre
      </span>
    </div>
  );
}
