import { FunctionComponent } from "react";

import styles from "@styles/modules/modal_prices.module.css"
import components from "@styles/modules/components.module.css"

interface ModalPricesProps {
    close :  () => void;
    goContact :() => void;
}
 
const ModalPrices: FunctionComponent<ModalPricesProps> = ({close, goContact}) => {
    return (
        <div className={styles.modal_background} onClick={close}>
            <div className={styles.modal}>
                <div className={styles.close} onClick={close}></div>
                <h1 className={styles.title}>Intéressé par notre application ?</h1>
                <p className={styles.body}>
                Nous sommes actuellement en <span className="emphasized-primary">phase de développement !</span>
                <br/><br/>
                Si vous avez été séduit et souhaitez soutenir notre projet, contactez nous via <u className={components.button} onClick={goContact}>e-mail </u>
                ou rejoignez notre <u className={components.button} onClick={goContact}>discord</u> pour devenir bêta-testeur !
                <br/><br/>
                L’équipe d’Omelia vous remercie !

                </p>
                <div className={styles.actions}>
                    <div className={styles.button} onClick={close}><u>retour</u></div>
                    <div className={styles.button} onClick={goContact}><u>aller à la page contact</u></div>
                </div>
            </div>
        </div>
    );
}
 
export { ModalPrices };