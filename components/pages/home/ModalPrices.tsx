import styles from "@styles/modules/modal_prices.module.css"
import components from "@styles/modules/components.module.css"

const ModalPrices = (ScrollToContact : () => void ) : JSX.Element => {

    return (
        <>
            <h1 className={styles.title}>Intéressé par notre application ?</h1>
            <p className={styles.body}>
            Nous sommes actuellement en <span className="emphasized-primary">phase de développement !</span>
            <br/><br/>
            Si vous avez été séduit et souhaitez soutenir notre projet, contactez nous via <u className={components.button} onClick={ScrollToContact}>e-mail </u>
            ou rejoignez notre <u className={components.button} onClick={ScrollToContact}>discord</u> pour devenir bêta-testeur !
            <br/><br/>
            L’équipe d’Omelia vous remercie !
            </p>
        </>
    );
}
 
export { ModalPrices };