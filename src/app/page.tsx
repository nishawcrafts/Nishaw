import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection }  from "@/components/home/HeroSection";
import { GoldSeal }     from "@/components/home/GoldSeal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Divider }      from "@/components/ui/Divider";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Button }       from "@/components/ui/Button";
import { accentValues } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Nishaw, Premium & Bespoke Corporate Gifting India",
  description:
    "Say more than thank you. Curated and custom-made corporate gifts for clients, teams and enterprises across India. 500+ gifts delivered. Pan-India logistics. GST invoicing.",
  openGraph: {
    title: "Nishaw, Premium & Bespoke Corporate Gifting",
    description:
      "Say more than thank you. Reserved for the remarkable. Luxury corporate gifting, done beautifully.",
    url: "https://nishaw.com",
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1080, alt: "Nishaw, a gift tied with gold silk ribbon" }],
  },
};

/* ── Collections data ──────────────────────────────────────────────────── */
const collections = [
  { name: "First Light",       slug: "welcome-kits",        accent: "pine"       as const, promise: "Make day one unforgettable." },
  { name: "The Long Game",     slug: "milestone-gifts",     accent: "sapphire"   as const, promise: "Reward the years, not just the results." },
  { name: "Standing Ovation",  slug: "rewards-recognition", accent: "gold"       as const, promise: "For work that deserves applause." },
  { name: "The Inner Circle",  slug: "client-vip-gifts",    accent: "plum"       as const, promise: "For the clients you never want to lose." },
  { name: "Season of Light",   slug: "festive-diwali-gifts",accent: "terracotta" as const, promise: "Diwali, done beautifully." },
  { name: "The Corner Office", slug: "executive-gifts",     accent: "sapphire"   as const, promise: "Gifts with a boardroom pedigree." },
  { name: "Warm Regards",      slug: "farewell-gifts",      accent: "plum"       as const, promise: "Goodbyes, thank-yous and quiet gratitude." },
  { name: "Grand Gatherings",  slug: "event-gifting",       accent: "pine"       as const, promise: "Hundreds of gifts, one flawless impression." },
  { name: "House of Bespoke",  slug: "bespoke-hampers",     accent: "gold"       as const, promise: "Dreamt up with you, made only for them." },
];

/* ── Steps data ─────────────────────────────────────────────────────────── */
const steps = [
  {
    num:  "01",
    title:"Tell us the story",
    body: "Who is this for? What do they love? What moment are we marking? The brief shapes every choice we make.",
  },
  {
    num:  "02",
    title:"We curate & design",
    body: "Our team selects items, tests combinations, and presents a curated shortlist aligned to your brief and budget.",
  },
  {
    num:  "03",
    title:"Approve & personalise",
    body: "Choose your packaging, add logo in gold foil or blind emboss, include a handwritten note in our signature style.",
  },
  {
    num:  "04",
    title:"We deliver, everywhere",
    body: "Pan-India white-glove delivery, tracked and timed. For large orders: split shipping to multiple addresses.",
  },
];

/* ── Gift register case studies ─────────────────────────────────────────── */
const caseStudies = [
  {
    eyebrow: "Fintech · 500 kits",
    title:   "Welcome kits for a unicorn's pan-India rollout",
    body:    "Premium leather journals, brass pens, and artisan snack boxes, personalised with each hire's name and city, delivered in a single week across 18 cities.",
    accent:  "pine" as const,
  },
  {
    eyebrow: "Private Banking · Diwali",
    title:   "Festive hampers for 200 senior clients",
    body:    "A curated selection of fine dry fruits, premium sweets, and a hand-painted ceramic diya, all branded with a gold-foil monogram. Zero negative feedback. Several replies.",
    accent:  "terracotta" as const,
  },
  {
    eyebrow: "SaaS Startup · Farewell",
    title:   "Exit gifts for a founding team of twelve",
    body:    "Each box told a chapter of their journey, a custom illustrated card, a personalised keepsake, and a message from the CEO. Not one person left without a lump in their throat.",
    accent:  "plum" as const,
  },
];

