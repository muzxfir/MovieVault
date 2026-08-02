import MovieCard from "./MovieCard";

export default function MovieSection({ title, movies }) {
  return (
    <section className="content-section" id="movies">
      <div className="section-heading">
        <h2>{title}</h2>
        <button>View all</button>
      </div>

      {movies.length ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No movies found.</div>
      )}
    </section>
  );
}
