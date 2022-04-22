import { FunctionComponent } from "react";

import styles from "@styles/modules/application.module.css"

interface TemplateExplanationModelProps {
    picture : string;
    reverse : boolean;
    children: React.ReactNode;
}
 
const TemplateExplanationModel: FunctionComponent<TemplateExplanationModelProps> = 
({picture, children, reverse}) => {    

    const reverseStyle = reverse ? `${styles.reverse} slide-left` : "slide-right";
    
    return (
        
        <div className={`${styles.template} ${reverseStyle}`} >

            <div className={styles.text_container}>
                {children}
            </div>

            <div className={styles.model} >
 
                <img src={picture}  alt="next" />
            </div>  

            
        </div>
    );
}
 
export default TemplateExplanationModel;