import { NextPage } from 'next'
import Head from 'next/head'

import React, { useEffect, useState } from 'react'
import { Avatar } from 'antd'
import Editor from 'md-editor-rt'
import { getAbout } from '@/api/common'
import { HttpResponse } from '@/common/interface'

import style from './about.module.scss'

const About: NextPage = () => {
  const [text, setText] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')

  const getInfo = async () => {
    const { code, msg, data } = (await getAbout()) as HttpResponse
    if (code === 200) {
      setAvatar(data.avatar)
      setText(data.info)
    }
  }

  useEffect(() => {
    getInfo()
  }, [])
  return (
    <>
      <Head>
        <title>Valcosmos | 关于我</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <div className={style.about + ' padding-2'}>
          <div className="avatar">
            <Avatar size={100} src={avatar}></Avatar>
          </div>
          <div className="content">
            <Editor modelValue={text} previewOnly></Editor>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
