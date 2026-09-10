export type Shot = { src: string; label: string };

export type Project = {
  slug: string;
  name: string;
  status: string;
  /** A version short enough for the index column, where space is one line. */
  statusShort?: string;
  kind: string;
  tagline: string;
  /** Four beats every case study answers. Any of them may be omitted. */
  problem?: string;
  built?: string;
  result?: string;
  stack: string[];
  highlights: string[];
  links: { label: string; url: string }[];
  shots: Shot[];
  /** Web/desktop work renders landscape frames instead of a phone. */
  desktop?: boolean;
  /** Flagship work leads the list and gets the larger treatment. */
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    slug: "recur",
    name: "Recur",
    status: "Completed",
    kind: "Personal finance / open banking",
    flagship: true,
    tagline: "Finds the subscriptions hiding in your bank statement.",
    problem:
      "Nigerians lose money to charges they have forgotten about: a data plan that renews itself, a streaming trial that quietly converted, a plan whose price went up without a word.",
    built:
      "A read-only bank link through Mono, a detection engine that reads the statement and works out which debits repeat, and a warning before the next one lands. Recur never holds or moves money.",
    challenge:
      "Deciding that two debits months apart are the same subscription. The engine groups by merchant and narration, clusters those by amount, and classifies the gap between them into weekly-through-yearly bands, then chains the amount clusters over time, so a price rise updates the subscription you already have instead of inventing a second one.",
    result:
      "Built end to end and covered by 52 tests: detection, trials, spending analysis, renewal reminders, a weekly digest, and per-channel unsubscribe behind a signed token.",
    stack: [
      "Flutter",
      "TypeScript",
      "Fastify",
      "Drizzle ORM",
      "PostgreSQL",
      "Mono Open Banking",
      "Resend",
    ],
    highlights: [
      "Detection engine groups debits by merchant and narration, clusters them by amount, and classifies cadence into weekly through yearly bands",
      "Chains amount clusters over time, so a plan price change updates the same subscription instead of creating a duplicate one",
      "Flags a possible trial from a single debit for merchants known to run them, rather than waiting for a second charge that costs the user money",
      "Bank credentials are never seen by the app: Mono hosts the connect flow and the link is confirmed by webhook",
      "Short-lived access tokens with rotating refresh tokens, and a sign-in notification keyed to the device rather than the IP",
      "Email reminders before a charge, a weekly digest, and per-channel unsubscribe with a signed token",
    ],
    links: [{ label: "View code", url: "https://github.com/Gbemz10/Recur" }],
    shots: [
      { src: "/shots/recur/home.png", label: "Home" },
      { src: "/shots/recur/recurring.png", label: "Recurring" },
      { src: "/shots/recur/spending.png", label: "Spending" },
      { src: "/shots/recur/trials.png", label: "Trials" },
      { src: "/shots/recur/onboarding-1.png", label: "Onboarding" },
      { src: "/shots/recur/auth.png", label: "Sign up" },
    ],
  },
  {
    slug: "nairat",
    name: "NairaT",
    status: "Capstone, completed and defended",
    statusShort: "Capstone",
    kind: "Blockchain / micro-payments",
    flagship: true,
    desktop: true,
    tagline: "A closed-loop tokenized micro-payment platform.",
    problem:
      "Micro-payments are the hardest kind to move: the fee and the friction routinely cost more than the payment itself, and closed-loop alternatives rarely get evaluated properly before they are called finished.",
    built:
      "A closed-loop ERC-20 tokenized micro-payment platform, taken all the way from architecture through formal security and usability evaluation.",
    challenge:
      "Proving it rather than claiming it. Eight security test cases (authentication, IDOR, input validation, transaction integrity, and smart-contract access control) were written and run against the deployed system.",
    result:
      "Defended as my final-year capstone. A formal PSSUQ v3 usability evaluation across 11 participants averaged 5.81/7, with on-chain settlement through a custom ERC-20 contract on Ethereum Sepolia.",
    stack: [
      "Flutter",
      "Firebase Hosting",
      "Node.js / Express",
      "Railway",
      "PostgreSQL",
      "Solidity",
      "Ethereum (Sepolia)",
    ],
    highlights: [
      "8 security test cases passing: authentication, IDOR, input validation, transaction integrity, and smart contract access control",
      "Formal PSSUQ v3 usability evaluation across 11 participants, averaging 5.81/7",
      "On-chain settlement via a custom ERC-20 smart contract deployed to Ethereum Sepolia",
    ],
    links: [{ label: "View code", url: "https://github.com/Gbemz10/NairaT" }],
    shots: [{ src: "/shots/nairat/landing.png", label: "Landing page" }],
  },
  {
    slug: "splitnaija",
    name: "SplitNaija",
    status: "Live",
    kind: "Payments / groups",
    tagline: "Splitwise, built for how Nigerians actually pay each other.",
    problem:
      "Someone always fronts the money for the trip, the rent or the group order, and then spends a week chasing it. The apps built for this are wired to foreign payment rails.",
    built:
      "A bill-splitting app for groups, trips, shared rent and group orders, settled through Paystack instead of bolting on a gateway from somewhere else.",
    challenge:
      "The backend never trusts the client with money math. Every split, whether equal, percentage, custom or itemized, is calculated server-side, and a settlement is only recorded off an HMAC-signature-verified, idempotent webhook.",
    result:
      "Live. A greedy debt-simplification pass nets every balance down to the fewest possible payments, and the money logic (netting, split math, signature verification) is unit-tested.",
    stack: [
      "Flutter",
      "Node.js / Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Render",
      "Neon",
      "Termii",
      "Paystack",
    ],
    highlights: [
      "Greedy debt-simplification algorithm nets every balance down to the fewest possible payments",
      "Server-side split calculation for equal, percentage, custom, and itemized splits, and client-submitted shares are never trusted",
      "Paystack transfers confirmed via an HMAC-signature-verified, idempotent webhook",
      "Unit-tested money logic: balance netting, split math, and webhook signature verification",
    ],
    links: [{ label: "View code", url: "https://github.com/Gbemz10/SplitNaija" }],
    shots: [
      { src: "/shots/splitnaija/splash.png", label: "Splash" },
      { src: "/shots/splitnaija/login.png", label: "Login" },
    ],
  },
  {
    slug: "kolo",
    name: "Kolo",
    status: "In daily use",
    kind: "Offline-first bookkeeping",
    tagline: "An offline ledger for traders who can't depend on a connection.",
    problem:
      "A market seller's phone won't always have signal, and nearly every bookkeeping app assumes a cloud account, an OTP and a payment gateway before it will record a single sale.",
    built:
      "A bookkeeping app for solo traders and small businesses where everything runs on-device: sales, expenses, reports, and branded PDF invoices, with no server in the loop.",
    challenge:
      "One PIN covering several businesses with ledgers that never mix, and generating a branded PDF invoice on the phone itself so it can be shared the moment a sale closes.",
    result:
      "In daily use tracking real sales, with CSV and styled Excel export for handoff to an accountant.",
    stack: ["Flutter", "SQLite (sqflite)", "On-device PDF generation"],
    highlights: [
      "Offline-first: sales, expenses, and reports are all stored and generated on-device",
      "One PIN, multiple businesses, fully separate ledgers that never mix data",
      "Branded PDF invoices generated and shared straight from the phone, no server involved",
      "CSV and styled Excel export for handoff to an accountant",
    ],
    links: [{ label: "View code", url: "https://github.com/Gbemz10/Kolo" }],
    shots: [
      { src: "/shots/kolo/splash.png", label: "Splash" },
      { src: "/shots/kolo/home.png", label: "Home" },
      { src: "/shots/kolo/reports.png", label: "Reports" },
      { src: "/shots/kolo/lock.png", label: "PIN lock" },
    ],
  },
  {
    slug: "nabo",
    name: "Nabo",
    status: "In development",
    statusShort: "Prototype",
    kind: "Marketplace / peer-to-peer",
    tagline: "Trade skills, not cash.",
    problem:
      "Two people often need exactly what the other can do, and neither has the cash for it. Cutting the grass for guitar lessons is a trade that no marketplace is set up to broker.",
    built:
      "A peer-to-peer skill-swap marketplace built end to end: browsing and listings, a matching and swap-request flow, in-app chat, notifications, and post-swap reviews.",
    challenge:
      "Keeping both sides of a swap in step. A request, a match, a conversation, a completion and a review are all states two strangers have to agree on, and listings stay location-aware so a trade is actually practical.",
    result:
      "A personal prototype for now: the backend runs locally and hasn't been through a hardening pass for real users yet.",
    stack: ["Flutter", "FastAPI", "Python", "SQLAlchemy", "SQLite"],
    highlights: [
      "Full swap workflow: browse listings, request a swap, chat, mark complete, then leave a review",
      "Location-aware listings so trades happen with people nearby",
      "Notification system for swap requests, matches, and reviews",
      "Star-rating and review system built into every completed swap",
    ],
    links: [],
    shots: [
      { src: "/shots/nabo/splash.png", label: "Splash" },
      { src: "/shots/nabo/login.png", label: "Login" },
      { src: "/shots/nabo/browse.png", label: "Browse" },
      { src: "/shots/nabo/matches.png", label: "Matches" },
      { src: "/shots/nabo/chat.png", label: "Chat" },
      { src: "/shots/nabo/profile.png", label: "Profile" },
      { src: "/shots/nabo/notifications.png", label: "Notifications" },
    ],
  },
  {
    slug: "modelme",
    name: "ModelMe",
    status: "Concept, Figma prototype",
    statusShort: "Concept",
    kind: "Product design",
    tagline: "An avatar-based virtual try-on concept for fashion e-commerce.",
    problem:
      "Buying clothes online means guessing whether they will sit right on a body shaped like yours, and returns are the only way to find out.",
    built:
      "A product design exploration taken through 21 fully designed screens, from onboarding through checkout.",
    result:
      "Went through a structured usability critique and a revision pass off the back of it.",
    stack: ["Figma", "UX research"],
    highlights: [
      "21 screens designed end-to-end, from onboarding through checkout",
      "Went through a structured usability critique and a revision pass",
    ],
    links: [
      {
        label: "View prototype",
        url: "https://www.figma.com/design/KWdLMoXkhGt6Abn8g8WPEf/ModelMe?node-id=0-1&p=f",
      },
    ],
    shots: [
      { src: "/shots/modelme/home.png", label: "Home" },
      { src: "/shots/modelme/onboarding.png", label: "Onboarding" },
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
