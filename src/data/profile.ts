export const profile = {
  name: "Mandengue",
  initials: "MN",
  role: "Industrial Digital Transformation & Cybersecurity Engineer",
  tagline: "Engineer — cybersecurity & industry 4.0, transformer and tinkerer.", // used for the SEO description in app/layout.tsx
  siteTagline: "BUILD / SECURE / SHARE",
  availability: "Available for opportunities",
  isAvailable: true,
  location: "Angers, France",
  email: "contact@belatedi.com", // placeholder — replace with your real address (shown and used for mailto on /tech and /contact)

  // The contact banner on /tech: small line on top, big headline below, and
  // `email` on the right with a round button that opens a new mail.
  // In `pitch`, a word between *asterisks* is set in italic.
  openTo: {
    roles: "Open to Industrial Digital Transformation & Cybersecurity Engineer roles",
    pitch: "Let’s build what *runs* next.",
  },

  github: "[YOUR GITHUB URL]",
  linkedin: "https://linkedin.com/in/mandengue",
  gitlab: "[YOUR GITLAB URL]",
  cvUrl: "[YOUR CV / RESUME URL]",

  // The two PDF buttons at the top of /resume. Put your CVs in `public/cv/`
  // under these names (or change the paths).
  cvPdf: {
    en: "/cv/cv-en.pdf",
    fr: "/cv/cv-fr.pdf",
  },

  // The profile card on the right of the /resume header.
  resumeCard: {
    fullName: "Mandengue NJIME",
    // Put your portrait in `public/images/` and set its path here, e.g.
    // "/images/portrait.jpg". While empty, the card shows your initials.
    photo: "/images/home/profil.png",
    location: "Paris, Île-de-France",
    mobility: "Open to worldwide mobility",
  },

  // Shown as "Resume · updated …" above the title on /resume.
  resumeUpdated: "October 2026",

  // Short professional summary at the top of /resume (drawn from `intro`).
  resumeSummary:
    "4 years in industry: IT/OT architecture, industrial data platforms, event-driven systems, industrial AI, cloud infrastructure (AWS), and cybersecurity across IT and OT environments.",

  intro: [
    "I'm a final-year engineering student in Cybersecurity & IoT/IoE, currently on alternance (work-study) at We Network, a Centre de Ressources Technologiques focused on Industry 4.0, based at Technocampus Electronique & IoT.",
    "My work sits at the intersection of OT and IT — solution architecture, industrial IoT infrastructure, security operations, and the data pipelines that connect machines to decisions.",
    "I like understanding complex systems end to end, from the sensor on the factory floor to the dashboard someone actually reads, and making sure the path between them is both useful and secure.",
  ],

  whatIDo: [
    "Design and secure OT/IoT infrastructure for industrial environments",
    "Work on Unified Namespace (UNS) architectures to modernize machine communication",
    "Build data platforms and internal tools end to end (Next.js, TypeScript)",
    "Apply security frameworks (ISO 27001, NIS2) to real infrastructure decisions",
  ],

  whatICareAbout: [
    "Industrial digital transformation done responsibly — modernization that doesn't ignore OT constraints",
    "Making security a design decision, not an afterthought",
    "Systems that are simple enough to actually be maintained",
  ],

  learning: [
    "Deepening offensive security practice (CEH) applied to industrial contexts",
    "Unified Namespace and MQTT-based architectures at scale",
    "[YOUR CURRENT LEARNING FOCUS]",
  ],

  goingTowards:
    "Consulting or technical leadership roles in industrial digital transformation — helping organizations modernize OT/IT convergence securely.",

  // `status` tells earned certifications from ones you are preparing:
  // "obtained" or "in-progress".
  certifications: [
    { name: "CEH", issuer: "EC-Council", year: "2026", status: "obtained" },
    { name: "ISO 27001", issuer: "[ISSUER]", year: "[YEAR]", status: "obtained" },
    { name: "NIS2", issuer: "[ISSUER]", year: "[YEAR]", status: "obtained" },
  ] as {
    name: string;
    issuer: string;
    year: string;
    status: "obtained" | "in-progress";
  }[],

  // `test` is optional: the test and score behind the level, when there is one.
  languages: [
    { name: "French", level: "Native", test: "" },
    { name: "English", level: "C1–C2", test: "TOEIC — 945" },
  ],

  // `focus` is the specialization or result, shown under the school on /resume.
  education: [
    {
      school: "ESAIP, Ecole d'ingénieurs ",
      degree: "Engineering Degree (CTI-accredited) in Cybersecurity & IoT/IoE",
      focus: "ESAIP · Master’s level, apprenticeship · final semester 17.45 / 20",
      period: "2023 — 2026",
    },
    {
      school: "Efrei Paris, Grande école d'ingénieur du numérique",
      degree: "BTS SIO — IT Services for Organizations",
      focus: "Systems, Networks & Infrastructure (SISR) · 16.5/20",
      period: "2021 — 2023",
    }
  ],
};
