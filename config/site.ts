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
      title: "Rules",
      href:"/rules"
    }, 
   
    {
        title: "Players",
        href: "/players"
    },
    {
      title: "Dream Team",
      href: "/dreamteam"
    },
  ],
  links: {
    // twitter: "https://twitter.com/shadcn",
    github: "https://github.com/myr124/fpl-app",
    docs: "https://ui.shadcn.com",
    premierleague: "https://fantasy.premierleague.com/"
  },
}