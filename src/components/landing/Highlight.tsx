import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Set when this instance sits on a dark violet panel, so the tint stays visible. */
  dark?: boolean;
};

export function Highlight({ children, dark = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const tint = dark
    ? "color-mix(in oklab, var(--primary) 55%, transparent)"
    : "color-mix(in oklab, var(--secondary) 25%, transparent)";

  return (
    <span
      ref={ref}
      className="rounded-[0.15em] px-1 transition-[background-size] duration-[900ms] ease-out"
      style={{
        backgroundImage: `linear-gradient(${tint}, ${tint})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: visible ? "100% 100%" : "0% 100%",
        backgroundPosition: "left center",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </span>
  );
}
