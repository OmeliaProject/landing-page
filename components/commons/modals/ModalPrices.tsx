import styles from "@styles/modules/modal_prices.module.css"
import components from "@styles/modules/components.module.css"
import { FC } from "react";
import useModal from "@hooks/useModal";

interface ModalPricesProps {
    scrollToContact : () => void;
}

const ModalPrices : FC<ModalPricesProps> = ({scrollToContact})=> {

    const { handleModal } = useModal();

    const scrollAndClose = () => {
        scrollToContact();
        handleModal();
    }


    return (
        <>
            <h1 className={styles.title}>Intéressé par notre application ?</h1>
                <p className={styles.body}>
                    Nous venons tout juste de <span className="emphasized-primary">finir notre bêta</span> ! Si vous avez été séduit et souhaitez soutenir notre projet, contactez nous via <u className={components.button} onClick={scrollAndClose}>e-mail </u>
                    ou rejoignez notre <u className={components.button} onClick={scrollAndClose}>discord</u> et/ou devenez <span className="emphasized-primary">bêta-testeur</span> !
                    <br/>
                    <br/>
                    L’équipe d’Omelia vous remercie !
                </p>
        </>
    );
}
 
export { ModalPrices };