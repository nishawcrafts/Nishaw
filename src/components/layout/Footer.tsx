import Link from "next/link";
import { collections, navLinks, contact } from "@/lib/tokens";
import { NewsletterForm } from "./NewsletterForm";

/* JSON-LD, Organization + LocalBusiness */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nishaw.com/#organization",
      name: "Nishaw",
      url: "https://nishaw.com",
      email: contact.email,
      telephone: contact.phone,
      description:
        "Premium & bespoke corporate gifting brand in India. Say more than thank you.",
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nishaw.com/#localbusiness",
      name: "Nishaw",
      email: contact.email,
      telephone: contact.phone,
      areaServed: "India",
      priceRange: "₹₹₹",
      url: "https://nishaw.com",
      description:
        "Curated and custom-made corporate gifts for clients, teams, and enterprises across India.",
    },
  ],
};

const companyLinks = [
  { label: "The Nishaw Story", href: "/story" },
  { label: "How We Gift",      href: "/how-we-gift" },
  { label: "Bespoke",          href: "/bespoke" },
  { label: "For Enterprises",  href: "/for-enterprises" },
  { label: "The Gift Register", href: "/gift-register" },
  { label: "The Art of Giving", href: "/journal" },
  { label: "Talk to a Gifting Concierge", href: "/contact" },
];

export function Footer() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <footer
        role="contentinfo"
        style={{
          background:   "var(--color-emerald)",
          borderTop:    "1px solid var(--color-emerald-bright)",
          paddingTop:   "clamp(56px, 8vw, 96px)",
          paddingBottom:"clamp(32px, 5vw, 56px)",
        }}
      >
        <div className="container">

          {/* Top row, wordmark + tagline */}
          <div
            style={{
              marginBottom: 48,
            }}
          >
            <img
              src="/nishaw-logo.svg"
              alt="Nishaw: Say more than thank you."
              loading="lazy"
              width={140}
              height={140}
              style={{
                height: 140,
                width:  140,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Hairline */}
          <hr style={{ border: "none", borderTop: "1px solid rgba(251,247,239,0.18)", marginBottom: 48 }} />

          {/* Three-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "40px 48px",
              marginBottom: 56,
            }}
          >
            {/* Collections */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 20, color: "var(--color-gold)" }}>
                The Collections
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {collections.map(({ name, slug }) => (
                  <li key={slug}>
                    <Link
                      href={`/collections/${slug}`}
                      className="link-draw"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        color: "rgba(251,247,239,0.72)",
                      }}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 20, color: "var(--color-gold)" }}>
                Company
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {companyLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="link-draw"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        color: "rgba(251,247,239,0.72)",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 20, color: "var(--color-gold)" }}>
                Get in Touch
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "rgba(251,247,239,0.72)",
                }}
              >
                <a
                  href={`mailto:${contact.email}`}
                  className="link-draw"
                  style={{ color: "rgba(251,247,239,0.72)" }}
                >
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="link-draw"
                  style={{ color: "rgba(251,247,239,0.72)" }}
                >
                  {contact.phone}
                </a>
                {/* WhatsApp */}
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--color-gold)",
                    fontWeight: 400,
                  }}
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp us
                </a>
              </div>

              {/* Newsletter opt-in */}
              <div
                style={{
                  marginTop: 36,
                  padding: "20px",
                  border: "1px solid rgba(251,247,239,0.18)",
                  borderRadius: "var(--radius-card)",
                  background: "rgba(14,50,34,0.5)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "var(--text-body-sm)",
                    color: "rgba(251,247,239,0.95)",
                    marginBottom: 4,
                  }}
                >
                  The Art of Giving
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "rgba(251,247,239,0.6)",
                    marginBottom: 14,
                    lineHeight: 1.5,
                  }}
                >
                  Occasional notes on gifting well.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <hr style={{ border: "none", borderTop: "1px solid rgba(251,247,239,0.14)", marginBottom: 24 }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "rgba(251,247,239,0.5)",
              }}
            >
              &copy; {new Date().getFullYear()} Nishaw. All rights reserved.
            </p>
            <p
              className="tagline"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "rgba(251,247,239,0.5)",
              }}
            >
              Reserved for the remarkable.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}

/* ── Inline SVG icon for WhatsApp ──────────────────────────────────────── */
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.555 4.116 1.524 5.843L0 24l6.335-1.502A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.953 0-3.773-.57-5.296-1.554l-.38-.227-3.933.932.975-3.836-.249-.394A9.787 9.787 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z"/>
    </svg>
  );
}
