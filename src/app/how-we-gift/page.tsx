import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Divider }      from "@/components/ui/Divider";
import { Button }       from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How Corporate Gifting Works with Nishaw",
  description:
    "From brief to delivery: how Nishaw handles corporate gifting. Timelines, minimum orders, personalisation, pan-India logistics, GST invoicing, and reorder support.",
  openGraph: {
    title: "How We Gift | Nishaw",
    description: "A transparent look at how Nishaw manages every corporate gifting order from first conversation to final delivery.",
  },
};

/* ── FAQ data ──────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: "How long does an order take from start to delivery?",
    answer:
      "Most curated orders take 7 to 10 working days from the moment you approve the curation brief. Large-volume orders of 500 units or more need 14 to 21 working days. Bespoke commissions with custom packaging require 3 to 4 weeks. Festive season orders, particularly around Diwali, benefit from a 4-week lead time to guarantee quality and delivery.",
  },
  {
    question: "Is there a minimum order quantity?",
    answer:
      "For most curated collections, there is no minimum. A single gift can be ordered. Conference and event gifting starts at 100 units. Custom branded packaging, including logo foiling on boxes, has a minimum of 25 to 50 units depending on the process. Fully bespoke hampers can be made for a single recipient.",
  },
  {
    question: "Can every gift be personalised?",
    answer:
      "Yes. Recipient name printing, logo foiling, monogramming, and handwritten note cards are available across almost every product and order size. Some processes have minimums: gold-foil logo on a custom outer box requires 25 or more units. We will always tell you what is and is not possible for your specific order before you commit.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes. We deliver to all major cities and tier-2 towns across India through our courier partners. For Mumbai, Pune, and Bangalore, white-glove hand delivery is available for select orders. We also manage split shipping across multiple addresses for large orders. International delivery is available on request.",
  },
  {
    question: "How does GST invoicing work?",
    answer:
      "We are GST-registered and provide a complete tax invoice with HSN codes on every order. B2B buyers receive invoices with our GSTIN and can claim input tax credit where applicable. Our GSTIN is available on request before ordering. Payment terms are typically 50% advance and 50% before dispatch, with adjustments for enterprise clients.",
  },
  {
    question: "Can we see a sample before placing a large order?",
    answer:
      "Yes, and for orders of 50 units or more we actively recommend a sample approval step. We assemble one prototype at no additional cost, photograph it in full, and, for clients in Mumbai and Pune, offer a physical sample for in-person review before production begins.",
  },
  {
    question: "What happens if a gift arrives damaged?",
    answer:
      "Every shipment is insured and we take full responsibility for the condition of the gift on arrival. If a piece arrives damaged, we replace it at no cost. We ask that damage be photographed and reported to us within 48 hours of receipt so we can raise the claim and arrange replacement promptly.",
  },
  {
    question: "Can we reorder the same curation?",
    answer:
      "Yes. We save all approved briefs and can reorder from a simple confirmation message. For recurring programmes such as quarterly awards, monthly onboarding kits, or annual festive gifting, we set up a standing brief so that reorders require less than an hour of your time.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. For enterprise clients with sensitive gifting programmes, we are happy to sign a mutual NDA before sharing details of the brief or programme. Contact us and we will send our standard agreement or review yours.",
  },
];

/* ── FAQPage JSON-LD ──────────────────────────────────────────────────── */
const faqPageLd = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type":         "Question",
    name:            f.question,
    acceptedAnswer:  { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",         item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "How We Gift",  item: "https://nishaw.com/how-we-gift" },
  ],
};

