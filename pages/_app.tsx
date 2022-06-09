import type { AppProps } from 'next/app'

import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/layout'))

// import Layout from '../components/layout'

import 'md-editor-rt/lib/style.css'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
