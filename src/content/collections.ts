/* ─────────────────────────────────────────────────────────────────────────
   Nishaw, Collection Content
   Single source of truth for all 9 collections.
   Used by /collections index, /collections/[slug] dynamic pages,
   the home-page grid, and JSON-LD structured data.
   ──────────────────────────────────────────────────────────────────────── */

export type AccentColor = "pine" | "sapphire" | "gold" | "plum" | "terracotta";

export interface CollectionItem {
  /** Display name shown on the card */
  name: string;
  /** 1-2 sentence editorial description */
  description: string;
  /** Decorative Unicode glyph for the card illustration circle */
  glyph: string;
}

export interface Collection {
  /** Short, warm brand display name */
  displayName: string;
  /** SEO H1, real ranking title; also used as <title> and meta description base */
  seoH1: string;
  /** URL slug, e.g. "welcome-kits" */
  slug: string;
  /** Jewel-tone accent for this collection */
  accent: AccentColor;
  /** One-line emotional promise */
  promiseLine: string;
  /** 4 representative items inside this collection */
  exampleItems: [CollectionItem, CollectionItem, CollectionItem, CollectionItem];
  /** 2-3 sentence editorial callout, "For the memory" box */
  forTheMemory: string;
  /** e.g. "₹2,000 – ₹7,000 per kit" */
  budgetBand: string;
  /** e.g. "Recipient name, designation, company logo, handwritten note" */
  personalisation: string;
  /** e.g. "10 – 500+ per batch" */
  idealQuantity: string;
  /** e.g. "7–10 working days from brief approval" */
  leadTime: string;
  /** ~300-word editorial SEO body in plain text (no markdown) */
  seoBody: string;
  /**
   * Optional contextual cross-links shown in the sidebar.
   * Each entry: { label — the link text; href — the destination }
   * Use these to surface related collections, Nishaw Experiences, or editorial pages.
   */
  crossLinks?: Array<{ label: string; href: string; note?: string }>;
}

/* ════════════════════════════════════════════════════════════════════════
   THE NINE COLLECTIONS
   ════════════════════════════════════════════════════════════════════════ */
