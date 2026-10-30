import Link from "next/link";
import { notFound } from "next/navigation";
import { techItems, techTypeLabels } from "@/data/tech";
import { Tag } from "@/components/Tag";
import { formatDate } from "@/lib/utils";

// Only items without an externalLink get an internal page — items with an
// externalLink (a Substack post, a GitHub repo, a YouTube video) link out
// directly from the /tech list instead.
const internalItems = techItems.filter((i) => !i.externalLink);

export function generateStaticParams() {
  return internalItems.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = internalItems.find((i) => i.slug === params.slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default function TechItemPage({ params }: { params: { slug: string } }) {
  const item = internalItems.find((i) => i.slug === params.slug);
  if (!item) notFound();

  return (
    <article className="max-w-3xl">
      <Link href="/tech" className="text-sm text-muted hover:underline">
        ← Tech
      </Link>

      <h1 className="mt-4 font-serif text-3xl tracking-tight">{item.title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
        <span className="text-accent">{techTypeLabels[item.type]}</span>
        <span>·</span>
        <time>{formatDate(item.date)}</time>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      {item.content && (
        <p className="mt-10 max-w-2xl whitespace-pre-wrap text-foreground/80">
          {item.content}
        </p>
      )}
    </article>
  );
}
