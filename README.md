# Pacer Site

A starter site built with Vite + React + TypeScript and Material UI (MUI).

## Local development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Open http://localhost:5173/

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This project uses `gh-pages` to publish the `dist/` output. Before deploying, set the `homepage` field in `package.json` to your GitHub Pages URL (for example `https://<your-username>.github.io/pacer-site`). Then run:

```bash
npm run deploy
```

Notes:
- The `deploy` script runs `npm run build` and publishes the `dist/` folder.
- If you want a project page (not a user/org page) make sure the repository name is `pacer-site` and the `homepage` path is set accordingly.

## What’s included

- Vite + React + TypeScript
- Material UI (MUI) with default theme
- Simple responsive layout (AppBar + Drawer)
- Routing with `react-router-dom` and example pages: Home, Virtual Tour

## Next steps

- Add more pages and components
- Improve accessibility and add tests
- Configure CI and automatic deploy on push to `main`


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
