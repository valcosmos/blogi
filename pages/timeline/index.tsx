import { NextPage } from 'next'

import Head from 'next/head'

import React, { useEffect, useState } from 'react'

import { RocketOutlined } from '@ant-design/icons'

import { Timeline } from 'antd'

import { formatDate } from '@/utils/utils'

import style from './timeline.module.scss'

import { HttpResponse, LogInfo } from '@/common/interface'
import { getLogs } from '@/api/common'

const TL: NextPage = () => {
  const [logs, setLogs] = useState<LogInfo[]>([])
  const getLogLists = async () => {
    const { msg, data, code } = (await getLogs()) as HttpResponse
    if (code === 200) {
      setLogs(data)
    }
  }
  useEffect(() => {
    getLogLists()
  }, [])
  return (
    <>
      <Head>
        <title>Valcosmos | 时间轴</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.timeline + ' container'}>
        <Timeline mode="alternate" className="pt-3">
          {logs.map((item, index) => {
            return (
              <Timeline.Item
                dot={
                  index === 0 && <RocketOutlined style={{ fontSize: '28px' }} />
                }
                key={item._id}
                color={index % 2 === 0 ? 'green' : 'blue'}
              >
                <h3>{item.log}</h3>
                <p>{formatDate(item.created || '')}</p>
              </Timeline.Item>
            )
          })}
        </Timeline>
      </div>
    </>
  )
}

export default TL
