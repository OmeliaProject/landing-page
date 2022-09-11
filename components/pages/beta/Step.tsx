import styles from "@styles/modules/howtohelp.module.css";

import { FunctionComponent } from "react";

interface StepProps {
    svgPath: string;
    title: string;
    description: string;
    link?: string;
}
 
const Step: FunctionComponent<StepProps> = ({svgPath, title, description, link}) => {
    return ( 
        <div className={styles.step}>
            { link ?
                <a href={link} className={styles.svg}>
                    <img className={styles.svg} src={svgPath} />
                </a>
            :
                <img className={styles.svg} src={svgPath} />
            }
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
 
export { Step };