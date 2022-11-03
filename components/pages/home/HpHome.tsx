import styles from "@styles/modules/hphome.module.css"

import { ScrollToButton } from "@components/commons/ScrollToButton";
import { RefObject, FunctionComponent, useContext } from "react";
import { ModalContext } from "@components/api/modalContext";

interface HpHomeProps {
    hpHomeRef : RefObject<HTMLDivElement>
    aboutRef : RefObject<HTMLDivElement>
}
 
const HpHome: FunctionComponent<HpHomeProps> = ({ hpHomeRef, aboutRef }) => {

    return (
        <div className={styles.hp_home} ref={hpHomeRef}>

            <div className={styles.container_cta}>
                <div className={styles.text_cta}>
                    <p>Ammenez votre<br/><span className="emphasized-primary">élocution</span> au niveau<br/>supérieur !</p>
                </div>
                <ScrollToButton styleClass={styles.button_cta} target={aboutRef}>En savoir plus</ScrollToButton>
            </div>

            <div className={styles.people}>
                <img src='/people.svg' alt='next' />
            </div>

            <img className="separator" alt="sep" src="wave-separator-1.svg"/>
        </div>
    );
}
 
export { HpHome };