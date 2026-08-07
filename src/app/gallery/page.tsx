import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Button }       from "@/components/ui/Button";
import { NishawImage }  from "@/components/ui/NishawImage";

export const metadata: Metadata = {
  title: "The Nishaw Look — Premium Corporate Gifting Gallery",
  description:
    "A gallery of Nishaw corporate gifts: welcome kits, bespoke hampers, Diwali gifting, farewell memory books, and more. Every gift individually curated for the recipient and the moment.",
  openGraph: {
    title: "The Nishaw Look | Gallery",
    description: "See what premium corporate gifting looks like when it is done with intention.",
  },
};

const galleryItems = [
  {
    slug: "gallery-01",
    alt: "A Nishaw gift box open on a white marble surface, revealing a leather journal with gold-foil initials beside a brass pen in a navy cloth roll",
    caption: "First Light",
  },
  {
    slug: "gallery-02",
    alt: "Artisan hand-painted diyas arranged in a silk-lined wooden gift box alongside premium mithai from a heritage confectionery",
    caption: "Season of Light",
  },
  {
    slug: "gallery-03",
    alt: "A close-up of a deep emerald wax seal being applied to an ivory enclosure card, a Nishaw signature detail",
    caption: "The finish",
  },
  {
    slug: "gallery-04",
    alt: "Single-malt whisky in a custom Nishaw sleeve beside sterling cufflinks on a dark velvet surface",
    caption: "The Chairman",
  },
  {
    slug: "gallery-05",
    alt: "A stack of premium Nishaw gift boxes tied with champagne ribbon, arranged for a corporate delivery",
    caption: "Grand Gatherings",
  },
  {
    slug: "gallery-06",
    alt: "A monogrammed full-grain leather portfolio open on a dark desk beside a brass pen set in a navy cloth roll",
    caption: "The Corner Office",
  },
  {
    slug: "gallery-07",
    alt: "Close-up of a Nishaw enclosure card on cotton paper, handwritten in ink, sealed with a wax crest",
    caption: "The note",
  },
  {
    slug: "gallery-08",
    alt: "A Nishaw welcome kit laid out flat: journal, pen, snack tray, and branded canvas tote on ivory linen",
    caption: "First Light, flat-lay",
  },
  {
    slug: "gallery-09",
    alt: "A bespoke memory book open at an illustrated spread, showing a team milestone scene hand-drawn by a Nishaw illustrator",
    caption: "Warm Regards",
  },
  {
    slug: "gallery-10",
    alt: "Premium dry fruits sourced from single estates, arranged in a cloth-lined wooden hamper for a Diwali gift",
    caption: "House of Bespoke",
  },
  {
    slug: "gallery-11",
    alt: "Gold foil stamping being applied to a leather journal cover, showing the personalisation process",
    caption: "Made for one",
  },
  {
    slug: "gallery-12",
    alt: "A Nishaw gift delivered to a corporate reception, the outer box in ivory with an emerald ribbon and enclosure card",
    caption: "Delivered",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div
        style={{
          background:    "var(--color-emerald)",
          paddingTop:    "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(56px, 8vw, 80px)",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <li>
                <Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "rgba(251,247,239,0.65)" }}>
                  Home
                </Link>
              </li>
              <li aria-hidden style={{ color: "var(--color-gold)", fontSize: 12 }}>♦</li>
              <li>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "rgba(251,247,239,0.9)" }}>
                  The Nishaw Look
                </span>
              </li>
            </ol>
          </nav>

          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16, color: "var(--color-gold)" }}>The Gallery</Eyebrow>
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
                maxWidth:      640,
                color:         "#FBF7EF",
              }}
            >
              The Nishaw Look.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "var(--text-body-lg)",
                color:      "rgba(251,247,239,0.72)",
                lineHeight: 1.65,
                maxWidth:   520,
              }}
            >
              Each gift is assembled by hand. Each detail is chosen deliberately.
              This is what premium corporate gifting looks like when it is made for someone specific.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── GALLERY GRID ── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap:                 16,
            }}
          >
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.slug} delay={(i % 3) * 60}>
                <NishawImage
                  src={`/images/gallery/${item.slug}.jpg`}
                  alt={item.alt}
                  aspect="1:1"
                  caption={item.caption}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        className="section-py"
        style={{
          background: "var(--color-paper-deep)",
          borderTop:  "1px solid var(--color-gold-soft)",
          textAlign:  "center",
        }}
      >
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <ScrollReveal>
            <span
              className="script"
              style={{
                display:      "block",
                fontSize:     "var(--text-script)",
                color:        "var(--color-gold)",
                marginBottom: 16,
              }}
            >
              Ready to make yours.
            </span>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontSize:     "var(--text-body-lg)",
                color:        "var(--color-ink-soft)",
                lineHeight:   1.65,
                marginBottom: 32,
              }}
            >
              Every gift you see here began with a conversation. Tell us about
              the person, the moment, and the impression you want to leave.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/contact" variant="gold" size="lg">
                Start a Conversation
              </Button>
              <Button href="/collections" variant="ghost" size="lg">
                Browse Collections
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
