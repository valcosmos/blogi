import {NextPage, GetStaticProps} from 'next'

import Head from 'next/head'

import React, {useState} from 'react'

import {Card, Row, Col, Button} from 'antd'

import {LinkOutlined} from '@ant-design/icons'

import {getLinks} from '@/api/common'

import {HttpResponse, LinkInfo} from '@/common/interface'

import Image from 'next/image'

import style from './links.module.scss'

export default function Links({data}: any) {
  const [links] = useState<LinkInfo[]>(data)
  // const getLinkLists = async () => {
  //   const {code, msg, data} = (await getLinks()) as HttpResponse
  //   if (code !== 200) return message.error(msg || 'unknown error')
  //   setLinks(data)
  //
  // }

  // useEffect(() => {
  //   getLinkLists()
  // }, [])
  return (
    <>
      <Head>
        <title>Valcosmos | 友情链接</title>
        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术-友情链接"
        />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, Koa, nodejs, Jenkins, Docker, Golang, Gin, Python"
        />

        <meta name="author" content="Cupid Valentine | 李青丘"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
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
                  <Button type="primary" icon={<LinkOutlined/>} key={'link'} onClick={() => {
                    window.open(link.url, '_blank')
                  }}>
                    访问
                  </Button>
                ]}
              >
                <Card.Meta title={link.nickname} description={link.desc}/>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const {data} = (await getLinks()) as HttpResponse
  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {data}, // will be passed to the page component as props
    revalidate: 60
  }
}
