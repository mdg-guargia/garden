import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Tag } from "@/components/Tag";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { profile } from "@/data/profile";

export const metadata = { title: `Resume — ${profile.name}` };

// One page for what used to be /experience and /skills (those URLs redirect
// here, see next.config.ts).
export default function ResumePage() {
  return (
    <div className="flex max-w-3xl flex-col gap-16">
      <SectionHeading eyebrow="Resume" title="Experience & skills" />

      <section id="experience" className="-mt-6 scroll-mt-8">
        <h2 className="mb-8 font-serif text-2xl tracking-tight text-foreground">
          Where I&apos;ve worked
        </h2>
        <div>
          {experience.map((item) => (
            <ExperienceItem key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-8">
        <h2 className="mb-8 font-serif text-2xl tracking-tight text-foreground">
          What I work with
        </h2>
        <div className="flex flex-col gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