/* ═════════════════════════════════════════════════════════════════════════
   HOME PAGE
   ═════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────────────
           1. HERO
         ──────────────────────────────────────────────────────────────────  */}
      <HeroSection />

      {/* ──────────────────────────────────────────────────────────────────
           2. TRUST STRIP
         ──────────────────────────────────────────────────────────────────  */}
      <div
        style={{
          background: "var(--color-paper-deep)",
          borderTop:    "1px solid var(--color-gold-soft)",
          borderBottom: "1px solid var(--color-gold-soft)",
          padding: "20px 0",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "var(--text-eyebrow)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color:         "var(--color-ink-soft)",
              textAlign:     "center",
              lineHeight:    2,
            }}
          >
            Trusted by fast-growing startups, banks &amp; enterprises
            <span style={{ margin: "0 12px", color: "var(--color-gold-soft)" }}>♦</span>
            500+ gifts delivered
            <span style={{ margin: "0 12px", color: "var(--color-gold-soft)" }}>♦</span>
            Pan-India logistics
            <span style={{ margin: "0 12px", color: "var(--color-gold-soft)" }}>♦</span>
            GST invoicing
          </p>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────
           3. THE COLLECTIONS
         ──────────────────────────────────────────────────────────────────  */}
      <section
        id="collections"
        className="section-py"
        style={{ background: "var(--color-paper)" }}
      >
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 56, maxWidth: 600 }}>
              <Eyebrow style={{ marginBottom: 14 }}>Where to Begin</Eyebrow>
              <h2
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "var(--text-h2)",
                  fontStyle:     "italic",
                  fontWeight:    300,
                  marginBottom:  0,
                  letterSpacing: "-0.02em",
                }}
              >
                Nine ways to be remembered.
              </h2>
            </div>
          </ScrollReveal>

          {/* Collections grid */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
              gap:                 20,
            }}
          >
            {collections.map(({ name, slug, accent, promise }, i) => {
              const accentColor = accentValues[accent];
              return (
                <ScrollReveal key={slug} delay={Math.min(i % 3, 2) * 80}>
                  <Link
                    href={`/collections/${slug}`}
                    style={{ display: "block", height: "100%", textDecoration: "none" }}
                  >
                    <div
                      className="card-accent card-hover"
                      style={{
                        borderTopColor: accentColor,
                        padding:        "28px 28px 24px",
                        height:         "100%",
                        display:        "flex",
                        flexDirection:  "column",
                        gap:            10,
                        cursor:         "pointer",
                      }}
                    >
                      {/* Accent dot + name */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span
                          aria-hidden="true"
                          style={{
                            width:        8,
                            height:       8,
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
                          {name}
                        </span>
                      </div>

                      {/* Promise line */}
                      <p
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize:   "var(--text-h4)",
                          fontStyle:  "italic",
                          fontWeight: 300,
                          color:      "var(--color-ink)",
                          lineHeight: 1.3,
                          flex:       1,
                          margin:     0,
                        }}
                      >
                        {promise}
                      </p>

                      {/* Hover CTA */}
                      <div
                        style={{
                          display:    "flex",
                          alignItems: "center",
                          gap:        6,
                          marginTop:  4,
                        }}
                      >
                        <span
                          style={{
                            fontFamily:    "var(--font-body)",
                            fontSize:      "var(--text-body-sm)",
                            color:         "var(--color-ink-soft)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          View collection
                        </span>
                        <span
                          style={{
                            color:      accentColor,
                            fontSize:   12,
                            transition: "transform 200ms ease-out",
                          }}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* See all CTA */}
          <ScrollReveal>
            <div
              style={{
                marginTop:  48,
                textAlign:  "center",
              }}
            >
              <Button href="/collections" variant="ghost">
                See all nine collections →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section break */}
      <div className="container">
        <Divider variant="diamond" />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
           4. BESPOKE BAND
         ──────────────────────────────────────────────────────────────────  */}
      <section
        id="bespoke"
        className="section-py"
        style={{
          background: "var(--color-paper-deep)",
          borderTop:  "1px solid var(--color-gold-soft)",
        }}
      >
        <div className="container">
          <div
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            "clamp(40px, 6vw, 96px)",
              flexWrap:       "wrap",
            }}
          >
            {/* Gold seal */}
            <ScrollReveal>
              <div style={{ flexShrink: 0, display: "flex", justifyContent: "center" }}>
                <GoldSeal size={160} />
              </div>
            </ScrollReveal>

            {/* Text */}
            <div style={{ flex: "1 1 320px" }}>
              <ScrollReveal>
                <Eyebrow style={{ marginBottom: 16 }}>House of Bespoke</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "var(--text-h2)",
                    letterSpacing: "-0.02em",
                    marginBottom:  20,
                    lineHeight:    1.1,
                  }}
                >
                  No two gifts.<br />
                  <em style={{ fontWeight: 300 }}>No two impressions.</em>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={180}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize:   "var(--text-body-lg)",
                    color:      "var(--color-ink-soft)",
                    lineHeight: 1.72,
                    marginBottom: 32,
                    maxWidth:   520,
                  }}
                >
                  Some gifts need to be entirely their own. We start from a blank
                  page, your brand, their personality, the moment you want to
                  mark, and build something that could only exist for this person,
                  from you.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Button href="/bespoke" variant="gold">
                    Start a Bespoke Project
                  </Button>
                  <Button href="/bespoke" variant="ghost-gold">
                    See how it works →
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section break */}
      <div className="container">
        <Divider variant="diamond" />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
           5. HOW WE GIFT
         ──────────────────────────────────────────────────────────────────  */}
      <section
        id="how-we-gift"
        className="section-py"
        style={{ background: "var(--color-paper)" }}
      >
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 56, maxWidth: 520 }}>
              <Eyebrow style={{ marginBottom: 14 }}>The Process</Eyebrow>
              <h2
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "var(--text-h2)",
                  letterSpacing: "-0.02em",
                }}
              >
                How we gift.
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap:                 20,
            }}
          >
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div
                  className="card-dashed"
                  style={{
                    padding:  "32px 28px",
                    height:   "100%",
                    display:  "flex",
                    flexDirection: "column",
                    gap:      16,
                  }}
                >
                  {/* Step number */}
                  <span
                    style={{
                      fontFamily:  "var(--font-heading)",
                      fontSize:    "var(--text-h1)",
                      fontWeight:  300,
                      color:       "var(--color-gold-soft)",
                      lineHeight:  1,
                      display:     "block",
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize:   "var(--text-h4)",
                        marginBottom: 10,
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize:   "var(--text-body-sm)",
                        color:      "var(--color-ink-soft)",
                        lineHeight: 1.72,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA row */}
          <ScrollReveal>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <Button href="/how-we-gift" variant="ghost">
                See full process & timelines →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section break */}
      <div className="container">
        <Divider variant="diamond" />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
           6. THE GIFT REGISTER
         ──────────────────────────────────────────────────────────────────  */}
      <section
        id="gift-register"
        className="section-py"
        style={{ background: "var(--color-paper)" }}
      >
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 56 }}>
              <Eyebrow style={{ marginBottom: 14 }}>The Gift Register</Eyebrow>
              <h2
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "var(--text-h2)",
                  letterSpacing: "-0.02em",
                  maxWidth:      540,
                }}
              >
                Gifts that were actually felt.
              </h2>
            </div>
          </ScrollReveal>

          {/* Case-study cards */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap:                 20,
              marginBottom:        56,
            }}
          >
            {caseStudies.map((cs, i) => {
              const accentColor = accentValues[cs.accent];
              return (
                <ScrollReveal key={cs.title} delay={i * 100}>
                  <div
                    className="card-accent"
                    style={{
                      borderTopColor: accentColor,
                      padding:        "32px 28px",
                      height:         "100%",
                      display:        "flex",
                      flexDirection:  "column",
                      gap:            12,
                    }}
                  >
                    <span
                      style={{
                        fontFamily:    "var(--font-body)",
                        fontSize:      "var(--text-eyebrow)",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color:         accentColor,
                      }}
                    >
                      {cs.eyebrow}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize:   "var(--text-h4)",
                        lineHeight: 1.25,
                        color:      "var(--color-ink)",
                      }}
                    >
                      {cs.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize:   "var(--text-body-sm)",
                        color:      "var(--color-ink-soft)",
                        lineHeight: 1.72,
                        flex:       1,
                      }}
                    >
                      {cs.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Testimonial */}
          <ScrollReveal>
            <div
              style={{
                maxWidth:  680,
                margin:    "0 auto",
                textAlign: "center",
                padding:   "0 16px",
              }}
            >
              {/* Gold quote mark */}
              <span
                aria-hidden="true"
                style={{
                  display:    "block",
                  fontFamily: "var(--font-heading)",
                  fontSize:   "clamp(3rem, 6vw, 5rem)",
                  color:      "var(--color-gold-soft)",
                  lineHeight: 1,
                  marginBottom: 8,
                  fontWeight: 300,
                }}
              >
                &ldquo;
              </span>
              <blockquote>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle:  "italic",
                    fontWeight: 300,
                    fontSize:   "var(--text-h3)",
                    color:      "var(--color-ink)",
                    lineHeight: 1.4,
                    marginBottom: 24,
                  }}
                >
                  Nishaw understood what we needed before we could articulate
                  it ourselves. The gifts arrived perfectly, and so did the
                  feeling.
                </p>
                <footer
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "var(--text-body-sm)",
                    color:         "var(--color-ink-soft)",
                    letterSpacing: "0.04em",
                  }}
                >
                 , Priya S.,&nbsp;
                  <cite style={{ fontStyle: "italic" }}>
                    Chief People Officer
                  </cite>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <Button href="/gift-register" variant="ghost">
                Read more stories →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
           7. CLOSING BAND
         ──────────────────────────────────────────────────────────────────  */}
      <section
        id="closing"
        className="section-py"
        style={{
          background:   "var(--color-paper-deep)",
          borderTop:    "1px solid var(--color-gold-soft)",
          textAlign:    "center",
        }}
      >
        <div className="container" style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Script header */}
          <ScrollReveal>
            <span
              className="script"
              style={{
                display:     "block",
                fontSize:    "var(--text-script)",
                color:       "var(--color-gold)",
                marginBottom: 16,
              }}
            >
              One last thing.
            </span>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal>
            <div style={{ margin: "8px auto 32px", width: 48, borderTop: "1px solid var(--color-gold-soft)" }} />
          </ScrollReveal>

          {/* Closing line */}
          <ScrollReveal delay={100}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle:  "italic",
                fontWeight: 300,
                fontSize:   "var(--text-h3)",
                color:      "var(--color-ink)",
                lineHeight: 1.4,
                marginBottom: 40,
              }}
            >
              A gift is the shortest sentence that says &ldquo;you matter.&rdquo;<br />
              Let&apos;s write yours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/contact" variant="gold" size="lg">
                Start a Conversation
              </Button>
              <Button href="/collections" variant="ghost" size="lg">
                Explore Collections
              </Button>
            </div>
          </ScrollReveal>

          {/* Contact details */}
          <ScrollReveal delay={240}>
            <div
              style={{
                marginTop:  40,
                display:    "flex",
                justifyContent: "center",
                gap:        "clamp(16px, 4vw, 40px)",
                flexWrap:   "wrap",
              }}
            >
              <a
                href="mailto:hello@nishaw.com"
                className="link-draw"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "var(--text-body-sm)",
                  color:      "var(--color-ink-soft)",
                }}
              >
                hello@nishaw.com
              </a>
              <a
                href="tel:+919090232242"
                className="link-draw"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "var(--text-body-sm)",
                  color:      "var(--color-ink-soft)",
                }}
              >
                +91 9090232242
              </a>
              <a
                href="https://wa.me/919090232242?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20corporate%20gifting"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "var(--text-body-sm)",
                  color:      "var(--color-gold)",
                }}
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
