import { FunctionComponent } from "react";
import styles from "../styles/explanation.module.css"


interface ExplanationProps {
    
}
 
const Explanation: FunctionComponent<ExplanationProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.illustration}>
                <img src="/france_percentage.svg" alt="next" />
            </div>
            <div className={styles.texts}>
                <p className={styles.head}>
                    Plus de <span className="emphasized-primary">70%</span> de la population ont peur de parler en public.
                </p>
                <p className={styles.subhead}>
                    Omelia veux vous donner les outils pour defendre vos idées !
                </p>
            </div>

        </div>
    );
}
 
export default Explanation;