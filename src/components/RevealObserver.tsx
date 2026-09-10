"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Set when the visitor moves with the browser's back/forward buttons, so the
 * next render can restore the page as they left it instead of replaying its
 * entrance.
 */
let cameFromHistory = false;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    cameFromHistory = true;
  });
}

/**
 * One observer for every reveal on the page, rather than one per element.
 *
 * Two cases matter as much as the ordinary "scroll down to it" one:
 *
 *  - Anything the page *jumps past* (a nav anchor, a restored scroll position)
 *    never intersects the viewport, so it would otherwise stay invisible for
 *    good. Those are shown immediately, without animation, since their entrance
 *    has already been missed.
 *  - Returning with the back button restores the scroll position, so whatever
 *    is on screen is shown at once too. Animating it again would look like the
 *    page had been rebuilt, which is exactly what going back should not feel
 *    like.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal='']:not([data-reveal='in']), [data-reveal-word='']"
      )
    );
    if (!targets.length) return;

    // Consumed once: only this render is a restoration.
    let restoring = cameFromHistory;
    cameFromHistory = false;

    const pending = new Set(targets);

    const show = (el: HTMLElement, instant: boolean) => {
      if (instant) el.setAttribute("data-reveal-instant", "");
      el.setAttribute(
        el.hasAttribute("data-reveal-word") ? "data-reveal-word" : "data-reveal",
        "in"
      );
      pending.delete(el);
      observer.unobserve(el);
    };

    /** Show anything whose entrance the page has already scrolled past. */
    const sweepSkipped = () => {
      for (const el of Array.from(pending)) {
        const box = el.getBoundingClientRect();
        const scrolledPast = box.bottom <= 0;
        const onScreenNow = box.top < window.innerHeight && box.bottom > 0;
        if (scrolledPast || (restoring && onScreenNow)) show(el, true);
      }
      restoring = false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement, false);
        }
        sweepSkipped();
        if (!pending.size) observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    targets.forEach((t) => observer.observe(t));
    sweepSkipped();

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
