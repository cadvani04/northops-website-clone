"use client";

import { logoUrlForClientName } from "@/data/client-logos";

const testimonials = [
  {
    company: "Total Fire Protection",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Client lead",
    role: "Operations",
    quote:
      "Custom operations dashboard / ERP system: inventory, job tracking, purchasing, receiving, delivery scheduling, and team visibility.",
    months: 11,
    active: true,
  },
  {
    company: "Namaste Indian Cuisine SF",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Growth lead",
    role: "Local demand",
    quote:
      "Short-form content, local SEO, Google Ads, and DoorDash growth support wired into one playbook.",
    months: 10,
    active: true,
  },
  {
    company: "La Estancia",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Marketing lead",
    role: "Restaurant growth",
    quote:
      "1M+ organic views, influencer partnerships, and repeatable restaurant growth without guessing what to film next.",
    months: 9,
    active: true,
  },
  {
    company: "The Chaga Company",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Revenue ops",
    role: "Ecommerce",
    quote:
      "Newsletter revenue lifted from roughly $200/month to about $4,000/month once follow-up matched the funnel.",
    months: 7,
    active: false,
  },
  {
    company: "Bullvinos",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Brand lead",
    role: "Product + social",
    quote:
      "Social media and native app momentum tied back to bookings and predictable release cadences.",
    months: 8,
    active: true,
  },
  {
    company: "OpenLA",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Growth systems",
    role: "Platform",
    quote:
      "Website, CRM, marketplace, AI receptionist, and a customer-reactivation playbook run as one ecosystem.",
    months: 12,
    active: false,
  },
  {
    company: "Chocolat",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Store owner",
    role: "Local retail",
    quote:
      "Performance-based local growth strategy with clear weekly targets—not vanity metrics disguised as progress.",
    months: 6,
    active: true,
  },
  {
    company: "El Palomar + Cilantros",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Operators",
    role: "Restaurant group",
    quote:
      "Local restaurant growth strategy that pairs foot-traffic pushes with repeatable table-turn and staffing rhythm.",
    months: 5,
    active: false,
  },
  {
    company: "Onyx Lifestyle Club",
    avatar: "/assets/images/clients/generic-avatar.svg",
    name: "Experience lead",
    role: "Events",
    quote:
      "Event marketing cadence rebuilt so ticket sales and member renewals spike around predictable moments.",
    months: 4,
    active: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Trusted partners
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          Trusted by businesses building real growth systems
        </h2>
        <p className="text-charcoal/60 mb-12 max-w-xl">
          From restaurant growth to internal operations software, NorthOps helps
          businesses turn attention, leads, and workflows into measurable
          outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => {
            const logoUrl = logoUrlForClientName(testimonial.company);
            return (
              <div
                key={testimonial.company}
                className="bg-white rounded-2xl p-6 border border-charcoal/5 hover:border-charcoal/10 transition-colors"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex items-center gap-1 text-xs bg-charcoal/5 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-lime rounded-full" />
                    {testimonial.months} MONTHS
                  </span>
                  {testimonial.active && (
                    <span className="text-xs text-charcoal/50 bg-charcoal/5 px-2 py-1 rounded-full">
                      ACTIVE
                    </span>
                  )}
                </div>
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt={`${testimonial.company} logo`}
                    referrerPolicy="no-referrer"
                    className="h-6 object-contain mb-6 grayscale"
                  />
                )}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt=""
                    aria-hidden
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-charcoal/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
