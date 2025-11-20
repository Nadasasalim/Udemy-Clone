
import React from "react";
import { siteContent } from "../data";

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">{hero.badge}</div>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>

          <div className="hero-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder={hero.searchPlaceholder}
              className="search-input"
            />
          </div>

          <div className="hero-popular">
            <span className="hero-popular-label">
              {hero.popularSearchesLabel}
            </span>
            {hero.popularSearches.map((term) => (
              <button key={term} className="chip">
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="hero-image-placeholder">
          <div className="hero-image-card">
            <div className="hero-image-circle" />
            <div className="hero-image-lines">
              <div className="line" />
              <div className="line" />
              <div className="line short" />
            </div>
          </div>
          <p className="hero-image-caption">
            Learn in-demand skills anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
