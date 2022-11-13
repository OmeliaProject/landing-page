
import { ModalContext } from '@components/transport_layers/contexts/modalContext'
import { useContext } from 'react'

const useModal = () => {
  const context = useContext(ModalContext)
  if (!context)
    throw new Error('modalContext hook should be used in TransportLayerContext scope')
  return context
}

export default useModal;
