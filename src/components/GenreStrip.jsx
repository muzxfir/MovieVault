const genres = [
  "Action",
  "Drama",
  "Thriller",
  "Comedy",
  "Sci-Fi",
  "Animation",
  "Malayalam"
];

export default function GenreStrip() {
  return (
    <section className="genre-strip" id="genres">
      {genres.map((genre) => (
        <button key={genre}>{genre}</button>
      ))}
    </section>
  );
}
