import { PageNavbar } from "../components/PageNavbar";
import { ProviderBar } from "../components/ProviderBar";
import { CatalogPage } from "../components/CatalogPage";
import { moviesPageData } from "../data/discoveryPages";

const fallbackData = {
  eyebrow: "All Movies",
  title: "Browse up to 250 trending, new, and popular movies",
  description:
    "A full grid of movie titles blending trending, new release, and popular results.",
  filters: moviesPageData.filters,
  items: moviesPageData.shelves.flatMap((shelf) => shelf.items),
};

export default function MoviesAll() {
  return (
    <>
      <PageNavbar currentPath="/movies/all" />
      <ProviderBar />
      <CatalogPage fallbackData={fallbackData} section="movies" />
    </>
  );
}
