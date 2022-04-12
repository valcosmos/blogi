import { useRouter } from 'next/router'
import Link from 'next/link'
import { getComments, getPostDetial, setLike } from '@/api/post'
import { HttpResponse, MsgInfo, PostInfo } from '@/common/interface'
import { message, Badge, Button } from 'antd'
import { CommentOutlined, StarOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { formatDate, scrollToElement, toTree } from '@/utils/utils'
import { NextPage } from 'next'

import style from './post.module.scss'

import Editor from 'md-editor-rt'

const Post: NextPage = () => {
  const router = useRouter()

  const { id } = router.query

  const [post, setPost] = useState<PostInfo>({ _id: '', content: '' })

  const [comments, setComments] = useState<MsgInfo[]>([])

  const [commentTotal, setCommentTotal] = useState<number>(0)

  const [liked, setLiked] = useState<boolean>(false)

  const getDetail = async () => {
    const { msg, data, code, isLiked } = (await getPostDetial({
      id: id as string
    })) as HttpResponse
    if (code !== 200) return message.error('unknown error')
    // detail.value = data
    // _isLiked.value = isLiked as boolean
    setPost(data)
    setLiked(isLiked as boolean)
  }

  const getPostComments = async () => {
    const { code, data, total, msg } = (await getComments({
      postId: id as string
    })) as HttpResponse

    if (code !== 200) return message.error(msg || 'unknown error')
    setComments(toTree(data))
    setCommentTotal(total as number)
  }

  const handleLike = async (id: string) => {
    const { msg, code, data, isLiked } = (await setLike({ id })) as HttpResponse
    if (code !== 200) return message.error(msg || '')
    if (data > (post.like as number)) {
      message.success(msg || '')
    } else {
      message.warn(msg || '')
    }
    setLiked(isLiked as boolean)
    setPost((prev) => ({ ...prev, like: data }))
  }

  const toComment = () => {
    console.log(111)
    scrollToElement('.comment', 800, 0)
  }

  useEffect(() => {
    if (!id) return
    getDetail()
    getPostComments()
  }, [id])

  return (
    <div className="container w900">
      <div className={style.detail + ' padding-2'}>
        <h1>{post.title}</h1>
        <div className="count-data">
          <span className="me-3">{formatDate(post.created || '')}</span>
          <span>阅读{post?.read}</span>
        </div>

        <div className="content">
          <div className="side">
            {/* <Badge
              count={post.like}
              className="mb-2"
              style={{
                backgroundColor: liked ? '#6768aa' : 'transparent',
                color: liked ? '#fff' : '#6768aa',
                boxShadow: '0 0 0 1px #6768aa inset'
              }}
            >
              <Button
                type={liked ? 'primary' : 'default'}
                shape="circle"
                size="large"
                onClick={() => handleLike(post._id)}
                icon={<StarOutlined />}
              />
            </Badge>

            <Badge count={commentTotal}>
              <Button
                shape="circle"
                size="large"
                onClick={toComment}
                icon={<CommentOutlined />}
              />
            </Badge> */}
          </div>
          <Editor
            modelValue={post.content}
            previewOnly
            showCodeRowNumber
          ></Editor>

          <div className="footer">
            <Button
              onClick={() => handleLike(post._id || '')}
              type={liked ? 'primary' : 'default'}
              icon={<StarOutlined />}
            >
              <span>点赞 {post.like}</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="comment mt-2  w900 pt-2">
        111
        {/* <msg-list
      :list="comments"
      :total="commentsTotal"
      @onSubmit="handleSetComment"
    ></msg-list> */}
      </div>
    </div>
  )
}

export default Post
