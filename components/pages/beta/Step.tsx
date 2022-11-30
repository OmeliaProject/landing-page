import styles from "@styles/modules/howtohelp.module.css";
import { FunctionComponent } from "react";

interface StepProps {
    svgPath: string;
    title: string;
    description: string;
}
 
const Step: FunctionComponent<StepProps> = ({svgPath, title, description}) => 
{
    return ( 
        <div className={styles.step}>
            <img alt="svg" className={styles.svg} src={svgPath} />
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
 
export { Step };