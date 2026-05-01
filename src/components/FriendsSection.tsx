"use client";
export default function FriendsSection() {
  return (
    <section className="py-24 px-6 bg-charcoal text-white rounded-3xl mx-4 md:mx-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-16">
          What teams say
          <br />
          after we connect the stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-charcoal-light rounded-2xl p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <img
                src="/assets/images/clients/partners-quote-panel.svg"
                alt="NorthOps partner brands and logos"
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div className="bg-white text-charcoal rounded-2xl p-6">
            <div className="text-xs text-charcoal/50 mb-4">
              <span className="text-charcoal/70">From:</span> Restaurant operator (referral partner)
            </div>
            <p className="text-sm leading-relaxed">
              NorthOps is the crew we tap when scattered tools kill momentum—they
              actually wire CRM, automation, and reporting together.
            </p>
            <ul className="text-sm text-charcoal/70 mt-4 space-y-2">
              <li>• They shorten the gap between campaigns and bookings</li>
              <li>• They obsess over repeatable ops, not one-off dashboards</li>
              <li>• They communicate like builders, not account managers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}