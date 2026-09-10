export type Stage = {
  id: string;
  label: string;
  /** One line on what this stage means in my work. */
  summary: string;
  detail: string[];
};

/** The order things actually happen in, not a diagram for its own sake. */
export const pipeline: Stage[] = [
  {
    id: "idea",
    label: "Idea",
    summary: "Start from a problem someone actually has, not a feature list.",
    detail: [
      "Write the problem in one sentence first",
      "Find who already lives with it",
      "Decide what the app will refuse to do",
    ],
  },
  {
    id: "ux",
    label: "UX",
    summary: "Design the flow in Figma before a single widget gets written.",
    detail: ["Flows before screens", "A design system, not one-off screens", "Empty, loading and error states designed up front"],
  },
  {
    id: "components",
    label: "Components",
    summary: "One component per idea, reused everywhere it applies.",
    detail: ["Shared buttons, sheets, modals, fields", "Tokens for colour, spacing, radius", "No screen owns its own styling"],
  },
  {
    id: "state",
    label: "State",
    summary: "Stores that notify, writes that are optimistic and reversible.",
    detail: [
      "Optimistic updates with a revert path",
      "Undo that doesn't rebuild the screen",
      "Keyed lists so rows keep their identity",
    ],
  },
  {
    id: "api",
    label: "API",
    summary: "A typed contract at the edge, and nothing trusted from the client.",
    detail: ["REST with typed clients", "Auth, refresh rotation, error envelopes", "Signature-verified, idempotent webhooks"],
  },
  {
    id: "database",
    label: "Database",
    summary: "Postgres with migrations, or SQLite when it must work offline.",
    detail: ["Drizzle and Prisma", "Migrations checked into the repo", "Indexes for the queries that actually run"],
  },
  {
    id: "testing",
    label: "Testing",
    summary: "Test the parts where being wrong costs money.",
    detail: [
      "Money math and detection logic first",
      "Widget tests against a faked API",
      "Formal security cases where the stakes justify it",
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    summary: "Ship it, watch it, and keep it cheap to run.",
    detail: ["Vercel, Render, Railway", "Environment-checked config", "Scheduled jobs and health checks"],
  },
];
