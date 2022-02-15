import { FunctionComponent, ReactChild, ReactChildren } from "react";

import styles from "../styles/contact.module.css"

interface LinkContactProps {
    link : string;
    image : string;
    children: ReactChild | ReactChildren;
}
 
const LinkContact: FunctionComponent<LinkContactProps> = ({link, image, children}) => {
    return (
        <div className={styles.link}>
            <img  src={image} alt="link-image" /> 
            <a href={link} target="_blank" rel="noopener noreferrer" >{children}</a>   
        </div>
    );
}
 
export default LinkContact;