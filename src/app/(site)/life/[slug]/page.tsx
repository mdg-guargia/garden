import Link from "next/link";
import { notFound } from "next/navigation";
import { life } from "@/data/life";
import { Tag } from "@/components/Tag";

export function generateStaticParams() {
  return life.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = life.find((e) => e.slug === params.slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default function LifeEntryPage({ params }: { params: { slug: string } }) {
  const entry = life.find((e) => e.slug === params.slug);
  if (!entry) notFound();

  return (
    <article className="max-w-3xl">
      <Link href="/life" className="text-sm text-muted hover:underline">
        ← Life
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{entry.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{entry.summary}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {entry.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <p className="mt-10 max-w-2xl whitespace-pre-wrap text-foreground/80">
        {entry.content}
      </p>

      {entry.externalLinks && entry.externalLinks.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          {entry.externalLinks.map((l) => (
            <a key={l.label} href={l.url} className="underline-link">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
