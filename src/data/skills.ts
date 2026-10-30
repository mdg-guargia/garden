export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Cybersecurity",
    items: ["CEH methodology", "ISO 27001", "NIS2", "Security architecture", "OT/IT security"],
  },
  {
    category: "OT / IoT / Industry 4.0",
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
    items: ["TypeScript", "Next.js", "React", "Node.js", "Python", "C++"],
  },
  {
    category: "Infrastructure & DevOps",
    items: ["Docker", "Docker Compose", "Linux (Debian)", "Prisma", "PostgreSQL", "SQLite"],
  },
  {
    category: "Embedded & Systems",
    items: ["Android NDK", "JNI", "OpenCV", "camera2ndk"],
  },
  {
    category: "Languages",
    items: ["French (native)", "English (C1–C2, TOEIC)"],
  },
];
