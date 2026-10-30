import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { workingOn } from "@/data/working-on";
import { profile } from "@/data/profile";
import { formatDate } from "@/lib/utils";

export const metadata = { title: `Working on — ${profile.name}` };

export default function WorkingOnPage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading
        eyebrow="Now"
        title="Things I'm working on"
        description="A running, unpolished list — some of these are just links."
      />
      <div className="flex flex-col divide-y divide-border">
        {workingOn.map((item) => (
          <div key={item.id} className="py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <time className="shrink-0 font-mono text-xs text-muted">
                {formatDate(item.date)}
              </time>
            </div>
            {item.note && <p className="mt-1 text-sm text-foreground/80">{item.note}</p>}
            <div className="mt-2 flex flex-wrap items-center gap-3">
              {item.status && <Tag label={item.status} />}
              {item.link && (
                <a href={item.link} className="underline-link text-sm">
                  {item.linkLabel ?? "Open ↗"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
