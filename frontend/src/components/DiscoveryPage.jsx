export const DiscoveryPage = ({ data }) => {
  return (
    <section className="discovery-page">
      <header className="discovery-hero">
        <div className="discovery-hero__copy">
          <p className="discovery-hero__eyebrow">{data.eyebrow}</p>
          <h1 className="discovery-hero__title">{data.title}</h1>
          <p className="discovery-hero__description">{data.description}</p>

          <div className="discovery-filter-bar" aria-label="Browse filters">
            {data.filters.map((filter) => (
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
            {data.insights.map((insight) => (
              <article key={insight.label} className="discovery-insight-tile">
                <p className="discovery-insight-tile__label">{insight.label}</p>
                <p className="discovery-insight-tile__value">{insight.value}</p>
              </article>
            ))}
          </div>
        </div>

        <article className="discovery-feature-card">
          <div className="discovery-feature-card__poster">
            <span className="discovery-feature-card__badge">
              {data.featured.label}
            </span>
            <span className="discovery-feature-card__poster-text">
              Poster Slot
            </span>
          </div>

          <div className="discovery-feature-card__body">
            <p className="discovery-feature-card__provider">
              {data.featured.provider}
            </p>
            <h2 className="discovery-feature-card__title">
              {data.featured.title}
            </h2>
            <p className="discovery-feature-card__meta">{data.featured.meta}</p>
            <p className="discovery-feature-card__summary">
              {data.featured.summary}
            </p>
          </div>
        </article>
      </header>

      <div className="discovery-shelves">
        {data.shelves.map((shelf) => (
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
                    <span className="discovery-card__badge">{item.tag}</span>
                    <span className="discovery-card__poster-text">
                      Poster Slot
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
