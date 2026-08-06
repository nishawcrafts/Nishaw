"use client";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
    >
      <input
        type="email"
        name="newsletter-email"
        placeholder="your@email.com"
        required
        aria-label="Email address for newsletter"
        style={{
          flex: "1 1 140px",
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          padding: "9px 14px",
          border: "1px solid var(--color-gold-soft)",
          borderRadius: "var(--radius-sm)",
          background: "var(--color-paper)",
          color: "var(--color-ink)",
          outline: "none",
          minWidth: 0,
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-gold-soft)")}
      />
      <button type="submit" className="btn btn-gold btn-sm" style={{ flexShrink: 0 }}>
        Subscribe
      </button>
    </form>
  );
}
