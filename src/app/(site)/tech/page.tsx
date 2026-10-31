"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { KeyFigures } from "@/components/KeyFigures";
import { OpenToCard } from "@/components/OpenToCard";
import { techItems, techTypeLabels, TechType, techIntro } from "@/data/tech";
import { cx, formatDate } from "@/lib/utils";

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

// How many items the list shows before the "load more" button.
const INITIAL_COUNT = 3;

export default function TechPage() {
  const [tab, setTab] = useState<TechType | "all">("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    return techItems
      .filter((item) => (tab === "all" ? true : item.type === tab))
      .filter((item) =>
        query ? (item.title + item.summary).toLowerCase().includes(query.toLowerCase()) : true
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [tab, query]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = !showAll && filtered.length > INITIAL_COUNT;

  // Changing the tab starts again from the first 3 items.
  const selectTab = (id: TechType | "all") => {
    setTab(id);
    setShowAll(false);
  };

  return (
    <div className="max-w-3xl">
      {/* Speech */}
      <h1 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
        aye, i&apos;m Mandengue
      </h1>
      <div className="mt-4 flex max-w-2xl flex-col gap-4 text-foreground/80">
        {techIntro.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="mt-6 flex max-w-2xl flex-col gap-4 text-foreground/80">
        {techIntro.consulting.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      {/* Resume button, then the key figures */}
      <Link
        href="/resume"
        className="mt-8 inline-flex items-center rounded-full border border-accent bg-accent px-4 py-2 font-mono text-xs text-background transition-opacity hover:opacity-90"
      >
        Resume
      </Link>
      <div className="mt-10">
        <KeyFigures />
      </div>



      {/* Work: intro, search, tabs, list */}
      <p className="mt-16 max-w-2xl text-foreground/80">{techIntro.work}</p>

      <div className="mt-10 flex flex-col gap-4">
        {/* Same look as the navbar: mono links separated by "/", active one underlined */}
        <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {TABS.map((t, i) => (
            <li key={t.id} className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => selectTab(t.id)}
                aria-pressed={tab === t.id}
                className={cx(
                  "cursor-pointer transition-colors hover:text-foreground",
                  tab === t.id && "text-foreground underline underline-offset-4"
                )}
              >
                {t.label}
              </button>
              {i < TABS.length - 1 && <span className="text-border">/</span>}
            </li>
          ))}
        </ul>
      </div>
      

      <div className="flex flex-col divide-y divide-border">
        {visible.map((item) => {
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

      {hasMore && (
        // Same typography as the navbar links
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-6 cursor-pointer font-mono text-xs text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          load more
        </button>
      )}

            {/* Contact card */}
      <div className="mt-12">
        <OpenToCard />
      </div>
    </div>
  );
}
