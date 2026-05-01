"use client";
export default function FriendsSection() {
  return (
    <section className="py-24 px-6 bg-charcoal text-white rounded-3xl mx-4 md:mx-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-16">
          How our friends
          <br />
          describe us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-charcoal-light rounded-2xl p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <img
                src="https://ext.same-assets.com/2268013425/4170047168.png"
                alt="Testimonial"
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div className="bg-white text-charcoal rounded-2xl p-6">
            <div className="text-xs text-charcoal/50 mb-4">
              <span className="text-charcoal/70">From:</span> Joumana Elomar
            </div>
            <p className="text-sm leading-relaxed">
              Meet Audrey - she runs the incredible product design studio I know.
            </p>
            <ul className="text-sm text-charcoal/70 mt-4 space-y-2">
              <li>• She's the strongest product designer I know</li>
              <li>• She's incredibly warm, empathetic and thoughtful</li>
              <li>• Into the way she designs too.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}