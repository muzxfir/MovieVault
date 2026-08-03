import { useState } from "react";
import { FiFilm, FiHeart, FiMenu, FiSearch, FiX } from "react-icons/fi";

export default function Navbar({ query, setQuery }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="MovieVault home">
        <span className="brand-icon"><FiFilm /></span>
        <span>Movie<span>Vault</span></span>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <a href="#top">Home</a>
        <a href="#movies">Movies</a>
        <a href="#genres">Genres</a>
        <a href="#footer">About</a>
      </nav>

      <div className="nav-actions">
        <label className="search-box">
          <FiSearch />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search movies..."
            aria-label="Search movies"
          />
        </label>

        <button className="icon-button" aria-label="Watchlist">
          <FiHeart />
        </button>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
