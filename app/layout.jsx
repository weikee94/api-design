import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Grokking API Design — Notes',
    template: '%s — Grokking API Design'
  },
  description:
    'Study notes for the Grokking API Design course: terse bullets, comparison tables and diagrams.'
}

const navbar = (
  <Navbar logo={<b>Grokking API Design</b>} projectLink="https://github.com/weikee94/api-design" />
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/weikee94/api-design/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={<Footer>Study notes · {new Date().getFullYear()}</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
