"use client";

import { useSearchParams } from "next/navigation";
import { useState, useId, useCallback } from "react";

/* ── Occasions ────────────────────────────────────────────────────────── */
const OCCASIONS = [
  { value: "",                  label: "Select an occasion..." },
  { value: "welcome-kits",      label: "Employee Welcome Kits" },
  { value: "milestone-gifts",   label: "Work Anniversary and Milestone Gifts" },
  { value: "rewards-recognition",label: "Rewards and Recognition Gifts" },
  { value: "client-vip-gifts",  label: "Client and VIP Corporate Gifts" },
  { value: "festive-diwali-gifts",label: "Festive and Diwali Gifting" },
  { value: "executive-gifts",   label: "Executive and CXO Gifts" },
  { value: "farewell-gifts",    label: "Farewell and Retirement Gifts" },
  { value: "event-gifting",     label: "Event and Conference Gifting" },
  { value: "bespoke",           label: "Bespoke Custom Hampers" },
  { value: "enterprise",        label: "Bulk Enterprise Gifting" },
  { value: "other",             label: "Something else" },
];

const BUDGETS = [
  { value: "",         label: "Select a budget band..." },
  { value: "under-1k", label: "Under Rs. 1,000 per gift" },
  { value: "1k-2.5k",  label: "Rs. 1,000 to Rs. 2,500 per gift" },
  { value: "2.5k-5k",  label: "Rs. 2,500 to Rs. 5,000 per gift" },
  { value: "5k-10k",   label: "Rs. 5,000 to Rs. 10,000 per gift" },
  { value: "10k-25k",  label: "Rs. 10,000 to Rs. 25,000 per gift" },
  { value: "above-25k",label: "Above Rs. 25,000 per gift" },
  { value: "unsure",   label: "Not sure yet" },
];

const TIMELINES = [
  { value: "",         label: "Select a timeline..." },
  { value: "urgent",   label: "Within 1 week (urgent)" },
  { value: "1-2w",     label: "1 to 2 weeks" },
  { value: "2-4w",     label: "2 to 4 weeks" },
  { value: "1m+",      label: "More than 1 month" },
  { value: "flexible", label: "Flexible, planning ahead" },
];

/* ── Types ────────────────────────────────────────────────────────────── */
interface FormData {
  name:     string;
  company:  string;
  email:    string;
  phone:    string;
  occasion: string;
  quantity: string;
  budget:   string;
  timeline: string;
  message:  string;
}

type FieldErrors = Partial<Record<keyof FormData, string>>;
type Status = "idle" | "submitting" | "success" | "error";

/* ── Validation ───────────────────────────────────────────────────────── */
function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your name.";
  if (!data.company.trim())
    errors.company = "Please enter your company name.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid work email address.";
  if (data.phone && !/^[+\d\s\-()]{7,15}$/.test(data.phone))
    errors.phone = "Please enter a valid phone number.";
  if (!data.occasion)
    errors.occasion = "Please select an occasion.";
  if (!data.budget)
    errors.budget = "Please select a budget band.";
  if (!data.timeline)
    errors.timeline = "Please select a timeline.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = "Please write a message (at least 20 characters).";
  return errors;
}

/* ── Field components ─────────────────────────────────────────────────── */
const labelStyle: React.CSSProperties = {
  fontFamily:    "var(--font-body)",
  fontSize:      "var(--text-body-sm)",
  color:         "var(--color-ink)",
  fontWeight:    500,
  letterSpacing: "0.02em",
  display:       "block",
  marginBottom:  6,
};

