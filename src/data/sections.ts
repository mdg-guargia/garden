// The homepage renders nothing but the hero and this list. To add a whole
// new top-level section of your life/work to the homepage:
//
//   1. Build its page(s) under src/app/(site)/<slug>/ (copy the shape of
//      an existing section like bike/ or photo/ for inspiration).
//   2. Add one object to this array.
//
// Nothing else needs to change — the homepage, and the section nav in
// components/Nav.tsx pick it up from here.

export type Section = {
  id: string;
  lead?: string; // plain text before the link
  linkLabel: string; // the underlined link text
  href: string;
  trail?: string; // plain text after the link
  follow?: { linkLabel: string; href: string }; // second link, stuck right under this line (same paragraph)
  navLabel: string; // short label used in the site nav
};

export const sections: Section[] = [
  /*{
    id: "tech",
    linkLabel: "tech",
    trail:
      " — work, tutorials, docs, talks, workshops and everything else I build and share.",
    href: "/tech",
    navLabel: "tech",
  },*/
  {
    id: "Engineer",
    linkLabel: "Cybersecurity & industry 4.0 Engineer",
    trail:
      ", transformer and tinkerer.",
    href: "/tech",
    navLabel: "tech",
    follow: { linkLabel: "take a look at what i'm building", href: "/working-on" },
  },
  {
    id: "photo",
    lead: "i also shoot ",
    linkLabel: "photo",
    trail: ", slowly working toward a first photobook.",
    href: "/photo",
    navLabel: "photo",
  },
  {
    id: "bike",
    lead: "off the clock, you'll find me on my ",
    linkLabel: "bike",
    trail: " — routes, setup and the gear I actually use.",
    href: "/bike",
    navLabel: "bike",
  },
  {
    id: "fpv",
    lead: "and i fly ",
    linkLabel: "fpv drones",
    trail: " — builds, tuning and flights.",
    href: "/fpv",
    navLabel: "fpv",
  },
];
