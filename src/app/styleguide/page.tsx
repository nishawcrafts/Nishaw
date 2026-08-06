import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Card,
  Divider,
  Badge,
  Eyebrow,
  ScrollReveal,
  Section,
} from "@/components/ui";
import { colors, accentValues, type AccentColor } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Styleguide",
  description:
    "Nishaw design system — colours, typography, motion, and components.",
  robots: { index: false, follow: false },
};

/* ── Utility: colour swatch ─────────────────────────────────────────────── */
function Swatch({
  name,
  hex,
  label,
}: {
  name: string;
  hex: string;
  label: string;
}) {
  const isLight = hex === colors.paper || hex === colors.paperDeep || hex === colors.goldSoft;
  return (
    <div>
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 10,
          background: hex,
          border: isLight ? "1px solid var(--color-gold-soft)" : "none",
          marginBottom: 10,
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          color: "var(--color-ink)",
          margin: "0 0 2px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          color: "var(--color-ink-soft)",
          letterSpacing: "0.06em",
          margin: 0,
        }}
      >
        {hex}
      </p>
    </div>
  );
}

/* ── Utility: token row ─────────────────────────────────────────────────── */
function TokenRow({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 16,
        padding: "10px 0",
        borderBottom: "1px solid var(--color-ink-faint)",
        flexWrap: "wrap",
      }}
    >
      <code
        style={{
          fontFamily: "monospace",
          fontSize: 13,
          color: "var(--color-gold)",
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </code>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-ink-soft)",
          textAlign: "right",
        }}
      >
        {value}
        {note && (
          <em style={{ marginLeft: 10, color: "var(--color-gold)", fontStyle: "italic" }}>
            — {note}
          </em>
        )}
      </span>
    </div>
  );
}

/* ── Accent colours list ────────────────────────────────────────────────── */
const accents: { key: AccentColor; label: string }[] = [
  { key: "terracotta", label: "Terracotta" },
  { key: "pine",       label: "Pine" },
  { key: "sapphire",   label: "Sapphire" },
  { key: "plum",       label: "Plum" },
  { key: "gold",       label: "Gold" },
];

