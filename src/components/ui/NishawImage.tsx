"use client";

/**
 * NishawImage
 * -----------
 * Reusable, CLS-safe image component for the Nishaw site.
 *
 * Features:
 *  - Fixed aspect-ratio wrapper (no layout shift)
 *  - Rounded 14 px corners, 1 px champagne-soft border
 *  - loading="lazy", blur-up fade-in on load
 *  - REQUIRED descriptive `alt` prop (enforced by TypeScript)
 *  - Elegant empty-state when `src` is omitted or undefined:
 *      ivory-deep panel, centred champagne diamond, faint caption label
 *  - Aspect ratios: "1:1" | "4:5" | "3:2" | "16:9"
 */

import { useState } from "react";

/* ── Types ────────────────────────────────────────────────────────────────── */
export type AspectRatio = "1:1" | "4:5" | "3:2" | "16:9";

interface NishawImageProps {
  /** Descriptive alt text - REQUIRED. Describe what is shown. */
  alt: string;
  /** Path to image. Omit (or set undefined) to show the elegant empty state. */
  src?: string;
  /** Aspect ratio of the wrapper. Default "3:2". */
  aspect?: AspectRatio;
  /**
   * Short label shown in the empty state below the diamond.
   * E.g. "Collection hero", "Case study photo"
   */
  caption?: string;
  /** Applied to the outer wrapper div. */
  className?: string;
  style?: React.CSSProperties;
  /** Override object-fit. Default "cover". */
  objectFit?: "cover" | "contain";
  /** Object position. Default "center". */
  objectPosition?: string;
  /** Eager-load the image (use for above-the-fold). Default false (lazy). */
  eager?: boolean;
}

/* ── Aspect ratio map ─────────────────────────────────────────────────────── */
const ASPECT: Record<AspectRatio, string> = {
  "1:1":  "1 / 1",
  "4:5":  "4 / 5",
  "3:2":  "3 / 2",
  "16:9": "16 / 9",
};

/* ── Tiny base64 SVG used as blur-up placeholder bg ──────────────────────── */
// A 4x4 ivory-deep rect encoded as data URI — renders as a gentle wash of colour
// while the real image loads.
const BLUR_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23F1E9DA'/%3E%3C/svg%3E";

/* ── Component ────────────────────────────────────────────────────────────── */
export function NishawImage({
  alt,
  src,
  aspect = "3:2",
  caption,
  className,
  style,
  objectFit = "cover",
  objectPosition = "center",
  eager = false,
}: NishawImageProps) {
  const [loaded, setLoaded] = useState(false);

  /* ── Shared wrapper styles ──────────────────────────────────────────────── */
  const wrapperStyle: React.CSSProperties = {
    position:     "relative",
    width:        "100%",
    aspectRatio:  ASPECT[aspect],
    overflow:     "hidden",
    borderRadius: 14,
    border:       "1px solid var(--color-gold-soft)",
    background:   `url(${BLUR_PLACEHOLDER}) center / cover`,
    flexShrink:   0,
    ...style,
  };

  /* ── Empty state (no src) ───────────────────────────────────────────────── */
  if (!src) {
    return (
      <div
        className={className}
        style={{
          ...wrapperStyle,
          background:     "var(--color-paper-deep)",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          gap:            10,
          userSelect:     "none",
        }}
        role="img"
        aria-label={alt}
      >
        {/* Champagne diamond mark */}
        <span
          aria-hidden="true"
          style={{
            fontSize:     "1.375rem",
            color:        "var(--color-gold)",
            opacity:      0.55,
            lineHeight:   1,
            letterSpacing: 0,
          }}
        >
          ♦
        </span>

        {/* Faint caption label */}
        {caption && (
          <span
            style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "0.625rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color:         "var(--color-gold)",
              opacity:       0.45,
            }}
          >
            {caption}
          </span>
        )}
      </div>
    );
  }

  /* ── Image with blur-up ─────────────────────────────────────────────────── */
  return (
    <div className={className} style={wrapperStyle}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          position:       "absolute",
          inset:          0,
          width:          "100%",
          height:         "100%",
          objectFit,
          objectPosition,
          display:        "block",
          /* blur-up: starts transparent, fades in on load */
          opacity:        loaded ? 1 : 0,
          transition:     "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}
