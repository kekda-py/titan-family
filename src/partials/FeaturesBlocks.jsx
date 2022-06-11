import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What do we have here?</h2>
            <p className="text-xl text-gray-600">
              A place where everyone can chill and have fun
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded drop-shadow-2xl">
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16 p-1 -mt-1 mb-2' fill='#0070F4' viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25.013672 2 A 1.0001 1.0001 0 0 0 24.257812 2.3203125 L 17.041016 10.107422 L 7.1152344 12.443359 L 2.4375 10.105469 A 1.0001 1.0001 0 0 0 1.9550781 10 A 1.0001 1.0001 0 0 0 1.0957031 10.552734 C 1.0957031 10.552734 -0.009765625 12.809524 -0.009765625 16.5 C -0.009765625 18.41826 0.56640439 19.857705 1.2167969 21.027344 A 1.0001 1.0001 0 0 0 -0.009765625 22 L -0.009765625 23 C -0.009765625 24.117325 -0.15578083 26.755937 0.59179688 29.355469 C 1.3369967 31.946731 3.1381649 34.621043 6.7324219 35.464844 A 1.0001 1.0001 0 0 0 6.7617188 35.472656 C 6.7631417 35.472985 6.7642015 35.474281 6.765625 35.474609 L 8.5742188 35.900391 L 8.0332031 37.714844 C 7.9542031 37.978844 7.987 38.260047 8.125 38.498047 C 8.262 38.736047 8.4908125 38.907656 8.7578125 38.972656 L 17.853516 41.15625 L 24.277344 47.701172 C 24.465344 47.892172 24.723187 48.001953 24.992188 48.001953 C 25.261187 48.001953 25.516078 47.893172 25.705078 47.701172 L 32.130859 41.15625 L 41.226562 38.972656 C 41.493563 38.908656 41.722375 38.737047 41.859375 38.498047 C 41.997375 38.260047 42.030172 37.978844 41.951172 37.714844 L 41.408203 35.900391 L 43.216797 35.474609 C 46.834018 34.639866 48.641094 31.955 49.388672 29.355469 C 50.13625 26.755937 49.990234 24.117325 49.990234 23 L 49.990234 22 A 1.0001 1.0001 0 0 0 48.765625 21.025391 C 49.415535 19.85598 49.990234 18.417198 49.990234 16.5 C 49.990234 12.809524 48.884766 10.552734 48.884766 10.552734 A 1.0001 1.0001 0 0 0 47.998047 10 A 1.0001 1.0001 0 0 0 47.542969 10.105469 L 42.865234 12.443359 L 32.939453 10.107422 L 25.724609 2.3203125 A 1.0001 1.0001 0 0 0 25.013672 2 z M 24.990234 4.4707031 L 31.679688 11.689453 A 1.0001 1.0001 0 0 0 32.185547 11.982422 L 41.728516 14.228516 L 38.878906 23.712891 A 1.0001 1.0001 0 0 0 38.878906 24.287109 L 41.728516 33.771484 L 32.185547 36.017578 A 1.0001 1.0001 0 0 0 31.679688 36.310547 L 24.990234 43.529297 L 18.300781 36.310547 A 1.0001 1.0001 0 0 0 17.796875 36.017578 L 8.2539062 33.771484 L 11.103516 24.287109 A 1.0001 1.0001 0 0 0 11.103516 23.712891 L 8.2539062 14.228516 L 17.796875 11.982422 A 1.0001 1.0001 0 0 0 18.300781 11.689453 L 24.990234 4.4707031 z M 24.990234 12 C 18.374662 12 12.990234 17.384428 12.990234 24 L 12.990234 24.003906 C 12.990286 24.021343 12.992057 24.039188 12.992188 24.056641 C 13.023167 30.645979 18.39377 36 24.990234 36 C 31.203549 36 36.329127 31.249683 36.929688 25.191406 C 36.971482 24.792308 36.991286 24.39382 36.990234 24 C 36.990234 17.384428 31.605807 12 24.990234 12 z M 2.5527344 12.400391 L 6.1582031 14.201172 L 9.1015625 24 L 6.3222656 33.253906 C 4.0826869 32.432768 3.0712112 30.739498 2.5136719 28.800781 C 1.9339775 26.785026 1.9840046 24.699085 1.9941406 23.388672 L 3.6738281 23.949219 A 1.0001 1.0001 0 0 0 4.5683594 22.183594 C 4.5683594 22.183594 1.9902344 20.417857 1.9902344 16.5 C 1.9902344 14.417844 2.2901435 13.19856 2.5527344 12.400391 z M 47.427734 12.400391 C 47.690325 13.19856 47.990234 14.417844 47.990234 16.5 C 47.990234 20.417857 45.412109 22.183594 45.412109 22.183594 A 1.0001 1.0001 0 0 0 46.306641 23.949219 L 47.986328 23.388672 C 47.996468 24.699085 48.046488 26.785027 47.466797 28.800781 C 46.909258 30.739498 45.899392 32.432768 43.660156 33.253906 L 40.880859 24 L 43.824219 14.201172 L 47.427734 12.400391 z M 24.990234 14 C 30.524927 14 34.990234 18.465308 34.990234 24 C 34.990234 25.166544 34.78095 26.280577 34.416016 27.320312 C 33.829851 28.725236 32.703653 29.971493 30.576172 30.96875 A 1.0001 1.0001 0 0 0 30.001953 31.802734 L 29.994141 31.927734 A 1.0001 1.0001 0 0 0 29.990234 32 C 29.990234 32.56503 29.555265 33 28.990234 33 L 20.990234 33 C 20.42841 33 19.999039 32.56816 19.994141 32.007812 L 19.998047 31.947266 A 1.0001 1.0001 0 0 0 19.423828 30.96875 C 17.19697 29.924911 16.056582 28.609448 15.492188 27.121094 C 15.170875 26.138782 14.990234 25.09155 14.990234 24 L 14.990234 23.998047 L 14.990234 23.996094 C 14.992359 18.463228 19.456859 14 24.990234 14 z M 21.980469 18.990234 A 1.0001 1.0001 0 0 0 21.283203 20.707031 L 22.283203 21.707031 A 1.0001 1.0001 0 1 0 23.697266 20.292969 L 22.697266 19.292969 A 1.0001 1.0001 0 0 0 21.980469 18.990234 z M 27.970703 18.990234 A 1.0001 1.0001 0 0 0 27.283203 19.292969 L 26.283203 20.292969 A 1.0001 1.0001 0 1 0 27.697266 21.707031 L 28.697266 20.707031 A 1.0001 1.0001 0 0 0 27.970703 18.990234 z M 19.990234 22 A 3 3 0 0 0 16.990234 25 A 3 3 0 0 0 19.990234 28 A 3 3 0 0 0 22.990234 25 A 3 3 0 0 0 19.990234 22 z M 29.990234 22 A 3 3 0 0 0 26.990234 25 A 3 3 0 0 0 29.990234 28 A 3 3 0 0 0 32.990234 25 A 3 3 0 0 0 29.990234 22 z M 24.990234 26 L 22.990234 29 L 26.990234 29 L 24.990234 26 z" /></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">An awesome Brawl Stars club</h4>
              <p className="text-gray-600 text-center">Number <strong>{'3rd'}</strong> club in whole Bangladesh</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded drop-shadow-2xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ani-Manga discussions</h4>
              <p className="text-gray-600 text-center">Talk and discuss about your favourite anime mangas</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded drop-shadow-2xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Seasonal Games</h4>
              <p className="text-gray-600 text-center">We play mini games when the server is active and have fun together.</p>
            </div>
          </div>
            
          <div className=' mt-32'>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
