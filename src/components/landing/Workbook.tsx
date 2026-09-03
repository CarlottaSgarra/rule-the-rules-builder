import workbookCoverImg from "@/assets/workbook-cover.png";

export function Workbook() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl"
        style={{ backgroundColor: "var(--cream)", opacity: 0.5 }}
        aria-hidden
      />
      <div
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl"
        style={{ backgroundColor: "var(--cream)", opacity: 0.75 }}
        aria-hidden
      />

      <img
        src={workbookCoverImg}
        alt="Copertina del Workbook di Rule The Rules"
        loading="lazy"
        width={1054}
        height={1492}
        className="relative aspect-[1054/1492] w-full rounded-2xl object-cover"
        style={{ boxShadow: "var(--shadow-deep)" }}
      />
    </div>
  );
}
