import React, { createContext, useMemo } from 'react'
import type { FC, PropsWithChildren } from 'react'
import TransportLayer from '@components/api/index'

const TransportLayerContext = createContext<TransportLayer>(null!)

export const TransportLayerProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const transportLayer = useMemo(() => new TransportLayer(), [])

  return (
    <TransportLayerContext.Provider value={transportLayer}>
      {children}
    </TransportLayerContext.Provider>
  )
}

export default TransportLayerContext
