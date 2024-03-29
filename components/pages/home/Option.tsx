import styles from "@styles/modules/prices.module.css"
import { FunctionComponent } from "react";
import { PrincingOptions } from "@components/pages/home/CardPrice";

interface OptionProps {
    param :  PrincingOptions
    idx : number 
}
 
const Option: FunctionComponent<OptionProps> = ({param, idx}) => 
{
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
 
export { Option };