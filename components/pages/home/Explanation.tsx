import { FunctionComponent } from "react";
import styles from "@styles/modules/explanation.module.css"

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
                    Plus de <span className="emphasized-primary">70%</span> de la population a peur de parler en public.
                </p>
                <p className={styles.subhead}>
                    Omelia veut vous donner les outils pour défendre vos idées !
                </p>
            </div>

        </div>
    );
}
 
export { Explanation };