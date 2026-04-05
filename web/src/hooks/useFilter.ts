"use client";

import { useState, useMemo } from "react";

const PAGE_SIZE = 6;

export function useFilter<T extends { filterCategories?: string[] }>(items: T[]) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Derive unique filter keys from all items
  const filterKeys = useMemo<string[]>(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      (item.filterCategories ?? []).forEach((cat) => set.add(cat));
    });
    return Array.from(set).sort();
  }, [items]);

  // Apply filter
  const filtered = useMemo<T[]>(() => {
    if (activeFilter === "all") return items;
    return items.filter((item) =>
      (item.filterCategories ?? []).includes(activeFilter)
    );
  }, [items, activeFilter]);

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
