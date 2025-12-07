Static site (export)
=====================

This folder contains the static export of the site. Run the build and export steps below to regenerate:

1. Build production assets:

```powershell
npm run build
```

2. Export built files to `static/`:

```powershell
npm run export-static
```

3. Serve locally (simple):

```powershell
# Use a static server like http-server (npm i -g http-server)
# from the repo root:
cd static
http-server -p 8080
```

To publish to GitHub Pages, either:
- force-push `static/` contents to `gh-pages` branch (we already use `gh-pages` for live site), or
- create a `static-site` branch and configure Pages to serve from it.
