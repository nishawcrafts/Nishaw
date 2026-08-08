import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/home/HeroSection';
import { GoldSeal } from '@/components/home/GoldSeal';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Divider } from '@/components/ui/Divider';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { NishawImage } from '@/components/ui/NishawImage';
import { accentValues } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Nishaw | Corporate Gifting & Bespoke Curations',
  description: 'Elevated corporate gifting. Beautifully curated, impeccably presented, delivered pan-India.',
};

// Edit these numbers before going live:
const stats = [
  { number: '500+',  label: 'individually curated gifting experiences' },
  { number: '28+',   label: 'cities served across India' },
  { number: '60+',   label: 'enterprise relationships' },
  { number: '100%',  label: 'pan-India tracked delivery' },
];

const collections = [
  { name: 'First Light',       slug: 'welcome-kits',        accent: 'pine'       as const, promise: 'Make day one unforgettable.' },
  { name: 'The Long Game',     slug: 'milestone-gifts',     accent: 'sapphire'   as const, promise: 'Reward the years, not just the results.' },
  { name: 'Standing Ovation',  slug: 'rewards-recognition', accent: 'gold'       as const, promise: 'For work that deserves applause.' },
  { name: 'The Inner Circle',  slug: 'client-vip-gifts',    accent: 'plum'       as const, promise: 'For the clients you never want to lose.' },
  { name: 'Season of Light',   slug: 'festive-diwali-gifts',accent: 'terracotta' as const, promise: 'Diwali, done beautifully.' },
  { name: 'The Corner Office', slug: 'executive-gifts',     accent: 'sapphire'   as const, promise: 'Gifts with a boardroom pedigree.' },
  { name: 'Warm Regards',      slug: 'farewell-gifts',      accent: 'plum'       as const, promise: 'Goodbyes, thank-yous and quiet gratitude.' },
  { name: 'Grand Gatherings',  slug: 'event-gifting',       accent: 'pine'       as const, promise: 'Hundreds of gifts, one flawless impression.' },
  { name: 'House of Bespoke',  slug: 'bespoke-hampers',     accent: 'gold'       as const, promise: 'Dreamt up with you, made only for them.' },
];

const curations = [
  {
    name:  'The Chairman',
    slug:  'chairman',
    from:  '\u20b912,000',
    items: ['Full-grain leather folio', 'Single-malt whisky, curated', 'Sterling silver cufflinks', 'Custom wax seal in your brand colour'],
    promise: 'For the relationship that earns the highest seat.',
  },
  {
    name:  'The Welcome',
    slug:  'welcome',
    from:  '\u20b93,500',
    items: ['Leather journal with gold-foil initials', 'Solid brass pen in cloth roll', 'City-specific artisan snack box', 'Handwritten note on cotton paper'],
    promise: 'Everything a new hire needs to feel expected.',
  },
  {
    name:  'The Festival',
    slug:  'festival',
    from:  '\u20b92,800',
    items: ['Hand-painted diyas from Rajasthan', 'Premium mithai from a 90-year-old confectionery', 'Dry fruit selection, single-estate sourced', 'Artisan enclosure card, wax-sealed'],
    promise: 'The Diwali gift they will not pass along.',
  },
];

const budgetBands = [
  { range: '\u20b9500 \u2013 2,000',   label: 'Events & conference gifting',  desc: 'Thoughtful tokens for large events: custom notebooks, curated snack packs, branded keepsakes.',   href: '/collections/event-gifting' },
  { range: '\u20b92,000 \u2013 5,000', label: 'Teams & onboarding',           desc: 'First-day welcome kits and team gifting that says the right thing before anyone says a word.',      href: '/collections/welcome-kits' },
  { range: '\u20b95,000 \u2013 15,000',label: 'Clients & milestones',         desc: 'Gifts worthy of an important relationship: leather goods, curated spirits, artisan hampers.',       href: '/collections/client-vip-gifts' },
  { range: '\u20b915,000 \u2013 75,000+',label: 'CXO & VIP gifting',          desc: 'Bespoke-adjacent curation for leaders whose desk has seen everything. Make it unforgettable.',     href: '/collections/executive-gifts' },
];

