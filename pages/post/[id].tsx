import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Post: {id}</h1>
    </>
  )
}

export default Post
