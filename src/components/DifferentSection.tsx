"use client";
export default function DifferentSection() {
  return (
    <section className="py-24 px-6 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-2xl md:text-3xl text-white/40 mb-4">Why NorthOps</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
          We do not just create content or build software. We connect growth,
          leads, operations, and automation into one system that drives revenue.
        </h2>
        <div className="mt-16 p-6 bg-charcoal-light rounded-2xl border border-white/10 max-w-md">
          <div className="flex items-start gap-3">
            <img
              src="https://ext.same-assets.com/2268013425/2841878956.png"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">Operator</span>
                <span className="text-xs text-white/40">11:52 AM</span>
              </div>
              <p className="text-sm text-white/60">Quick note</p>
              <p className="text-sm text-white/80">
                Most agencies stop at content. NorthOps turns content into
                customers. Most tools do not connect—we build full systems. Most
                businesses operate manually—we automate the repeatable work.
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