import workbookCoverImg from "@/assets/workbook-cover.png";

export function Workbook() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <img
        src={workbookCoverImg}
        alt="Copertina del Workbook di Rule The Rules"
        loading="lazy"
        width={1054}
        height={1492}
        className="-rotate-3 aspect-[1054/1492] w-full rounded-2xl object-cover transition-transform duration-300 hover:-translate-y-2"
        style={{ boxShadow: "var(--shadow-deep)" }}
      />
    </div>
  );
}
