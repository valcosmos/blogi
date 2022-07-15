import {GetStaticProps} from 'next'

import Head from 'next/head'

import React, {useState} from 'react'

import {RocketOutlined} from '@ant-design/icons'

import {Timeline} from 'antd'

import {formatDate} from '@/utils/utils'

import {HttpResponse, LogInfo} from '@/common/interface'

import {getLogs} from '@/api/common'

import style from './timeline.module.scss'

// const TL: NextPage<{ data: any }> = ({data}) => {

export default function TL({data}: any) {
  const [logs] = useState<LogInfo[]>(data)
  // const getLogLists = async () => {
  //   const {msg, data, code} = (await getLogs()) as HttpResponse
  //   if (code === 200) {
  //     setLogs(data)
  //   }
  // }
  // useEffect(() => {
  //   getLogLists()
  // }, [])
  return (
    <>
      <Head>
        <title>Valcosmos | 时间轴</title>

        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术-时间轴"
        />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, Koa, nodejs, Jenkins, Docker, Golang, Gin, Python"
        />

        <meta name="author" content="Cupid Valentine | 李青丘"/>

        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div className={style.timeline + ' container'}>
        <Timeline mode="alternate" className="pt-3">
          {logs.map((item, index) => {
            return (
              <Timeline.Item
                dot={
                  index === 0 && <RocketOutlined style={{fontSize: '28px'}}/>
                }
                key={item._id}
                color={index % 2 === 0 ? 'green' : 'blue'}
              >
                <h3>{item.log}</h3>
                <p>{item.created || ''}</p>
              </Timeline.Item>
            )
          })}
        </Timeline>
      </div>
    </>
  )
}


// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  const {data: res} = (await getLogs()) as HttpResponse

  const data = res.map((item: LogInfo) => ({...item, created: formatDate(item.created as string)}))

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