/* ── Journey phases ────────────────────────────────────────────────────── */
const phases = [
  {
    num:   "01",
    title: "The Brief",
    body:  "You tell us the occasion, the recipient or group, the approximate budget, and any constraints. We listen and ask questions until the brief is sharp.",
    meta:  "Day 0",
  },
  {
    num:   "02",
    title: "Curation and Review",
    body:  "We build a shortlist of items and, where relevant, a packaging concept, and present it for your review. One round of revision is included as standard.",
    meta:  "Day 1 to 2",
  },
  {
    num:   "03",
    title: "Approval and Personalisation",
    body:  "You sign off the curation. We collect personalisation details: names, designations, messages, and any logo or monogram files. Production begins immediately after.",
    meta:  "Day 2 to 3",
  },
  {
    num:   "04",
    title: "Assembly and Quality Check",
    body:  "Every piece is assembled by hand, inspected, and photographed before it is packed for dispatch. Nothing leaves without a photograph on file.",
    meta:  "Day 4 to 8",
  },
  {
    num:   "05",
    title: "Delivery and Confirmation",
    body:  "Gifts are dispatched with full tracking. Delivery confirmation photographs are sent to you for large or VIP orders. All shipments are insured.",
    meta:  "Day 7 to 10",
  },
];

/* ── Info blocks ───────────────────────────────────────────────────────── */
const infoBlocks = [
  {
    title: "Timeline at a glance",
    items: [
      { label: "Curated orders",           value: "7 to 10 working days" },
      { label: "Large volume (500+ units)", value: "14 to 21 working days" },
      { label: "Bespoke with custom box",  value: "3 to 4 weeks" },
      { label: "Festive season",           value: "Book 4 weeks early" },
    ],
  },
  {
    title: "Minimum order guidance",
    items: [
      { label: "Single curated gifts",     value: "No minimum" },
      { label: "Event or conference kits", value: "100 units" },
      { label: "Logo foil on custom box",  value: "25 units" },
      { label: "Custom printed packaging", value: "50 units" },
    ],
  },
  {
    title: "Personalisation limits",
    items: [
      { label: "Recipient name (print or foil)", value: "1 unit minimum" },
      { label: "Handwritten note card",           value: "1 unit minimum" },
      { label: "Logo blind-emboss on box",        value: "25 units" },
      { label: "Fully custom outer box",          value: "50 units" },
    ],
  },
];

