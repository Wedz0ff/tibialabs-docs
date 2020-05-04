module.exports = {
  theme: "yuu",
  title: "TibiaLabs API",
  description: "Documentation for TibiaLabs API",
  head: [["link", { rel: "shortcut icon", href: "/assets/favicon.png" }]],
  themeConfig: {
    yuu: {
      disableThemeIgnore: true,
      defaultColorTheme: "red",
    },
    lastUpdated: true,
    nav: [
      { text: "Home", link: "/" },
      // { text: "Support us", link: "/donate" },
    ],
    sidebar: [
      {
        title: "Getting Started",
        path: "/guide/",
        collapsable: false,
        children: [],
      },
      {
        title: "Character",
        path: "#",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["/character/informations", "Informations"],
          ["/character/partytracker", "Party Tracker"],
          ["/character/topxp", "Top Experience"],
          ["/character/worstxp", "Worst Experience"],
        ],
      },
      {
        title: "Guild",
        path: "#",
        collapsable: false,
        children: [["/guild/informations", "Informations"]],
      },
      {
        title: "World",
        path: "#",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["/world/informations", "Informations"],
          ["/world/highscores", "Highscores"],
        ],
      },
      {
        title: "Miscellaneous",
        path: "#",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["/misc/boostedcreature", "Boosted Creature"],
          ["/misc/dreamscar", "Dream Scar Boss"],
          ["/misc/rashid", "Rashid"],
        ],
      },
    ],
  },
};
