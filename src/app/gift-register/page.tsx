import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Divider }      from "@/components/ui/Divider";
import { Button }       from "@/components/ui/Button";
import { accentValues } from "@/lib/tokens";
import { NishawImage }  from "@/components/ui/NishawImage";

export const metadata: Metadata = {
  title: "Corporate Gifting Case Studies",
  description:
    "Real stories from Nishaw's gifting work: welcome kits, Diwali hampers, farewell memory books, and executive gifts. See the brief, what we made, and the moment it created.",
  openGraph: {
    title: "The Gift Register | Nishaw",
    description: "Corporate gifting case studies. The brief, the gift, and the moment it created.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "Gift Register", item: "https://nishaw.com/gift-register" },
  ],
};

/* ── Case studies data ─────────────────────────────────────────────────── */
const studies = [
  {
    accent:      "pine"       as const,
    imageSlug:   "fintech-welcome-kits",
    eyebrow:     "Fintech Startup · Employee Onboarding · 500 kits",
    heading:    "The welcome that travelled to 18 cities",
    brief:
      "A Series C fintech was expanding pan-India. Five hundred new hires across 18 cities in a single month. The founders wanted a gift that said something real about the kind of company they were building, before any new hire had attended a single meeting.",
    made:
      "Premium leather journals with each new hire's name and city in gold foil. Brass pen sets in navy cloth rolls. Artisan snack boxes with regional produce chosen for each city. A note from the CEO, printed on cotton paper in our signature style.",
    moment:
      "A Bangalore new hire posted a photograph of her kit on LinkedIn the evening of day one. Forty-seven colleagues commented. The CEO shared it. The company's employer brand page saw a significant traffic spike that week. Three candidates mentioned the post during interviews the following month.",
    metrics:    ["500 kits", "18 cities", "7 working days"],
    testimonial: null,
  },
  {
    accent:      "terracotta" as const,
    imageSlug:   "private-bank-diwali",
    eyebrow:     "Private Bank · Diwali · 200 VIP client hampers",
    heading:    "The Diwali that nobody put away",
    brief:
      "A private bank wanted to send Diwali hampers to 200 of their most senior clients. The brief was clear: nothing that looks like it came from a supplier's catalogue. Their clients had received corporate gifts from institutions across the world.",
    made:
      "A cloth-lined wooden box with a hand-fitted insert. Premium dry fruits sourced from specific farms. Artisan mithai from a 90-year-old confectionery. Four hand-painted diyas from a Rajasthan artisan collective, each with a typed card describing the maker. All packaged with a wax-sealed enclosure card.",
    moment:
      "Three senior clients called their relationship managers to comment on the gift. One said it was the only Diwali gift they had received that year worth keeping on the table. Another asked, by name, who had chosen it.",
    metrics:    ["200 hampers", "3 cities", "zero negative feedback"],
    testimonial: "This is the only Diwali gift this year I did not pass along to someone else.",
  },
  {
    accent:      "plum"       as const,
    imageSlug:   "saas-memory-books",
    eyebrow:     "SaaS Company · Farewell · 12 custom memory books",
    heading:    "The goodbye that made twelve people cry",
    brief:
      "A Series A SaaS company's founding team of twelve was dissolving after an acquisition. The founders wanted to give each person something that acknowledged what they had built together. The instruction was simple: make them feel seen.",
    made:
      "Twelve custom illustrated memory books, each unique. Each contained illustrated scenes from the company's specific journey, hand-drawn vignettes of team events and milestones, a letter from the founders, and collected messages from the whole team. Bound in cloth and presented in a linen sleeve.",
    moment:
      "Every person on the team messaged the founders the day the gifts arrived. One posted a photograph with the caption: 'I didn't expect to feel so seen.' The founders forwarded the message to us without context. We understood.",
    metrics:    ["12 unique books", "10 working days", "100% of team responded"],
    testimonial: "I didn't expect to feel so seen.",
  },
  {
    accent:      "sapphire"   as const,
    imageSlug:   "vc-fund-lp-gifts",
    eyebrow:     "VC Fund · Executive Gifting · 10 LP thank-yous",
    heading:    "The fund anniversary gifts that got a reply",
    brief:
      "A mid-sized VC fund was closing its latest fund and wanted to thank ten limited partners. The recipients were senior leaders at family offices and institutional investors who had seen every variety of corporate gift.",
    made:
      "Ten identical but personalised gifts. A premium single-malt whisky in a custom sleeve with the fund's closing date. A set of sterling silver cufflinks with a motif drawn from the fund's mark. A letter from the general partner, printed on the firm's letterhead, sealed with a custom wax seal in the fund's colour.",
    moment:
      "One LP replied by email. The subject line was: 'The gift.' They appreciated the level of consideration. Another LP mentioned the gift at the next advisory board meeting, unprompted.",
    metrics:    ["10 gifts", "Rs. 35,000 per gift", "same-city hand delivery"],
    testimonial: "The level of consideration was apparent from the moment it arrived.",
  },
  {
    accent:      "gold"       as const,
    imageSlug:   "fmcg-recognition",
    eyebrow:     "FMCG Company · Quarterly Recognition · 45 recipients",
    heading:    "When recognition attendance went from 60% to 100%",
    brief:
      "A large FMCG company wanted to redesign their quarterly recognition programme. Previously, winners received a printed certificate and a branded mug. The CHRO felt this was not commensurate with the achievements being recognised.",
    made:
      "A tiered recognition gifting catalogue. Gold tier: hand-cut crystal trophy with a personalised citation, plus a leather portfolio. Silver tier: premium fountain pen set and a curated hamper. Bronze tier: monogrammed stationery and artisan snacks. All delivered by a Nishaw team member in Mumbai.",
    moment:
      "Recognition event attendance rose from 60 percent to 100 percent in the first quarter of the new programme. Six winners shared photographs on their personal LinkedIn pages. The CHRO received a note from a gold-tier recipient that began: 'I have worked here for eleven years. That was the first time I felt properly seen.'",
    metrics:    ["3 gift tiers", "45 recipients", "Q1 2025"],
    testimonial: "That was the first time I felt properly seen.",
  },
];

