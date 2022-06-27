import {Html, Head, Main, NextScript} from 'next/document'
// import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head>

        {/*// Global site tag (gtag.js) - Google Analytics */}
        {/*<Script id={'gtag-js'}  strategy="afterInteractive" src={'https://www.googletagmanager.com/gtag/js?id=G-GR1N2C17YX'} />*/}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GR1N2C17YX"/>
        <script dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GR1N2C17YX');
            `
        }}/>

      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
