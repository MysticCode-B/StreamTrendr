import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Explore from "./pages/Explore";

const getHashPath = () => {
  const hash = window.location.hash.replace("#", "");
  return hash || "/";
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(getHashPath);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getHashPath());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const routes = {
    "/": <Home />,
    "/movies": <Movies />,
    "/tv-shows": <TvShows />,
    "/explore": <Explore />,
  };

  return (
    <div className="app-shell">
      {routes[currentPath] ?? <Home />}
    </div>
  );
}
