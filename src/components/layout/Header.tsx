"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback, useId } from "react";
import { navGroups, contact } from "@/lib/tokens";

/* ─────────────────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────────────────── */
type NavGroup = (typeof navGroups)[number];
type ChildGroup = Extract<NavGroup, { children: readonly { label: string; href: string }[] }>;
type TopLink   = Extract<NavGroup, { href: string }>;

function hasChildren(g: NavGroup): g is ChildGroup {
  return "children" in g;
}

/* ─────────────────────────────────────────────────────────────────────────
   HamburgerIcon
   ──────────────────────────────────────────────────────────────────────── */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: open ? 0 : 5, width: 24, height: 24 }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display:         "block",
            height:          1.5,
            background:      "var(--color-ink)",
            borderRadius:    2,
            width:           i === 1 ? (open ? 0 : "100%") : "100%",
            transformOrigin: "center",
            transform:
              open
                ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
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

/* ─────────────────────────────────────────────────────────────────────────
   DropdownItem — renders one group in the desktop nav:
   either a plain link or a label+dropdown panel
   ──────────────────────────────────────────────────────────────────────── */
function DropdownItem({
  group,
  scrolled,
}: {
  group: NavGroup;
  scrolled: boolean;
}) {
  const id = useId();

  const linkStyle: React.CSSProperties = {
    fontFamily:  "var(--font-body)",
    fontSize:    "var(--text-body-sm)",
    color:       "var(--color-ink)",
    whiteSpace:  "nowrap",
    display:     "flex",
    alignItems:  "center",
    gap:         4,
    cursor:      "pointer",
    background:  "transparent",
    border:      "none",
    padding:     0,
  };

  if (!hasChildren(group)) {
    const g = group as TopLink;
    return (
      <Link href={g.href} className="link-draw" style={linkStyle}>
        {g.label}
      </Link>
    );
  }

  /* Dropdown group */
  return (
    <div className="nav-dropdown-wrap" style={{ position: "relative" }}>
      {/* Trigger button */}
      <button
        aria-haspopup="true"
        aria-controls={id}
        className="link-draw nav-dropdown-trigger"
        style={linkStyle}
      >
        {group.label}
        {/* Chevron */}
        <svg
          aria-hidden
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{ marginTop: 1 }}
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        id={id}
        role="menu"
        className="nav-dropdown-panel"
        style={{
          position:     "absolute",
          top:          "calc(100% + 12px)",
          left:         "50%",
          transform:    "translateX(-50%)",
          minWidth:     168,
          background:   "var(--color-paper-deep)",
          border:       "1px solid var(--color-gold-soft)",
          borderRadius: "var(--radius-card)",
          boxShadow:    "0 8px 32px rgba(34,30,27,0.12)",
          padding:      "6px 0",
          zIndex:       200,
          pointerEvents:"none",
          opacity:      0,
          transition:   "opacity 180ms ease-out, transform 180ms ease-out",
        }}
      >
        {/* Arrow notch */}
        <span
          aria-hidden
          style={{
            position:     "absolute",
            top:          -6,
            left:         "50%",
            transform:    "translateX(-50%) rotate(45deg)",
            width:        10,
            height:       10,
            background:   "var(--color-paper-deep)",
            borderTop:    "1px solid var(--color-gold-soft)",
            borderLeft:   "1px solid var(--color-gold-soft)",
          }}
        />

        {group.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            role="menuitem"
            style={{
              display:     "block",
              fontFamily:  "var(--font-body)",
              fontSize:    "var(--text-body-sm)",
              color:       "var(--color-ink)",
              padding:     "10px 20px",
              whiteSpace:  "nowrap",
              textDecoration: "none",
              transition:  "background 120ms, color 120ms",
            }}
            className="nav-dropdown-item"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Header
   ──────────────────────────────────────────────────────────────────────── */
export function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  /* Track which mobile group is expanded */
  const [mobileOpen, setMobileOpen]   = useState<string | null>(null);

  /* Scroll sentinel */
  useEffect(() => {
    const el = document.getElementById("hero-sentinel");
    if (!el) {
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

  /* Close drawer on desktop breakpoint */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setDrawerOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setMobileOpen(null);
  }, []);

  return (
    <>
      {/* ── Main header bar ── */}
      <header
        role="banner"
        className={`header ${scrolled ? "header-solid" : "header-transparent"}`}
      >
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}
        >
          {/* Wordmark */}
          <Link href="/" aria-label="Nishaw, home" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/nishaw-logo.svg"
              alt="Nishaw"
              height={52}
              width={52}
              style={{ height: 52, width: 52, objectFit: "contain", display: "block" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 28px)" }}
          >
            {navGroups.map((group) => (
              <DropdownItem key={group.label} group={group} scrolled={scrolled} />
            ))}

            <Link
              href="/contact"
              className="btn btn-gold btn-sm"
              style={{ marginLeft: 4, whiteSpace: "nowrap" }}
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
            style={{ display: "none", padding: 8, marginRight: -8, color: "var(--color-ink)" }}
            className="mobile-hamburger"
          >
            <HamburgerIcon open={drawerOpen} />
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`nav-overlay ${drawerOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      {/* ── Mobile drawer ── */}
      <nav
        id="mobile-nav-drawer"
        aria-label="Mobile navigation"
        className={`nav-drawer ${drawerOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close */}
        <button
          onClick={closeDrawer}
          aria-label="Close menu"
          style={{ position: "absolute", top: 20, right: 20, padding: 8, color: "var(--color-ink)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" onClick={closeDrawer} style={{ display: "block", marginBottom: 32 }}>
          <img
            src="/nishaw-logo.svg"
            alt="Nishaw"
            height={72}
            width={72}
            style={{ height: 72, width: 72, objectFit: "contain", display: "block" }}
          />
        </Link>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {navGroups.map((group) => {
            if (!hasChildren(group)) {
              const g = group as TopLink;
              return (
                <Link
                  key={g.href}
                  href={g.href}
                  onClick={closeDrawer}
                  style={{
                    fontFamily:   "var(--font-body)",
                    fontSize:     "var(--text-h4)",
                    color:        "var(--color-ink)",
                    padding:      "14px 0",
                    borderBottom: "1px solid var(--color-gold-soft)",
                    textDecoration: "none",
                  }}
                >
                  {g.label}
                </Link>
              );
            }

            /* Mobile accordion for groups with children */
            const isOpen = mobileOpen === group.label;
            return (
              <div key={group.label} style={{ borderBottom: "1px solid var(--color-gold-soft)" }}>
                <button
                  onClick={() => setMobileOpen(isOpen ? null : group.label)}
                  aria-expanded={isOpen}
                  style={{
                    width:       "100%",
                    display:     "flex",
                    justifyContent: "space-between",
                    alignItems:  "center",
                    fontFamily:  "var(--font-body)",
                    fontSize:    "var(--text-h4)",
                    color:       "var(--color-ink)",
                    padding:     "14px 0",
                    background:  "transparent",
                    border:      "none",
                    cursor:      "pointer",
                  }}
                >
                  <span>{group.label}</span>
                  <svg
                    aria-hidden
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    style={{
                      transform:  isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 200ms ease-out",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Children — revealed when open */}
                {isOpen && (
                  <div style={{ paddingBottom: 8 }}>
                    {group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeDrawer}
                        style={{
                          display:     "block",
                          fontFamily:  "var(--font-body)",
                          fontSize:    "var(--text-body)",
                          color:       "var(--color-ink-soft)",
                          padding:     "9px 0 9px 16px",
                          textDecoration: "none",
                          borderLeft:  "2px solid var(--color-gold-soft)",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
            style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}
          >
            {contact.phone}
          </a>
        </div>
      </nav>

      {/* ── Styles: breakpoints + dropdown hover/focus ── */}
      <style>{`
        /* Breakpoints */
        @media (max-width: 767px) {
          .desktop-nav      { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .mobile-hamburger { display: none !important; }
        }

        /* Dropdown: show on hover OR when the wrap contains focus */
        .nav-dropdown-wrap:hover .nav-dropdown-panel,
        .nav-dropdown-wrap:focus-within .nav-dropdown-panel {
          opacity:       1 !important;
          pointer-events:auto !important;
          transform:     translateX(-50%) translateY(0) !important;
        }

        /* Dropdown item hover */
        .nav-dropdown-item:hover {
          background: var(--color-paper);
          color:      var(--color-emerald) !important;
        }

        /* Trigger: show underline on parent hover */
        .nav-dropdown-wrap:hover .nav-dropdown-trigger,
        .nav-dropdown-wrap:focus-within .nav-dropdown-trigger {
          color: var(--color-emerald) !important;
        }

        /* Smooth dropdown reveal */
        .nav-dropdown-panel {
          transition: opacity 180ms ease-out, transform 180ms ease-out !important;
        }
        .nav-dropdown-wrap:not(:hover):not(:focus-within) .nav-dropdown-panel {
          transform: translateX(-50%) translateY(-6px) !important;
        }
        .nav-dropdown-wrap:hover .nav-dropdown-panel,
        .nav-dropdown-wrap:focus-within .nav-dropdown-panel {
          transform: translateX(-50%) translateY(0) !important;
        }
      `}</style>
    </>
  );
}
