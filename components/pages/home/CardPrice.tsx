import styles from "@styles/modules/prices.module.css"

import { FunctionComponent, RefObject } from "react";
import { Option } from "@components/pages/home/Option"
import { ModalPrices } from "@components/commons/modals/ModalPrices";
import { Button, ButtonType } from "@components/commons/Button";
import useModal from "@hooks/useModal";

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
    const { handleModal } = useModal();

    const scrollToContact = () => {
        setTimeout(() => {
            if (!contactRef || !contactRef.current)
            return; 
            window.scrollTo(0, contactRef.current.offsetTop)
        }, 100);
    }

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
            <Button type={ emphasized ? ButtonType.PRIMARY : ButtonType.SECONDARY} classNameTweak={styles.button} 
                onClick={() => handleModal(<ModalPrices scrollToContact={scrollToContact}/>)}>{"S'abonner"}
            </Button>
        </div>
    );
}
 
export  type {
    PrincingOptions
};

export { CardPrice };