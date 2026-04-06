"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useBreadcrumbs() {
  const pathname = usePathname() || "";

  const { href, label } = useMemo(() => {
    if (pathname.startsWith("/designs")) {
      return { href: "/designs", label: "Back to Designs" };
    }
    return { href: "/projects", label: "Back to Projects" };
  }, [pathname]);

  return { href, label };
}
