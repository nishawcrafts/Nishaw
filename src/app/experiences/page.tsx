import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow }      from "@/components/ui/Eyebrow";
import { Button }       from "@/components/ui/Button";
import { NishawImage }  from "@/components/ui/NishawImage";

/* ─────────────────────────────────────────────────────────────────────────
   SEO
   ──────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Nishaw Experiences — Team-Building Gift Kits & Employee Engagement Gifts",
  description:
    "Workshop-in-a-box kits for virtual and in-person team sessions: pottery, candle-making, coffee tasting, chocolate-making, art, and more. Growth journals, mindfulness decks, and recognition kits for HR and L&D teams across India. Employee engagement gifts that do something.",
  keywords: [
    "employee engagement gifts India",
    "team-building gift kits India",
    "workshop-in-a-box India",
    "virtual team experience gift",
    "HR gifting India",
    "L&D gifting",
    "growth journal corporate gift",
    "mindfulness gift corporate",
    "recognition kit India",
  ],
  openGraph: {
    title:       "Nishaw Experiences — Gifts That Do Something",
    description: "Workshop-in-a-box kits, growth journals, and recognition kits for teams across India. Shippable, hostable, unforgettable.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: "https://nishaw.com" },
    { "@type": "ListItem", position: 2, name: "Experiences", item: "https://nishaw.com/experiences" },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────────────────── */

/* Workshop kits — the hero product line */
const workshops = [
  {
    slug:    "pottery",
    name:    "The Pottery Session",
    tagline: "Make something imperfect, together.",
    body:    "Each kit ships with air-dry clay, tools, a glazing set, and a step-by-step guide. Nishaw can host a 90-minute virtual session where everyone builds the same object, from 300 km apart.",
    items:   ["Air-dry clay, 500g per person", "Sculpting tools in a cloth roll", "Glaze palette with applicators", "Step-by-step instruction booklet", "Enclosure card with session link"],
    from:    "\u20b91,800",
    accent:  "terracotta",
    aspect:  "4:5" as const,
  },
  {
    slug:    "candle",
    name:    "The Candle Studio",
    tagline: "A calm hour with something to show for it.",
    body:    "Soy wax, curated fragrance blends, cotton wicks, and a poured-glass vessel. Participants pour their own candle live on a Nishaw-hosted call, and keep it as a memory of the moment.",
    items:   ["Soy wax flakes, pre-measured", "Three fragrance blends: sandalwood, jasmine, cedarwood", "Cotton wick and metal holder", "Borosilicate glass vessel", "Branded Nishaw pouring guide"],
    from:    "\u20b91,600",
    accent:  "gold",
    aspect:  "4:5" as const,
  },
  {
    slug:    "coffee",
    name:    "The Coffee Tasting",
    tagline: "Slow down. Taste the difference.",
    body:    "A curated flight of four single-origin coffees, each from a different Indian estate, with tasting notes, a grind guide, and a Nishaw facilitator to lead the session.",
    items:   ["Four single-origin estate coffees, 50g each", "Tasting-note cards for each estate", "A pour-over paper funnel", "Branded grind-and-brew guide", "Optional: a small pour-over dripper"],
    from:    "\u20b91,400",
    accent:  "pine",
    aspect:  "4:5" as const,
  },
  {
    slug:    "chocolate",
    name:    "The Chocolate Workshop",
    tagline: "Bean to bar, together.",
    body:    "Tempering chocolate, choosing inclusions, and moulding a tablet is unexpectedly meditative. Each participant gets a kit to make two bars and a take-home recipe card.",
    items:   ["Couverture chocolate, two varieties", "Selection of inclusions: nuts, dried fruit, spice", "Silicone mould and palette knife", "Tempering guide with temperature markers", "Branded recipe card to keep"],
    from:    "\u20b91,600",
    accent:  "plum",
    aspect:  "4:5" as const,
  },
  {
    slug:    "art",
    name:    "The Watercolour Hour",
    tagline: "No experience required. Only curiosity.",
    body:    "A twelve-pan watercolour set, cotton paper, two brushes, and a project card with three guided prompts. A Nishaw facilitator leads the session; participants keep their work.",
    items:   ["Twelve-pan watercolour set, artist-grade", "A5 cold-press cotton paper block, 10 sheets", "Two round brushes in a cloth sleeve", "Guided prompt card: three illustrated exercises", "Optional: a small wooden easel"],
    from:    "\u20b91,500",
    accent:  "sapphire",
    aspect:  "4:5" as const,
  },
];

