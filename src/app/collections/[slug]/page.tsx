import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import Link              from "next/link";
import { getCollection, getAllSlugs } from "@/content/collections";
import { accentValues }  from "@/lib/tokens";
import { ScrollReveal }  from "@/components/ui/ScrollReveal";
import { Eyebrow }       from "@/components/ui/Eyebrow";
import { Divider }       from "@/components/ui/Divider";
import { Button }        from "@/components/ui/Button";
import { NishawImage }   from "@/components/ui/NishawImage";

/* ── Static generation ───────────────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ────────────────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const col = getCollection(slug);
  if (!col) return {};

  const description = `${col.promiseLine} ${col.seoH1} by Nishaw, India's premium bespoke corporate gifting brand. ${col.budgetBand}. Pan-India delivery. GST invoicing.`;

  return {
    title: col.seoH1,
    description,
    openGraph: {
      title:       `${col.seoH1} | Nishaw`,
      description,
      url:         `https://nishaw.com/collections/${col.slug}`,
    },
    alternates: {
      canonical: `https://nishaw.com/collections/${col.slug}`,
    },
  };
}

/* ── Item card component ─────────────────────────────────────────────────── */
function ItemCard({
  name,
  description,
  glyph,
  accentColor,
  index,
}: {
  name: string;
  description: string;
  glyph: string;
  accentColor: string;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 80}>
      <article
        className="card"
        style={{
          padding:  "28px 24px",
          height:   "100%",
          display:  "flex",
          flexDirection: "column",
          gap:      16,
        }}
      >
        {/* Glyph circle */}
        <div
          aria-hidden="true"
          style={{
            width:          52,
            height:         52,
            borderRadius:   "50%",
            border:         `1.5px solid ${accentColor}`,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            flexShrink:     0,
            background:     `${accentColor}0d`,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize:   20,
              color:      accentColor,
              lineHeight: 1,
            }}
          >
            {glyph}
          </span>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily:  "var(--font-heading)",
              fontSize:    "var(--text-h4)",
              lineHeight:  1.2,
              marginBottom: 8,
              color:       "var(--color-ink)",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "var(--text-body-sm)",
              color:      "var(--color-ink-soft)",
              lineHeight: 1.72,
            }}
          >
            {description}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}