/* ── Palette ────────────────────────────────────────────────────────────── */
const palette: { name: keyof typeof colors; label: string }[] = [
  { name: "paper",      label: "Paper" },
  { name: "paperDeep",  label: "Paper Deep" },
  { name: "ink",        label: "Ink" },
  { name: "inkSoft",    label: "Ink Soft" },
  { name: "gold",       label: "Gold" },
  { name: "goldSoft",   label: "Gold Soft" },
  { name: "terracotta", label: "Terracotta" },
  { name: "pine",       label: "Pine" },
  { name: "sapphire",   label: "Sapphire" },
  { name: "plum",       label: "Plum" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function StyleguidePage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--color-paper-deep)",
          borderBottom: "1px solid var(--color-gold-soft)",
          paddingTop: 100,         /* clears the fixed header */
          paddingBottom: 56,
        }}
      >
        <div className="container">
          <Eyebrow style={{ marginBottom: 16 }}>Design System</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-h1)",
              marginBottom: 16,
            }}
          >
            Nishaw Styleguide
          </h1>
          <p
            className="tagline"
            style={{ fontSize: "var(--text-h4)", color: "var(--color-ink-soft)" }}
          >
            &ldquo;Say more than thank you.&rdquo;
          </p>

          {/* Quick nav */}
          <nav
            aria-label="Styleguide sections"
            style={{ marginTop: 36, display: "flex", gap: "24px", flexWrap: "wrap" }}
          >
            {[
              ["#colours",    "01 Colours"],
              ["#typography", "02 Typography"],
              ["#buttons",    "03 Buttons"],
              ["#cards",      "04 Cards"],
              ["#badges",     "05 Badges"],
              ["#dividers",   "06 Dividers"],
              ["#links",      "07 Links"],
              ["#motion",     "08 Motion"],
              ["#header",     "09 Header"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="link-draw"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-eyebrow)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
           01 COLOURS
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="colours" eyebrow="01 — Foundation" heading="Colour Palette">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "28px 20px",
            marginBottom: 48,
          }}
        >
          {palette.map(({ name, label }) => (
            <Swatch key={name} name={name} hex={colors[name]} label={label} />
          ))}
        </div>

        <Card padding="md">
          <Eyebrow style={{ marginBottom: 16 }}>
            Jewel-tone accent usage rule
          </Eyebrow>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              color: "var(--color-ink-soft)",
              lineHeight: 1.7,
              maxWidth: 620,
            }}
          >
            Jewel tones (terracotta, pine, sapphire, plum) are used{" "}
            <strong>one per collection card</strong> as a top accent band.
            Gold is used for interactive chrome — hairlines, underlines, the
            wordmark, and primary buttons. Never use jewel tones as
            full-bleed backgrounds on desktop; they appear as subtle signals
            only.
          </p>
        </Card>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           02 TYPOGRAPHY
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="typography" eyebrow="02 — Typography" heading="Type System">

        {/* Font trio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {/* Fraunces */}
          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 14 }}>Headings — Fraunces</Eyebrow>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              The Art of<br />
              <em style={{ fontWeight: 300 }}>Thoughtful Gifting</em>
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "var(--color-ink-soft)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              Fraunces · opsz 9–144 · italic cut for taglines
            </p>
          </Card>

          {/* Newsreader */}
          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 14 }}>Body — Newsreader</Eyebrow>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                lineHeight: 1.72,
              }}
            >
              Every gift we make carries a story — of care, of intention, of
              knowing the person who receives it deserves something made
              precisely for them.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "var(--color-ink-soft)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              Newsreader · opsz 6–72 · italic available
            </p>
          </Card>

          {/* Tangerine */}
          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 14 }}>Script — Tangerine (logo only)</Eyebrow>
            <p
              className="script"
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                color: "var(--color-gold)",
              }}
            >
              Nishaw
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "var(--color-ink-soft)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              Tangerine · logo wordmark &amp; closing note only
            </p>
          </Card>
        </div>

        {/* Type scale ramp */}
        <Card padding="lg">
          <Eyebrow style={{ marginBottom: 24 }}>Scale Ramp</Eyebrow>
          {[
            { label: "Display",  size: "var(--text-display)", sample: "Premium Gifting" },
            { label: "H1",       size: "var(--text-h1)",      sample: "Say more than thank you." },
            { label: "H2",       size: "var(--text-h2)",      sample: "Nine ways to be remembered." },
            { label: "H3",       size: "var(--text-h3)",      sample: "The Inner Circle" },
            { label: "H4",       size: "var(--text-h4)",      sample: "Executive & CXO Gifts" },
            { label: "Body LG",  size: "var(--text-body-lg)", sample: "Every detail considered." },
            { label: "Body",     size: "var(--text-body)",    sample: "Crafted for your recipients." },
            { label: "Body SM",  size: "var(--text-body-sm)", sample: "Pan-India delivery · GST invoicing." },
          ].map(({ label, size, sample }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                padding: "12px 0",
                borderBottom: "1px solid var(--color-ink-faint)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-soft)",
                  width: 64,
                  flexShrink: 0,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: size,
                  lineHeight: 1.15,
                }}
              >
                {sample}
              </span>
            </div>
          ))}
          {/* Eyebrow row */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 20,
              paddingTop: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-ink-soft)",
                width: 64,
                flexShrink: 0,
              }}
            >
              Eyebrow
            </span>
            <Eyebrow as="span">New Collection · 2025</Eyebrow>
          </div>
        </Card>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           03 BUTTONS
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="buttons" eyebrow="03 — Actions" heading="Buttons">
        <div
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          {/* Variants */}
          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 20 }}>Variants</Eyebrow>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Button variant="gold">Primary Gold</Button>
              <Button variant="ghost">Ghost Ink</Button>
              <Button variant="ghost-gold">Ghost Gold</Button>
            </div>
          </Card>

          {/* Sizes */}
          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 20 }}>Sizes</Eyebrow>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </Card>

          {/* With icons */}
          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 20 }}>With Icons</Eyebrow>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Button leftIcon={<span aria-hidden>♦</span>}>
                Start a Conversation
              </Button>
              <Button variant="ghost" rightIcon={<span aria-hidden>→</span>}>
                Explore Collections
              </Button>
              <Button variant="ghost-gold" leftIcon={<span aria-hidden>✉</span>}>
                hello@nishaw.com
              </Button>
            </div>
          </Card>

          {/* Press feedback note */}
          <Card padding="md" variant="dashed">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-soft)",
              }}
            >
              <strong style={{ color: "var(--color-ink)" }}>Animation 6 — Button press:</strong>{" "}
              All buttons use CSS <code style={{ fontFamily: "monospace" }}>:active</code> →{" "}
              <code style={{ fontFamily: "monospace" }}>scale(0.98)</code> at 120ms.
              Try clicking any button above.
            </p>
          </Card>
        </div>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           04 CARDS
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="cards" eyebrow="04 — Surfaces" heading="Card Variants">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {/* Solid hoverable */}
          <Card variant="solid" padding="lg" hoverable>
            <Eyebrow style={{ marginBottom: 10 }}>Solid + Hover Lift</Eyebrow>
            <h3
              style={{ fontSize: "var(--text-h3)", margin: "8px 0 10px" }}
            >
              The Inner Circle
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-soft)",
              }}
            >
              For the clients you never want to lose.
            </p>
            <div style={{ marginTop: 20 }}>
              <Button variant="ghost-gold" size="sm">
                View Collection →
              </Button>
            </div>
          </Card>

          {/* Accent band — pine */}
          <Card
            variant="accent"
            padding="lg"
            hoverable
            accentColor="var(--color-pine)"
          >
            <Eyebrow style={{ marginBottom: 10, color: "var(--color-pine)" }}>
              Accent Band (Pine)
            </Eyebrow>
            <h3
              style={{ fontSize: "var(--text-h3)", margin: "8px 0 10px" }}
            >
              First Light
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-soft)",
              }}
            >
              Make day one unforgettable.
            </p>
          </Card>

          {/* Dashed — step card */}
          <Card variant="dashed" padding="lg">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-h2)",
                  color: "var(--color-gold-soft)",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                01
              </span>
              <div>
                <Eyebrow style={{ marginBottom: 6 }}>Dashed — Step Card</Eyebrow>
                <h4
                  style={{
                    fontSize: "var(--text-h4)",
                    margin: "6px 0 8px",
                  }}
                >
                  Tell us the story
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body-sm)",
                    color: "var(--color-ink-soft)",
                  }}
                >
                  Who is this for? What do they love? What moment are we
                  marking?
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* All 5 accent colours as collection cards */}
        <Eyebrow style={{ margin: "36px 0 16px" }}>
          Collection accent colours
        </Eyebrow>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {accents.map(({ key, label }) => (
            <Card
              key={key}
              variant="accent"
              padding="md"
              hoverable
              accentColor={accentValues[key]}
            >
              <Eyebrow style={{ color: accentValues[key], marginBottom: 8 }}>
                {label}
              </Eyebrow>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-ink-soft)",
                }}
              >
                {accentValues[key]}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           05 BADGES
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="badges" eyebrow="05 — Labels" heading="Badges & Eyebrows">
        <Card padding="lg">
          <Eyebrow style={{ marginBottom: 16 }}>Badge variants</Eyebrow>
          <div
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}
          >
            {accents.map(({ key, label }) => (
              <Badge key={key} accent={key}>
                {label}
              </Badge>
            ))}
          </div>

          <Divider variant="dashed" />

          <Eyebrow style={{ margin: "20px 0 16px" }}>With dot indicator</Eyebrow>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Badge accent="terracotta" dot>Season of Light</Badge>
            <Badge accent="pine"       dot>First Light</Badge>
            <Badge accent="sapphire"   dot>The Long Game</Badge>
            <Badge accent="plum"       dot>The Inner Circle</Badge>
            <Badge accent="gold"       dot>Bestseller</Badge>
          </div>
        </Card>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           06 DIVIDERS
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="dividers" eyebrow="06 — Structure" heading="Dividers & Hairlines">
        <Card padding="lg">
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>Solid hairline</Eyebrow>
              <Divider variant="solid" />
            </div>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>Dashed hairline</Eyebrow>
              <Divider variant="dashed" />
            </div>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>
                ♦ Diamond divider (section break)
              </Eyebrow>
              <Divider variant="diamond" />
            </div>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>Custom glyph</Eyebrow>
              <Divider variant="diamond" label="✦" />
            </div>
          </div>
        </Card>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           07 LINKS
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="links" eyebrow="07 — Interactions" heading="Link Underline Draw">
        <Card padding="lg">
          <Eyebrow style={{ marginBottom: 20 }}>
            Animation 2 — gold hairline draws on hover (200ms)
          </Eyebrow>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              color: "var(--color-ink)",
              marginBottom: 24,
              maxWidth: 560,
            }}
          >
            Hover any link below to see the gold underline draw in from left.
            Used in nav links, footer links, and text CTAs.
          </p>

          {/* Nav-style links */}
          <nav style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 28 }}>
            {["The Collections", "Bespoke", "How We Gift", "For Enterprises", "The Nishaw Story"].map(
              (label) => (
                <a
                  key={label}
                  href="#links"
                  className="link-draw"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body-sm)",
                    color: "var(--color-ink)",
                  }}
                >
                  {label}
                </a>
              )
            )}
          </nav>

          <Divider variant="dashed" style={{ marginBottom: 24 }} />

          {/* Text CTA style */}
          <p style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-soft)" }}>
            Explore all nine collections in{" "}
            <a
              href="#links"
              className="link-draw"
              style={{ color: "var(--color-gold)" }}
            >
              The Collections
            </a>
            , or{" "}
            <a
              href="#links"
              className="link-draw"
              style={{ color: "var(--color-gold)" }}
            >
              start a bespoke project
            </a>{" "}
            with us today.
          </p>
        </Card>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           08 MOTION
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="motion" eyebrow="08 — Motion" heading="Motion Tokens">

        {/* Timing table */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {[
            { label: "--dur-fast",   value: "120ms",  use: "Button press scale (0.98)" },
            { label: "--dur-link",   value: "200ms",  use: "Underline draw, card lift" },
            { label: "--dur-reveal", value: "500ms",  use: "Fade+rise on scroll (once)" },
            { label: "--dur-bar",    value: "250ms",  use: "Mobile action bar slide-up" },
          ].map(({ label, value, use }) => (
            <Card key={label} padding="md">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "var(--color-gold)",
                  }}
                >
                  {label}
                </code>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    background: "var(--color-ink)",
                    color: "var(--color-paper)",
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  {value}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-ink-soft)",
                }}
              >
                {use}
              </p>
            </Card>
          ))}
        </div>

        {/* Easing */}
        <Card padding="lg">
          <TokenRow label="--ease-out" value="cubic-bezier(0.22, 1, 0.36, 1)" note="all animations" />
        </Card>

        {/* ScrollReveal live demo */}
        <div style={{ marginTop: 40 }}>
          <Eyebrow style={{ marginBottom: 24 }}>
            Animation 1 — Fade + Rise demo (scroll past to see it fire)
          </Eyebrow>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {["100ms", "200ms", "300ms"].map((delay, i) => (
              <ScrollReveal key={delay} delay={i * 100}>
                <Card padding="md" variant="dashed">
                  <Eyebrow style={{ marginBottom: 8 }}>Delay {delay}</Eyebrow>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-ink-soft)",
                    }}
                  >
                    This card fades in from 16px below on first scroll into
                    view — and only once.
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Banned list */}
        <Card padding="lg" variant="dashed" style={{ marginTop: 32 }}>
          <Eyebrow style={{ marginBottom: 12 }}>
            Explicitly banned — never ship these
          </Eyebrow>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              color: "var(--color-ink-soft)",
            }}
          >
            {[
              "Auto-rotating carousels",
              "Bouncing or elastic animations",
              "Entrance animations on every element",
              "Parallax anywhere except the home hero",
              "Any transition longer than 500ms",
            ].map((item) => (
              <li
                key={item}
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <span style={{ color: "var(--color-terracotta)", fontSize: 12 }}>
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Divider variant="diamond" style={{ margin: "0 auto", maxWidth: "var(--max-width)", padding: "0 var(--gutter)" }} />

      {/* ══════════════════════════════════════════════════════════════════
           09 HEADER PREVIEW
         ══════════════════════════════════════════════════════════════════ */}
      <Section id="header" eyebrow="09 — Navigation" heading="Header & Mobile Bar">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 12 }}>Header behaviour</Eyebrow>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-soft)",
              }}
            >
              {[
                "Transparent over hero, fixed position",
                "Fades to paper + hairline on scroll",
                "IntersectionObserver on #hero-sentinel",
                "Transition: 200ms ease-out (CSS only)",
                "Mobile: hamburger → slide-in drawer",
                "Escape key closes drawer",
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                >
                  <span
                    style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }}
                  >
                    ♦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card padding="lg">
            <Eyebrow style={{ marginBottom: 12 }}>Mobile action bar</Eyebrow>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-soft)",
              }}
            >
              {[
                "Hidden on screens ≥768px (CSS display:none)",
                "Slides up 250ms past #hero-sentinel",
                "Email → mailto:hello@nishaw.com",
                "WhatsApp → wa.me/918758993307 with pre-filled message",
                "Sits above safe-area-inset-bottom",
                "prefers-reduced-motion: appears instantly",
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                >
                  <span
                    style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }}
                  >
                    ♦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Simulated mobile bar preview (not interactive — just visual) */}
        <div style={{ marginTop: 40 }}>
          <Eyebrow style={{ marginBottom: 16 }}>
            Mobile action bar — visual preview
          </Eyebrow>
          <div
            style={{
              maxWidth: 375,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--color-gold-soft)",
              boxShadow: "0 -2px 16px rgba(58,46,40,0.08)",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "18px 12px",
                  background: "var(--color-paper)",
                  borderRight: "1px solid var(--color-gold-soft)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                }}
              >
                ✉ Email
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "18px 12px",
                  background: "var(--color-gold)",
                  color: "var(--color-paper)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                }}
              >
                WhatsApp
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PAGE FOOTER ─────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--color-gold-soft)",
          padding: "40px 0",
          background: "var(--color-paper-deep)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            className="script"
            style={{ fontSize: "2rem", color: "var(--color-gold)" }}
          >
            Nishaw
          </span>
          <p
            className="tagline"
            style={{
              fontSize: "var(--text-body-sm)",
              color: "var(--color-ink-soft)",
            }}
          >
            Styleguide v2.0 · All components locked before content pages.
          </p>
          <Link href="/" className="link-draw" style={{ color: "var(--color-ink-soft)", fontSize: "var(--text-body-sm)", fontFamily: "var(--font-body)" }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
