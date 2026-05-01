"use client";
export default function Timeline() {
  return (
    <section className="py-24 px-6 bg-lime rounded-3xl mx-4 md:mx-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-16 text-charcoal">
          Keep revenue and operations moving—we ship systems faster than rebuilding in-house solo.
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-8">
            <span className="text-sm font-medium text-charcoal/60 w-24">WITH NORTHOPS</span>
            <div className="flex-1 flex gap-1">
              <div className="bg-charcoal text-white text-xs font-medium px-4 py-2 rounded flex-[3]">
                DESIGN
              </div>
              <div className="bg-charcoal text-white text-xs font-medium px-4 py-2 rounded flex-1">
                TEST
              </div>
              <div className="bg-charcoal text-white text-xs font-medium px-4 py-2 rounded flex-1">
                LAUNCH
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-sm font-medium text-charcoal/60 w-24">IN-HOUSE</span>
            <div className="flex-1">
              <div className="border-2 border-charcoal text-charcoal text-xs font-medium px-4 py-2 rounded w-full">
                HIRING
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}