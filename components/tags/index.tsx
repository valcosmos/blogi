import React, {useEffect, useState} from 'react'

import {Card, message, Tag} from 'antd'

import {TagOutlined} from '@ant-design/icons'

import {getTags} from '@/api/post'

import {HttpResponse, TagInfo} from '@/common/interface'

import style from './tags.module.scss'


export default function Tags({getTag, list}: { getTag: (tag: string) => void, list?: any }) {
  const [tags, setTags] = useState<TagInfo[]>(list)

  const tagColor = [
    '#d54700',
    '#0098dd',
    '#87d068',
    '#108ee9',
    '#33333D',
    '#000000',
    '#092E20',
    '#3776AB',
    '#00ADD8',
    '#009639',
    '#5FCF80',
    '#3178C6',
    '#D24939',
  ]

  const _getTags = async () => {
    const {code, data, msg} = (await getTags()) as HttpResponse
    if (code !== 200) return message.error(msg || 'unknown error')
    setTags(data)
  }

  const handleTagClick = (tag?: string) => {
    getTag(tag as string)
  }

  useEffect(() => {
    // _getTags()
  }, [])

  return (
    <div className={style.tags + " mt-2"}>
      <Card
        title={
          <>
            <TagOutlined/>
            <span className="ms-1">文章标签</span>
          </>
        }
      >
        <div className="all-posts">
          <Tag color="purple">
            <span onClick={() => handleTagClick('')}>所有文章</span>
          </Tag>
        </div>

        {tags.map((tag, index) => (
          // <Tag key={tag._id} color={tagColor[index]}>
          <Tag key={tag._id}>
            <span onClick={() => handleTagClick(tag.tagName)}>
              {tag.tagName}
            </span>
          </Tag>
        ))}
      </Card>
    </div>
  )
}
