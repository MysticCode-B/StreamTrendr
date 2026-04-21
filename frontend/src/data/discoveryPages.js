export const moviesPageData = {
  eyebrow: "Movies",
  title: "Discover trending films, new arrivals, and worth-the-hype picks",
  description:
    "A modern movie discovery page with featured posters, genre rails, and platform-aware recommendations ready for your future API data.",
  featured: {
    label: "Featured Movie",
    title: "Afterlight Signal",
    provider: "Netflix",
    meta: "Sci-Fi Thriller • 2026",
    summary:
      "A poster-led spotlight area for the one movie you want to push hardest on the page.",
  },
  shelves: [
    {
      title: "Popular Right Now",
      description: "High-momentum films people are watching this week.",
      items: [
        { id: "m-1", title: "Solar Divide", provider: "Netflix", tag: "Popular" },
        { id: "m-2", title: "Velvet Run", provider: "Max", tag: "Action" },
        { id: "m-3", title: "Drift Code", provider: "Prime Video", tag: "Top Rated" },
        { id: "m-4", title: "Glass Current", provider: "Apple TV+", tag: "Fresh" },
      ],
    },
    {
      title: "Worth Adding Next",
      description: "A second shelf for new releases and sleeper picks.",
      items: [
        { id: "m-5", title: "Echo Season", provider: "Hulu", tag: "New" },
        { id: "m-6", title: "Blue Meridian", provider: "Disney+", tag: "Adventure" },
        { id: "m-7", title: "Redline Memory", provider: "Peacock", tag: "Thriller" },
        { id: "m-8", title: "Midnight Harbor", provider: "Paramount+", tag: "Drama" },
      ],
    },
  ],
};

export const tvShowsPageData = {
  eyebrow: "TV Shows",
  title: "Track series momentum across binge-worthy dramas, comedies, and new episodes",
  description:
    "This page is structured like a streaming discovery hub, with a featured show, curated rails, and clear poster slots for episodic content.",
  featured: {
    label: "Featured Series",
    title: "Harbor State",
    provider: "Hulu",
    meta: "Crime Drama • Season 2",
    summary:
      "Use this spotlight area for the series you want to push as the main homepage-quality recommendation.",
  },
  shelves: [
    {
      title: "Series Everyone Is Starting",
      description: "Fast-rising shows with strong watch momentum.",
      items: [
        { id: "t-1", title: "Neon Harbor", provider: "Hulu", tag: "Trending" },
        { id: "t-2", title: "Sunline", provider: "Disney+", tag: "Fan Favorite" },
        { id: "t-3", title: "Pulse Effect", provider: "Max", tag: "Must Watch" },
        { id: "t-4", title: "Open Circuit", provider: "Netflix", tag: "New Episodes" },
      ],
    },
    {
      title: "Fresh Episodes This Week",
      description: "A dedicated row for weekly TV momentum and returning titles.",
      items: [
        { id: "t-5", title: "Stillwater Files", provider: "Peacock", tag: "Fresh Episodes" },
        { id: "t-6", title: "Silver Hours", provider: "Apple TV+", tag: "Drama" },
        { id: "t-7", title: "Atlas Point", provider: "Paramount+", tag: "Sci-Fi" },
        { id: "t-8", title: "Northbound", provider: "Prime Video", tag: "Binge Now" },
      ],
    },
  ],
};

export const explorePageData = {
  eyebrow: "Explore What's New",
  title: "Browse what just landed, what is climbing, and what deserves a closer look",
  description:
    "This page is built as a discovery board for mixed content, combining movies and TV with a more editorial streaming feel.",
  featured: {
    label: "Fresh Discovery",
    title: "Current Wave",
    provider: "Across Platforms",
    meta: "Mixed Discovery Feed",
    summary:
      "Use this surface for the newest arrivals, editorial collections, or the strongest API-curated recommendation of the day.",
  },
  shelves: [
    {
      title: "Just Added",
      description: "Titles that recently appeared on major streaming services.",
      items: [
        { id: "e-1", title: "Golden Static", provider: "Netflix", tag: "Movie" },
        { id: "e-2", title: "Night Bloom", provider: "Disney+", tag: "Series" },
        { id: "e-3", title: "Field Notes", provider: "Apple TV+", tag: "Movie" },
        { id: "e-4", title: "Signal Coast", provider: "Max", tag: "Series" },
      ],
    },
    {
      title: "Worth Exploring",
      description: "A more editorial row for hidden gems and breakout titles.",
      items: [
        { id: "e-5", title: "Open Sky", provider: "Prime Video", tag: "Critics Pick" },
        { id: "e-6", title: "Dark Lantern", provider: "Hulu", tag: "Breakout" },
        { id: "e-7", title: "The Last Dial", provider: "Peacock", tag: "Underrated" },
        { id: "e-8", title: "Mariner", provider: "Paramount+", tag: "New Buzz" },
      ],
    },
  ],
};
