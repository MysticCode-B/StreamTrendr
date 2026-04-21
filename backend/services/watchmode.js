const { WatchmodeClient } = require("@watchmode/api-client");

const DEFAULT_REGION = "US";

let client;

function getWatchmodeClient() {
  if (!process.env.WATCHMODE_API_KEY) {
    throw new Error("WATCHMODE_API_KEY is not configured.");
  }

  if (!client) {
    client = new WatchmodeClient({
      apiKey: process.env.WATCHMODE_API_KEY,
      fetch: global.fetch,
    });
  }

  return client;
}

async function listTitles({
  types,
  limit = 12,
  page = 1,
  sortBy = "popularity_desc",
  releaseDateStart,
  releaseDateEnd,
}) {
  const watchmode = getWatchmodeClient();

  const { data, error } = await watchmode.title.list({
    types,
    regions: DEFAULT_REGION,
    sourceTypes: "sub,free",
    sortBy,
    page,
    limit,
    releaseDateStart,
    releaseDateEnd,
  });

  if (error) {
    throw new Error(error.message || "Unable to list Watchmode titles.");
  }

  return data?.titles || data || [];
}

async function getTitleDetails(titleId) {
  const watchmode = getWatchmodeClient();

  const { data, error } = await watchmode.title.getDetails(String(titleId), {
    appendToResponse: "sources",
    regions: DEFAULT_REGION,
  });

  if (error) {
    throw new Error(error.message || "Unable to load Watchmode title details.");
  }

  return data;
}

async function searchTitles(query) {
  const watchmode = getWatchmodeClient();
  const { data, error } = await watchmode.search.byName(query);

  if (error) {
    throw new Error(error.message || "Unable to search Watchmode titles.");
  }

  return data?.title_results || [];
}

module.exports = {
  DEFAULT_REGION,
  getWatchmodeClient,
  listTitles,
  getTitleDetails,
  searchTitles,
};
