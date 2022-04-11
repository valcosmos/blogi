import React, { useEffect, useState } from 'react'
import style from './posts.module.scss'
import { List, Space } from 'antd'
import { getPosts } from '@/api/post'

import Image from 'next/image'

import PostImg from '@/assets/img/post.jpg'

import {
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
  EyeOutlined,
  ClockCircleOutlined,
  LinkOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import { HttpResponse, PostInfo } from '@/common/interface'

export default function PostList() {
  const [list, setList] = useState<Array<PostInfo>>([])

  const [total, setTotal] = useState(0)

  const [pageInfo, setPageInfo] = useState({
    sort: -1,
    current: 1,
    pageSize: 10
  })

  const getPostList = async () => {
    const { code, msg, total, data } = (await getPosts(
      pageInfo
    )) as HttpResponse
    if (code === 200) {
      setList(data)
      setTotal(total || 0)
    }
  }
  useEffect(() => {
    getPostList()
  }, [pageInfo.current])

  const icons: Record<string, any | string>[] = [
    { type: EyeOutlined, text: 'read' },
    { type: LikeOutlined, text: 'like' },
    { type: MessageOutlined, text: 'comment' },
    { type: ClockCircleOutlined, text: 'time' }
  ]

  const IconText = ({ icon, text }: { icon: any; text?: number | string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (
    <div className={style.posts}>
      <List
        className="post-list"
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            setPageInfo((prev) => ({ ...prev, current: page }))
          },
          pageSize: 10,
          total: total
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={EyeOutlined} text={item.read} key="1" />,
              <IconText icon={LinkOutlined} text={item.like} key="2" />,
              <IconText icon={MessageOutlined} text={item.comment} key="3" />,
              <IconText
                icon={ClockCircleOutlined}
                text={item.created}
                key="4"
              />
            ]}
            extra={<Image width={100} height={100} alt="logo" src={PostImg} />}
          >
            <List.Item.Meta
              title={<Link href={`/post/${item._id}`}>{item.title}</Link>}
              // description={item.description}
            />
            {item.content.substring(0, 40) + '...'}
          </List.Item>
        )}
      />
    </div>
  )
}
