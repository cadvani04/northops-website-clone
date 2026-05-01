"use client";
import { Sparkles } from "lucide-react";
const clientLogos = [
  { name: "Heidi", icon: "https://ext.same-assets.com/2268013425/444455318.png" },
  { name: "Blinq", icon: "https://ext.same-assets.com/2268013425/278898221.png" },
  { name: "Relevance AI", icon: "https://ext.same-assets.com/2268013425/1630601303.png" },
  { name: "eucalyptus", icon: "https://ext.same-assets.com/2268013425/2037737850.png" },
];
export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 gradient-bg min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8">
          Design for startups{" "}
          <span className="inline-flex items-center">
            <span className="w-3 h-3 bg-charcoal rounded-full mx-3" />
          </span>
          and
          <br />
          scale-ups
          <span className="inline-flex ml-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-charcoal">
              <circle cx="12" cy="12" r="6" fill="currentColor" />
              <circle cx="36" cy="12" r="6" fill="currentColor" />
              <circle cx="12" cy="36" r="6" fill="currentColor" />
              <circle cx="36" cy="36" r="6" fill="currentColor" />
            </svg>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-xl">
          Senior product managers & product designers for AI x B2B software teams.
        </p>
        <div className="flex items-center gap-4 mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-lime hover:bg-lime-light transition-colors px-5 py-3 rounded-full text-charcoal font-medium"
          >
            <span className="w-8 h-8 bg-lime-dark/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            Let's chat
          </a>
          <span className="text-sm text-charcoal/50 flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            1 spot left in May
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-xs font-medium text-charcoal/60 bg-charcoal/5 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Loved by 50+ global teams
          </span>
          <div className="flex items-center gap-8">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <img src={logo.icon} alt={logo.name} className="h-6 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}