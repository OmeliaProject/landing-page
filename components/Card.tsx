import { FunctionComponent } from "react";

import Option from "./Option"
import styles from "../styles/prices.module.css"

interface PrincingOptions
{
    name : string;
    isIncluded : boolean
}

interface CardProps {
    title : string;
    price : string;
    emphasized : boolean; 
    options : Array<PrincingOptions>
    setModalStatus :  (status : boolean) => void;
}

 
const Card: FunctionComponent<CardProps> = ({title, price, emphasized, options, setModalStatus}) => {

    let buttonIsEmphasized : string = styles.emphasized_button;
    let cardStyle : string = styles.emphasized_card;

    if (emphasized) {
        buttonIsEmphasized = styles.not_emphasized_button;
        cardStyle = styles.not_emphasized_card
    }

    return (
        <div className={`${cardStyle} ${styles.card}`}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.content}>
                <h2 className={styles.price}>{price}</h2>
                <div className={styles.options_container}>
                    {
                        options.map((optionParam : PrincingOptions, idx : number) => {
                            return <span key={idx} >
                                    <Option idx={idx} param={optionParam}></Option>
                                </span>
                        })

                    }
                </div>

            </div>
            <div className={`${buttonIsEmphasized} ${styles.button}`} onClick={() => setModalStatus(true)}>{"s'abonner"}</div>

        </div>
    );
}
 
export  type {
    PrincingOptions
};

export default Card;