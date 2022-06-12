import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

function Features() {

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Earn moni while chatting</h1>
            <p className="sm:text-xl text-lg text-gray-600">
              The more you chat, the more (mimu currency) you earn. Also from time to time, ❄ are dropped. In order to claim them, type <strong>.pick</strong> when they are dropped... You can also buy roles with the currency.
            </p>
          </div>

          <Transition
            show={true}
            appear={true}
            className="w-full relative flex items-center justify-center"
            enter="transition ease-in-out duration-700 transform order-first"
            enterStart="opacity-0 translate-y-16"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform absolute"
            leaveStart="opacity-100 translate-y-0"
            leaveEnd="opacity-0 -translate-y-16"
          >
            <div className="flex justify-center">
              <img className="md:max-w-none mx-auto rounded" src="https://media.discordapp.net/attachments/967731357570711612/985216675576156201/unknown.png" width="500" height="462" alt="Features bg" />
            </div>
          </Transition>

        </div >

      </div >
    </section >
  );
}

export default Features;
