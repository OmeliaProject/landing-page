import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import styles from '@styles/pages/index.module.css';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Price from '../components/Price';

const Index: NextPage = () => {

  const homeRef = useRef<HTMLDivElement>(null);
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
        <Navbar home={homeRef} price={priceRef} contact={contactRef}></Navbar>
        <Home homeRef={homeRef} aboutRef={aboutRef}></Home>
        <About aboutRef={aboutRef}></About>
        <Price priceRef={priceRef} contactRef={contactRef}></Price>
        <Contact contactRef={contactRef}></Contact>
      </div>
    </>
  )
}

export default Index
