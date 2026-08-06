"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;      // ms delay before reveal starts
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * ScrollReveal — animation 1 per spec:
 * fade + rise 16px, 500ms ease-out, IntersectionObserver, fires once.
 * Respects prefers-reduced-motion via global CSS (transition-duration → 0.01ms).
 */
export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          obs.unobserve(el); // fire once
        }
      },
      { threshold: 0.1, rootMargin: "-48px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // Tag is already a valid React element type

  const El = Tag as React.ElementType;
  return (
    <El
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </El>
  );
}
