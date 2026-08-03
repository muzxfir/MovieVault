import { FiPlay, FiStar } from "react-icons/fi";

export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
        <span className="quality-badge">{movie.quality}</span>

        <button className="play-button" aria-label={`Play ${movie.title}`}>
          <FiPlay />
        </button>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <div className="movie-meta">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
          <span className="rating"><FiStar /> {movie.rating}</span>
        </div>
      </div>
    </article>
  );
}
