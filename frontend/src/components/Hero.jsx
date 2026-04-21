import { useEffect, useState } from "react";
import { TrendingCarousel } from "./TrendingCarousel";
import { trendingPlaceholders } from "../data/trendingPlaceholders";
import { fetchTrendingTitles } from "../lib/api";

export const Hero = () => {
  const [items, setItems] = useState(trendingPlaceholders);

  useEffect(() => {
    let isActive = true;

    fetchTrendingTitles("all", 8)
      .then((payload) => {
        if (!isActive || !Array.isArray(payload?.items) || payload.items.length === 0) {
          return;
        }

        setItems(payload.items);
      })
      .catch(() => {
        // Keep frontend placeholders when backend or API is unavailable.
      });

    return () => {
      isActive = false;
    };
  }, []);

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

        <TrendingCarousel items={items} />
      </div>
    </section>
  );
};
