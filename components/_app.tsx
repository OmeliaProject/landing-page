
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { TransportLayerProvider } from '@components/transport_layers/contexts/apiContext';
import { ModalProvider } from './transport_layers/contexts/modalContext';
import {ToastContainer} from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {

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
