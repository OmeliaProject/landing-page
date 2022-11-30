import { FunctionComponent, RefObject, useEffect, useState } from "react";
import Link from 'next/link'
import styles from "@styles/modules/navbar.module.css"
import {ScrollToButton} from "@components/commons/ScrollToButton"
import {Hamburger} from "@components/commons/Hamburger";
import { Button, ButtonType } from "./Button";

interface NavbarProps {
    hpHomeRef : RefObject<HTMLDivElement>, 
    priceRef : RefObject<HTMLDivElement>, 
    contactRef : RefObject<HTMLDivElement>, 
}
 
const Navbar: FunctionComponent<NavbarProps> = ({hpHomeRef, priceRef, contactRef}) => 
{

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
                    isSideMenuOpen && <div onClick={() => {setSideMenuStatus(false)}} className={styles.close}>&times;</div>
                }
                <div className={styles.option_container}>
                    <ScrollToButton styleClass={styles.option} target={hpHomeRef}>Accueil</ScrollToButton>
                    <ScrollToButton styleClass={styles.option} target={priceRef}>Prix</ScrollToButton>
                    <ScrollToButton styleClass={styles.option} target={contactRef}>Contact</ScrollToButton>
                    <Link href="/beta">
                        <Button type={ButtonType.PRIMARY} classNameTweak={styles.option}>
                                Bêta
                        </Button>
                    </Link>
                </div>

            </div>

        </div>
    );
}
 
export { Navbar };