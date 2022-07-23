import type {AppProps} from 'next/app'

import Head from "next/head"

import {useRouter} from "next/router";

import {useEffect} from "react";

import NProgress from 'nprogress'

import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/layout'))

import 'nprogress/nprogress.css'

import 'md-editor-rt/lib/style.css'

import '../styles/globals.scss'

export default function MyApp({Component, pageProps}: AppProps) {

  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    router.events.on("routeChangeError", () => {
      NProgress.done();
    });

  }, [router.events]);

  return (
    <>
      <Head>
        <title>valcosmos</title>
        <link rel="shortcut icon" href="webicon.ico"/>
        <meta
          name="description"
          content="valcosmos-李青丘的个人博客-Web前端开发-分享前端技术"
        />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, 前端, 个人博客"
        />


        <meta name="author" content="Cupid Valentine | 李青丘"/>

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta name="theme-color" content="#317EFB" />

        <link rel="manifest" href="/manifest.json" />

        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />

        <link rel="apple-touch-icon" href="/webicon.ico"></link>

      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}


