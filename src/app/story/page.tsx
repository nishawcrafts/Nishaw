import type { Metadata } from "next";
import Link from "next/link";
import { SplitHeading }  from "@/components/ui/SplitHeading";
import { ScrollReveal }  from "@/components/ui/ScrollReveal";
import { Eyebrow }       from "@/components/ui/Eyebrow";
import { Divider }       from "@/components/ui/Divider";
import { Button }        from "@/components/ui/Button";
import { NishawImage }   from "@/components/ui/NishawImage";

export const metadata: Metadata = {
  title: "About Nishaw: Our Story, Philosophy & the People Behind the Gifts",
  description:
    "Nishaw was built on a single belief: that the gift reflects the giver. Read the founders' note, our craft philosophy, how we source, and the meaning of the name.",
  openGraph: {
    title: "About Nishaw",
    description: "The founders' note, craft philosophy, sourcing, and the meaning of the name.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",         item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "Our Story",    item: "https://nishaw.com/story" },
  ],
};

/* ── Pillars ────────────────────────────────────────────────────────────── */
const pillars = [
  {
    title: "The gift reflects the giver",
    body:  "When you send someone a beautiful, considered gift, you are communicating something about your company's values, your attention to detail, and the way you see the people you work with. A generic gift says nothing. A gift that was clearly chosen says everything. This is the principle at the centre of everything we do.",
  },
  {
    title: "Curation over catalogue",
    body:  "We do not maintain a catalogue in the traditional sense. Every brief is a new question, and we begin with the person who will receive the gift. The items follow. This means slower conversations, more questions, and occasionally longer lead times. It also means better gifts.",
  },
  {
    title: "Scale without compromise",
    body:  "We believe that a company can send five hundred welcome kits and have each one feel personal. That a Diwali hamper dispatched at volume can still arrive with the quality of thought that a person notices. Scale does not have to mean generic. It never should.",
  },
];

/* ── Makers ─────────────────────────────────────────────────────────────── */
const makers = [
  { name: "A leather workshop in Dharavi", detail: "Run by the third generation of the same family. We visited twice before our first order." },
  { name: "A confectionery in Old Delhi", detail: "Ninety-two years old. Their kaju katli is still made by hand, one tray at a time." },
  { name: "A ceramicist in Jaipur",       detail: "Her pieces take three weeks to fire. We plan around her schedule, not the other way around." },
  { name: "Small-batch food producers",   detail: "Scattered across India, found through referrals and months of tasting. We visit before we onboard." },
];

