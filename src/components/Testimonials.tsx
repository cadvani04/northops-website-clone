"use client";
const testimonials = [
  {
    company: "deputy",
    logo: "https://ext.same-assets.com/2268013425/719976910.png",
    avatar: "https://ext.same-assets.com/2268013425/2841878956.png",
    name: "Deepesh Banerji",
    role: "CPO",
    quote: "Within two weeks, mapo deployed two senior designers who slotted right into our product triads. They picked up our cadence and rituals fast, and the design thinking and output was immediately impactful, bringing clarity and depth into new product areas at Deputy: messaging and AI.",
    months: 8,
    active: true,
  },
  {
    company: "HotDoc",
    logo: "https://ext.same-assets.com/2268013425/3577152652.png",
    avatar: "https://ext.same-assets.com/2268013425/3738534776.png",
    name: "Agnes So",
    role: "CPO",
    quote: "We've been really impressed by mapo's ability to combine structured design frameworks with flexibility. Their rituals gave us confidence that work will move forward even as our pace or priorities shift.",
    months: 5,
    active: true,
  },
  {
    company: "Lorikeet",
    logo: "https://ext.same-assets.com/2268013425/1322818619.png",
    avatar: "https://ext.same-assets.com/2268013425/774321272.png",
    name: "Steve Hind",
    role: "CEO",
    quote: "mapo turned complex AI ideas into thoughtful design concepts that scale. From our earliest MVP to the agent creation experience, Jenny and Auds brought product and design clarity to an ambiguous problem.",
    months: 6,
    active: false,
  },
];
export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Our Designs
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Why mapo?</h2>
        <p className="text-charcoal/60 mb-12 max-w-xl">
          Work with a design partner that understands how to ship features in fast-paced product organisations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
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
              <img
                src={testimonial.logo}
                alt={testimonial.company}
                className="h-6 object-contain mb-6"
              />
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-charcoal/50">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}