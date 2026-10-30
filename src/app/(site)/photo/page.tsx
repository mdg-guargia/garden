import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { photoIntro, photos } from "@/data/photo";
import { profile } from "@/data/profile";

export const metadata = { title: `Photo — ${profile.name}` };

export default function PhotoPage() {
  return (
    <div>
      <SectionHeading eyebrow="Photo" title="Photography" />

      <div className="max-w-2xl">
        <p className="text-foreground/80">{photoIntro.statement}</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
          Photobook — {photoIntro.photobookStatus}
        </p>
        <a href={photoIntro.externalLink.url} className="underline-link mt-2 inline-block text-sm">
          {photoIntro.externalLink.label} ↗
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <figure key={p.slug} className="flex flex-col gap-2">
            <div className="flex aspect-[4/5] items-center justify-center border border-border bg-background-alt px-4 text-center font-mono text-xs text-muted">
              {p.image}
            </div>
            <figcaption>
              <p className="text-sm font-medium text-foreground">{p.title}</p>
              <p className="text-sm text-muted">{p.caption}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {[p.location, p.date].filter(Boolean).join(" · ")}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
