import {useRouter} from 'next/router'

import dynamic from "next/dynamic";

import Head from 'next/head'

import {NextPage} from 'next'

// import Link from 'next/link'
import {getComments, getPostDetail, getPosts, setComment, setLike} from '@/api/post'

import {HttpResponse, MsgInfo, PostInfo} from '@/common/interface'

import {message, Button, Badge} from 'antd'

import {StarOutlined, CommentOutlined} from '@ant-design/icons'

import {useEffect, useState} from 'react'

import {formatDate, scrollToElement} from '@/utils/utils'

import {toTree} from '@valcosmos/to-tree'

import {FormType} from "@/components/comment-form"

import Editor from 'md-editor-rt'

const CommentList = dynamic(() => import('@/components/comment-list'))

import style from './post.module.scss'

export default function Post(props: { data: PostInfo, isLiked: boolean, comments: MsgInfo[], commentsTotal: number }) {

  const [post, setPost] = useState<PostInfo>(props.data)

  const [comments, setComments] = useState<MsgInfo[]>(props.comments)

  const [commentTotal, setCommentTotal] = useState<number>(props.commentsTotal)

  const [liked, setLiked] = useState<boolean>(props.isLiked)

  console.log(props.isLiked)

  const router = useRouter()

  const {id} = router.query

  // const getDetail = async () => {
  //   const {msg, data, code, isLiked} = (await getPostDetail({
  //     id: id as string
  //   })) as HttpResponse
  //   if (code !== 200) return message.error(msg || 'unknown error')
  //   // detail.value = data
  //   // _isLiked.value = isLiked as boolean
  //   setPost({...data, created: formatDate(data.created)})
  //   setLiked(isLiked as boolean)
  // }

  const getPostComments = async () => {
    const {code, data, total, msg} = (await getComments({
      postId: id as string
    })) as HttpResponse

    if (code !== 200) return message.error(msg || 'unknown error')
    setComments(toTree(data))
    setCommentTotal(total as number)
  }

  const setPostComment = async (props: FormType) => {
    const {code, msg} = (await setComment({
      postId: post._id,
      ...props
    })) as HttpResponse

    if (code !== 200) return message.error(msg || 'unknown error')
    await getPostComments()
  }

  const setFormData = async (props: FormType) => {
    if (props.email === '') {
      delete props.email
    }
    // const { code, msg } = (await setMsgs(props)) as HttpResponse
    // if (code !== 200) return message.error(msg || 'unknown error')
    // await getMsgList()
    // Post(props)
    setPostComment(props)
  }

  const handleLike = async (id: string) => {
    const {msg, code, data, isLiked} = (await setLike({id})) as HttpResponse
    if (code !== 200) return message.error(msg || '')
    if (data > (post.like as number)) {
      message.success(msg || '')
    } else {
      message.warn(msg || '')
    }
    setLiked(isLiked as boolean)
    setPost((prev) => ({...prev, like: data}))
  }

  const toComment = () => {
    scrollToElement('.comment', 800, 0)
  }

  useEffect(() => {
    if (!id) return
    // getDetail()
    // getPostComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Head>
        <title>{'Valcosmos | ' + post.title}</title>

        <meta
          name="description"
          content={`valcosmos-李青丘的个人博客-Web前端开发-分享前端技术-${post.title}`}
        />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, Koa, nodejs, Jenkins, Docker, Golang, Gin, Python"
        />

        <meta name="author" content="Cupid Valentine | 李青丘"/>

        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>

      <div style={{padding: '0 20px'}}>
        <div className={style.detail + " container w900"}>
          <div>
            <h1>{post.title}</h1>
            <div className="count-data">
              <span className="me-3">{post.created || ''}</span>
              <span>阅读{post?.read}</span>
            </div>

            <div className="content">
              <div className="side">
                <Badge
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
                    icon={<StarOutlined/>}
                  />
                </Badge>

                <Badge count={commentTotal}>
                  <Button
                    shape="circle"
                    size="large"
                    onClick={toComment}
                    icon={<CommentOutlined/>}
                  />
                </Badge>
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
                  icon={<StarOutlined/>}
                >
                  <span>点赞 {post.like}</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="comment mt-2 w900 pt-2">

            <CommentList
              setFormData={setFormData} list={comments} total={commentTotal}
            />

          </div>
        </div>
      </div>
    </>
  )
}


export async function getStaticProps(context: any) {
  const {params} = context

  const id = params.id

  const {data, isLiked} = (await getPostDetail({
    id: id as string
  })) as HttpResponse


  const {data: comments, total: commentsTotal} = (await getComments({
    postId: id as string
  })) as HttpResponse

  if (!data) {
    return {notFound: true}
  }

  return {
    props: {
      data,
      isLiked,
      comments,
      commentsTotal
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const {total: postListTotal, data: posts} = (await getPosts({
    sort: -1,
    current: 1,
    pageSize: 10,
    tag: ''
  })) as HttpResponse


  const ids = posts.map((post: PostInfo) => post._id)

  const pathsWithParams = ids.map((id: string) => ({params: {id}}))

  return {
    paths: pathsWithParams,
    fallback: false
  }
}
