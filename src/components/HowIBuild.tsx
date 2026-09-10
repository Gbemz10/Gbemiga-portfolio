"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { pipeline } from "@/data/pipeline";
import { Reveal } from "./Reveal";

/**
 * The pipeline, as a list you can interrogate. Selecting a stage crossfades the
 * panel beside it. The panel keeps a fixed minimum height so choosing a stage
 * never shoves the rest of the page around.
 */
export function HowIBuild() {
  const [active, setActive] = useState(0);
  const stage = pipeline[active];

  return (
    <section id="build" className="scroll-mt-14 mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="rule flex flex-col gap-2 pt-6 md:flex-row md:items-baseline md:justify-between">
        <p className="mono-label">How I build</p>
        <p className="max-w-[46ch] text-[15px] text-mute">
          The order things actually happen in. Pick a stage to see what it means
          in practice.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <ol className="relative">
          {/* The spine. Sits behind the rows and stops at the last stage. */}
          <span
            aria-hidden
            className="absolute bottom-6 left-[5px] top-6 w-px bg-line"
          />
          {pipeline.map((s, i) => {
            const isActive = i === active;
            return (
              <Reveal as="li" key={s.id} delay={Math.min(i, 6) * 0.03}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="group relative flex w-full items-baseline gap-5 py-3 text-left"
                >
                  <span
                    aria-hidden
                    className={`relative z-10 mt-[7px] h-[11px] w-[11px] shrink-0 rounded-full border transition-colors duration-[140ms] ${
                      isActive
                        ? "border-accent bg-accent"
                        : "border-line bg-paper group-hover:border-mute"
                    }`}
                  />
                  <span className="min-w-0">
                    <span
                      className={`block text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium tracking-[-0.03em] transition-colors duration-[140ms] ${
                        isActive ? "text-ink" : "text-faint group-hover:text-mute"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span
                      className={`block max-w-[46ch] text-[13px] leading-relaxed transition-colors duration-[140ms] ${
                        isActive ? "text-mute" : "text-faint"
                      }`}
                    >
                      {s.summary}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ol>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="min-h-[260px] rounded-card border border-line bg-surface p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-[26px] font-medium tracking-[-0.03em]">
                  {stage.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {stage.detail.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-[15px] leading-relaxed text-mute"
                    >
                      <span aria-hidden className="text-accent">
                        ·
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
