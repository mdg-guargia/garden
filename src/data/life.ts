// Smaller, miscellaneous personal facets that don't (yet) warrant their own
// full top-level section on the homepage. Promoted facets like photography
// and cycling now live in their own dedicated sections (src/data/photo.ts,
// src/data/bike.ts) — this file is for whatever's next and smaller.
//
// To add one: drop an entry here. It shows up on /life automatically. If it
// grows into something bigger, promote it to its own top-level section (see
// src/data/sections.ts) the same way photo/bike were.

export type LifeEntry = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  externalLinks?: { label: string; url: string }[];
  image?: string;
};

export const life: LifeEntry[] = [
  {
    slug: "reading",
    title: "Reading",
    summary: "Mostly systems thinking, some fiction on the side.",
    content:
      "[YOUR CONTENT — current book, a short running list of favorites or a link to a Goodreads/StoryGraph shelf]",
    tags: ["Reading"],
    externalLinks: [{ label: "Goodreads", url: "[YOUR GOODREADS URL]" }],
  },
];
