# NISHAW — AI Build Prompt Pack
### Premium & Bespoke Corporate Gifting — paste-ready prompts for v0 / Lovable / Bolt / Cursor / Antigravity / Framer

**Contact baked into the site:** hello@nishaw.com · +91 87589 93307 · WhatsApp `https://wa.me/918758993307`
**Tagline:** *Say more than thank you.* · **Positioning:** *Reserved for the remarkable.*

---

## 0. Which tool, and how to prompt it

| Tool | Best for | How it likes to be prompted |
|---|---|---|
| **v0 (Vercel)** ⭐ recommended | Design-forward marketing site with the *cleanest SEO-ready Next.js code* | Explicit technical detail — components, states, breakpoints |
| **Framer AI** ⭐ alt for speed | Fastest path to a beautiful, motion-rich site with built-in animation + decent SEO | Describe the vibe + section flow; refine visually |
| **Lovable** | Full build with backend/forms | Rich context on user journey & experience |
| **Bolt** | Rapid prototype | Terse, focused briefs |
| **Cursor / Antigravity** | Refining / owning the code | Show existing project structure first |

**Recommendation for Nishaw:** build in **v0 → export to Next.js** (best for Google ranking and full control of motion), or **Framer** if you want no-code with gorgeous motion out of the box. All prompts below are tool-agnostic; feed Prompt 1 first, approve, then go page by page.

---

## 1. Design & Motion Philosophy (the "wow corporate, zero fluff" rules)

**Look:** warm editorial luxury. Cream paper base, espresso ink, jewel-tone accents, champagne-gold hairlines, a high-contrast serif for headlines, small-caps eyebrow labels. Contained max-width (~1200px) with generous whitespace so it reads like a premium object, not a busy store. *(Optional "executive" variant: deep charcoal-ink background with gold — offer both to the client.)*

**Colour tokens**
```
--paper #F7F1E1  --paper-deep #EFE7D2  --ink #3A2E28  --ink-soft #6B5A4E
--terracotta #A8443A  --pine #2F5D50  --sapphire #2E4A6B  --plum #6E3B52
--gold #B8934A  --gold-soft #D9C48F
```
**Type:** headings *Fraunces* (italic cut for taglines) · body *Newsreader* · eyebrows all-caps letter-spacing 0.18em · one script accent (*Tangerine*) for the logo flourish + closing note only.

### Every animation, and why it exists
> Rule: if you can't state the purpose, delete it. Timing 150–250ms, ease-out on entry. Max 4–5 per page. Always ship a `prefers-reduced-motion` fallback (accessibility + protects Google INP score).

| Animation | Where | Purpose (the "thought") | Spec |
|---|---|---|---|
| **Fade + rise** | Section headings & cards on scroll | Creates narrative rhythm; reveals one idea at a time so nothing overwhelms | 16px rise, 500ms, ease-out, `IntersectionObserver`, once |
| **Hairline underline draw** | Nav links, text CTAs | Confirms hover target on a calm layout without color noise | 200ms, ease-out, gold |
| **Card lift + shadow bloom** | Collection cards | Signals "this is clickable / openable" — mirrors lifting a gift lid | translateY -4px + soft shadow, 200ms |
| **Hero image slow parallax** | Home hero only | Adds depth and a sense of craft; one hero, not everywhere | ≤8% translate on scroll, eased |
| **Split-text reveal** | Home H1 + Story H1 only | Draws the eye to the single most important line per page | word-by-word 30ms stagger, 400ms |
| **Gold seal / ribbon micro-draw** | Bespoke section entry | Reinforces the gifting metaphor at the emotional peak of the page | SVG path draw 700ms, once |
| **Button press feedback** | All buttons | Reassures the tap registered (esp. mobile) | scale 0.98, 120ms |
| **Form success state** | Contact | Confirms submission, replaces anxiety with delight | checkmark draw + copy swap |
| **Sticky mobile action bar slide-up** | Mobile, after hero | Puts Email + WhatsApp one thumb-tap away at all times | slide-up 250ms on scroll past hero |

Explicitly **banned:** auto-rotating carousels, bouncing icons, entrance animations on every element, parallax on more than the hero, anything over 500ms.

---

## 2. Site map (creative names + SEO-anchored H1s)

Nav: **The Collections · Bespoke · How We Gift · For Enterprises · The Gift Register · The Nishaw Story · The Art of Giving · Start a Conversation**

