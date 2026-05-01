"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
export default function Contact() {
  const [projectType, setProjectType] = useState<string | null>(null);
  return (
    <section id="contact" className="py-24 px-6 gradient-bg rounded-t-3xl">
      <div className="max-w-[800px] mx-auto text-center">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-16">
          Let's collaborate
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
            <span>I want to chat about designs for my</span>
            <div className="flex gap-2">
              {["Web app", "Mobile app", "Website"].map((type) => (
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
          <div className="pt-8">
            <button className="inline-flex items-center gap-3 bg-lime hover:bg-lime-light transition-colors px-6 py-4 rounded-full text-charcoal font-medium">
              <span className="w-8 h-8 bg-lime-dark/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </span>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}