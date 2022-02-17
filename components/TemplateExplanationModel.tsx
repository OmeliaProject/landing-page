import { FunctionComponent } from "react";

import styles from "../styles/application.module.css"

interface TemplateExplanationModelProps {
    picture : string;
    reverse : boolean;
    number : number;
    children: React.ReactNode;
}
 
const TemplateExplanationModel: FunctionComponent<TemplateExplanationModelProps> = 
({picture, children, reverse, number}) => {    

    const reverseStyle = reverse ? styles.reverse : "";
    
    return (
        
        <div className={`${styles.template} ${reverseStyle}`} >

            <div className={styles.text_container}>
                {children}
            </div>

            <div className={styles.model} >
                {/* <div className={`${styles.counter}`}>
                    <span>{number}</span>
                </div> */}
                <img src={picture}  alt="next" />
            </div>  

            
        </div>
    );
}
 
export default TemplateExplanationModel;