"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = ["Services", "About", "Case Studies", "Contact"];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[rgba(4,44,83,0.07)]">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <Image
            src="/logo-white-bg.png"
            alt="Advanced Management Performance"
            width={1600}
            height={896}
            className="h-12 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-xs font-semibold tracking-[0.06em] uppercase text-[#042C53] opacity-55 hover:opacity-100 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-[#D85A30] text-white text-xs font-semibold tracking-[0.08em] uppercase px-5 py-2 rounded-md hover:opacity-85 transition-opacity"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#042C53] transition-transform origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#042C53] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#042C53] transition-transform origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[rgba(4,44,83,0.07)] px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.06em] uppercase text-[#042C53] opacity-65 hover:opacity-100 transition-opacity"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-[#D85A30] text-white text-xs font-semibold tracking-[0.08em] uppercase px-5 py-3 rounded-md"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
