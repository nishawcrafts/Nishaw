"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────
   HeroSection
   Animation 4, subtle parallax ≤8% on scroll (home hero only)
   Animation 5, split-text word reveal on H1 (30ms stagger)
   ──────────────────────────────────────────────────────────────────────── */

const H1_TEXT = "Say more than thank you.";
const WORDS = H1_TEXT.split(" ");

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  /* ── Split-text reveal state ── */
  const [visibleWords, setVisibleWords] = useState<boolean[]>(
    () => new Array(WORDS.length).fill(false)
  );
  const h1Ref = useRef<HTMLHeadingElement>(null);

  /* ── Parallax state ── */
  const [parallaxY, setParallaxY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  /* ── Animate words on mount (or immediately if reduced) ── */
  useEffect(() => {
    if (prefersReduced) {
      setVisibleWords(new Array(WORDS.length).fill(true));
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    WORDS.forEach((_, i) => {
      timers.push(
        setTimeout(
          () =>
            setVisibleWords((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            }),
          300 + i * 30 // 300ms initial pause + 30ms stagger
        )
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [prefersReduced]);

  /* ── Parallax scroll listener ── */
  useEffect(() => {
    if (prefersReduced) return;
    const hero = heroRef.current;
    if (!hero) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const heroH = hero.offsetHeight;
      // Clamp translate to ≤8% of hero height
      const max = heroH * 0.08;
      setParallaxY(Math.min(scrolled * 0.12, max));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      aria-label="Hero, Bespoke Corporate Gifting"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--color-paper-deep)",
      }}
    >
      {/* ── Background image with parallax ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-10% 0 -10% 0",
          willChange: prefersReduced ? "auto" : "transform",
          transform: prefersReduced ? "none" : `translateY(${parallaxY}px)`,
          transition: "none", // raw scroll, no transition
        }}
      >
        {/* Actual image */}
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
        {/* Gradient overlay, cream from left, transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(247,241,225,0.97) 0%, rgba(247,241,225,0.85) 40%, rgba(247,241,225,0.45) 65%, rgba(247,241,225,0.0) 100%)",
          }}
        />
        {/* Bottom fade for trust strip transition */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background:
              "linear-gradient(to bottom, transparent, rgba(247,241,225,0.3))",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: 120, // header clearance
          paddingBottom: 80,
        }}
      >
        <div style={{ maxWidth: 600 }}>
          {/* Eyebrow */}
          <p
            className="eyebrow"
            style={{
              marginBottom: 24,
              opacity: 0,
              animation: prefersReduced
                ? "none"
                : "fadeSlideUp 500ms ease-out 100ms forwards",
            }}
          >
            Bespoke Corporate Gifting
          </p>

          {/* H1, Split-text word reveal */}
          <h1
            ref={h1Ref}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-h1)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              marginBottom: 28,
              display: "flex",
              flexWrap: "wrap",
              gap: "0.25em 0",
            }}
          >
            {WORDS.map((word, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  marginRight: "0.28em",
                  opacity: visibleWords[i] ? 1 : 0,
                  transform: visibleWords[i]
                    ? "translateY(0)"
                    : "translateY(18px)",
                  transition: prefersReduced
                    ? "none"
                    : "opacity 420ms ease-out, transform 420ms ease-out",
                }}
              >
                {/* Italic on last two words for tagline effect */}
                {i >= WORDS.length - 2 ? <em style={{ fontStyle: "italic", fontWeight: 300 }}>{word}</em> : word}
              </span>
            ))}
          </h1>

          {/* Sub-heading */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-ink-soft)",
              lineHeight: 1.65,
              marginBottom: 40,
              maxWidth: 520,
              opacity: 0,
              animation: prefersReduced
                ? "none"
                : "fadeSlideUp 500ms ease-out 600ms forwards",
            }}
          >
            Curated and custom-made gifts for the people who move your business
            forward: clients, teams, and the ones you can&apos;t afford to
            forget.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: 0,
              animation: prefersReduced
                ? "none"
                : "fadeSlideUp 500ms ease-out 800ms forwards",
            }}
          >
            <Link href="/collections" className="btn btn-gold btn-lg">
              Explore the Collections
            </Link>
            <Link href="/bespoke" className="btn btn-ghost btn-lg">
              Design a Bespoke Gift
            </Link>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0,
          animation: prefersReduced
            ? "none"
            : "fadeSlideUp 500ms ease-out 1200ms forwards",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-eyebrow)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-ink-soft)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background:
              "linear-gradient(to bottom, var(--color-gold), transparent)",
          }}
        />
      </div>

      {/* ── Keyframe defs ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 767px) {
          /* Mobile: push text lower, stronger overlay */
          .hero-content-inner { padding-top: 140px !important; }
        }
      `}</style>
    </section>
  );
}
