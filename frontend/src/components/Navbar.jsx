export const Navbar = () => {
  const navigationLinks = [
    "Movies",
    "TV Shows",
    "Explore What's New",
  ];

  const accountLinks = ["Login", "Sign Up"];

  return (
    <nav className="top-navigation">
      <div className="top-navigation__brand-group">
        <h1 className="top-navigation__brand">StreamTrendr</h1>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="top-navigation__search-input"
      />

      <div className="top-navigation__links" aria-label="Primary navigation">
        {navigationLinks.map((linkLabel) => (
          <span key={linkLabel} className="top-navigation__link">
            {linkLabel}
          </span>
        ))}

        {accountLinks.map((linkLabel) => (
          <span
            key={linkLabel}
            className="top-navigation__link top-navigation__link--accent"
          >
            {linkLabel}
          </span>
        ))}
      </div>
    </nav>
  );
};
