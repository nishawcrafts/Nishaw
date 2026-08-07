"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { navLinks, contact } from "@/lib/tokens";

/* ── Hamburger icon ─────────────────────────────────────────────────────── */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: open ? 0 : 5,
        width: 24,
        height: 24,
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display: "block",
            height: 1.5,
            background: "var(--color-ink)",
            borderRadius: 2,
            width: i === 1 ? (open ? 0 : "100%") : "100%",
            transformOrigin: "center",
            transform:
              open
                ? i === 0
                  ? "translateY(6.5px) rotate(45deg)"
                  : i === 2
                  ? "translateY(-6.5px) rotate(-45deg)"
                  : "scaleX(0)"
                : "none",
            transition: "transform 220ms ease-out, width 220ms ease-out, opacity 220ms ease-out",
            opacity: open && i === 1 ? 0 : 1,
          }}
        />
      ))}
    </span>
  );
}

/* ── Header ─────────────────────────────────────────────────────────────── */
export function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  /* Observe the hero sentinel div injected just below the header in the layout */
  useEffect(() => {
    const el = document.getElementById("hero-sentinel");
    if (!el) {
      // Fallback: watch scroll position if no sentinel
      const onScroll = () => setScrolled(window.scrollY > 48);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Close drawer on resize to desktop */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setDrawerOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Prevent body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      {/* ── Main header bar ─── */}
      <header
        role="banner"
        className={`header ${scrolled ? "header-solid" : "header-transparent"}`}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            aria-label="Nishaw, home"
            style={{ display: "flex", alignItems: "baseline", gap: 2 }}
          >
            <span
              className="script"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "var(--color-gold)",
                letterSpacing: "0.01em",
              }}
            >
              Nishaw
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px, 2.5vw, 32px)",
            }}
            className="desktop-nav"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="link-draw"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: scrolled ? "var(--color-ink)" : "var(--color-ink)",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-gold btn-sm"
              style={{ marginLeft: 8, whiteSpace: "nowrap" }}
            >
              Start a Conversation
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            id="nav-toggle"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setDrawerOpen((v) => !v)}
            style={{
              display: "none",
              padding: 8,
              marginRight: -8,
              color: "var(--color-ink)",
            }}
            className="mobile-hamburger"
          >
            <HamburgerIcon open={drawerOpen} />
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ─── */}
      <div
        className={`nav-overlay ${drawerOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      {/* ── Mobile drawer ─── */}
      <nav
        id="mobile-nav-drawer"
        aria-label="Mobile navigation"
        className={`nav-drawer ${drawerOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={closeDrawer}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            padding: 8,
            color: "var(--color-ink)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Wordmark in drawer */}
        <Link href="/" onClick={closeDrawer} style={{ display: "block", marginBottom: 32 }}>
          <span className="script" style={{ fontSize: "2rem", color: "var(--color-gold)" }}>
            Nishaw
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeDrawer}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-h4)",
                color: "var(--color-ink)",
                padding: "14px 0",
                borderBottom: "1px solid var(--color-gold-soft)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          onClick={closeDrawer}
          className="btn btn-gold"
          style={{ marginTop: 28, width: "100%", justifyContent: "center" }}
        >
          Start a Conversation
        </Link>

        {/* Contact mini */}
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 8 }}>
          <a
            href={`mailto:${contact.email}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              color: "var(--color-ink-soft)",
            }}
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              color: "var(--color-ink-soft)",
            }}
          >
            {contact.phone}
          </a>
        </div>
      </nav>

      {/* ── Responsive style tag ─── */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
