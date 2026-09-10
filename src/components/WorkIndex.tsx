import Link from "next/link";
import { projects } from "@/data/projects";

/**
 * The work index. Hovering a row colours the whole row, which is the signal
 * that it opens: no floating preview, nothing chasing the cursor.
 */
export function WorkIndex() {
  return (
    <ul className="mt-4">
      {projects.map((p) => (
        <li key={p.slug} className="rule">
          <Link
            href={`/work/${p.slug}`}
            className="group flex items-baseline gap-6 py-6 transition-colors duration-[140ms] md:py-9"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[clamp(1.9rem,5.2vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.035em] transition-colors duration-[140ms] group-hover:text-accent">
                {p.name}
              </span>
              <span className="mt-1 block text-[13px] text-mute md:hidden">
                {p.tagline}
              </span>
            </span>

            <span className="hidden max-w-[26ch] text-right text-[13px] leading-relaxed text-mute transition-colors duration-[140ms] group-hover:text-ink md:block">
              {p.kind}
            </span>

            <span className="mono-label hidden w-36 shrink-0 whitespace-nowrap text-right transition-colors duration-[140ms] group-hover:!text-ink lg:block">
              {p.statusShort ?? p.status}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
