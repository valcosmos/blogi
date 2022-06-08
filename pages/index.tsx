import type { NextPage } from 'next'

import Head from 'next/head'

import Posts from '@/components/posts'

import Hots from '@/components/hots'

import Tags from '@/components/tags'

import { Col, Row, Badge } from 'antd'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Valcosmos | 李青丘的个人博客</title>

        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术"
        />
        
        <meta name="keywords" content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, Koa, nodejs, Jenkins, Docker, Golang, Gin, Python" />
        
        <meta name="author" content="Cupid Valentine | 李青丘" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="home container">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={18} lg={18}>
            <Posts />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Hots />
            <Tags />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