const steps = [
  { num: '01', title: 'Tell us the story',    body: 'Who is this for? What do they love? What moment are we marking? The brief shapes every choice we make.' },
  { num: '02', title: 'We curate & design',   body: 'Our team selects items, tests combinations, and presents a curated shortlist aligned to your brief and budget.' },
  { num: '03', title: 'Approve & personalise',body: 'Choose your packaging, add logo in gold foil or blind emboss, include a handwritten note in our signature style.' },
  { num: '04', title: 'We deliver, everywhere',body: 'Pan-India white-glove delivery, tracked and timed. For large orders: split shipping to multiple addresses.' },
];

const gallerySlots = [
  { slug: 'gifts-01',    alt: 'A Nishaw welcome kit laid out flat: leather journal, brass pen in cloth roll, artisan snack tray on ivory linen' },
  { slug: 'details-01', alt: 'Close-up of a deep emerald wax seal being applied to an ivory cotton-paper enclosure card, a Nishaw signature detail' },
  { slug: 'packaging-01',alt: 'A Nishaw outer box in ivory with gold debossed wordmark and an emerald ribbon, seen from above on a dark surface' },
  { slug: 'gifts-03',   alt: 'Single-malt whisky in a custom Nishaw sleeve beside sterling silver cufflinks on dark velvet, The Chairman curation' },
  { slug: 'details-03', alt: 'A handwritten enclosure note on cotton paper in ink, beside the wax seal crest and a champagne ribbon spool' },
  { slug: 'unboxing-03',alt: 'A recipient reading a handwritten Nishaw enclosure note, gift box open in the foreground, warm office light' },
];

/* ── Testimonials: add verified quotes here before going live ────────────
   While unverified, the section renders a single brand statement instead.
   To activate: set SHOW_TESTIMONIALS = true and fill the array below.
   ──────────────────────────────────────────────────────────────────────── */
const SHOW_TESTIMONIALS = false;

const testimonials: Array<{ quote: string; name: string; title: string; accent: 'pine' | 'sapphire' | 'plum' }> = [
  /* Replace with verified client quotes — keep name/title/accent */
  /* Example:
  {
    quote:   "...",
    name:    "Priya S.",
    title:   "Chief People Officer, [Company]",
    accent:  "pine",
  },
  */
];

