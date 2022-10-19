import styles from "@styles/modules/prices.module.css"

import { FunctionComponent, RefObject, useContext } from "react";
import { Option } from "@components/pages/home/Option"
import { ModalContext } from "@components/api/modalContext";
import { ModalPrices } from "./ModalPrices";

interface PrincingOptions{
    name : string;
    isIncluded : boolean
}

interface CardPriceProps {
    title : string;
    price : string;
    emphasized : boolean; 
    options : Array<PrincingOptions>;
    contactRef : RefObject<HTMLDivElement>
}

 
const CardPrice: FunctionComponent<CardPriceProps> = ({title, price, emphasized, options, contactRef}) => {
    const { handleModal } = useContext(ModalContext);

    const scrollToContact = () => {
        setTimeout(() => {
            if (!contactRef || !contactRef.current)
            return; 
            window.scrollTo(0, contactRef.current.offsetTop)
        }, 100);
    }

    const modal = ModalPrices(scrollToContact);

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
            <div className={styles.button} onClick={() => handleModal(modal)}><p>{"S'abonner"}</p></div>
        </div>
    );
}
 
export  type {
    PrincingOptions
};

export { CardPrice };