import React, { createContext, FC, PropsWithChildren } from "react";
import { Modal } from "@components/commons/Modal";
import { IModalContext, ModalTransportLayer } from "../modalTransportLayer";

let ModalContext = createContext<IModalContext>(null!);

let ModalProvider : FC<PropsWithChildren<{}>> = ({ children }) => {
  let { modal, handleModal, modalContent } =  ModalTransportLayer();

  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };