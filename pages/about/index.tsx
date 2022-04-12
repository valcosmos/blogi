import { NextPage } from 'next'
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
  )
}

export default About
