import React, {useState} from 'react'

import Link from 'next/link'

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
    // router.push(r)
  }

//   const menuList: MenuProps['items'] = [
//     {
//       label: <div className="img"><Image src={logo} alt="logo" width={40} height={40}/></div>,
//       key: 'logo',
//       className: 'logo-item'
//     },
//     {icon: <HomeOutlined/>, label: '首页', key: '/'},
//     {icon: <LinkOutlined/>, label: '友链', key: '/links'},
//     {icon: <ProjectOutlined/>, label: '开源', key: '/open-source'},
//     {icon: <FieldTimeOutlined/>, label: '时间轴', key: '/timeline'},
//     {icon: <MessageOutlined/>, label: '留言', key: '/messages'},
//     {icon: <InfoCircleOutlined/>, label: '关于', key: '/about'}
//   ]
  
  const menuList: MenuProps['items'] = [
    {
      label: <div className="img"><Image src={logo} alt="logo" width={40} height={40} priority={true}/></div>,
      key: 'logo',
      className: 'logo-item'
    },  
    {icon: <HomeOutlined/>, label: <Link href={'/'}>首页</Link>, key: '/'},
    {icon: <LinkOutlined/>, label: <Link href={'/links'}>友链</Link>, key: '/links'},
    {icon: <ProjectOutlined/>, label: <Link href={'/open-source'}>开源</Link>, key: '/open-source'},
    {icon: <FieldTimeOutlined/>, label: <Link href={'/timeline'}>时间轴</Link>, key: '/timeline'},
    {icon: <MessageOutlined/>, label: <Link href={'/messages'}>留言</Link>, key: '/messages'},
    {icon: <InfoCircleOutlined/>, label: <Link href={'/about'}>关于</Link>, key: '/about'}
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