Collections (display name / SEO H1 + slug / accent):
1. First Light / *Employee Welcome Kits & Onboarding Gifts* `/collections/welcome-kits` / pine
2. The Long Game / *Work Anniversary & Milestone Gifts* `/collections/milestone-gifts` / sapphire
3. Standing Ovation / *Rewards & Recognition Gifts* `/collections/rewards-recognition` / gold
4. The Inner Circle / *Client & VIP Corporate Gifts* `/collections/client-vip-gifts` / plum
5. Season of Light / *Festive & Diwali Corporate Gifting* `/collections/festive-diwali-gifts` / terracotta
6. The Corner Office / *Executive & CXO Luxury Gifts* `/collections/executive-gifts` / sapphire
7. Warm Regards / *Farewell, Retirement & Thank-You Gifts* `/collections/farewell-gifts` / plum
8. Grand Gatherings / *Event, Conference & Bulk Gifting* `/collections/event-gifting` / pine
9. House of Bespoke / *Fully Custom Gift Hampers* `/collections/bespoke-hampers` / gold

---

## 3. THE PROMPTS

### PROMPT 1 — Project + design system (paste first)
```
Build a premium marketing website for "Nishaw", a luxury & bespoke corporate gifting brand in India.
Stack: Next.js (App Router) + TypeScript + Tailwind + Framer Motion. Production-quality, SEO-optimized, fully responsive (test 375 / 768 / 1440px).

VOICE: warm, editorial, understated luxury. Never salesy. Tagline "Say more than thank you." Positioning "Reserved for the remarkable."

DESIGN SYSTEM (put in tailwind config + CSS variables):
- Colors: paper #F7F1E1, paper-deep #EFE7D2, ink #3A2E28, ink-soft #6B5A4E, terracotta #A8443A, pine #2F5D50, sapphire #2E4A6B, plum #6E3B52, gold #B8934A, gold-soft #D9C48F.
- Fonts (Google): headings Fraunces (italic cut for taglines), body Newsreader, eyebrow labels all-caps 0.18em tracking, one script font Tangerine for logo flourish + closing note only.
- Layout: contained max-width 1200px, generous whitespace, rounded 16px cards, 1px gold/accent hairline & dashed borders, ~4% paper-grain texture overlay, a gold diamond ♦ divider between sections.

MOTION PHILOSOPHY — restraint is the point. Every animation must have a clear purpose; max 4–5 per page; 150–250ms, ease-out on entry; add a prefers-reduced-motion fallback that disables motion. Implement exactly these and nothing more:
1) fade+rise (16px, 500ms) on section headings/cards via IntersectionObserver, once.
2) gold hairline underline draw on nav + text links (200ms).
3) card lift -4px + soft shadow on collection cards (200ms).
4) subtle hero parallax (<=8%) on the HOME hero only.
5) split-text word reveal on the HOME and STORY H1 only (30ms stagger).
6) button press scale 0.98 (120ms).
Ban: auto-carousels, bouncing, entrance anims on every element, parallax anywhere but the hero, anything >500ms.

Scaffold the shared components (Header, Footer, Section with eyebrow+♦ divider, Card variants, Button primary-gold/ghost, ScrollReveal wrapper, MobileActionBar) and a /styleguide page. Do NOT build content pages yet — show me the styleguide first.
```

### PROMPT 2 — Global header, footer & MOBILE Email + WhatsApp bar
```
Header: sticky, transparent over the hero, fades to cream with a hairline bottom border on scroll. Left: script "Nishaw" wordmark. Right nav: The Collections, Bespoke, How We Gift, For Enterprises, The Gift Register, The Nishaw Story, The Art of Giving. Primary gold button "Start a Conversation" -> /contact. On mobile, nav collapses to a slide-in panel.

MOBILE ACTION BAR (required): on screens < 768px, show a fixed bottom bar that slides up once the user scrolls past the hero, with TWO equal buttons:
- "Email" -> mailto:hello@nishaw.com  (mail icon)
- "WhatsApp" -> https://wa.me/918758993307?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20corporate%20gifting  (whatsapp icon, gold)
Bar sits above safe-area inset, subtle top shadow, slide-up 250ms. Hidden on desktop (desktop shows email + phone in the header/footer instead).

Footer: collections list, company links, hello@nishaw.com, +91 87589 93307, a WhatsApp link, and a newsletter opt-in labelled "The Art of Giving — occasional notes on gifting well". Add Organization + LocalBusiness JSON-LD (name Nishaw, email hello@nishaw.com, phone +91 87589 93307, areaServed India).
```

