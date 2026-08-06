import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description: "Talk to Nishaw about premium corporate gifting for your team, clients, or enterprise. We'll respond within one working day.",
};

export default function ContactPage() {
  return (
    <section
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        textAlign: "center",
        padding: "120px var(--gutter) 80px",
      }}
    >
      <p className="eyebrow">Talk to Nishaw</p>
      <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h1)" }}>
        Start a Conversation
      </h1>
      <p style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-soft)", maxWidth: 480 }}>
        Contact form coming soon. In the meantime, reach us at{" "}
        <a href="mailto:hello@nishaw.com" className="link-draw" style={{ color: "var(--color-gold)" }}>
          hello@nishaw.com
        </a>{" "}
        or WhatsApp{" "}
        <a
          href="https://wa.me/918758993307?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20corporate%20gifting"
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw"
          style={{ color: "var(--color-gold)" }}
        >
          +91 87589 93307
        </a>.
      </p>
    </section>
  );
}