const reqStyle: React.CSSProperties = {
  color:       "var(--color-terracotta)",
  marginLeft:  3,
  fontWeight:  400,
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

/* ═══════════════════════════════════════════════════════════════════════ */
export function ContactForm() {
  const searchParams = useSearchParams();
  const uid          = useId();

  const [data, setData] = useState<FormData>({
    name:     "",
    company:  "",
    email:    "",
    phone:    "",
    occasion: searchParams.get("occasion") ?? "",
    quantity: "",
    budget:   "",
    timeline: "",
    message:  "",
  });

  const [errors,  setErrors]  = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status,  setStatus]  = useState<Status>("idle");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
      // Clear error on change if field was touched
      if (touched[name as keyof FormData]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name as keyof FormData];
          return next;
        });
      }
    },
    [touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const allErrors = validate(data);
      if (allErrors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: allErrors[name as keyof FormData] }));
      }
    },
    [data]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const allErrors = validate(data);
      if (Object.keys(allErrors).length > 0) {
        setErrors(allErrors);
        setTouched(
          Object.fromEntries(Object.keys(data).map((k) => [k, true])) as typeof touched
        );
        // Scroll to first error
        const firstId = `${uid}-${Object.keys(allErrors)[0]}`;
        document.getElementById(firstId)?.focus();
        return;
      }

      setStatus("submitting");

      try {
        const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
        const endpoint = formspreeId
          ? `https://formspree.io/f/${formspreeId}`
          : "/api/contact";

        const res = await fetch(endpoint, {
          method:  "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body:    JSON.stringify({
            ...data,
            _subject: `Nishaw Enquiry: ${OCCASIONS.find((o) => o.value === data.occasion)?.label ?? data.occasion}`,
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
        {/* Gold seal */}
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
          We will be in touch within one working day. Let us make someone feel remarkable.
        </p>

        <button
          onClick={() => { setStatus("idle"); setData({ name:"",company:"",email:"",phone:"",occasion:"",quantity:"",budget:"",timeline:"",message:"" }); setErrors({}); setTouched({}); }}
          style={{
            fontFamily:    "var(--font-body)",
            fontSize:      "var(--text-body-sm)",
            color:         "var(--color-ink-soft)",
            background:    "transparent",
            border:        "none",
            cursor:        "pointer",
            textDecoration:"underline",
            padding:       0,
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  /* ── Field helper ── */
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
        {/* Clone children to inject id/aria-describedby */}
        {children}
        {errors[fieldKey] && touched[fieldKey] && (
          <span id={errId} role="alert" style={errorStyle}>
            {errors[fieldKey]}
          </span>
        )}
      </div>
    );
  }

  const fs = (k: keyof FormData) => fieldStyle(!!errors[k] && !!touched[k]);
  const ai = (k: keyof FormData) =>
    errors[k] && touched[k]
      ? { "aria-invalid": "true" as const, "aria-describedby": `${uid}-${k}-err` }
      : {};

  /* ── Form ── */
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact Nishaw"
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      {/* Row: Name + Company */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <Field id="name" label="Name" required>
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
      </div>

      {/* Row: Email + Phone */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <Field id="email" label="Work Email" required>
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

      {/* Occasion */}
      <Field id="occasion" label="Occasion" required>
        <select
          id={`${uid}-occasion`}
          name="occasion"
          value={data.occasion}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ ...fs("occasion"), appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B5A4E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 36 }}
          {...ai("occasion")}
        >
          {OCCASIONS.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ""}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Row: Quantity + Budget */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <Field id="quantity" label="Approximate Quantity">
          <input
            id={`${uid}-quantity`}
            name="quantity"
            type="text"
            placeholder="e.g. 50, 200, 500+"
            value={data.quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fs("quantity")}
            {...ai("quantity")}
          />
        </Field>
        <Field id="budget" label="Budget per Gift" required>
          <select
            id={`${uid}-budget`}
            name="budget"
            value={data.budget}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ ...fs("budget"), appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B5A4E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 36 }}
            {...ai("budget")}
          >
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value} disabled={b.value === ""}>
                {b.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Timeline */}
      <Field id="timeline" label="Timeline" required>
        <select
          id={`${uid}-timeline`}
          name="timeline"
          value={data.timeline}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ ...fs("timeline"), appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B5A4E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 36 }}
          {...ai("timeline")}
        >
          {TIMELINES.map((t) => (
            <option key={t.value} value={t.value} disabled={t.value === ""}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field id="message" label="Tell us about your gift" required>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={5}
          placeholder="Who is this for? What occasion? Any details that will help us curate the right gift..."
          value={data.message}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ ...fs("message"), resize: "vertical", minHeight: 120, lineHeight: 1.65 }}
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
          Something went wrong on our end. Please try again or email us directly at{" "}
          <a href="mailto:hello@nishaw.com" style={{ color: "inherit", fontWeight: 600 }}>
            hello@nishaw.com
          </a>
          .
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
          {status === "submitting" ? "Sending..." : "Send Enquiry"}
        </button>
        <p style={{ marginTop: 12, fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
          Fields marked <span style={{ color: "var(--color-terracotta)" }}>*</span> are required. We respond within one working day.
        </p>
      </div>
    </form>
  );
}
