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
    role: "Solution Architecture & OT/IoT Infrastructure",
    startDate: "2023-09",
    endDate: "2026-06",
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
      "Designed scalable IT/OT architectures and deployed an event-driven Unified Namespace (MQTT) integrating MES, ERP, IoT devices, AMRs and cobots across multiple industrial partners.",
      "Built real-time industrial data pipelines and historian platforms (Telegraf, InfluxDB), enabling data governance, anomaly detection and predictive maintenance.",
      "Applied IT/OT security architecture and defense-in-depth principles (IEC 62443), hardened containerized infrastructures, and conducted risk assessments, security audits and incident response aligned with ISO 27001 and NIS2.",
    ],
    images: ["[/images/experience/we-network-1.jpg]"],
    videos: [],
  },
  {
    slug: "itgstore-sas",
    company: "ITGStore SAS",
    role: "Full-Stack Developer & Application Security Analyst",
    startDate: "2024-06",
    endDate: "2024-09",
    location: "Douala,Cameroon",
    description: "[DESCRIBE YOUR MISSIONS AND CONTEXT AT ITGSTORE SAS]",
    technologies: ["[TECH 1]", "[TECH 2]"],
    achievements: [
      "Enrollment Platform – servicescartejeuneonj.cm", 
      "Integrated a biometric scanner into a web interface, covering data capture, processing, and secure transmission.",
      "Designed a centralized enrollment system with dedicated operator and administrator interfaces, deployed across government agencies and the ministry.",
      "Conducted application security assessments against the OWASP Top 10, identifying vulnerabilities and providing remediation recommendations.",
    ],
    images: [],
    videos: [],
  },
  {
    slug: "speedy-france",
    company: "Speedy France",
    role: "IT Infrastructure & Security Analyst",
    startDate: "2022-09",
    endDate: "2023-09",
    location: "France",
    description: "[DESCRIBE YOUR MISSIONS AND CONTEXT AT SPEEDY FRANCE]",
    technologies: ["[TECH 1]", "[TECH 2]"],
    achievements: [
      "Analyzed technical and organizational issues; developed prioritized improvement recommendations for management.", 
      "Led security audits and infrastructure projects; identified root causes and presented actionable findings.",
      "Contributed to digital transformation initiatives: server infrastructure, VPN, automation of operational procedures..",
    ],
    images: [],
    videos: [],
  },
];
