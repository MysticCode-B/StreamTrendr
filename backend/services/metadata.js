function getDisplayType(type) {
  if (type === "movie") {
    return "Movie";
  }

  return "TV Show";
}

function getPosterLabel(type) {
  return type === "movie" ? "Movie Poster" : "TV Show Poster";
}

function pickPrimarySource(sources = []) {
  if (!Array.isArray(sources) || sources.length === 0) {
    return "Streaming Soon";
  }

  const preferredSource = sources.find((source) => source.type === "sub");
  return preferredSource?.name || sources[0]?.name || "Streaming Soon";
}

function summarizeTitle(details) {
  if (details?.plot_overview) {
    return details.plot_overview;
  }

  if (details?.genre_names?.length) {
    return `${details.genre_names.slice(0, 2).join(" • ")} title ready for your Watchmode-powered layout.`;
  }

  return "Watchmode-backed title ready to display in StreamTrendr.";
}

function toPosterCard(details, index = 0) {
  return {
    id: details?.id,
    title: details?.title || "Untitled",
    type: getDisplayType(details?.type),
    year: String(details?.year || ""),
    rank: `#${index + 1} Trending`,
    provider: pickPrimarySource(details?.sources),
    posterLabel: getPosterLabel(details?.type),
    summary: summarizeTitle(details),
    poster: details?.poster || "",
    backdrop: details?.backdrop || "",
    userRating: details?.user_rating ?? null,
    criticScore: details?.critic_score ?? null,
    genreNames: details?.genre_names || [],
  };
}

function toDiscoveryCard(details, fallbackTag) {
  return {
    id: String(details?.id),
    title: details?.title || "Untitled",
    provider: pickPrimarySource(details?.sources),
    tag: fallbackTag,
    poster: details?.poster || "",
    type: getDisplayType(details?.type),
    year: details?.year ? String(details.year) : "",
    userRating: details?.user_rating ?? null,
    genreNames: details?.genre_names || [],
  };
}

function toFeaturedCard(details, label) {
  const genreText = details?.genre_names?.slice(0, 2).join(" • ");
  const metaParts = [genreText, details?.year].filter(Boolean);

  return {
    label,
    title: details?.title || "Untitled",
    provider: pickPrimarySource(details?.sources),
    meta: metaParts.join(" • "),
    summary: summarizeTitle(details),
    poster: details?.poster || "",
    backdrop: details?.backdrop || "",
  };
}

module.exports = {
  toPosterCard,
  toDiscoveryCard,
  toFeaturedCard,
  pickPrimarySource,
};
