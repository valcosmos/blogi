import {CSSProperties, FC, ReactNode} from 'react'

import { BackTop } from 'antd';
// import style from './layout.module.scss'
import {Layout} from 'antd'

import Menu from '@/components/menu'

import Banner from '@/components/banner'

import Footer from '@/components/footer'

import style from './layout.module.scss'
import {useRouter} from "next/router";

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

const LayoutCom: FC<LayoutProps> = ({children}) => {

  const router = useRouter()

  console.log(typeof router.pathname)
  return (
    <div>
      <Layout className={style.layout}>
        <Layout.Header className="l-header">
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

export default LayoutCom
