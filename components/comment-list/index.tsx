import { MsgInfo } from '@/common/interface'
import { List, Comment, Tooltip } from 'antd'
import React, { FC } from 'react'
import style from './comment.module.scss'

interface CommentProps {
  list: MsgInfo[]
  total: number
  type?: string
}

interface CustomCommentProps {
  item: MsgInfo
  key?: string
}

const CommentList: FC<CommentProps> = ({ list, total }) => {
  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title="YYYY-MM-DD HH:mm:ss">
          <span>{'aa'}</span>
        </Tooltip>
      )
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title="YYYY-MM-DD HH:mm:ss">
          <span>{'aaa'}</span>
        </Tooltip>
      )
    }
  ]

  const createMarkup = (avatar: string) => {
    return { __html: avatar }
  }

  const CustomComment: FC<CustomCommentProps> = ({ item, key }) => {
    return (
      <Comment
        key={key && key}
        actions={[<span key={'reply=>' + key}>Reply to</span>]}
        author={item.nickname}
        avatar={[
          <div
            key="avatar"
            className="avatar"
            dangerouslySetInnerHTML={createMarkup(item.avatar)}
          ></div>
        ]}
        content={item.content}
        datetime={item.created}
      >
        {item.children?.length > 0 &&
          item.children.map((item: MsgInfo) =>
            CustomComment({ item, key: item._id })
          )}
      </Comment>
    )
  }

  return (
    <div className={style.commentList}>
      <List
        className="comment-list"
        header={`${total} replies`}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <li>
            <CustomComment item={item} />
          </li>
        )}
      />
    </div>
  )
}

export default CommentList
