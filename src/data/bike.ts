export type Route = {
  slug: string;
  name: string;
  distanceKm: number;
  elevationM: number;
  location: string;
  description: string;
  mapUrl?: string; // link to Strava/Komoot/RideWithGPS route
};

export type PlanEntry = {
  title: string;
  date: string;
  description: string;
};

export const bikeIntro = {
  statement:
    "[YOUR CYCLING STATEMENT — what kind of riding, since when, favorite terrain around Angers]",
  stravaUrl: "[YOUR STRAVA URL]",
};

// Add a route any time — the page lists them and links out to the map.
export const routes: Route[] = [
  {
    slug: "route-1",
    name: "[ROUTE NAME]",
    distanceKm: 0,
    elevationM: 0,
    location: "Angers, France",
    description: "[WHAT MAKES THIS ROUTE WORTH RIDING]",
    mapUrl: "[YOUR STRAVA/KOMOOT ROUTE URL]",
  },
];

export const setup = {
  bike: "[YOUR BIKE — brand & model]",
  frame: "[FRAME MATERIAL / SIZE]",
  groupset: "[GROUPSET]",
  wheels: "[WHEELS]",
  extras: ["[EXTRA 1 — e.g. bikepacking bags]", "[EXTRA 2]"],
};

export const equipment: string[] = [
  "[HELMET]",
  "[LIGHTS]",
  "[COMPUTER / GPS UNIT]",
  "[REPAIR KIT]",
];

export const planning: PlanEntry[] = [
  {
    title: "[UPCOMING RIDE OR GOAL]",
    date: "[DATE]",
    description: "[DESCRIPTION]",
  },
];

export const media = {
  photos: ["[/images/bike/photo-1.jpg]"],
  videos: [{ title: "[VIDEO TITLE]", url: "[YOUR VIDEO URL]" }],
};
