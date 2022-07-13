import {NextPage} from 'next'

import Head from 'next/head'

import React, {useState} from 'react'

import {Avatar} from 'antd'

import Editor from 'md-editor-rt'

import {getAbout} from '@/api/common'

import {HttpResponse} from '@/common/interface'

import style from './about.module.scss'

const About: NextPage<{ data: any }> = ({data}) => {

  const [text] = useState<string>(data.info)

  const [avatar] = useState<string>(data.avatar)

  /*
  const getInfo = async () => {
    const {code, msg, data} = (await getAbout()) as HttpResponse
    if (code !== 200) return message.error(msg || 'unknown error')
    setAvatar(data.avatar)
    setText(data.info)
  }

  useEffect(() => {
    getInfo()
  }, [])
*/
  return (
    <>
      <Head>
        <title>Valcosmos | 关于我</title>
        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术-关于我-作者简介-站点介绍"
        />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, Koa, nodejs, Jenkins, Docker, Golang, Gin, Python"
        />

        <meta name="author" content="Cupid Valentine | 李青丘"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div className="container">
        <div className={style.about + ' padding-2'}>
          <div className="avatar">
            <Avatar size={100} src={avatar} alt="avatar not found"></Avatar>
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

export async function getStaticProps() {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  const {data} = (await getAbout()) as HttpResponse

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {data} // will be passed to the page component as props
  }
}
