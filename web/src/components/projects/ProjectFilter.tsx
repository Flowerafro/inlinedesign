"use client";

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
  return (
    <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Filter projects">
      <button
        className={clsx("filter-btn", { active: activeFilter === "all" })}
        onClick={() => onFilter("all")}
        aria-pressed={activeFilter === "all"}
      >
        All
      </button>

      {filterKeys.map((key) => (
        <button
          key={key}
          className={clsx("filter-btn", { active: activeFilter === key })}
          onClick={() => onFilter(key)}
          aria-pressed={activeFilter === key}
        >
          {labelFor(key)}
        </button>
      ))}
    </div>
  );
}
