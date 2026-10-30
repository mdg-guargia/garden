// The list of projects shown on /working-on (the page that mirrors the
// homepage). One entry per project: a title, an optional one-line note, and
// an optional `href` — an internal page (e.g. "/tech/commflow") or an
// external URL (GitHub repo, live app, Substack post). Without an `href`
// the title is shown as plain text. Add/remove freely.

export type Project = {
  id: string;
  title: string;
  note?: string; // short one-liner shown after the title
  href?: string; // internal path or external URL
};

export const projects: Project[] = [
  {
    id: "quatrium",
    title: "Projet Quatrium",
    note: "modernizing industrial machine communication with a Unified Namespace.",
    href: "/tech/unified-namespace-industry-4",
  },
  {
    id: "commflow",
    title: "Commflow",
    note: "a campaign management platform for email and SMS, built on Next.js.",
    // href: "https://github.com/…", // add the repo link when it's public
  },
  {
    id: "projetedge",
    title: "ProjetEdge",
    note: "a native Android edge camera system with sub-50ms audio/video sync.",
    // href: "https://github.com/…",
  },
  {
    id: "affine",
    title: "AFFiNE self-hosted",
    note: "a self-hosted deployment on Debian with Docker Compose.",
    href: "/tech/affine-self-hosted-deployment",
  },
  {
    id: "telegram-bot",
    title: "Telegram automation bot",
    note: "a Python script on Telethon that reliably catches message edits.",
    href: "/tech/telegram-automation-bot",
  },
];
