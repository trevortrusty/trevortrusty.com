# trevortrusty.com

Personal portfolio website for Trevor Trusty. React SPA built with Create React App featuring parallax scrolling, a dark theme, and custom SVG assets.

## Commands

```bash
npm start    # Dev server at localhost:3000
npm run build  # Production build
npm test     # Run tests (watch mode)
```

## Architecture

- **Framework**: Create React App (React 18)
- **Animation**: `@react-spring/parallax` for parallax scrolling, `@react-spring/web` for spring animations
- **Syntax highlighting**: PrismJS (used in CodeBlock/CodeDisplay)
- **Routing**: None yet — single-page layout; `PrintsPage` exists but is unused/commented out
- **State**: Local `useState`/`useEffect` only, no global state management

## Project Structure

```
src/
  components/      # All components live here, co-located with their CSS Modules
  App.js           # Root component
  index.js         # Entry point
  index.css        # Global styles
  Assets/          # SVGs and images (wave patterns, laptop renders, cat SVG, logos)
```

## Conventions

- **Components**: PascalCase filenames (`HomePage.js`)
- **Styles**: CSS Modules, one per component (`HomePage.module.css`)
- **No shared stylesheet** beyond `index.css` and `App.css` — keep styles scoped to modules

## Styling

- Dark theme: background `#001220`
- Accent colors: cyan `#61dafb` / `#00e1ff`, orange `#ff7300`, green `#18d131`
- Google Fonts: Josefin Sans, Kanit, Noto Sans Mono, Oswald, Playfair Display, VT323
- Responsive breakpoints: 1400px, 1200px, 1080px, 900px, 560px, 450px, 400px, 390px
- Section backgrounds use SVG wave patterns and `clip-path` polygons for angled cuts

## Key Components

| Component | Purpose |
|-----------|---------|
| `HomePage.js` | Main page with 3-page parallax scroll |
| `HomeTopIntro.js` | Hero section with togglable laptop image |
| `Nav.js` | Navigation bar |
| `Cat.js` | Animated SVG cat (eye tracking, loading ellipsis) |
| `CodeBlock.js` | Code snippet display with copy button |
| `PrintsPage.js` | 3D prints showcase (future use, not wired up) |

## Notes

- The site is under active construction — `PrintsPage` is the next section to integrate
- No router is set up yet; adding one (e.g. React Router) will be needed when `PrintsPage` is linked
- Parallax offsets are adjusted responsively: `window.innerWidth < 900` uses `offset=0.15` instead of `0`
