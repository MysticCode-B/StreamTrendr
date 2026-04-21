import { useEffect, useRef, useState } from "react";
import { fetchSearchResults } from "../lib/api";

const navigationLinks = [
  { label: "Home", href: "#/" },
  { label: "Movies", href: "#/movies" },
  { label: "TV Shows", href: "#/tv-shows" },
  { label: "Explore What's New", href: "#/explore" },
];

const accountLinks = ["Login", "Sign Up"];

export const PageNavbar = ({ currentPath = "/" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const blurTimeoutRef = useRef(null);

  const isActiveLink = (href) => {
    const routePath = href.replace("#", "");

    if (routePath === "/") {
      return currentPath === "/";
    }

    return currentPath === routePath || currentPath.startsWith(`${routePath}/`);
  };

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsSearching(true);

      fetchSearchResults(searchQuery.trim())
        .then((payload) => {
          setSearchResults(payload?.items || []);
          setIsSearchOpen(true);
        })
        .catch(() => {
          setSearchResults([]);
          setIsSearchOpen(true);
        })
        .finally(() => {
          setIsSearching(false);
        });
    }, 320);

    return () => window.clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleResultClick = (result) => {
    const isMovie = result?.type === "movie";
    window.location.hash = isMovie ? "/movies/all" : "/tv-shows/all";
    setIsSearchOpen(false);
  };

  return (
    <nav className="top-navigation">
      <div className="top-navigation__brand-group">
        <a href="#/" className="top-navigation__brand">
          StreamTrendr
        </a>
      </div>

      <div className="top-navigation__search">
        <input
          type="text"
          placeholder="Search..."
          className="top-navigation__search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onFocus={() => {
            if (blurTimeoutRef.current) {
              window.clearTimeout(blurTimeoutRef.current);
            }

            if (searchQuery.trim().length >= 2 || searchResults.length > 0) {
              setIsSearchOpen(true);
            }
          }}
          onBlur={() => {
            blurTimeoutRef.current = window.setTimeout(() => {
              setIsSearchOpen(false);
            }, 180);
          }}
        />

        {isSearchOpen ? (
          <div className="top-navigation__search-panel">
            {isSearching ? (
              <div className="top-navigation__search-message">Searching Watchmode...</div>
            ) : searchQuery.trim().length < 2 ? (
              <div className="top-navigation__search-message">
                Type at least 2 characters to search.
              </div>
            ) : searchResults.length === 0 ? (
              <div className="top-navigation__search-message">No results found.</div>
            ) : (
              <div className="top-navigation__search-results">
                {searchResults.map((result) => (
                  <button
                    key={`${result.id}-${result.type}`}
                    type="button"
                    className="top-navigation__search-result"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="top-navigation__search-result-text">
                      <span className="top-navigation__search-result-title">
                        {result.title}
                      </span>
                      <span className="top-navigation__search-result-meta">
                        {[result.type === "movie" ? "Movie" : "TV Show", result.year]
                          .filter(Boolean)
                          .join(" • ")}
                      </span>
                    </div>
                    <span className="top-navigation__search-result-action">
                      Open
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div className="top-navigation__links" aria-label="Primary navigation">
        {navigationLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`top-navigation__link${
              isActiveLink(link.href) ? " top-navigation__link--active" : ""
            }`}
          >
            {link.label}
          </a>
        ))}

        {accountLinks.map((linkLabel) => (
          <span
            key={linkLabel}
            className="top-navigation__link top-navigation__link--accent"
          >
            {linkLabel}
          </span>
        ))}
      </div>
    </nav>
  );
};