/* ═══════════════════════════════════════════════════════════════════════ */
export default function StoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HERO HEADER with split-text H1 ── */}
      <div
        style={{
          background:    "var(--color-paper-deep)",
          borderBottom:  "1px solid var(--color-gold-soft)",
          paddingTop:    "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(64px, 10vw, 100px)",
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center" }}>
              <li><Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>Home</Link></li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li><span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>Our Story</span></li>
            </ol>
          </nav>

          <Eyebrow style={{ marginBottom: 20 }}>The Nishaw Story</Eyebrow>

          {/* Split-text H1 - client component */}
          <SplitHeading
            text="About Nishaw."
            as="h1"
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "var(--text-h1)",
              fontWeight:    400,
              letterSpacing: "-0.025em",
              lineHeight:    1.08,
              marginBottom:  28,
            }}
          />

          <div
            style={{
              opacity:   0,
              animation: "fadeSlideUp 500ms ease-out 800ms forwards",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle:  "italic",
                fontWeight: 300,
                fontSize:   "var(--text-h3)",
                color:      "var(--color-gold)",
                lineHeight: 1.3,
                maxWidth:   540,
              }}
            >
              Reserved for the remarkable.
            </p>
          </div>
        </div>
      </div>

      {/* ── FOUNDERS' NOTE ── */}
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
            <ScrollReveal>
              <div>
                <Eyebrow style={{ marginBottom: 24 }}>A note from us</Eyebrow>

                {/* Letter content */}
                {[
                  "We started Nishaw because we kept receiving gifts that felt like they had nothing to do with us. Corporate festivals of abundance: towers of branded biscuits, shrink-wrapped hampers, boxes of things no one had chosen with any particular person in mind. We had been on the giving side too. We knew how it felt to dispatch a thousand identical gifts and hope for the best.",
                  "We believed there was a different way to gift at scale. That the size of an order did not have to determine the quality of thought behind each piece. That a business could send five hundred welcome kits and have each one feel personal. That a Diwali hamper could arrive with the kind of care that a person notices.",
                  "Nishaw was built to prove that.",
                  "We began with a small network of makers we trusted: a leather workshop we visited twice before placing our first order, a confectionery in Old Delhi that has been making the same mithai since 1932, a ceramicist in Jaipur whose work takes three weeks to fire. We built slowly, on purpose, because we believed that the quality of the gift begins with the quality of what goes into it.",
                  "We are still building. Each order we take teaches us something. Each brief makes us better at asking the right questions. We do not have a catalogue that limits the conversation. We have a set of values that shapes it.",
                  "The gift reflects the giver. We want yours to reflect well.",
                ].map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily:   "var(--font-body)",
                      fontSize:     "var(--text-body-lg)",
                      color:        "var(--color-ink-soft)",
                      lineHeight:   1.78,
                      marginBottom: i < 5 ? 24 : 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Side column: name meaning */}
            <ScrollReveal delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 96 }}>
                {/* Founders portrait */}
                <NishawImage
                  src="/images/story/founders.jpg"
                  alt="The founders of Nishaw seated at a workshop table, surrounded by gift materials, laughing"
                  aspect="4:5"
                  caption="The founders"
                />

              <div
                style={{
                  border:       "1px dashed var(--color-gold-soft)",
                  borderRadius: "var(--radius-card)",
                  padding:      "32px 28px",
                  background:   "var(--color-paper-deep)",
                }}
              >
                <span
                  className="script"
                  style={{ display: "block", fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--color-gold)", marginBottom: 12, lineHeight: 1 }}
                >
                  Nishaw
                </span>
                <Eyebrow style={{ marginBottom: 14 }}>The name</Eyebrow>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                  From the Urdu <em>nishan</em>: a sign, a mark, an impression. It is the word for the trace something leaves behind.
                </p>
                <div style={{ margin: "20px 0", borderTop: "1px solid var(--color-gold-soft)" }} />
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                  We named our company after that trace, because the best gifts do exactly this: they leave a mark. Not always visible. Always felt.
                </p>
              </div>
              </div>{/* end outer flex col */}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── CRAFT PHILOSOPHY ── */}
      <section className="section-py" style={{ background: "var(--color-paper-deep)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 56, maxWidth: 600 }}>
              <Eyebrow style={{ marginBottom: 14 }}>What we believe</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em" }}>
                The craft philosophy.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 80}>
                <div
                  style={{
                    display:      "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap:          "clamp(24px, 4vw, 56px)",
                    padding:      "36px 0",
                    borderBottom: i < pillars.length - 1 ? "1px solid var(--color-gold-soft)" : "none",
                    alignItems:   "start",
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-h4)", color: "var(--color-ink)", lineHeight: 1.3 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                    {pillar.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── SOURCING AND MAKERS ── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap:                 "clamp(40px, 6vw, 72px)",
              alignItems:          "start",
            }}
          >
            <ScrollReveal>
              <div>
                <Eyebrow style={{ marginBottom: 16 }}>Where things come from</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em", marginBottom: 24 }}>
                  Sourcing and makers.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72, marginBottom: 20 }}>
                  We work with a small, curated network of Indian makers, artisans, and producers. Every maker we work with was found through a referral or a discovery we made ourselves. We visit before we onboard.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                  We are not a marketplace. We are a small team with strong opinions about what goes into a Nishaw gift, and we defend those opinions at every brief.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
                {makers.map((maker, i) => (
                  <li
                    key={maker.name}
                    style={{
                      padding:      "20px 0",
                      borderBottom: i < makers.length - 1 ? "1px solid var(--color-ink-faint)" : "none",
                    }}
                  >
                    <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "var(--text-body-lg)", color: "var(--color-ink)", marginBottom: 6, lineHeight: 1.2 }}>
                      {maker.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.65 }}>
                      {maker.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ── */}
      <section
        style={{
          background:    "var(--color-paper-deep)",
          borderTop:     "1px solid var(--color-gold-soft)",
          borderBottom:  "1px solid var(--color-gold-soft)",
          padding:       "clamp(40px, 6vw, 72px) 0",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow style={{ marginBottom: 16 }}>Sustainability</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em", marginBottom: 20 }}>
                What we are committed to.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72, marginBottom: 20 }}>
                We are committed to reducing the environmental footprint of gifting. All our outer packaging options include FSC-certified recycled board, compostable crinkle paper, and unbleached kraft tissue. We offer seed-paper enclosure cards that can be planted. We discourage single-use plastics in every order.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                We are not perfect at this yet. We tell clients honestly when a beautiful option is not also the most sustainable one, and we work together to find the best balance. The conversation matters to us, even when the answer is complicated.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SIGN-OFF ── */}
      <section className="section-py" style={{ background: "var(--color-paper)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 520, margin: "0 auto" }}>
          <ScrollReveal>
            {/* Gold hairline */}
            <div style={{ width: 48, borderTop: "1px solid var(--color-gold-soft)", margin: "0 auto 32px" }} />

            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72, marginBottom: 40 }}>
              If you have a gift to give and are not sure where to begin, start with us. The conversation is free and the first answer is always a question.
            </p>

            {/* Script sign-off */}
            <span
              className="script"
              style={{ display: "block", fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--color-gold)", lineHeight: 1, marginBottom: 16 }}
            >
              With warmth and intention,
            </span>
            <span
              className="script"
              style={{ display: "block", fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "var(--color-ink-soft)", lineHeight: 1.2, marginBottom: 24 }}
            >
              The Nishaw Team
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-eyebrow)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-soft)" }}>
              August 2025
            </span>

            <div style={{ marginTop: 48, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-gold">Talk to a Gifting Concierge</Link>
              <Button href="/collections" variant="ghost">Explore our work</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
