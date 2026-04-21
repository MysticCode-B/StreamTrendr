import {
  featureSteps,
  movieSpotlight,
  overviewStats,
  tvSpotlight,
} from "../data/homeSections";

const ContentLane = ({ eyebrow, title, description, items }) => {
  return (
    <section className="content-lane">
      <div className="content-lane__heading">
        <p className="content-lane__eyebrow">{eyebrow}</p>
        <h3 className="content-lane__title">{title}</h3>
        <p className="content-lane__description">{description}</p>
      </div>

      <div className="content-lane__grid">
        {items.map((item) => (
          <article key={item.id} className="content-card">
            <div className="content-card__poster">
              <div className="content-card__poster-badge">{item.tag}</div>
              <div className="content-card__poster-footer">
                <span className="content-card__poster-text">Poster Slot</span>
              </div>
            </div>

            <div className="content-card__body">
              <p className="content-card__provider">{item.provider}</p>
              <h4 className="content-card__title">{item.title}</h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export const HomeShowcase = () => {
  return (
    <div className="home-showcase">
      <section className="overview-panel">
        <div className="overview-panel__intro">
          <p className="overview-panel__eyebrow">Platform Snapshot</p>
          <h2 className="overview-panel__title">
            A homepage layout that already feels like a real streaming dashboard
          </h2>
          <p className="overview-panel__description">
            These sections give you structure now, and later they become natural
            landing zones for live Watchmode content.
          </p>
        </div>

        <div className="overview-panel__stats">
          {overviewStats.map((stat) => (
            <article key={stat.label} className="stat-tile">
              <p className="stat-tile__label">{stat.label}</p>
              <p className="stat-tile__value">{stat.value}</p>
              <p className="stat-tile__detail">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <ContentLane
        eyebrow="Movie Watchlist"
        title="Trending movies to surface next"
        description="A poster-first lane for high-visibility movie recommendations and rankings."
        items={movieSpotlight}
      />

      <ContentLane
        eyebrow="Series Watchlist"
        title="TV shows viewers are jumping into"
        description="A second lane to balance the homepage with currently active series discovery."
        items={tvSpotlight}
      />

      <section className="workflow-panel">
        <div className="workflow-panel__copy">
          <p className="workflow-panel__eyebrow">How StreamTrendr Works</p>
          <h3 className="workflow-panel__title">
            Built now for frontend polish, ready later for live trend data
          </h3>
          <p className="workflow-panel__description">
            The structure below is intentionally simple: keep the homepage
            visual, readable, and easy to connect once your backend starts
            returning trending titles and provider data.
          </p>
        </div>

        <div className="workflow-panel__steps">
          {featureSteps.map((step) => (
            <article key={step.number} className="workflow-step">
              <p className="workflow-step__number">{step.number}</p>
              <h4 className="workflow-step__title">{step.title}</h4>
              <p className="workflow-step__description">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
