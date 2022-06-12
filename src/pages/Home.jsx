import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion } from "framer-motion"

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

import { useSearchParams } from 'react-router-dom';

function Home() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [contact,setContact] = useState(false);

  useEffect(() => {
    setContact(searchParams.get('contact') !== null);
  },[searchParams])

  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      <AnimatePresence>
        {contact && (
          <motion.div
            animate={{
              x : 0
            }}
            initial={{
              x : 1000
            }}
            transition={{
              delay : 0.2
            }}
            exit={{
              x : 1000
            }}
            className="absolute flex items-center gap-5 contact-response drop-shadow-2xl"
          >
            <div />
              Thanks for sending us a message. We'll get back to u soon
            <svg onClick={() => {
              setContact(false);
            }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

    </div>
  );
}

export default Home;