import { FC, ReactNode } from 'react'
import style from './layout.module.scss'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <div>Layout</div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
