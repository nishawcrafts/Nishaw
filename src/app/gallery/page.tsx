import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Button }       from "@/components/ui/Button";
import { NishawImage }  from "@/components/ui/NishawImage";

export const metadata: Metadata = {
  title: "The Nishaw Look — Premium Corporate Gifting Gallery",
  description:
    "A gallery of Nishaw corporate gifts: welcome kits, bespoke hampers, Diwali gifting, client gifts, and more. Each gift individually curated, each detail chosen deliberately.",
  openGraph: {
    title:       "The Nishaw Look | Gallery",
    description: "See what premium corporate gifting looks like when it is done with intention.",
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   IMAGE SLOTS
   Drop real photos at /public/images/gallery/<filename>
   Each group has 6 slots; aspect ratios alternate to create visual rhythm.
   ──────────────────────────────────────────────────────────────────────── */
type Aspect = "1:1" | "4:5" | "3:2";

interface GallerySlot {
  file:    string;
  alt:     string;
  caption: string;
  aspect:  Aspect;
}

const groups: Array<{
  id:      string;
  label:   string;
  tagline: string;
  slots:   GallerySlot[];
}> = [
  {
    id:      "gifts",
    label:   "Gifts",
    tagline: "The complete picture, before it is wrapped.",
    slots: [
      {
        file:    "gifts-01.jpg",
        alt:     "A Nishaw welcome kit laid out flat: leather journal, brass pen in cloth roll, artisan snack tray and branded canvas tote on ivory linen",
        caption: "First Light",
        aspect:  "4:5",
      },
      {
        file:    "gifts-02.jpg",
        alt:     "Hand-painted Rajasthani diyas in a silk-lined wooden box alongside premium mithai from a 90-year-old confectionery, for a Diwali gift",
        caption: "Season of Light",
        aspect:  "3:2",
      },
      {
        file:    "gifts-03.jpg",
        alt:     "Single-malt whisky in a custom Nishaw sleeve beside sterling silver cufflinks on a dark velvet surface, part of The Chairman curation",
        caption: "The Chairman",
        aspect:  "1:1",
      },
      {
        file:    "gifts-04.jpg",
        alt:     "A bespoke farewell memory book open to an illustrated spread, showing a team milestone scene hand-drawn by a Nishaw illustrator",
        caption: "Warm Regards",
        aspect:  "4:5",
      },
      {
        file:    "gifts-05.jpg",
        alt:     "Premium dry fruits sourced from single estates, arranged in a cloth-lined wooden hamper for a corporate Diwali gift",
        caption: "House of Bespoke",
        aspect:  "1:1",
      },
      {
        file:    "gifts-06.jpg",
        alt:     "A stack of premium corporate gift boxes with champagne ribbon and an ivory enclosure card, prepared for a large enterprise order",
        caption: "Grand Gatherings",
        aspect:  "3:2",
      },
    ],
  },
  {
    id:      "details",
    label:   "Details",
    tagline: "The things that cannot be unseen.",
    slots: [
      {
        file:    "details-01.jpg",
        alt:     "Close-up of a deep emerald wax seal being applied to an ivory cotton-paper enclosure card, a signature Nishaw detail",
        caption: "The seal",
        aspect:  "1:1",
      },
      {
        file:    "details-02.jpg",
        alt:     "Gold foil initials being pressed into a full-grain leather journal cover using a custom brass die",
        caption: "Gold foil, up close",
        aspect:  "4:5",
      },
      {
        file:    "details-03.jpg",
        alt:     "A handwritten enclosure note on cotton paper, written in ink, beside the wax seal crest and a champagne ribbon spool",
        caption: "The note",
        aspect:  "3:2",
      },
      {
        file:    "details-04.jpg",
        alt:     "A solid brass pen in an open navy cloth roll, showing the weight and finish of a Nishaw writing instrument selection",
        caption: "The pen",
        aspect:  "1:1",
      },
      {
        file:    "details-05.jpg",
        alt:     "Blind emboss of a company logo on the cover of a dark forest-green gift box, showing texture without ink or foil",
        caption: "Blind emboss",
        aspect:  "4:5",
      },
      {
        file:    "details-06.jpg",
        alt:     "A champagne silk ribbon being tied around an ivory gift box, hands visible, overhead shot on a marble surface",
        caption: "The ribbon",
        aspect:  "3:2",
      },
    ],
  },
  {
    id:      "packaging",
    label:   "Packaging",
    tagline: "The exterior is part of the gift.",
    slots: [
      {
        file:    "packaging-01.jpg",
        alt:     "A Nishaw outer box in ivory with gold debossed wordmark and an emerald ribbon, seen from above on a dark surface",
        caption: "The Nishaw box",
        aspect:  "3:2",
      },
      {
        file:    "packaging-02.jpg",
        alt:     "Inside of a Nishaw gift box: ivory tissue paper folded precisely over contents, with a small emerald wax seal on the fold",
        caption: "The first reveal",
        aspect:  "1:1",
      },
      {
        file:    "packaging-03.jpg",
        alt:     "A row of Nishaw boxes in three sizes, stacked neatly, showing the consistent ivory-and-gold brand across volumes",
        caption: "Every size",
        aspect:  "4:5",
      },
      {
        file:    "packaging-04.jpg",
        alt:     "A bespoke wooden hamper with a cloth lining and Nishaw branded tissue paper, partially filled with artisan goods",
        caption: "The hamper",
        aspect:  "3:2",
      },
      {
        file:    "packaging-05.jpg",
        alt:     "A Nishaw gift box with a branded kraft paper outer sleeve, tied with twine and a small wax-sealed tag",
        caption: "The sleeve",
        aspect:  "1:1",
      },
      {
        file:    "packaging-06.jpg",
        alt:     "A Nishaw rigid gift box interior showing custom foam inserts holding a leather portfolio and a pen set in their exact positions",
        caption: "Custom interior",
        aspect:  "4:5",
      },
    ],
  },
  {
    id:      "unboxing",
    label:   "Unboxing",
    tagline: "The moment the gift becomes the memory.",
    slots: [
      {
        file:    "unboxing-01.jpg",
        alt:     "A Nishaw gift delivered to a corporate reception desk, outer box in ivory with an emerald ribbon and enclosure card visible",
        caption: "Arrived",
        aspect:  "4:5",
      },
      {
        file:    "unboxing-02.jpg",
        alt:     "Hands lifting the lid off a Nishaw gift box, revealing the first layer of ivory tissue paper and a wax-sealed fold",
        caption: "The lift",
        aspect:  "1:1",
      },
      {
        file:    "unboxing-03.jpg",
        alt:     "A recipient reading a handwritten Nishaw enclosure note, gift box open in the foreground, office setting, warm light",
        caption: "The note, read",
        aspect:  "3:2",
      },
      {
        file:    "unboxing-04.jpg",
        alt:     "A leather journal with gold-foil initials placed on a desk after unboxing, photographed beside the open Nishaw box",
        caption: "After the ribbon",
        aspect:  "4:5",
      },
      {
        file:    "unboxing-05.jpg",
        alt:     "A Diwali gift hamper fully unboxed, diyas and mithai arranged on a marble surface, photographed from above",
        caption: "The spread",
        aspect:  "1:1",
      },
      {
        file:    "unboxing-06.jpg",
        alt:     "A Nishaw gift box photographed empty after unboxing, showing the quality of the interior tissue and the branded base",
        caption: "The box itself",
        aspect:  "3:2",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   JSON-LD structured data
   ──────────────────────────────────────────────────────────────────────── */
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://nishaw.com/gallery" },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────────────── */
export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ── HEADER BAND ── */}
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
                <Link
                  href="/"
                  className="link-draw"
                  style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "rgba(251,247,239,0.65)" }}
                >
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
                lineHeight:    1.08,
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
                marginBottom: 32,
              }}
            >
              Each gift is assembled by hand. Each detail is chosen deliberately.
              This is what premium corporate gifting looks like when it is made for someone specific.
            </p>

            {/* Group nav pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {groups.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "var(--text-body-sm)",
                    color:         "rgba(251,247,239,0.8)",
                    border:        "1px solid rgba(198,161,91,0.4)",
                    borderRadius:  "var(--radius-sm)",
                    padding:       "6px 14px",
                    textDecoration:"none",
                    transition:    "border-color 150ms, color 150ms",
                    letterSpacing: "0.02em",
                  }}
                >
                  {g.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── GALLERY GROUPS ── */}
      {groups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className="section-py"
          style={{
            background: gi % 2 === 0 ? "var(--color-paper)" : "var(--color-paper-deep)",
            borderTop:  "1px solid var(--color-gold-soft)",
          }}
        >
          <div className="container">
            {/* Group header */}
            <ScrollReveal>
              <div
                style={{
                  display:        "flex",
                  alignItems:     "baseline",
                  gap:            "clamp(16px, 3vw, 32px)",
                  marginBottom:   "clamp(32px, 5vw, 52px)",
                  flexWrap:       "wrap",
                }}
              >
                <h2
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "var(--text-h2)",
                    fontWeight:    300,
                    letterSpacing: "-0.02em",
                    lineHeight:    1,
                  }}
                >
                  {group.label}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle:  "italic",
                    fontWeight: 300,
                    fontSize:   "var(--text-body-lg)",
                    color:      "var(--color-ink-soft)",
                    margin:     0,
                  }}
                >
                  {group.tagline}
                </p>
              </div>
            </ScrollReveal>

            {/* Masonry-style grid using CSS columns */}
            <div
              style={{
                columnCount: 3,
                columnGap:   16,
              }}
              className="gallery-masonry"
            >
              {group.slots.map((slot, si) => (
                <ScrollReveal key={slot.file} delay={(si % 3) * 60}>
                  <div
                    style={{
                      breakInside:   "avoid",
                      marginBottom:  16,
                      display:       "block",
                    }}
                  >
                    <NishawImage
                      src={`/images/gallery/${slot.file}`}
                      alt={slot.alt}
                      aspect={slot.aspect}
                      caption={slot.caption}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA BAND ── */}
      <section
        className="section-py"
        style={{
          background: "var(--color-emerald-deep)",
          textAlign:  "center",
        }}
      >
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <ScrollReveal>
            <span
              aria-hidden
              style={{
                display:      "block",
                fontFamily:   "var(--font-heading)",
                fontSize:     "var(--text-h3)",
                color:        "var(--color-gold)",
                opacity:      0.4,
                marginBottom: 8,
              }}
            >
              ♦
            </span>
            <span
              className="script"
              style={{
                display:      "block",
                fontSize:     "var(--text-script)",
                color:        "var(--color-gold)",
                marginBottom: 20,
              }}
            >
              Every gift here began with a conversation.
            </span>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontSize:     "var(--text-body-lg)",
                color:        "rgba(251,247,239,0.72)",
                lineHeight:   1.65,
                marginBottom: 36,
              }}
            >
              Tell us about the person, the occasion, and the impression you want to leave.
              We will take it from there.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/contact" variant="gold" size="lg">
                Talk to a Gifting Concierge
              </Button>
              <Button href="/collections" variant="ghost" size="lg">
                Browse Collections
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Responsive masonry ── */}
      <style>{`
        @media (max-width: 900px) {
          .gallery-masonry { column-count: 2 !important; }
        }
        @media (max-width: 540px) {
          .gallery-masonry { column-count: 1 !important; }
        }
        /* Smooth scroll for in-page group anchors */
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}
