"use client";

import { useSearchParams } from "next/navigation";
import { useState, useId, useCallback } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   CONCIERGE BRIEF FORM
   Fields: What are we marking? | How many people? | Budget per gift |
           When do you need them? | Where are they going? | Anything else
   Occasion pre-selected from ?occasion= query param
   Submit: "Send My Brief"
   ──────────────────────────────────────────────────────────────────────── */

/* ── Occasion buttons ─────────────────────────────────────────────────── */
const OCCASIONS = [
  { value: "onboarding",    label: "Onboarding" },
  { value: "client",        label: "Client appreciation" },
  { value: "milestone",     label: "Milestone" },
  { value: "festival",      label: "Festival" },
  { value: "cxo-vip",      label: "CXO or VIP" },
  { value: "event",         label: "Event" },
  { value: "other",         label: "Something else" },
];

/* Map from URL ?occasion= param to concierge value */
const OCCASION_MAP: Record<string, string> = {
  "welcome-kits":         "onboarding",
  "milestone-gifts":      "milestone",
  "rewards-recognition":  "milestone",
  "client-vip-gifts":     "client",
  "festive-diwali-gifts": "festival",
  "executive-gifts":      "cxo-vip",
  "farewell-gifts":       "milestone",
  "event-gifting":        "event",
  "bespoke-hampers":      "other",
  "enterprise":           "other",
};

const HEADCOUNTS = [
  { value: "1-10",   label: "1 – 10" },
  { value: "10-50",  label: "10 – 50" },
  { value: "50-200", label: "50 – 200" },
  { value: "200-500",label: "200 – 500" },
  { value: "500+",   label: "500+" },
];

const BUDGETS = [
  { value: "under-1500", label: "Under \u20b91,500" },
  { value: "1500-3000",  label: "\u20b91,500 \u2013 3,000" },
  { value: "3000-5000",  label: "\u20b93,000 \u2013 5,000" },
  { value: "5000-10000", label: "\u20b95,000 \u2013 10,000" },
  { value: "10000-25000",label: "\u20b910,000 \u2013 25,000" },
  { value: "25000+",     label: "\u20b925,000+" },
];

/* ── Types ────────────────────────────────────────────────────────────── */
interface FormData {
  name:       string;
  company:    string;
  email:      string;
  phone:      string;
  occasion:   string;
  headcount:  string;
  budget:     string;
  timeline:   string;
  location:   string;
  message:    string;
}

type FieldErrors = Partial<Record<keyof FormData, string>>;
type Status      = "idle" | "submitting" | "success" | "error";

/* ── Validation ───────────────────────────────────────────────────────── */
function validate(data: FormData): FieldErrors {
  const e: FieldErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    e.name = "Please enter your name.";
  if (!data.company.trim())
    e.company = "Please enter your company name.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    e.email = "Please enter a valid work email address.";
  if (data.phone && !/^[+\d\s\-()]{7,15}$/.test(data.phone))
    e.phone = "Please enter a valid phone number.";
  if (!data.occasion)
    e.occasion = "Please select what you are marking.";
  if (!data.budget)
    e.budget = "Please select a budget range.";
  if (!data.timeline.trim() || data.timeline.trim().length < 3)
    e.timeline = "Please tell us when you need these.";
  return e;
}

/* ── Shared styles ────────────────────────────────────────────────────── */
const labelStyle: React.CSSProperties = {
  fontFamily:    "var(--font-body)",
  fontSize:      "var(--text-body-sm)",
  color:         "var(--color-ink)",
  fontWeight:    500,
  letterSpacing: "0.02em",
  display:       "block",
  marginBottom:  8,
};

const reqStyle: React.CSSProperties = {
  color:      "var(--color-terracotta)",
  marginLeft: 3,
  fontWeight: 400,
};

function fieldStyle(hasError: boolean): React.CSSProperties {
  return {
    fontFamily:   "var(--font-body)",
    fontSize:     "var(--text-body)",
    color:        "var(--color-ink)",
    background:   "var(--color-paper)",
    border:       `1px solid ${hasError ? "var(--color-terracotta)" : "var(--color-gold-soft)"}`,
    borderRadius: "var(--radius-sm)",
    padding:      "12px 14px",
    width:        "100%",
    outline:      "none",
    transition:   "border-color 150ms ease-out",
  };
}

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize:   "var(--text-body-sm)",
  color:      "var(--color-terracotta)",
  marginTop:  5,
  display:    "block",
};

/* ── Option button ──────────────────────────────────────────────────── */
function OptionBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontFamily:    "var(--font-body)",
        fontSize:      "var(--text-body-sm)",
        padding:       "9px 16px",
        borderRadius:  "var(--radius-sm)",
        border:        `1px solid ${active ? "var(--color-emerald)" : "var(--color-gold-soft)"}`,
        background:    active ? "var(--color-emerald)" : "var(--color-paper)",
        color:         active ? "#FBF7EF" : "var(--color-ink-soft)",
        cursor:        "pointer",
        transition:    "all 150ms ease-out",
        letterSpacing: "0.01em",
        fontWeight:    active ? 500 : 400,
      }}
    >
      {children}
    </button>
  );
}

