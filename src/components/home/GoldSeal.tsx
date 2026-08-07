"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   GoldSeal
   Animation 6, SVG path draw on Bespoke section entry (700ms, once)
   A decorative wax-seal motif in champagne gold.
   ──────────────────────────────────────────────────────────────────────── */

/* Circumference = 2π × r */
const OUTER_R   = 88;
const INNER_R   = 72;
const OUTER_C   = Math.PI * 2 * OUTER_R;  // ≈ 552.9
const INNER_C   = Math.PI * 2 * INNER_R;  // ≈ 452.4
const SPOKE_LEN = 12;
const SPOKE_COUNT = 16;

export function GoldSeal({ size = 180 }: { size?: number }) {
  const containerRef = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    if (mq.matches) { setDrawn(true); return; }

    const svg = containerRef.current;
    if (!svg) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          obs.unobserve(svg);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(svg);
    return () => obs.disconnect();
  }, []);

  const cx = 100;
  const cy = 100;

  /* Generate spoke lines */
  const spokes = Array.from({ length: SPOKE_COUNT }, (_, i) => {
    const angle = (i / SPOKE_COUNT) * Math.PI * 2 - Math.PI / 2;
    const x1 = cx + Math.cos(angle) * (INNER_R - SPOKE_LEN);
    const y1 = cy + Math.sin(angle) * (INNER_R - SPOKE_LEN);
    const x2 = cx + Math.cos(angle) * (OUTER_R + SPOKE_LEN * 0.6);
    const y2 = cy + Math.sin(angle) * (OUTER_R + SPOKE_LEN * 0.6);
    return { x1, y1, x2, y2 };
  });

  /* 8 diamond pips at cardinal + diagonal */
  const pips = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const r = (OUTER_R + INNER_R) / 2;
    return {
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    };
  });

  const ease = drawn ? "stroke-dashoffset 700ms cubic-bezier(0.22,1,0.36,1)" : "none";
  const ease2 = drawn ? `stroke-dashoffset 500ms cubic-bezier(0.22,1,0.36,1) 400ms` : "none";

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: "block", overflow: "visible" }}
    >
      {/* Outer circle */}
      <circle
        cx={cx} cy={cy} r={OUTER_R}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1"
        style={{
          strokeDasharray: OUTER_C,
          strokeDashoffset: drawn ? 0 : OUTER_C,
          transition: ease,
        }}
      />

      {/* Inner circle */}
      <circle
        cx={cx} cy={cy} r={INNER_R}
        fill="none"
        stroke="var(--color-gold-soft)"
        strokeWidth="0.75"
        style={{
          strokeDasharray: INNER_C,
          strokeDashoffset: drawn ? 0 : INNER_C,
          transition: ease2,
        }}
      />

      {/* Spokes */}
      {spokes.map((s, i) => (
        <line
          key={i}
          x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
          stroke="var(--color-gold)"
          strokeWidth="0.5"
          style={{
            opacity: drawn ? 0.4 : 0,
            transition: prefersReduced
              ? "none"
              : `opacity 300ms ease-out ${600 + i * 20}ms`,
          }}
        />
      ))}

      {/* Diamond pips */}
      {pips.map((p, i) => (
        <polygon
          key={i}
          points={`${p.x},${p.y - 3.5} ${p.x + 2.5},${p.y} ${p.x},${p.y + 3.5} ${p.x - 2.5},${p.y}`}
          fill="var(--color-gold)"
          style={{
            opacity: drawn ? 0.7 : 0,
            transition: prefersReduced
              ? "none"
              : `opacity 250ms ease-out ${700 + i * 30}ms`,
          }}
        />
      ))}

      {/* Centre diamond ♦ */}
      <polygon
        points={`${cx},${cy - 14} ${cx + 10},${cy} ${cx},${cy + 14} ${cx - 10},${cy}`}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1"
        style={{
          opacity: drawn ? 1 : 0,
          transition: prefersReduced ? "none" : "opacity 400ms ease-out 500ms",
        }}
      />

      {/* Inner centre fill */}
      <circle
        cx={cx} cy={cy} r={3}
        fill="var(--color-gold)"
        style={{
          opacity: drawn ? 0.8 : 0,
          transition: prefersReduced ? "none" : "opacity 300ms ease-out 700ms",
        }}
      />
    </svg>
  );
}
