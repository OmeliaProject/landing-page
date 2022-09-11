import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '@styles/pages/beta.module.css'

import { HowToHelp } from '@components/pages/beta/HowToHelp'
import { HPBeta } from '@components/pages/beta/HPBeta'
import { NavbarBeta } from '@components/commons/NavbarBeta'
import { Team } from '@components/pages/beta/Team'
import { Footer } from '@components/commons/Footer'

interface BetaProps {
    
}
 
export const Beta: NextPage<BetaProps> = () => {
    return (
        <>
        <Head>
            <title>Omelia - bêta</title>
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
 