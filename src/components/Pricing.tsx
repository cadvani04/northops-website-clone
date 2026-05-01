"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
const deliverables = [
  {
    title: "Short-Form Growth Systems",
    description:
      "We create TikTok and Instagram content that drives local awareness, foot traffic, and inbound demand.",
  },
  {
    title: "AI Automations",
    description:
      "We automate follow-ups, scheduling, reminders, onboarding, reporting, and repetitive admin work.",
    tags: ["Follow-ups", "Scheduling", "Reporting"],
  },
  {
    title: "CRM + Lead Systems",
    description:
      "We build CRM pipelines that capture, track, and convert leads so no customer slips through the cracks.",
  },
  {
    title: "Internal Operations Software",
    description:
      "Custom dashboards for job tracking, inventory, scheduling, purchasing, delivery workflows, and team coordination.",
  },
  {
    title: "AI Agents + Chatbots",
    description:
      "AI assistants that answer questions, qualify leads, route requests, and reduce manual support.",
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
          Retainers from $5K/mo,
          <br />
          deployments from $10K+.
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-lime hover:bg-lime-light transition-colors px-5 py-3 rounded-full text-charcoal font-medium mb-16"
        >
          <span className="w-8 h-8 bg-lime-dark/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </span>
          Book a Strategy Call
        </a>
        <div className="border-t border-charcoal/10 pt-12">
          <div className="flex gap-8 mb-12">
            <button
              onClick={() => setActiveTab("scaleups")}
              className={`text-2xl md:text-3xl font-medium transition-colors ${
                activeTab === "scaleups" ? "text-charcoal" : "text-charcoal/30"
              }`}
            >
              Scale-ups & multi-location operators
            </button>
            <button
              onClick={() => setActiveTab("startups")}
              className={`text-2xl md:text-3xl font-medium transition-colors ${
                activeTab === "startups" ? "text-charcoal" : "text-charcoal/30"
              }`}
            >
              Owner-led growth teams
            </button>
          </div>
          <p className="text-charcoal/70 mb-8 max-w-xl">
            {activeTab === "scaleups"
              ? "You already have demand and staff—NorthOps installs CRMs, automations, and internal dashboards so leads convert and ops stay predictable."
              : "You’re building revenue with lean headcount—we connect short-form demand, CRM, and workflows so manual follow-up doesn’t cap growth."}
          </p>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-sm text-charcoal/60">You'll work with</span>
            <div className="flex -space-x-2">
              <img src="https://ext.same-assets.com/2268013425/4187469268.png" alt="Team" className="w-8 h-8 rounded-full border-2 border-cream" />
              <img src="https://ext.same-assets.com/2268013425/1886514585.png" alt="Team" className="w-8 h-8 rounded-full border-2 border-cream" />
            </div>
            <span className="text-sm bg-charcoal/5 px-3 py-1 rounded-full">Systems</span>
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