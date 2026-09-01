import nextra from 'nextra'
import { remarkNotes } from './lib/remark-notes.mjs'

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [remarkNotes]
  }
})

export default withNextra({
  reactStrictMode: true,
  images: { unoptimized: true }
})