export const collections: Collection[] = [

  /* ── 1. FIRST LIGHT ───────────────────────────────────────────────────── */
  {
    displayName:  "First Light",
    seoH1:        "Employee Welcome Kits & Onboarding Gifts",
    slug:         "welcome-kits",
    accent:       "pine",
    promiseLine:  "Make day one unforgettable.",
    exampleItems: [
      {
        name:        "Leather-bound journal",
        description: "Full-grain leather cover with gold foil initials and 192 ivory-cream pages. The kind of journal someone keeps for a decade.",
        glyph:       "◎",
      },
      {
        name:        "Brass pen & pencil set",
        description: "Solid brass barrel rollerball and a cedar HB pencil in a slim navy cloth roll. Weighted to write beautifully from the first stroke.",
        glyph:       "✐",
      },
      {
        name:        "Artisan snack selection",
        description: "Small-batch roasted nuts, single-origin dark chocolate, and hand-poured salted caramel from independent makers. Packed in a paper-lined kraft tray.",
        glyph:       "✦",
      },
      {
        name:        "Branded canvas tote",
        description: "Heavyweight natural canvas with a blind-embossed brand mark. Structured, generous, and good enough to use every day for years.",
        glyph:       "◆",
      },
    ],
    forTheMemory: "The first day at a new company is charged with a particular kind of hope. A First Light kit says, before a single meeting or Slack message, that you were expected here, and that someone thought about you. That is all a welcome gift needs to do. We just help you do it beautifully.",
    budgetBand:      "₹2,000 – ₹7,000 per kit",
    personalisation: "Recipient name, designation, company logo, handwritten or printed note card",
    idealQuantity:   "10 – 500+ per batch",
    leadTime:        "7 – 10 working days from brief approval",
    crossLinks: [
      { label: "Pair it with a Welcome Book",        href: "/bespoke",        note: "The Nishaw Press" },
      { label: "For team activations: Nishaw Experiences", href: "/experiences", note: "Workshop-in-a-box kits" },
      { label: "Milestone gifts for the same team",  href: "/collections/milestone-gifts", note: "The Long Game" },
    ],
    seoBody: `Employee welcome kits occupy a singular position in the corporate gifting calendar. The moment someone accepts an offer and walks through your door, physically or virtually, they are still making up their minds about you. The onboarding gift is one of the few chances a company has to leave a first impression before the work begins.

At Nishaw, First Light kits are built around one question: what does it feel like to be new here? We speak to HR leaders and founders to understand the company's culture, its warmth, its ambition, the particular way it treats people, and then curate items that quietly communicate all of that. A supple leather journal with the new hire's initials. A brass pen that feels like it was made for a writer. Artisan snacks from producers who care about what they make. A handwritten note in our signature style, on cream paper.

We believe employee welcome gifts in India have long been undersold. Generic branded merchandise, company-logo mugs, cheap tote bags, mass-printed planners, sends exactly the wrong signal on day one. The message isn't 'welcome.' The message is 'we didn't think about you specifically.' First Light is the opposite of that.

Every kit is assembled with personalisation built in. For pan-India rollouts, we manage the logistics of split shipping to multiple cities, so your HR team receives one invoice and no logistical headaches. For startups welcoming their first ten hires, we give the same attention to ten boxes as we would to five hundred.

Typical budgets begin at ₹2,000 per kit and scale with the brief. Lead times are 7–10 working days from brief sign-off. For large-volume orders with multiple SKUs or custom packaging, we recommend a 14-day runway. If you'd like to see sample kits before committing to an order, we'd be glad to arrange that.`,
  },

  /* ── 2. THE LONG GAME ─────────────────────────────────────────────────── */
  {
    displayName:  "The Long Game",
    seoH1:        "Work Anniversary & Milestone Gifts",
    slug:         "milestone-gifts",
    accent:       "sapphire",
    promiseLine:  "Reward the years, not just the results.",
    exampleItems: [
      {
        name:        "Engraved keepsake box",
        description: "Solid walnut or lacquered mango wood, engraved with the recipient's name and their years of service. Built to sit on a desk for decades.",
        glyph:       "◎",
      },
      {
        name:        "Single-estate whisky or wine",
        description: "A curated bottle from a region chosen to match the recipient's known taste, Scotch, Bourbon, or a fine Indian single malt. Presented in a silk-lined gift sleeve.",
        glyph:       "✦",
      },
      {
        name:        "Personalised leather portfolio",
        description: "A slim A4 portfolio in full-grain leather, blind-stamped with the recipient's monogram. Fitted with a notepad, card pockets, and a pen loop.",
        glyph:       "✐",
      },
      {
        name:        "Luxury spa & wellness hamper",
        description: "A curated selection of artisan bath soaks, cold-pressed oils, and a handmade candle from boutique Indian makers. For the moment after the milestone.",
        glyph:       "◆",
      },
    ],
    forTheMemory: "Five years. Ten years. Twenty. These are not just employment anniversaries, they are chapters of a life someone chose to spend at your company. The Long Game exists to honour that choice with something that reflects its weight: unhurried, personal, and genuinely worth receiving.",
    budgetBand:      "₹3,500 – ₹15,000 per gift",
    personalisation: "Years of service, name, personal message, monogram on leather goods",
    idealQuantity:   "1 – 200 per order",
    leadTime:        "5 – 10 working days from brief approval",
    crossLinks: [
      { label: "For the send-off: Warm Regards",            href: "/collections/farewell-gifts",       note: "Farewell & retirement gifts" },
      { label: "For senior recipients: The Corner Office",  href: "/collections/executive-gifts",      note: "Executive & CXO gifts" },
      { label: "Recognition gifts for the same team",      href: "/collections/rewards-recognition",   note: "Standing Ovation" },
    ],
    seoBody: `Work anniversary gifts and milestone recognition presents occupy a deeply personal place in the corporate gifting spectrum. When someone reaches three years, five years, or two decades at a company, the gift they receive, or don't receive, becomes part of the story they tell about that organisation for the rest of their career.

The Long Game collection at Nishaw is designed for exactly this moment. We build each gift around the specific person: their tenure, their personality, what they've contributed, and what they would actually enjoy receiving. This is not a catalogue of standardised plaques or generic branded merchandise. It is a collection of beautifully made objects, each of which can be personalised to carry the weight of the occasion.

An engraved walnut keepsake box with the recipient's name and years of service. A single-estate whisky chosen for their known taste, presented in a silk-lined sleeve. A slim full-grain leather portfolio blind-stamped with their monogram. A curated wellness hamper for the quiet evening after the applause.

For HR leaders and culture teams, The Long Game offers a way to standardise the category without standardising the feeling. We can work across multiple tenure tiers, three-year gifts, five-year gifts, ten-year gifts, with a curated offering at each level that feels appropriate to the milestone without being formulaic.

We also believe that milestone gifts for employees benefit from being slightly private: presented in a small meeting rather than an all-hands, accompanied by a personal note from a direct manager or founder. We can provide guidance on the ceremony around the gift, not just the gift itself.

Budget bands begin at ₹3,500 and scale to ₹15,000 and beyond for senior or long-tenured recipients. Lead times are typically 5–10 working days, making it possible to respond to anniversaries as they arise.`,
  },

  /* ── 3. STANDING OVATION ──────────────────────────────────────────────── */
  {
    displayName:  "Standing Ovation",
    seoH1:        "Rewards & Recognition Gifts",
    slug:         "rewards-recognition",
    accent:       "gold",
    promiseLine:  "For work that deserves applause.",
    exampleItems: [
      {
        name:        "Crystal recognition trophy",
        description: "Hand-cut optical crystal with a laser-engraved personalised message and award title. Heavy, clear, and quietly spectacular on any desk.",
        glyph:       "✦",
      },
      {
        name:        "Premium fountain pen set",
        description: "A boxed set of a gold-nib fountain pen, ink converter, and two bottles of rich ink in a velvet-lined presentation case. For those who still write.",
        glyph:       "✐",
      },
      {
        name:        "Curated experience voucher",
        description: "A fine-dining experience, luxury weekend stay, or spa day at a partner property, presented on a card inside a sealed golden envelope.",
        glyph:       "◎",
      },
      {
        name:        "Gold-foil personalized print",
        description: "A limited-edition art print with the award, date, and recipient's name in real gold foil, mounted and ready to frame. A trophy that belongs on a wall.",
        glyph:       "◆",
      },
    ],
    forTheMemory: "Great work is already its own reward, until it isn't. The moment a person goes beyond what was asked of them, the company has a narrow window to show it noticed. Standing Ovation exists for that window. It ensures the recognition arrives in a form that matches the quality of what was done.",
    budgetBand:      "₹5,000 – ₹25,000 per gift",
    personalisation: "Award name, recipient name, achievement date, personal citation message",
    idealQuantity:   "1 – 200 per quarter",
    leadTime:        "7 – 14 working days from brief approval",
    crossLinks: [
      { label: "For milestone tenure: The Long Game",       href: "/collections/milestone-gifts",      note: "Work anniversary gifts" },
      { label: "For a bespoke award commission",            href: "/bespoke",                           note: "House of Bespoke" },
      { label: "For teams: Nishaw Experiences",             href: "/experiences",                       note: "Workshop-in-a-box sessions" },
    ],
    seoBody: `Employee recognition gifts occupy a category that most companies get entirely wrong. The standard approach, a plaque, a certificate, a voucher handed over in a team meeting, communicates effort, but rarely communicates weight. The gift says the company noticed. It doesn't always say the company understood.

Standing Ovation is Nishaw's collection for rewards and recognition: designed for the moments when someone has done something genuinely exceptional and deserves a gift that reflects that. A hand-cut crystal trophy with a personalised message laser-engraved inside. A gold-nib fountain pen in a velvet-lined case. A fine-dining experience voucher delivered in a sealed golden envelope. A limited-edition art print with real gold foil, mounted and ready to frame.

The collection is designed to work across three recognition tiers. Quarterly or monthly awards typically call for something elegant but consistent, a premium pen or a personalised print. Annual 'best of' awards warrant something more significant, the crystal, the experience voucher. Lifetime achievement or extraordinary contribution gifts are built as bespoke commissions in partnership with the recipient's manager or CHRO.

For companies running structured recognition programmes, we can create a custom catalogue at each tier, so that managers can select a gift appropriate to the achievement without starting from scratch each time. We handle personalisation, packaging, and delivery, including same-city next-day delivery for urgent awards.

Corporate recognition culture in India is maturing rapidly. Organisations that once handed out certificates are now investing in gifts that reflect the seriousness with which they take their people. Standing Ovation is designed to support that shift: making recognition feel deliberate, personal, and genuinely worth the moment. Lead times are 7–14 working days. Budgets begin at ₹5,000 and scale with the significance of the achievement.`,
  },

  /* ── 4. THE INNER CIRCLE ──────────────────────────────────────────────── */
  {
    displayName:  "The Inner Circle",
    seoH1:        "Client & VIP Corporate Gifts",
    slug:         "client-vip-gifts",
    accent:       "plum",
    promiseLine:  "For the clients you never want to lose.",
    exampleItems: [
      {
        name:        "Single-origin coffee set",
        description: "Three 100g pouches of traceable single-estate Indian and estate coffee, alongside a hand-thrown ceramic pour-over dripper. For the client who drinks their coffee seriously.",
        glyph:       "◎",
      },
      {
        name:        "Handcrafted leather portfolio",
        description: "An A5 full-grain leather portfolio with a magnetic clasp, engraved with the recipient's initials. Fitted in tissue paper and a linen sleeve.",
        glyph:       "✐",
      },
      {
        name:        "Artisan preserve hamper",
        description: "A curated selection of cold-pressed olive oils, hand-made chutneys, and slow-cooked preserves from independent Indian producers. For the client who appreciates where food comes from.",
        glyph:       "✦",
      },
      {
        name:        "Monogrammed stationery set",
        description: "100 sheets of heavyweight cotton-rag writing paper and matching envelopes, blind-embossed with the recipient's monogram. The kind of stationery that makes letters worth writing.",
        glyph:       "◆",
      },
    ],
    forTheMemory: "The Inner Circle is for the ten clients whose names you know without looking, whose calls you always take, and whose trust took years to build. A gift from this collection says, without saying it, that you understand the difference between a client and a relationship. That understanding is worth protecting.",
    budgetBand:      "₹5,000 – ₹20,000 per gift",
    personalisation: "Recipient name, company, monogram, personal note in our hand",
    idealQuantity:   "5 – 200 per occasion",
    leadTime:        "7 – 10 working days from brief approval",
    crossLinks: [
      { label: "Our Year — the annual client gift",         href: "/bespoke",                           note: "House of Bespoke" },
      { label: "The Founder's Story — for the key account",href: "/bespoke",                           note: "Bespoke narrative gift" },
      { label: "For senior client contacts: The Corner Office", href: "/collections/executive-gifts",  note: "Executive & CXO gifts" },
      { label: "Festive gifting for the same list",        href: "/collections/festive-diwali-gifts",  note: "Season of Light" },
    ],
    seoBody: `Client gifting in India has long operated on a logic of gesture: send something, satisfy the obligation, move on. The best companies understand that this approach, the branded diary, the festival hamper dispatched to a spreadsheet of contacts, does exactly nothing for a relationship. It satisfies a calendar. It doesn't say anything.

The Inner Circle is Nishaw's collection for the clients who matter most: the ones whose business shapes your company's trajectory, whose referrals fill your pipeline, and whose continued trust is worth more than a thousand cold emails. These are not gifts for a distribution list. They are gifts for a person.

We begin each Inner Circle brief with a question: what do we know about them? Dietary preferences. Aesthetic sensibilities. Whether they drink coffee seriously or prefer a fine scotch. Whether they're the type to appreciate a handsome leather portfolio or a beautifully curated food hamper. The answers shape everything we put in the box.

VIP client gifts in India work best when they feel specific. A coffee set chosen because you know they mentioned pour-overs in a call last year. A ceramic piece from an artisan in their home state. Monogrammed stationery in their preferred weight of paper. None of these require elaborate intelligence, just the habit of paying attention.

For companies that maintain tiered client relationships, we offer a structured gifting programme: a top-tier gift for your twenty most valuable accounts, a second-tier offering for the next hundred, and a seasonal touchpoint for the broader base. All personalised, all coordinated, all managed through a single relationship with Nishaw.

Budgets typically begin at ₹5,000 per gift. Lead times are 7–10 working days. For quarterly or annual programmes, we recommend briefing us 3–4 weeks in advance.`,
  },

  /* ── 5. SEASON OF LIGHT ───────────────────────────────────────────────── */
  {
    displayName:  "Season of Light",
    seoH1:        "Festive & Diwali Corporate Gifting",
    slug:         "festive-diwali-gifts",
    accent:       "terracotta",
    promiseLine:  "Diwali, done beautifully.",
    exampleItems: [
      {
        name:        "Premium dry fruit & nut collection",
        description: "Cashews, almonds, pistachios, and rare dried figs sourced from Indian farms, arranged in a lacquered tray with a hand-tied gold ribbon. Luxuriously simple.",
        glyph:       "✦",
      },
      {
        name:        "Artisan mithai selection",
        description: "Handcrafted sweets from a single heritage confectionery, kaju katli, badam barfi, and saffron peda, in a cloth-lined wooden box with a wax-sealed lid.",
        glyph:       "◎",
      },
      {
        name:        "Hand-painted diya set",
        description: "Four terracotta diyas hand-painted by artisans from Rajasthan, in warm ochre and gold. Presented in a kraft box with tissue and a typed note on their origins.",
        glyph:       "◆",
      },
      {
        name:        "Saffron & spice hamper",
        description: "Kashmir saffron, black cardamom, star anise, and single-origin turmeric, each in a labelled glass jar, arranged in a linen-lined crate. For the home cook who knows their spices.",
        glyph:       "✐",
      },
    ],
    forTheMemory: "Diwali arrives the same time every year, but the chance to give something that actually means something, rather than something that merely arrives, is narrower than most companies realise. Season of Light is for organisations that understand the difference between a Diwali gesture and a Diwali gift. We make the latter.",
    budgetBand:      "₹1,500 – ₹8,000 per gift",
    personalisation: "Company logo, recipient name, greeting card, custom outer box branding",
    idealQuantity:   "50 – 5,000+ per season",
    leadTime:        "10 – 14 working days; 3–4 weeks recommended for 500+ units",
    crossLinks: [
      { label: "Year-round client gifting: The Inner Circle", href: "/collections/client-vip-gifts",   note: "VIP client gifts" },
      { label: "For employees at the same festival",        href: "/collections/welcome-kits",         note: "First Light" },
      { label: "Premium bespoke festive hampers",           href: "/bespoke",                          note: "House of Bespoke" },
    ],
    seoBody: `Diwali corporate gifting is one of the most consequential decisions an organisation makes each year. The gift arrives in a moment of cultural significance, it's seen by the recipient's family, discussed at the dinner table, and remembered for longer than most business interactions. Getting it right is an opportunity. Getting it wrong, or defaulting to something generic, is a missed one.

Season of Light is Nishaw's Diwali and festive corporate gifting collection. It is built on the belief that festive gifts in India have the potential to be genuinely beautiful, and that most of them aren't. The branded tin of mixed biscuits. The shrink-wrapped dry fruit box with a company logo stuck on. The hamper assembled from a wholesale catalogue. None of these say 'we thought about you.' They say 'it was November.'

Our festive gifting is different in its sourcing and its staging. The dry fruits come from specific farms. The mithai is handcrafted at a single heritage confectionery rather than mass-produced. The diyas are hand-painted by artisans from Rajasthan, and each one comes with a card explaining who made them. The packaging is designed to be kept, a lacquered tray, a cloth-lined wooden box, a linen-lined crate, because beautiful containers get a second life.

For large-volume Diwali orders, 500 to 5,000 units, we manage the full logistics chain: sourcing, quality control, assembly, branding, and split delivery across India. Every unit looks identical. Every delivery is tracked. One invoice. One point of contact.

Budget bands begin at ₹1,500 per gift and scale to ₹8,000 for premium curations. Lead times are 10–14 working days for orders under 500 units. For large volume orders, we recommend briefing us 3–4 weeks before the intended delivery date.`,
  },

  /* ── 6. THE CORNER OFFICE ─────────────────────────────────────────────── */
  {
    displayName:  "The Corner Office",
    seoH1:        "Executive & CXO Luxury Gifts",
    slug:         "executive-gifts",
    accent:       "sapphire",
    promiseLine:  "Gifts with a boardroom pedigree.",
    exampleItems: [
      {
        name:        "Single malt or aged whisky",
        description: "A bottle of aged Scotch, Japanese whisky, or an award-winning Indian single malt, chosen for the recipient's known palate and presented in a custom wood sleeve.",
        glyph:       "✦",
      },
      {
        name:        "Full-grain leather briefcase",
        description: "A structured briefcase in aged full-grain leather with solid brass hardware, a 15\" laptop sleeve, and a nameplate engraved with the recipient's initials.",
        glyph:       "◎",
      },
      {
        name:        "Bespoke cufflinks",
        description: "Sterling silver or 18k gold-plated cufflinks, custom-designed with a motif meaningful to the recipient, their initials, their company mark, or a symbol of their field.",
        glyph:       "◆",
      },
      {
        name:        "Premium desk humidor",
        description: "A 25-count Spanish cedar humidor with a hygrometer and ten hand-rolled Nicaraguan cigars. For the executive who marks an occasion with something that takes time.",
        glyph:       "✐",
      },
    ],
    forTheMemory: "Senior leaders receive a great many gifts. What they rarely receive is one that was clearly chosen for them, not for their title, not for the category of 'executive', but for the specific person behind the desk. The Corner Office collection is built to change that, one gift at a time.",
    budgetBand:      "₹15,000 – ₹75,000+ per gift",
    personalisation: "Monogram, bespoke inscription, custom design elements on leather and cufflinks",
    idealQuantity:   "1 – 50 per occasion",
    leadTime:        "10 – 15 working days; bespoke items may require additional time",
    crossLinks: [
      { label: "Our Year — the annual CXO gift",            href: "/bespoke",                           note: "House of Bespoke" },
      { label: "The Founder's Story — for a key departure", href: "/bespoke",                           note: "Bespoke narrative gift" },
      { label: "For VIP client contacts",                  href: "/collections/client-vip-gifts",       note: "The Inner Circle" },
    ],
    seoBody: `CXO and executive gifting operates under different rules than other categories of corporate presents. The recipient has seen every version of the generic gift, the crystal trophy, the branded merchandise, the festival hamper. They have probably given many themselves. What moves a senior leader is not expense alone, but evidence of thought.

The Corner Office is Nishaw's collection for gifts given at the highest rung of the corporate ladder: to board members, to founding partners, to CXOs and managing directors, to the people who have built what they have built over decades. These gifts do not announce themselves. They arrive quietly, in packaging that doesn't need to compete for attention, and they reveal their value gradually, in the quality of the leather, the weight of the crystal, the particular bottle of whisky that was chosen because someone paid attention.

We build each Corner Office gift around a brief and, where possible, around intelligence. What does this person collect? What do they drink? What is the occasion, a retirement, a successful close, a thank-you after a difficult year? The brief shapes everything: the item, the engraving, the packaging, the note.

Executive gifts for senior leaders in India demand a particular kind of discretion. These are not gifts to be opened in a group. They are presented privately, often by the gifting organisation's own senior leadership. We advise on presentation as well as product.

Premium budget bands begin at ₹15,000 per gift. For fully bespoke commissions, a custom-designed piece of jewellery, a rare collectible, a private commission from an artist, the ceiling is whatever the occasion demands. Lead times are 10–15 working days for curated gifts; bespoke commissions require 3–4 weeks.`,
  },

  /* ── 7. WARM REGARDS ──────────────────────────────────────────────────── */
  {
    displayName:  "Warm Regards",
    seoH1:        "Farewell, Retirement & Thank-You Gifts",
    slug:         "farewell-gifts",
    accent:       "plum",
    promiseLine:  "Goodbyes, thank-yous and quiet gratitude.",
    exampleItems: [
      {
        name:        "Custom illustrated memory book",
        description: "A handcrafted 40-page book with illustrated scenes from the recipient's time at the company, team events, milestones, inside references, printed on 200gsm matte art paper.",
        glyph:       "◎",
      },
      {
        name:        "Engraved silver keepsake",
        description: "A solid silver paperweight, bookend, or letter opener engraved with the recipient's name, dates of tenure, and a personal message from the team. Presented in a velvet-lined box.",
        glyph:       "◆",
      },
      {
        name:        "Premium relaxation hamper",
        description: "Artisan teas, a hand-poured soy candle, cold-pressed bath oils, and a linen-covered journal for the next chapter. Everything that says 'you've earned this.'",
        glyph:       "✦",
      },
      {
        name:        "Personalised watch",
        description: "A slim Swiss-movement timepiece, caseback engraved with the date and a phrase chosen by the gifting team. For time well spent, and time yet to come.",
        glyph:       "✐",
      },
    ],
    forTheMemory: "A farewell gift is the last professional impression you make on someone, and the one they are most likely to remember. Warm Regards exists for the people who gave their best years to building something, and who deserve to leave feeling seen, not just thanked with a card and a cake.",
    budgetBand:      "₹3,000 – ₹20,000 per gift",
    personalisation: "Tenure dates, personal message, team signatures, illustrated memory book content",
    idealQuantity:   "1 – 50 per occasion",
    leadTime:        "7 – 12 working days; memory books require 10+ working days",
    crossLinks: [
      { label: "A Hundred Thank-Yous — team thank-you gift", href: "/bespoke",                         note: "Bespoke collective gift" },
      { label: "For the retirement: Nishaw Experiences",    href: "/experiences",                      note: "Workshop-in-a-box farewell" },
      { label: "For milestone gifts before the farewell",   href: "/collections/milestone-gifts",      note: "The Long Game" },
    ],
    seoBody: `Farewell gifts and retirement presents are among the most emotionally charged categories in corporate gifting, and among the most commonly underinvested. The standard farewell: a card passed around for signatures, a cake in the break room, and a gift voucher chosen in haste. The recipient smiles. The moment passes. The gift is forgotten.

Warm Regards is Nishaw's collection for the departures that deserve better. Retirements after decades of service. Resignations from people who built something significant. Thank-yous to collaborators, advisors, and mentors whose contributions don't fit neatly on a job description. These are the goodbyes that deserve a gift equal to the relationship.

The centrepiece of the Warm Regards collection is the custom illustrated memory book: a handcrafted 40-page volume with illustrated scenes from the recipient's time at the company, team trips, significant projects, inside references, a letter from leadership, printed on 200gsm matte art paper and bound in cloth. We work with an illustrator who captures the warmth of these details without sentimentality. Recipients have been known to carry these for years.

Beyond the memory book, the collection includes engraved silver keepsakes, a paperweight, a letter opener, a bookend, personalised to the recipient's tenure. A premium relaxation hamper for the weeks after the final day. A slim personalised watch with the caseback engraved with dates and a phrase chosen by the team.

For companies with structured offboarding, we offer a tiered farewell gifting programme: standard thank-you gifts for all departures, and elevated gifts for senior or long-tenured colleagues. Budgets begin at ₹3,000 and scale to ₹20,000 for memory books and premium keepsakes. Lead times are 7–12 working days; memory books require a minimum of 10 working days.`,
  },

  /* ── 8. GRAND GATHERINGS ──────────────────────────────────────────────── */
  {
    displayName:  "Grand Gatherings",
    seoH1:        "Event, Conference & Bulk Gifting",
    slug:         "event-gifting",
    accent:       "pine",
    promiseLine:  "Hundreds of gifts, one flawless impression.",
    exampleItems: [
      {
        name:        "Branded delegate bag",
        description: "A structured canvas or jute tote with your logo debossed or screen-printed, roomy enough for a laptop, a conference booklet, and a water bottle. Useful long after the event.",
        glyph:       "◎",
      },
      {
        name:        "Premium notebook & pen set",
        description: "A cloth-bound 160-page notebook with your brand mark on the cover and a gel rollerball pen in a kraft sleeve. Designed for the conference session and the weeks that follow.",
        glyph:       "✐",
      },
      {
        name:        "Curated snack box",
        description: "Six to eight thoughtfully selected snacks from premium Indian brands, seed crackers, dark chocolate, trail mix, and a herbal tea sachet, in a logo-branded kraft box.",
        glyph:       "✦",
      },
      {
        name:        "Custom conference kit",
        description: "A fully branded conference kit: lanyard, name card, programme booklet, pen, sticker, and a small thank-you from the organising team, all in a zip-seal pouch or rigid box.",
        glyph:       "◆",
      },
    ],
    forTheMemory: "A conference delegate remembers two things: the quality of the content and the quality of the details. Grand Gatherings exists for the second one. We make sure that the bag on every chair, the kit on every table, and the gift in every hand communicates one thing: this event was made with care.",
    budgetBand:      "₹500 – ₹3,500 per unit",
    personalisation: "Company logo, event branding, delegate name (select items), custom packaging",
    idealQuantity:   "100 – 10,000+ units",
    leadTime:        "14 – 21 working days; 4 weeks recommended for 1,000+ units",
    crossLinks: [
      { label: "Team-building experiences: Nishaw Experiences", href: "/experiences",                  note: "Workshop-in-a-box for teams" },
      { label: "VIP delegate gifts: The Corner Office",       href: "/collections/executive-gifts",    note: "Executive & CXO gifts" },
      { label: "Welcome kits for new hires post-event",      href: "/collections/welcome-kits",        note: "First Light" },
    ],
    seoBody: `Event gifting and conference delegate gifts are, by volume, among the largest categories in corporate gifting in India. They are also among the most commonly commoditised. The standard delegate bag: a cheap branded tote with a water bottle, a thin notebook, and a pen from a bulk supplier. The message is clear, you're one of many, and this gift reflects that.

Grand Gatherings is Nishaw's answer to that standard. It is built on the belief that bulk gifting is not incompatible with quality, and that a gift given to five hundred people can still feel like it was made for each of them.

We approach event and conference gifting from first principles: what is the event trying to say about the organising brand? A global financial summit has different aesthetics than an innovation bootcamp. A company's annual leadership offsite is different from a customer appreciation dinner. The gift should reflect the event's character, not a generic 'conference kit' template.

Our Grand Gatherings portfolio includes delegate bags in structured canvas or jute, cloth-bound premium notebooks with custom cover branding, curated snack boxes from Indian makers who care about ingredients, and full conference kits assembled to a brief. For awards evenings and leadership conclaves, we offer elevated single gifts, crystal trophies, monogrammed accessories, managed at scale.

Logistics management is central to Grand Gatherings. For events with delegates arriving from multiple cities, we coordinate split-shipment delivery to venue, hotel rooms, or registered addresses. For events requiring registration-desk pickup, we design the unboxing to work in a busy foyer.

Budget bands begin at ₹500 per unit for core conference kits and scale to ₹3,500 for premium delegate packages. Lead times are 14–21 working days. For orders exceeding 1,000 units, we recommend a 4-week runway from brief to delivery.`,
  },

  /* ── 9. HOUSE OF BESPOKE ──────────────────────────────────────────────── */
  {
    displayName:  "House of Bespoke",
    seoH1:        "Fully Custom Gift Hampers",
    slug:         "bespoke-hampers",
    accent:       "gold",
    promiseLine:  "Dreamt up with you, made only for them.",
    exampleItems: [
      {
        name:        "Fully custom outer packaging",
        description: "A bespoke box, crate, or trunk designed from a blank sheet, your dimensions, your material, your finish, your mark. The container is the first gift.",
        glyph:       "◎",
      },
      {
        name:        "Handpicked curated contents",
        description: "Every item inside the box selected individually for the recipient, or the category of recipient, based on a detailed brief. Nothing from a standard catalogue.",
        glyph:       "✦",
      },
      {
        name:        "Personalised brand story card",
        description: "A folded card printed on 350gsm cotton paper, written in your voice, with a message that reads like a letter rather than a label. Wax-sealed or ribbon-tied.",
        glyph:       "✐",
      },
      {
        name:        "White-glove delivery",
        description: "Hand-delivered by a Nishaw concierge for local orders, or shipped in a double-walled outer carton with internal foam bracing and tamper-evident sealing.",
        glyph:       "◆",
      },
    ],
    forTheMemory: "House of Bespoke is for the gifts that don't fit a category, because the person you're giving to doesn't fit one either. We start from nothing: no template, no catalogue, no pre-set options. Just a conversation, a brief, and the intention to make something that could only exist for this person, from you.",
    budgetBand:      "₹10,000 – no ceiling",
    personalisation: "Total, every element is designed around the recipient and brief",
    idealQuantity:   "1 – 1,000 (small-run bespoke production available)",
    leadTime:        "14 – 21 working days; complex commissions may require 4–6 weeks",
    crossLinks: [
      { label: "For large-volume bespoke: Grand Gatherings", href: "/collections/event-gifting",       note: "Event & conference gifting" },
      { label: "For CXO and leadership gifts",              href: "/collections/executive-gifts",      note: "The Corner Office" },
      { label: "For client relationships",                  href: "/collections/client-vip-gifts",     note: "The Inner Circle" },
    ],
    seoBody: `Custom gift hampers, truly custom, not 'pick-from-a-list' custom, represent the highest expression of corporate gifting. They are gifts built from a conversation, not a catalogue. They require a different kind of brief, a different kind of maker, and a different kind of patience. They are also the ones that get remembered.

House of Bespoke is Nishaw's fully custom gifting service. We design and produce gifts that do not exist until we make them for you. The outer packaging is conceived from scratch, a custom box, a wooden trunk, a linen envelope, a ceramic vessel, in whatever dimensions and materials serve the brief. The contents are handpicked item by item from producers we trust, chosen for the specific recipient. The note is written in your voice, on cotton paper, sealed with wax.

We take bespoke commissions for individual gifts, a single extraordinary present for a retiring founder, and for small-run productions: fifty identical hampers for a VIP client list, each containing the same curated contents but personalised with the recipient's name on the outer box and a handwritten enclosure card.

The brief is the beginning of everything. We want to understand who this person is, what they collect, what they drink, what they read, what they value. We want to understand the moment the gift is marking. And we want to understand what you want to say, so that the gift says it better than any message you could attach to it.

Custom corporate gift hampers in India have long been available in a pale imitation of this: items assembled from a wholesaler's catalogue, presented in a box with a logo. House of Bespoke is the opposite of that. It is slower, more deliberate, and more expensive. It is also the gift that gets photographed, shared, and mentioned in conversations years after it was received.

Budgets begin at ₹10,000 per piece. Lead times are 14–21 working days for curated bespoke; complex commissions with custom-manufactured components require 4–6 weeks.`,
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return collections.map((c) => c.slug);
}
