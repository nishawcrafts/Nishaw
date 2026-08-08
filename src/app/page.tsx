import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection }  from '@/components/home/HeroSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Divider }      from '@/components/ui/Divider';
import { Eyebrow }      from '@/components/ui/Eyebrow';
import { Button }       from '@/components/ui/Button';
import { NishawImage }  from '@/components/ui/NishawImage';

export const metadata: Metadata = {
  title: 'Nishaw | Premium Corporate Gifting & Bespoke Curations',
  description:
    'Elevated corporate gifting for teams, clients and enterprises across India. Beautifully curated, impeccably presented, delivered pan-India with GST invoicing and full personalisation.',
};

/* ─────────────────────────────────────────────────────────────────────────
   DATA — edit these before going live
   ──────────────────────────────────────────────────────────────────────── */

/** Factual capability pillars — no invented numbers */
const capabilities = [
  'Pan-India tracked logistics',
  'GST invoicing for all orders',
  'Custom & bespoke curation',
  'Multi-address bulk delivery',
  'Gold-foil & blind-emboss branding',
  'Dedicated account management',
];

const collections = [
  { name: 'First Light',       slug: 'welcome-kits',         accent: 'pine'       as const, promise: 'Make day one unforgettable.' },
  { name: 'The Long Game',     slug: 'milestone-gifts',      accent: 'sapphire'   as const, promise: 'Reward the years, not just the results.' },
  { name: 'Standing Ovation',  slug: 'rewards-recognition',  accent: 'gold'       as const, promise: 'For work that deserves applause.' },
  { name: 'The Inner Circle',  slug: 'client-vip-gifts',     accent: 'plum'       as const, promise: 'For the clients you never want to lose.' },
  { name: 'Season of Light',   slug: 'festive-diwali-gifts', accent: 'terracotta' as const, promise: 'Diwali, done beautifully.' },
  { name: 'The Corner Office', slug: 'executive-gifts',      accent: 'sapphire'   as const, promise: 'Gifts with a boardroom pedigree.' },
  { name: 'Warm Regards',      slug: 'farewell-gifts',       accent: 'plum'       as const, promise: 'Goodbyes, thank-yous and quiet gratitude.' },
  { name: 'Grand Gatherings',  slug: 'event-gifting',        accent: 'pine'       as const, promise: 'Hundreds of gifts, one flawless impression.' },
  { name: 'House of Bespoke',  slug: 'bespoke-hampers',      accent: 'gold'       as const, promise: 'Dreamt up with you, made only for them.' },
];

const curations = [
  {
    name:    'The Chairman',
    slug:    'chairman',
    from:    '\u20b912,000',
    items:   ['Full-grain leather folio', 'Single-malt whisky, curated', 'Sterling silver cufflinks', 'Custom wax seal in your brand colour'],
    promise: 'For the relationship that earns the highest seat.',
  },
  {
    name:    'The Welcome',
    slug:    'welcome',
    from:    '\u20b93,500',
    items:   ['Leather journal with gold-foil initials', 'Solid brass pen in cloth roll', 'City-specific artisan snack box', 'Handwritten note on cotton paper'],
    promise: 'Everything a new hire needs to feel expected.',
  },
  {
    name:    'The Festival',
    slug:    'festival',
    from:    '\u20b92,800',
    items:   ['Hand-painted diyas from Rajasthan', 'Premium mithai from a 90-year-old confectionery', 'Dry fruit selection, single-estate sourced', 'Artisan enclosure card, wax-sealed'],
    promise: 'The Diwali gift they will not pass along.',
  },
];

