import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceItem } from "@/components/ExperienceItem";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata = { title: `Experience — ${profile.name}` };

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="A timeline of roles, missions and what came out of them."
      />
      <div>
        {experience.map((item) => (
          <ExperienceItem key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
