"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig, useReducedMotion } from "motion/react";

/**
 * Smooth scrolling, off entirely when the visitor has asked for reduced
 * motion. A hijacked scroll is the single most disorienting thing you can do
 * to someone who has that setting on.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 0.9,
      // Matches the site's out-curve: fast on arrival, settled at the end.
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduced]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
