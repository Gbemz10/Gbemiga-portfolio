import { profile } from "@/data/profile";
import { KineticHeadline } from "./KineticHeadline";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-between px-6 pb-8 pt-24 md:px-10 md:pb-10"
    >
      <FadeIn delay={0.1}>
        <div className="flex items-start justify-between gap-6">
          <p className="mono-label">{profile.name}</p>
          <p className="mono-label text-right">{profile.location}</p>
        </div>
      </FadeIn>

      <div className="py-16 md:py-10">
        <KineticHeadline lines={profile.headline} />
      </div>

      <FadeIn delay={0.55}>
        <div className="flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-[15px] leading-relaxed text-mute">
            <span className="text-ink">{profile.role}</span>
            <span className="text-faint"> · </span>
            {profile.stackLine.join(" · ")}
          </p>
          <a
            href="#positioning"
            className="mono-label group inline-flex items-center gap-2 transition-colors duration-[140ms] hover:!text-ink"
          >
            Scroll to explore
            <span className="inline-block transition-transform duration-[200ms] group-hover:translate-y-[2px]">
              ↓
            </span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
