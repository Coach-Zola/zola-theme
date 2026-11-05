# zola-theme

Static site of Zola visual resources: CSS, icons, images and logos, in three versions (root, `v2/`, `v3/`). It is not a Serverless WS.

## Structure

- `v3/`: version used by the demo page (`css/`, `fonts/`, `icons/`, `images/`, `logo/`, `lottie/`).
- `v2/` (`css/`, `fonts/`, `icons/`, `images/`, `logo/`).
- `css/`, `icons/`, `images/`, `logo/` at the root: unversioned resources.
- `index.html`, `index.css`, `index.js`: demo page that displays the icons and components of `v3/`.
- `scripts/generate-theme.js`: generates the color variants of the `v2/icons` icons from a `raw_theme` folder, absent from the repo.
