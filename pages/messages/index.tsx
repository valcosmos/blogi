import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import CommentList from '@/components/comment-list'
import style from './msg.module.scss'
import { HttpResponse, MsgInfo } from '@/common/interface'
import { getMsgs, setMsgs } from '@/api/common'
import { toTree } from '@/utils/utils'
import { message } from 'antd'

const Msgs: NextPage = () => {
  const [msgs, setMsg] = useState<MsgInfo[]>([])

  const [total, setTotal] = useState<number>(0)

  const getMsgList = async () => {
    const { code, data, total } = (await getMsgs()) as HttpResponse
    if (code === 200) {
      setMsg(toTree(data))
      setTotal(total as number)
    }
  }

  const onSubmit = async (value: {
    nickname: string
    content: string
    pid: string
  }) => {
    const { code, msg } = (await setMsgs(value)) as HttpResponse
    if (code !== 200) return message.error(msg || 'unknown error')
    await getMsgList()
  }

  useEffect(() => {
    getMsgList()
  }, [])

  return (
    <div className={style.msgs + ' container'}>
      <CommentList list={msgs} total={total} />
    </div>
  )
}

export default Msgs
