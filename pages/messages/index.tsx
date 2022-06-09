import { NextPage } from 'next'

import dynamic from 'next/dynamic'

import Head from 'next/head'

import React, { useEffect, useState } from 'react'

import { message } from 'antd'

// import CommentList from '@/components/comment-list'
const CommentList = dynamic(() => import('@/components/comment-list'))

import { HttpResponse, MsgInfo } from '@/common/interface'

import { getMsgs, setMsgs } from '@/api/common'

import { toTree } from '@/utils/utils'

import { FormType } from '@/components/comment-form'

import style from './msg.module.scss'

const Msgs: NextPage = () => {
  const [msgs, setMsg] = useState<MsgInfo[]>([])

  const [total, setTotal] = useState<number>(0)

  const getMsgList = async () => {
    const { code, data, total } = (await getMsgs()) as HttpResponse
    if (code === 200) {
      // const res = toTree(data)

      setMsg([...toTree(data)])
      setTotal(total as number)
    }
  }

  const onSubmit = async (value: FormType) => {
    const { code, msg } = (await setMsgs(value)) as HttpResponse
    if (code !== 200) return message.error(msg || 'unknown error')
    await getMsgList()
  }

  const setFormData = async (props: FormType) => {
    if (props.email === '') {
      delete props.email
    }
    // const { code, msg } = (await setMsgs(props)) as HttpResponse
    // if (code !== 200) return message.error(msg || 'unknown error')
    // await getMsgList()
    onSubmit(props)
  }

  useEffect(() => {
    getMsgList()
  }, [])

  return (
    <>
      <Head>
        <title>Valcosmos | 留言</title>
        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术-站点留言"
        />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, Koa, nodejs, Jenkins, Docker, Golang, Gin, Python"
        />

        <meta name="author" content="Cupid Valentine | 李青丘" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.msgs + ' container'}>
        <CommentList setFormData={setFormData} list={msgs} total={total} />
      </div>
    </>
  )
}

export default Msgs
