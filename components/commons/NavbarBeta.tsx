import { FunctionComponent, useEffect, useState } from "react";
import Link from 'next/link'
 
import styles from "@styles/modules/navbar.module.css"
import useTransportLayer from "@hooks/useTransportLayer";
import { Hamburger } from "@components/commons/Hamburger";
import { CurrentUserInfos } from "@stores/currentUser";


const NavbarBeta: FunctionComponent = () => {
    const userApi = useTransportLayer().currentUser;

    let [isSideMenuOpen, setSideMenuStatus] = useState(false);
    let [scroll, setScroll] = useState(false);
    let [user, setUser] = useState<CurrentUserInfos>(null!);
    let stylesMenuSide = isSideMenuOpen ? styles.pull_left : "";
    
    const onScroll = (_ : Event) => {
        const position = window.pageYOffset;

        if (position > 100) {
            setScroll(true);
        } else {
            setScroll(false);            
        }
    }

    const feedbackButton = () => {
        if (!user)
            return;

        if (user.isAdmin) {
            return (
                <Link href="/beta/monitoring">
                    <a className={styles.option}>monitoring</a>
                </Link>
            );
        }

        return (
            <Link href="/beta/feedbacks">
                <a className={styles.option}>faire un retour</a>
            </Link>
        );
    };

    const connectionButton = () => {
        if (user)
            return (
                <Link href="/beta/profil">
                    <a className={styles.option}>profil</a>
                </Link>
            );

        return ( 
            <Link href="/beta/login">
                <a className={styles.option}>se connecter</a>
            </Link>
        );
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        
        userApi.getUserInfos().then((user) => {
            setUser(user);
        }).catch(() => {
        });

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
                    {feedbackButton()}
                    {connectionButton()}
                </div>

            </div>

        </div>
    );
}
 
export { NavbarBeta };