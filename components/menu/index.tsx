import React, { useState } from 'react'

import { Menu, MenuProps } from 'antd'

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
    const r = e.key === 'logo' ? '/' : e.key
    setCurrent(r)
    router.push(r)
  }

  const menuList: MenuProps['items'] = [
    {
      label: <Image src={logo} alt="logo" width="40" height="40" />,
      key: 'logo'
    },
    { icon: <HomeOutlined />, label: '首页', key: '/' },
    { icon: <LinkOutlined />, label: '友链', key: '/links' },
    { icon: <FieldTimeOutlined />, label: '时间轴', key: '/timeline' },
    { icon: <MessageOutlined />, label: '留言', key: '/messages' },
    { icon: <InfoCircleOutlined />, label: '关于', key: '/about' }
  ]

  return (
    <Menu
      className={style.menu}
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={menuList}
    >
      {/* <Menu.Item className="icon" key="icon" disabled>
        <Image src={logo} alt="logo" width="40" height="40" />
      </Menu.Item>
      {menuList.map((item) => (
        <Menu.Item key={item.key} icon={<item.icon />}>
          {item.title}
        </Menu.Item>
      ))} */}
    </Menu>
  )
}

export default CustomMenu
