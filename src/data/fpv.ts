// Everything on /fpv — FPV drones. Each block only shows on the page if it
// has content, so delete a placeholder (or empty an array) to hide a block.

export type FpvBuild = {
  slug: string;
  name: string;
  date: string;
  description: string;
  specs?: string[]; // e.g. frame, motors, flight controller, VTX, battery
  link?: string; // build log, parts list, repo…
};

export type FpvVideo = {
  title: string;
  url: string;
};

export const fpvIntro = {
  statement:
    "[YOUR FPV STATEMENT — freestyle, racing, cinematic or long range? since when? where do you fly around Angers?]",
};

// Add a build any time — the page lists them, newest first as you order them.
export const builds: FpvBuild[] = [
  {
    slug: "build-1",
    name: "[BUILD NAME — e.g. 5\" freestyle quad]",
    date: "[DATE]",
    description: "[WHAT IT'S FOR, WHAT YOU CHANGED OR LEARNED]",
    specs: ["[FRAME]", "[MOTORS / PROPS]", "[FLIGHT CONTROLLER]", "[VTX / CAMERA]", "[BATTERY]"],
  },
];

export const flightVideos: FpvVideo[] = [
  { title: "[VIDEO TITLE]", url: "[YOUR VIDEO URL]" },
];