/* Companion lines */
const companions = [
  {
    slug:    "growth-journal",
    name:    "The Growth Journal",
    tagline: "Structured reflection for people who want to get better.",
    body:    "A 90-day guided journal with weekly prompts, quarterly review spreads, and a mid-year reflection page. Leather-covered, gold-foil embossed with the recipient's initials.",
    items:   ["Leather-bound 90-day guided journal", "Weekly intention and review prompts", "Quarterly self-assessment spreads", "Gold-foil initials on cover", "Kraft inner envelope with a Nishaw letter"],
    from:    "\u20b92,200",
    accent:  "gold",
    image:   "/images/experiences/growth-journal.jpg",
    aspect:  "3:2" as const,
  },
  {
    slug:    "mindfulness-deck",
    name:    "The Mindfulness Deck",
    tagline: "52 prompts for a slower, clearer week.",
    body:    "A linen-boxed deck of 52 cards, each with a single mindfulness or affirmation prompt, an illustration, and a breathing or grounding exercise. Designed for daily use at a desk.",
    items:   ["52-card linen-boxed deck", "Illustrated prompt per card", "Breathing exercise on reverse", "Gilded card edges", "Nishaw enclosure note on cotton paper"],
    from:    "\u20b91,800",
    accent:  "sapphire",
    image:   "/images/experiences/mindfulness-deck.jpg",
    aspect:  "3:2" as const,
  },
  {
    slug:    "recognition-kit",
    name:    "The Recognition Kit",
    tagline: "Make the moment as big as what they did.",
    body:    "A curated kit for recognising a specific achievement: a personalised letter on Nishaw stationery, a small commemorative object, and a keepsake box the recipient will keep on their desk.",
    items:   ["Handwritten (or printed) recognition letter", "Commemorative object: medal, coin, or pin", "Rigid keepsake box with velvet interior", "Nishaw wax seal on enclosure", "Optional: a second message from a peer or leader"],
    from:    "\u20b92,500",
    accent:  "pine",
    image:   "/images/experiences/recognition-kit.jpg",
    aspect:  "3:2" as const,
  },
];