### PROMPT 3 — Home
```
Build the Home page. Sections:
1) HERO: eyebrow "BESPOKE CORPORATE GIFTING"; H1 (Fraunces, split-text reveal) "Say more than thank you."; sub "Curated and custom-made gifts for the people who move your business forward — clients, teams, and the ones you can't afford to forget."; CTAs "Explore the Collections" (gold) + "Design a Bespoke Gift" (ghost); warm premium hero image with subtle parallax.
2) TRUST STRIP: muted, letter-spaced — "Trusted by fast-growing startups, banks & enterprises · 500+ gifts delivered · Pan-India logistics · GST invoicing".
3) THE COLLECTIONS: eyebrow "WHERE TO BEGIN", line "Nine ways to be remembered.", responsive 3/2/1-col grid of 9 colour-coded cards (name + one-line promise + accent). Cards use lift-on-hover. Promises:
First Light — "Make day one unforgettable." · The Long Game — "Reward the years, not just the results." · Standing Ovation — "For work that deserves applause." · The Inner Circle — "For the clients you never want to lose." · Season of Light — "Diwali, done beautifully." · The Corner Office — "Gifts with a boardroom pedigree." · Warm Regards — "Goodbyes, thank-yous and quiet gratitude." · Grand Gatherings — "Hundreds of gifts, one flawless impression." · House of Bespoke — "Dreamt up with you, made only for them."
4) BESPOKE BAND: eyebrow "HOUSE OF BESPOKE", H2 "No two gifts. No two impressions.", body, CTA "Start a Bespoke Project". Trigger the gold seal micro-draw on entry.
5) HOW WE GIFT: 4 dashed-border step cards — Tell us the story / We curate & design / Approve & personalise / We deliver, everywhere.
6) THE GIFT REGISTER: 3 case-study cards + one italic testimonial with a gold quote mark.
7) CLOSING BAND: script header "One last thing.", line "A gift is the shortest sentence that says 'you matter.' Let's write yours.", CTA "Start a Conversation".
Apply fade+rise per section. Verify no layout shift on mobile.
```

### PROMPT 4 — Collections index + the 9 collection pages
```
Create /content/collections.ts with the 9 collections: displayName, seoH1, slug, accent, promiseLine, 4 exampleItems, budgetBand, idealQuantity, leadTime, and a 300-word SEO body. Data:
1 First Light / "Employee Welcome Kits & Onboarding Gifts" / welcome-kits / pine
2 The Long Game / "Work Anniversary & Milestone Gifts" / milestone-gifts / sapphire
3 Standing Ovation / "Rewards & Recognition Gifts" / rewards-recognition / gold
4 The Inner Circle / "Client & VIP Corporate Gifts" / client-vip-gifts / plum
5 Season of Light / "Festive & Diwali Corporate Gifting" / festive-diwali-gifts / terracotta
6 The Corner Office / "Executive & CXO Luxury Gifts" / executive-gifts / sapphire
7 Warm Regards / "Farewell, Retirement & Thank-You Gifts" / farewell-gifts / plum
8 Grand Gatherings / "Event, Conference & Bulk Gifting" / event-gifting / pine
9 House of Bespoke / "Fully Custom Gift Hampers" / bespoke-hampers / gold

/collections index: eyebrow "THE COLLECTIONS", H1 "Nine ways to be remembered.", the 9-card grid.

/collections/[slug] template: coloured header band in the accent; eyebrow = displayName; H1 = seoH1 (this is the real ranking title, also the <title> and meta description base); italic lead = promiseLine; "What's inside" = 4 illustrated item cards; a "For the memory" callout box; a labelled mini-grid (Personalisation / Typical budget / Ideal quantity / Lead time); the 300-word SEO body; CTA "Request this Collection" -> /contact?occasion=<slug>. Add OfferCatalog + BreadcrumbList JSON-LD. Descriptive alt text on every image.
```

