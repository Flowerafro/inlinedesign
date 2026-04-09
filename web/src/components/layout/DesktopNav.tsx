"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DesktopNavProps {
  cvUrl: string;
}

export default function DesktopNav({ cvUrl }: DesktopNavProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Designs", href: "/designs" },
    { name: "Drawings", href: "/drawings" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => {
        const isActive = (pathname.startsWith(link.href) && link.href !== "/") || (pathname === "/" && link.href === "/");
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`font-heading text-[1.1rem] uppercase tracking-[0.08em] pb-[2px] transition-colors duration-200 border-b-2 hover:text-pink hover:border-pink ${isActive ? "text-pink border-pink" : "text-white border-transparent"
              }`}
          >
            {link.name}
          </Link>
        );
      })}

      <a
        href={cvUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 button-padding bg-pink-500 text-white font-heading text-[0.9rem] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:bg-pink-600 hover:-translate-y-0.5"
      >
        CV
      </a>
    </nav>
  );
}