/* ── Stat block component ────────────────────────────────────────────────── */
function StatBlock({ label, value, accentColor }: { label: string; value: string; accentColor: string }) {
  return (
    <div
      style={{
        padding:      "20px 24px",
        borderRadius: "var(--radius-sm)",
        border:       "1px solid var(--color-gold-soft)",
        background:   "var(--color-paper)",
      }}
    >
      <span
        style={{
          display:       "block",
          fontFamily:    "var(--font-body)",
          fontSize:      "var(--text-eyebrow)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color:         accentColor,
          marginBottom:  6,
        }}
      >
        {label}
      </span>
      <span
        style={{
          display:    "block",
          fontFamily: "var(--font-body)",
          fontSize:   "var(--text-body)",
          color:      "var(--color-ink)",
          lineHeight: 1.4,
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export default async function CollectionSlugPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const col = getCollection(slug);
  if (!col) notFound();

  const accentColor = accentValues[col.accent];

  /* ── JSON-LD ── */
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",            item: "https://nishaw.com" },
      { "@type": "ListItem", position: 2, name: "The Collections", item: "https://nishaw.com/collections" },
      { "@type": "ListItem", position: 3, name: col.displayName,   item: `https://nishaw.com/collections/${col.slug}` },
    ],
  };

  const offerCatalogLd = {
    "@context":   "https://schema.org",
    "@type":      "OfferCatalog",
    "@id":        `https://nishaw.com/collections/${col.slug}#catalog`,
    name:         col.seoH1,
    url:          `https://nishaw.com/collections/${col.slug}`,
    description:  col.promiseLine,
    provider: {
      "@type":  "Organization",
      name:     "Nishaw",
      url:      "https://nishaw.com",
    },
    itemListElement: col.exampleItems.map((item, i) => ({
      "@type":    "ListItem",
      position:   i + 1,
      item: {
        "@type":      "Product",
        name:         item.name,
        description:  item.description,
        brand: {
          "@type": "Brand",
          name:    "Nishaw",
        },
        offers: {
          "@type":         "AggregateOffer",
          priceCurrency:   "INR",
          lowPrice:        col.budgetBand.replace(/[^0-9,]/g, "").split(",")[0] || "2000",
          offerCount:      "1",
          availability:    "https://schema.org/InStock",
          url:             `https://nishaw.com/contact?occasion=${col.slug}`,
        },
      },
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogLd) }} />

      {/* ── COLOURED HEADER BAND ─── */}
      <div
        style={{
          background:   `${accentColor}0c`,   /* 5% tint of accent over paper */
          borderBottom: `1px solid ${accentColor}33`,
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
                <Link href="/collections" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                  The Collections
                </Link>
              </li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>
                  {col.displayName}
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow, display name */}
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16, color: accentColor }}>{col.displayName}</Eyebrow>
          </ScrollReveal>

          {/* H1, SEO title */}
          <ScrollReveal delay={80}>
            <h1
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "var(--text-h1)",
                fontWeight:    400,
                letterSpacing: "-0.025em",
                lineHeight:    1.08,
                marginBottom:  20,
                maxWidth:      720,
              }}
            >
              {col.seoH1}
            </h1>
          </ScrollReveal>

          {/* Promise line, italic lead */}
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle:  "italic",
                fontWeight: 300,
                fontSize:   "var(--text-h3)",
                color:      accentColor,
                marginBottom: 32,
                maxWidth:   640,
                lineHeight: 1.3,
              }}
            >
              {col.promiseLine}
            </p>
          </ScrollReveal>

          {/* CTA in header */}
          <ScrollReveal delay={220}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href={`/contact?occasion=${col.slug}`}
                className="btn btn-gold"
                style={{ background: accentColor, borderColor: accentColor }}
              >
                Request this Collection
              </Link>
              <Button href="/contact" variant="ghost">
                Talk to us first →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── COLLECTION HERO PHOTO ─── */}
      <div className="container" style={{ paddingTop: "clamp(32px, 5vw, 56px)", paddingBottom: 0 }}>
        <NishawImage
          src={`/images/collections/${col.slug}.jpg`}
          alt={`${col.seoH1} - Nishaw corporate gifts`}
          aspect="16:9"
          caption={col.displayName}
        />
      </div>

      {/* ── WHAT'S INSIDE ─── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 40 }}>
              <Eyebrow style={{ marginBottom: 12 }}>What&apos;s inside</Eyebrow>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "var(--text-body-lg)",
                  color:      "var(--color-ink-soft)",
                  maxWidth:   560,
                  lineHeight: 1.65,
                }}
              >
                Every item is chosen with intention. These are the kinds of pieces
                that go into a {col.displayName} gift, though every order is curated
                to the brief.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap:                 16,
            }}
          >
            {col.exampleItems.map((item, i) => (
              <ItemCard
                key={item.name}
                name={item.name}
                description={item.description}
                glyph={item.glyph}
                accentColor={accentColor}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR THE MEMORY (callout box) ─── */}
      <section style={{ background: "var(--color-paper)", paddingBottom: "clamp(40px, 6vw, 64px)" }}>
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                border:        `1px dashed ${accentColor}55`,
                borderRadius:  "var(--radius-card)",
                padding:       "clamp(28px, 4vw, 48px)",
                background:    `${accentColor}06`,
                maxWidth:      760,
                position:      "relative",
              }}
            >
              {/* Large quote mark */}
              <span
                aria-hidden="true"
                style={{
                  position:   "absolute",
                  top:        -16,
                  left:       28,
                  fontFamily: "var(--font-heading)",
                  fontSize:   "clamp(3rem, 6vw, 5rem)",
                  color:      accentColor,
                  opacity:    0.25,
                  lineHeight: 1,
                  fontWeight: 300,
                }}
              >
                &ldquo;
              </span>

              <Eyebrow style={{ marginBottom: 16, color: accentColor }}>
                For the memory
              </Eyebrow>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle:  "italic",
                  fontWeight: 300,
                  fontSize:   "var(--text-h4)",
                  color:      "var(--color-ink)",
                  lineHeight: 1.6,
                }}
              >
                {col.forTheMemory}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MINI-GRID (labelled stats) ─── */}
      <section
        style={{
          background:    "var(--color-paper-deep)",
          borderTop:     "1px solid var(--color-gold-soft)",
          borderBottom:  "1px solid var(--color-gold-soft)",
          padding:       "clamp(40px, 6vw, 64px) 0",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 24 }}>At a glance</Eyebrow>
          </ScrollReveal>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap:                 12,
            }}
          >
            <ScrollReveal delay={0}>
              <StatBlock label="Personalisation"  value={col.personalisation} accentColor={accentColor} />
            </ScrollReveal>
            <ScrollReveal delay={70}>
              <StatBlock label="Typical budget"   value={col.budgetBand}      accentColor={accentColor} />
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <StatBlock label="Ideal quantity"   value={col.idealQuantity}   accentColor={accentColor} />
            </ScrollReveal>
            <ScrollReveal delay={210}>
              <StatBlock label="Lead time"        value={col.leadTime}        accentColor={accentColor} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SEO BODY ─── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "minmax(0, 680px) 1fr",
              gap:                 "clamp(40px, 6vw, 80px)",
              alignItems:          "start",
            }}
          >
            {/* Body text */}
            <ScrollReveal>
              <div>
                {col.seoBody.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily:   "var(--font-body)",
                      fontSize:     "var(--text-body-lg)",
                      color:        "var(--color-ink-soft)",
                      lineHeight:   1.78,
                      marginBottom: i < col.seoBody.split("\n\n").length - 1 ? 24 : 0,
                    }}
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Sidebar: related collections */}
            <ScrollReveal delay={120}>
              <aside style={{ position: "sticky", top: 96 }}>
                <Eyebrow style={{ marginBottom: 20 }}>Other collections</Eyebrow>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {getAllSlugs()
                    .filter((s) => s !== slug)
                    .slice(0, 5)
                    .map((s) => {
                      const related = getCollection(s)!;
                      return (
                        <Link
                          key={s}
                          href={`/collections/${s}`}
                          className="link-draw"
                          style={{
                            fontFamily:  "var(--font-body)",
                            fontSize:    "var(--text-body-sm)",
                            color:       "var(--color-ink-soft)",
                            padding:     "11px 0",
                            borderBottom:"1px solid var(--color-ink-faint)",
                            display:     "block",
                          }}
                        >
                          {related.displayName}
                        </Link>
                      );
                    })}
                  <Link
                    href="/collections"
                    className="link-draw"
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "var(--text-body-sm)",
                      color:         "var(--color-gold)",
                      paddingTop:    12,
                      letterSpacing: "0.04em",
                      display:       "block",
                    }}
                  >
                    See all nine →
                  </Link>
                </div>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─── */}
      <div className="container"><Divider variant="diamond" /></div>

      <section
        className="section-py"
        style={{
          background: "var(--color-paper-deep)",
          textAlign:  "center",
        }}
      >
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>{col.displayName}</Eyebrow>
            <h2
              style={{
                fontFamily:    "var(--font-heading)",
                fontStyle:     "italic",
                fontWeight:    300,
                fontSize:      "var(--text-h2)",
                letterSpacing: "-0.02em",
                marginBottom:  20,
              }}
            >
              {col.promiseLine}
            </h2>
            <p
              style={{
                fontFamily:  "var(--font-body)",
                fontSize:    "var(--text-body-lg)",
                color:       "var(--color-ink-soft)",
                lineHeight:  1.65,
                marginBottom: 36,
              }}
            >
              Tell us the occasion. We&apos;ll take care of everything else.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href={`/contact?occasion=${col.slug}`}
                className="btn btn-gold btn-lg"
                style={{ background: accentColor, borderColor: accentColor }}
              >
                Request this Collection
              </Link>
              <Button href="/collections" variant="ghost" size="lg">
                Browse all collections
              </Button>
            </div>

            {/* Contact row */}
            <div
              style={{
                marginTop:  32,
                display:    "flex",
                gap:        24,
                justifyContent: "center",
                flexWrap:   "wrap",
              }}
            >
              <a href="mailto:hello@nishaw.com" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                hello@nishaw.com
              </a>
              <a
                href="https://wa.me/919090232242?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20corporate%20gifting"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-gold)" }}
              >
                WhatsApp →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
