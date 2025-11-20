"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo + slogan */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/" aria-label="swiftFR home" className="block">
            <Image
              src="/logo.png"
              alt="swiftFR logo"
              width={160}
              height={40}
              priority
              className="w-28 sm:w-40 h-auto object-contain" // smaller on mobile, larger on desktop
            />
          </Link>
          <p className="hidden sm:block text-xs text-gray-500">
            Swift logistics for seamless scaling
          </p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/about" className="hover:text-[var(--brand-red)]">
            About
          </Link>
          <Link href="/services" className="hover:text-[var(--brand-red)]">
            Services
          </Link>
          <Link href="/faqs" className="hover:text-[var(--brand-red)]">
            FAQs
          </Link>
          <Link href="/contact" className="btn-primary">
            Get Matched
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-2"
          aria-label="Open Menu"
          onClick={() => setOpen(!open)}
        >
          <div className="h-5 w-6 space-y-1.5">
            <span className="block h-0.5 w-full bg-gray-800" />
            <span className="block h-0.5 w-full bg-gray-800" />
            <span className="block h-0.5 w-full bg-gray-800" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 px-4 py-2">
            <Link href="/about" className="py-2" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link
              href="/services"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link href="/faqs" className="py-2" onClick={() => setOpen(false)}>
              FAQs
            </Link>
            <Link
              href="/contact"
              className="btn-primary my-2 text-center"
              onClick={() => setOpen(false)}
            >
              Get Matched
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
