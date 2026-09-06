# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Personal study notes for the **Grokking API Design** course, published as a static site.

The notes are the point; the site is a thin wrapper around them. There are no tests and no
linter — do not go looking for them.

```
content/            the notes — one markdown file per lesson (the source of truth)
content/assets/     lesson images, one flat directory
content/_meta.js    sidebar order and titles
app/                Next.js App Router — layout, catch-all MDX route, 404
lib/                remark plugin (see "Site build" below)
scripts/            sync-assets.mjs, run automatically before dev and build
public/assets/      GENERATED from content/assets — gitignored, never edit
```

## Note file conventions

- Filename: `NN-kebab-case-title.md`, where `NN` is the zero-padded lesson number in course
  order (`00`–`07` so far). The next note is `08-…`.
- Adding a note means adding a line to `content/_meta.js` too, or it will not appear in the
  sidebar. The `NN` prefix does not order the sidebar on its own.
- The `# H1` is the lesson title; `##` are the lesson's sections and `###` its subsections.
- Prose is written as terse lowercase bullets, not full paragraphs. Comparisons, definitions,
  and enumerated properties are markdown tables (`| Type | Example | …`).
- Notes are in English, written in the author's own compressed voice (`term(expansion)`
  inline, e.g. `SLIs(service level indicators)`).
- **The existing notes contain typos** (`deisgn`, `availale`, `Explnation`, `referred ti as`).
  Leave them alone unless asked — they are the author's text, not a defect to fix in passing.

## Figure conventions

**Every diagram in this repo is now authored — there are no course screenshots left.** The
conversion finished across notes `00`–`08`; the last of them went in the `feat: convert notes …`
commits. Do not reintroduce a screenshot: if a course picture is the source, read it and redraw.

Two forms, and a note may carry both:

- **inline ` ```mermaid ` blocks** — the default. No file, no counter entry, and GitHub and the
  site both render them natively. Use for sequence, flow, and plain hierarchy (a tree's shape
  means nothing beyond the tree, so it does not earn a file).
- **a hand-written `.svg` in `content/assets/images/`** (`/figure`) — worth the extra file only
  when **position or layout carries meaning mermaid's auto-layout cannot express**: a timeline
  where one wait is visibly longer, which region of a page re-renders, an hourglass whose
  narrow middle is the whole argument, headers accumulating as a packet goes down a stack.

SVG file rules:

- Named with a **globally sequential three-digit counter across the whole course**, not
  per-lesson. `000`–`002` and every converted screenshot's number are now unused gaps — the
  counter is never renumbered, so gaps only ever grow. **The next image to add is `036`.**
- Reference with a **path relative to the note**, plus a title attribute:

  ```markdown
  ![Alt text](assets/images/NNN.svg "Alt text")
  ```

  These were once absolute `https://github.com/.../blob/main/...` URLs. Those render on
  github.com — GitHub silently rewrites `/blob/` to `/raw/` — but the URL itself serves HTML,
  so they break in local preview, in offline editors, and on the site. **Do not convert them
  back.**
- Theme-aware from inside the file: a `@media (prefers-color-scheme:dark)` block in the SVG's
  own `<style>`. **`--force-dark-mode` in headless Chrome does not test this** — it is auto
  inversion, and a "dark" screenshot taken that way comes back identical to the light one. To
  check the dark palette, copy the file and promote the media-query rules to the top level.
- No external requests, no `<script>`, no `<foreignObject>`. `role="img"` with `<title>` as the
  first child and a `<desc>` that carries the same information as the picture.

A screenshot of a **table** or of **terminal output** is not a diagram — those become a real
markdown table or a fenced code block. Note `04`'s jitter table and note `05`'s `netstat` output
were both converted that way.

## Commit conventions

- `feat: add new notes` — the standard message for adding or extending a lesson note. Notes and
  the images that lesson introduces are committed together.
- `feat: <NN> <lesson topic>` — occasionally used instead when the commit covers one lesson.
- `fix: <what>` — corrections to already-committed notes.

## Site build

Next.js 15 + Nextra 4 (docs theme), deployed on Vercel. `npm run dev` / `npm run build`.
Node 20+ is required — Next 15 rejects Node 18.

Three things here are load-bearing and not obvious:

- **`overrides: { zod: "4.1.12" }` in `package.json` must stay.** Nextra declares `zod ^4.1.12`,
  but 4.5.x changed how `z.custom` treats `undefined`, and Nextra's theme strips `children`
  from its props before validating them against a schema that requires `children`. Every page
  then fails to render with `expected nonoptional, received undefined`, and a production build
  hides the message behind a digest. If pages break after a dependency bump, check this first.
- **`lib/remark-notes.mjs` makes one markdown file correct in two places.** It rewrites
  `assets/images/…` to `/assets/images/…` at build time, so the notes keep GitHub-correct
  relative paths while the site gets root-absolute ones. It also drops the trailing
  `## What changed` section, which is the /polish-note audit trail — kept in the repo so edits
  stay rejectable, hidden from readers of the site.
- **`public/assets/` is generated.** `scripts/sync-assets.mjs` copies `content/assets` into it
  before every dev run and build. Edit `content/assets/`; never `public/assets/`.

## Planned direction

The 22 course screenshots in `00`–`05` are being replaced with authored mermaid diagrams over
time. Prefer mermaid when adding or revising a note — it renders on GitHub and on the site,
needs no counter, and is the author's own work.
