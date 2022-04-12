import { MsgInfo } from '@/common/interface'
import React, { FC, useState } from 'react'
import { Comment } from 'antd'
import { formatDate } from '@/utils/utils'
import CommentForm from '@/components/comment-form'

interface CustomCommentProps {
  item: MsgInfo
  id: string
}

const CustomComment: FC<CustomCommentProps> = ({ item, id }, key) => {
  const [itemID, setItemID] = useState<string>('')

  const createMarkup = (avatar: string) => {
    return { __html: avatar }
  }

  
  const handleReply = (id: string) => {
    setItemID((prev) => (prev === id ? '' : id))
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
          {itemID === id && '取消'}回复
        </span>,
        itemID === id && <CommentForm getFormData={()=>{}} key={'form=>' + key} />
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
          CustomComment({ item, id: item._id }, item._id)
        )}
    </Comment>
  )
}

export default CustomComment