/* ═════════════════════════════════════════════════════════════════════════ */
export function ContactForm() {
  const searchParams = useSearchParams();
  const uid          = useId();

  /* Map URL ?occasion= to concierge occasion value */
  const urlOccasion = searchParams.get("occasion") ?? "";
  const initialOccasion = OCCASION_MAP[urlOccasion] ?? (
    OCCASIONS.some((o) => o.value === urlOccasion) ? urlOccasion : ""
  );

  const [data, setData] = useState<FormData>({
    name:      "",
    company:   "",
    email:     "",
    phone:     "",
    occasion:  initialOccasion,
    headcount: "",
    budget:    "",
    timeline:  "",
    location:  "",
    message:   "",
  });

  const [errors,  setErrors]  = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status,  setStatus]  = useState<Status>("idle");

  const set = useCallback((field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
    }
  }, [touched]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      set(e.target.name as keyof FormData, e.target.value);
    },
    [set]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const name = e.target.name as keyof FormData;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const allErrors = validate(data);
      if (allErrors[name]) setErrors((prev) => ({ ...prev, [name]: allErrors[name] }));
    },
    [data]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const allErrors = validate(data);
      if (Object.keys(allErrors).length > 0) {
        setErrors(allErrors);
        setTouched(Object.fromEntries(Object.keys(data).map((k) => [k, true])) as typeof touched);
        const firstId = `${uid}-${Object.keys(allErrors)[0]}`;
        document.getElementById(firstId)?.focus();
        return;
      }
      setStatus("submitting");
      try {
        const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
        const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : "/api/contact";
        const res = await fetch(endpoint, {
          method:  "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body:    JSON.stringify({
            ...data,
            _subject: `Nishaw Brief: ${OCCASIONS.find((o) => o.value === data.occasion)?.label ?? data.occasion}`,
          }),
        });
        if (!res.ok) throw new Error("Submission failed");
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [data, uid, touched]
  );

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          background:   "var(--color-paper)",
          border:       "1px solid var(--color-gold-soft)",
          borderRadius: "var(--radius-card)",
          padding:      "clamp(40px, 6vw, 64px)",
          textAlign:    "center",
          animation:    "fadeSlideUp 450ms ease-out both",
        }}
      >
        <div
          aria-hidden
          style={{
            width:          64,
            height:         64,
            borderRadius:   "50%",
            border:         "1.5px solid var(--color-gold)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            margin:         "0 auto 28px",
          }}
        >
          <span style={{ color: "var(--color-gold)", fontSize: 28, lineHeight: 1 }}>✦</span>
        </div>

        <span
          className="script"
          style={{ display: "block", fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--color-gold)", lineHeight: 1, marginBottom: 20 }}
        >
          Wonderful.
        </span>

        <p
          style={{
            fontFamily:  "var(--font-heading)",
            fontStyle:   "italic",
            fontWeight:  300,
            fontSize:    "var(--text-h4)",
            color:       "var(--color-ink)",
            lineHeight:  1.5,
            maxWidth:    440,
            margin:      "0 auto 28px",
          }}
        >
          Your brief is with us. We will be in touch within one working day with a curated proposal.
        </p>

        <button
          onClick={() => {
            setStatus("idle");
            setData({ name:"",company:"",email:"",phone:"",occasion:"",headcount:"",budget:"",timeline:"",location:"",message:"" });
            setErrors({});
            setTouched({});
          }}
          style={{
            fontFamily:     "var(--font-body)",
            fontSize:       "var(--text-body-sm)",
            color:          "var(--color-ink-soft)",
            background:     "transparent",
            border:         "none",
            cursor:         "pointer",
            textDecoration: "underline",
            padding:        0,
          }}
        >
          Send another brief
        </button>
      </div>
    );
  }

  /* ── Field wrapper ── */
  function Field({
    id: fieldKey,
    label,
    required = false,
    children,
  }: {
    id: keyof FormData;
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }) {
    const inputId = `${uid}-${fieldKey}`;
    const errId   = `${uid}-${fieldKey}-err`;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor={inputId} style={labelStyle}>
          {label}
          {required && <span style={reqStyle} aria-hidden>*</span>}
        </label>
        {children}
        {errors[fieldKey] && touched[fieldKey] && (
          <span id={errId} role="alert" style={errorStyle}>{errors[fieldKey]}</span>
        )}
      </div>
    );
  }

  const fs  = (k: keyof FormData) => fieldStyle(!!errors[k] && !!touched[k]);
  const ai  = (k: keyof FormData) =>
    errors[k] && touched[k]
      ? { "aria-invalid": "true" as const, "aria-describedby": `${uid}-${k}-err` }
      : {};

  const sectionHead: React.CSSProperties = {
    fontFamily:    "var(--font-body)",
    fontSize:      "10px",
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color:         "var(--color-ink-soft)",
    marginBottom:  12,
    display:       "block",
  };

  /* ── Form ── */
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Nishaw Gifting Brief"
      style={{ display: "flex", flexDirection: "column", gap: 28 }}
    >
      {/* Contact details */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <Field id="name" label="Your name" required>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fs("name")}
            {...ai("name")}
          />
        </Field>
        <Field id="company" label="Company" required>
          <input
            id={`${uid}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={data.company}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fs("company")}
            {...ai("company")}
          />
        </Field>
        <Field id="email" label="Work email" required>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fs("email")}
            {...ai("email")}
          />
        </Field>
        <Field id="phone" label="Phone">
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            value={data.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fs("phone")}
            {...ai("phone")}
          />
        </Field>
      </div>

      {/* Q1: What are we marking? */}
      <div>
        <span style={sectionHead}>What are we marking? <span style={reqStyle} aria-hidden>*</span></span>
        <div
          role="group"
          aria-label="What are we marking?"
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {OCCASIONS.map((o) => (
            <OptionBtn
              key={o.value}
              active={data.occasion === o.value}
              onClick={() => set("occasion", o.value)}
            >
              {o.label}
            </OptionBtn>
          ))}
        </div>
        {errors.occasion && touched.occasion && (
          <span role="alert" style={errorStyle}>{errors.occasion}</span>
        )}
      </div>

      {/* Q2: How many people? */}
      <div>
        <span style={sectionHead}>How many people?</span>
        <div
          role="group"
          aria-label="How many people?"
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {HEADCOUNTS.map((h) => (
            <OptionBtn
              key={h.value}
              active={data.headcount === h.value}
              onClick={() => set("headcount", h.value)}
            >
              {h.label}
            </OptionBtn>
          ))}
        </div>
      </div>

      {/* Q3: Budget per gift */}
      <div>
        <span style={sectionHead}>Budget per gift <span style={reqStyle} aria-hidden>*</span></span>
        <div
          role="group"
          aria-label="Budget per gift"
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {BUDGETS.map((b) => (
            <OptionBtn
              key={b.value}
              active={data.budget === b.value}
              onClick={() => set("budget", b.value)}
            >
              {b.label}
            </OptionBtn>
          ))}
        </div>
        {errors.budget && touched.budget && (
          <span role="alert" style={errorStyle}>{errors.budget}</span>
        )}
      </div>

      {/* Q4 + Q5: Timeline + Location */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <Field id="timeline" label="When do you need them?" required>
          <input
            id={`${uid}-timeline`}
            name="timeline"
            type="text"
            placeholder="e.g. End of October, within 2 weeks"
            value={data.timeline}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fs("timeline")}
            {...ai("timeline")}
          />
        </Field>
        <Field id="location" label="Where are they going?">
          <input
            id={`${uid}-location`}
            name="location"
            type="text"
            placeholder="e.g. Mumbai, Pan-India, 5 offices"
            value={data.location}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fs("location")}
            {...ai("location")}
          />
        </Field>
      </div>

      {/* Q6: Anything else */}
      <Field id="message" label="Anything else we should know?">
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          placeholder="Recipient preferences, allergies, branding requirements, a story behind the gift..."
          value={data.message}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ ...fs("message"), resize: "vertical", minHeight: 100, lineHeight: 1.65 }}
          {...ai("message")}
        />
      </Field>

      {/* Error banner */}
      {status === "error" && (
        <div
          role="alert"
          style={{
            background:   "rgba(168,68,58,0.08)",
            border:       "1px solid var(--color-terracotta)",
            borderRadius: "var(--radius-sm)",
            padding:      "14px 16px",
            fontFamily:   "var(--font-body)",
            fontSize:     "var(--text-body-sm)",
            color:        "var(--color-terracotta)",
          }}
        >
          Something went wrong. Please try again or email us at{" "}
          <a href="mailto:hello@nishaw.com" style={{ color: "inherit", fontWeight: 600 }}>
            hello@nishaw.com
          </a>.
        </div>
      )}

      {/* Submit */}
      <div style={{ paddingTop: 4 }}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-gold btn-lg"
          style={{ opacity: status === "submitting" ? 0.7 : 1, cursor: status === "submitting" ? "wait" : "pointer" }}
        >
          {status === "submitting" ? "Sending..." : "Send My Brief"}
        </button>
        <p style={{ marginTop: 12, fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
          Fields marked <span style={{ color: "var(--color-terracotta)" }}>*</span> are required. We respond within one working day.
        </p>
      </div>
    </form>
  );
}
