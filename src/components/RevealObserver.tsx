"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One observer for every reveal on the page, rather than one per element.
 * Elements are unobserved as soon as they have played, and the scan re-runs on
 * navigation so a case study picks its own reveals up.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal='']:not([data-reveal='in']), [data-reveal-word='']"
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-reveal-word")) {
            el.setAttribute("data-reveal-word", "in");
          } else {
            el.setAttribute("data-reveal", "in");
          }
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