export default function HowWeGiftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HEADER ───────────────────────────────────────────────────── */}
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
              <li><span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>How We Gift</span></li>
            </ol>
          </nav>

          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>The Process</Eyebrow>
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
                maxWidth:      720,
              }}
            >
              How Corporate Gifting Works with Nishaw
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily:  "var(--font-body)",
                fontSize:    "var(--text-body-lg)",
                color:       "var(--color-ink-soft)",
                lineHeight:  1.72,
                maxWidth:    580,
              }}
            >
              From first conversation to final delivery: a transparent account of
              how we handle every order, what to expect at each stage, and
              everything you need to know before you begin.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── THE JOURNEY ──────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <Eyebrow style={{ marginBottom: 14 }}>The Journey</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em" }}>
                What happens, step by step.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.num} delay={i * 60}>
                <div
                  style={{
                    display:             "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap:                 "0 28px",
                    alignItems:          "start",
                    paddingBottom:       32,
                    borderBottom:        i < phases.length - 1 ? "1px solid var(--color-ink-faint)" : "none",
                    marginBottom:        i < phases.length - 1 ? 32 : 0,
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize:   "var(--text-h3)",
                      fontWeight: 300,
                      color:      "var(--color-gold-soft)",
                      lineHeight: 1.2,
                    }}
                  >
                    {phase.num}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h4)", marginBottom: 10, lineHeight: 1.2 }}>
                      {phase.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72, maxWidth: 560 }}>
                      {phase.body}
                    </p>
                  </div>

                  {/* Meta */}
                  <div style={{ textAlign: "right", paddingTop: 4 }}>
                    <span
                      style={{
                        fontFamily:    "var(--font-body)",
                        fontSize:      "var(--text-eyebrow)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color:         "var(--color-gold)",
                        whiteSpace:    "nowrap",
                      }}
                    >
                      {phase.meta}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── INFO BLOCKS: timelines / MOQ / personalisation ───────────── */}
      <section className="section-py" style={{ background: "var(--color-paper-deep)" }}>
        <div className="container">
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 40 }}>At a Glance</Eyebrow>
          </ScrollReveal>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap:                 20,
            }}
          >
            {infoBlocks.map((block, bi) => (
              <ScrollReveal key={block.title} delay={bi * 80}>
                <div
                  style={{
                    border:       "1px solid var(--color-gold-soft)",
                    borderRadius: "var(--radius-card)",
                    padding:      "28px 24px",
                    background:   "var(--color-paper)",
                    height:       "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily:   "var(--font-heading)",
                      fontSize:     "var(--text-h4)",
                      marginBottom: 20,
                      lineHeight:   1.2,
                    }}
                  >
                    {block.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {block.items.map(({ label, value }) => (
                      <div
                        key={label}
                        style={{
                          display:       "flex",
                          justifyContent:"space-between",
                          alignItems:    "baseline",
                          gap:           12,
                          padding:       "11px 0",
                          borderBottom:  "1px solid var(--color-ink-faint)",
                        }}
                      >
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                          {label}
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)", fontWeight: 500, textAlign: "right" }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── LOGISTICS ────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap:                 "clamp(40px, 6vw, 72px)",
            }}
          >
            <ScrollReveal>
              <div>
                <Eyebrow style={{ marginBottom: 16 }}>Logistics</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em", marginBottom: 20 }}>
                  Getting it there.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72, marginBottom: 16 }}>
                  We deliver to all major cities and tier-2 towns across India. For
                  large orders with split delivery to multiple addresses, we manage
                  the full logistics chain from a single point of contact.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Pan-India courier delivery, fully tracked",
                    "White-glove hand delivery in Mumbai, Pune, Bangalore (select orders)",
                    "Split shipping to multiple addresses on a single order",
                    "Tracking links shared for all shipments",
                    "Delivery confirmation photographs for VIP orders",
                    "International delivery on request",
                    "All shipments insured",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink-soft)", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 3, fontSize: 10 }}>♦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div>
                <Eyebrow style={{ marginBottom: 16 }}>GST and Invoicing</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em", marginBottom: 20 }}>
                  Clean paperwork.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72, marginBottom: 20 }}>
                  Every order comes with a complete GST tax invoice including HSN
                  codes, our GSTIN, and an itemised breakdown. B2B buyers can claim
                  input tax credit on all eligible purchases.
                </p>
                <div
                  style={{
                    border:       "1px dashed var(--color-gold-soft)",
                    borderRadius: "var(--radius-sm)",
                    padding:      "20px 20px",
                    background:   "var(--color-paper-deep)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.72, marginBottom: 12 }}>
                    Standard payment terms are 50% advance on order confirmation
                    and 50% before dispatch. For enterprise accounts, we offer
                    monthly consolidated invoicing and extended credit terms.
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                    We accept bank transfer (NEFT / RTGS / IMPS), UPI, and cheque.
                    PO-based ordering is available for large enterprises.
                  </p>
                </div>

                <div style={{ marginTop: 28 }}>
                  <Eyebrow style={{ marginBottom: 14 }}>Reorder Support</Eyebrow>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.72 }}>
                    Every approved brief is saved. Reorders can be placed with a
                    single message. For recurring programmes, we set up a standing
                    brief that makes each cycle faster than the last.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── FAQ ACCORDION ─────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper-deep)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <Eyebrow style={{ marginBottom: 14 }}>Questions</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em" }}>
                Everything you might ask.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: 760 }}>
            <FaqAccordion items={faqs} accentColor="var(--color-gold)" />
          </div>

          <ScrollReveal>
            <p style={{ marginTop: 36, fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink-soft)" }}>
              Something else?{" "}
              <a href="mailto:hello@nishaw.com" className="link-draw" style={{ color: "var(--color-ink)" }}>
                Write to us
              </a>
              {" "}and we will reply the same day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)", borderTop: "1px solid var(--color-gold-soft)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 580, margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>Ready to begin?</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-h2)", letterSpacing: "-0.02em", marginBottom: 20 }}>
              Start with a brief.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.65, marginBottom: 36 }}>
              Tell us who, what, and when. We will handle everything after that.
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
