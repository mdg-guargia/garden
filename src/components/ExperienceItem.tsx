import { Experience } from "@/data/experience";
import { Tag } from "@/components/Tag";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="relative border-l border-border pb-10 pl-6 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-serif text-lg text-foreground">
          {item.role} · {item.company}
        </h3>
        <span className="font-mono text-xs text-muted">
          {item.startDate} — {item.endDate}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted">{item.location}</p>
      <p className="mt-3 max-w-2xl text-foreground/80">{item.description}</p>
      {item.achievements.length > 0 && (
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
          {item.achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {item.technologies.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}
