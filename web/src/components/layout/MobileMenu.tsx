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
    <div
      className="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-8 bg-transparent border-none text-white text-[2rem] cursor-pointer leading-none"
      >
        ✕
      </button>

      <nav className="flex flex-col items-center gap-10">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={`font-heading text-[2.5rem] tracking-[0.1em] no-underline transition-colors duration-200 ${
              pathname === href ? "text-[var(--color-pink)]" : "text-white"
            }`}
          >
            {label.toUpperCase()}
          </Link>
        ))}
      </nav>

      <Link
        href="/cv.pdf"
        onClick={onClose}
        className="btn-cv mt-4 text-[1.1rem] tracking-[0.1em] px-8 py-2"
      >
        CV
      </Link>
    </div>
  );
}
