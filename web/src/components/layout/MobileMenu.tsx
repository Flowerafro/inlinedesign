"use client";

import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  pathname: string;
  onClose: () => void;
}

export default function MobileMenu({ links, pathname, onClose }: MobileMenuProps) {
  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button
        onClick={onClose}
        aria-label="Close menu"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
          background: "none",
          border: "none",
          color: "var(--color-text)",
          fontSize: "2rem",
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        ✕
      </button>

      <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              letterSpacing: "0.1em",
              color: pathname === href ? "var(--color-pink)" : "var(--color-text)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            {label.toUpperCase()}
          </Link>
        ))}
      </nav>

      <Link
        href="/cv.pdf"
        onClick={onClose}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.1rem",
          letterSpacing: "0.1em",
          color: "var(--color-text)",
          border: "1.5px solid var(--color-text)",
          padding: "0.5rem 2rem",
          textDecoration: "none",
          marginTop: "1rem",
        }}
      >
        CV
      </Link>
    </div>
  );
}
