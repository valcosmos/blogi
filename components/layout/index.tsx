import { FC, ReactNode } from 'react'
// import style from './layout.module.scss'
import { Layout } from 'antd'

import Menu from '@/components/menu'

import Banner from '@/components/banner'

import Footer from '@/components/footer'

interface LayoutProps {
  children?: ReactNode
}

const LayoutCom: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Layout className="l-layout">
        <Layout.Header className="l-header">
          <Menu />
        </Layout.Header>

        <Layout.Content>
          <div className="banner">
            <Banner />
          </div>
          {/* <main>{children}</main> */}
          {children}
        </Layout.Content>

        <Layout.Footer className="l-footer">
          <Footer></Footer>
        </Layout.Footer>
      </Layout>
    </div>
  )
}

export default LayoutCom
