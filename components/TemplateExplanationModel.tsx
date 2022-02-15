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

    const style = {"--number": number } as React.CSSProperties;
    const position_counter = reverse ? styles.counter_reverse_position : styles.counter_normal_position;

    const image : JSX.Element = 
    <div className={styles.model} >
        <div className={`${styles.counter}  ${position_counter}`}> <span>{number}</span></div>
        <img src={picture}  alt="next" />
    </div>  
    
    
    return (
        
        <div className={styles.template} style={style}>
            {reverse && image}
            <div className={styles.text_container}>
                {children}
            </div>
            {!reverse && image}
        </div>
    );
}
 
export default TemplateExplanationModel;