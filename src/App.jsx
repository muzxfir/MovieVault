import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
import GenreStrip from "./components/GenreStrip";
import Footer from "./components/Footer";
import { movies as demoMovies } from "./data/movies";
import {
  getLatestMovies,
  getTopRatedMovies,
  getTrendingMovies,
  hasTmdbKey,
  searchMovies
} from "./services/tmdb";

export default function App() {
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState(demoMovies);
  const [topRated, setTopRated] = useState(
    [...demoMovies].sort((a, b) => b.rating - a.rating).slice(0, 6)
  );
  const [latest, setLatest] = useState(
    [...demoMovies].sort((a, b) => b.year - a.year).slice(0, 6)
  );
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(hasTmdbKey);
  const [notice, setNotice] = useState(
    hasTmdbKey
      ? ""
      : "Demo mode: add VITE_TMDB_API_KEY in a .env file to load live TMDB data."
  );

  useEffect(() => {
    if (!hasTmdbKey) return;

    let active = true;

    async function loadMovies() {
      setLoading(true);

      try {
        const [trendingData, topRatedData, latestData] = await Promise.all([
          getTrendingMovies(),
          getTopRatedMovies(),
          getLatestMovies()
        ]);

        if (!active) return;

        setTrending(trendingData.slice(0, 12));
        setTopRated(topRatedData.slice(0, 6));
        setLatest(latestData.slice(0, 6));
      } catch (error) {
        if (!active) return;
        console.error(error);
        setNotice("Could not load TMDB data. Showing demo movies instead.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadMovies();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const term = query.trim();

    if (!term) {
      setSearchResults([]);
      return;
    }

    if (!hasTmdbKey) {
      const filtered = demoMovies.filter((movie) =>
        [movie.title, movie.genre, movie.language, movie.year]
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase())
      );
      setSearchResults(filtered);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const results = await searchMovies(term);
        setSearchResults(results.slice(0, 18));
      } catch (error) {
        console.error(error);
        setSearchResults([]);
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [query]);

  const heroMovie = useMemo(
    () => trending[0] || demoMovies[0],
    [trending]
  );

  return (
    <div className="app">
      <Navbar query={query} setQuery={setQuery} />

      <main>
        <Hero movie={heroMovie} />

        {notice && <div className="api-notice">{notice}</div>}

        <GenreStrip />

        {loading ? (
          <div className="loading-state">Loading movies...</div>
        ) : (
          <>
            <MovieSection
              title={query ? `Search results for “${query}”` : "Trending Now"}
              movies={query ? searchResults : trending}
            />

            {!query && (
              <>
                <MovieSection title="Top Rated" movies={topRated} />
                <MovieSection title="Latest Releases" movies={latest} />
              </>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
