import { NextPage } from "next";
import Head from "next/head";

import styles from "@styles/pages/timeline.module.css";
import NavbarBeta from "@components/commons/NavbarBeta";
import TimelineProject from "@components/pages/timeline/TimelineProject";
import Footer from "@components/commons/Footer";


 
const Timeline: NextPage = () => {
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
 
export default Timeline;