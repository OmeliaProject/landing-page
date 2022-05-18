import { FunctionComponent } from "react";

import Option from "./Option"
import styles from "@styles/modules/prices.module.css"

interface PrincingOptions
{
    name : string;
    isIncluded : boolean
}

interface CardPriceProps {
    title : string;
    price : string;
    emphasized : boolean; 
    options : Array<PrincingOptions>
    setModalStatus :  (status : boolean) => void;
}

 
const CardPrice: FunctionComponent<CardPriceProps> = ({title, price, emphasized, options, setModalStatus}) => {

    return (
        <div className={styles.card} data-emphasized={emphasized} >
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.price_text}>{price}</h2>
            <div className={styles.options_container}>
                {
                    options.map((optionParam : PrincingOptions, idx : number) => {
                        return <span key={idx} >
                                <Option idx={idx} param={optionParam}></Option>
                            </span>
                    })

                }
            </div>
            <div className={styles.button} onClick={() => setModalStatus(true)}><p>{"s'abonner"}</p></div>
        </div>
    );
}
 
export  type {
    PrincingOptions
};

export default CardPrice;