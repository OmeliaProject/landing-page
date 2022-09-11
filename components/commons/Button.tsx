import { FunctionComponent, ReactChild } from "react";
import styles from "@styles/modules/button.module.css";

enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ButtonProps {
    type : ButtonType;
    children : ReactChild | ReactChild[];
    classNameTweak ?: string;
    onClick ?: () => void;
}
 
const Button: FunctionComponent<ButtonProps> = ({type, children, classNameTweak, onClick} : ButtonProps) => {
    return (
        <div onClick={onClick} className={`${styles.button} ${classNameTweak}`} data-type={type}>
            <p>{children}</p>
        </div>

    );
}

export  {
    ButtonType
};

export { Button };