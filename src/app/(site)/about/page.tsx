import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export const metadata = { title: `About — ${profile.name}` };

export default function AboutPage() {
  return (
    <div className="flex max-w-3xl flex-col gap-14">
      <SectionHeading eyebrow="About" title="Who I am" />

      <section className="flex flex-col gap-4">
        {profile.intro.map((p, i) => (
          <p key={i} className="max-w-2xl text-foreground/80">
            {p}
          </p>
        ))}
      </section>

      <section>
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
          What I do
        </h2>
        <ul className="list-inside list-disc space-y-1 text-foreground/80">
          {profile.whatIDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
          What I care about
        </h2>
        <ul className="list-inside list-disc space-y-1 text-foreground/80">
          {profile.whatICareAbout.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
          What I&apos;m learning
        </h2>
        <ul className="list-inside list-disc space-y-1 text-foreground/80">
          {profile.learning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
          Where I&apos;m going
        </h2>
        <p className="max-w-2xl text-foreground/80">
          {profile.goingTowards}
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
            Education
          </h2>
          <ul className="space-y-3 text-sm text-foreground/80">
            {profile.education.map((e) => (
              <li key={e.school}>
                <p className="font-medium text-foreground">
                  {e.school}
                </p>
                <p>{e.degree}</p>
                <p className="text-muted">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
            Certifications
          </h2>
          <ul className="space-y-2 text-sm text-foreground/80">
            {profile.certifications.map((c) => (
              <li key={c.name}>
                <span className="font-medium text-foreground">
                  {c.name}
                </span>{" "}
                — {c.issuer} ({c.year})
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
