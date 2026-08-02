# MovieVault

A responsive movie-discovery website built with React, Vite and optional TMDB API integration.

## Run locally

```bash
npm install
npm run dev
```

## Enable live TMDB movie data

1. Create an account on TMDB.
2. Get a TMDB API key.
3. Copy `.env.example` to a new file named `.env`.
4. Add your key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

5. Restart the development server:

```bash
npm run dev
```

With a valid API key, MovieVault loads:

- Trending movies
- Top-rated movies
- Now-playing releases
- Live movie search
- Posters and backdrop images

Without an API key, the website runs in demo mode using built-in sample data.

## Build

```bash
npm run build
```
