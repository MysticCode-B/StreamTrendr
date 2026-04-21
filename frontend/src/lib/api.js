const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

async function readJson(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchTrendingTitles(type = "all", limit = 8) {
  return readJson(`/api/trending?type=${type}&limit=${limit}`);
}

export async function fetchDiscoveryPage(section) {
  return readJson(`/api/discovery/${section}`);
}

export async function fetchCatalogPage(section, limit = 32) {
  return readJson(`/api/catalog/${section}?limit=${limit}`);
}
