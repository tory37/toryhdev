# toryhdev

Tory Hebert's resume and portfolio. Plain static site — no build step.

- `index.html` — the whole site: resume first (experience, skills, education), then
  projects, a colophon, and contact. Prints as a clean paper resume (`@media print`).
- `css/style.css` — layout only. Every value comes from the Djaunt tokens.
- `vendor/djaunt-branding/` — tokens, the mark, and components copied verbatim from
  [tory37/djaunt-branding](https://github.com/tory37/djaunt-branding). See its README
  for the upstream commit and how to update.
- `contact.html` — redirects old links to `index.html#contact`.
- `resume/Tory-Hebert-Resume.docx` — Word version of the resume, generated from
  `index.html`. Don't edit it by hand; edit the page and rebuild:

  ```
  NODE_PATH="$(npm root -g)" node scripts/build-resume-docx.cjs
  ```

  Needs the `docx` npm package (`npm i -g docx` if it's missing).

Theme: `data-dj-theme="void"` on `<html>`. Swap the attribute to restyle the site
in any other Djaunt element.

## Local preview

```
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy

Served via GitHub Pages from this branch's root.
