import { useRouter } from "next/router";
import { FunctionComponent, ReactChild, ReactChildren } from "react";

import styles from "../styles/contact.module.css"

interface LinkContactProps {
    className ?: string; 
    link : string;
    image : string;
    children: ReactChild | ReactChildren;
}
 
const LinkContact: FunctionComponent<LinkContactProps> = ({className, link, image, children}) => {

    return (
        <div className={`${styles.link} ${className}`}>
            <img className={styles.link_image} src={image} alt="link-image" /> 
            {children}
            <a href={link} target="_blank" rel="noopener noreferrer"/>
        </div>
    );
}
 
export default LinkContact;