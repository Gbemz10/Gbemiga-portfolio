import type { CSSProperties } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

/**
 * The positioning statement resolves as it arrives: each word steps up from
 * near-invisible to full weight, 34ms apart, so the sentence assembles at about
 * reading speed instead of landing all at once.
 */
export function Positioning() {
  const words = profile.positioning.split(" ");

  return (
    <section
      id="positioning"
      className="scroll-mt-14 mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40"
    >
      <p className="mono-label mb-10">Positioning</p>

      <p className="max-w-[20ch] text-[clamp(2rem,5.6vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.035em] md:max-w-[24ch]">
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span
              data-reveal-word=""
              className="inline-block"
              style={{ "--reveal-delay": `${i * 34}ms` } as CSSProperties}
            >
              {word}
            </span>{" "}
          </span>
        ))}
      </p>

      <Reveal>
        <p className="mt-10 max-w-[52ch] text-[15px] leading-relaxed text-mute md:mt-14 md:text-base">
          {profile.positioningSub}
        </p>
      </Reveal>
    </section>
  );
}
