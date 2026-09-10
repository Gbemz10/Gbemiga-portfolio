import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
  { label: "Phone", value: profile.phone, href: "tel:0706349100" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 mx-auto max-w-[1400px] px-6 pb-16 pt-24 md:px-10 md:pt-32">
      <div className="rule flex flex-col gap-2 pt-6 md:flex-row md:items-baseline md:justify-between">
        <p className="mono-label">Contact</p>
        <p className="mono-label flex items-center gap-2 !text-mute">
          <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-accent" />
          {profile.availability}
        </p>
      </div>

      <Reveal>
        <h2 className="mt-16 text-[clamp(2.8rem,12vw,10rem)] font-medium uppercase leading-[0.86] tracking-[-0.045em] md:mt-24">
          Let&rsquo;s build
          <br />
          something
          <br />
          great.
        </h2>
      </Reveal>

      <ul className="mt-16 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
        {channels.map((c, i) => (
          <li key={c.label} className="bg-paper">
            <Reveal delay={Math.min(i, 4) * 0.04} className="h-full">
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex h-full flex-col justify-between gap-8 bg-paper p-6 transition-colors duration-[200ms] hover:bg-surface"
            >
              <span className="mono-label">{c.label}</span>
              <span className="flex items-end justify-between gap-3 text-[15px] font-medium">
                <span className="truncate">{c.value}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-mute transition-[translate,color] duration-[200ms] ease-[var(--ease-out-quart)] group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </span>
            </a>
            </Reveal>
          </li>
        ))}
      </ul>

    </section>
  );
}
