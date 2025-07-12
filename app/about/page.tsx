import type { Authors } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import Reveal from '@/components/Reveal'
import AuthorLayout from '@/layouts/AuthorLayout'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find(p => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <Reveal>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </Reveal>
  )
}
