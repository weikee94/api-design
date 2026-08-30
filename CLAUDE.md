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
- Reference them with an absolute GitHub blob URL pinned to `main`, plus a title attribute:

  ```markdown
  ![Alt text](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/NNN.png "Alt text")
  ```

- GitHub's markdown renderer rewrites `/blob/` to `/raw/`, so these do render on github.com
  (verified). They will **not** render in a local markdown preview or an offline editor, since
  the raw `blob` URL serves HTML rather than the image. That is the accepted tradeoff here — do
  not "fix" it to relative paths without being asked.
- One reference is inconsistent: `000.png` in `00-introduction-to-apis.md` is pinned to commit
  `669ae51` instead of `main`. It works, but it is the odd one out of 22.

## Commit conventions

- `feat: add new notes` — the standard message for adding or extending a lesson note. Notes and
  the images that lesson introduces are committed together.
- `feat: <NN> <lesson topic>` — occasionally used instead when the commit covers one lesson.
- `fix: <what>` — corrections to already-committed notes.

## Known repository nits

`.DS_Store` is tracked and there is no `.gitignore`. Mention it if it gets in the way; don't
remove it as a side effect of unrelated work.
