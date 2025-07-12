'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }

  useEffect(() => {
    setLoadComments(true)
  }, [])

  return (
    <>
      {loadComments
        ? (
            <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
          )
        : (
            <button type="button" onClick={() => setLoadComments(true)}>Load Comments</button>
          )}
    </>
  )
}
