import {GetStaticProps, NextPage} from 'next'

import Head from 'next/head'

import React, {useState} from 'react'

import {Row, Col, Card, Button} from 'antd'

import Image from "next/image";

import {HttpResponse, ProjectInfo} from '@/common/interface'

import {getProjects} from '@/api/common'

import style from './open.module.scss'


// const OpenSource: NextPage<{ data: any }> = ({data}) => {
export default function OpenSource({data}: any) {

  const [project] = useState<ProjectInfo[]>(data)

  // const _getProject = async () => {
  //   const {code, data, msg} = await getProjects() as HttpResponse
  //   if (code !== 200) return message.error(msg || 'unknown error')
  //   setProject(data)
  // }

  // useEffect(() => {
  //   _getProject()
  // }, [])

  return (
    <>
      <Head>
        <title>Valcosmos | 时间轴</title>

        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术-开源项目"
        />
      </Head>

      <div className={style.openSource + ' container'}>
        <Row gutter={20}>

          {project.map(item => (
            <Col xs={24} sm={12} md={8} lg={6} key={item._id}>
              <Card
                cover={<div className={'repo-cover'}><Image layout={'fill'} objectFit={'contain'}
                                                            src={'https://api.valzt.cn/media/avatar_me.png'}
                                                            alt={'opensource-cover'}/></div>}
                actions={[
                  <Button type={'primary'} key={'repo'} onClick={() => {
                    window.open(item.repo, '_blank')
                  }}>仓库</Button>,
                  <Button key={'link'} onClick={() => {
                    window.open(item.link, '_blank')
                  }}>地址</Button>,

                ]}
              >
                <Card.Meta
                  title={item.name}
                  description={item.desc}
                />
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

  const {data} = await getProjects() as HttpResponse
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

