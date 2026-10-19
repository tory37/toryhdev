# toryhdev

Deploy target for [toryh.dev](https://toryh.dev). Static files only, served by GitHub Pages from
`master`. Don't edit anything here by hand.

The source, the resume build, and the publish script live in a private repo,
`tory37/djaunt-work`. It builds the site, the DOCX, and the PDF, then copies them here.

- `index.html`, `css/`, `assets/`, `vendor/` — the site
- `resume/Tory-Hebert-Resume.docx` and `.pdf` — the master resume downloads
- `CNAME` — custom domain. `.nojekyll` — skip Jekyll processing

## Local preview

```
python3 -m http.server 8080
```

Then open http://localhost:8080
