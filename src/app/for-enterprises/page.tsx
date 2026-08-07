import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Divider }      from "@/components/ui/Divider";
import { Button }       from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Enterprise Corporate Gifting | Nishaw",
  description:
    "Thoughtful at one. Flawless at five hundred. Enterprise-grade corporate gifting with one account manager, centralised ordering, multi-address delivery, GST invoicing, SLAs, NDAs, and standing briefs. Discuss a programme.",
  openGraph: {
    title: "Enterprise Gifting | Nishaw",
    description: "One account manager. 12 capabilities. Gifting programmes for HR and procurement teams at any scale.",
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

/* ── Enterprise capabilities ─────────────────────────────────────────── */
const benefits = [
  {
    title:     "One account manager",
    body:      "One person who knows your brand, your gifting programme, and your recipients. Available on WhatsApp and email. No ticketing systems, no queues, no rebriefing.",
    glyph:     "✐",
    stat:      "1",
    statLabel: "point of contact",
  },
  {
    title:     "Centralised ordering",
    body:      "Place all orders, across teams, occasions, and cities, from a single account. One approval flow. One consolidated invoice at the end of each cycle.",
    glyph:     "◎",
    stat:      "One",
    statLabel: "account, any scale",
  },
  {
    title:     "Multi-address delivery",
    body:      "Place one order and ship to 500 addresses across India. Individual tracking links, confirmation photographs, and a full delivery summary report.",
    glyph:     "✦",
    stat:      "Pan-India",
    statLabel: "split delivery",
  },
  {
    title:     "Recipient-data management",
    body:      "We securely store and update your recipient database: names, addresses, preferences, dietary notes. Every order is addressed and personalised without re-uploading a spreadsheet.",
    glyph:     "◆",
    stat:      "Secure",
    statLabel: "data handling",
  },
  {
    title:     "Custom branding",
    body:      "We store your logo files, brand colours, approved packaging finish, and messaging templates. Every order ships with consistent, correct branding from day one.",
    glyph:     "◉",
    stat:      "0",
    statLabel: "re-briefing required",
  },
  {
    title:     "GST and PO invoicing",
    body:      "Full tax invoices with HSN codes on every order. B2B buyers receive invoices structured for input-tax-credit claims. PO-based ordering and advance scheduling available.",
    glyph:     "◎",
    stat:      "100%",
    statLabel: "GST compliant",
  },
  {
    title:     "Monthly billing",
    body:      "Consolidate all orders into a single end-of-month invoice. Ideal for HR teams running standing onboarding kits or recognition programmes across 12 months.",
    glyph:     "✐",
    stat:      "Monthly",
    statLabel: "consolidated billing",
  },
  {
    title:     "Standing briefs",
    body:      "Set a gift once for a recurring occasion: monthly onboarding kits, quarterly recognition gifts, festive hampers. Reorders need only a recipient list and a confirmation.",
    glyph:     "◆",
    stat:      "Set once",
    statLabel: "reorder in seconds",
  },
  {
    title:     "Reorder programmes",
    body:      "For enterprises that gift at consistent intervals, we build reorder programmes with locked-in pricing, preferred production slots, and no lead-time surprises.",
    glyph:     "◉",
    stat:      "Priority",
    statLabel: "production slots",
  },
  {
    title:     "NDA and confidentiality",
    body:      "For sensitive gifting programmes (M&A announcements, leadership transitions, board-level gifting), we sign mutual NDAs before any brief is shared.",
    glyph:     "✦",
    stat:      "NDA",
    statLabel: "on request",
  },
  {
    title:     "SLA and delivery guarantee",
    body:      "We commit to agreed delivery windows in writing. For large programmes, we define SLAs upfront covering production timelines, dispatch dates, and exception resolution.",
    glyph:     "◎",
    stat:      "SLA",
    statLabel: "written commitment",
  },
  {
    title:     "Damage and replacement",
    body:      "Any gift that arrives damaged is replaced at our cost, no questions asked. We photograph every order before dispatch and handle all courier claims internally.",
    glyph:     "✐",
    stat:      "100%",
    statLabel: "replaced if damaged",
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
                  Thoughtful at one.
                  <br />
                  <em style={{ fontWeight: 300, fontStyle: "italic" }}>Flawless at five hundred.</em>
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
                  gifting at scale: one account manager, centralised ordering,
                  multi-address delivery, GST invoicing, monthly billing,
                  standing briefs, and NDAs when you need them.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/contact?occasion=enterprise" className="btn btn-gold btn-lg">
                    Discuss an Enterprise Programme
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
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h2)", letterSpacing: "-0.02em", maxWidth: 540 }}>
                Everything a gifting programme needs.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-ink-soft)", lineHeight: 1.65, maxWidth: 560, marginTop: 16 }}>
                Twelve capabilities, one account. Built so your team never has to chase a courier or rebrief a supplier.
              </p>
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
                Discuss an Enterprise Programme
              </Link>
              <Button href="/how-we-gift" variant="ghost" size="lg">See process details</Button>
            </div>

            {/* Contact row */}
            <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:hello@nishaw.com" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                hello@nishaw.com
              </a>
              <a href="tel:+919090232242" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                +91 9090232242
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
