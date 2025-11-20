
import React from "react";
import { siteContent } from "../data";

const Header = () => {
  const { logoText, nav } = siteContent;

  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-left">
          <div className="logo">{logoText}</div>
          <button className="link-button categories-btn">Categories</button>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for anything"
              className="search-input"
            />
          </div>
        </div>

        <nav className="header-right">
          {nav.leftLinks.map((link) => (
            <button key={link.id} className="link-button">
              {link.label}
            </button>
          ))}

          <button className="link-button">Cart</button>

          {nav.rightButtons.map((btn) => (
            <button
              key={btn.id}
              className={`nav-btn nav-btn-${btn.variant}`}
            >
              {btn.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
