import React, {CSSProperties, FC, ReactNode} from 'react'

import dynamic from "next/dynamic";

import {BackTop} from 'antd';
// import style from './layout.module.scss'
import {Layout} from 'antd'

// import Menu from '@/components/menu'
//
// import Banner from '@/components/banner'
//
// import Footer from '@/components/footer'

import {useRouter} from "next/router";

const Menu = dynamic(() => import('@/components/menu'))

const Banner = dynamic(() => import('@/components/banner'))

const Footer = dynamic(() => import('@/components/footer'))

import style from './layout.module.scss'


interface LayoutProps {
  children?: ReactNode
}

const topStyle: CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#6868a9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

// const LayoutCom: FC<LayoutProps> = ({children}) => {
export default function LayoutCom({children}: LayoutProps) {
  const router = useRouter()

  return (
    <div>
      <Layout className={style.layout}>
        <Layout.Header className="l-header">
          <div className="img">
            <div className={'img-view'}></div>
          </div>
          <Menu/>
        </Layout.Header>

        <Layout.Content>
          {!router.pathname.includes('post') && <div className="banner">
            <Banner/>
          </div>}
          {children}
        </Layout.Content>

        <Layout.Footer className="l-footer">
          <Footer></Footer>
        </Layout.Footer>
      </Layout>


      <BackTop>
        <div style={topStyle}>UP</div>
      </BackTop>
    </div>
  )
}

