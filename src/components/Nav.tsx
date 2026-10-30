"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/utils";
import { profile } from "@/data/profile";

const sectionLinks = [
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/skills", label: "skills" },
  { href: "/tech", label: "tech" },
  { href: "/photo", label: "photo" },
  { href: "/bike", label: "bike" },
  { href: "/fpv", label: "fpv" },
  { href: "/working-on", label: "building" },
  { href: "/life", label: "life" },
  { href: "/contact", label: "contact" },
];

const socials = [
  { label: "linkedin", href: profile.linkedin },
  { label: "github", href: profile.github },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/70 bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-8 sm:px-10">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-accent"
        >
          {profile.initials ?? "MN"}
        </Link>
        <ul className="flex items-center gap-6 font-mono text-xs text-foreground">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="underline-offset-4 hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav className="mx-auto max-w-5xl px-6 pb-4 pt-3 sm:px-10">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {sectionLinks.map((link, i) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className={cx(
                    "transition-colors hover:text-foreground",
                    active && "text-foreground underline underline-offset-4"
                  )}
                >
                  {link.label}
                </Link>
                {i < sectionLinks.length - 1 && (
                  <span className="text-border">/</span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
