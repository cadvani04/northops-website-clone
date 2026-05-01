"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center shrink-0 -my-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-md"
          aria-label="NorthOps — home"
        >
          <img
            src="/northops-logo.png"
            alt="NorthOps"
            width={148}
            height={48}
            className="h-9 md:h-10 w-auto object-contain rounded-md"
            decoding="async"
          />
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
            Book a Strategy Call
          </Link>
        </nav>
      </div>
    </header>
  );
}