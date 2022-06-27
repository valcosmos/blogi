import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body>
      <Main/>
      <NextScript/>


      {/*// Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GR1N2C17YX"/>
      <script dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GR1N2C17YX');
            `
      }}/>


      </body>
    </Html>
  )
}
