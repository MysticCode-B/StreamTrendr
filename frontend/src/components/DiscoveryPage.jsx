import { useEffect, useState } from "react";
import { fetchDiscoveryPage } from "../lib/api";

const DEFAULT_VISIBLE_ITEMS = 4;

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

export const DiscoveryPage = ({ data, section }) => {
  const [pageData, setPageData] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    let isActive = true;

    fetchDiscoveryPage(section)
      .then((payload) => {
        if (!isActive || !payload) {
          return;
        }

        setPageData(payload);
      })
      .catch(() => {
        // Keep placeholder content if the backend is unavailable.
      });

    return () => {
      isActive = false;
    };
  }, [section]);

  useEffect(() => {
    setPageData(data);
    setActiveFilter("All");
  }, [data, section]);

  const availableFilters = ["All", ...pageData.filters];
  const viewAllHref =
    section === "movies"
      ? "#/movies/all"
      : section === "tv-shows"
        ? "#/tv-shows/all"
        : "#/explore";

  return (
    <section className="discovery-page">
      <header className="discovery-hero">
        <div className="discovery-hero__copy">
          <p className="discovery-hero__eyebrow">{pageData.eyebrow}</p>
          <h1 className="discovery-hero__title">{pageData.title}</h1>
          <p className="discovery-hero__description">{pageData.description}</p>

          <div className="discovery-filter-bar" aria-label="Browse filters">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`discovery-filter-chip${
                  activeFilter === filter ? " discovery-filter-chip--active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="discovery-insights">
            {pageData.insights.map((insight) => (
              <article key={insight.label} className="discovery-insight-tile">
                <p className="discovery-insight-tile__label">{insight.label}</p>
                <p className="discovery-insight-tile__value">{insight.value}</p>
              </article>
            ))}
          </div>
        </div>

        <article className="discovery-feature-card">
          <div className="discovery-feature-card__poster">
            {pageData.featured.poster ? (
              <img
                src={pageData.featured.poster}
                alt={`${pageData.featured.title} poster`}
                className="discovery-feature-card__image"
              />
            ) : null}

            <span className="discovery-feature-card__badge">
              {pageData.featured.label}
            </span>
            <span className="discovery-feature-card__poster-text">
              {pageData.featured.poster ? pageData.featured.title : "Poster Slot"}
            </span>
          </div>

          <div className="discovery-feature-card__body">
            <p className="discovery-feature-card__provider">
              {pageData.featured.provider}
            </p>
            <h2 className="discovery-feature-card__title">
              {pageData.featured.title}
            </h2>
            <p className="discovery-feature-card__meta">{pageData.featured.meta}</p>
            <p className="discovery-feature-card__summary">
              {pageData.featured.summary}
            </p>
          </div>
        </article>
      </header>

      <div className="discovery-shelves">
        {pageData.shelves.map((shelf) => {
          const filteredItems = shelf.items.filter((item) =>
            matchesFilter(item, activeFilter),
          );
          const visibleItems = filteredItems.slice(0, DEFAULT_VISIBLE_ITEMS);

          return (
            <section key={shelf.title} className="discovery-shelf">
              <div className="discovery-shelf__heading">
                <div>
                  <h3 className="discovery-shelf__title">{shelf.title}</h3>
                  <p className="discovery-shelf__description">
                    {shelf.description}
                  </p>
                </div>

                <div className="discovery-shelf__actions">
                  <p className="discovery-shelf__count">
                    Showing {visibleItems.length} of {filteredItems.length}
                  </p>

                  <a href={viewAllHref} className="discovery-shelf__action">
                    View All
                  </a>
                </div>
              </div>

              {filteredItems.length === 0 ? (
                <div className="discovery-shelf__empty-state">
                  No titles match the current filter yet.
                </div>
              ) : (
                <div className="discovery-shelf__grid">
                  {visibleItems.map((item) => (
                    <article key={item.id} className="discovery-card">
                      <div className="discovery-card__poster">
                        {item.poster ? (
                          <img
                            src={item.poster}
                            alt={`${item.title} poster`}
                            className="discovery-card__image"
                          />
                        ) : null}

                        <span className="discovery-card__badge">{item.tag}</span>
                        <span className="discovery-card__poster-text">
                          {item.poster ? item.title : "Poster Slot"}
                        </span>
                      </div>

                      <div className="discovery-card__body">
                        <div className="discovery-card__meta">
                          <p className="discovery-card__provider">{item.provider}</p>
                          <span className="discovery-card__status-pill">
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="discovery-card__title">{item.title}</h4>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
};
