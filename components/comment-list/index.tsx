import {MsgInfo} from '@/common/interface'
import {List, Comment, Tooltip} from 'antd'
import React, {FC, useState} from 'react'
import style from './comment.module.scss'
import CustomComment from './comment'
import CommentForm from '@/components/comment-form'

import {FormType} from '@/components/comment-form'

interface CommentProps {
  list: MsgInfo[]
  total: number
  type?: string
  setFormData: (props: FormType) => void
}

const CommentList: FC<CommentProps> = ({list, total, setFormData}) => {
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
            <CustomComment id={item._id} item={item} active={active} setActive={handleActive} setFormData={getFormData}/>
          </li>
        )}
      />
    </div>
  )
}

export default CommentList
