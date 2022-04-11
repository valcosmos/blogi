import React, { useState } from 'react'

import { Menu } from 'antd'

import {
  FieldTimeOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LinkOutlined,
  MessageOutlined
} from '@ant-design/icons'

import Image from 'next/image'

import logo from '@/assets/img/logoh64.png'

import style from '@/components/menu/menu.module.scss'
import { useRouter } from 'next/router'

const CustomMenu = () => {
  const router = useRouter()
  const [current, setCurrent] = useState('mail')

  const handleClick = (e: any) => {
    setCurrent(e.key)
    router.push(e.key)
  }

  const menuList = [
    { icon: HomeOutlined, title: '首页', key: '/' },
    { icon: LinkOutlined, title: '友链', key: '/links' },
    { icon: FieldTimeOutlined, title: '时间轴', key: '/timeline' },
    { icon: MessageOutlined, title: '留言', key: '/messages' },
    { icon: InfoCircleOutlined, title: '关于', key: '/about' }
  ]

  return (
    <Menu
      className={style.menu}
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item className="icon" key="icon" disabled>
        <Image src={logo} alt="logo" width="40" height="40" />
      </Menu.Item>
      {menuList.map((item) => (
        <Menu.Item key={item.key} icon={<item.icon />}>
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default CustomMenu
