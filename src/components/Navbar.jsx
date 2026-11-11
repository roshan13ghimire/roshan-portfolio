
import { useState } from "react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="text-[17px] font-semibold tracking-tight text-neutral-900"
        >
          Roshan Ghimire
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-neutral-600 hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="text-sm font-medium text-neutral-800 md:hidden"
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-neutral-200 bg-white md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
