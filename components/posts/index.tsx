import React, {useEffect, useState} from 'react'

import {List, message, Space} from 'antd'

import {getPosts} from '@/api/post'

import Image from 'next/image'

import {
  MessageOutlined,
  LikeOutlined,
  EyeOutlined,
  ClockCircleOutlined,
  LinkOutlined
} from '@ant-design/icons'

import Link from 'next/link'

import {HttpResponse, PostInfo} from '@/common/interface'

import {postIcon, postIconProps} from '@/utils/post-icon'

import {formatDate, scrollToElement} from '@/utils/utils'

import {useRouter} from 'next/router'

import style from './posts.module.scss'


export default function PostList({tag}: { tag: string }) {
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const [list, setList] = useState<Array<PostInfo>>([])

  const [total, setTotal] = useState(0)

  const [pageInfo, setPageInfo] = useState({
    sort: -1,
    current: 1,
    pageSize: 10
  })

  // const [tag, setTag] = useState('')

  // const {tag: routerTag, page} = router.query


  const icon = (tag?: string): string => {
    let icon = ''
    postIcon.forEach((item: postIconProps) => {
      if (item.tag === tag) {
        icon = item.icon
      }
    })
    return icon
  }

  const getPostList = async () => {
    setLoading(true)
    const {code, msg, total, data} = (await getPosts({...pageInfo, tag})) as HttpResponse
    if (code !== 200) return message.error(msg || 'unknown error')
    setLoading(false)
    setList(data)
    setTotal(total || 0)
  }

  useEffect(() => {
    getPostList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo.current, tag])

  const icons: Record<string, any | string>[] = [
    {type: EyeOutlined, text: 'read'},
    {type: LikeOutlined, text: 'like'},
    {type: MessageOutlined, text: 'comment'},
    {type: ClockCircleOutlined, text: 'time'}
  ]

  const IconText = ({icon, text}: { icon: any; text?: number | string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (
    <div className={style.posts} id="post-list">
      <List
        className="post-list"
        itemLayout="vertical"
        loading={loading}
        size="large"
        pagination={{
          onChange: (page) => {
            setPageInfo((prev) => ({...prev, current: page}))
            scrollToElement('#post-list', 500, -20)
            router.push(`/`)
          },
          pageSize: 10,
          total: total
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={EyeOutlined} text={item.read} key="1"/>,
              <IconText icon={LinkOutlined} text={item.like} key="2"/>,
              <IconText icon={MessageOutlined} text={item.comment as number} key="3"/>,
              <IconText
                icon={ClockCircleOutlined}
                text={formatDate(item.created as string)}
                key="4"
              />
            ]}
            extra={
              <div className="img">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="logo"
                  src={icon(item.tags[0])}
                />
              </div>
            }
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
