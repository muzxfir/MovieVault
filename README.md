# MovieVault

GitHub Pages-ready React + Vite movie discovery website.

## Upload

Upload every file and folder to the root of:

`https://github.com/muzxfir/MovieVault`

Do not forget the hidden `.github` folder.

## Enable GitHub Pages

1. Repository → Settings → Pages
2. Source → GitHub Actions
3. Repository → Actions → Deploy MovieVault → Run workflow

Live URL:

`https://muzxfir.github.io/MovieVault/`

## Add TMDB API key

Repository → Settings → Secrets and variables → Actions → New repository secret

Name:

`VITE_TMDB_API_KEY`

Value: your TMDB API v3 key.

Do not upload a real `.env` file to a public repository.

## Local run

```bash
npm install
npm run dev
```
