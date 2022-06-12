import React, {useState} from 'react'

import {Menu, MenuProps} from 'antd'

import {
  FieldTimeOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LinkOutlined,
  MessageOutlined, ProjectOutlined
} from '@ant-design/icons'

import Image from 'next/image'

import logo from '@/assets/img/logoh64.png'

import {useRouter} from 'next/router'

import style from './menu.module.scss'

const CustomMenu = () => {
  const router = useRouter()
  const [current, setCurrent] = useState('mail')

  const handleClick = (e: any) => {
    const r = e.key === 'logo' ? '/' : e.key
    setCurrent(r)
    router.push(r)
  }

  const menuList: MenuProps['items'] = [
    {
      label: <div className="img"><Image src={logo} alt="logo" width={40} height={40}/></div>,
      key: 'logo',
      className: 'logo-item'
    },
    {icon: <HomeOutlined/>, label: '首页', key: '/'},
    {icon: <LinkOutlined/>, label: '友链', key: '/links'},
    {icon: <ProjectOutlined/>, label: '开源', key: '/open-source'},
    {icon: <FieldTimeOutlined/>, label: '时间轴', key: '/timeline'},
    {icon: <MessageOutlined/>, label: '留言', key: '/messages'},
    {icon: <InfoCircleOutlined/>, label: '关于', key: '/about'}
  ]

  return (
    <Menu
      className={style.menu}
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={menuList}
    />
  )
}

export default CustomMenu
