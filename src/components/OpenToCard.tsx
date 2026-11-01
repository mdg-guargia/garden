import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import { profile } from "@/data/profile";

// Contact banner (no card): a small "open to…" line, the big headline under
// it, and on the far right the email address with a round dark button that
// opens a new mail. Texts live in `profile.openTo`, the address in
// `profile.email` (src/data/profile.ts). The headline uses the `font-display`
// face (Instrument Serif) defined in globals.css; words between *asterisks*
// in `pitch` are set in italic.
//
// `links` is optional: when given (only /resume does), each link is stacked
// in a column right under the email — the link in plain text plus a round
// button in the inverse colors (light with a dark outline).
export function OpenToCard({ links }: { links?: { label: string; href: string }[] }) {
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

      <div className="flex flex-col items-start gap-3 sm:items-end">
        <ContactRow
          text={email}
          href={`mailto:${email}`}
          label={`Send an email to ${email}`}
        />
        {links?.map((l) => (
          <ContactRow
            key={l.label}
            text={l.href.replace(/^https?:\/\/(www\.)?/, "")}
            href={l.href}
            label={`Open ${l.label}`}
            inverse
            external
          />
        ))}
      </div>
    </section>
  );
}

// The text (email or link in plain text) followed by a round arrow button.
// The email's button is dark; `inverse` makes the others light with a dark
// outline, and they fill in on hover.
function ContactRow({
  text,
  href,
  label,
  inverse = false,
  external = false,
}: {
  text: string;
  href: string;
  label: string;
  inverse?: boolean;
  external?: boolean;
}) {
  const newTab = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <div className="flex items-center gap-3">
      <a
        href={href}
        {...newTab}
        className="font-mono text-sm text-foreground underline-offset-4 hover:underline"
      >
        {text}
      </a>
      <a
        href={href}
        {...newTab}
        aria-label={label}
        className={
          inverse
            ? "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#151413] bg-background text-[#151413] transition-colors hover:bg-[#151413] hover:text-background"
            : "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#151413] text-background transition-colors hover:bg-accent"
        }
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
  );
}
