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
    
    const ModalJSX = (
        <div className={styles.modal_bg}>
            <div className={styles.modal}>
                <div className={styles.close} onClick={() => handleModal()}>
                    &times;
                </div>
                {modalContent}
            </div>
        </div>
    )        
    return ReactDOM.createPortal(ModalJSX, root);
};

export { Modal};