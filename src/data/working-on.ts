// A lightweight, frequently-updated list. Each entry can be just a link
// (e.g. a Substack post, an app you shipped) or a short note with no link
// at all. Add/remove freely — this is meant to churn.

export type WorkingOnItem = {
  id: string;
  title: string;
  note?: string; // short freeform text, optional
  link?: string; // e.g. a Substack post, a live app, a repo
  linkLabel?: string; // defaults to "Open ↗"
  status?: "active" | "paused" | "shipped";
  date: string;
};

export const workingOn: WorkingOnItem[] = [
  {
    id: "commflow-v2",
    title: "Commflow — replacing native enums with the Zod validation layer",
    note: "Ongoing refactor across the codebase.",
    status: "active",
    date: "2026-08-01",
  },
  {
    id: "substack",
    title: "[YOUR SUBSTACK NAME]",
    note: "[WHAT YOU WRITE ABOUT THERE]",
    link: "[YOUR SUBSTACK URL]",
    linkLabel: "Read on Substack",
    status: "active",
    date: "[DATE]",
  },
  {
    id: "next-thing",
    title: "[SOMETHING ELSE YOU'RE WORKING ON]",
    link: "[LINK, IF ANY]",
    status: "active",
    date: "[DATE]",
  },
];
