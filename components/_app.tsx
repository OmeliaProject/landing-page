
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { TransportLayerProvider } from '@components/transport_layers/contexts/apiContext';
import { ModalProvider } from './transport_layers/contexts/modalContext';
import {ToastContainer} from 'react-toastify'

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
        <ModalProvider>
          <ToastContainer />
          <Component {...pageProps} />
        </ModalProvider>
      </TransportLayerProvider>
    </>
  )
}



export default MyApp
