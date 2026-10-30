export type PhotoEntry = {
  slug: string;
  title: string;
  caption: string;
  date: string;
  location?: string;
  tags: string[];
  image: string;
};

export const photoIntro = {
  statement:
    "[YOUR PHOTOGRAPHY STATEMENT — what you shoot, why, film or digital, what the photobook is about]",
  photobookStatus: "[STATUS — e.g. 'in progress, targeting a first edition in 2027']",
  externalLink: { label: "Instagram", url: "[YOUR INSTAGRAM URL]" },
};

// Add one entry per photo (or per small set) you want to show. Scales to
// however many you add — the page just renders a grid.
export const photos: PhotoEntry[] = [
  {
    slug: "photo-1",
    title: "[TITLE]",
    caption: "[SHORT CAPTION]",
    date: "[DATE]",
    location: "[LOCATION]",
    tags: ["[TAG]"],
    image: "[/images/photo/photo-1.jpg]",
  },
  {
    slug: "photo-2",
    title: "[TITLE]",
    caption: "[SHORT CAPTION]",
    date: "[DATE]",
    location: "[LOCATION]",
    tags: ["[TAG]"],
    image: "[/images/photo/photo-2.jpg]",
  },
  {
    slug: "photo-3",
    title: "[TITLE]",
    caption: "[SHORT CAPTION]",
    date: "[DATE]",
    location: "[LOCATION]",
    tags: ["[TAG]"],
    image: "[/images/photo/photo-3.jpg]",
  },
];
