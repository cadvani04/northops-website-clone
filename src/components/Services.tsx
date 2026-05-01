"use client";
const services = [
  {
    title: "Short-Form Growth Systems",
    description:
      "We create TikTok and Instagram content that drives local awareness, foot traffic, and inbound demand.",
    dark: false,
    lime: true,
  },
  {
    title: "AI Automations",
    description:
      "We automate follow-ups, scheduling, reminders, onboarding, reporting, and repetitive admin work.",
    dark: false,
    lime: false,
  },
  {
    title: "CRM + Lead Systems",
    description:
      "We build CRM pipelines that capture, track, and convert leads so no customer slips through the cracks.",
    dark: false,
    lime: false,
  },
  {
    title: "Internal Operations Software",
    description:
      "Custom dashboards for job tracking, inventory, scheduling, purchasing, delivery workflows, and team coordination.",
    dark: true,
    lime: false,
  },
  {
    title: "AI Agents + Chatbots",
    description:
      "AI assistants that answer questions, qualify leads, route requests, and reduce manual support.",
    dark: true,
    lime: false,
  },
  {
    title: "Content-to-Customer Funnels",
    description:
      "We connect content, landing pages, forms, SMS/email follow-up, and CRM pipelines into one system.",
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