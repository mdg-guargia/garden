// Skills grouped by domain, as shown in "03 · Skills" on /resume: a title, a
// one-line description and the tools. Languages live in profile.ts.
export type SkillCategory = {
  category: string;
  description: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Cybersecurity",
    description:
      "Security as a design decision, from frameworks and compliance to industrial environments.",
    items: ["CEH methodology", "ISO 27001", "NIS2", "Security architecture", "OT/IT security"],
  },
  {
    category: "OT / IoT / Industry 4.0",
    description:
      "Connecting machines to decisions: Unified Namespace, MQTT and the data pipelines in between.",
    items: [
      "Unified Namespace (UNS)",
      "MQTT",
      "ISA-95",
      "Industrial data pipelines",
      "OT/IT convergence",
    ],
  },
  {
    category: "Software Engineering",
    description: "Internal tools and data platforms, built end to end.",
    items: ["TypeScript", "Next.js", "React", "Node.js", "Python", "C++"],
  },
  {
    category: "Infrastructure & DevOps",
    description: "Self-hosted, containerised deployments on Linux, and the databases behind them.",
    items: ["Docker", "Docker Compose", "Linux (Debian)", "Prisma", "PostgreSQL", "SQLite"],
  },
  {
    category: "Embedded & Systems",
    description: "Native Android and computer-vision work, close to the hardware.",
    items: ["Android NDK", "JNI", "OpenCV", "camera2ndk"],
  },
];
