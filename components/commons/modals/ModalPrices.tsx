import styles from "@styles/modules/modal_prices.module.css"
import components from "@styles/modules/components.module.css"
import { FC, useContext } from "react";
import { ModalContext } from "@components/api/modalContext";

interface ModalPricesProps {
    scrollToContact : () => void;
}

const ModalPrices : FC<ModalPricesProps> = ({scrollToContact})=> {

    const { handleModal } = useContext(ModalContext);

    const scrollAndClose = () => {
        scrollToContact();
        handleModal();
    }


    return (
        <>
            <h1 className={styles.title}>Intéressé par notre application ?</h1>
            <p className={styles.body}>
            Nous sommes actuellement en <span className="emphasized-primary">phase de développement !</span>
            <br/><br/>
            Si vous avez été séduit et souhaitez soutenir notre projet, contactez nous via <u className={components.button} onClick={scrollAndClose}>e-mail </u>
            ou rejoignez notre <u className={components.button} onClick={scrollAndClose}>discord</u> pour devenir bêta-testeur !
            <br/><br/>
            L’équipe d’Omelia vous remercie !
            </p>
        </>
    );
}
 
export { ModalPrices };