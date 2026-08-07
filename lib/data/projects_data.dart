import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';
import 'project.dart';

/// All portfolio content lives here, edit this file to add/change/remove
/// projects without touching any UI code.
final List<Project> projects = [
  const Project(
    name: 'NairaT',
    status: 'Capstone, completed & defended',
    flagship: true,
    icon: Icons.currency_exchange_rounded,
    accent: AppColors.primary,
    isDesktop: true,
    tagline: 'A closed-loop tokenized micro-payment platform.',
    description:
        'Final-year capstone project: a closed-loop ERC-20 tokenized micro-payment '
        'platform, taken all the way from architecture through formal security '
        'and usability evaluation. The most rigorously tested piece of work in '
        'this portfolio, every claim below was measured, not assumed.',
    techStack: [
      'Flutter',
      'Firebase Hosting',
      'Node.js / Express',
      'Railway',
      'PostgreSQL',
      'Solidity',
      'Ethereum (Sepolia testnet)',
    ],
    highlights: [
      '8 security test cases passing: authentication, IDOR, input validation, transaction integrity, and smart contract access control',
      'Formal PSSUQ v3 usability evaluation across 11 participants, averaging 5.81/7',
      'On-chain settlement via a custom ERC-20 smart contract deployed to Ethereum Sepolia',
    ],
    links: [
      ProjectLink(label: 'View on GitHub', url: 'https://github.com/Gbemz10/NairaT'),
    ],
    screenshotLabels: ['Landing page'],
    screenshotAssets: ['assets/screenshots/nairat/landing.png'],
  ),
  const Project(
    name: 'SplitNaija',
    status: 'Live',
    icon: Icons.call_split_rounded,
    accent: AppColors.info,
    tagline: 'Splitwise, built for how Nigerians actually pay each other.',
    description:
        'A bill-splitting app for groups, trips, shared rent, group orders, '
        'wired into local payment rails instead of bolting on a foreign one. '
        'The backend never trusts the client with money math: every split is '
        'calculated server-side and settlements are confirmed only off a '
        'signature-verified webhook.',
    techStack: [
      'Flutter',
      'Node.js / Express',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Render',
      'Neon',
      'Termii (OTP)',
      'Paystack',
    ],
    highlights: [
      'Greedy debt-simplification algorithm nets every balance down to the fewest possible payments',
      'Server-side split calculation for equal, percentage, custom, and itemized splits, client-submitted shares are never trusted',
      'Paystack transfers confirmed via an HMAC-signature-verified, idempotent webhook',
      'Unit-tested money logic: balance netting, split math, and webhook signature verification',
    ],
    links: [
      ProjectLink(label: 'View on GitHub', url: 'https://github.com/Gbemz10/SplitNaija'),
    ],
    screenshotLabels: ['Splash screen', 'Login'],
    screenshotAssets: [
      'assets/screenshots/splitnaija/splash.png',
      'assets/screenshots/splitnaija/login.png',
    ],
  ),
  const Project(
    name: 'Kolo',
    status: 'In use',
    icon: Icons.receipt_long_rounded,
    accent: AppColors.success,
    tagline: 'An offline ledger for traders who can\'t depend on a connection.',
    description:
        'A bookkeeping app for solo traders and small businesses in Nigeria, '
        'built for the reality that a market seller\'s phone won\'t always have '
        'signal. Everything runs on-device: no cloud account, no OTP, no '
        'payment gateway. Currently in daily use tracking real sales.',
    techStack: ['Flutter', 'SQLite (sqflite)', 'On-device PDF generation'],
    highlights: [
      'Offline-first: sales, expenses, and reports are all stored and generated on-device',
      'One PIN, multiple businesses, fully separate ledgers that never mix data',
      'Branded PDF invoices generated and shared straight from the phone, no server involved',
      'CSV and styled Excel export for handoff to an accountant',
    ],
    links: [
      ProjectLink(label: 'View on GitHub', url: 'https://github.com/Gbemz10/Kolo'),
    ],
    screenshotLabels: ['Splash screen', 'Home', 'Reports', 'PIN lock'],
    screenshotAssets: [
      'assets/screenshots/kolo/splash.png',
      'assets/screenshots/kolo/home.png',
      'assets/screenshots/kolo/reports.png',
      'assets/screenshots/kolo/lock.png',
    ],
  ),
  const Project(
    name: 'Nabo',
    status: 'In development',
    icon: Icons.handshake_rounded,
    accent: AppColors.danger,
    tagline: 'Trade skills, not cash.',
    description:
        'A peer-to-peer skill-swap marketplace: post what you need and what '
        'you can offer, then match with someone nearby and trade, cutting '
        'the grass for guitar lessons, say, instead of paying cash. Built '
        'end to end: browsing and listings, a matching and swap-request '
        'flow, in-app chat, notifications, and post-swap reviews. Still a '
        'personal prototype, the backend runs locally and hasn\'t been '
        'through a hardening pass for real users yet.',
    techStack: ['Flutter', 'FastAPI', 'Python', 'SQLAlchemy', 'SQLite'],
    highlights: [
      'Full swap workflow: browse listings, request a swap, chat, mark complete, then leave a review',
      'Location-aware listings so trades happen with people nearby',
      'Notification system for swap requests, matches, and reviews',
      'Star-rating and review system built into every completed swap',
    ],
    links: [],
    screenshotLabels: ['Splash screen', 'Login', 'Browse', 'Matches', 'Chat', 'Profile', 'Notifications'],
    screenshotAssets: [
      'assets/screenshots/nabo/splash.png',
      'assets/screenshots/nabo/login.png',
      'assets/screenshots/nabo/browse.png',
      'assets/screenshots/nabo/matches.png',
      'assets/screenshots/nabo/chat.png',
      'assets/screenshots/nabo/profile.png',
      'assets/screenshots/nabo/notifications.png',
    ],
  ),
  const Project(
    name: 'ModelMe',
    status: 'Concept, Figma prototype',
    icon: Icons.checkroom_rounded,
    accent: AppColors.warning,
    tagline: 'An avatar-based virtual try-on concept for fashion e-commerce.',
    description:
        'A product design exploration: what would it take for someone to see '
        'clothing on a body shaped like theirs before buying online? Taken '
        'through 21 fully designed screens and a round of usability critique.',
    techStack: ['Figma', 'UX research'],
    highlights: [
      '21 screens designed end-to-end, from onboarding through checkout',
      'Went through a structured usability critique and a revision pass',
    ],
    links: [
      ProjectLink(
        label: 'View Figma prototype',
        url: 'https://www.figma.com/design/KWdLMoXkhGt6Abn8g8WPEf/ModelMe?node-id=0-1&p=f',
      ),
    ],
    screenshotLabels: ['Onboarding', 'Home screen'],
    screenshotAssets: [
      'assets/screenshots/modelme/home.png',
      'assets/screenshots/modelme/onboarding.png',
    ],
  ),
];
