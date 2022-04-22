import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '@styles/pages/beta.module.css'
import HowToHelp from '@components/HowToHelp'
import HPBeta from '@components/HPBeta'
import NavbarBeta from '@components/NavbarBeta'
import Team from '@components/Team'
import Footer from '@components/Footer'

interface BetaProps {
    
}
 
const Beta: NextPage<BetaProps> = () => {
    return (
        <>
        <Head>
            <title>Omelia - beta</title>
        </Head>
        <div className={styles.beta}>
            <NavbarBeta/>
            <HPBeta />
            <div className={styles.content}>
                <HowToHelp />
                <Team />
                <Footer />  
            </div>
        </div>
        </>

    );
}
 
export default Beta;