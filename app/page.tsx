import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import PlayerNews from "@/components/player-news";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
      <div className="flex flex-row items-start gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            What is FPL?
            <br className="hidden sm:inline" />
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            In Fantasy Premier League (FPL), participants assemble a squad of
            real Premier League players while staying within a predefined
            budget. The objective is to build a team that accumulates the most
            points over the course of the Premier League season. Points are
            earned based on the real-life performances of selected players in
            Premier League matches.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            How do we help?
            <br className="hidden sm:inline" />
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            At FPL Predictor, we are passionate FPL enthusiasts who eat, sleep,
            and breathe football statistics. Our mission is simple: to help you
            dominate your FPL league by providing you with the most accurate,
            data-driven predictions and expert analysis.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Get started ➤
          <br className="hidden sm:inline" />
        </h1>
        {/* <Link
          href={siteConfig.links.premierleague}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({size:{lg:""}}}
        >
          Premier League
        </Link> */}
        <Button size="icon">
          <Link
            href={siteConfig.links.premierleague}
            target="_blank"
            rel="noreferrer"
          >
            <img src="/epl-premierleague-logo.svg" className="h-6 w-6" />
          </Link>
        </Button>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {/* Starting News Sections with cards that show article title and thumbnail - Jordan */}
          Current News
        </h2>
        <div className="flex w-full flex-col items-start gap-2">
          <PlayerNews />
        </div>
      </div>
    </section>
  );
}
