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

## Image conventions

This is the part that has caused repeated breakage (see the `fix: image url`, `fix: image path`,
`fix: image url path` commits), so follow it exactly.

- Images live in `content/assets/images/` and are named with a **globally sequential
  three-digit counter across the whole course**, not per-lesson. `002`, and now `000` and `001`,
  are unused gaps — the counter is never renumbered, so gaps only ever grow.
  **The next image to add is `026`.**
- Both `.png` and `.svg` are in use; keep the extension the source actually is.
- Reference them with a **path relative to the note**, plus a title attribute:

  ```markdown
  ![Alt text](assets/images/NNN.png "Alt text")
  ```

- These used to be absolute `https://github.com/.../blob/main/...` URLs. Those render on
  github.com — GitHub's markdown renderer silently rewrites `/blob/` to `/raw/` — but the
  URL itself serves HTML, so they break everywhere else: local preview, offline editors, and
  any site built from these files. They were converted to relative paths when the notes were
  lined up for a static site. **Do not convert them back.**
- Authored diagrams come in two forms, and a note may carry both:
  - **inline ` ```mermaid ` blocks** — the default. No counter entry, no file, and both GitHub
    and the site render them natively. Use these for sequence and flow.
  - **a hand-written `.svg` in `assets/images/`** (`/figure`) — takes a counter number like any
    other image. Worth the extra file only when position or layout carries meaning that
    mermaid's auto-layout cannot express. Note `08` has three alongside its mermaid: the mermaid carries
    the time axis, `023` the SSR structure, `024` the CSR pipeline, and `025` which region of
    a page re-renders — that last one is the clearest case, since position is the whole point.
  **Prefer either over a course screenshot.** Note `00` and `06`–`08` are authored;
  `01`–`05` are still course screenshots and are being converted one note at a time.

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
