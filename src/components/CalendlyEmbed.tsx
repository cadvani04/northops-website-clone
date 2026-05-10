"use client";

import Script from "next/script";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export default function CalendlyEmbed() {
  if (!CALENDLY_URL.trim()) {
    return null;
  }

  return (
    <>
      <div className="w-full rounded-2xl overflow-hidden bg-white/40 ring-1 ring-charcoal/10">
        <div
          className="calendly-inline-widget w-full"
          data-url={CALENDLY_URL}
          style={{ minWidth: 320, height: 700 }}
        />
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
