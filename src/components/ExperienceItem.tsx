import { Experience } from "@/data/experience";

// One experience, always in the same order: role and dates → company and
// place → concrete achievements. (`description` and `technologies` stay in
// the data file but are not shown: the achievements carry the page and the
// tools are listed in the Skills section.)
export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="py-10 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-serif text-xl text-foreground sm:text-2xl">{item.role}</h3>
        <span className="font-mono text-xs text-muted">
          {item.startDate} — {item.endDate}
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold text-azure-ink">
        {item.company} · {item.location}
      </p>
      {item.achievements.length > 0 && (
        <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-foreground/80">
          {item.achievements.map((a) => (
            <li key={a} className="flex gap-3">
              <span
                className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-vivid"
                aria-hidden
              />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
