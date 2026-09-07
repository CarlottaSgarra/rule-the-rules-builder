import workbookCoverImg from "@/assets/workbook-cover-v2.png";

export function Workbook() {
  return (
    <div className="relative mx-auto w-full max-w-xs sm:pb-6 sm:pl-4">
      <img
        src={workbookCoverImg}
        alt="Copertina del Workbook di Rule The Rules"
        loading="lazy"
        width={1061}
        height={1500}
        className="-rotate-3 aspect-[1061/1500] w-full rounded-2xl object-cover transition-transform duration-300 hover:-translate-y-2"
        style={{ boxShadow: "var(--shadow-deep)" }}
      />
      <span
        className="absolute right-0 top-0 whitespace-nowrap rounded-xl px-4 py-2.5 text-center font-condensed text-xs uppercase leading-tight tracking-[0.08em] text-primary-foreground sm:bottom-0 sm:left-0 sm:right-auto sm:top-auto sm:text-sm"
        style={{
          backgroundImage: "var(--gradient-gold)",
          boxShadow: "0 10px 24px -8px rgba(0,0,0,0.5)",
        }}
      >
        Ti arriva prima dell’evento
      </span>
    </div>
  );
}
