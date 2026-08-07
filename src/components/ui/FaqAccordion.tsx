"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer:   string;
}

interface FaqAccordionProps {
  items:       FaqItem[];
  accentColor?: string;
}

export function FaqAccordion({ items, accentColor = "var(--color-gold)" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            role="listitem"
            style={{
              borderBottom: "1px solid var(--color-gold-soft)",
            }}
          >
            <button
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width:          "100%",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "space-between",
                gap:            16,
                padding:        "22px 0",
                background:     "transparent",
                border:         "none",
                cursor:         "pointer",
                textAlign:      "left",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize:   "var(--text-h4)",
                  color:      "var(--color-ink)",
                  lineHeight: 1.3,
                  flex:       1,
                  fontWeight: 400,
                }}
              >
                {item.question}
              </span>
              {/* +/− icon */}
              <span
                aria-hidden="true"
                style={{
                  width:          28,
                  height:         28,
                  borderRadius:   "50%",
                  border:         `1px solid ${isOpen ? accentColor : "var(--color-gold-soft)"}`,
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  flexShrink:     0,
                  color:          isOpen ? accentColor : "var(--color-ink-soft)",
                  fontSize:       18,
                  fontWeight:     300,
                  transition:     "border-color 200ms ease-out, color 200ms ease-out",
                  lineHeight:     1,
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Answer panel */}
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              style={{
                display:    isOpen ? "block" : "none",
                paddingBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "var(--text-body-lg)",
                  color:      "var(--color-ink-soft)",
                  lineHeight: 1.72,
                  maxWidth:   680,
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
