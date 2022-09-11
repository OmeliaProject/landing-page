import { useContext } from 'react'
import TransportLayerContext from '@components/api/context'

const useTransportLayer = () => {
  const context = useContext(TransportLayerContext)
  if (!context)
    throw new Error('useTransportLayer hook should be used in TransportLayerContext scope')
  return context
}

export default useTransportLayer ;
