const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p";

export const hasTmdbKey = Boolean(API_KEY && API_KEY !== "your_tmdb_api_key_here");

function mapMovie(movie) {
  return {
    id: movie.id,
    title: movie.title || movie.name || "Untitled",
    year: (movie.release_date || movie.first_air_date || "").slice(0, 4) || "N/A",
    rating: Number(movie.vote_average || 0).toFixed(1),
    genre: "Movie",
    language: (movie.original_language || "en").toUpperCase(),
    quality: "HD",
    description: movie.overview || "No description available.",
    poster: movie.poster_path
      ? `${IMAGE_BASE}/w500${movie.poster_path}`
      : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85",
    backdrop: movie.backdrop_path
      ? `${IMAGE_BASE}/original${movie.backdrop_path}`
      : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=90"
  };
}

async function request(endpoint, params = {}) {
  if (!hasTmdbKey) {
    throw new Error("TMDB API key is missing.");
  }

  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", "en-US");

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  const data = await response.json();
  return (data.results || []).map(mapMovie);
}

export function getTrendingMovies() {
  return request("/trending/movie/week");
}

export function getTopRatedMovies() {
  return request("/movie/top_rated", { page: 1 });
}

export function getLatestMovies() {
  return request("/movie/now_playing", { page: 1 });
}

export function searchMovies(query) {
  return request("/search/movie", {
    query,
    include_adult: false,
    page: 1
  });
}
