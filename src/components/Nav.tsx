"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#build", label: "How I build" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-[280ms] ${
        lifted
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--ease-out-quart)" }}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="mono-label !text-ink hover:!text-accent">
          {profile.shortName}
        </a>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-[13px] text-mute transition-colors duration-[140ms] hover:text-ink sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="text-[13px] text-ink underline decoration-line underline-offset-4 transition-colors duration-[140ms] hover:decoration-accent"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