/** Budget bands — ordered premium-first visually (reversed in render) */
const budgetBands = [
  {
    range:  '\u20b97,000+',
    label:  'Clients, CXO & VIP',
    desc:   'Gifts for leaders and the relationships that matter most: leather goods, curated spirits, bespoke curation, sterling accessories.',
    href:   '/collections/executive-gifts',
    accent: 'sapphire' as const,
  },
  {
    range:  '\u20b93,000 \u2013 7,000',
    label:  'Recognition & festive',
    desc:   'Milestone rewards, Diwali gifting, farewell gifts and client appreciation at a premium that shows.',
    href:   '/collections/client-vip-gifts',
    accent: 'plum' as const,
  },
  {
    range:  '\u20b91,500 \u2013 3,000',
    label:  'Teams & onboarding',
    desc:   'First-day kits and team gifting that says the right thing before anyone says a word.',
    href:   '/collections/welcome-kits',
    accent: 'pine' as const,
  },
  {
    range:  '\u20b9500 \u2013 1,500',
    label:  'Events & conferencing',
    desc:   'Thoughtful tokens for large events: custom notebooks, curated snack packs, branded keepsakes.',
    href:   '/collections/event-gifting',
    accent: 'terracotta' as const,
  },
];

const steps = [
  { num: '01', title: 'Tell us the story',     body: 'Who is this for? What do they love? What moment are we marking? The brief shapes every choice we make.' },
  { num: '02', title: 'We curate & design',    body: 'Our team selects items, tests combinations, and presents a curated shortlist aligned to your brief and budget.' },
  { num: '03', title: 'Approve & personalise', body: 'Choose your packaging, add logo in gold foil or blind emboss, include a handwritten note in our signature style.' },
  { num: '04', title: 'We deliver, everywhere',body: 'Pan-India white-glove delivery, tracked and timed. For large orders: split shipping to multiple addresses.' },
];

const gallerySlots = [
  { slug: 'gifts-01',     alt: 'A Nishaw welcome kit laid out flat: leather journal, brass pen in cloth roll, artisan snack tray on ivory linen' },
  { slug: 'details-01',  alt: 'Close-up of a deep emerald wax seal being applied to an ivory cotton-paper enclosure card, a Nishaw signature detail' },
  { slug: 'packaging-01',alt: 'A Nishaw outer box in ivory with gold debossed wordmark and an emerald ribbon, seen from above on a dark surface' },
  { slug: 'gifts-03',    alt: 'Single-malt whisky in a custom Nishaw sleeve beside sterling silver cufflinks on dark velvet, The Chairman curation' },
  { slug: 'details-03',  alt: 'A handwritten enclosure note on cotton paper in ink, beside the wax seal crest and a champagne ribbon spool' },
  { slug: 'unboxing-03', alt: 'A recipient reading a handwritten Nishaw enclosure note, gift box open in the foreground, warm office light' },
];

/* ── Testimonials — activate when real quotes are verified ───────────── */
const SHOW_TESTIMONIALS = false;
const testimonials: Array<{ quote: string; name: string; title: string; accent: 'pine' | 'sapphire' | 'plum' }> = [
  /* Example:
  { quote: "...", name: "Priya S.", title: "Chief People Officer, [Company]", accent: "pine" },
  */
];

