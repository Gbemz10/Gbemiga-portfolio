import type { CSSProperties, ReactNode } from "react";

type Tag = "div" | "li" | "section" | "p" | "span";

/**
 * The one entrance used across the page. It renders as plain markup with a
 * data attribute; `RevealObserver` flips the attribute when the element
 * arrives and CSS does the rest, so this costs no client JavaScript of its own.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const Tag = as;
  const style = { "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties;
  return (
    <Tag data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  );
}
