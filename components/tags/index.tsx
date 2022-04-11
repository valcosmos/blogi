import React, { useEffect, useState } from 'react'

import { Card, message, Tag } from 'antd'

import { TagOutlined } from '@ant-design/icons'

import style from './tags.module.scss'
import { getTags } from '@/api/post'
import { HttpResponse, TagInfo } from '@/common/interface'

export default function Tags() {
  const [tags, setTags] = useState<TagInfo[]>([])

  const tagColor = [
    'pink',
    'red',
    'orange',
    'green',
    'cyan',
    'blue',
    'purple',
    'pink',
    'red',
    'orange',
    'green',
    'cyan',
    'blue',
    'purple'
  ]

  const _getTags = async () => {
    const { code, data, msg } = (await getTags()) as HttpResponse
    if (code !== 200) return message.error(msg || 'unknown error')
    console.log(data)
    setTags(data)
  }

  const handleTagClick = (tag?: string) => {
    console.log(tag)
  }

  useEffect(() => {
    _getTags()
  }, [])

  return (
    <div className={style.tags}>
      <Card
        title={
          <>
            <TagOutlined />
            <span className="ms-1">文章标签</span>
          </>
        }
      >
        <div className="all-posts">
          <Tag color="purple">
            <span onClick={() => handleTagClick}>所有文章</span>
          </Tag>
        </div>

        {tags.map((tag, index) => (
          <Tag key={tag._id} color={tagColor[index]}>
            <span onClick={() => handleTagClick(tag.tagName)}>
              {tag.tagName}
            </span>
          </Tag>
        ))}
      </Card>
    </div>
  )
}
