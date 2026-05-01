"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div />
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm">
            <Link href="#about" className="text-white/60 hover:text-white transition-colors">About</Link>
            <Link href="#roles" className="text-white/60 hover:text-white transition-colors">Roles</Link>
            <Link href="#work" className="text-white/60 hover:text-white transition-colors">Work</Link>
            <Link href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            <Link href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Linkedin</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tight">
            northop
          </h2>
          <span className="text-6xl md:text-8xl lg:text-[10rem]">s</span>
          <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-lime ml-1" />
        </div>
      </div>
    </footer>
  );
}