import { FunctionComponent, RefObject, useEffect, useState } from "react";
import ScrollToButtonProps from "./ScrollToButton"
import Link from 'next/link'
 
import styles from "@styles/modules/navbar.module.css"
import Hamburger from "@components/commons/Hamburger";


interface NavbarProps {
    home : RefObject<HTMLDivElement>, 
    price : RefObject<HTMLDivElement>, 
    contact : RefObject<HTMLDivElement>, 
}
 
const Navbar: FunctionComponent<NavbarProps> = ({home, price, contact}) => {

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
            <ScrollToButtonProps styleClass={styles.title} target={home}>
                <img src="/omelia.svg" alt="logo" />
            </ScrollToButtonProps>

            <Hamburger onClick={() => {setSideMenuStatus(true)}} styleClass={styles.hamburger} ></Hamburger>
            <div className={` ${stylesMenuSide} ${styles.menu_container}`}>
                <div className={styles.title_side_menu}>Omelia</div>
                {
                    isSideMenuOpen && <div onClick={() => {setSideMenuStatus(false)}} 
                                        className={styles.close} />
                }
                <div className={styles.option_container}>
                    <ScrollToButtonProps styleClass={styles.option} target={home}>accueil</ScrollToButtonProps>
                    <Link href="/beta">
                        <a className={styles.option}>bêta</a>
                    </Link>
                    <ScrollToButtonProps styleClass={styles.option} target={price}>prix</ScrollToButtonProps>
                    <ScrollToButtonProps styleClass={styles.option} target={contact}>contact</ScrollToButtonProps>
                </div>

            </div>

        </div>
    );
}
 
export default Navbar;