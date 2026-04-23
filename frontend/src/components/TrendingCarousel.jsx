import { useEffect, useState } from "react";

const VISIBLE_CARDS = 4;

export const TrendingCarousel = ({ items }) => {
  const [activePage, setActivePage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / VISIBLE_CARDS));

  useEffect(() => {
    if (totalPages <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActivePage((currentPage) => (currentPage + 1) % totalPages);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [totalPages]);

  useEffect(() => {
    if (activePage >= totalPages) {
      setActivePage(0);
    }
  }, [activePage, totalPages]);

  const goToPrevious = () => {
    setActivePage((currentPage) =>
      currentPage === 0 ? totalPages - 1 : currentPage - 1,
    );
  };

  const goToNext = () => {
    setActivePage((currentPage) => (currentPage + 1) % totalPages);
  };

  const pageStartIndex = activePage * VISIBLE_CARDS;
  const visibleItems = items.slice(pageStartIndex, pageStartIndex + VISIBLE_CARDS);

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
              {item.poster ? (
                <img
                  src={item.poster}
                  alt={`${item.title} poster`}
                  className="trend-card__poster-image"
                />
              ) : null}
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
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={`page-${index}`}
              type="button"
              className={`trending-carousel__dot${index === activePage ? " trending-carousel__dot--active" : ""}`}
              onClick={() => setActivePage(index)}
              aria-label={`Go to carousel page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
