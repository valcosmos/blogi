import type {NextPage} from 'next'

import Head from 'next/head'

import dynamic from 'next/dynamic'

import {Col, Row, Badge} from 'antd'
import {useState} from "react";

// const DynamicComponent = dynamic(() =>
//   import('../components/hello').then((mod) => mod.Hello)
// )


// import Posts from '@/components/posts'

// import Hots from '@/components/hots'

// import Tags from '@/components/tags'

const Posts = dynamic(() => import('@/components/posts'))

const Hots = dynamic(() => import('@/components/hots'))

const Tags = dynamic(() => import('@/components/tags'))


const Home: NextPage = () => {
  const [tag, setTag] = useState<string>('')

  const getTag = (tag: string) => {
    setTag(tag)
  }

  return (
    <>
      <Head>
        <title>Valcosmos | 李青丘的个人博客</title>
        <link rel="shortcut icon" href="webicon.ico" />
        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术"
        />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, Koa, nodejs, Jenkins, Docker, Golang, Gin, Python"
        />

        <meta name="author" content="Cupid Valentine | 李青丘"/>

        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div className="home container">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={18} lg={18}>
            <Posts tag={tag} />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Hots/>
            <Tags getTag={getTag}/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
