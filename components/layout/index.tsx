import {FC, ReactNode} from 'react'
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
    </div>
  )
}

export default LayoutCom
