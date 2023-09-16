import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import PlayerNews from "@/components/player-news";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Players of the Week
          <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground"></p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.premierleague}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Premier League
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {/* Starting News Sections with cards that show article title and thumbnail - Jordan */}
          News
        </h2>
        <div className="flex w-full flex-col items-start gap-2">
          <PlayerNews />
        </div>
      </div>
    </section>
  );
}
