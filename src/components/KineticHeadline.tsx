"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { useReducedMotion } from "motion/react";

/**
 * The headline reveals once on load, line by line, then the letters lift very
 * slightly as the cursor passes over them.
 *
 * Three deliberate constraints:
 *  - the lift is written straight to `style.transform` inside one rAF loop, not
 *    through React state, so moving the mouse never re-renders the tree;
 *  - letter positions are measured once in document space, so scrolling costs
 *    nothing and only a resize forces a re-measure;
 *  - the loop parks itself as soon as every letter has settled, so an idle page
 *    isn't holding a frame callback open forever.
 */
export function KineticHeadline({ lines }: { lines: readonly string[] }) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const letters = Array.from(
      root.querySelectorAll<HTMLElement>("[data-letter]")
    );
    if (!letters.length) return;

    const current = new Float32Array(letters.length);
    const cx = new Float32Array(letters.length);
    const cy = new Float32Array(letters.length);
    let pointerX = -9999;
    let pointerY = -9999;
    let frame = 0;
    let running = false;

    const measure = () => {
      for (let i = 0; i < letters.length; i++) {
        const b = letters[i].getBoundingClientRect();
        cx[i] = b.left + b.width / 2 + window.scrollX;
        cy[i] = b.top + b.height / 2 + window.scrollY;
      }
    };

    const RADIUS = 130;
    const LIFT = 9;

    const tick = () => {
      let settled = true;
      for (let i = 0; i < letters.length; i++) {
        const dist = Math.hypot(pointerX - cx[i], pointerY - cy[i]);
        const target = dist > RADIUS ? 0 : (1 - dist / RADIUS) ** 2;

        current[i] += (target - current[i]) * 0.16;
        if (Math.abs(target - current[i]) > 0.002) settled = false;

        const t = current[i];
        letters[i].style.transform =
          t < 0.002
            ? ""
            : `translate3d(0, ${(-LIFT * t).toFixed(2)}px, 0) scale(${(
                1 +
                t * 0.06
              ).toFixed(4)})`;
      }

      if (settled) {
        running = false;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      pointerX = e.pageX;
      pointerY = e.pageY;
      start();
    };
    const onLeave = () => {
      pointerX = -9999;
      pointerY = -9999;
      start();
    };
    const onResize = () => {
      measure();
      start();
    };

    // Measured after the entrance transform has finished, so the boxes reflect
    // where the letters actually come to rest.
    const settle = window.setTimeout(measure, 800);
    measure();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(settle);
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  return (
    <h1
      ref={rootRef}
      aria-label={lines.join(" ")}
      className="font-sans text-[clamp(2.6rem,min(12.5vw,19vh),10.5rem)] font-medium uppercase leading-[0.88] tracking-[-0.045em]"
    >
      {lines.map((line, li) => (
        <span key={line} className="block overflow-hidden pb-[0.06em]">
          <span
            data-line
            className="block"
            style={{ "--line-delay": `${60 + li * 75}ms` } as CSSProperties}
          >
            {Array.from(line).map((char, ci) => (
              <span
                key={`${li}-${ci}`}
                data-letter
                aria-hidden
                className="inline-block will-change-transform"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
}
