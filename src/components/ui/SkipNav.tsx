"use client";

/** Keyboard-accessible skip navigation link — client-only for focus handlers. */
export function SkipNav() {
  return (
    <a
      href="#main-content"
      style={{
        position:       "absolute",
        top:            "-100%",
        left:           "16px",
        zIndex:         9999,
        padding:        "10px 20px",
        background:     "var(--color-ink)",
        color:          "var(--color-paper)",
        fontFamily:     "var(--font-body)",
        fontSize:       "var(--text-body-sm)",
        borderRadius:   "0 0 8px 8px",
        textDecoration: "none",
        transition:     "top 200ms",
      }}
      onFocus={(e) => { (e.currentTarget as HTMLElement).style.top = "0"; }}
      onBlur={(e)  => { (e.currentTarget as HTMLElement).style.top = "-100%"; }}
    >
      Skip to main content
    </a>
  );
}
