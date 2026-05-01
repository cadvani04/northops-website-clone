"use client";
import { ArrowRight } from "lucide-react";
const roles = [
  {
    title: "Growth Systems Specialist",
    link: "mailto:hello@northops.io",
  },
  {
    title: "Automation & CRM Engineer",
    link: "mailto:hello@northops.io",
  },
];
export default function Roles() {
  return (
    <section id="roles" className="py-24 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Roles
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mb-16">
          We periodically bring on specialists
          <br />
          who ship measurable outcomes
        </h2>
        <div className="space-y-0">
          {roles.map((role) => (
            <div
              key={role.title}
              className="border-t border-charcoal/10 py-6 flex items-center justify-between group"
            >
              <h3 className="text-xl font-medium">{role.title}</h3>
              <a
                href={role.link}
                className="flex items-center gap-2 px-4 py-2 border border-charcoal/20 rounded-full text-sm hover:border-charcoal/40 transition-colors group-hover:bg-charcoal group-hover:text-white"
              >
                Apply
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}