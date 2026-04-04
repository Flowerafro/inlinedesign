"use client";

import { useState } from "react";
import { clsx } from "clsx";

interface ProjectFilterProps {
  filterKeys: string[];
  activeFilter: string;
  onFilter: (key: string) => void;
}

const LABEL_MAP: Record<string, string> = {
  "web-site": "Web Site",
  "web-application": "Web App",
  "ui-design": "UI Design",
  "ux-design": "UX Design",
  "logo": "Logo",
  "graphic-design": "Graphic Design",
  "brand-identity": "Brand Identity",
  "communication-design": "Communication",
};

function labelFor(key: string): string {
  return LABEL_MAP[key] ?? key.replace(/-/g, " ");
}

export default function ProjectFilter({ filterKeys, activeFilter, onFilter }: ProjectFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const glassBase = "backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]";

  return (
    <div className="flex flex-col items-center mb-12 px-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "px-8 py-3 font-heading text-lg tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:-translate-y-0.5",
          glassBase,
          isOpen ? "bg-white/15 border-white/30" : "bg-white/5 hover:bg-white/10 border-white/20"
        )}
      >
        FILTER {isOpen ? "−" : "+"}
      </button>

      {isOpen && (
        <div
          className="flex flex-wrap justify-center gap-3 mt-8 max-w-[800px] animate-in fade-in slide-in-from-top-4 duration-500"
          role="group"
          aria-label="Filter projects"
        >
          <button
            className={clsx(
              "px-5 py-2 rounded-sm font-heading text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5",
              glassBase,
              activeFilter === "all"
                ? "bg-pink-500/80 border-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white"
            )}
            onClick={() => onFilter("all")}
            aria-pressed={activeFilter === "all"}
          >
            All
          </button>

          {filterKeys.map((key) => (
            <button
              key={key}
              className={clsx(
                "px-5 py-2 rounded-sm font-heading text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5",
                glassBase,
                activeFilter === key
                  ? "bg-pink-500/80 border-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                  : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white"
              )}
              onClick={() => onFilter(key)}
              aria-pressed={activeFilter === key}
            >
              {labelFor(key)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}