import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, projectBySlug } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return { title: `${project.name}, Gbemiga Shoga`, description: project.tagline };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const beats = [
    { label: "The problem", body: project.problem },
    { label: "What I built", body: project.built },
    { label: "Result", body: project.result },
  ].filter((b) => b.body);

  return (
    <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-28 md:px-10 md:pt-36">
      <Link
        href="/#work"
        className="mono-label inline-flex items-center gap-2 transition-colors duration-[140ms] hover:!text-ink"
      >
        ← All work
      </Link>

      <header className="mt-10">
        <p className="mono-label">
          {project.kind}
        </p>
        <h1 className="mt-5 text-[clamp(3rem,10vw,8rem)] font-medium uppercase leading-[0.9] tracking-[-0.045em]">
          {project.name}
        </h1>
        <p className="mt-6 max-w-[36ch] text-[clamp(1.15rem,2.4vw,1.6rem)] leading-snug">
          {project.tagline}
        </p>
      </header>

      <div className="rule mt-14 grid grid-cols-2 gap-y-8 pt-6 md:grid-cols-4">
        <div>
          <p className="mono-label">Status</p>
          <p className="mt-2 text-[14px]">{project.status}</p>
        </div>
        <div className="md:col-span-2">
          <p className="mono-label">Stack</p>
          <p className="mt-2 max-w-[40ch] text-[14px] text-mute">
            {project.stack.join(", ")}
          </p>
        </div>
        <div>
          <p className="mono-label">Links</p>
          <div className="mt-2 flex flex-col items-start gap-1">
            {project.links.length ? (
              project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] underline decoration-line underline-offset-4 transition-colors duration-[140ms] hover:decoration-accent"
                >
                  {l.label} ↗
                </a>
              ))
            ) : (
              <p className="text-[14px] text-faint">Private repository</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <dl className="space-y-8">
            {beats.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.04}>
                <dt className="mono-label">{b.label}</dt>
                <dd className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-mute">
                  {b.body}
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal>
            <h2 className="mono-label mt-14">Detail</h2>
            <ul className="mt-4 space-y-4">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex max-w-[58ch] gap-3 text-[15px] leading-relaxed text-mute"
                >
                  <span aria-hidden className="text-accent">
                    ·
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div
          className={
            project.desktop
              ? "space-y-10"
              : "grid grid-cols-2 gap-5 md:gap-7"
          }
        >
          {project.shots.map((shot, i) => (
            <Reveal key={shot.src} delay={Math.min(i, 4) * 0.04}>
              <figure>
                <div
                  className={`overflow-hidden border border-line bg-surface ${
                    project.desktop ? "rounded-card" : "rounded-[26px]"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt={`${project.name}: ${shot.label}`}
                    width={project.desktop ? 1600 : 1179}
                    height={project.desktop ? 1000 : 2556}
                    priority={i === 0}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 45vw, 340px"
                  />
                </div>
                <figcaption className="mono-label mt-3">{shot.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <Link
        href={`/work/${next.slug}`}
        className="rule group mt-28 flex items-baseline justify-between gap-6 pt-8"
      >
        <span>
          <span className="mono-label">Next project</span>
          <span className="mt-2 block text-[clamp(2rem,6vw,4rem)] font-medium leading-none tracking-[-0.04em] transition-[translate] duration-[200ms] ease-[var(--ease-out-quart)] group-hover:translate-x-2">
            {next.name}
          </span>
        </span>
        <span
          aria-hidden
          className="text-[clamp(1.5rem,4vw,2.5rem)] text-mute transition-[translate,color] duration-[200ms] ease-[var(--ease-out-quart)] group-hover:translate-x-2 group-hover:text-accent"
        >
          →
        </span>
      </Link>
    </main>
  );
}
