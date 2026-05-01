"use client";
import { ArrowRight, Sparkles } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          About
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
          <span className="text-charcoal/40">Product managers & designers</span>{" "}
          <span className="text-charcoal">for AI x B2B teams.</span>
        </h2>
        <p className="text-lg text-charcoal/70 mb-12 max-w-2xl">
          Senior product talent that drives design projects from wireframe to full release alongside your engineers.
        </p>
        <div className="border-t border-charcoal/10 pt-8 mb-8">
          <div className="flex items-start gap-3 mb-2">
            <ArrowRight className="w-5 h-5 text-charcoal/40 mt-1" />
            <div>
              <p className="text-5xl md:text-6xl font-medium text-charcoal">0</p>
              <p className="text-charcoal/60 mt-1">happy teams across the globe</p>
            </div>
          </div>
        </div>
        <div className="border-t border-charcoal/10 pt-8 mb-12">
          <div className="flex items-start gap-3 mb-2">
            <ArrowRight className="w-5 h-5 text-charcoal/40 mt-1" />
            <div>
              <p className="text-5xl md:text-6xl font-medium text-charcoal">$0M+</p>
              <p className="text-charcoal/60 mt-1">raised by our customers</p>
            </div>
          </div>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-lime hover:bg-lime-light transition-colors px-5 py-3 rounded-full text-charcoal font-medium"
        >
          <span className="w-8 h-8 bg-lime-dark/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </span>
          Book call
        </a>
      </div>
    </section>
  );
}