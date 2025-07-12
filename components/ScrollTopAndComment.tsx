'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

function ScrollTopAndComment() {
  const [show, setShow] = useState(false)
  const [container, setContainer] = useState<HTMLElement | null>(null)

  const comment = document.getElementById('comment')

  useEffect(() => {
    const container = document.getElementById('scroll-container') as HTMLElement
    setContainer(container)
    const handleWindowScroll = () => {
      if (container.scrollTop > 50)
        setShow(true)
      else setShow(false)
    }

    container.addEventListener('scroll', handleWindowScroll)
    return () => container.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    container && container.scrollTo({ top: 0 })
  }
  const handleScrollToComment = () => {
    comment && comment.scrollIntoView()
  }
  return (
    <div
      id="scroll-top-and-comment"
      className={`fixed bottom-8 right-8 z-20 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      {comment && siteMetadata.comments?.provider && (
        <button
          type="button"
          aria-label="Scroll To Comment"
          onClick={handleScrollToComment}
          className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        >
          <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <button
        type="button"
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollTopAndComment
