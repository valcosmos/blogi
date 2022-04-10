import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Menu, Pagination } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons'

const Home: NextPage = () => {
  const [current, setCurrent] = useState('mail')

  const handleClick = (e: any) => {
    console.log('click ', e)

    setCurrent(e.key)
  }

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize)
  }

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
      </Menu>

      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
        onChange={(page, pagesize) => {
          console.log(page)
          console.log(pagesize)
        }}
      />
      <div>Home</div>
    </>
  )
}

export default Home
