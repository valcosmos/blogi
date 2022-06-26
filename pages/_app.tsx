import type {AppProps} from 'next/app'

import Head from "next/head";

import {useRouter} from "next/router";

import {useEffect, useState} from "react";

import NProgress from 'nprogress'

import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/layout'))

import 'nprogress/nprogress.css'

import 'md-editor-rt/lib/style.css'

import '../styles/globals.scss'


function MyApp({Component, pageProps}: AppProps) {

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
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
