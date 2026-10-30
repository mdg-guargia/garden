export type Experience = {
  slug: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string; // "Present" allowed
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  images: string[];
  videos: string[];
  links?: { label: string; url: string }[];
};

export const experience: Experience[] = [
  {
    slug: "we-network",
    company: "We Network",
    role: "Alternance — Solution Architecture & OT/IoT Infrastructure",
    startDate: "[START DATE]",
    endDate: "Present",
    location: "Angers, France",
    description:
      "We Network is a Centre de Ressources Technologiques specializing in Industry 4.0, based at Technocampus Electronique & IoT. My role spans solution architecture, OT/IoT infrastructure, security operations and data pipeline work for industrial partners.",
    technologies: [
      "OT/IoT",
      "Unified Namespace",
      "MQTT",
      "Docker",
      "Next.js",
      "TypeScript",
      "Security Architecture",
    ],
    achievements: [
      "Led the technical and organizational analysis for a Unified Namespace modernization project spanning multiple industrial partners",
      "Designed presentations and speaker guides tailored to both technical and executive audiences",
      "Built internal tooling and data pipelines supporting industrial data flows",
    ],
    images: ["[/images/experience/we-network-1.jpg]"],
    videos: [],
  },
  {
    slug: "itgstore-sas",
    company: "ITGStore SAS",
    role: "[YOUR ROLE]",
    startDate: "[START DATE]",
    endDate: "[END DATE]",
    location: "Cameroon",
    description: "[DESCRIBE YOUR MISSIONS AND CONTEXT AT ITGSTORE SAS]",
    technologies: ["[TECH 1]", "[TECH 2]"],
    achievements: ["[ACHIEVEMENT 1]", "[ACHIEVEMENT 2]"],
    images: [],
    videos: [],
  },
  {
    slug: "speedy-france",
    company: "Speedy France",
    role: "[YOUR ROLE]",
    startDate: "[START DATE]",
    endDate: "[END DATE]",
    location: "France",
    description: "[DESCRIBE YOUR MISSIONS AND CONTEXT AT SPEEDY FRANCE]",
    technologies: ["[TECH 1]", "[TECH 2]"],
    achievements: ["[ACHIEVEMENT 1]", "[ACHIEVEMENT 2]"],
    images: [],
    videos: [],
  },
];
