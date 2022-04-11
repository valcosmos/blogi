import React, { useEffect, useState } from 'react'
import style from './hots.module.scss'
import { Card, List, message, Badge } from 'antd'
import { FireOutlined } from '@ant-design/icons'
import { getHotPosts } from '@/api/post'
import { HttpResponse, PostInfo } from '@/common/interface'

export default function Hots() {
  const [hots, setHots] = useState<Array<PostInfo>>([])

  const getList = async () => {
    const { code, msg, data } = (await getHotPosts()) as HttpResponse
    if (code !== 200) return message.error(msg || 'unknown error')
    setHots(data)
  }

  useEffect(() => {
    getList()
  }, [])

  const toPostDetial = (id: string) => {
    console.log(id)
  }

  return (
    <div className={style.hots}>
      <Card
        title={
          <>
            <FireOutlined />
            <span className="ms-1">点击排行</span>
          </>
        }
      >
        <List
          bordered
          dataSource={hots}
          className={'hot-list'}
          renderItem={(item, index) => (
            <List.Item>
              <div onClick={() => toPostDetial(item._id)} className="title">
                <Badge
                  count={index + 1}
                  style={{ backgroundColor: index < 3 ? '#52c41a' : '#d3d3d3' }}
                />
                <span className="ms-1 title-content">{item.title}</span>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}
