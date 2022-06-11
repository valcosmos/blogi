import {MsgInfo} from '@/common/interface'
import React, {FC, useState} from 'react'
import {Comment} from 'antd'
import {formatDate} from '@/utils/utils'
import CommentForm, {FormType} from '@/components/comment-form'

interface CustomCommentProps {
  item: MsgInfo
  id: string
  active: string
  setActive: (str: string) => void
  setFormData: (form: FormType) => void
}

const CustomComment: FC<CustomCommentProps> = ({item, id, active, setActive, setFormData}, key) => {
  // const [itemID, setItemID] = useState<string>('')

  const createMarkup = (avatar: string) => {
    return {__html: avatar}
  }

  const handleReply = (id: string) => {
    // setItemID((prev) => (prev === id ? '' : id))
    setActive(active === id ? '' : id)
  }

  const _setCommentForm = (data: FormType) => {
    setActive('')
    setFormData(data)
  }

  return (
    <Comment
      key={key && key}
      actions={[
        <span
          key={'reply=>' + key}
          onClick={() => {
            handleReply(id as string)
          }}
        >
          {active === id && '取消'}回复
        </span>,
        active === id && <CommentForm getFormData={_setCommentForm} key={'form=>' + key} pid={id}/>
      ]}
      author={item.nickname}
      avatar={[
        <div
          key="avatar"
          className="avatar"
          dangerouslySetInnerHTML={createMarkup(item.avatar)}
        ></div>
      ]}
      content={item.content}
      datetime={formatDate(item.created as string)}
    >
      {item.children?.length > 0 &&
        item.children.map((item: MsgInfo) =>
          CustomComment({item, id: item._id, active, setActive, setFormData}, item._id)
        )}
    </Comment>
  )
}

export default CustomComment
