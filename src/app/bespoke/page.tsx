import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Divider }      from "@/components/ui/Divider";
import { Button }       from "@/components/ui/Button";
import { NishawImage }  from "@/components/ui/NishawImage";

export const metadata: Metadata = {
  title: "Bespoke Corporate Gifting & Custom Hampers",
  description:
    "Made for the few who expect more. Nishaw designs and produces fully custom corporate gift hampers in India. No two gifts. No two impressions. Brief us today.",
  openGraph: {
    title: "House of Bespoke | Nishaw",
    description: "Fully custom corporate gifting. Every element designed from scratch for your recipient.",
  },
};

/* BreadcrumbList JSON-LD */
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "Bespoke", item: "https://nishaw.com/bespoke" },
  ],
};

/* ── 5 steps data ──────────────────────────────────────────────────────── */
const steps = [
  {
    num:   "01",
    title: "The Brief",
    body:  "A conversation by call, email, or WhatsApp about who this is for, what moment you are marking, and what you want them to feel. The shorter the brief, the more questions we will ask.",
    icon:  "✐",
  },
  {
    num:   "02",
    title: "Concept and Moodboard",
    body:  "Within 48 hours, we share a curated moodboard: tone, materials, palette, and two or three possible directions. You choose one, refine, or send us back to think differently.",
    icon:  "◎",
  },
  {
    num:   "03",
    title: "Curation and Sampling",
    body:  "We source every item, assemble a prototype, and share photographs of the actual pieces before production begins. Nothing goes into the box that you have not approved.",
    icon:  "✦",
  },
  {
    num:   "04",
    title: "Personalisation",
    body:  "Logo in gold foil or blind emboss on the outer box. Wax-sealed enclosure card. Handwritten note in our signature style. Custom ribbon colour. Whatever the brief calls for.",
    icon:  "◆",
  },
  {
    num:   "05",
    title: "White-Glove Delivery",
    body:  "Hand-delivered for local orders. For outstation gifts: double-walled cartons with internal bracing, full tracking, tamper-evident sealing, and a delivery confirmation photograph.",
    icon:  "◉",
  },
];

/* ── What we can customise ─────────────────────────────────────────────── */
const customiseList = [
  "The outer packaging: box, trunk, fabric bag, or crate",
  "Every item inside (no catalogue, no compromise)",
  "All branding touches: logo, monogram, colour, finish",
  "The enclosure note, written by us in your voice",
  "Ribbon, tissue, crinkle paper, and filler colour",
  "Sustainable options: bamboo, recycled board, seed paper",
  "Delivery timing, method, and presentation",
  "Language: bilingual notes in English and a regional language",
];

/* ── Signature touches ─────────────────────────────────────────────────── */
const touches = [
  {
    title: "Gold-Foil or Blind-Emboss Logo",
    body:  "Your brand mark on the outer box or inner lid, pressed in champagne gold foil or as a tactile blind emboss on kraft or cloth. Minimum 25 units.",
    glyph: "✦",
  },
  {
    title: "Wax Seal",
    body:  "A handmade wax seal in your brand colour on the enclosure card or ribbon knot. Each one is unique. Each one adds weight to the moment.",
    glyph: "◆",
  },
  {
    title: "Bilingual Notes",
    body:  "Enclosure notes written and printed in English alongside Hindi or a regional language of your choice. Particularly meaningful for pan-India gifting.",
    glyph: "✐",
  },
  {
    title: "Sustainable Packaging",
    body:  "Outer boxes in FSC-certified recycled board, filler in compostable crinkle paper, tissue in unbleached kraft. Optional seed-paper enclosure cards that can be planted.",
    glyph: "◎",
  },
];

