"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "../ui/Logos/Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/designs", label: "Designs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full z-50">
        <section className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex gap-12 items-center"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${pathname === href ? " active" : ""}`}
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Right: CV button + hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/cv.pdf" className="btn-cv hidden md:inline-block" aria-label="Download CV">
              CV
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className={`hamburger md:hidden${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              id="hamburger-btn"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </section>
      </header>

      {menuOpen && (
        <MobileMenu
          links={navLinks}
          pathname={pathname}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
