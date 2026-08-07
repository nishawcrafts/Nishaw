"use client";

/** Inline newsletter subscription form — client-only for event handler. */
export function NewsletterInlineForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        /* TODO: wire up your email provider here */
      }}
      style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}
    >
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email address"
        required
        style={{
          fontFamily:  "var(--font-body)",
          fontSize:    "var(--text-body)",
          color:       "var(--color-ink)",
          background:  "var(--color-paper)",
          border:      "1px solid var(--color-gold-soft)",
          borderRadius:"var(--radius-sm)",
          padding:     "12px 16px",
          flex:        "1 1 220px",
          outline:     "none",
          minWidth:    180,
        }}
      />
      <button type="submit" className="btn btn-gold">Subscribe</button>
    </form>
  );
}
