# Deployment

## GitHub Pages

1. Install the deploy helper:

```
npm install --save-dev gh-pages
```

2. Ensure `homepage` in `package.json` is set to `https://Zero3716m.github.io/Todo-List`.

3. Deploy:

```
npm run deploy
```

Your site will be published at the URL above.

## Netlify (alternative)

- Build the app:

```
npm run build
```

- Drag-and-drop the generated `build/` folder to Netlify Drop, or connect the GitHub repository and set the build command to `npm run build` with the publish directory `build`.
