import React from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  headingSize?: "h2" | "h3";
  tagline?: boolean;       // if true, heading renders in italic (tagline cut)
  divider?: boolean;       // show ♦ divider above eyebrow
  contained?: boolean;     // wrap children in .container
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  style?: React.CSSProperties;
}

/**
 * Section, brand section with optional eyebrow label, heading, and ♦ divider.
 * Server Component. ScrollReveal is applied per-element inside, not here.
 */
export function Section({
  id,
  eyebrow,
  heading,
  headingSize = "h2",
  tagline = false,
  divider = false,
  contained = true,
  children,
  className = "",
  as: Tag = "section",
  style,
}: SectionProps) {
  const HeadingTag = headingSize;

  return (
    <Tag id={id} className={`section-py ${className}`} style={style}>
      <div className={contained ? "container" : undefined}>

        {/* Optional ♦ divider above section */}
        {divider && (
          <div className="diamond-divider" style={{ marginBottom: 48 }}>
            ♦
          </div>
        )}

        {/* Eyebrow + heading header */}
        {(eyebrow || heading) && (
          <div style={{ marginBottom: 40 }}>
            {eyebrow && (
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                {eyebrow}
              </p>
            )}
            {heading && (
              <HeadingTag
                style={{
                  fontSize:
                    headingSize === "h2"
                      ? "var(--text-h2)"
                      : "var(--text-h3)",
                  fontStyle: tagline ? "italic" : "normal",
                  fontWeight: tagline ? 300 : 400,
                }}
              >
                {heading}
              </HeadingTag>
            )}
          </div>
        )}

        {children}
      </div>
    </Tag>
  );
}
