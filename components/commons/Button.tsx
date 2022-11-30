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
 
const Button: FunctionComponent<ButtonProps> = ({type, children, classNameTweak = "", fullwidth, onClick, settings} : ButtonProps) => 
{

    const fullwidthStyles = fullwidth ? styles.fullwidth : "";

    return (
        <button 
            onClick={onClick} 
            className={` ${classNameTweak} ${styles.button} ${fullwidthStyles}`}
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