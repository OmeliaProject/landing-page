import { FunctionComponent, useEffect, useState } from "react";
import Link from 'next/link'
 
import styles from "@styles/modules/navbar.module.css"
import useTransportLayer from "@hooks/useTransportLayer";
import { Hamburger } from "@components/commons/Hamburger";
import { useRouter } from "next/router";

const NavbarBeta: FunctionComponent = () => {
    const api = useTransportLayer();
    const router = useRouter();

    let [isSideMenuOpen, setSideMenuStatus] = useState(false);
    let [scroll, setScroll] = useState(false);
    let stylesMenuSide = isSideMenuOpen ? styles.pull_left : "";
    
    const onScroll = (_ : Event) => {
        const position = window.pageYOffset;

        if (position > 100) {
            setScroll(true);
        } else {
            setScroll(false);            
        }
    }

    const disconnect = () => {
        api.currentUser.signOut();
        router.push("/beta");
    }


    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    
    return (  
        <div className={`${styles.navbar} ${scroll ? styles.scrolled_navbar : ""}`}>
             <Link href="/">
                <div  className={styles.title}>
                    <img src="/omelia.svg" alt="logo" />
                </div>
            </Link>
            <Hamburger onClick={() => {setSideMenuStatus(true)}} styleClass={styles.hamburger} ></Hamburger>
            <div className={` ${stylesMenuSide} ${styles.menu_container}`}>
                <div className={styles.title_side_menu}>Omelia</div>
                {
                    isSideMenuOpen && <div onClick={() => {setSideMenuStatus(false)}} 
                                        className={styles.close} />
                }
                <div className={styles.option_container}>

                    <Link href="/beta">
                        <a className={styles.option}>bêta</a>
                    </Link>
                    <Link href="/timeline">
                        <a className={styles.option}>avancée du projet</a>
                    </Link>
                    <Link href="/beta/issues">
                        <a className={styles.option}>remonter un problème</a>
                    </Link>
                    {
                        api.currentUser.isUserSignedIn() ?
                        <p onClick={disconnect} className={styles.option}> 
                            se déconnecter
                        </p>
                         : 
                        <Link href="/beta/login">
                            <a className={styles.option}>se connecter</a>
                        </Link>

                    }
                </div>

            </div>

        </div>
    );
}
 
export { NavbarBeta };