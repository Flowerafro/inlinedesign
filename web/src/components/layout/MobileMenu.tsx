"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Designs", href: "/designs" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <div className="wrapper-padding">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>


      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#22201d] flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-display text-5xl uppercase tracking-widest ${pathname === link.href ? "text-pink-500" : "text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}