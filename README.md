# interactive_card_details_form

## Init project

### Tailwindcss
[Official documentation](https://tailwindcss.com/docs/guides/vite#vue)

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
#### Modify tailwind.config.js :
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
#### Modify main.css :
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Github Pages

[Tutorial](https://mkay11.medium.com/how-to-deploy-your-vite-vue-3-application-in-github-pages-2023-2b842f50576a)

#### Link repository with github.

#### Modify vite.config.js :
```
export default defineConfig({
  base: './',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {}
  }
})
```
#### Modify .gitignore :
```
// Delete lines
dist
dist-ssr
```
#### Build & push deployment :
```
npm run build
```
```sh
git subtree push --prefix dist origin gh-pages
```

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# interactive_card_details_form
