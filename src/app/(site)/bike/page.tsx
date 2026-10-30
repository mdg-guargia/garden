import { SectionHeading } from "@/components/SectionHeading";
import { bikeIntro, routes, setup, equipment, planning, media } from "@/data/bike";
import { profile } from "@/data/profile";

export const metadata = { title: `Bike — ${profile.name}` };

export default function BikePage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading eyebrow="Bike" title="Cycling" />

      <p className="max-w-2xl text-foreground/80">{bikeIntro.statement}</p>
      <a href={bikeIntro.stravaUrl} className="underline-link mt-2 inline-block text-sm">
        Strava ↗
      </a>

      <Section title="Routes & maps">
        <div className="flex flex-col divide-y divide-border">
          {routes.map((r) => (
            <div key={r.slug} className="py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">{r.name}</h3>
                <span className="font-mono text-xs text-muted">
                  {r.distanceKm} km · {r.elevationM} m D+
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{r.location}</p>
              <p className="mt-2 text-sm text-foreground/80">{r.description}</p>
              {r.mapUrl && (
                <a href={r.mapUrl} className="underline-link mt-2 inline-block text-sm">
                  View map ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Bike setup">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
          <Row label="Bike" value={setup.bike} />
          <Row label="Frame" value={setup.frame} />
          <Row label="Groupset" value={setup.groupset} />
          <Row label="Wheels" value={setup.wheels} />
        </dl>
        {setup.extras.length > 0 && (
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
            {setup.extras.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Equipment">
        <ul className="list-inside list-disc space-y-1 text-sm text-foreground/80">
          {equipment.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </Section>

      <Section title="Planning">
        <div className="flex flex-col divide-y divide-border">
          {planning.map((p) => (
            <div key={p.title} className="py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">{p.title}</h3>
                <span className="font-mono text-xs text-muted">{p.date}</span>
              </div>
              <p className="mt-1 text-sm text-foreground/80">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Photos & videos">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {media.photos.map((src) => (
            <div
              key={src}
              className="flex aspect-square items-center justify-center border border-border bg-background-alt px-2 text-center font-mono text-xs text-muted"
            >
              {src}
            </div>
          ))}
        </div>
        {media.videos.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm">
            {media.videos.map((v) => (
              <li key={v.title}>
                <a href={v.url} className="underline-link">
                  {v.title} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
      </Section>
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border py-1.5 sm:justify-start sm:gap-3">
      <dt className="text-muted">{label}</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}
