# Kahlil Wassell — Modeling Portfolio

A clean, static portfolio site built for GitHub Pages. No build step, no dependencies.

**Live URL (once published):** https://kahlilmodelingportfolio.github.io

## Structure

```
index.html          Home — hero, about, collections, contact
nike.html           Gallery: Nike Chicago Marathon 2024
saucony.html        Gallery: Saucony SS26
graduation.html     Gallery: 2021 studio portraits
tank.html           Gallery: latest studio session
assets/css/style.css
assets/js/main.js    Mobile nav, gallery grid + lightbox
images/<set>/NN.jpg          web-sized photos (~2000px)
images/<set>/thumb/NN.jpg    grid thumbnails
```

## Editing content

- **Measurements / stats** — in `index.html`, look for `<!-- EDIT ME -->` above the `.stats` block.
- **Contact & socials** — search for `EDIT ME` in `index.html` (also in the footer of each gallery page) to set your email and Instagram/agency links.
- **Add photos to a gallery** — drop a web image into `images/<set>/` named as the next number (e.g. `13.jpg`), add a matching `thumb/13.jpg`, then bump `data-count` on that page's `.masonry` div.

## Publishing to GitHub Pages

1. Create a GitHub repo named exactly `kahlilmodelingportfolio.github.io` under your account.
2. From this folder:
   ```
   git add -A
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/kahlilmodelingportfolio.github.io.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main` / `/ (root)`.
4. Wait ~1 minute; the site goes live at the URL above.

## Local preview

```
python3 -m http.server 8000
```
Then open http://localhost:8000
