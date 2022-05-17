import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react';
import { TransportLayerProvider } from '@components/api/context';


function MyApp({ Component, pageProps }: AppProps) {


  const modifyViewportHeight =  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
      window.addEventListener('resize', modifyViewportHeight);
      modifyViewportHeight();
  })

  return  (
    <>
      <TransportLayerProvider>
        <Head>
            <meta name="description" content="Omelia application" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Comfortaa:wght@300;400;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </TransportLayerProvider>
    </>
  )
}

export default MyApp
