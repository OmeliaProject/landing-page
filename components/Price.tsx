import { RefObject, FunctionComponent, useState } from "react";
import ModalPrices from "./ModalPrices";

import styles from "@styles/modules/prices.module.css"
import Card from "./Card";

interface PriceProps {
    priceRef : RefObject<HTMLDivElement>
    contactRef : RefObject<HTMLDivElement>
}
 
const Price: FunctionComponent<PriceProps> = ({ priceRef, contactRef }) => {


    const [modalStatus, setModalStatus] = useState(false);

    const closeAndGoToContact = (contactRef : RefObject<HTMLDivElement>) => {
        setModalStatus(false);
        setTimeout(() => {
            if (!contactRef || !contactRef.current)
                return; 
            window.scrollTo(0, contactRef.current.offsetTop)
         }, 100);
    }

    return (
        <div className={styles.price} ref={priceRef}>
            <Card 
                title="OMELIA PRO"
                price="2.99 euros par mois" 
                emphasized={true} 
                setModalStatus={setModalStatus} 
                options={[
                    {
                        name: "analyse gestuelle",
                        isIncluded : true
                    },
                    {
                        name: "analyse vocale",
                        isIncluded : true
                    },
                    {
                        name: "entraînements illimités",
                        isIncluded : true
                    },
                    {
                        name: "100% des vidéos",
                        isIncluded : true
                    },
                ]
                }
                />
                <Card 
                title="OMELIA FREE"
                price="gratuit" 
                emphasized={false} 
                setModalStatus={setModalStatus} 
                options={[
                    {
                        name: "analyse gestuelle",
                        isIncluded : true
                    },
                    {
                        name: "analyse vocale",
                        isIncluded : true
                    },
                    {
                        name: "entraînements illimités",
                        isIncluded : false
                    },
                    {
                        name: "100% des vidéos",
                        isIncluded : false
                    },
                ]
                }
                />
            {
                modalStatus && 
                <ModalPrices close={() => setModalStatus(false)} goContact={() => closeAndGoToContact(contactRef)}/>
            }
        </div>
    );
}
 
export default Price;