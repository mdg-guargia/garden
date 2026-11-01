import Link from "next/link";
import { sections } from "@/data/sections";
import { HomeLayout } from "@/components/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      {sections.map((s) => (
        <p key={s.id}>
          {s.lead}
          <Link href={s.href} className="underline-link">
            {s.linkLabel}
          </Link>
          {s.trail}
          {s.follow && (
            <>
              {" "}
              <Link href={s.follow.href} className="underline-link">
              <br />
                {s.follow.linkLabel}
              </Link>
            </>
          )}
        </p>
      ))}
    </HomeLayout>
  );
}
