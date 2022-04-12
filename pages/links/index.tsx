import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { getLinks } from '@/api/common'
import { HttpResponse, LinkInfo } from '@/common/interface'
import Image from 'next/image'

import style from './links.module.scss'

const Links: NextPage = () => {
  const [links, setLinks] = useState<LinkInfo[]>([])
  const getLinkLists = async () => {
    const { code, msg, data } = (await getLinks()) as HttpResponse
    if (code === 200) {
      setLinks(data)
    }
  }

  useEffect(() => {
    getLinkLists()
  },[])
  return (
    <div className={style.links + ' container mt-2'}>
      <Card className="mb-2" title={'友链信息'}>
        <p>站名：Valcosmos</p>
        <p>地址：valzt.cn</p>
        <p>头像：https://api.valzt.cn/media/avatar_me.png</p>
        <p>个签：人生如逆旅，我亦是行人</p>
      </Card>

      <Row gutter={20}>
        {links.map((link) => (
          <Col key={link._id} xs={24} sm={12} md={8} lg={6} className="mb-2">
            <Card
              cover={
                <Image
                  alt="avatar"
                  src={link.avatar}
                  width={100}
                  height={100}
                />
              }
              actions={[
                <Button type="primary" icon={<LinkOutlined />} key={'link'}>
                  访问
                </Button>
              ]}
            >
              <Card.Meta title={link.nickname} description={link.desc} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Links
