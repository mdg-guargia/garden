"use client";

import { usePathname } from "next/navigation";

// Pages that use more of the screen than the default 64rem (max-w-5xl):
// /resume and the four main sections, so they all take the same space.
// The nav, the page and the footer all read the same `--site-w` variable, so
// they stay aligned with each other. Add a path here to widen another page.
const WIDE_PAGES = ["/resume", "/tech", "/photo", "/bike", "/fpv"];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wide = WIDE_PAGES.includes(pathname);

  return (
    <div
      className="flex min-h-full flex-col"
      style={{ "--site-w": wide ? "84rem" : "64rem" } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
