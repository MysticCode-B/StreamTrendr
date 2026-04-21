import { useEffect, useState } from "react";

const VISIBLE_CARDS = 4;

export const TrendingCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [items]);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
  };

  const visibleItems = Array.from({ length: Math.min(VISIBLE_CARDS, items.length) }, (_, offset) => {
    return items[(activeIndex + offset) % items.length];
  });

  return (
    <div className="trending-carousel">
      <div className="trending-carousel__header">
        <div>
          <p className="trending-carousel__eyebrow">Trending Now</p>
          <h3 className="trending-carousel__heading">Watchmode-ready carousel</h3>
        </div>

        <div className="trending-carousel__controls" aria-label="Carousel controls">
          <button
            type="button"
            className="trending-carousel__control-button"
            onClick={goToPrevious}
            aria-label="Show previous title"
          >
            Prev
          </button>
          <button
            type="button"
            className="trending-carousel__control-button"
            onClick={goToNext}
            aria-label="Show next title"
          >
            Next
          </button>
        </div>
      </div>

      <div className="trending-carousel__track" aria-live="polite">
        {visibleItems.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className={`trend-card${index === 0 ? " trend-card--featured" : ""}`}
          >
            <div className="trend-card__poster" aria-label={`${item.title} poster placeholder`}>
              <div className="trend-card__poster-overlay">
                <span className="trend-card__poster-badge">{item.type}</span>
                <p className="trend-card__poster-label">{item.posterLabel}</p>
              </div>
            </div>

            <div className="trend-card__body">
              <div className="trend-card__meta">
                <span className="trend-card__rank">{item.rank}</span>
                <span className="trend-card__type">{item.type}</span>
              </div>
              <p className="trend-card__provider">{item.provider}</p>
              <h4 className="trend-card__title">{item.title}</h4>
              <p className="trend-card__year">{item.year}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="trending-carousel__footer">
        <p className="trending-carousel__status">
          Placeholder content for now. Swap this array with Watchmode API data when the backend is ready.
        </p>

        <div className="trending-carousel__pagination" aria-label="Carousel position">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`trending-carousel__dot${index === activeIndex ? " trending-carousel__dot--active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
