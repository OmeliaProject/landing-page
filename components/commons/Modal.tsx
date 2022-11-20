import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "@styles/modules/modal.module.css";
import useModal from "@hooks/useModal";


const Modal = () => {
    let { modalContent, handleModal, modal } = useModal();
    let [root, setRoot] = React.useState<Element | null>(null);

    useEffect(() => {
        // get element with data-reactroot
        setRoot(document.querySelector("[data-reactroot]"));
    }, [root]);
    
    
    if (!modal || !root)
    return null;
    
    const closeModal = () => handleModal();

    const ModalJSX = (
        <div onClick={closeModal} className={styles.modal_bg}>
            <div onClick={(e) => {e.stopPropagation()}} className={styles.modal}>
                <div className={styles.close} onClick={closeModal}>
                    &times;
                </div>
                {modalContent}
            </div>
        </div>
    )        
    return ReactDOM.createPortal(ModalJSX, root);
};

export { Modal};