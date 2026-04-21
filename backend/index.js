const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {
  listTitles,
  getTitleDetails,
  searchTitles,
} = require("./services/watchmode");
const {
  toPosterCard,
  toDiscoveryCard,
  toFeaturedCard,
} = require("./services/metadata");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

async function hydrateTitles(titleList = [], limit = 8) {
  const slicedTitles = titleList.slice(0, limit);

  const details = await Promise.all(
    slicedTitles.map(async (title) => {
      try {
        return await getTitleDetails(title.id);
      } catch (error) {
        return {
          id: title.id,
          title: title.title,
          type: title.type,
          year: title.year,
          sources: [],
          genre_names: [],
          plot_overview: "",
        };
      }
    }),
  );

  return details.filter(Boolean);
}

async function buildDiscoveryResponse(section) {
  const sectionConfig = {
    movies: {
      eyebrow: "Movies",
      title: "Discover trending films, new arrivals, and worth-the-hype picks",
      description:
        "A modern movie discovery page with featured posters, genre rails, and platform-aware recommendations powered by Watchmode.",
      filters: ["Trending", "New Releases", "Top Rated", "Action", "Drama", "Sci-Fi"],
      insights: [
        { label: "Most Active Genre", value: "Movie Discovery" },
        { label: "Best Platform Mix", value: "US Streaming" },
        { label: "Updated Window", value: "Live" },
      ],
      primaryTypes: "movie",
      featuredLabel: "Featured Movie",
      shelves: [
        {
          title: "Popular Right Now",
          description: "High-momentum films people are watching this week.",
          sortBy: "popularity_desc",
          tag: "Popular",
        },
        {
          title: "Worth Adding Next",
          description: "A second shelf for new releases and sleeper picks.",
          sortBy: "release_date_desc",
          tag: "Fresh",
        },
      ],
    },
    "tv-shows": {
      eyebrow: "TV Shows",
      title: "Track series momentum across binge-worthy dramas, comedies, and new episodes",
      description:
        "A streaming-style TV browse page with live Watchmode-backed titles ready to power your frontend.",
      filters: ["Trending", "New Episodes", "Drama", "Comedy", "Sci-Fi", "Binge Worthy"],
      insights: [
        { label: "Fastest Climber", value: "TV Momentum" },
        { label: "Top Platform Mix", value: "US Streaming" },
        { label: "Watch Window", value: "Live" },
      ],
      primaryTypes: "tv_series",
      featuredLabel: "Featured Series",
      shelves: [
        {
          title: "Series Everyone Is Starting",
          description: "Fast-rising shows with strong watch momentum.",
          sortBy: "popularity_desc",
          tag: "Trending",
        },
        {
          title: "Fresh Episodes This Week",
          description: "A dedicated row for weekly TV momentum and returning titles.",
          sortBy: "release_date_desc",
          tag: "Fresh Episodes",
        },
      ],
    },
    explore: {
      eyebrow: "Explore What's New",
      title: "Browse what just landed, what is climbing, and what deserves a closer look",
      description:
        "A mixed discovery board that blends movies and TV into a more editorial streaming experience using live Watchmode results.",
      filters: ["Just Added", "Fresh Buzz", "Movies", "Series", "Critics Pick", "Underrated"],
      insights: [
        { label: "Newest Wave", value: "Cross-Platform" },
        { label: "Best Discovery Mix", value: "Movies + Series" },
        { label: "Editorial Focus", value: "Fresh Buzz" },
      ],
      primaryTypes: "movie,tv_series",
      featuredLabel: "Fresh Discovery",
      shelves: [
        {
          title: "Just Added",
          description: "Titles that recently appeared on major streaming services.",
          sortBy: "release_date_desc",
          tag: "Just Added",
        },
        {
          title: "Worth Exploring",
          description: "A more editorial row for hidden gems and breakout titles.",
          sortBy: "popularity_desc",
          tag: "Trending",
        },
      ],
    },
  }[section];

  if (!sectionConfig) {
    return null;
  }

  const featuredList = await listTitles({
    types: sectionConfig.primaryTypes,
    limit: 1,
    sortBy: "popularity_desc",
  });
  const [featuredDetails] = await hydrateTitles(featuredList, 1);

  const shelves = await Promise.all(
    sectionConfig.shelves.map(async (shelf) => {
      const titles = await listTitles({
        types: sectionConfig.primaryTypes,
        limit: 4,
        sortBy: shelf.sortBy,
      });
      const hydrated = await hydrateTitles(titles, 4);

      return {
        title: shelf.title,
        description: shelf.description,
        items: hydrated.map((details) => toDiscoveryCard(details, shelf.tag)),
      };
    }),
  );

  return {
    eyebrow: sectionConfig.eyebrow,
    title: sectionConfig.title,
    description: sectionConfig.description,
    filters: sectionConfig.filters,
    insights: sectionConfig.insights,
    featured: toFeaturedCard(featuredDetails || {}, sectionConfig.featuredLabel),
    shelves,
  };
}

app.get("/api/health", (request, response) => {
  response.json({
    ok: true,
    service: "StreamTrendr backend",
    watchmodeConfigured: Boolean(process.env.WATCHMODE_API_KEY),
  });
});

app.get("/api/trending", async (request, response) => {
  const requestedType = request.query.type || "all";
  const limit = Number(request.query.limit) || 8;
  const types =
    requestedType === "movie"
      ? "movie"
      : requestedType === "tv"
        ? "tv_series"
        : "movie,tv_series";

  try {
    const titles = await listTitles({
      types,
      limit,
      sortBy: "popularity_desc",
    });
    const details = await hydrateTitles(titles, limit);

    response.json({
      items: details.map((item, index) => toPosterCard(item, index)),
    });
  } catch (error) {
    response.status(500).json({
      error: error.message || "Unable to fetch trending titles.",
    });
  }
});

app.get("/api/discovery/:section", async (request, response) => {
  try {
    const payload = await buildDiscoveryResponse(request.params.section);

    if (!payload) {
      response.status(404).json({ error: "Unknown discovery section." });
      return;
    }

    response.json(payload);
  } catch (error) {
    response.status(500).json({
      error: error.message || "Unable to build discovery page data.",
    });
  }
});

app.get("/api/search", async (request, response) => {
  const query = String(request.query.q || "").trim();

  if (!query) {
    response.json({ items: [] });
    return;
  }

  try {
    const results = await searchTitles(query);
    response.json({ items: results.slice(0, 8) });
  } catch (error) {
    response.status(500).json({
      error: error.message || "Unable to search titles.",
    });
  }
});

app.listen(port, () => {
  console.log(`StreamTrendr backend listening on http://localhost:${port}`);
});