export default function BespokePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HERO HEADER ──────────────────────────────────────────────── */}
      <div
        style={{
          background:   "var(--color-paper-deep)",
          borderBottom: "1px solid var(--color-gold-soft)",
          paddingTop:   "clamp(100px, 14vw, 140px)",
          paddingBottom:"clamp(56px, 8vw, 88px)",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center" }}>
              <li><Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>Home</Link></li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li><span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>Bespoke</span></li>
            </ol>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 640px) 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "end" }}>
            <div>
              <ScrollReveal>
                <Eyebrow style={{ marginBottom: 16 }}>House of Bespoke</Eyebrow>
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
                  Bespoke Corporate Gifting &amp; Custom Hampers
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle:  "italic",
                    fontWeight: 300,
                    fontSize:   "var(--text-h3)",
                    color:      "var(--color-gold)",
                    marginBottom: 32,
                    lineHeight: 1.3,
                  }}
                >
                  Made for the few who expect more.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <p
                  style={{
                    fontFamily:  "var(--font-body)",
                    fontSize:    "var(--text-body-lg)",
                    color:       "var(--color-ink-soft)",
                    lineHeight:  1.72,
                    marginBottom: 36,
                    maxWidth:    520,
                  }}
                >
                  House of Bespoke begins with a blank page and a conversation. No
                  catalogue. No pre-set options. Every element of the gift designed
                  from scratch for the person who will receive it, in your name.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={280}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/contact?occasion=bespoke" className="btn btn-gold btn-lg">
                    Start a Bespoke Project
                  </Link>
                  <Button href="/collections/bespoke-hampers" variant="ghost" size="lg">
                    View the collection
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Decorative side stat */}
            <ScrollReveal delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 8 }}>
                {[
                  { stat: "100%", label: "Custom to brief" },
                  { stat: "48h",  label: "First moodboard" },
                  { stat: "0",    label: "Catalogue items" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <span
                      style={{
                        display:    "block",
                        fontFamily: "var(--font-heading)",
                        fontSize:   "var(--text-h2)",
                        fontWeight: 300,
                        color:      "var(--color-gold)",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {stat}
                    </span>
                    <span
                      style={{
                        fontFamily:    "var(--font-body)",
                        fontSize:      "var(--text-eyebrow)",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color:         "var(--color-ink-soft)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── 5 ILLUSTRATED STEPS ──────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 56 }}>
              <Eyebrow style={{ marginBottom: 14 }}>The Process</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em" }}>
                Five steps from idea to impression.
              </h2>
            </div>
          </ScrollReveal>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <div
                  style={{
                    display:      "grid",
                    gridTemplateColumns: "80px 56px 1fr",
                    gap:          "0 24px",
                    alignItems:   "start",
                    paddingBottom: 40,
                    position:     "relative",
                  }}
                >
                  {/* Step number */}
                  <span
                    style={{
                      fontFamily:  "var(--font-heading)",
                      fontSize:    "var(--text-h2)",
                      fontWeight:  300,
                      color:       "var(--color-gold-soft)",
                      lineHeight:  1,
                      textAlign:   "right",
                      paddingRight: 8,
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Icon circle + connector */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div
                      style={{
                        width:          52,
                        height:         52,
                        borderRadius:   "50%",
                        border:         "1.5px solid var(--color-gold)",
                        background:     "var(--color-paper-deep)",
                        display:        "flex",
                        alignItems:     "center",
                        justifyContent: "center",
                        flexShrink:     0,
                        zIndex:         1,
                      }}
                    >
                      <span style={{ color: "var(--color-gold)", fontSize: 20, fontFamily: "var(--font-heading)" }}>
                        {step.icon}
                      </span>
                    </div>
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div
                        style={{
                          width:      1,
                          flex:       1,
                          minHeight:  40,
                          background: "linear-gradient(to bottom, var(--color-gold-soft), transparent)",
                          marginTop:  4,
                        }}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div style={{ paddingTop: 12 }}>
                    <h3
                      style={{
                        fontFamily:  "var(--font-heading)",
                        fontSize:    "var(--text-h4)",
                        marginBottom: 10,
                        lineHeight:  1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize:   "var(--text-body-lg)",
                        color:      "var(--color-ink-soft)",
                        lineHeight: 1.72,
                        maxWidth:   560,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── WHAT WE CAN CUSTOMISE ────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap:                 "clamp(40px, 6vw, 80px)",
              alignItems:         "start",
            }}
          >
            <ScrollReveal>
              <div>
                <Eyebrow style={{ marginBottom: 16 }}>Full Control</Eyebrow>
                <h2
                  style={{
                    fontFamily:   "var(--font-heading)",
                    fontSize:     "var(--text-h2)",
                    letterSpacing:"-0.02em",
                    marginBottom: 20,
                  }}
                >
                  What we can customise.
                </h2>
                <p
                  style={{
                    fontFamily:  "var(--font-body)",
                    fontSize:    "var(--text-body-lg)",
                    color:       "var(--color-ink-soft)",
                    lineHeight:  1.72,
                    marginBottom: 0,
                  }}
                >
                  Everything. That is the point of bespoke. There is no list of
                  options, no pre-set packaging, no catalogue. The gift is built
                  entirely from your brief and our expertise.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
                {customiseList.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display:       "flex",
                      alignItems:    "flex-start",
                      gap:           14,
                      padding:       "14px 0",
                      borderBottom:  "1px solid var(--color-ink-faint)",
                      fontFamily:    "var(--font-body)",
                      fontSize:      "var(--text-body)",
                      color:         "var(--color-ink-soft)",
                      lineHeight:    1.5,
                    }}
                  >
                    <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2, fontSize: 12 }}>♦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── GALLERY ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-paper-deep)", padding: "clamp(40px,6vw,80px) 0" }}>
        <div className="container">
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>The Craft</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em", marginBottom: 32 }}>
              Every detail, deliberate.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <NishawImage
              src="/images/bespoke/gallery-hero.jpg"
              alt="A Nishaw bespoke gifting flat-lay: an open premium gift box revealing a leather journal with gold-foil initials and a brass pen, surrounded by tissue paper, a wax seal stamp, and artisan snacks on cream linen"
              aspect="3:2"
              caption="Bespoke gallery"
              style={{ maxHeight: 560 }}
            />
          </ScrollReveal>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── SIGNATURE TOUCHES ────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <Eyebrow style={{ marginBottom: 14 }}>The Finishing Layer</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em" }}>
                Signature touches.
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap:                 20,
            }}
          >
            {touches.map((touch, i) => (
              <ScrollReveal key={touch.title} delay={i * 80}>
                <div
                  className="card"
                  style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <div
                    style={{
                      width: 48, height: 48,
                      borderRadius:  "50%",
                      border:        "1.5px solid var(--color-gold)",
                      background:    "var(--color-paper-deep)",
                      display:       "flex",
                      alignItems:    "center",
                      justifyContent:"center",
                    }}
                  >
                    <span style={{ color: "var(--color-gold)", fontSize: 18, fontFamily: "var(--font-heading)" }}>
                      {touch.glyph}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h4)", lineHeight: 1.2 }}>
                    {touch.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.72, flex: 1 }}>
                    {touch.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: "var(--color-paper-deep)", borderTop: "1px solid var(--color-gold-soft)", textAlign: "center" }}
      >
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <ScrollReveal>
            <span className="script" style={{ display: "block", fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--color-gold)", marginBottom: 16 }}>
              Start a project.
            </span>
            <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-h3)", color: "var(--color-ink)", lineHeight: 1.4, marginBottom: 36 }}>
              Tell us who this is for and what you want them to feel. We will take it from there.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/contact?occasion=bespoke" className="btn btn-gold btn-lg">
                Start a Bespoke Project
              </Link>
              <Button href="/how-we-gift" variant="ghost" size="lg">See how it works</Button>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
              Or reach us directly on{" "}
              <a href="https://wa.me/919090232242?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20a%20bespoke%20gift" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>
                WhatsApp
              </a>
              {" "}or{" "}
              <a href="mailto:hello@nishaw.com" className="link-draw" style={{ color: "var(--color-ink-soft)" }}>
                hello@nishaw.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
