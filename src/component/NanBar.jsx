import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

function NavBar() {
  return (
    <header className="bg-gradient-to-r from-green-400 via-green-600 to-green-400 p-4 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between">

        <div className='box-content h-22 w-42 p-4'>
          <span className="text-4xl p-4 font-bold mb-2 md:mb-0"></span>
        </div>

        <div className='box-content h-22 w-42 p-4'>
          <span className="text-5xl p-4 mb-2 md:mb-0" style={{ fontFamily: 'Lucida Console' }}>
            My Portfolio
          </span>
        </div>

        <div className='box-content h-22 w-42 p-4 flex'>
          <a href="https://github.com/Garullous" target="_blank" rel="noopener noreferrer" className="text-4xl p-4 font-bold mb-2 md:mb-0 hover:text-gray-300">
            <IoLogoGithub />
          </a>
          <a href="https://www.instagram.com/dhyani_brd/" target="_blank" rel="noopener noreferrer" className="text-4xl p-4 font-bold mb-2 md:mb-0 hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" className="text-4xl p-4 font-bold mb-2 md:mb-0 hover:text-gray-300">
            <FaXTwitter />
          </a>
        </div>

      </div>
    </header>
  );
}

export default NavBar;
