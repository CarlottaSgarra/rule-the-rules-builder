import workbookCoverImg from "@/assets/workbook-cover.png";

export function Workbook() {
  return (
    <div className="relative mx-auto w-full max-w-xs pb-6 pl-4">
      <img
        src={workbookCoverImg}
        alt="Copertina del Workbook di Rule The Rules"
        loading="lazy"
        width={1054}
        height={1492}
        className="-rotate-3 aspect-[1054/1492] w-full rounded-2xl object-cover transition-transform duration-300 hover:-translate-y-2"
        style={{ boxShadow: "var(--shadow-deep)" }}
      />
      <span
        className="absolute bottom-0 left-0 max-w-[75%] rounded-xl px-4 py-2.5 text-center font-condensed text-xs uppercase leading-tight tracking-[0.08em] text-primary-foreground sm:text-sm"
        style={{
          backgroundImage: "var(--gradient-gold)",
          boxShadow: "0 10px 24px -8px rgba(0,0,0,0.5)",
        }}
      >
        Il workbook ti arriva prima dell’evento
      </span>
    </div>
  );
}
