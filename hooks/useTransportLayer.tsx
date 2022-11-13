import { ApiContext } from '@components/transport_layers/contexts/apiContext'
import { useContext } from 'react'

const useApi = () => {
  const context = useContext(ApiContext)
  if (!context)
    throw new Error('useApi hook should be used in TransportLayerContext scope')
  return context
}

export default useApi ;
