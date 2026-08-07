"use client";

import { useEffect, useState } from "react";

interface SplitHeadingProps {
  text:        string;
  as?:         "h1" | "h2";
  className?:  string;
  style?:      React.CSSProperties;
  stagger?:    number;    // ms between words (default 40)
  initialDelay?: number;  // ms before first word (default 200)
}

/**
 * Renders a heading with a word-by-word fade+rise reveal.
 * Used on the /story page for the H1 split-text animation.
 * Respects prefers-reduced-motion.
 */
export function SplitHeading({
  text,
  as: Tag = "h1",
  className,
  style,
  stagger = 40,
  initialDelay = 200,
}: SplitHeadingProps) {
  const words = text.split(" ");
  const [visible, setVisible]       = useState<boolean[]>(() => new Array(words.length).fill(false));
  const [prefersReduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setVisible(new Array(words.length).fill(true));
      return;
    }
    const timers = words.map((_, i) =>
      setTimeout(
        () =>
          setVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          }),
        initialDelay + i * stagger
      )
    );
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: "0 0", ...style }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display:    "inline-block",
            marginRight: "0.28em",
            opacity:    visible[i] ? 1 : 0,
            transform:  visible[i] ? "translateY(0)" : "translateY(16px)",
            transition: prefersReduced
              ? "none"
              : "opacity 420ms ease-out, transform 420ms ease-out",
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
