import type { Metadata } from "next";
import { Suspense }       from "react";
import Link               from "next/link";
import { ContactForm }    from "@/components/contact/ContactForm";
import { ScrollReveal }   from "@/components/ui/ScrollReveal";
import { Eyebrow }        from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Talk to Nishaw",
  description:
    "Start a conversation about premium corporate gifting for your team, clients, or enterprise. Tell us the occasion and we will take it from there. We respond within one working day.",
  openGraph: {
    title:       "Talk to Nishaw",
    description: "Start a corporate gifting conversation. We respond within one working day.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://nishaw.com/contact" },
  ],
};

/* ─────────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ── HEADER ── */}
      <div
        style={{
          background:    "var(--color-paper-deep)",
          borderBottom:  "1px solid var(--color-gold-soft)",
          paddingTop:    "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(48px, 7vw, 72px)",
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center" }}>
              <li>
                <Link
                  href="/"
                  className="link-draw"
                  style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}
                >
                  Home
                </Link>
              </li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>
                  Contact
                </span>
              </li>
            </ol>
          </nav>

          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>Start a conversation</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "var(--text-h1)",
                fontWeight:    400,
                letterSpacing: "-0.025em",
                lineHeight:    1.08,
                marginBottom:  20,
              }}
            >
              Talk to Nishaw.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "var(--text-body-lg)",
                color:      "var(--color-ink-soft)",
                lineHeight: 1.72,
                maxWidth:   520,
              }}
            >
              Tell us who the gift is for, the occasion, and your approximate
              budget. We will send a curated proposal within one working day.
              No obligation. No catalogue link.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── FORM + SIDEBAR ── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <div
            className="contact-grid"
            style={{
              display:             "grid",
              gridTemplateColumns: "minmax(0, 660px) minmax(240px, 320px)",
              gap:                 "clamp(40px, 6vw, 80px)",
              alignItems:          "start",
            }}
          >
            {/* ── FORM (Suspense required for useSearchParams) ── */}
            <Suspense
              fallback={
                <div style={{ padding: "40px 0", fontFamily: "var(--font-body)", color: "var(--color-ink-soft)" }}>
                  Loading form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>

            {/* ── SIDEBAR ── */}
            <aside>
              <div style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Contact details card */}
                <div
                  style={{
                    border:       "1px solid var(--color-gold-soft)",
                    borderRadius: "var(--radius-card)",
                    padding:      "28px 24px",
                    background:   "var(--color-paper-deep)",
                  }}
                >
                  <Eyebrow style={{ marginBottom: 20 }}>Reach us directly</Eyebrow>

                  {/* Email */}
                  <a
                    href="mailto:hello@nishaw.com"
                    style={{
                      display:        "flex",
                      alignItems:     "center",
                      gap:            12,
                      padding:        "14px 0",
                      borderBottom:   "1px solid var(--color-ink-faint)",
                      textDecoration: "none",
                      color:          "inherit",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 36, height: 36, borderRadius: "50%",
                        border: "1px solid var(--color-gold-soft)",
                        background: "var(--color-paper)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, color: "var(--color-gold)", fontSize: 15,
                      }}
                    >
                      ✉
                    </span>
                    <div>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-soft)", marginBottom: 2 }}>
                        Email
                      </span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink)" }}>
                        hello@nishaw.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919090232242"
                    style={{
                      display:        "flex",
                      alignItems:     "center",
                      gap:            12,
                      padding:        "14px 0",
                      borderBottom:   "1px solid var(--color-ink-faint)",
                      textDecoration: "none",
                      color:          "inherit",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 36, height: 36, borderRadius: "50%",
                        border: "1px solid var(--color-gold-soft)",
                        background: "var(--color-paper)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, color: "var(--color-gold)", fontSize: 15,
                      }}
                    >
                      ◉
                    </span>
                    <div>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-soft)", marginBottom: 2 }}>
                        Phone
                      </span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink)" }}>
                        +91 9090232242
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <div style={{ paddingTop: 20 }}>
                    <a
                      href="https://wa.me/919090232242?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20corporate%20gifting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%" }}
                    >
                      <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2.163c5.43 0 9.837 4.407 9.837 9.837 0 5.43-4.407 9.837-9.837 9.837-1.789 0-3.467-.478-4.918-1.315L2 21.837l1.338-4.892A9.773 9.773 0 012.163 12C2.163 6.57 6.57 2.163 12 2.163zm0-2.163C5.373 0 0 5.373 0 12c0 2.126.552 4.122 1.517 5.849L0 24l6.335-1.652A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Response time card */}
                <div
                  style={{
                    border:       "1px dashed var(--color-gold-soft)",
                    borderRadius: "var(--radius-card)",
                    padding:      "22px 20px",
                    background:   "var(--color-paper-deep)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                    <strong style={{ color: "var(--color-ink)" }}>We respond to all enquiries within one working day.</strong>
                    {" "}For urgent orders, note that in your message or WhatsApp us and we will prioritise.
                  </p>
                </div>

                {/* Brand quote */}
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle:  "italic",
                    fontWeight: 300,
                    fontSize:   "var(--text-body-lg)",
                    color:      "var(--color-ink-soft)",
                    lineHeight: 1.6,
                    padding:    "0 4px",
                  }}
                >
                  The gift reflects the giver. Let us make sure yours reflects well.
                </p>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
