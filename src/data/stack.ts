export type StackItem = {
  name: string;
  /** What I actually do with it, shown when the card is opened. */
  detail: string[];
  /** Where it has been used, so no card is a claim without a receipt. */
  seenIn: string;
};

export const stack: StackItem[] = [
  {
    name: "Flutter",
    detail: ["Custom design systems", "State & stores", "Offline-first data", "Custom painting"],
    seenIn: "Recur, Kolo, SplitNaija, NairaT, Nabo",
  },
  {
    name: "TypeScript",
    detail: ["Typed API contracts", "Strict mode by default", "Zod validation", "Shared types"],
    seenIn: "Recur, SplitNaija",
  },
  {
    name: "React / Next.js",
    detail: ["App Router", "Server components", "Route handlers", "This site"],
    seenIn: "This portfolio",
  },
  {
    name: "Node.js",
    detail: ["Fastify & Express", "Auth & token rotation", "Signed webhooks", "Background jobs"],
    seenIn: "Recur, SplitNaija, NairaT",
  },
  {
    name: "PostgreSQL",
    detail: ["Drizzle & Prisma", "Migrations", "Query shaping", "Supabase & Neon"],
    seenIn: "Recur, SplitNaija, NairaT",
  },
  {
    name: "Motion",
    detail: ["Scroll-driven reveals", "Springs & gestures", "Lenis smooth scroll", "Raw WebGL"],
    seenIn: "This portfolio",
  },
  {
    name: "Python",
    detail: ["FastAPI", "SQLAlchemy", "Pydantic schemas"],
    seenIn: "Nabo",
  },
  {
    name: "Solidity",
    detail: ["ERC-20 contracts", "Access control", "Sepolia deployment"],
    seenIn: "NairaT",
  },
  {
    name: "Figma",
    detail: ["Design systems", "Prototyping", "Usability critique"],
    seenIn: "ModelMe, every app above",
  },
];

/** Things I use daily that don't need a card of their own. */
export const alsoUses = [
  "Dart",
  "JavaScript",
  "SQLite",
  "Firebase",
  "Prisma",
  "REST API design",
  "Paystack",
  "Mono",
  "Termii",
  "Resend",
  "Git",
  "Vercel",
  "Render",
];
