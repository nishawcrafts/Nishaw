"use client";

import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/tokens";

/* ── Icons ────────────────────────────────────────────────────────────────── */
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.555 4.116 1.524 5.843L0 24l6.335-1.502A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.953 0-3.773-.57-5.296-1.554l-.38-.227-3.933.932.975-3.836-.249-.394A9.787 9.787 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z"/>
    </svg>
  );
}

/* ── MobileActionBar ───────────────────────────────────────────────────────
   Shows on screens < 768px only.
   Slides up 250ms once the user scrolls past the #hero-sentinel element
   (or 80px if no sentinel found).
   Always visible immediately if prefers-reduced-motion is set.
──────────────────────────────────────────────────────────────────────────── */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Don't run if we're on desktop
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const sentinel = document.getElementById("hero-sentinel");

    if (sentinel) {
      obsRef.current = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      );
      obsRef.current.observe(sentinel);
    } else {
      // Fallback scroll listener
      const onScroll = () => setVisible(window.scrollY > 80);
      window.addEventListener("scroll", onScroll, { passive: true });
      // Run once on mount
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    return () => obsRef.current?.disconnect();
  }, []);

  return (
    <div
      id="mobile-action-bar"
      role="navigation"
      aria-label="Quick contact actions"
      className={`mobile-bar ${visible ? "is-visible" : ""}`}
    >
      {/* Email */}
      <a
        href={`mailto:${contact.email}`}
        id="mobile-bar-email"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "16px 12px",
          background: "var(--color-paper)",
          borderRight: "1px solid var(--color-gold-soft)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-ink)",
          letterSpacing: "0.04em",
          transition: "background var(--dur-link) var(--ease-out)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-paper-deep)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-paper)")}
      >
        <MailIcon />
        Email
      </a>

      {/* WhatsApp */}
      <a
        href={contact.whatsapp}
        id="mobile-bar-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "16px 12px",
          background: "var(--color-emerald)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          color: "#FBF7EF",
          letterSpacing: "0.04em",
          transition: "background var(--dur-link) var(--ease-out)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-emerald-bright)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-emerald)")}
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}
