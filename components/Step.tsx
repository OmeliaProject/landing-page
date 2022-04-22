import { FunctionComponent } from "react";
import styles from "@styles/modules/howtohelp.module.css";


interface StepProps {
    svgPath: string;
    title: string;
    description: string;
}
 
const Step: FunctionComponent<StepProps> = ({svgPath, title, description}) => {
    return ( 
        <div className={styles.step}>
            <img className={styles.svg} src={svgPath} />
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>

        </div>

    );
}
 
export default Step;