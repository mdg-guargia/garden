// Everything under /tech — one flat, typed list. The /tech page filters
// this by `type` for its tabs. Add a new item any time; give it an
// `externalLink` (e.g. a Substack post, a GitHub repo, a YouTube video) if
// it should open elsewhere instead of an internal page.

// The short presentation shown at the top of /tech, before the category
// tabs — this replaces the old standalone /about page.
export const techIntro =
  "an engineer specialized in Cybersecurity.\n\nI'm interested in OT, IoT, cloud, AI, automation, and cyber-resilience, especially when they come together in real-world systems.\n\nMy goal is simple: understand how things work, build them, secure them, and eventually create my own.";

export type TechType =
  | "work"
  //| "tutorial"
  | "doc"
  //| "talk"
  | "workshop"
  //| "community"
  | "photo"
  | "video";

export const techTypeLabels: Record<TechType, string> = {
  work: "Work",
  //tutorial: "Tutorials",
  doc: "Docs & guides",
  //talk: "Conference talks",
  workshop: "Workshops",
  //community: "Community",
  photo: "Photos",
  video: "Videos",
};

export type TechItem = {
  slug: string;
  title: string;
  type: TechType;
  summary: string;
  content?: string;
  date: string;
  tags: string[];
  externalLink?: string; // Substack, GitHub, YouTube, etc.
  linkLabel?: string; // e.g. "Read on Substack", defaults to "Open ↗"
  image?: string;
};

export const techItems: TechItem[] = [
  // ---- Work -------------------------------------------------------------
  {
    slug: "unified-namespace-industry-4",
    title: "Unified Namespace Modernization (Projet Quatrium)",
    type: "work",
    summary:
      "Multi-partner Industry 4.0 project modernizing industrial machine communication with a Unified Namespace architecture.",
    content:
      "A collaborative project with CETIM, Clarté and Proxinox to modernize how industrial machines communicate, moving from point-to-point integrations toward a Unified Namespace (UNS) model. Structured the analysis across five dimensions (Scientific, Technical, Economic, Human, Organizational) and built dedicated presentations and speaker guides for technical teams and non-technical/executive audiences.",
    date: "2026-02-01",
    tags: ["Industry 4.0", "OT/IT", "Architecture"],
  },
  {
    slug: "commflow",
    title: "Commflow",
    type: "work",
    summary: "A campaign management platform for email/SMS sending, built on Next.js 15.",
    content:
      "Built on Next.js 15 App Router with Prisma over SQLite, NextAuth v5 for auth, and a Zod-based validation layer replacing native Prisma enums for easier iteration and clearer validation errors.",
    date: "2026-01-10",
    tags: ["Next.js", "TypeScript", "Full-Stack"],
    externalLink: "[YOUR GITHUB REPO URL]",
    linkLabel: "View on GitHub",
  },
  {
    slug: "projetedge",
    title: "ProjetEdge — Android Edge Camera System",
    type: "work",
    summary:
      "A native Android edge camera system with a custom sync protocol achieving sub-50ms audio/video synchronization.",
    content:
      "Built in C++ via the NDK with OpenCV and camera2ndk. Diagnosed a client/server protocol desync bug and fixed it with Protocol V2 — explicit frame markers and server acknowledgements — then added native audio capture via JNI into Android's AudioRecord pipeline.",
    date: "2025-11-05",
    tags: ["Android", "C++", "Embedded"],
    externalLink: "[YOUR GITHUB REPO URL]",
    linkLabel: "View on GitHub",
  },
  {
    slug: "affine-self-hosted-deployment",
    title: "AFFiNE Self-Hosted Deployment",
    type: "work",
    summary: "Debugged and shipped a self-hosted AFFiNE deployment on Debian via Docker Compose.",
    content:
      "Resolved a PostgreSQL healthcheck failure over a Unix socket path, then a seccomp/AppArmor conflict blocking Prisma's Rust runtime — fixed via security_opt: seccomp:unconfined / apparmor:unconfined.",
    date: "2025-10-01",
    tags: ["DevOps", "Docker", "Self-Hosting"],
  },
  {
    slug: "telegram-automation-bot",
    title: "Telegram Automation Bot",
    type: "work",
    summary: "A Telegram automation script with robust message-edit polling logic, built with Telethon.",
    content:
      "Python automation on Telethon with dedicated polling logic to reliably catch message edits, not just new sends.",
    date: "2025-09-01",
    tags: ["Python", "Automation"],
  },

  // ---- Docs & guides ------------------------------------------------------
  {
    slug: "unified-namespace-vs-point-to-point",
    title: "Why Unified Namespace beats point-to-point industrial integration",
    type: "doc",
    summary: "A practical case for UNS over legacy point-to-point machine integration.",
    content: "[YOUR CONTENT — e.g. the Renault vs. ETI UNS deployment contrast]",
    date: "2026-03-01",
    tags: ["Industry 4.0", "OT", "Architecture"],
  },
  {
    slug: "seccomp-apparmor-docker-prisma",
    title: "Debugging Prisma's Rust runtime under Docker seccomp/AppArmor restrictions",
    type: "doc",
    summary: "Root-causing a Docker Compose failure on Debian, step by step.",
    content:
      "[YOUR CONTENT — the AFFiNE deployment debugging story: PostgreSQL healthcheck over Unix socket, then seccomp:unconfined / apparmor:unconfined for Prisma's Rust runtime]",
    date: "2026-01-20",
    tags: ["DevOps", "Docker"],
  },
  {
    slug: "protocol-desync-frame-markers",
    title: "Fixing protocol desync with explicit frame markers and ACKs",
    type: "doc",
    summary: "How Protocol V2 solved audio/video drift in ProjetEdge.",
    content:
      "[YOUR CONTENT — diagnosing drift, adding frame markers and server ACKs, reaching sub-50ms sync]",
    date: "2025-11-10",
    tags: ["Embedded", "Android"],
  },

  // ---- Tutorials (great place for Substack posts) ------------------------


  // ---- Conference talks ----------------------------------------------------


  // ---- Workshops -------------------------------------------------------

  // ---- Community ---------------------------------------------------------


  // ---- Videos --------------------------------------------------------------
  {
    slug: "projetedge-demo",
    title: "ProjetEdge — Sync Demo",
    type: "video",
    summary: "A demo of the edge camera system's audio/video sync.",
    date: "2025-11-10",
    tags: ["Embedded", "Android"],
    externalLink: "[YOUR VIDEO URL]",
    linkLabel: "Watch demo",
  },

  // ---- Photos (tech-related — booths, whiteboards, setups, events) -------
  {
    slug: "your-tech-photo",
    title: "[CAPTION FOR A TECH PHOTO]",
    type: "photo",
    summary: "[SHORT CONTEXT]",
    date: "[DATE]",
    tags: ["[TAG]"],
    image: "[/images/tech/photo-1.jpg]",
  },
];