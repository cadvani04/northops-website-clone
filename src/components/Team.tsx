"use client";
const teamMembers = [
  {
    name: "Audrey T.",
    role: "FOUNDER",
    location: "SYDNEY",
    bio: "Sometimes a PM but always a PD. Drinks 3 matchas a day.",
    image: "https://ext.same-assets.com/2268013425/4199088296.jpeg",
    prev: null,
  },
  {
    name: "Jenny Chu",
    role: "PRODUCT",
    location: "SYDNEY",
    bio: null,
    image: "https://ext.same-assets.com/2268013425/2843043482.jpeg",
    prev: "Canva, Atlassian, Eucalyptus",
  },
  {
    name: "Man Hin Ma",
    role: "DESIGN",
    location: "SYDNEY",
    bio: null,
    image: "https://ext.same-assets.com/2268013425/2970004300.png",
    prev: "Eucalyptus, Zip",
  },
  {
    name: "Quinnie Chen",
    role: "PRODUCT",
    location: "MELBOURNE",
    bio: null,
    image: "https://ext.same-assets.com/2268013425/2110445206.jpeg",
    prev: "Canva, Envato",
  },
  {
    name: "George Hatzis",
    role: "DESIGN",
    location: "MELBOURNE",
    bio: null,
    image: "https://ext.same-assets.com/2268013425/3977456799.png",
    prev: "Wisr, Eucalyptus",
  },
  {
    name: "Serena Thai",
    role: "DESIGN",
    location: "SYDNEY",
    bio: null,
    image: "https://ext.same-assets.com/2268013425/2286026670.png",
    prev: "Safety Culture",
  },
  {
    name: "Clement Tan",
    role: "DESIGN",
    location: "SYDNEY",
    bio: null,
    image: "https://ext.same-assets.com/2268013425/224360404.jpeg",
    prev: "Quickli",
  },
];
const companyLogos = [
  "https://ext.same-assets.com/2268013425/1035612841.png",
  "https://ext.same-assets.com/2268013425/2037737850.png",
  "https://ext.same-assets.com/2268013425/3466712259.png",
];
export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Team
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          Executed by a team
          <br />
          who's done it before
        </h2>
        <div className="flex flex-wrap items-center gap-6 mb-16">
          {companyLogos.map((logo, i) => (
            <img key={i} src={logo} alt="Company" className="h-5 object-contain opacity-50" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-charcoal/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-xs font-medium text-charcoal/50 tracking-wider mt-1">
                {member.role}, {member.location}
              </p>
              {member.bio && (
                <p className="text-sm text-charcoal/70 mt-3">{member.bio}</p>
              )}
              {member.prev && (
                <p className="text-sm text-charcoal/50 mt-3">Prev. @ {member.prev}.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}