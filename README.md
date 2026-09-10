# Gbemiga Shoga, portfolio

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Motion · Lenis.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # every page prerenders to static HTML
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/` | All content: projects, stack, pipeline, profile. Edit here, not in the UI. |
| `src/app/page.tsx` | Section order for the home page. |
| `src/app/work/[slug]/` | A case study page per project, generated from `src/data/projects.ts`. |
| `src/components/` | One component per section. |
| `src/app/globals.css` | Tokens (palette, type, radii, easings) and the CSS reveal system. |
| `public/shots/` | Product screenshots, one folder per project. |

## Motion rules this codebase follows

- Entrance motion is **CSS**, gated behind `html[data-js]`, with a `<noscript>`
  override. Content is never invisible waiting on JavaScript, and it still
  animates in a background tab where `requestAnimationFrame` is throttled off.
- Only `transform` and `opacity` are animated.
- UI transitions stay under 300ms on an out-curve; the one exception is the
  hero entrance, which runs once before anything is interactive.
- `prefers-reduced-motion` gentles the page and switches Lenis off entirely.
- Pointer-driven effects are written straight to `style.transform` in a single
  rAF loop that parks itself once everything has settled, so an idle page holds
  no frame callback open.

## Deploying

Vercel, framework preset "Next.js", no environment variables.
