const navigationLinks = [
  { label: "Home", href: "#/" },
  { label: "Movies", href: "#/movies" },
  { label: "TV Shows", href: "#/tv-shows" },
  { label: "Explore What's New", href: "#/explore" },
];

const accountLinks = ["Login", "Sign Up"];

export const PageNavbar = ({ currentPath = "/" }) => {
  return (
    <nav className="top-navigation">
      <div className="top-navigation__brand-group">
        <a href="#/" className="top-navigation__brand">
          StreamTrendr
        </a>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="top-navigation__search-input"
      />

      <div className="top-navigation__links" aria-label="Primary navigation">
        {navigationLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`top-navigation__link${
              currentPath === link.href.replace("#", "")
                ? " top-navigation__link--active"
                : ""
            }`}
          >
            {link.label}
          </a>
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
