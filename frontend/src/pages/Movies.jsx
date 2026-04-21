import { PageNavbar } from "../components/PageNavbar";
import { ProviderBar } from "../components/ProviderBar";
import { DiscoveryPage } from "../components/DiscoveryPage";
import { moviesPageData } from "../data/discoveryPages";

export default function Movies() {
  return (
    <>
      <PageNavbar currentPath="/movies" />
      <ProviderBar />
      <DiscoveryPage data={moviesPageData} section="movies" />
    </>
  );
}
