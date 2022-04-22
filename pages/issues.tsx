import { NextPage } from "next";
import styles from "@styles/pages/issues.module.css";
import Head from "next/head";
import NavbarBeta from "@components/NavbarBeta";
import Link from "next/link";

interface IssuesProps {
    
}
 
const Issues: NextPage = () => {
    return (
        <>
         <Head>
            <title>Omelia - remonter un problème</title>
        </Head>
        <NavbarBeta/>
        <div className={styles.issues}>
            <div className={styles.container}>
                <img className={styles.building} src="/building.svg" alt="waiting" />
                <div className={styles.body}>
                    <p>Cette page est encore en construction</p>
                    <Link href="/beta">
                        <a className={styles.link}>revenir à la page bêta</a>
                    </Link>
                </div>
                
            </div>
        </div>
        </>
    );
}
 
export default Issues;