import { FunctionComponent, useEffect, useState } from "react";
import Link from 'next/link'
 
import styles from "@styles/modules/navbar_beta.module.css"
import useApi from "@hooks/useTransportLayer";
import { Hamburger } from "@components/commons/Hamburger";
import { CurrentUserInfos } from "@stores/currentUser";


const NavbarBeta: FunctionComponent = () => {
    const userApi = useApi().currentUser;

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
                <Link passHref href="/beta/dashboard">
                    <a className={styles.option}>Monitoring</a>
                </Link>
            );
        }

        return (
            <Link passHref href="/beta/feedbacks">
                <a className={styles.option}>Faire un retour</a>
            </Link>
        );
    };

    const connectionButton = () => {
        if (user)
            return (
                <Link passHref href="/beta/profil">
                    <a className={styles.option}>Profil</a>
                </Link>
            );

        return ( 
            <Link passHref href="/beta/login">
                <a className={styles.option}>Se connecter</a>
            </Link>
        );
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        
        onScroll(null!);

        userApi.getUserInfos().then((user) => {
            setUser(user);
        }).catch(() => {
            userApi.clearAllUserData();
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [userApi]);

    
    return (  
        <div className={`${styles.navbar} ${scroll ? styles.scrolled_navbar : ""}`}>
            <Link passHref href="/">
                <div  className={styles.title}>
                    <img src="/omelia.svg" alt="logo" />
                </div>
            </Link>
            <Hamburger onClick={() => {setSideMenuStatus(true)}} styleClass={styles.hamburger} ></Hamburger>
            <div className={` ${stylesMenuSide} ${styles.menu_container}`}>
                <div className={styles.title_side_menu}>Omelia</div>
                {
                    isSideMenuOpen && <div onClick={() => {setSideMenuStatus(false)}} className={styles.close}>&times;</div>
                }
                <div className={styles.option_container}>

                    <Link passHref href="/beta">
                        <a className={styles.option}>Accueil</a>
                    </Link>
                    <Link passHref href="/timeline">
                        <a className={styles.option}>Avancée du projet</a>
                    </Link>
                    {feedbackButton()}
                    {connectionButton()}
                </div>

            </div>

        </div>
    );
}
 
export { NavbarBeta };