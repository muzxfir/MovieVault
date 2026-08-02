import { FiFilm } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-brand">
        <FiFilm /> MovieVault
      </div>

      <p>Discover movies, trailers and cinema information in one place.</p>

      <div className="footer-links">
        <a href="#top">Home</a>
        <a href="#movies">Movies</a>
        <a href="#genres">Genres</a>
        <a href="#footer">Privacy</a>
      </div>

      <small>© 2026 MovieVault. Built for movie discovery.</small>
    </footer>
  );
}
