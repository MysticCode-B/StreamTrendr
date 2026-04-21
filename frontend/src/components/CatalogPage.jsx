import { useEffect, useMemo, useState } from "react";
import { fetchCatalogPage } from "../lib/api";

function matchesFilter(item, filterLabel) {
  if (filterLabel === "All") {
    return true;
  }

  const normalizedFilter = filterLabel.toLowerCase();
  const normalizedTitle = item.title?.toLowerCase() || "";
  const normalizedProvider = item.provider?.toLowerCase() || "";
  const normalizedTag = item.tag?.toLowerCase() || "";
  const normalizedType = item.type?.toLowerCase() || "";
  const normalizedGenres = Array.isArray(item.genreNames)
    ? item.genreNames.map((genre) => genre.toLowerCase())
    : [];

  if (
    normalizedTitle.includes(normalizedFilter) ||
    normalizedProvider.includes(normalizedFilter) ||
    normalizedTag.includes(normalizedFilter) ||
    normalizedType.includes(normalizedFilter) ||
    normalizedGenres.some((genre) => genre.includes(normalizedFilter))
  ) {
    return true;
  }

  if (normalizedFilter === "top rated" || normalizedFilter === "critics pick") {
    return Number(item.userRating) >= 7;
  }

  if (normalizedFilter === "movies") {
    return normalizedType.includes("movie");
  }

  if (normalizedFilter === "series" || normalizedFilter === "tv shows") {
    return normalizedType.includes("tv");
  }

  if (
    normalizedFilter === "new releases" ||
    normalizedFilter === "new episodes" ||
    normalizedFilter === "just added" ||
    normalizedFilter === "fresh buzz"
  ) {
    return (
      normalizedTag.includes("fresh") ||
      normalizedTag.includes("new") ||
      normalizedTag.includes("added")
    );
  }

  if (normalizedFilter === "binge worthy") {
    return normalizedTag.includes("binge");
  }

  return false;
}

export const CatalogPage = ({ fallbackData, section }) => {
  const [pageData, setPageData] = useState(fallbackData);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    let isActive = true;

    fetchCatalogPage(section)
      .then((payload) => {
        if (!isActive || !payload) {
          return;
        }

        setPageData(payload);
      })
      .catch(() => {
        // Keep fallback content if backend is unavailable.
      });

    return () => {
      isActive = false;
    };
  }, [section]);

  const availableFilters = useMemo(
    () => ["All", ...(pageData.filters || [])],
    [pageData.filters],
  );

  const filteredItems = useMemo(() => {
    return (pageData.items || []).filter((item) => matchesFilter(item, activeFilter));
  }, [activeFilter, pageData.items]);

  return (
    <section className="catalog-page">
      <header className="catalog-page__hero">
        <div className="catalog-page__copy">
          <p className="catalog-page__eyebrow">{pageData.eyebrow}</p>
          <h1 className="catalog-page__title">{pageData.title}</h1>
          <p className="catalog-page__description">{pageData.description}</p>
        </div>

        <div className="catalog-page__summary">
          <p className="catalog-page__summary-label">Showing</p>
          <p className="catalog-page__summary-value">{filteredItems.length}</p>
          <p className="catalog-page__summary-text">
            titles in a full browse grid for this section
          </p>
        </div>
      </header>

      <div className="catalog-page__filters" aria-label="Catalog filters">
        {availableFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`catalog-page__filter${
              activeFilter === filter ? " catalog-page__filter--active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="catalog-page__empty-state">
          No titles match the current filter.
        </div>
      ) : (
        <div className="catalog-page__grid">
          {filteredItems.map((item) => (
            <article key={item.id} className="catalog-card">
              <div className="catalog-card__poster">
                {item.poster ? (
                  <img
                    src={item.poster}
                    alt={`${item.title} poster`}
                    className="catalog-card__image"
                  />
                ) : null}

                <span className="catalog-card__badge">{item.tag}</span>
                <span className="catalog-card__poster-text">
                  {item.poster ? item.title : "Poster Slot"}
                </span>
              </div>

              <div className="catalog-card__body">
                <div className="catalog-card__meta">
                  <p className="catalog-card__provider">{item.provider}</p>
                  <span className="catalog-card__status-pill">{item.tag}</span>
                </div>
                <h2 className="catalog-card__title">{item.title}</h2>
                <p className="catalog-card__details">
                  {[item.type, item.year].filter(Boolean).join(" • ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
