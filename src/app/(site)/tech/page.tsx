"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { techItems, techTypeLabels, TechType, techIntro } from "@/data/tech";
import { formatDate } from "@/lib/utils";

const TABS: { id: TechType | "all"; label: string }[] = [
  { id: "all", label: "All items" },
  { id: "work", label: techTypeLabels.work },
  //{ id: "tutorial", label: techTypeLabels.tutorial },
  { id: "doc", label: techTypeLabels.doc },
  //{ id: "talk", label: techTypeLabels.talk },
  //{ id: "workshop", label: techTypeLabels.workshop },
  //{ id: "community", label: techTypeLabels.community },
  { id: "photo", label: techTypeLabels.photo },
  { id: "video", label: techTypeLabels.video },
];

export default function TechPage() {
  const [tab, setTab] = useState<TechType | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return techItems
      .filter((item) => (tab === "all" ? true : item.type === tab))
      .filter((item) =>
        query ? (item.title + item.summary).toLowerCase().includes(query.toLowerCase()) : true
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [tab, query]);

  return (
    <div className="max-w-3xl">
      <SectionHeading
        //eyebrow="Tech"
        title="aye, i'm Mandengue"
        description={techIntro}
      />

      <div className="mb-6 flex flex-col gap-4">
        <input
          type="search"
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <Tag key={t.id} label={t.label} active={tab === t.id} onClick={() => setTab(t.id)} />
          ))}
        </div>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {filtered.map((item) => {
          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium text-foreground group-hover:underline">
                  {item.title}
                  {item.externalLink && <span className="ml-1 text-muted">↗</span>}
                </h3>
                <time className="shrink-0 font-mono text-xs text-muted">
                  {formatDate(item.date)}
                </time>
              </div>
              <p className="text-sm text-muted">{item.summary}</p>
              <div className="mt-1 flex flex-wrap gap-2 font-mono text-xs text-muted">
                <span className="text-accent">{techTypeLabels[item.type]}</span>
                {item.tags.map((tag) => (
                  <span key={tag}>#{tag.toLowerCase().replace(/\s+/g, "-")}</span>
                ))}
              </div>
            </>
          );

          return item.externalLink ? (
            <a
              key={item.slug}
              href={item.externalLink}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 py-4"
            >
              {inner}
            </a>
          ) : (
            <Link key={item.slug} href={`/tech/${item.slug}`} className="group flex flex-col gap-1 py-4">
              {inner}
            </Link>
          );
        })}
        {filtered.length === 0 && (
          <p className="py-4 text-sm text-muted">Nothing here yet.</p>
        )}
      </div>
    </div>
  );
}
