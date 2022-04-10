import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { Button } from 'antd'
import { lazy } from 'react'

import Post from './posts'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Post></Post>
      <Button type="primary">Button</Button>
      <Link href={'/links'}>links</Link>
      <Link href={'/timeline'}>timeline</Link>
      <Link href={'/messages'}>messages</Link>
      <Link href={'/about'}>about</Link>
    </div>
  )
}

export default Home
