import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 font-mono text-xs uppercase tracking-widest text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>{profile.siteTagline}</span>
        <span className="normal-case tracking-normal text-muted/80">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="flex items-center gap-2 normal-case tracking-normal">
          <span
            className="h-2 w-2 rounded-full bg-accent"
            aria-hidden
          />
          {profile.availability}
        </span>
      </div>
    </footer>
  );
}
