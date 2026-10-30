import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { skills } from "@/data/skills";
import { profile } from "@/data/profile";

export const metadata = { title: `Skills — ${profile.name}` };

export default function SkillsPage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="flex flex-col gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
