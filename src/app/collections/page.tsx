import type { Metadata } from "next";
import Link from "next/link";
import { collections } from "@/content/collections";
import { accentValues } from "@/lib/tokens";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Divider }      from "@/components/ui/Divider";
import { Button }       from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The Collections — Nine Ways to Be Remembered",
  description:
    "Nine curated collections of premium corporate gifts for every occasion — onboarding, Diwali, client appreciation, milestones, farewell, events, and fully bespoke. Pan-India delivery. GST invoicing.",
  openGraph: {
    title: "The Collections | Nishaw",
    description:
      "Nine curated collections of premium corporate gifts. Discover what's right for your occasion.",
  },
};

/* BreadcrumbList JSON-LD */
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",           item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "The Collections", item: "https://nishaw.com/collections" },
  ],
};

/* ItemList JSON-LD */
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nishaw Corporate Gifting Collections",
  url:  "https://nishaw.com/collections",
  numberOfItems: collections.length,
  itemListElement: collections.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.seoH1,
    url:  `https://nishaw.com/collections/${c.slug}`,
    description: c.promiseLine,
  })),
};

export default function CollectionsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      {/* ── Page header ── */}
      <div
        style={{
          background:   "var(--color-paper-deep)",
          borderBottom: "1px solid var(--color-gold-soft)",
          paddingTop:   "clamp(100px, 14vw, 140px)",
          paddingBottom:"clamp(56px, 8vw, 80px)",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <li>
                <Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                  Home
                </Link>
              </li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>
                  The Collections
                </span>
              </li>
            </ol>
          </nav>

          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>The Collections</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "var(--text-h1)",
                fontStyle:     "italic",
                fontWeight:    300,
                letterSpacing: "-0.025em",
                marginBottom:  20,
                maxWidth:      680,
              }}
            >
              Nine ways to be remembered.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "var(--text-body-lg)",
                color:      "var(--color-ink-soft)",
                lineHeight: 1.65,
                maxWidth:   600,
              }}
            >
              Every gifting occasion calls for something different. Browse by moment
              — and find the collection that speaks to yours.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Collections grid ── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
              gap:                 20,
            }}
          >
            {collections.map((col, i) => {
              const accentColor = accentValues[col.accent];
              return (
                <ScrollReveal key={col.slug} delay={(i % 3) * 70}>
                  <Link
                    href={`/collections/${col.slug}`}
                    style={{ display: "block", height: "100%", textDecoration: "none" }}
                    aria-label={`${col.displayName} — ${col.seoH1}`}
                  >
                    <article
                      className="card-accent card-hover"
                      style={{
                        borderTopColor: accentColor,
                        padding:        "32px 28px 26px",
                        height:         "100%",
                        display:        "flex",
                        flexDirection:  "column",
                        gap:            12,
                      }}
                    >
                      {/* Accent pill */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span
                          aria-hidden="true"
                          style={{
                            width:     7, height:     7,
                            borderRadius: "50%",
                            background:   accentColor,
                            flexShrink:   0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily:    "var(--font-body)",
                            fontSize:      "var(--text-eyebrow)",
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color:         accentColor,
                          }}
                        >
                          {col.displayName}
                        </span>
                      </div>

                      {/* SEO headline */}
                      <h2
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize:   "var(--text-h4)",
                          fontWeight: 400,
                          color:      "var(--color-ink)",
                          lineHeight: 1.2,
                          margin:     0,
                        }}
                      >
                        {col.seoH1}
                      </h2>

                      {/* Promise line */}
                      <p
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontStyle:  "italic",
                          fontWeight: 300,
                          fontSize:   "var(--text-body-lg)",
                          color:      "var(--color-ink-soft)",
                          lineHeight: 1.4,
                          flex:       1,
                          margin:     0,
                        }}
                      >
                        {col.promiseLine}
                      </p>

                      {/* Budget hint */}
                      <div
                        style={{
                          display:    "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop:  4,
                          paddingTop: 12,
                          borderTop:  "1px solid var(--color-ink-faint)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize:   "var(--text-body-sm)",
                            color:      "var(--color-ink-soft)",
                          }}
                        >
                          {col.budgetBand}
                        </span>
                        <span
                          style={{ color: accentColor, fontSize: 13 }}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container"><Divider variant="diamond" /></div>

      {/* ── Bespoke CTA band ── */}
      <section
        className="section-py"
        style={{
          background: "var(--color-paper-deep)",
          textAlign:  "center",
        }}
      >
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>Can&apos;t find the right fit?</Eyebrow>
            <h2
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "var(--text-h2)",
                fontStyle:     "italic",
                fontWeight:    300,
                marginBottom:  20,
                letterSpacing: "-0.02em",
              }}
            >
              We&apos;ll make it from scratch.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "var(--text-body-lg)",
                color:      "var(--color-ink-soft)",
                lineHeight: 1.65,
                marginBottom: 32,
              }}
            >
              If none of the nine collections quite fit the moment, tell us
              about it. House of Bespoke begins with a conversation.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/bespoke" variant="gold">Start a Bespoke Project</Button>
              <Button href="/contact" variant="ghost">Talk to us →</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
