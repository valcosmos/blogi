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
