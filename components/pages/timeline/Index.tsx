import styles from "@styles/pages/timeline.module.css";

import Head from "next/head";
import { NextPage } from "next";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { TimelineProject } from "@components/pages/timeline/TimelineProject";
import { Footer } from "@components/commons/Footer";
 
export const Timeline: NextPage = () => {
    return (
        <>
        <Head>
            <title>Omelia - Avancée du projet</title>
        </Head>
        <NavbarBeta/>
        <div className={styles.timeline}>
            <p className={styles.title}>Avancée d’Omelia</p>
            <TimelineProject/>       
            <Footer />  
        </div>
        </>
    );
}
 