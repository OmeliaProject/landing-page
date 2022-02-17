import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';


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
  const produitRef = useRef<HTMLDivElement>(null);

  const modifyViewportHeight =  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
      window.addEventListener('resize', modifyViewportHeight);
      modifyViewportHeight();
  })
  
  emailjs.init("user_YTYwoUOvEF41yOhBTNY79");

  return (
    <>
      <Head>
        <title>Omelia - accueil</title>
      </Head>
      <div >
        <Navbar home={homeRef} price={priceRef} contact={contactRef} produit={produitRef}></Navbar>
        <Home homeRef={homeRef} aboutRef={aboutRef}></Home>
        <About aboutRef={aboutRef} produitRef={produitRef}></About>
        <Price priceRef={priceRef} contactRef={contactRef}></Price>
        <Contact contactRef={contactRef}></Contact>
      </div>
    </>
  )
}

export default Index
