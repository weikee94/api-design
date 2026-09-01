import { visit } from 'unist-util-visit'

/**
 * Two build-time fixes so one markdown file is correct in two places.
 *
 * 1. Image paths. The notes use `assets/images/NNN.png`, relative to the note,
 *    because that is what renders on github.com. On the site the page URL is
 *    `/00-introduction-to-apis`, and whether a relative path resolves depends on
 *    the trailing slash — so rewrite to a root-absolute `/assets/images/NNN.png`,
 *    which is correct either way. `scripts/sync-assets.mjs` puts the files there.
 *
 * 2. The `## What changed` section. It is the editorial audit trail from
 *    /polish-note — what was edited, what was guessed, what was deliberately not
 *    filled in. It belongs in the repo so the edits stay rejectable, but it is
 *    meaningless to a reader of the site, so it is dropped from the rendered page
 *    along with the `---` that precedes it.
 */
export function remarkNotes() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url.startsWith('assets/')) node.url = '/' + node.url
    })

    const cut = tree.children.findIndex(
      (n) =>
        n.type === 'heading' &&
        n.depth === 2 &&
        n.children?.[0]?.value?.trim().toLowerCase() === 'what changed'
    )
    if (cut === -1) return
    const from =
      cut > 0 && tree.children[cut - 1].type === 'thematicBreak' ? cut - 1 : cut
    tree.children.splice(from)
  }
}
