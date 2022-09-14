import styles from "@styles/modules/prices.module.css"

import { RefObject, FunctionComponent, useState, useContext } from "react";
import { ModalPrices } from "./ModalPrices";
import { CardPrice } from "@components/pages/home/CardPrice";
import { ModalContext } from "@components/api/modalContext";

interface PriceProps {
    priceRef : RefObject<HTMLDivElement>
    contactRef : RefObject<HTMLDivElement>
}
 
const Price: FunctionComponent<PriceProps> = ({ priceRef, contactRef }) => {


    return (
        <div className={styles.price} ref={priceRef}>
        <CardPrice 
            title="OMELIA PRO"
            price="2.99 euros par mois" 
            emphasized={true}
            contactRef={contactRef}
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
            <CardPrice 
            title="OMELIA FREE"
            price="gratuit" 
            emphasized={false}
            contactRef={contactRef}
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
        </div>
    );
}
 
export { Price };