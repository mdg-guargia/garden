// Logos for the skill chips on /resume. Brand logos come from the
// `simple-icons` package (CC0). A skill with no brand logo (a standard, a
// method…) falls back to a small generic glyph chosen by its category, see
// `src/components/SkillChip.tsx`. To add a logo, import it below and map the
// skill's exact label (as written in src/data/skills.ts) to it.
import {
  siAndroid,
  siCplusplus,
  siDebian,
  siDocker,
  siMqtt,
  siNextdotjs,
  siNodedotjs,
  siOpencv,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siSqlite,
  siTypescript,
} from "simple-icons";

export type BrandIcon = { path: string; hex: string };

export const skillIcons: Record<string, BrandIcon> = {
  TypeScript: siTypescript,
  "Next.js": siNextdotjs,
  React: siReact,
  "Node.js": siNodedotjs,
  Python: siPython,
  "C++": siCplusplus,
  Docker: siDocker,
  "Docker Compose": siDocker,
  "Linux (Debian)": siDebian,
  Prisma: siPrisma,
  PostgreSQL: siPostgresql,
  SQLite: siSqlite,
  MQTT: siMqtt,
  "Android NDK": siAndroid,
  JNI: siOpenjdk,
  OpenCV: siOpencv,
  camera2ndk: siAndroid,
};
