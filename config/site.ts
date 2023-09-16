export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "FPL Predictor",
  description:
    "FPL Prediction App that uses ML to build a dream team",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
        title: "Dream Team",
        href: "/dreamteam"
    },
    {
        title: "Players",
        href: "/players"
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/myr124/fpl-app",
    docs: "https://ui.shadcn.com",
    premierleague: "https://www.premierleague.com/"
  },
}