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
}
 
const Button: FunctionComponent<ButtonProps> = ({type, children, classNameTweak, onClick, settings} : ButtonProps) => {
    return (
        <button onClick={onClick} {... settings} className={` ${classNameTweak} ${styles.button} `} data-type={type}>
            {children}
        </button>
    );
}

export  {
    ButtonType,
    Button
};