/* ─────────────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── 2. TRUST STRIP ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-paper-deep)',
          borderTop:       '1px solid var(--color-gold-soft)',
          borderBottom:    '1px solid var(--color-gold-soft)',
          padding:         'clamp(48px, 8vw, 72px) 0',
        }}
      >
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

              {/* Logo row — placeholder slots for real client logos */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                <span
                  className="eyebrow"
                  style={{ color: 'var(--color-ink-soft)' }}
                >
                  Trusted by teams at
                </span>
                <div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      aria-label="Client logo — coming soon"
                      style={{
                        backgroundColor: 'var(--color-paper)',
                        border:          '1px solid var(--color-gold-soft)',
                        borderRadius:    'var(--radius-sm)',
                        width:           120,
                        height:          48,
                        display:         'flex',
                        alignItems:      'center',
                        justifyContent:  'center',
                      }}
                    >
                      <span aria-hidden style={{ opacity: 0.3, fontSize: 12, color: 'var(--color-gold)' }}>♦</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability pillars — factual, no invented numbers */}
              <div
                style={{
                  display:             'flex',
                  flexWrap:            'wrap',
                  gap:                 '12px 24px',
                  justifyContent:      'center',
                }}
              >
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      'var(--text-body-sm)',
                      color:         'var(--color-ink-soft)',
                      display:       'flex',
                      alignItems:    'center',
                      gap:           8,
                    }}
                  >
                    <span aria-hidden style={{ color: 'var(--color-gold)', fontSize: 8 }}>◆</span>
                    {cap}
                  </span>
                ))}
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. BUYER-ENTRY — Who are you gifting? ───────────────────────── */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 56px)' }}>
              <Eyebrow style={{ marginBottom: 12 }}>Who are you gifting?</Eyebrow>
              <h2
                style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'var(--text-h2)',
                  fontWeight:    300,
                  letterSpacing: '-0.02em',
                  maxWidth:      560,
                  margin:        '0 auto',
                }}
              >
                Every relationship deserves its own language.
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap:                 20,
            }}
          >
            {/* Employee */}
            {(
              [
                {
                  label:   'Employee',
                  accent:  'pine',
                  href:    '/collections/welcome-kits',
                  body:    'Onboarding kits, milestone recognition, farewell gifts. For the people who build your company every day.',
                  lines:   ['First Light', 'Standing Ovation', 'Warm Regards'],
                  ariaLabel: 'Employee gifting: First Light, Standing Ovation, Warm Regards',
                },
                {
                  label:   'Client & Partner',
                  accent:  'plum',
                  href:    '/collections/client-vip-gifts',
                  body:    'Client appreciation, festive gifting, relationship-building. For the people you never want to lose.',
                  lines:   ['The Inner Circle', 'Season of Light'],
                  ariaLabel: 'Client and Partner gifting: The Inner Circle, Season of Light',
                },
                {
                  label:   'Executive & CXO',
                  accent:  'sapphire',
                  href:    '/collections/executive-gifts',
                  body:    'Bespoke curation for leaders whose desk has seen everything. Gifts with a boardroom pedigree.',
                  lines:   ['The Corner Office', 'The Chairman'],
                  ariaLabel: 'Executive and CXO gifting: The Corner Office, The Chairman curation',
                },
                {
                  label:   'Team & Event',
                  accent:  'emerald',
                  href:    '/collections/event-gifting',
                  body:    'Conference gifting, team activations, workshop-in-a-box experiences. Hundreds of gifts, one impression.',
                  lines:   ['Grand Gatherings', 'Nishaw Experiences'],
                  ariaLabel: 'Team and Event gifting: Grand Gatherings, Nishaw Experiences',
                },
              ] as const
            ).map((door, i) => (
              <ScrollReveal key={door.label} delay={i * 60}>
                <Link
                  href={door.href}
                  aria-label={door.ariaLabel}
                  style={{ display: 'block', textDecoration: 'none', height: '100%' }}
                >
                  <div
                    className="buyer-door"
                    style={{
                      background:    'var(--color-paper-deep)',
                      border:        '1px solid var(--color-gold-soft)',
                      borderRadius:  'var(--radius-card)',
                      borderTop:     `3px solid var(--color-${door.accent})`,
                      padding:       'clamp(24px, 4vw, 36px) 28px',
                      height:        '100%',
                      display:       'flex',
                      flexDirection: 'column',
                      gap:           16,
                      cursor:        'pointer',
                    }}
                  >
                    <span aria-hidden style={{ color: `var(--color-${door.accent})`, fontSize: 22, lineHeight: 1 }}>♦</span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 400, margin: 0 }}>
                      {door.label}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                      {door.body}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {door.lines.map((name) => (
                        <li key={name} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)' }}>
                          <span aria-hidden style={{ color: `var(--color-${door.accent})`, marginRight: 8, fontSize: 10 }}>◆</span>
                          {name === 'Nishaw Experiences'
                            ? <Link href="/experiences" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--color-gold-soft)' }}>{name}</Link>
                            : name}
                        </li>
                      ))}
                    </ul>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: `var(--color-${door.accent})`, fontWeight: 500 }}>
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 4. COLLECTIONS GRID ─────────────────────────────────────────── */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper-deep)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>The Collections</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300, maxWidth: 640, letterSpacing: '-0.02em' }}>
                Curated for every corporate milestone.
              </h2>
            </div>
          </ScrollReveal>
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap:                 24,
            }}
          >
            {collections.map((col, i) => (
              <ScrollReveal key={col.slug} delay={(i % 3) * 40}>
                <Link href={`/collections/${col.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <article
                    className="card-hover"
                    style={{
                      borderRadius:  'var(--radius-card)',
                      border:        '1px solid var(--color-gold-soft)',
                      overflow:      'hidden',
                      height:        '100%',
                      display:       'flex',
                      flexDirection: 'column',
                      background:    'var(--color-paper)',
                    }}
                  >
                    {/* 4:5 image slot */}
                    <NishawImage
                      src={`/images/collections/${col.slug}.jpg`}
                      alt={`${col.name} — corporate gift collection by Nishaw`}
                      aspect="4:5"
                      style={{ borderRadius: 0, border: 'none' }}
                    />
                    {/* Card body */}
                    <div style={{ padding: '20px 20px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div
                        className="eyebrow"
                        style={{ color: `var(--color-${col.accent})`, marginBottom: 10 }}
                      >
                        <span aria-hidden style={{ marginRight: 8 }}>♦</span>{col.name}
                      </div>
                      <h3
                        style={{
                          fontFamily:   'var(--font-heading)',
                          fontStyle:    'italic',
                          fontSize:     'var(--text-h4)',
                          fontWeight:   300,
                          marginBottom: 'auto',
                          paddingBottom: 20,
                        }}
                      >
                        {col.promise}
                      </h3>
                      <div
                        style={{
                          display:        'flex',
                          justifyContent: 'space-between',
                          alignItems:     'center',
                          paddingTop:     14,
                          borderTop:      '1px solid var(--color-gold-soft)',
                          fontSize:       'var(--text-body-sm)',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-soft)' }}>Explore collection</span>
                        <span style={{ color: 'var(--color-emerald)' }}>&rarr;</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Button href="/collections" variant="ghost">See all nine collections</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* ── 5. THE NISHAW PRESS ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-emerald)',
          padding:         'clamp(56px, 8vw, 96px) 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap:                 'clamp(40px, 6vw, 72px)',
              alignItems:          'center',
            }}
          >
            {/* Left: editorial image */}
            <ScrollReveal>
              <NishawImage
                src="/images/bespoke/press-editorial.jpg"
                alt="A Nishaw gift box being sealed with an emerald wax stamp, hands at work on an ivory table"
                aspect="3:2"
              />
            </ScrollReveal>

            {/* Right: copy */}
            <ScrollReveal delay={100}>
              <Eyebrow style={{ color: 'var(--color-gold)', marginBottom: 16 }}>The Nishaw Press</Eyebrow>
              <h2
                style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'var(--text-h2)',
                  fontStyle:     'italic',
                  fontWeight:    300,
                  letterSpacing: '-0.025em',
                  lineHeight:    1.1,
                  color:         '#FBF7EF',
                  marginBottom:  20,
                }}
              >
                The details are the gift.
              </h2>
              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     'var(--text-body-lg)',
                  color:        'rgba(251,247,239,0.72)',
                  lineHeight:   1.7,
                  marginBottom: 32,
                  maxWidth:     480,
                }}
              >
                Every Nishaw order is finished by hand: a wax seal on the enclosure card,
                a blind-embossed wordmark on the outer box, a handwritten note in our signature ink.
                These are not add-ons. They are the standard.
              </p>
              <ul
                style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                {[
                  'Wax seal, custom or Nishaw crest',
                  'Blind-emboss or gold-foil branding',
                  'Handwritten enclosure note',
                  'Ivory cotton-paper stationery',
                  'Branded outer sleeve or ribbon',
                ].map((line) => (
                  <li
                    key={line}
                    style={{
                      fontFamily:  'var(--font-body)',
                      fontSize:    'var(--text-body-sm)',
                      color:       'rgba(251,247,239,0.8)',
                      display:     'flex',
                      gap:         10,
                      alignItems:  'baseline',
                    }}
                  >
                    <span aria-hidden style={{ color: 'var(--color-gold)', fontSize: 8, flexShrink: 0 }}>◆</span>
                    {line}
                  </li>
                ))}
              </ul>
              <Link href="/bespoke" className="btn btn-gold">
                Learn about our craft
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 6. SIGNATURE CURATIONS ──────────────────────────────────────── */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>Signature Curations</Eyebrow>
              <h2
                style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'var(--text-h2)',
                  fontStyle:     'italic',
                  fontWeight:    300,
                  letterSpacing: '-0.02em',
                  maxWidth:      640,
                  marginBottom:  16,
                }}
              >
                Three gifts worth knowing by name.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   'var(--text-body)',
                  color:      'var(--color-ink-soft)',
                  maxWidth:   540,
                  lineHeight: 1.65,
                }}
              >
                Our most-requested combinations, perfected over time.
                A starting point for your own bespoke adaptation.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap:                 24,
              marginBottom:        48,
            }}
          >
            {curations.map((curation, i) => (
              <ScrollReveal key={curation.slug} delay={i * 80}>
                <article
                  style={{
                    border:        '1px solid var(--color-gold-soft)',
                    borderRadius:  'var(--radius-card)',
                    overflow:      'hidden',
                    display:       'flex',
                    flexDirection: 'column',
                    background:    'var(--color-paper-deep)',
                    height:        '100%',
                  }}
                >
                  {/* 4:5 image slot */}
                  <NishawImage
                    src={`/images/curations/${curation.slug}.jpg`}
                    alt={`${curation.name} — signature Nishaw curation`}
                    aspect="4:5"
                    style={{ borderRadius: 0, border: 'none' }}
                  />
                  <div style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3
                      style={{
                        fontFamily:   'var(--font-heading)',
                        fontSize:     'var(--text-h4)',
                        fontWeight:   400,
                        marginBottom: 6,
                      }}
                    >
                      {curation.name}
                    </h3>
                    <p
                      style={{
                        fontFamily:   'var(--font-heading)',
                        fontStyle:    'italic',
                        fontWeight:   300,
                        fontSize:     'var(--text-body-sm)',
                        color:        'var(--color-ink-soft)',
                        marginBottom: 16,
                      }}
                    >
                      {curation.promise}
                    </p>
                    <ul
                      style={{
                        listStyle:    'none',
                        padding:      0,
                        margin:       '0 0 auto',
                        display:      'flex',
                        flexDirection:'column',
                        gap:          6,
                        paddingBottom: 16,
                      }}
                    >
                      {curation.items.map((item) => (
                        <li
                          key={item}
                          style={{
                            fontFamily:  'var(--font-body)',
                            fontSize:    'var(--text-body-sm)',
                            color:       'var(--color-ink-soft)',
                            paddingLeft: 14,
                            position:    'relative',
                          }}
                        >
                          <span
                            aria-hidden
                            style={{ position: 'absolute', left: 0, top: 4, fontSize: 8, color: 'var(--color-gold)' }}
                          >♦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      style={{
                        paddingTop:  12,
                        borderTop:   '1px solid var(--color-gold-soft)',
                        fontFamily:  'var(--font-body)',
                        fontSize:    'var(--text-body-sm)',
                      }}
                    >
                      <span style={{ color: 'var(--color-ink-soft)' }}>From </span>
                      <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{curation.from}</strong>
                      <span style={{ color: 'var(--color-ink-soft)' }}> per person</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle:  'italic',
                  fontWeight: 300,
                  fontSize:   'var(--text-body)',
                  color:      'var(--color-ink-soft)',
                  textAlign:  'center',
                  maxWidth:   480,
                  margin:     0,
                }}
              >
                Every Nishaw curation is adapted to the recipient, occasion and budget.
              </p>
              <Button href="/contact?occasion=bespoke" variant="ghost">
                Begin your curation &rarr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* ── 7. FIND YOUR GIFTING RANGE ──────────────────────────────────── */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper-deep)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>Find your gifting range</Eyebrow>
              <h2
                style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'var(--text-h2)',
                  fontWeight:    300,
                  letterSpacing: '-0.02em',
                }}
              >
                What does your occasion call for?
              </h2>
            </div>
          </ScrollReveal>

          {/* Premium-first: ₹7,000+ top, ₹500–1,500 bottom */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap:                 16,
            }}
          >
            {budgetBands.map((band, i) => (
              <ScrollReveal key={band.range} delay={i * 50}>
                <Link href={band.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div
                    className="budget-tile card-hover"
                    style={{
                      backgroundColor: 'var(--color-paper)',
                      border:          '1px solid var(--color-gold-soft)',
                      borderLeft:      `3px solid var(--color-${band.accent})`,
                      borderRadius:    'var(--radius-card)',
                      padding:         'clamp(24px, 4vw, 36px)',
                      display:         'flex',
                      flexDirection:   'column',
                      gap:             10,
                      height:          '100%',
                    }}
                  >
                    <div
                      style={{
                        fontFamily:    'var(--font-heading)',
                        fontSize:      'var(--text-h3)',
                        fontWeight:    300,
                        color:         'var(--color-ink)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {band.range}
                    </div>
                    <div
                      className="eyebrow"
                      style={{ color: `var(--color-${band.accent})` }}
                    >
                      {band.label}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-body-sm)',
                        color:      'var(--color-ink-soft)',
                        lineHeight: 1.65,
                        margin:     0,
                        flex:       1,
                      }}
                    >
                      {band.desc}
                    </p>
                    <div
                      style={{
                        fontFamily:  'var(--font-body)',
                        fontSize:    'var(--text-body-sm)',
                        color:       `var(--color-${band.accent})`,
                        marginTop:   'auto',
                        paddingTop:  8,
                        fontWeight:  500,
                      }}
                    >
                      Explore &rarr;
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 8. HOW WE GIFT ──────────────────────────────────────────────── */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>The Process</Eyebrow>
              <h2
                style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'var(--text-h2)',
                  fontWeight:    300,
                  letterSpacing: '-0.02em',
                }}
              >
                How we work together
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {steps.map((step) => (
              <ScrollReveal key={step.num}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize:   'var(--text-h3)',
                      color:      'var(--color-gold)',
                      fontStyle:  'italic',
                    }}
                  >
                    {step.num}.
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize:   'var(--text-h4)',
                      fontWeight: 400,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   'var(--text-body-sm)',
                      color:      'var(--color-ink-soft)',
                      lineHeight: 1.6,
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

      <Divider />

      {/* ── 9. ENTERPRISE BAND ──────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-emerald-deep)',
          padding:         'clamp(56px, 8vw, 96px) 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap:                 'clamp(40px, 6vw, 72px)',
              alignItems:          'center',
            }}
          >
            {/* Copy */}
            <ScrollReveal>
              <Eyebrow style={{ color: 'var(--color-gold)', marginBottom: 16 }}>For Enterprises</Eyebrow>
              <h2
                style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'var(--text-h2)',
                  fontStyle:     'italic',
                  fontWeight:    300,
                  letterSpacing: '-0.025em',
                  lineHeight:    1.1,
                  color:         '#FBF7EF',
                  marginBottom:  20,
                }}
              >
                Thoughtful at one. Flawless at five hundred.
              </h2>
              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     'var(--text-body-lg)',
                  color:        'rgba(251,247,239,0.72)',
                  lineHeight:   1.7,
                  marginBottom: 32,
                  maxWidth:     480,
                }}
              >
                One account manager. Centralised ordering. Multi-address delivery.
                GST-compliant invoicing. Every gift personalised. None of the operational chaos.
              </p>
              <ul
                style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                {[
                  'Dedicated enterprise account manager',
                  'Centralised portal for bulk orders',
                  'Multi-address delivery management',
                  'Custom branding on every piece',
                  'Pan-India tracked logistics',
                  'GST invoice and L&D budget compatibility',
                ].map((point) => (
                  <li
                    key={point}
                    style={{
                      fontFamily:  'var(--font-body)',
                      fontSize:    'var(--text-body-sm)',
                      color:       'rgba(251,247,239,0.8)',
                      display:     'flex',
                      gap:         10,
                      alignItems:  'baseline',
                    }}
                  >
                    <span aria-hidden style={{ color: 'var(--color-gold)', fontSize: 8, flexShrink: 0 }}>◆</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/contact?occasion=enterprise" className="btn btn-gold">
                  Talk to a Gifting Concierge
                </Link>
                <Link href="/for-enterprises" className="btn btn-ghost-light">
                  Our enterprise programme
                </Link>
              </div>
            </ScrollReveal>

            {/* Editorial image */}
            <ScrollReveal delay={100}>
              <NishawImage
                src="/images/bespoke/enterprise-editorial.jpg"
                alt="Rows of identical Nishaw branded gift boxes ready for enterprise multi-address dispatch, ivory boxes with emerald ribbon on a warehouse table"
                aspect="4:5"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 10. PROOF — brand quote or verified testimonials ────────────── */}
      {SHOW_TESTIMONIALS && testimonials.length > 0 ? (
        <section className="section-py" style={{ backgroundColor: 'var(--color-paper-deep)', borderTop: '1px solid var(--color-gold-soft)' }}>
          <div className="container">
            <ScrollReveal>
              <Eyebrow style={{ marginBottom: 40 }}>Heard from clients</Eyebrow>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <figure className="card" style={{ padding: '32px 28px', height: '100%', display: 'flex', flexDirection: 'column', gap: 20, margin: 0 }}>
                    <span aria-hidden style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: `var(--color-${t.accent})`, opacity: 0.3, lineHeight: 1, fontWeight: 300 }}>&ldquo;</span>
                    <blockquote style={{ flex: 1, margin: 0 }}>
                      <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 300, fontSize: 'var(--text-h4)', color: 'var(--color-ink)', lineHeight: 1.55 }}>{t.quote}</p>
                    </blockquote>
                    <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--color-gold-soft)' }}>
                      <div aria-label="Company logo placeholder" style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gold-soft)', background: 'var(--color-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span aria-hidden style={{ color: 'var(--color-gold)', opacity: 0.4, fontSize: 11 }}>♦</span>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--color-ink)', letterSpacing: '0.02em' }}>
                          <span aria-hidden style={{ color: `var(--color-${t.accent})`, marginRight: 6, fontWeight: 300 }}>&mdash;</span>{t.name}
                        </span>
                        <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', marginTop: 2 }}>{t.title}</span>
                      </div>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Brand quote band — shown until real testimonials are ready */
        <section
          style={{
            backgroundColor: 'var(--color-paper-deep)',
            borderTop:       '1px solid var(--color-gold-soft)',
            borderBottom:    '1px solid var(--color-gold-soft)',
            padding:         'clamp(56px, 8vw, 80px) 0',
            textAlign:       'center',
          }}
        >
          <div className="container" style={{ maxWidth: 640, margin: '0 auto' }}>
            <ScrollReveal>
              <span aria-hidden style={{ display: 'block', color: 'var(--color-gold)', fontSize: 'var(--text-h3)', opacity: 0.35, marginBottom: 20 }}>♦</span>
              <blockquote>
                <p
                  style={{
                    fontFamily:   'var(--font-heading)',
                    fontStyle:    'italic',
                    fontWeight:   300,
                    fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
                    color:        'var(--color-ink)',
                    lineHeight:   1.5,
                    margin:       '0 0 12px',
                  }}
                >
                  The gift reflects the giver.
                </p>
                <p
                  style={{
                    fontFamily:   'var(--font-heading)',
                    fontStyle:    'italic',
                    fontWeight:   300,
                    fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
                    color:        'var(--color-ink-soft)',
                    lineHeight:   1.5,
                    margin:       '0 0 36px',
                  }}
                >
                  Let&rsquo;s make sure yours reflects well.
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── 11. GALLERY STRIP ───────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-paper)',
          padding:         'clamp(56px, 8vw, 80px) 0',
          borderTop:       '1px solid var(--color-gold-soft)',
        }}
      >
        <ScrollReveal>
          <div
            className="container"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}
          >
            <Eyebrow>The Nishaw Look</Eyebrow>
            <Link
              href="/gallery"
              className="link-draw"
              style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink)' }}
            >
              See the full gallery &rarr;
            </Link>
          </div>
          <div
            style={{
              display:         'flex',
              gap:             12,
              overflowX:       'auto',
              paddingBottom:   8,
              scrollSnapType:  'x mandatory',
              scrollbarWidth:  'none',
              paddingLeft:     'max(20px, calc((100vw - 1200px) / 2))',
              paddingRight:    'max(20px, calc((100vw - 1200px) / 2))',
            }}
            className="gallery-scroll"
          >
            <style dangerouslySetInnerHTML={{ __html: `.gallery-scroll::-webkit-scrollbar { display: none; }` }} />
            {gallerySlots.map((slot) => (
              <div
                key={slot.slug}
                style={{ flexShrink: 0, width: 'clamp(200px, 30vw, 280px)', scrollSnapAlign: 'start' }}
              >
                <NishawImage
                  src={`/images/gallery/${slot.slug}.jpg`}
                  alt={slot.alt}
                  aspect="1:1"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ── 12. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <span
              className="script"
              style={{
                display:      'block',
                fontSize:     'var(--text-script)',
                color:        'var(--color-gold)',
                marginBottom: 16,
              }}
            >
              Say more than thank you.
            </span>
            <h2
              style={{
                fontFamily:    'var(--font-heading)',
                fontSize:      'var(--text-h2)',
                fontWeight:    300,
                letterSpacing: '-0.02em',
                marginBottom:  28,
              }}
            >
              Ready to gift with intention?
            </h2>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact" variant="gold" size="lg">Talk to a Gifting Concierge</Button>
              <Button href="/collections" variant="ghost" size="lg">Browse Collections</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Shared micro-animation classes */}
      <style>{`
        .buyer-door { transition: transform 200ms ease-out, box-shadow 200ms ease-out; }
        .buyer-door:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(34,30,27,0.10); }
        .btn-ghost-light {
          font-family: var(--font-body);
          font-size: var(--text-body-sm);
          color: rgba(251,247,239,0.72);
          border: 1px solid rgba(251,247,239,0.3);
          border-radius: var(--radius-pill);
          padding: 10px 24px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: color 150ms, border-color 150ms;
        }
        .btn-ghost-light:hover { color: #FBF7EF; border-color: rgba(251,247,239,0.7); }
        @media (max-width: 640px) {
          .buyer-door { padding: 24px 20px !important; }
        }
      `}</style>

    </main>
  );
}
