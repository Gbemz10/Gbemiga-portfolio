"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";
import { stack, alsoUses, type StackItem } from "@/data/stack";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-14 mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="rule flex flex-col gap-2 pt-6 md:flex-row md:items-baseline md:justify-between">
        <p className="mono-label">What I work with</p>
        <p className="max-w-[46ch] text-[15px] text-mute">
          Nine things I reach for, and where each one has actually been used.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((item, i) => (
          <Reveal as="li" key={item.name} delay={Math.min(i, 5) * 0.04}>
            <Card item={item} />
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 max-w-[80ch] text-[13px] leading-relaxed text-faint">
        <span className="text-mute">Also in daily use: </span>
        {alsoUses.join(", ")}.
      </p>
    </section>
  );
}

function Card({ item }: { item: StackItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  /**
   * A small tilt toward the cursor. Written straight to the node's transform on
   * the pointer event: one element, one property, no React state, and only on
   * a device that actually has a hovering pointer.
   */
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width - 0.5;
    const py = (e.clientY - b.top) / b.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      tabIndex={0}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onBlur={onLeave}
      className="group relative h-[150px] bg-paper p-6 transition-[transform,background-color] duration-[200ms] hover:bg-surface focus-visible:bg-surface"
      style={{ transitionTimingFunction: "var(--ease-out-quart)" }}
    >
      <h3 className="text-[22px] font-medium tracking-[-0.02em]">{item.name}</h3>

      {/* Both states live in the same box: nothing resizes, they cross over. */}
      <div className="relative mt-3 h-[72px]">
        <p className="absolute inset-0 text-[13px] leading-relaxed text-faint opacity-100 transition-opacity duration-[200ms] group-hover:opacity-0 group-focus-visible:opacity-0">
          {item.seenIn}
        </p>
        <ul className="absolute inset-0 translate-y-[6px] opacity-0 transition-[opacity,transform] duration-[200ms] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          {item.detail.map((d) => (
            <li key={d} className="text-[13px] leading-[1.55] text-mute">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
