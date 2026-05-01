"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-charcoal">
          mapo studio
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm text-charcoal/70 hover:text-charcoal transition-colors"
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#team"
            className="text-sm text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Team
          </Link>
          <Link
            href="#roles"
            className="text-sm text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Roles
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 border border-charcoal/20 rounded-full text-sm hover:border-charcoal/40 transition-colors"
          >
            Book call
          </Link>
        </nav>
      </div>
    </header>
  );
}