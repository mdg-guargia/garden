import { SectionHeading } from "@/components/SectionHeading";
import { life } from "@/data/life";
import { profile } from "@/data/profile";
import Link from "next/link";

export const metadata = { title: `Life — ${profile.name}` };

export default function LifePage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading
        eyebrow="Beyond the work"
        title="Life"
        description="The other facets — added over time, not all at once."
      />
      <div className="flex flex-col divide-y divide-border">
        {life.map((entry) => (
          <Link
            key={entry.slug}
            href={`/life/${entry.slug}`}
            className="group flex items-baseline justify-between gap-4 py-4"
          >
            <div>
              <h3 className="font-medium text-foreground group-hover:underline">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{entry.summary}</p>
            </div>
            <span className="shrink-0 text-muted transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
