"use client";

import { useState, useRef } from "react";

export function useProjectGallerySlider(total: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function next() {
    setCurrentIndex((i) => (i + 1) % total);
  }

  function prev() {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }

  function goTo(n: number) {
    setCurrentIndex(Math.max(0, Math.min(n, total - 1)));
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
  }

  return { currentIndex, next, prev, goTo, onTouchStart, onTouchEnd };
}
