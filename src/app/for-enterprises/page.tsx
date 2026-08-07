import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Divider }      from "@/components/ui/Divider";
import { Button }       from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Bulk & Enterprise Corporate Gifting Solutions",
  description:
    "Enterprise-grade corporate gifting for HR and procurement teams. Bulk pricing, dedicated account manager, brand-kit storage, multi-address delivery, GST invoicing, and annual gifting calendar management. Request a quote.",
  openGraph: {
    title: "Enterprise Gifting | Nishaw",
    description: "Bulk corporate gifting for HR and procurement teams. Streamlined, branded, and fully managed.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",           item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "For Enterprises", item: "https://nishaw.com/for-enterprises" },
  ],
};

/* ── Enterprise benefits ──────────────────────────────────────────────── */
const benefits = [
  {
    title:  "Volume-Based Pricing",
    body:   "Transparent per-unit cost breakdowns from 50 units upward. Discounts of 10 to 25% on larger volumes. No hidden sourcing fees or handling charges.",
    glyph:  "◎",
    stat:   "10-25%",
    statLabel: "volume discount",
  },
  {
    title:  "Dedicated Account Manager",
    body:   "One person who knows your brand, your gifting programme, and your recipients. Available on WhatsApp and email. No ticketing systems, no queues.",
    glyph:  "✐",
    stat:   "1",
    statLabel: "point of contact",
  },
  {
    title:  "Brand-Kit Storage",
    body:   "We store your logo files, brand colour codes, preferred packaging finish, and approved messaging. Every order from your account ships with consistent, correct branding.",
    glyph:  "◆",
    stat:   "0",
    statLabel: "re-briefing required",
  },
  {
    title:  "Multi-Address Split Shipping",
    body:   "Place one order and ship to fifty addresses across India. We generate individual tracking links, send confirmation photographs, and compile a delivery summary report.",
    glyph:  "✦",
    stat:   "Pan-India",
    statLabel: "split delivery",
  },
  {
    title:  "GST-Compliant Invoicing",
    body:   "Full tax invoices with HSN codes and our GSTIN on every order. B2B buyers receive invoices structured for input tax credit claims. PO-based ordering available.",
    glyph:  "◉",
    stat:   "100%",
    statLabel: "GST compliant",
  },
  {
    title:  "Annual Gifting Calendar",
    body:   "We help you plan the full-year programme: onboarding kits, work anniversaries, Diwali, quarter-end awards, and year-end leadership gifts. Briefed once, managed throughout.",
    glyph:  "◎",
    stat:   "12",
    statLabel: "months planned",
  },
  {
    title:  "Tracking and Reporting",
    body:   "Real-time tracking links for all shipments. After each delivery run, we share a report covering dispatch dates, delivery status, and any exceptions to resolve.",
    glyph:  "✐",
    stat:   "Live",
    statLabel: "delivery tracking",
  },
  {
    title:  "NDAs and Confidentiality",
    body:   "For enterprises with sensitive gifting programmes (M&A announcements, leadership transitions, board-level gifting), we sign mutual NDAs before any brief is shared.",
    glyph:  "◆",
    stat:   "NDA",
    statLabel: "on request",
  },
];

/* ── How enterprise gifting works ────────────────────────────────────── */
const enterpriseSteps = [
  {
    num:   "01",
    title: "Kick-Off Call",
    body:  "We spend 30 to 45 minutes understanding your programme: the occasions, the volumes, the recipient segments, and how your brand should show up in each gift.",
  },
  {
    num:   "02",
    title: "Brand-Kit Onboarding",
    body:  "You share your logo files, brand guidelines, and approved messaging. We build a Nishaw account profile that ensures every order ships with correct, consistent branding.",
  },
  {
    num:   "03",
    title: "Standing Brief Setup",
    body:  "For recurring programmes (monthly onboarding, quarterly recognition), we set up a standing brief. Reorders require a confirmation message and a recipient list.",
  },
  {
    num:   "04",
    title: "Delivery and Reporting",
    body:  "Every order is tracked end-to-end. After each run, you receive a delivery summary report and a single consolidated invoice for your finance team.",
  },
];

