import { profile } from "@/data/profile";

// "Open to…" card: tells visitors what you're looking for and gives them a
// one-click way to email you. Text lives in `profile.openTo`, the address in
// `profile.email` (src/data/profile.ts).
export function OpenToCard() {
  const { openTo, email } = profile;

  return (
    <section
      aria-label="Contact"
      className="rounded-2xl border border-border bg-background-alt px-5 py-5 sm:px-6"
    >
      <p className="flex items-start gap-2 font-mono text-xs leading-relaxed text-muted">
        <span
          className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-accent"
          aria-hidden
        />
        {openTo.roles}
      </p>
      <p className="mt-3 font-serif text-2xl tracking-tight text-foreground">
        {openTo.pitch}
      </p>
      <p className="mt-2 font-mono text-xs text-muted">
        {openTo.location} · {openTo.mobility}
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-5 inline-flex items-center rounded-full border border-accent bg-accent px-4 py-2 font-mono text-xs text-background transition-opacity hover:opacity-90"
      >
        Email me
      </a>
    </section>
  );
}
