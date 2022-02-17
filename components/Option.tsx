import { FunctionComponent } from "react";
import { PrincingOptions } from "./Card";

import styles from "../styles/prices.module.css"


interface OptionProps {
    param :  PrincingOptions
    idx : number 
}
 
const Option: FunctionComponent<OptionProps> = ({param, idx}) => {


    const includedStyle = param.isIncluded ? "" : styles.not_included;
    
    return (
        <div  key={idx} className={`${includedStyle} ${styles.option}`} >
            {
                param.isIncluded ? <img className={styles.image} src="/check.svg" alt="check" /> :
                                 <span className={styles.image}/> 
            }
            <span>{param.name}</span>
        </div>
    );
}
 
export default Option;