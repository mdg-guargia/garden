import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SiteShell } from "@/components/SiteShell";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell>
      <Nav />
      <main className="mx-auto w-full max-w-(--site-w) flex-1 px-6 py-16 sm:px-10">
        {children}
      </main>
      <Footer />
    </SiteShell>
  );
}
