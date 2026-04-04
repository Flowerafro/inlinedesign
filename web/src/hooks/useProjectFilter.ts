"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/lib/queries";

const PAGE_SIZE = 6;

export function useProjectFilter(allProjects: Project[]) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Derive unique filter keys from all projects
  const filterKeys = useMemo<string[]>(() => {
    const set = new Set<string>();
    allProjects.forEach((p) => {
      (p.filterCategories ?? []).forEach((cat) => set.add(cat));
    });
    return Array.from(set).sort();
  }, [allProjects]);

  // Apply filter
  const filtered = useMemo<Project[]>(() => {
    if (activeFilter === "all") return allProjects;
    return allProjects.filter((p) =>
      (p.filterCategories ?? []).includes(activeFilter)
    );
  }, [allProjects, activeFilter]);

  // Visible slice for "Load More"
  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  const hasMore = visibleCount < filtered.length;

  function loadMore() {
    setVisibleCount((n) => n + PAGE_SIZE);
  }

  function setFilter(key: string) {
    setActiveFilter(key);
    setVisibleCount(PAGE_SIZE); // Reset pagination on filter change
  }

  return { filterKeys, activeFilter, setFilter, visible, hasMore, loadMore };
}