export default function Home() {
  return (
    <main>
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. TRUST LAYER */}
      <section style={{ backgroundColor: 'var(--color-paper-deep)', borderTop: '1px solid var(--color-gold-soft)', borderBottom: '1px solid var(--color-gold-soft)', padding: 'clamp(48px, 8vw, 80px) 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <span className="eyebrow" style={{ color: 'var(--color-ink-soft)' }}>Trusted by teams at</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} aria-label="Client logo placeholder" style={{ backgroundColor: 'var(--color-paper)', border: '1px solid var(--color-gold-soft)', borderRadius: 'var(--radius-sm)', width: '120px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span aria-hidden="true" style={{ opacity: 0.4, fontSize: '12px' }}>♦</span>
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', fontStyle: 'italic' }}>Logo placements shown are illustrative.</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ backgroundColor: 'var(--color-paper)', border: '1px solid var(--color-gold-soft)', borderTop: '2px solid var(--color-emerald)', padding: '24px', borderRadius: 'var(--radius-card)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', color: 'var(--color-ink)', lineHeight: 1 }}>{stat.number}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', marginTop: '8px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2b. WHO ARE YOU GIFTING? — buyer-entry doors */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 56px)' }}>
              <Eyebrow style={{ marginBottom: 12 }}>Who are you gifting?</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300, letterSpacing: '-0.02em', maxWidth: 560, margin: '0 auto' }}>
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
            {/* Door 1 — Employee */}
            <ScrollReveal delay={0}>
              <Link
                href="/collections/welcome-kits"
                aria-label="Employee gifting: First Light, Standing Ovation, Warm Regards"
                style={{ display: 'block', textDecoration: 'none', height: '100%' }}
              >
                <div
                  className="buyer-door"
                  style={{
                    background:    'var(--color-paper-deep)',
                    border:        '1px solid var(--color-gold-soft)',
                    borderRadius:  'var(--radius-card)',
                    borderTop:     '3px solid var(--color-pine)',
                    padding:       'clamp(24px, 4vw, 36px) 28px',
                    height:        '100%',
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           16,
                    cursor:        'pointer',
                  }}
                >
                  <span aria-hidden style={{ color: 'var(--color-pine)', fontSize: 22, lineHeight: 1 }}>♦</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 400, margin: 0 }}>
                    Employee
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                    Onboarding kits, milestone recognition, farewell gifts. For the people who build your company every day.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {['First Light', 'Standing Ovation', 'Warm Regards'].map((name) => (
                      <li key={name} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)' }}>
                        <span aria-hidden style={{ color: 'var(--color-pine)', marginRight: 8, fontSize: 10 }}>◆</span>{name}
                      </li>
                    ))}
                  </ul>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-pine)', fontWeight: 500 }}>
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Door 2 — Client & Partner */}
            <ScrollReveal delay={60}>
              <Link
                href="/collections/client-vip-gifts"
                aria-label="Client and Partner gifting: The Inner Circle, Season of Light"
                style={{ display: 'block', textDecoration: 'none', height: '100%' }}
              >
                <div
                  className="buyer-door"
                  style={{
                    background:    'var(--color-paper-deep)',
                    border:        '1px solid var(--color-gold-soft)',
                    borderRadius:  'var(--radius-card)',
                    borderTop:     '3px solid var(--color-plum)',
                    padding:       'clamp(24px, 4vw, 36px) 28px',
                    height:        '100%',
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           16,
                    cursor:        'pointer',
                  }}
                >
                  <span aria-hidden style={{ color: 'var(--color-plum)', fontSize: 22, lineHeight: 1 }}>♦</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 400, margin: 0 }}>
                    Client &amp; Partner
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                    Client appreciation, festive gifting, relationship-building. For the people you never want to lose.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {['The Inner Circle', 'Season of Light'].map((name) => (
                      <li key={name} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)' }}>
                        <span aria-hidden style={{ color: 'var(--color-plum)', marginRight: 8, fontSize: 10 }}>◆</span>{name}
                      </li>
                    ))}
                  </ul>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-plum)', fontWeight: 500 }}>
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Door 3 — Executive & CXO */}
            <ScrollReveal delay={120}>
              <Link
                href="/collections/executive-gifts"
                aria-label="Executive and CXO gifting: The Corner Office, The Chairman curation"
                style={{ display: 'block', textDecoration: 'none', height: '100%' }}
              >
                <div
                  className="buyer-door"
                  style={{
                    background:    'var(--color-paper-deep)',
                    border:        '1px solid var(--color-gold-soft)',
                    borderRadius:  'var(--radius-card)',
                    borderTop:     '3px solid var(--color-sapphire)',
                    padding:       'clamp(24px, 4vw, 36px) 28px',
                    height:        '100%',
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           16,
                    cursor:        'pointer',
                  }}
                >
                  <span aria-hidden style={{ color: 'var(--color-sapphire)', fontSize: 22, lineHeight: 1 }}>♦</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 400, margin: 0 }}>
                    Executive &amp; CXO
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                    Bespoke curation for leaders whose desk has seen everything. Gifts with a boardroom pedigree.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {['The Corner Office', 'The Chairman'].map((name) => (
                      <li key={name} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)' }}>
                        <span aria-hidden style={{ color: 'var(--color-sapphire)', marginRight: 8, fontSize: 10 }}>◆</span>{name}
                      </li>
                    ))}
                  </ul>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-sapphire)', fontWeight: 500 }}>
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Door 4 — Team & Event */}
            <ScrollReveal delay={180}>
              <Link
                href="/collections/event-gifting"
                aria-label="Team and Event gifting: Grand Gatherings, Nishaw Experiences"
                style={{ display: 'block', textDecoration: 'none', height: '100%' }}
              >
                <div
                  className="buyer-door"
                  style={{
                    background:    'var(--color-paper-deep)',
                    border:        '1px solid var(--color-gold-soft)',
                    borderRadius:  'var(--radius-card)',
                    borderTop:     '3px solid var(--color-emerald)',
                    padding:       'clamp(24px, 4vw, 36px) 28px',
                    height:        '100%',
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           16,
                    cursor:        'pointer',
                  }}
                >
                  <span aria-hidden style={{ color: 'var(--color-emerald)', fontSize: 22, lineHeight: 1 }}>♦</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 400, margin: 0 }}>
                    Team &amp; Event
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                    Conference gifting, team activations, workshop-in-a-box experiences. Hundreds of gifts, one impression.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {['Grand Gatherings', 'Nishaw Experiences'].map((name, i) => (
                      <li key={name} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)' }}>
                        <span aria-hidden style={{ color: 'var(--color-emerald)', marginRight: 8, fontSize: 10 }}>◆</span>
                        {i === 1 ? <Link href="/experiences" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--color-gold-soft)' }}>{name}</Link> : name}
                      </li>
                    ))}
                  </ul>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-emerald)', fontWeight: 500 }}>
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* hover lift for door cards */}
          <style>{`
            .buyer-door { transition: transform 200ms ease-out, box-shadow 200ms ease-out; }
            .buyer-door:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(34,30,27,0.1); }
          `}</style>
        </div>
      </section>

      <Divider />

      {/* 3. COLLECTIONS GRID */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>The Collections</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300, maxWidth: '640px' }}>Curated for every corporate milestone.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {collections.map((collection) => (
                <ScrollReveal key={collection.slug}>
                  <Link href={`/collections/${collection.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <article className="card-hover" style={{ borderRadius: 'var(--radius-card)', border: '1px solid var(--color-gold-soft)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 200ms ease-out, box-shadow 200ms ease-out' }}>
                      <NishawImage src={`/images/collections/${collection.slug}.jpg`} alt={`${collection.name} corporate gifts - Nishaw`} aspect="4:5" caption={collection.name} style={{ borderRadius: 0, border: 'none' }} />
                      <div style={{ padding: '20px 20px 18px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <div className="eyebrow" style={{ color: `var(--color-${collection.accent})`, marginBottom: '12px' }}><span aria-hidden="true" style={{ marginRight: '8px' }}>♦</span>{collection.name}</div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'var(--text-h4)', fontWeight: 300, marginBottom: '24px' }}>{collection.promise}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-gold-soft)', fontSize: 'var(--text-body-sm)' }}>
                          <span style={{ color: 'var(--color-ink-soft)' }}>Explore collection</span>
                          <span style={{ color: 'var(--color-emerald)' }}>&rarr;</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider />

      {/* 5. NEW: SIGNATURE CURATIONS */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper-deep)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>Signature Curations</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontStyle: 'italic', fontWeight: 300, maxWidth: '640px', marginBottom: '16px' }}>Three gifts worth knowing by name.</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--color-ink-soft)', maxWidth: '540px' }}>Our most requested combinations, perfected over time. A starting point for your own bespoke adaptation.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {curations.map((curation) => (
                <ScrollReveal key={curation.slug}>
                  <article style={{ border: '1px solid var(--color-gold-soft)', borderRadius: 'var(--radius-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-paper)', boxShadow: 'var(--shadow-card)' }}>
                    <NishawImage src={`/images/curations/${curation.slug}.jpg`} alt={`${curation.name} curation by Nishaw`} aspect="4:5" caption={curation.name} style={{ borderRadius: 0, border: 'none' }} />
                    <div style={{ padding: '24px' }}>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 400, marginBottom: '6px' }}>{curation.name}</h3>
                      <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 300, fontSize: 'var(--text-body)', color: 'var(--color-ink-soft)', marginBottom: '16px' }}>{curation.promise}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {curation.items.map((item, i) => (
                          <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', paddingLeft: '14px', position: 'relative' }}>
                            <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: '4px', fontSize: '8px', color: 'var(--color-gold)' }}>♦</span> {item}
                          </li>
                        ))}
                      </ul>
                      <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--color-ink-faint)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink)' }}>
                        <span style={{ color: 'var(--color-ink-soft)' }}>From </span><span style={{ fontWeight: 600 }}>{curation.from}</span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 300, fontSize: 'var(--text-body)', color: 'var(--color-ink-soft)', textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>Every Nishaw curation is adapted to the recipient, occasion and budget.</p>
              <Button href="/contact" variant="ghost">Begin your curation &rarr;</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Divider */}
      <Divider />

      {/* 7. NEW: FIND YOUR GIFTING RANGE */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>Find Your Range</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300 }}>What does your occasion call for?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {budgetBands.map((band, i) => (
                <ScrollReveal key={i}>
                  <Link href={band.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <div className="budget-tile" style={{ backgroundColor: 'var(--color-paper)', border: '1px solid var(--color-gold-soft)', borderLeft: '3px solid var(--color-emerald)', borderRadius: 'var(--radius-card)', padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', transition: 'border-left-color 200ms, background-color 200ms' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', fontWeight: 300, color: 'var(--color-ink)', letterSpacing: '-0.02em' }}>{band.range}</div>
                      <div className="eyebrow">{band.label}</div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', lineHeight: 1.65, margin: 0 }}>{band.desc}</p>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-emerald)', marginTop: 'auto', paddingTop: '8px' }}>Explore &rarr;</div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Divider */}
      <Divider />

      {/* 9. BESPOKE BAND */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper-deep)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
              <div style={{ flexShrink: 0 }}>
                <GoldSeal />
              </div>
              <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <Eyebrow>House of Bespoke</Eyebrow>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300, marginTop: '8px' }}>No two gifts. No two impressions.</h2>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--color-ink-soft)', lineHeight: 1.6, maxWidth: '480px' }}>
                  For those crucial moments that demand something entirely unprecedented, we offer a full-scale bespoke service. From conceptualisation and artisan sourcing to custom tooling and unique materials, we build the perfect gift from the ground up.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <Button href="/contact">Book a consultation</Button>
                  <Button href="/collections/bespoke-hampers" variant="ghost">View past commissions</Button>
                </div>
              </div>
              <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
                <NishawImage src="/images/bespoke/editorial.jpg" alt="A Nishaw team member carefully arranging premium gift items in a bespoke box" aspect="3:2" caption="House of Bespoke" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Divider */}
      <Divider />

      {/* 11. HOW WE GIFT */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>The Process</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300 }}>How we work together</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
              {steps.map((step) => (
                <ScrollReveal key={step.num}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', color: 'var(--color-gold)', fontStyle: 'italic' }}>{step.num}.</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 400 }}>{step.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink-soft)', lineHeight: 1.6 }}>{step.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. Divider */}
      <Divider />

      {/* 13. THE GIFT REGISTER */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper-deep)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <Eyebrow>The Gift Register</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300, maxWidth: '640px' }}>Join the companies leaving better impressions.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--color-ink-soft)', maxWidth: '540px', textAlign: 'center', lineHeight: 1.6 }}>
                From ambitious startups to storied institutions, our clients share a common understanding: the right gift at the right moment changes everything.
              </p>
              <Button href="/contact">Speak to our team</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 14. BRAND QUOTE (replaces testimonials until verified quotes available) */}
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
        <section style={{ backgroundColor: 'var(--color-emerald)', borderTop: '1px solid var(--color-emerald-bright)', padding: 'clamp(56px, 8vw, 80px) 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: 640, margin: '0 auto' }}>
            <ScrollReveal>
              <span aria-hidden style={{ display: 'block', color: 'var(--color-gold)', fontSize: 'var(--text-h3)', opacity: 0.4, marginBottom: 16 }}>♦</span>
              <blockquote>
                <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#FBF7EF', lineHeight: 1.5, margin: '0 0 32px' }}>
                  The gift reflects the giver. Let&rsquo;s make sure yours reflects well.
                </p>
              </blockquote>
              <Link href="/contact" className="btn btn-gold btn-lg">Talk to a Gifting Concierge</Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 15. NEW: GALLERY STRIP */}
      <section style={{ backgroundColor: 'var(--color-paper-deep)', padding: 'clamp(56px, 8vw, 80px) 0', borderTop: '1px solid var(--color-gold-soft)' }}>
        <ScrollReveal>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <Eyebrow>The Gallery</Eyebrow>
            <Link href="/gallery" className="link-draw" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink)' }}>See the full gallery &rarr;</Link>
          </div>
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }} className="gallery-scroll">
            <style dangerouslySetInnerHTML={{ __html: `.gallery-scroll::-webkit-scrollbar { display: none; }` }} />
            {gallerySlots.map((slot) => (
              <div key={slot.slug} style={{ flexShrink: 0, width: 'clamp(200px, 30vw, 280px)', scrollSnapAlign: 'start' }}>
                <NishawImage src={`/images/gallery/${slot.slug}.jpg`} alt={slot.alt} aspect="1:1" />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <span className="script" style={{ color: 'var(--color-gold)', fontSize: 'var(--text-script)' }}>The Nishaw Look</span>
          </div>
        </ScrollReveal>
      </section>

      {/* 15. Divider */}
      <Divider />

      {/* 16. CLOSING BAND */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-paper)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 300, marginBottom: '24px' }}>Ready to elevate your corporate gifting?</h2>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact" variant="gold" size="lg">Talk to a Gifting Concierge</Button>
              <Button href="/collections" variant="ghost" size="lg">Browse Collections</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
