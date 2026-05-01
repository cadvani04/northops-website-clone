"use client";
import { clientLogosNorthOps } from "@/data/client-logos";
import { Sparkles } from "lucide-react";

function FourPointStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M8 0l1.5 5.5L15 8l-5.5 2.5L8 16l-1.5-5.5L1 8l5.5-2.5L8 0z" />
    </svg>
  );
}

export default function Hero() {
  const loopLogos = [...clientLogosNorthOps, ...clientLogosNorthOps];

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 gradient-bg"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[55%] w-[70%] max-w-3xl rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 85% 0%, rgba(200, 230, 190, 0.55) 0%, rgba(250, 250, 245, 0) 65%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-[-0.04em] mb-8 text-balance">
          AI Systems + Content{" "}
          <span className="text-charcoal/35 font-normal mx-1" aria-hidden>
            •
          </span>{" "}
          That Turn Attention
          <br />
          Into Customers{" "}
          <span className="text-charcoal/25 font-light tracking-[-0.02em]">
            ..::
          </span>
        </h1>
        <p className="text-lg md:text-xl text-charcoal/65 font-normal mb-10 max-w-xl tracking-[-0.02em] leading-snug">
          We build the growth engine behind modern businesses: short-form
          content, lead capture, CRM automation, AI agents, and internal tools
          that drive revenue and eliminate manual work.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white border border-charcoal/15 hover:border-charcoal/25 transition-colors px-5 py-3 rounded-full text-charcoal font-medium shadow-sm"
          >
            <span className="w-8 h-8 bg-lime rounded-md flex items-center justify-center text-charcoal">
              <FourPointStar className="w-3.5 h-3.5" />
            </span>
            Book a Strategy Call
          </a>
          <span className="text-sm text-charcoal/50 flex items-center gap-2">
            <span aria-hidden>⚡️</span>
            See Our Work
          </span>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 w-full">
          <span className="shrink-0 text-xs font-medium text-charcoal/60 bg-charcoal/[0.06] px-3 py-1.5 rounded-full inline-flex items-center gap-2 w-fit">
            <Sparkles className="w-3 h-3 shrink-0" />
            Trusted by businesses building real growth systems
          </span>
          <div className="relative min-w-0 flex-1 overflow-hidden mask-marquee-fade py-1">
            <div className="flex w-max gap-12 md:gap-16 items-center animate-marquee-logos">
              {loopLogos.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex shrink-0 items-center opacity-55 hover:opacity-90 transition-opacity"
                >
                  <img
                    src={logo.icon}
                    alt={`${logo.name} logo`}
                    title={logo.sourceUrl}
                    referrerPolicy="no-referrer"
                    className="h-7 md:h-8 w-[120px] md:w-[136px] object-contain grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
