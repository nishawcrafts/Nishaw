/**
 * Nishaw Design Tokens, TypeScript mirror of globals.css @theme
 * This is the single source of truth for token values in JS/TSX.
 */

export const colors = {
  /* Backgrounds */
  paper:          "#FBF7EF",   /* ivory */
  paperDeep:      "#F1E9DA",   /* ivory-deep */
  /* Text */
  ink:            "#221E1B",
  inkSoft:        "#5C544B",
  /* Emerald - signature brand */
  emerald:        "#14432E",
  emeraldDeep:    "#0E3222",
  emeraldBright:  "#2E6B4F",
  /* Champagne - hairlines & marks only */
  gold:           "#C6A15B",
  goldSoft:       "#E4D3A8",
  /* Collection accents (muted) */
  terracotta:     "#A8443A",
  pine:           "#2F5D50",
  sapphire:       "#2E4A6B",
  plum:           "#6E3B52",
} as const;

export const fonts = {
  heading: '"Fraunces", Georgia, serif',
  body:    '"Newsreader", Georgia, serif',
  script:  '"Tangerine", cursive',
} as const;

export const radii = {
  card: "16px",
  sm:   "8px",
  pill: "9999px",
} as const;

/** Accent colours per collection (maps slug ? CSS colour) */
export const collectionAccents = {
  "welcome-kits":       colors.pine,
  "milestone-gifts":    colors.sapphire,
  "rewards-recognition":colors.gold,
  "client-vip-gifts":   colors.plum,
  "festive-diwali-gifts":colors.terracotta,
  "executive-gifts":    colors.sapphire,
  "farewell-gifts":     colors.plum,
  "event-gifting":      colors.pine,
  "bespoke-hampers":    colors.gold,
} as const;

export type AccentColor = "terracotta" | "pine" | "sapphire" | "plum" | "gold";

export const accentValues: Record<AccentColor, string> = {
  terracotta: colors.terracotta,
  pine:       colors.pine,
  sapphire:   colors.sapphire,
  plum:       colors.plum,
  gold:       colors.gold,
};

/** Contact details, single source of truth */
export const contact = {
  email:     "hello@nishaw.com",
  phone:     "+91 9090232242",
  whatsapp:  "https://wa.me/919090232242?text=Hi%20Nishaw%2C%20I%27d%20like%20to%20discuss%20corporate%20gifting",
  instagram: "",
} as const;

/** Nav links */
/** Grouped desktop navigation.
 *  - items without `children` render as a direct link
 *  - items with `children` render as a hover dropdown
 */
export const navGroups = [
  { label: "Collections", href: "/collections" },
  { label: "Bespoke",     href: "/bespoke" },
  { label: "Enterprise",  href: "/for-enterprises" },
  {
    label: "Our Work",
    children: [
      { label: "Experiences",   href: "/experiences" },
      { label: "Gift Register", href: "/gift-register" },
      { label: "Gallery",       href: "/gallery" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Our Story",   href: "/story" },
      { label: "How We Gift", href: "/how-we-gift" },
      { label: "Journal",     href: "/journal" },
    ],
  },
] as const;

/** Flat list kept for any component that still needs it (e.g. footer) */
export const navLinks = [
  { label: "The Collections",  href: "/collections" },
  { label: "Bespoke",          href: "/bespoke" },
  { label: "For Enterprises",  href: "/for-enterprises" },
  { label: "Nishaw Experiences", href: "/experiences" },
  { label: "The Gift Register", href: "/gift-register" },
  { label: "Gallery",          href: "/gallery" },
  { label: "The Nishaw Story", href: "/story" },
  { label: "How We Gift",      href: "/how-we-gift" },
  { label: "Journal",          href: "/journal" },
] as const;

/** Footer collections list */
export const collections = [
  { name: "First Light",       slug: "welcome-kits" },
  { name: "The Long Game",     slug: "milestone-gifts" },
  { name: "Standing Ovation",  slug: "rewards-recognition" },
  { name: "The Inner Circle",  slug: "client-vip-gifts" },
  { name: "Season of Light",   slug: "festive-diwali-gifts" },
  { name: "The Corner Office", slug: "executive-gifts" },
  { name: "Warm Regards",      slug: "farewell-gifts" },
  { name: "Grand Gatherings",  slug: "event-gifting" },
  { name: "House of Bespoke",  slug: "bespoke-hampers" },
] as const;
