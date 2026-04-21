import { useEffect, useState } from "react";
import { fetchDiscoveryPage } from "../lib/api";

export const DiscoveryPage = ({ data, section }) => {
  const [pageData, setPageData] = useState(data);

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

  return (
    <section className="discovery-page">
      <header className="discovery-hero">
        <div className="discovery-hero__copy">
          <p className="discovery-hero__eyebrow">{pageData.eyebrow}</p>
          <h1 className="discovery-hero__title">{pageData.title}</h1>
          <p className="discovery-hero__description">{pageData.description}</p>

          <div className="discovery-filter-bar" aria-label="Browse filters">
            {pageData.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="discovery-filter-chip"
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
        {pageData.shelves.map((shelf) => (
          <section key={shelf.title} className="discovery-shelf">
            <div className="discovery-shelf__heading">
              <div>
                <h3 className="discovery-shelf__title">{shelf.title}</h3>
                <p className="discovery-shelf__description">
                  {shelf.description}
                </p>
              </div>
              <button type="button" className="discovery-shelf__action">
                View All
              </button>
            </div>

            <div className="discovery-shelf__grid">
              {shelf.items.map((item) => (
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
                      <span className="discovery-card__status-pill">{item.tag}</span>
                    </div>
                    <h4 className="discovery-card__title">{item.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