/* ── Testimonials ────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:  "Nishaw handled our entire 2024 Diwali gifting across 14 cities. Zero issues and packaging our clients actually commented on.",
    person: "VP of People, Series B Fintech",
    accent: "pine",
  },
  {
    quote:  "Our clients noticed the difference. That is what matters.",
    person: "Head of Client Relations, Private Bank",
    accent: "sapphire",
  },
  {
    quote:  "The quality exceeded what we expected at this price point. And the account management made our team's lives much easier.",
    person: "Chief of Staff, VC-backed SaaS Company",
    accent: "plum",
  },
];

export default function ForEnterprisesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div
        style={{
          background:   "var(--color-paper-deep)",
          borderBottom: "1px solid var(--color-gold-soft)",
          paddingTop:   "clamp(100px, 14vw, 140px)",
          paddingBottom:"clamp(56px, 8vw, 88px)",
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center" }}>
              <li><Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>Home</Link></li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li><span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>For Enterprises</span></li>
            </ol>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 660px) 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "end" }}>
            <div>
              <ScrollReveal>
                <Eyebrow style={{ marginBottom: 16 }}>For Enterprises</Eyebrow>
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
                  Bulk &amp; Enterprise Corporate Gifting Solutions
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p
                  style={{
                    fontFamily:  "var(--font-body)",
                    fontSize:    "var(--text-body-lg)",
                    color:       "var(--color-ink-soft)",
                    lineHeight:  1.72,
                    marginBottom: 36,
                    maxWidth:    560,
                  }}
                >
                  For HR leaders, procurement teams, and the people who manage
                  gifting at scale. Volume pricing, a dedicated account manager,
                  brand-kit storage, multi-address delivery, and the paperwork
                  handled correctly from day one.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/contact?occasion=enterprise" className="btn btn-gold btn-lg">
                    Request an Enterprise Quote
                  </Link>
                  <Button href="/how-we-gift" variant="ghost" size="lg">How it works</Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Stats block */}
            <ScrollReveal delay={200}>
              <div
                style={{
                  border:       "1px solid var(--color-gold-soft)",
                  borderRadius: "var(--radius-card)",
                  padding:      "28px 24px",
                  background:   "var(--color-paper)",
                  display:      "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap:          20,
                }}
              >
                {[
                  { stat: "500+",     label: "Gifts delivered" },
                  { stat: "50+",      label: "Enterprise clients" },
                  { stat: "Pan-India", label: "Delivery coverage" },
                  { stat: "GST",      label: "Fully compliant" },
                ].map(({ stat, label }) => (
                  <div key={label} style={{ borderBottom: "1px solid var(--color-ink-faint)", paddingBottom: 16 }}>
                    <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "var(--text-h3)", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1, marginBottom: 4 }}>
                      {stat}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", letterSpacing: "0.04em" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── BENEFITS GRID ────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 52 }}>
              <Eyebrow style={{ marginBottom: 14 }}>What You Get</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em", maxWidth: 480 }}>
                Everything a gifting programme needs.
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap:                 20,
            }}
          >
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={(i % 3) * 70}>
                <div
                  className="card"
                  style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 16 }}
                >
                  {/* Glyph + stat row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                    <div
                      style={{
                        width: 44, height: 44,
                        borderRadius:  "50%",
                        border:        "1.5px solid var(--color-gold)",
                        background:    "var(--color-paper-deep)",
                        display:       "flex",
                        alignItems:    "center",
                        justifyContent:"center",
                        flexShrink:    0,
                      }}
                    >
                      <span style={{ color: "var(--color-gold)", fontSize: 17 }}>{benefit.glyph}</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "var(--text-h3)", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1 }}>
                        {benefit.stat}
                      </span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-soft)" }}>
                        {benefit.statLabel}
                      </span>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h4)", lineHeight: 1.2 }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.72, flex: 1 }}>
                    {benefit.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper-deep)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <Eyebrow style={{ marginBottom: 14 }}>The Enterprise Journey</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em" }}>
                How it works for your team.
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
            {enterpriseSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div
                  className="card-dashed"
                  style={{ padding: "32px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", fontWeight: 300, color: "var(--color-gold-soft)", lineHeight: 1 }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h4)", lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.72, flex: 1 }}>
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--color-paper)" }}>
        <div className="container">
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 48 }}>Heard from Clients</Eyebrow>
          </ScrollReveal>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap:                 20,
            }}
          >
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <figure
                  className="card"
                  style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 20, margin: 0 }}
                >
                  <span aria-hidden style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", color: "var(--color-gold-soft)", lineHeight: 1, fontWeight: 300 }}>
                    &ldquo;
                  </span>
                  <blockquote style={{ flex: 1, margin: 0 }}>
                    <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-h4)", color: "var(--color-ink)", lineHeight: 1.5 }}>
                      {t.quote}
                    </p>
                  </blockquote>
                  <figcaption style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", letterSpacing: "0.04em" }}>
                    {t.person}
                  </figcaption>
                </figure>
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
        <div className="container" style={{ maxWidth: 620, margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16 }}>Enterprise Gifting</Eyebrow>
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
              Let us build your gifting programme.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.65, marginBottom: 36 }}>
              Share the scope of what you need. We will send a proposal within
              24 hours and have a kick-off call within the week.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/contact?occasion=enterprise" className="btn btn-gold btn-lg">
                Request an Enterprise Quote
              </Link>
              <Button href="/how-we-gift" variant="ghost" size="lg">See process details</Button>
            </div>

            {/* Contact row */}
            <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:hello@nishaw.com" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                hello@nishaw.com
              </a>
              <a href="tel:+919090232242" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                +91 9090 232 242
              </a>
              <a
                href="https://wa.me/919090232242?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20enterprise%20corporate%20gifting"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-gold)" }}
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
