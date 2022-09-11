import Router from 'next/router'
import React, { ReactChildren, ReactChild, FunctionComponent } from 'react';

import styles from "@styles/modules/navbar.module.css"


interface NavbarOptionLinkProps {
    target : string;
    children: ReactChild | ReactChildren;
}

const NavbarOptionLink: FunctionComponent<NavbarOptionLinkProps> = ({target, children}) => {

    return (
        <div className={`${styles.option} button`} onClick={() => Router.push(target)}>
            {children}
        </div>    
    );
}
 
export { NavbarOptionLink };