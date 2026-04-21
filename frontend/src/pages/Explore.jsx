import { PageNavbar } from "../components/PageNavbar";
import { ProviderBar } from "../components/ProviderBar";
import { DiscoveryPage } from "../components/DiscoveryPage";
import { explorePageData } from "../data/discoveryPages";

export default function Explore() {
  return (
    <>
      <PageNavbar currentPath="/explore" />
      <ProviderBar />
      <DiscoveryPage data={explorePageData} section="explore" />
    </>
  );
}
