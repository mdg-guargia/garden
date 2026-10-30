import { SectionHeading } from "@/components/SectionHeading";
import { fpvIntro, builds, flightVideos } from "@/data/fpv";
import { profile } from "@/data/profile";

export const metadata = { title: `FPV drones — ${profile.name}` };

export default function FpvPage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading eyebrow="FPV" title="Drones" />

      <p className="max-w-2xl text-foreground/80">{fpvIntro.statement}</p>

      {builds.length > 0 && (
        <Section title="Builds">
          <div className="flex flex-col divide-y divide-border">
            {builds.map((b) => (
              <div key={b.slug} className="py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-foreground">{b.name}</h3>
                  <span className="font-mono text-xs text-muted">{b.date}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/80">{b.description}</p>
                {b.specs && b.specs.length > 0 && (
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
                    {b.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
                {b.link && (
                  <a href={b.link} className="underline-link mt-2 inline-block text-sm">
                    Build log ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {flightVideos.length > 0 && (
        <Section title="Flights">
          <ul className="space-y-1 text-sm">
            {flightVideos.map((v) => (
              <li key={v.title}>
                <a href={v.url} className="underline-link">
                  {v.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">{title}</h2>
      {children}
    </div>
  );
}
