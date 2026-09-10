"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

/**
 * The long-form treatment for the two strongest projects: the four beats on the
 * left, the product itself on the right. The screens drift at slightly
 * different rates as the section passes: enough to read as depth, not enough
 * to notice as an effect.
 */
export function Feature({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const near = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const far = useTransform(scrollYProgress, [0, 1], [72, -72]);

  const beats = [
    { label: "The problem", body: project.problem },
    { label: "What I built", body: project.built },
    { label: "Result", body: project.result },
  ].filter((b) => b.body);

  return (
    <div ref={ref} className="rule grid grid-cols-1 gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
      <div className="lg:sticky lg:top-24 lg:self-start lg:pb-24">
        <Reveal>
          <p className="mono-label">{project.status}</p>
          <h3 className="mt-4 text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
            {project.name}
          </h3>
          <p className="mt-4 max-w-[34ch] text-[clamp(1.05rem,2vw,1.35rem)] leading-snug text-ink">
            {project.tagline}
          </p>
        </Reveal>

        <dl className="mt-10 space-y-7">
          {beats.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.04}>
              <dt className="mono-label">{b.label}</dt>
              <dd className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-mute">
                {b.body}
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.05}>
          <ul className="mt-9 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line px-3 py-1 text-[12px] text-mute"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-paper transition-[scale] duration-[140ms] ease-[var(--ease-out-quart)] active:scale-[0.98]"
            >
              Case study
              <span className="transition-[translate] duration-[200ms] ease-[var(--ease-out-quart)] group-hover:translate-x-1">
                →
              </span>
            </Link>
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-mute underline decoration-line underline-offset-4 transition-colors duration-[140ms] hover:text-ink hover:decoration-accent"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="pb-16 lg:pb-32">
        {project.desktop ? (
          <Reveal>
            <motion.div
              style={reduced ? undefined : { y: near }}
              className="overflow-hidden rounded-card border border-line bg-surface"
            >
              <Image
                src={project.shots[0].src}
                alt={`${project.name}: ${project.shots[0].label}`}
                width={1600}
                height={1000}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </motion.div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div style={reduced ? undefined : { y: near }}>
              <Phone shot={project.shots[0]} name={project.name} priority />
            </motion.div>
            <motion.div
              style={reduced ? undefined : { y: far }}
              className="mt-10 md:mt-16"
            >
              <Phone shot={project.shots[1]} name={project.name} />
            </motion.div>
            {project.shots[2] && (
              <motion.div
                style={reduced ? undefined : { y: far }}
                className="col-span-2 mx-auto w-1/2 pr-2 md:pr-3"
              >
                <Phone shot={project.shots[2]} name={project.name} />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Phone({
  shot,
  name,
  priority,
}: {
  shot: { src: string; label: string };
  name: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[26px] border border-line bg-surface">
        <Image
          src={shot.src}
          alt={`${name}: ${shot.label}`}
          width={1179}
          height={2556}
          priority={priority}
          className="h-auto w-full"
          sizes="(max-width: 768px) 45vw, 300px"
        />
      </div>
      <figcaption className="mono-label mt-3">{shot.label}</figcaption>
    </figure>
  );
}
