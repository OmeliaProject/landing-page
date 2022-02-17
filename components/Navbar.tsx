import { FunctionComponent, RefObject, useState } from "react";
import ScrollToButtonProps from "./ScrollToButton"

import styles from "../styles/navbar.module.css"
import components from "../styles/components.module.css"
import Hamburger from "./Hamburger";


interface NavbarProps {
    home : RefObject<HTMLDivElement>, 
    produit : RefObject<HTMLDivElement>, 
    price : RefObject<HTMLDivElement>, 
    contact : RefObject<HTMLDivElement>, 
}
 
const Navbar: FunctionComponent<NavbarProps> = ({home, produit, price, contact}) => {

    // pull_left
    let [isSideMenuOpen, setSideMenuStatus] = useState(false);
    let styles_menu_side = isSideMenuOpen ? styles.pull_left : ""

    return (  
        <div className={styles.navbar}>
            <ScrollToButtonProps styleClass={styles.title} target={home}>Omelia</ScrollToButtonProps>

            <Hamburger onClick={() => {setSideMenuStatus(true)}} styleClass={styles.hamburger} ></Hamburger>
            <div className={` ${styles_menu_side} ${styles.menu_container}`}>
                <div className={styles.title_side_menu}>Omelia</div>
                {
                    isSideMenuOpen && <div onClick={() => {setSideMenuStatus(false)}} 
                                        className={styles.close} />
                }
                <div className={styles.option_container}>
                    <ScrollToButtonProps styleClass={styles.option} target={home}>home</ScrollToButtonProps>
                    <ScrollToButtonProps styleClass={styles.option} target={produit}>produit</ScrollToButtonProps>
                    <ScrollToButtonProps styleClass={styles.option} target={price}>prix</ScrollToButtonProps>
                    <ScrollToButtonProps styleClass={styles.option} target={contact}>contact</ScrollToButtonProps>
                </div>

            </div>

        </div>
    );
}
 
export default Navbar;