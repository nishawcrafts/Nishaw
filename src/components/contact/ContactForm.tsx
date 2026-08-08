"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ContactFormInner } from "./ContactFormInner";

/* ─────────────────────────────────────────────────────────────────────────
   ContactForm — thin shell that reads ?occasion= and passes it down.
   The Suspense boundary is kept HERE so ContactFormInner (the form body)
   gets an initialOccasion prop and renders immediately without suspending.
   ──────────────────────────────────────────────────────────────────────── */

function OccasionReader() {
  const params = useSearchParams();
  const raw = params.get("occasion") ?? "";
  return <ContactFormInner initialOccasionParam={raw} />;
}

export function ContactForm() {
  return (
    <Suspense fallback={<ContactFormInner initialOccasionParam="" />}>
      <OccasionReader />
    </Suspense>
  );
}
