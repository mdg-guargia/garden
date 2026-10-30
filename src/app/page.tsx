import Link from "next/link";
import { profile } from "@/data/profile";
import { sections } from "@/data/sections";
import Image from "next/image";


export default function Home() {
  return (
    <div className="relative min-h-screen px-6 py-10 sm:px-10 sm:py-12">
      {/* Logo — pinned to the corner, off on its own, no nav attached */}
      <Link
        href="/"
        className="absolute left-6 top-8 font-serif text-lg tracking-tight text-accent sm:left-10"
      >
        {profile.initials}
      </Link>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 pt-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:pt-32">
        <div>
          <p className="font-mono text-sm text-muted">aye, i&apos;m</p>
          <h1 className="mt-2 font-serif text-5xl tracking-tight text-foreground sm:text-6xl">
            {profile.name.toLowerCase()}
          </h1>
          <p className="mt-4 max-w-lg font-mono text-[15px] leading-relaxed text-muted">
            {/*{profile.tagline}*/}
          </p>

          <div className="mt-8 flex max-w-lg flex-col gap-5 font-mono text-[15px] leading-relaxed text-foreground">
            {sections.map((s) => (
              <p key={s.id}>
                {s.lead}
                <Link href={s.href} className="underline-link">
                  {s.linkLabel}
                </Link>
                {s.trail}{" "}
                <span aria-hidden className="text-accent">
                  →
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Photo — kept simple, no collage decoration */}
        <div className="hidden lg:mt-35 lg:block">
          <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-background-alt">
            <Image
              src="/images/home/Pure_Generation.jpeg"
              alt={profile.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 100vw"
              priority
            />
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
            {/*{profile.location} / {new Date().getFullYear()}*/}
             Louis Epée - Pure Generation 
          </p>
        </div>
      </div>
    </div>
  );
}
