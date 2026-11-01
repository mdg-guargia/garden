import Image from "next/image";
import { ExperienceItem } from "@/components/ExperienceItem";
import { OpenToCard } from "@/components/OpenToCard";
import { SkillChip } from "@/components/SkillChip";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { profile } from "@/data/profile";

export const metadata = { title: `Resume — ${profile.name}` };

// Wide page: an intro with a profile card on the right, then one block per
// section (title on the far left, content running to the right edge), then a
// final contact area. The page uses the wider width set for "/resume" in
// components/SiteShell.tsx. Content lives in src/data (profile.ts,
// experience.ts, skills.ts). The old /experience and /skills URLs redirect to
// the anchors below (next.config.ts).

// Colors of the dash in front of each skill family (cycled).
const DASH_COLORS = ["bg-vivid", "bg-azure", "bg-vivid-ink"];

export default function ResumePage() {
  const { resumeCard: card } = profile;

  const socials = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "GitLab", href: profile.gitlab },
  ];

  return (
    <div className="flex flex-col">
      {/* Intro */}
      <header className="grid gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center lg:gap-20 lg:pb-24">
        <div>
          <p className="font-mono text-xs text-vivid-ink">
            Resume · updated {profile.resumeUpdated}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.role}.
          </h1>
          <Bars className="mt-8" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
            {profile.resumeSummary}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.cvPdf.en}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-vivid-ink bg-vivid-ink px-4 py-2.5 font-mono text-xs font-medium text-white transition-colors hover:border-vivid hover:bg-vivid"
            >
              <DownloadIcon />
              Download PDF · EN
            </a>
            <a
              href={profile.cvPdf.fr}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-azure hover:text-azure-ink"
            >
              <DownloadIcon />
              PDF · FR
            </a>
          </div>
        </div>

        {/* Profile card */}
        <aside
          aria-label="Profile"
          className="rounded-2xl border border-border bg-background-alt px-8 py-10 text-center"
        >
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-vivid to-azure ring-4 ring-background">
            {card.photo ? (
              <Image
                src={card.photo}
                alt={card.fullName}
                width={224}
                height={224}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center font-serif text-4xl text-white">
                {profile.initials}
              </span>
            )}
          </div>
          <p className="mt-6 text-lg font-semibold text-foreground">{card.fullName}</p>
          <p className="mt-1 text-sm font-medium text-vivid-ink">{profile.role}</p>
          <ul className="mt-6 flex flex-col items-center gap-2 font-mono text-xs text-muted">
            <li className="flex items-center gap-2">
              <PinIcon />
              <span className="sr-only">Location: </span>
              {card.location}
            </li>
            <li className="flex items-center gap-2">
              <PlaneIcon />
              <span className="sr-only">Mobility: </span>
              {card.mobility}
            </li>
          </ul>
        </aside>
      </header>

      <Section id="experience" title="Experience">
        <div className="divide-y divide-border">
          {experience.map((item) => (
            <ExperienceItem key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <ul className="divide-y divide-border">
          {profile.education.map((e) => (
            <li key={e.school} className="py-8 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-serif text-xl text-foreground sm:text-2xl">{e.degree}</h3>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-azure-ink">{e.school}</p>
              {e.focus && (
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{e.focus}</p>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills">
        <div className="divide-y divide-border">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-10"
            >
              <div>
                <h3 className="flex items-center gap-3 text-[15px] font-semibold text-foreground">
                  <span
                    className={`h-0.5 w-5 shrink-0 rounded-full ${DASH_COLORS[i % DASH_COLORS.length]}`}
                    aria-hidden
                  />
                  {group.category}
                </h3>
                <p className="mt-2 pl-8 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>
              </div>
              <div className="flex flex-wrap content-start gap-2.5">
                {group.items.map((item) => (
                  <SkillChip key={item} label={item} category={group.category} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <ul className="divide-y divide-border">
          {profile.certifications.map((c) => (
            <li
              key={c.name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 first:pt-0 last:pb-0"
            >
              <div>
                <span className="font-serif text-xl text-foreground">{c.name}</span>
                <span className="ml-3 text-sm text-muted">
                  {c.issuer} ({c.year})
                </span>
              </div>
              <span
                className={
                  c.status === "obtained"
                    ? "font-mono text-xs font-medium text-vivid-ink"
                    : "font-mono text-xs text-azure-ink"
                }
              >
                {c.status === "obtained" ? "● Obtained" : "○ In progress"}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="languages" title="Languages">
        <ul className="divide-y divide-border">
          {profile.languages.map((l) => (
            <li
              key={l.name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 first:pt-0 last:pb-0"
            >
              <span className="font-serif text-xl text-foreground">{l.name}</span>
              <span className="font-mono text-xs text-muted">
                {l.level}
                {l.test && ` · ${l.test}`}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Final contact: the email, then LinkedIn / GitHub / GitLab stacked under it */}
      <div className="border-t border-border pt-16 sm:pt-20">
        <OpenToCard links={socials} />
      </div>
    </div>
  );
}

// Section: title (with the three color bars) on the far left, content filling
// the rest of the width.
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-t border-border py-16 sm:py-20 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-x-20"
    >
      <div>
        <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
        <Bars className="mt-5" />
      </div>
      <div className="mt-10 lg:mt-0">{children}</div>
    </section>
  );
}

// Three short colored bars used under titles.
function Bars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-1.5 ${className}`} aria-hidden>
      <span className="h-[3px] w-7 rounded-full bg-vivid" />
      <span className="h-[3px] w-7 rounded-full bg-azure" />
      <span className="h-[3px] w-7 rounded-full bg-vivid-ink" />
    </span>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 2.5v7.5m0 0L5 7m3 3 3-3M3 13h10" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-vivid-ink"
    >
      <path d="M8 14s4.5-3.8 4.5-7.2a4.5 4.5 0 0 0-9 0C3.5 10.2 8 14 8 14Z" />
      <circle cx="8" cy="6.8" r="1.5" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-azure-ink"
    >
      <path d="M14 2 7 9m7-7-4.5 12-2.5-5-5-2.5L14 2Z" />
    </svg>
  );
}
