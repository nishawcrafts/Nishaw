import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/journal";
import { ScrollReveal }           from "@/components/ui/ScrollReveal";
import { Eyebrow }                from "@/components/ui/Eyebrow";
import { Button }                 from "@/components/ui/Button";
import { NewsletterInlineForm }   from "@/components/ui/NewsletterInlineForm";

export const metadata: Metadata = {
  title: "The Art of Giving — Corporate Gifting Ideas & Guides",
  description:
    "Ideas, guides, and considered perspectives on the art of corporate gifting in India. Diwali gifting guides, welcome kit frameworks, client gifting etiquette, and more.",
  openGraph: {
    title: "The Art of Giving | Nishaw Journal",
    description: "Corporate gifting ideas, guides, and considered perspectives from Nishaw.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",              item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "The Art of Giving", item: "https://nishaw.com/journal" },
  ],
};

/* Category accent colours */
const categoryColor: Record<string, string> = {
  "Festive Gifting":  "var(--color-terracotta)",
  "Onboarding":       "var(--color-pine)",
  "Client Gifting":   "var(--color-plum)",
  "Recognition":      "var(--color-gold)",
  "Enterprise":       "var(--color-sapphire)",
};
function getCategoryColor(cat: string) {
  return categoryColor[cat] ?? "var(--color-ink-soft)";
}

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HEADER ── */}
      <div
        style={{
          background:    "var(--color-paper-deep)",
          borderBottom:  "1px solid var(--color-gold-soft)",
          paddingTop:    "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(56px, 8vw, 80px)",
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center" }}>
              <li><Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>Home</Link></li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li><span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>The Art of Giving</span></li>
            </ol>
          </nav>

          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>The Art of Giving</Eyebrow>
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
                maxWidth:      680,
              }}
            >
              Corporate Gifting Ideas &amp; Guides
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "var(--text-body-lg)",
                color:      "var(--color-ink-soft)",
                lineHeight: 1.65,
                maxWidth:   520,
              }}
            >
              Occasional notes on the art of giving well: guides by occasion and
              budget, etiquette, and considered perspectives on what corporate
              gifting can be when it is done with intention.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── POSTS GRID ── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-soft)" }}>
              No posts yet. Check back soon.
            </p>
          ) : (
            <div
              style={{
                display:             "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap:                 28,
              }}
            >
              {posts.map((post, i) => {
                const catColor = getCategoryColor(post.category);
                return (
                  <ScrollReveal key={post.slug} delay={(i % 3) * 70}>
                    <Link
                      href={`/journal/${post.slug}`}
                      style={{ textDecoration: "none", display: "block", height: "100%" }}
                    >
                      <article
                        className="card"
                        style={{
                          height:        "100%",
                          display:       "flex",
                          flexDirection: "column",
                          padding:       0,
                          overflow:      "hidden",
                          borderTopColor: catColor,
                          borderTopWidth: 3,
                          transition:    "transform 200ms ease-out, box-shadow 200ms ease-out",
                        }}
                      >
                        {/* Category + date bar */}
                        <div
                          style={{
                            display:        "flex",
                            alignItems:     "center",
                            justifyContent: "space-between",
                            padding:        "16px 24px",
                            borderBottom:   "1px solid var(--color-ink-faint)",
                            gap:            12,
                          }}
                        >
                          <span
                            style={{
                              fontFamily:    "var(--font-body)",
                              fontSize:      "var(--text-eyebrow)",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color:         catColor,
                            }}
                          >
                            {post.category}
                          </span>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", whiteSpace: "nowrap" }}>
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title + excerpt */}
                        <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                          <h2
                            style={{
                              fontFamily:  "var(--font-heading)",
                              fontSize:    "var(--text-h4)",
                              lineHeight:  1.25,
                              color:       "var(--color-ink)",
                              flex:        1,
                            }}
                          >
                            {post.title}
                          </h2>
                          <p
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize:   "var(--text-body-sm)",
                              color:      "var(--color-ink-soft)",
                              lineHeight: 1.65,
                              display:    "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow:   "hidden",
                            }}
                          >
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Footer */}
                        <div
                          style={{
                            display:        "flex",
                            alignItems:     "center",
                            justifyContent: "space-between",
                            padding:        "14px 24px",
                            borderTop:      "1px solid var(--color-ink-faint)",
                            background:     "var(--color-paper-deep)",
                          }}
                        >
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                            {formatDate(post.date)}
                          </span>
                          <span
                            style={{
                              fontFamily:    "var(--font-body)",
                              fontSize:      "var(--text-eyebrow)",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color:         "var(--color-gold)",
                            }}
                          >
                            Read ♦
                          </span>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section
        style={{
          background:   "var(--color-paper-deep)",
          borderTop:    "1px solid var(--color-gold-soft)",
          padding:      "clamp(48px, 7vw, 80px) 0",
          textAlign:    "center",
        }}
      >
        <div className="container" style={{ maxWidth: 520, margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 14 }}>Subscribe</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-h3)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              The Art of Giving, in your inbox.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink-soft)", lineHeight: 1.65, marginBottom: 32 }}>
              Occasional notes on gifting well. No marketing. No frequency pressure. Unsubscribe any time.
            </p>
            <NewsletterInlineForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
