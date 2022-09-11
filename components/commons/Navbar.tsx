import { FunctionComponent, RefObject, useEffect, useState } from "react";
import Link from 'next/link'

import styles from "@styles/modules/navbar.module.css"
import {ScrollToButton} from "@components/commons/ScrollToButton"
import {Hamburger} from "@components/commons/Hamburger";


interface NavbarProps {
    hpHomeRef : RefObject<HTMLDivElement>, 
    priceRef : RefObject<HTMLDivElement>, 
    contactRef : RefObject<HTMLDivElement>, 
}
 
const Navbar: FunctionComponent<NavbarProps> = ({hpHomeRef, priceRef, contactRef}) => {

    let [isSideMenuOpen, setSideMenuStatus] = useState(false);
    let [scroll, setScroll] = useState(false);
    let stylesMenuSide = isSideMenuOpen ? styles.pull_left : "";
    
    const onScroll = () => {
        const position = window.pageYOffset;

        if (position > 100) {
            setScroll(true);
        } else {
            setScroll(false);            
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);



    return (  
        <div className={`${styles.navbar} ${scroll ? styles.scrolled_navbar : ""}`}>
            <ScrollToButton styleClass={styles.title} target={hpHomeRef}>
                <img src="/omelia.svg" alt="logo" />
            </ScrollToButton>

            <Hamburger onClick={() => {setSideMenuStatus(true)}} styleClass={styles.hamburger} ></Hamburger>
            <div className={` ${stylesMenuSide} ${styles.menu_container}`}>
                <div className={styles.title_side_menu}>Omelia</div>
                {
                    isSideMenuOpen && <div onClick={() => {setSideMenuStatus(false)}} 
                                        className={styles.close} />
                }
                <div className={styles.option_container}>
                    <ScrollToButton styleClass={styles.option} target={hpHomeRef}>accueil</ScrollToButton>
                    <Link href="/beta">
                        <a className={styles.option}>bêta</a>
                    </Link>
                    <ScrollToButton styleClass={styles.option} target={priceRef}>prix</ScrollToButton>
                    <ScrollToButton styleClass={styles.option} target={contactRef}>contact</ScrollToButton>
                </div>

            </div>

        </div>
    );
}
 
export { Navbar };