import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          <div className="mb-2 flex items-center gap-2">
            {/* Logo */}
            <Link to="/" className="inline-block" aria-label="Cruip">
              <img src="https://cdn.discordapp.com/attachments/892774488209502248/967710305746554922/TITAN_logo_final.gif" className="w-12 h-12 rounded-md" alt="logo" />
            </Link>
            <h1 className='text-2xl font-extrabold'><strong>
              Titan Family
            </strong></h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
