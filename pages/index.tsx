import type { NextPage } from 'next'

import Posts from '@/components/posts'

import Hots from '@/components/hots'

import Tags from '@/components/tags'

import { Col, Row } from 'antd'

const Home: NextPage = () => {
  return (
    <>
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
