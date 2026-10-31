import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import { profile } from "@/data/profile";

// Contact banner (no card): a small "open to…" line, the big headline under
// it, and on the far right the email address with a round dark button that
// opens a new mail. Texts live in `profile.openTo`, the address in
// `profile.email` (src/data/profile.ts). The headline uses the `font-display`
// face (Instrument Serif) defined in globals.css; words between *asterisks*
// in `pitch` are set in italic.
export function OpenToCard() {
  const { openTo, email } = profile;
  const pitchParts = openTo.pitch.split("*");

  return (
    <section
      aria-label="Contact"
      className="grid items-end gap-8 sm:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div>
        <p className="text-xs leading-relaxed text-muted">
          {openTo.roles}
        </p>
        <p className="mt-5 font-display text-6xl leading-[0.9] tracking-[-0.03em] text-foreground sm:text-7xl">
          {pitchParts.map((part, i) =>
            i % 2 === 1 ? (
              <em key={i} className="italic">
                {part}
              </em>
            ) : (
              part
            )
          )}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={`mailto:${email}`}
          className="font-mono text-sm text-foreground underline-offset-4 hover:underline"
        >
          {email}
        </a>
        <a
          href={`mailto:${email}`}
          aria-label={`Send an email to ${email}`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#151413] text-background transition-colors hover:bg-accent"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
