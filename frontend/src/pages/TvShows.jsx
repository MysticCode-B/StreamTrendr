import { PageNavbar } from "../components/PageNavbar";
import { ProviderBar } from "../components/ProviderBar";
import { DiscoveryPage } from "../components/DiscoveryPage";
import { tvShowsPageData } from "../data/discoveryPages";

export default function TvShows() {
  return (
    <>
      <PageNavbar currentPath="/tv-shows" />
      <ProviderBar />
      <DiscoveryPage data={tvShowsPageData} />
    </>
  );
}
