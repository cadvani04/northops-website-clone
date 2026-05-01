"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
const deliverables = [
  {
    title: "Rituals",
    description: "We embed into your product team's rituals. Anything from standup, design workshops, to test parties.",
  },
  {
    title: "Wireframes",
    description: "This is a huge focus for us. We triangulate information from your brief, any user docs you have & competitor analyses.",
    tags: ["User interviews", "Competitor analysis", "Brainstorm"],
  },
  {
    title: "Design systems",
    description: "We create and manage a scalable design system, making it easy for your engineering team to ship on brand.",
  },
  {
    title: "High-fidelity",
    description: "We bring designs to life from wireframes. This involves using consistent design out end-to-end annotated flows.",
  },
  {
    title: "Prototypes",
    description: "We bring designs to life from lo-fi wireframes with consistent design system components.",
  },
];
export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"scaleups" | "startups">("scaleups");
  return (
    <section id="pricing" className="py-24 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Pricing
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          No guesswork on pricing,
          <br />
          we charge $18K/mo.
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-lime hover:bg-lime-light transition-colors px-5 py-3 rounded-full text-charcoal font-medium mb-16"
        >
          <span className="w-8 h-8 bg-lime-dark/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </span>
          Enquire
        </a>
        <div className="border-t border-charcoal/10 pt-12">
          <div className="flex gap-8 mb-12">
            <button
              onClick={() => setActiveTab("scaleups")}
              className={`text-2xl md:text-3xl font-medium transition-colors ${
                activeTab === "scaleups" ? "text-charcoal" : "text-charcoal/30"
              }`}
            >
              Scale-ups
            </button>
            <button
              onClick={() => setActiveTab("startups")}
              className={`text-2xl md:text-3xl font-medium transition-colors ${
                activeTab === "startups" ? "text-charcoal" : "text-charcoal/30"
              }`}
            >
              Startups
            </button>
          </div>
          <p className="text-charcoal/70 mb-8 max-w-xl">
            {activeTab === "scaleups"
              ? "You've raised $50m+. You need a senior product designer in your triad to accelerate your roadmap."
              : "Early stage startup looking for design support to ship your MVP or next big feature."}
          </p>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-sm text-charcoal/60">You'll work with</span>
            <div className="flex -space-x-2">
              <img src="https://ext.same-assets.com/2268013425/4187469268.png" alt="Team" className="w-8 h-8 rounded-full border-2 border-cream" />
              <img src="https://ext.same-assets.com/2268013425/1886514585.png" alt="Team" className="w-8 h-8 rounded-full border-2 border-cream" />
            </div>
            <span className="text-sm bg-charcoal/5 px-3 py-1 rounded-full">Design</span>
          </div>
          <div className="space-y-0">
            {deliverables.map((item) => (
              <div key={item.title} className="border-t border-charcoal/10 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <div className="md:col-span-2">
                  <p className="text-charcoal/70 mb-3">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-charcoal/5 px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}