### PROMPT 5 — Bespoke, How We Gift, For Enterprises
```
/bespoke: eyebrow "HOUSE OF BESPOKE", H1 "Bespoke Corporate Gifting & Custom Hampers", tagline "Made for the few who expect more." 5 illustrated steps (Brief → Concept & moodboard → Curation & sampling → Personalisation: logo in gold foil, custom box, handwritten notes → White-glove delivery). "What we can customise" list, "Signature touches" (blind-emboss/gold-foil logo, wax seal, bilingual notes, sustainable option), a gallery, CTA "Start a Bespoke Project" -> /contact?occasion=bespoke.

/how-we-gift: H1 "How Corporate Gifting Works with Nishaw". The journey, timelines, minimum order guidance, personalisation limits, logistics, GST/invoicing, reorder support, and an FAQ accordion (add FAQPage JSON-LD).

/for-enterprises: H1 "Bulk & Enterprise Corporate Gifting Solutions". For HR/procurement buyers — bulk pricing, dedicated account manager, brand-kit storage, multi-address split shipping, tracking dashboards, GST invoicing, annual gifting calendar, NDAs. CTA "Request an Enterprise Quote".
```

### PROMPT 6 — Gift Register, Story, Journal
```
/gift-register: H1 "Corporate Gifting Case Studies". Elegant story cards (the brief → what we made → the moment it created), quiet metrics where possible, italic testimonials with gold quote marks.

/story: H1 "About Nishaw". Founders' note in warm first person (this is where the brand voice shines), craft philosophy ("the gift reflects the giver"), sourcing & makers, sustainability, the meaning of the name. Split-text reveal on the H1. End with a script sign-off + date, like a handwritten gift note.

/journal (The Art of Giving): H1 "Corporate Gifting Ideas & Guides" — a blog hub grid. /journal/[slug]: MDX article template, warm header image, related-collection CTA, Article JSON-LD. Seed 3 posts: "The 2026 Corporate Diwali Gifting Guide (by budget)", "Employee Welcome Kits: what to include (and skip)", "Client Gifting Etiquette in India: dos, don'ts & GST".
```

### PROMPT 7 — Contact + ship
```
/contact: H1 "Talk to Nishaw". Warm intro; form fields: Name, Company, Work Email, Phone, Occasion (dropdown = 9 collections + Bespoke, pre-select from ?occasion=), Quantity, Budget band, Timeline, Message. Inline validation; animated success state ("Wonderful. We'll be in touch within one working day — let's make someone feel remarkable."). Beside the form show hello@nishaw.com, +91 87589 93307, and a WhatsApp button (https://wa.me/918758993307). Wire the form to Formspree or a Next route handler emailing hello@nishaw.com.

FINALISE sitewide: per-page <title>/meta from the SEO H1s; sitemap.xml + robots.txt; Open Graph images; lazy-load images; ensure prefers-reduced-motion disables all motion; run Lighthouse and reach Performance/SEO/Accessibility/Best-Practices >= 95 on mobile; fix any CLS/contrast issues. Produce a walkthrough.
```

---

## 4. Image Prompts (elevated for corporate "wow")

Two visual layers: **(A) cinematic still-life photography** for hero/collections (this is what impresses corporate buyers), and **(B) fine gold-line illustration** for dividers/icons (keeps the editorial warmth). Pick one primary; A is recommended for premium credibility.

