"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NishawImage } from "@/components/ui/NishawImage";

/* ─────────────────────────────────────────────────────────────────────────
   HeroSection
   Desktop: two-column (text left 55% / cinematic image right 45%)
   Mobile: 4:5 image above text, single column
   Preserves: split-text H1 reveal, parallax (max 8%), reduced-motion support
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

  /* ── Split-text reveal ── */
  const [visibleWords, setVisibleWords] = useState<boolean[]>(
    () => new Array(WORDS.length).fill(false)
  );
  const h1Ref = useRef<HTMLHeadingElement>(null);

  /* ── Parallax ── */
  const [parallaxY, setParallaxY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

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
          300 + i * 30
        )
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const max = hero.offsetHeight * 0.08;
      setParallaxY(Math.min(window.scrollY * 0.12, max));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      aria-label="Hero — Bespoke Corporate Gifting"
      style={{
        position:   "relative",
        minHeight:  "100dvh",
        background: "var(--color-paper)",
        overflow:   "hidden",
      }}
    >
      {/* ── Desktop: absolute right image panel ── */}
      <div
        className="hero-image-panel"
        style={{
          transform:  prefersReduced ? "none" : `translateY(${parallaxY}px)`,
          willChange: prefersReduced ? "auto" : "transform",
          transition: "none",
        }}
      >
        <NishawImage
          src="/images/curations/hero-object.jpg"
          alt="A premium Nishaw gift box: ivory linen exterior tied with champagne silk ribbon, on a deep emerald surface"
          eager
          caption="The Nishaw gift"
          style={{
            height:      "100%",
            borderRadius: 0,
            border:      "none",
            aspectRatio: "auto",
          }}
        />
      </div>

      {/* ── Content column ── */}
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 80 }}
      >
        {/* Mobile image (shown above text on small screens) */}
        <div className="hero-image-mobile">
          <NishawImage
            src="/images/curations/hero-object.jpg"
            alt="A premium Nishaw gift box: ivory linen exterior tied with champagne silk ribbon, on a deep emerald surface"
            eager
            aspect="4:5"
            caption="The Nishaw gift"
          />
        </div>

        <div className="hero-text-col">
          {/* Eyebrow */}
          <p
            className="eyebrow"
            style={{
              marginBottom: 24,
              opacity:      0,
              animation:    prefersReduced
                ? "none"
                : "fadeSlideUp 500ms ease-out 100ms forwards",
            }}
          >
            Bespoke Corporate Gifting
          </p>

          {/* H1 — split-text word reveal */}
          <h1
            ref={h1Ref}
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "var(--text-h1)",
              fontWeight:    400,
              lineHeight:    1.08,
              letterSpacing: "-0.025em",
              marginBottom:  28,
              display:       "flex",
              flexWrap:      "wrap",
              gap:           "0.25em 0",
            }}
          >
            {WORDS.map((word, i) => (
              <span
                key={i}
                style={{
                  display:    "inline-block",
                  marginRight: "0.28em",
                  opacity:    visibleWords[i] ? 1 : 0,
                  transform:  visibleWords[i] ? "translateY(0)" : "translateY(18px)",
                  transition: prefersReduced
                    ? "none"
                    : "opacity 420ms ease-out, transform 420ms ease-out",
                }}
              >
                {i >= WORDS.length - 2
                  ? <em style={{ fontStyle: "italic", fontWeight: 300 }}>{word}</em>
                  : word}
              </span>
            ))}
          </h1>

          {/* Sub-heading */}
          <p
            style={{
              fontFamily:  "var(--font-body)",
              fontSize:    "var(--text-body-lg)",
              color:       "var(--color-ink-soft)",
              lineHeight:  1.65,
              marginBottom: 40,
              maxWidth:    520,
              opacity:     0,
              animation:   prefersReduced
                ? "none"
                : "fadeSlideUp 500ms ease-out 600ms forwards",
            }}
          >
            Curated and custom-made gifts for the people who move your business
            forward: clients, teams, and the ones you can&apos;t afford to forget.
          </p>

          {/* CTAs */}
          <div
            style={{
              display:   "flex",
              gap:       16,
              flexWrap:  "wrap",
              opacity:   0,
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
          position:      "absolute",
          bottom:        32,
          left:          "50%",
          transform:     "translateX(-50%)",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           8,
          opacity:       0,
          animation:     prefersReduced
            ? "none"
            : "fadeSlideUp 500ms ease-out 1200ms forwards",
        }}
      >
        <span
          style={{
            fontFamily:    "var(--font-body)",
            fontSize:      "var(--text-eyebrow)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color:         "var(--color-ink-soft)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width:      1,
            height:     32,
            background: "linear-gradient(to bottom, var(--color-gold), transparent)",
          }}
        />
      </div>

      {/* ── Keyframes + responsive layout ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Desktop: absolute right image panel */
        .hero-image-panel {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 45%;
          overflow: hidden;
          border-radius: 0;
        }
        .hero-image-panel > * {
          height: 100% !important;
          border-radius: 0 !important;
          border: none !important;
        }
        .hero-image-panel img {
          object-fit: cover !important;
          width: 100% !important;
          height: 100% !important;
        }

        /* Text column occupies the left 55% */
        .hero-text-col {
          max-width: 520px;
        }

        /* Mobile: hide panel, show inline image */
        .hero-image-mobile { display: none; }

        @media (max-width: 767px) {
          .hero-image-panel { display: none; }
          .hero-image-mobile {
            display: block;
            margin-bottom: 32px;
            margin-top: 0;
          }
          .hero-text-col { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
