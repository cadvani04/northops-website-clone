import Link from "next/link";
import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Schedule a call — NorthOps",
  description: "Pick a time to talk about AI systems, content, and operations.",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-14 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block text-sm text-charcoal/60 hover:text-charcoal transition-colors mb-10"
        >
          ← Back to NorthOps
        </Link>
        <h1 className="text-4xl md:text-5xl font-medium text-charcoal tracking-tight mb-4">
          Book a strategy call
        </h1>
        <p className="text-lg text-charcoal/70 mb-10 max-w-xl">
          Choose a slot below. We use this page to coordinate discovery and next
          steps for your ops and growth systems.
        </p>
        <CalendlyEmbed />
      </div>
    </main>
  );
}
