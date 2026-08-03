import { FiInfo, FiPlay, FiStar } from "react-icons/fi";

export default function Hero({ movie }) {
  return (
    <section
      id="top"
      className="hero"
      style={{ backgroundImage: `url(${movie.backdrop})` }}
    >
      <div className="hero-shade" />

      <div className="hero-content">
        <span className="eyebrow">MovieVault Original Collection</span>
        <h1>{movie.title}</h1>

        <div className="hero-meta">
          <span><FiStar /> {movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
          <span>{movie.quality}</span>
        </div>

        <p>{movie.description}</p>

        <div className="hero-buttons">
          <button className="primary-button"><FiPlay /> Watch Trailer</button>
          <button className="secondary-button"><FiInfo /> More Info</button>
        </div>
      </div>
    </section>
  );
}
