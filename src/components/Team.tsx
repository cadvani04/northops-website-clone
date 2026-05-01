"use client";

import { clientLogosNorthOps } from "@/data/client-logos";
import Image from "next/image";

const teamMembers = [
  {
    name: "Curran Advani",
    role: "SOCIAL MEDIA & VIRAL GROWTH",
    location: "CONTENT",
    bio: "Leads social and short-form storytelling that earns attention—and routes it toward real demand.",
    image: "/team/curran-advani.png",
    prev: "TikTok • Instagram • influencer-style reels",
  },
  {
    name: "Kayden Sterns",
    role: "AI SYSTEMS DEVELOPER",
    location: "KUMON",
    bio: "Ships internal AI systems at Kumon—turning learning-center operations and tooling into reliable software.",
    image: "/team/kayden-sterns.png",
    prev: null,
  },
  {
    name: "Chaavan Sure",
    role: "AI CONSULTANT",
    location: "$100M+ ARR",
    bio: "Advises executives at nine-figure operators on where AI compounds revenue, cuts cost, and stays governable—without science projects.",
    image: "/team/chaavan-sure.png",
    prev: null,
  },
  {
    name: "Ashley",
    role: "MOBILE DEVELOPMENT INTERN",
    location: "GOOGLE",
    bio: "Supporting Google’s consumer mobile surfaces—shipping quality features with the discipline of a big-tech release train.",
    image: "/team/ashley.png",
    prev: null,
  },
  {
    name: "Sid Mamidanna",
    role: "AI RESEARCH & SAFETY EXPERT",
    location: "CAMBRIDGE (PHD)",
    bio: "Guards how we design agents, evals, and automation—bringing research-grade discipline to shipped systems. Heading to Cambridge for his PhD.",
    image: "/team/sid-mamidanna.png",
    prev: null,
  },
];
const companyStripLogos = clientLogosNorthOps.slice(0, 3).map((c) => ({
  icon: c.icon,
  alt: `${c.name} logo`,
}));
const headshotBaseline = new Set(["Curran Advani", "Chaavan Sure"]);

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-xs font-medium tracking-widest text-charcoal/50 uppercase mb-6 block">
          Team
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          Built by operators who
          <br />
          ship revenue systems
        </h2>
        <div className="flex flex-wrap items-center gap-6 mb-16">
          {companyStripLogos.map((row) => (
            <img
              key={row.alt}
              src={row.icon}
              alt={row.alt}
              referrerPolicy="no-referrer"
              className="h-5 object-contain opacity-50"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const useBaselineCrop = headshotBaseline.has(member.name);
            return (
            <div key={member.name} className="group">
              <div className="relative aspect-square w-full rounded-full overflow-hidden mb-4 bg-charcoal/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={
                    useBaselineCrop
                      ? "object-cover transition-transform duration-300 group-hover:scale-105"
                      : "object-cover scale-[1.12] transition-transform duration-300 group-hover:scale-[1.2]"
                  }
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          );
          })}
        </div>
      </div>
    </section>
  );
}
