import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export const metadata = { title: `Contact — ${profile.name}` };

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
  { label: "GitHub", value: profile.github, href: profile.github },
  { label: "CV / Resume", value: "Download", href: profile.cvUrl },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="Open to conversations about industrial digital transformation, OT/IoT security, and roles in consulting or technical leadership."
      />
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-accent"
            >
              <span className="text-muted">{link.label}</span>
              <span className="font-medium">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
