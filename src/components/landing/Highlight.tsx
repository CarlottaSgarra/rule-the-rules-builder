import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function Highlight({ children }: Props) {
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

  return (
    <span
      ref={ref}
      className="rounded-[0.15em] px-1 transition-[background-size] duration-[900ms] ease-out"
      style={{
        backgroundImage:
          "linear-gradient(color-mix(in oklab, var(--primary) 55%, transparent), color-mix(in oklab, var(--primary) 55%, transparent))",
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