/* How it works */
const steps = [
  {
    num:   "01",
    title: "Tell us the team",
    body:  "Size, location, remote or in-office, budget per person. We configure the kit and the session format around your team, not the other way around.",
  },
  {
    num:   "02",
    title: "We pack and ship",
    body:  "Every kit is packed individually and shipped to each participant's home or office, with tracking. For in-person groups, we ship to one address.",
  },
  {
    num:   "03",
    title: "We host the session",
    body:  "A Nishaw facilitator joins your call and leads the experience: at your own pace, with no awkward ice-breakers. Just the shared activity and a good hour together.",
  },
  {
    num:   "04",
    title: "They keep something real",
    body:  "A candle they poured, a bar of chocolate they made, a journal they will actually use. The memory of the session is stronger because something physical remains.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────────────── */
export default function ExperiencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ── PAGE HEADER ── */}
      <div
        style={{
          background:    "var(--color-emerald)",
          paddingTop:    "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(56px, 8vw, 80px)",
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <li>
                <Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "rgba(251,247,239,0.65)" }}>Home</Link>
              </li>
              <li aria-hidden style={{ color: "var(--color-gold)", fontSize: 12 }}>♦</li>
              <li>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "rgba(251,247,239,0.9)" }}>Nishaw Experiences</span>
              </li>
            </ol>
          </nav>

          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 16, color: "var(--color-gold)" }}>Nishaw Experiences</Eyebrow>
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
                maxWidth:      700,
                color:         "#FBF7EF",
              }}
            >
              Gifts that do something.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontSize:     "var(--text-body-lg)",
                color:        "rgba(251,247,239,0.72)",
                lineHeight:   1.7,
                maxWidth:     560,
                marginBottom: 36,
              }}
            >
              Workshop-in-a-box kits for virtual or in-person team sessions, shippable to individual homes.
              Each experience includes a Nishaw-hosted facilitated session and something physical the team takes away.
              For HR and L&amp;D teams who want employee engagement that actually engages.
            </p>
            <Link href="/contact?occasion=experiences" className="btn btn-gold btn-lg">
              Plan a Team Experience
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section
        className="section-py"
        style={{ background: "var(--color-paper-deep)", borderTop: "1px solid var(--color-gold-soft)" }}
      >
        <div className="container">
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 12 }}>How it works</Eyebrow>
            <h2
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "var(--text-h2)",
                fontWeight:    300,
                letterSpacing: "-0.02em",
                maxWidth:      560,
                marginBottom:  "clamp(40px, 6vw, 56px)",
              }}
            >
              From brief to shared memory.
            </h2>
          </ScrollReveal>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap:                 24,
            }}
          >
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <div
                  style={{
                    background:   "var(--color-paper)",
                    border:       "1px solid var(--color-gold-soft)",
                    borderRadius: "var(--radius-card)",
                    padding:      "28px 24px",
                    height:       "100%",
                  }}
                >
                  <span
                    style={{
                      display:       "block",
                      fontFamily:    "var(--font-heading)",
                      fontSize:      "2.5rem",
                      fontWeight:    300,
                      color:         "var(--color-gold)",
                      opacity:       0.5,
                      lineHeight:    1,
                      marginBottom:  16,
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontFamily:    "var(--font-heading)",
                      fontSize:      "var(--text-h4)",
                      fontWeight:    400,
                      marginBottom:  12,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   "var(--text-body-sm)",
                      color:      "var(--color-ink-soft)",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOP KITS ── */}
      <section
        className="section-py"
        style={{ background: "var(--color-paper)", borderTop: "1px solid var(--color-gold-soft)" }}
      >
        <div className="container">
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 12 }}>Workshop-in-a-box</Eyebrow>
            <h2
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "var(--text-h2)",
                fontWeight:    300,
                letterSpacing: "-0.02em",
                maxWidth:      640,
                marginBottom:  8,
              }}
            >
              Five experiences. One team. Delivered to every home.
            </h2>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontSize:     "var(--text-body-lg)",
                color:        "var(--color-ink-soft)",
                lineHeight:   1.65,
                maxWidth:     560,
                marginBottom: "clamp(40px, 6vw, 56px)",
              }}
            >
              Each kit ships individually. A Nishaw facilitator joins your call.
              The session runs for 60 to 90 minutes and leaves everyone with something they made themselves.
            </p>
          </ScrollReveal>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap:                 24,
            }}
          >
            {workshops.map((w, i) => (
              <ScrollReveal key={w.slug} delay={(i % 3) * 60}>
                <article
                  className="card-hover"
                  style={{
                    border:        "1px solid var(--color-gold-soft)",
                    borderRadius:  "var(--radius-card)",
                    overflow:      "hidden",
                    height:        "100%",
                    display:       "flex",
                    flexDirection: "column",
                    boxShadow:     "var(--shadow-card)",
                  }}
                >
                  {/* Image slot */}
                  <NishawImage
                    src={`/images/experiences/${w.slug}.jpg`}
                    alt={`${w.name} — Nishaw workshop-in-a-box team experience kit`}
                    aspect={w.aspect}
                    style={{ borderRadius: 0, border: "none" }}
                  />

                  {/* Card body */}
                  <div
                    style={{
                      padding:       "24px 22px 20px",
                      flex:          1,
                      display:       "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="eyebrow"
                      style={{ color: `var(--color-${w.accent})`, marginBottom: 10 }}
                    >
                      <span aria-hidden style={{ marginRight: 8 }}>♦</span>Workshop Kit
                    </div>

                    <h3
                      style={{
                        fontFamily:    "var(--font-heading)",
                        fontSize:      "var(--text-h4)",
                        fontWeight:    400,
                        marginBottom:  6,
                      }}
                    >
                      {w.name}
                    </h3>

                    <p
                      style={{
                        fontFamily:   "var(--font-heading)",
                        fontStyle:    "italic",
                        fontWeight:   300,
                        fontSize:     "var(--text-body-sm)",
                        color:        "var(--color-ink-soft)",
                        marginBottom: 14,
                      }}
                    >
                      {w.tagline}
                    </p>

                    <p
                      style={{
                        fontFamily:   "var(--font-body)",
                        fontSize:     "var(--text-body-sm)",
                        color:        "var(--color-ink-soft)",
                        lineHeight:   1.65,
                        marginBottom: 18,
                        flex:         1,
                      }}
                    >
                      {w.body}
                    </p>

                    {/* Kit contents */}
                    <ul
                      style={{
                        listStyle:    "none",
                        padding:      0,
                        margin:       "0 0 20px",
                        display:      "flex",
                        flexDirection:"column",
                        gap:          6,
                      }}
                    >
                      {w.items.map((item) => (
                        <li
                          key={item}
                          style={{
                            fontFamily:  "var(--font-body)",
                            fontSize:    "var(--text-body-sm)",
                            color:       "var(--color-ink-soft)",
                            display:     "flex",
                            gap:         8,
                            alignItems:  "baseline",
                          }}
                        >
                          <span aria-hidden style={{ color: `var(--color-${w.accent})`, fontSize: 8, flexShrink: 0, marginTop: 3 }}>◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div
                      style={{
                        display:       "flex",
                        justifyContent:"space-between",
                        alignItems:    "center",
                        paddingTop:    16,
                        borderTop:     "1px solid var(--color-gold-soft)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:  "var(--font-body)",
                          fontSize:    "var(--text-body-sm)",
                          color:       "var(--color-ink-soft)",
                        }}
                      >
                        From <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>{w.from}</strong> per person
                      </span>
                      <Link
                        href={`/contact?occasion=experiences&kit=${w.slug}`}
                        style={{
                          fontFamily:  "var(--font-body)",
                          fontSize:    "var(--text-body-sm)",
                          color:       "var(--color-emerald)",
                          textDecoration:"none",
                          fontWeight:  500,
                        }}
                      >
                        Enquire &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p
              style={{
                fontFamily:  "var(--font-body)",
                fontSize:    "var(--text-body-sm)",
                color:       "var(--color-ink-soft)",
                fontStyle:   "italic",
                marginTop:   32,
                textAlign:   "center",
              }}
            >
              All kits available without the hosted session. Pricing varies by headcount, location, and customisation.
              Minimum order: 10 kits.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COMPANION LINES ── */}
      <section
        className="section-py"
        style={{ background: "var(--color-paper-deep)", borderTop: "1px solid var(--color-gold-soft)" }}
      >
        <div className="container">
          <ScrollReveal>
            <Eyebrow style={{ marginBottom: 12 }}>Companion lines</Eyebrow>
            <h2
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "var(--text-h2)",
                fontWeight:    300,
                letterSpacing: "-0.02em",
                maxWidth:      600,
                marginBottom:  8,
              }}
            >
              Gifts that work as hard as your team.
            </h2>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontSize:     "var(--text-body-lg)",
                color:        "var(--color-ink-soft)",
                lineHeight:   1.65,
                maxWidth:     560,
                marginBottom: "clamp(40px, 6vw, 56px)",
              }}
            >
              Growth journals, mindfulness decks, and recognition kits for teams that deserve more than a gift card.
              Each designed for daily use and branded to your standard.
            </p>
          </ScrollReveal>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap:                 24,
            }}
          >
            {companions.map((c, i) => (
              <ScrollReveal key={c.slug} delay={i * 80}>
                <article
                  className="card-hover"
                  style={{
                    border:        "1px solid var(--color-gold-soft)",
                    borderRadius:  "var(--radius-card)",
                    overflow:      "hidden",
                    height:        "100%",
                    display:       "flex",
                    flexDirection: "column",
                    boxShadow:     "var(--shadow-card)",
                    background:    "var(--color-paper)",
                  }}
                >
                  <NishawImage
                    src={c.image}
                    alt={`${c.name} — Nishaw employee engagement gift`}
                    aspect={c.aspect}
                    style={{ borderRadius: 0, border: "none" }}
                  />

                  <div style={{ padding: "24px 22px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div className="eyebrow" style={{ color: `var(--color-${c.accent})`, marginBottom: 10 }}>
                      <span aria-hidden style={{ marginRight: 8 }}>♦</span>Companion Gift
                    </div>

                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-h4)", fontWeight: 400, marginBottom: 6 }}>
                      {c.name}
                    </h3>

                    <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", marginBottom: 14 }}>
                      {c.tagline}
                    </p>

                    <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.65, marginBottom: 18, flex: 1 }}>
                      {c.body}
                    </p>

                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 6 }}>
                      {c.items.map((item) => (
                        <li key={item} style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", display: "flex", gap: 8, alignItems: "baseline" }}>
                          <span aria-hidden style={{ color: `var(--color-${c.accent})`, fontSize: 8, flexShrink: 0, marginTop: 3 }}>◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--color-gold-soft)" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
                        From <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>{c.from}</strong> per person
                      </span>
                      <Link href={`/contact?occasion=experiences&kit=${c.slug}`} style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-emerald)", textDecoration: "none", fontWeight: 500 }}>
                        Enquire &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR HR LEADERS ── */}
      <section
        className="section-py"
        style={{ background: "var(--color-paper)", borderTop: "1px solid var(--color-gold-soft)" }}
      >
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap:                 "clamp(40px, 6vw, 72px)",
              alignItems:          "center",
            }}
          >
            <ScrollReveal>
              <Eyebrow style={{ marginBottom: 12 }}>For HR and L&amp;D teams</Eyebrow>
              <h2
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "var(--text-h2)",
                  fontWeight:    300,
                  letterSpacing: "-0.02em",
                  marginBottom:  20,
                }}
              >
                Engagement that earns its budget line.
              </h2>
              <p
                style={{
                  fontFamily:   "var(--font-body)",
                  fontSize:     "var(--text-body-lg)",
                  color:        "var(--color-ink-soft)",
                  lineHeight:   1.72,
                  marginBottom: 28,
                }}
              >
                Every Nishaw Experience can be ordered as a one-time activation or a standing programme.
                We handle all the logistics: individual packing, address management, tracked delivery,
                and facilitation coordination. Your team just shows up.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Ships to any Indian address, individually packed",
                  "Nishaw facilitator joins your team call",
                  "Minimum 10 kits, no maximum",
                  "Custom branding on box and collateral",
                  "GST-compliant invoicing for L&D budget",
                  "Can be combined with a Nishaw gift from any collection",
                ].map((point) => (
                  <li key={point} style={{ display: "flex", gap: 12, alignItems: "baseline", fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.55 }}>
                    <span aria-hidden style={{ color: "var(--color-emerald)", fontSize: 8, flexShrink: 0, marginTop: 4 }}>◆</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/contact?occasion=experiences" className="btn btn-gold btn-lg">
                Plan a Team Experience
              </Link>
            </ScrollReveal>

            {/* Right: image slot */}
            <ScrollReveal delay={100}>
              <NishawImage
                src="/images/experiences/team-session.jpg"
                alt="A remote team joining a Nishaw-hosted pottery workshop-in-a-box session, each participant at their own home workspace with a kit in front of them"
                aspect="4:5"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        className="section-py"
        style={{ background: "var(--color-emerald-deep)", textAlign: "center" }}
      >
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <ScrollReveal>
            <span aria-hidden style={{ display: "block", color: "var(--color-gold)", fontSize: "var(--text-h3)", opacity: 0.4, marginBottom: 8 }}>♦</span>
            <span
              className="script"
              style={{ display: "block", fontSize: "var(--text-script)", color: "var(--color-gold)", marginBottom: 20 }}
            >
              Something to make, something to keep.
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
              Tell us your team size, occasion, and how much time you have.
              We will design a session around it and have kits at every door.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/contact?occasion=experiences" variant="gold" size="lg">
                Plan a Team Experience
              </Button>
              <Button href="/collections" variant="ghost" size="lg">
                Browse Collections
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .experiences-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
