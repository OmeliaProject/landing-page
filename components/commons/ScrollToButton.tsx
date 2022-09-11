import React, { ReactChildren, ReactChild, FunctionComponent, RefObject } from 'react';

import CSS from 'csstype';



interface ScrollToButtonProps {
    target : RefObject<HTMLDivElement>;
    children: ReactChild | ReactChildren;
    styleClass ?: string;
    style ?: CSS.Properties
}

const ScrollToButton: FunctionComponent<ScrollToButtonProps> = ({target, children, style, styleClass}) => {

    const goTo = () => {
        if (!target || !target.current)
            return; 
        window.scrollTo(0, target.current.offsetTop)
    }

    return (
        <div className={`${styleClass}`} style={style} onClick={goTo}>
            {children}
        </div>    
    );
}
 
export { ScrollToButton };