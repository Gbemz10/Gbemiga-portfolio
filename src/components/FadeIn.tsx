import type { CSSProperties, ReactNode } from "react";

/** A plain on-load fade for hero furniture: CSS only, no scroll trigger. */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style = { "--fade-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties;
  return (
    <div data-fade className={className} style={style}>
      {children}
    </div>
  );
}
