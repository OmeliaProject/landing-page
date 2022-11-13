import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <meta name="description" content="Omelia application" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Comfortaa:wght@300;400;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}