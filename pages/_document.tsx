import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head>

        {/*// Global site tag (gtag.js) - Google Analytics */}
        <Script id={'gtag-js'}  strategy="afterInteractive" src={'https://www.googletagmanager.com/gtag/js?id=G-GR1N2C17YX'} />
        {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-GR1N2C17YX"/>*/}
        <Script id={'analytics-code'} strategy="afterInteractive" dangerouslySetInnerHTML={{
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
