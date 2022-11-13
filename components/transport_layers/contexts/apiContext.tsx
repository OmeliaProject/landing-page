import React, { createContext, useMemo } from 'react'
import type { FC, PropsWithChildren } from 'react'
import {ApiTransportLayer} from '@components/transport_layers/apiTransportLayer'

const ApiContext = createContext<ApiTransportLayer>(null!)

export const TransportLayerProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const transportLayer = useMemo(() => new ApiTransportLayer(), [])

  return (
    <ApiContext.Provider value={transportLayer}>
      {children}
    </ApiContext.Provider>
  )
}

export {
  ApiContext
}
