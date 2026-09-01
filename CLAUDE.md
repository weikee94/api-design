# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Personal study notes for the **Grokking API Design** course. It is a notes repository —
markdown and images only. There is no code, no package manifest, no build, no tests, and
no linter. Do not go looking for them.

All content lives under `grokking-api-design/`: one markdown file per lesson, plus a single
flat `assets/images/` directory.

## Note file conventions

- Filename: `NN-kebab-case-title.md`, where `NN` is the zero-padded lesson number in course
  order (`00`–`05` so far). The next note is `06-…`.
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

- Images live in `grokking-api-design/assets/images/` and are named with a **globally sequential
  three-digit counter across the whole course**, not per-lesson: `000.png` … `022.png`.
  `002` is an unused gap. **The next image to add is `023`.**
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
- Diagrams the author draws are inline ` ```mermaid ` blocks, not files in `assets/images/`.
  GitHub renders them natively. Notes `00`–`05` are course screenshots; `06` onward are
  authored mermaid. New notes should prefer mermaid.

## Commit conventions

- `feat: add new notes` — the standard message for adding or extending a lesson note. Notes and
  the images that lesson introduces are committed together.
- `feat: <NN> <lesson topic>` — occasionally used instead when the commit covers one lesson.
- `fix: <what>` — corrections to already-committed notes.

## Planned direction

These notes are being lined up to become a static site on Vercel (Nextra was chosen, so the
markdown stays the source of truth and interactive React components can be added per page
later). Two consequences for anything written now:

- image paths must stay relative — see above
- the 22 course screenshots in `00`–`05` are being replaced with authored mermaid diagrams
  over time; prefer mermaid when adding or revising a note
