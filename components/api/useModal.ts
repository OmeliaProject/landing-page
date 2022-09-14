import { useState } from "react";

export interface IModalContext {
    modal: boolean;
    handleModal: (content ?: JSX.Element) => void;
    modalContent: any;
}
  

const useModal =  () : IModalContext =>  {
    let [modal, setModal] = useState(false);
    let [modalContent, setModalContent] = useState<JSX.Element>();

    let handleModal = (content ?: JSX.Element) => {
      setModal(!modal);
      if (content) {
        setModalContent(content);
      }
    };

    return { modal, handleModal, modalContent };
};

export default useModal;