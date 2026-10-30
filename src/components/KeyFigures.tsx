import { techStats } from "@/data/tech";

// Big numbers, one per column. Values and labels live in `techStats`
// (src/data/tech.ts).
export function KeyFigures() {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-5">
      {techStats.map((s) => (
        // dt (label) comes first in the DOM for screen readers, but the
        // number is shown on top.
        <div key={s.label} className="flex flex-col-reverse">
          <dt className="mt-1 font-mono text-xs leading-snug text-muted">{s.label}</dt>
          <dd className="font-serif text-4xl tracking-tight text-accent sm:text-5xl">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
