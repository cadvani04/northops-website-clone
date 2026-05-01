"use client";
const services = [
  {
    title: "AI features",
    description: "We've designed 20+ AI x B2B products to date and understand common UX patterns.",
    dark: false,
    lime: true,
  },
  {
    title: "UX design",
    description: "We start with UX. We research competitor products in the wireframe process.",
    dark: false,
    lime: false,
  },
  {
    title: "UI design",
    description: "We deliver polished, dev-ready UI that meets WCAG accessibility standards.",
    dark: false,
    lime: false,
  },
  {
    title: "User research & testing",
    description: "We help test flows with users by drafting scripts or reviewing user interviews.",
    dark: true,
    lime: false,
  },
  {
    title: "Design systems",
    description: "We create, scale, and maintain design systems that enable fast, consistent product work.",
    dark: true,
    lime: false,
  },
  {
    title: "Prototyping",
    description: "From Figma to code-based tools, we build interactive prototypes.",
    dark: false,
    lime: false,
  },
];
const GridIcon = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="8" cy="8" r="4" fill="currentColor" />
    <circle cx="24" cy="8" r="4" fill="currentColor" />
    <circle cx="8" cy="24" r="4" fill="currentColor" />
    <circle cx="24" cy="24" r="4" fill="currentColor" />
  </svg>
);
export default function Services() {
  return (
    <section className="py-12 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 rounded-2xl min-h-[180px] flex flex-col justify-between transition-transform hover:scale-[1.02] ${
                service.lime
                  ? "bg-lime text-charcoal"
                  : service.dark
                    ? "bg-charcoal text-white"
                    : "bg-white border border-charcoal/10 text-charcoal"
              }`}
            >
              <GridIcon className={service.dark ? "text-white/80" : "text-charcoal/80"} />
              <div>
                <h3 className="text-lg font-medium mt-8">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}