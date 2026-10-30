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
    linkLabel: "Engineer",
    trail:
      " — cybersecurity & industry 4.0, transformer and tinkerer.",
    href: "/tech",
    navLabel: "tech",
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
    id: "working-on",
    lead: "and here's a running list of ",
    linkLabel: "things i'm working on",
    trail: " right now.",
    href: "/working-on",
    navLabel: "working on",
  },
];
