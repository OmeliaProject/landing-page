import React, { createContext, FC, PropsWithChildren } from "react";
import useModal, { IModalContext } from "@components/api/useModal";
import { Modal } from "@components/commons/Modal";


let ModalContext = createContext<IModalContext>(null!);

let ModalProvider : FC<PropsWithChildren<{}>> = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();

  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };