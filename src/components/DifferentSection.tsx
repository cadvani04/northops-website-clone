"use client";
export default function DifferentSection() {
  return (
    <section className="py-24 px-6 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-2xl md:text-3xl text-white/40 mb-4">We work differently.</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
          Great design is table stakes, product & design clarity is what sets us apart.
        </h2>
        <div className="mt-16 p-6 bg-charcoal-light rounded-2xl border border-white/10 max-w-md">
          <div className="flex items-start gap-3">
            <img
              src="https://ext.same-assets.com/2268013425/2841878956.png"
              alt="Simon"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">Simon</span>
                <span className="text-xs text-white/40">11:52 AM</span>
              </div>
              <p className="text-sm text-white/60">Hey Audrey</p>
              <p className="text-sm text-white/80">
                Of course! Thank you so much. Mapo has been a dream to work with
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <img
            src="https://ext.same-assets.com/2268013425/3753048698.png"
            alt="Alcova"
            className="h-6 object-contain opacity-60"
          />
        </div>
      </div>
    </section>
  );
}