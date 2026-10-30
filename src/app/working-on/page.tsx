import Link from "next/link";
import { projects } from "@/data/working-on";
import { profile } from "@/data/profile";

export const metadata = { title: `What I'm building — ${profile.name}` };

// Only the projects: same typography and logo corner as the homepage, but no
// "aye, i'm …" intro, no photo and no caption.
export default function WorkingOnPage() {
  return (
    <div className="relative min-h-screen px-6 py-10 sm:px-10 sm:py-12">
      <Link
        href="/"
        className="absolute left-6 top-8 font-serif text-lg tracking-tight text-accent sm:left-10"
      >
        {profile.initials}
      </Link>

      <div className="mx-auto max-w-5xl pt-24 lg:pt-32">
        <div className="flex max-w-lg flex-col gap-5 font-mono text-[15px] leading-relaxed text-foreground">
          {projects.map((p) => (
            <p key={p.id}>
              {p.href ? (
                p.href.startsWith("http") ? (
                  <a href={p.href} className="underline-link">
                    {p.title}
                  </a>
                ) : (
                  <Link href={p.href} className="underline-link">
                    {p.title}
                  </Link>
                )
              ) : (
                p.title
              )}
              {p.note && <> — {p.note}</>}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
