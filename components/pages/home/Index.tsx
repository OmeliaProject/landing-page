import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '@styles/pages/index.module.css';
import { About } from '@components/pages/home/About';
import { Contact } from '@components/pages/home/Contact';
import { HpHome } from '@components/pages/home/HpHome';
import { Navbar } from '@components/commons/Navbar';
import { Price } from '@components/pages/home/Price';

const Home: NextPage = () => 
{
  const hpHomeRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  emailjs.init("user_YTYwoUOvEF41yOhBTNY79");

  return (
    <>
      <Head>
        <title>Omelia - accueil</title>  
      </Head>
      <div className={styles.index} >
        <Navbar hpHomeRef={hpHomeRef} priceRef={priceRef} contactRef={contactRef}></Navbar>
        <HpHome hpHomeRef={hpHomeRef} aboutRef={aboutRef}></HpHome>
        <About aboutRef={aboutRef}></About>
        <Price priceRef={priceRef} contactRef={contactRef}></Price>
        <Contact contactRef={contactRef}></Contact>
      </div>
    </>
  )
}

export {
  Home
}