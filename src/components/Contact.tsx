"use client";
import { useState } from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
export default function Contact() {
  const [projectType, setProjectType] = useState<string | null>(null);
  return (
    <section id="contact" className="py-24 px-6 gradient-bg rounded-t-3xl">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-16">
          Ready to replace manual work with systems that actually scale? NorthOps
          turns content, leads, operations, and automation into one connected
          growth engine.
        </h2>
        <div className="text-left space-y-8">
          <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl">
            <span>My name is</span>
            <input
              type="text"
              placeholder="first & last name"
              className="bg-transparent border-b border-charcoal/30 focus:border-charcoal outline-none px-2 py-1 min-w-[180px] placeholder:text-charcoal/30"
            />
            <span>from</span>
            <input
              type="text"
              placeholder="company name"
              className="bg-transparent border-b border-charcoal/30 focus:border-charcoal outline-none px-2 py-1 min-w-[150px] placeholder:text-charcoal/30"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl">
            <span>I want to chat about</span>
            <div className="flex gap-2">
              {["Growth systems", "Automations", "Internal tools"].map((type) => (
                <button
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={`px-4 py-1.5 border rounded-full text-sm transition-colors ${
                    projectType === type
                      ? "bg-charcoal text-white border-charcoal"
                      : "border-charcoal/30 hover:border-charcoal/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl">
            <span>You can reach me at</span>
            <input
              type="email"
              placeholder="email address"
              className="bg-transparent border-b border-charcoal/30 focus:border-charcoal outline-none px-2 py-1 min-w-[200px] placeholder:text-charcoal/30"
            />
          </div>
          <div className="pt-12 w-full max-w-3xl mx-auto text-left">
            <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-4 block">
              Book a strategy call
            </span>
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}