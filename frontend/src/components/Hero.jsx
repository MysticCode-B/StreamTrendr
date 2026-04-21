import { TrendingCarousel } from "./TrendingCarousel";
import { trendingPlaceholders } from "../data/trendingPlaceholders";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-banner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Trending Posters</p>
          <h2 className="hero-title">Latest movies and TV shows</h2>
          <p className="hero-description">
            Poster slots are ready for your Watchmode API. Right now these cards
            are placeholders so we can finish the homepage frontend first.
          </p>
        </div>

        <TrendingCarousel items={trendingPlaceholders} />
      </div>
    </section>
  );
};
