import {MsgInfo} from '@/common/interface'

import {List} from 'antd'

import React, {FC, useState} from 'react'

import CustomComment from './comment'

import CommentForm from '@/components/comment-form'

import {FormType} from '@/components/comment-form'

import style from './comment.module.scss'


interface CommentProps {
  list: MsgInfo[]
  total: number
  type?: string
  setFormData: (props: FormType) => void
}

export default function CommentList({list, total, setFormData}: CommentProps) {

  const [active, setActive] = useState('')
  const getFormData = (value: FormType) => {
    setFormData(value)
  }

  const handleActive = (str: string) => {
    setActive(str)
  }

  return (
    <div className={style.commentList}>
      <CommentForm getFormData={getFormData}/>
      <List
        className="comment-list"
        header={`总共${total}条留言`}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <li>
            <CustomComment id={item._id} item={item} active={active} setActive={handleActive}
                           setFormData={getFormData}/>
          </li>
        )}
      />
    </div>
  )
}
