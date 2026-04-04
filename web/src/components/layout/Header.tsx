"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

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
      <header className="header-wave relative z-30">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1.1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="inline design — home"
            style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px" }}
          >
            <Image
              src="/id-logo.svg"
              alt="inline design logo"
              width={52}
              height={52}
              priority
            />
            <span
              style={{
                display: "block",
                width: "52px",
                height: "2px",
                background: "var(--color-text)",
                borderRadius: "1px",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              gap: "3rem",
              alignItems: "center",
            }}
            className="desktop-nav"
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
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/cv.pdf" className="btn-cv" aria-label="Download CV">
              CV
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{ display: "none" }}
              id="hamburger-btn"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile hamburger visible via CSS */}
        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            #hamburger-btn { display: flex !important; }
          }
        `}</style>
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