/* ── Story card component ─────────────────────────────────────────────── */
function StoryCard({
  study,
  index,
}: {
  study: (typeof studies)[0];
  index: number;
}) {
  const accentColor = accentValues[study.accent];

  return (
    <ScrollReveal delay={index * 60}>
      <article
        style={{
          background:    "var(--color-paper)",
          borderRadius:  "var(--radius-card)",
          border:        "1px solid var(--color-gold-soft)",
          borderTopColor: accentColor,
          borderTopWidth: 3,
          overflow:      "hidden",
        }}
      >
        {/* Case study photo */}
        <NishawImage
          src={`/images/register/${study.imageSlug}.jpg`}
          alt={`${study.heading} - Nishaw corporate gifting case study`}
          aspect="16:9"
          caption="Case study photo"
          style={{
            borderRadius: 0,
            border:       "none",
            borderBottom: "1px solid var(--color-gold-soft)",
          }}
        />

        {/* Header */}
        <div style={{ padding: "32px 32px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: accentColor, flexShrink: 0 }} aria-hidden />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-eyebrow)", letterSpacing: "0.15em", textTransform: "uppercase", color: accentColor }}>
              {study.eyebrow}
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h3)", fontStyle: "italic", fontWeight: 300, lineHeight: 1.25, marginBottom: 0 }}>
            {study.heading}
          </h2>
        </div>

        {/* Three narrative sections */}
        <div style={{ padding: "0 32px 28px" }}>
          {[
            { label: "The brief",    body: study.brief  },
            { label: "What we made", body: study.made   },
            { label: "The moment",   body: study.moment },
          ].map(({ label, body }) => (
            <div
              key={label}
              style={{
                paddingTop:   20,
                marginTop:    20,
                borderTop:    "1px solid var(--color-ink-faint)",
              }}
            >
              <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "var(--text-eyebrow)", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-ink-soft)", marginBottom: 10 }}>
                {label}
              </span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics strip */}
        <div
          style={{
            display:        "flex",
            gap:            8,
            flexWrap:       "wrap",
            padding:        "16px 32px",
            borderTop:      "1px solid var(--color-ink-faint)",
            background:     "var(--color-paper-deep)",
          }}
        >
          {study.metrics.map((m) => (
            <span
              key={m}
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "var(--text-eyebrow)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:         "var(--color-ink-soft)",
                background:    "var(--color-paper)",
                border:        "1px solid var(--color-gold-soft)",
                borderRadius:  "var(--radius-sm)",
                padding:       "5px 12px",
              }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Testimonial */}
        {study.testimonial && (
          <div
            style={{
              padding:    "20px 32px 28px",
              borderTop:  "1px solid var(--color-ink-faint)",
              display:    "flex",
              gap:        14,
              alignItems: "flex-start",
            }}
          >
            <span aria-hidden style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: accentColor, lineHeight: 1, fontWeight: 300, flexShrink: 0, marginTop: -4 }}>
              &ldquo;
            </span>
            <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-body-lg)", color: "var(--color-ink)", lineHeight: 1.5, flex: 1 }}>
              {study.testimonial}
            </p>
          </div>
        )}
      </article>
    </ScrollReveal>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
export default function GiftRegisterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HEADER ── */}
      <div
        style={{
          background:   "var(--color-paper-deep)",
          borderBottom: "1px solid var(--color-gold-soft)",
          paddingTop:   "clamp(100px, 14vw, 140px)",
          paddingBottom:"clamp(56px, 8vw, 80px)",
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center" }}>
              <li><Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>Home</Link></li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li><span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>The Gift Register</span></li>
            </ol>
          </nav>

          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>The Gift Register</Eyebrow>
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
              Corporate Gifting Case Studies
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "var(--text-body-lg)",
                color:      "var(--color-ink-soft)",
                lineHeight: 1.65,
                maxWidth:   560,
              }}
            >
              Not portfolios or lookbooks. These are the briefs we received, what
              we made in response, and the moments the gifts created. We share them
              because the story is always the point.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── CASE STUDIES ── */}
      <section className="section-py" style={{ background: "var(--color-paper-deep)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {studies.map((study, i) => (
              <StoryCard key={study.heading} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── CTA ── */}
      <section className="section-py" style={{ background: "var(--color-paper)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 580, margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>Your story, next</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-h2)", letterSpacing: "-0.02em", marginBottom: 20 }}>
              What will yours say?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.65, marginBottom: 36 }}>
              Tell us the occasion. We will build something worth remembering.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-gold btn-lg">Talk to a Gifting Concierge</Link>
              <Button href="/collections" variant="ghost" size="lg">Browse Collections</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
