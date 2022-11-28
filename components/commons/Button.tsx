import { FunctionComponent, ReactChild } from "react";
import styles from "@styles/modules/button.module.css";

enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

interface ButtonProps {
    type : ButtonType;
    children : ReactChild | ReactChild[];
    classNameTweak ?: string;
    onClick ?: () => void;
    settings ?: any;
    fullwidth ?: boolean;
}
 
const Button: FunctionComponent<ButtonProps> = ({type, children, classNameTweak = "", fullwidth, onClick, settings} : ButtonProps) => {

    return (
        <button 
            style={{ "width": fullwidth ? "100% !important" : ""}}
            onClick={onClick} 
            className={` ${classNameTweak} ${styles.button} `}
            data-type={type}
            {... settings}
        >
            {children}
        </button>
    );
}

export  {
    ButtonType,
    Button
};