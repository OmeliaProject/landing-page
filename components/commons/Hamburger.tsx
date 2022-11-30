import { FunctionComponent } from "react";
import CSS from 'csstype';

interface HamburgerProps {
    onClick ?: () => void;
    styleClass ?: string;
    style ?: CSS.Properties;
}
 
const Hamburger: FunctionComponent<HamburgerProps> = ({onClick, styleClass, style}) => 
{
    return (
        <div className={styleClass} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
 
export { Hamburger };