**STYLE SUFFIX (A — append to all photo prompts):** *cinematic product still-life photography, warm cream backdrop (#F7F1E1), soft directional window light, champagne-gold accents, shallow depth of field, elegant minimal composition, luxury editorial feel, generous negative space, no text, no logos, ultra-detailed, 4k. --no clutter, harsh flash, neon, cartoon*

- **Hero:** a single exquisite closed gift box tied with silk ribbon and a wax seal, one sprig of eucalyptus, on cream linen, centred with space. *(+A)*
- **First Light (welcome kit):** flat-lay of premium onboarding items — leather journal, brass pen, matte bottle, artisan treats — in an open keepsake box, pine-green ribbon. *(+A)*
- **The Long Game (milestone):** an engraved keepsake beside a ribboned box, a subtle hourglass, sapphire accents. *(+A)*
- **Standing Ovation (rewards):** a premium hamper with a gold rosette, soft confetti-light bokeh. *(+A)*
- **The Inner Circle (VIP):** one dark, textured gift box with gold-foil edging and a wax seal, plum accents, exclusive and restrained. *(+A)*
- **Season of Light (Diwali):** a festive premium hamper with diyas, marigold, dry-fruit boxes, warm glow, terracotta + gold. *(+A)*
- **The Corner Office (executive):** leather folio, fine fountain pen, a crystal decanter keepsake, boardroom-refined, sapphire + gold. *(+A)*
- **Warm Regards (farewell):** a gentle gift with a handwritten note peeking out, soft dried florals, plum accents. *(+A)*
- **Grand Gatherings (bulk):** a rhythmic row of identical elegant boxes, premium at scale, pine accents. *(+A)*
- **House of Bespoke:** an artisan's styling table — ribbon swatches, a colour palette, a gold embossing stamp, a box mid-design. *(+A)*
- **Dividers / icons (B):** *minimal fine gold single-line illustration of [a ribbon / a gift box / a wax seal / a diamond ♦], on cream, elegant, lots of space, no text.*

> Generate each 3–4×; keep the cleanest composition with a true cream background. Keep the logo/monogram as separate crisp SVG.

---

## 5. SEO — to rank for "innovative gifting" & "premium gifting"

**The winning structure (from what actually ranks in this niche): don't rely only on category pages — add occasion pages and budget-band pages, because that's where high-intent buyers search.**

**Primary keyword targets**
- premium corporate gifting · luxury corporate gifts · innovative corporate gifting · unique corporate gifts India
- customized / personalized corporate gifts · premium corporate gift hampers
- corporate gifting company [+ city: Navi Mumbai / Mumbai] (add your service city — huge for local intent)

**Occasion pages (high commercial intent — build as collection or journal landing pages):**
Diwali corporate gifts · New Year corporate gifts · employee welcome kits · work anniversary gifts · client thank-you gifts · Rakhi/festive corporate gifts · conference & event gifting.

**Budget-band pages (this is the single highest-ROI SEO move in gifting):**
"Corporate gifts under ₹500 / under ₹1,000 / ₹1,000–₹2,500 / premium gifts above ₹5,000." Each a real page with curated examples.

**On-page rules**
- Creative name = eyebrow/kicker; keyword phrase = the single H1, the <title> (~55 chars) and meta description (~155 chars); keyword in the URL slug.
- 250–400 words of genuine copy per commercial page (thin pages don't rank).
- Internal links: Home → Collections → occasion/budget pages → related Journal article → Contact.
- Fast, mobile-first, Core Web Vitals green (your restrained motion + lazy images help INP directly).

**Schema (JSON-LD):** Organization + LocalBusiness (Nishaw, hello@nishaw.com, +91 87589 93307), OfferCatalog per collection, FAQPage on How We Gift, BreadcrumbList sitewide, Article on journal posts.

**Off-page / local**
- Google Business Profile: category "Corporate Gift Supplier", consistent NAP everywhere, photos, service list.
- List on Indian B2B directories; earn a few PR/blog backlinks; collect client reviews.
- Publish festive occasion pages 6–8 weeks *before* each season — search starts weeks ahead of festivals.

**Launch journal calendar (write occasion pieces first — they rank and convert):**
1 2026 Corporate Diwali Gifting Guide (by budget) · 2 Employee welcome kits: what to include · 3 Client gifting etiquette in India (+GST) · 4 Innovative corporate gift ideas for 2026 · 5 Work-anniversary gifts that don't feel corporate · 6 Luxury vs premium corporate gifts · 7 Bulk gifting without chaos (500+) · 8 Sustainable corporate gifting · 9 Tasteful logo placement (foil/emboss/engrave) · 10 A 12-month HR gifting calendar.

---

## 6. Launch checklist
- [ ] Styleguide approved before full build
- [ ] Mobile Email + WhatsApp bar tested on a real phone
- [ ] prefers-reduced-motion verified (all motion stops)
- [ ] Every commercial page ≥250 words, unique H1/title/meta
- [ ] Occasion + budget-band pages live
- [ ] 3–4 journal posts at launch, rest scheduled around festivals
- [ ] JSON-LD passes Rich Results Test; sitemap in Search Console
- [ ] Google Business Profile live; NAP consistent (Nishaw · hello@nishaw.com · +91 87589 93307)
- [ ] Lighthouse ≥95 mobile across the board
- [ ] Analytics + Search Console connected

---
*Aesthetic warmth from your reference book; structure, motion discipline, and SEO modelled on what currently ranks and wins in premium corporate gifting. Build in v0/Next.js or Framer, feed prompts in order, approve the styleguide first.*
