import { skillIcons } from "@/data/skill-icons";

// Generic glyphs for skills without a brand logo, picked by category.
const GLYPHS: Record<string, string> = {
  // shield
  Cybersecurity: "M12 3 5 6v5c0 4.2 2.9 8 7 9 4.1-1 7-4.8 7-9V6l-7-3Z",
  // three linked nodes
  "OT / IoT / Industry 4.0":
    "M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 8v3m0 0-6 4m6-4 6 4",
};

// A pill with the tool's logo (or a generic glyph) and its name.
export function SkillChip({ label, category }: { label: string; category: string }) {
  const brand = skillIcons[label];
  const glyph = GLYPHS[category];

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-vivid">
      {brand ? (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden="true"
          className="shrink-0"
          fill={`#${brand.hex}`}
        >
          <path d={brand.path} />
        </svg>
      ) : glyph ? (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden="true"
          className="shrink-0 text-vivid-ink"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={glyph} />
        </svg>
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-vivid" aria-hidden />
      )}
      {label}
    </span>
  );
}
