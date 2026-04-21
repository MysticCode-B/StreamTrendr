import { PageNavbar } from "../components/PageNavbar";
import { ProviderBar } from "../components/ProviderBar";
import { CatalogPage } from "../components/CatalogPage";
import { tvShowsPageData } from "../data/discoveryPages";

const fallbackData = {
  eyebrow: "All TV Shows",
  title: "Browse all TV show results",
  description: "A full grid of TV titles with filter chips and poster cards.",
  filters: tvShowsPageData.filters,
  items: tvShowsPageData.shelves.flatMap((shelf) => shelf.items),
};

export default function TvShowsAll() {
  return (
    <>
      <PageNavbar currentPath="/tv-shows/all" />
      <ProviderBar />
      <CatalogPage fallbackData={fallbackData} section="tv-shows" />
    </>
  );
}
