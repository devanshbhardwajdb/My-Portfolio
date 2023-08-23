
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10 w-full flex justify-between items-center p-4 transition-all duration-300 px-[10vw] nav_head h-[10vh] max-lg:bg-gray-800 font-inter ${
        scrolling ? 'bg-gray-800 text-white shadow-md' : 'bg-transparent text-white px-[10vw] z-50'
      }`}
    >
      <div className="flex items-center">
        <Link href="#home">
          <Image src={"/assets/icons/eagle-logo.png"} width={40} height={40} alt="Logo" />
        </Link>
      </div>
      <div className="lg:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-white px-4 py-2 rounded hover:bg-gray-600 transform transition-transform ${
            menuOpen ? 'rotate-60' : 'rotate-0'
          }`}
        >
          <Image src={"/assets/icons/menu-bar.svg"} width={40} height={40} className='invert' />
        </button>
        <div
          className={`${
            menuOpen ? 'h-auto opacity-100 transition-all duration-300' : 'h-0 opacity-0'
          } absolute top-full right-[-0px] mt-2 mr-5 bg-gray-800 text-white  max-w-lg flex flex-col justify-center  items-start gap-10 py-10 pl-10 w-[40vw]`}
        >
          <Link href="#home">
            <h1 className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500 border-1 border-b-whitez">Home</h1>
          </Link>
          <Link href="#skills">
            <h1 className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500 ">Skills</h1>
          </Link>
          <Link href="#projects">
            <h1 className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500">Projects</h1>
          </Link>
          <Link href="#experience">
            <h1 className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500">Experience</h1>
          </Link>
          <Link href="#contact">
            <button className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500 ">Contact</button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex space-x-4 items-center gap-20 font-inter">
        <Link href="#home">
          <h1 className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500">Home</h1>
        </Link>
        <Link href="#skills">
          <h1 className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500">Skills</h1>
        </Link>
        <Link href="#projects">
          <h1 className="hover:text-gray-400 hover:shadow-glow  hover:scale-[1.15] duration-500">Projects</h1>
        </Link>
        <Link href="#experience">
          <h1 className="hover:text-gray-400 hover:shadow-glow hover:scale-[1.15] duration-500">Experience</h1>
        </Link>
        <Link href="#contact">
          <button className=" bg-[#895EF6] rounded-full w-[150px] px-5 h-14 hover:shadow-glow hover:scale-[1.15] duration-500 hover:bg-[#26134b] hover:text-white font-[500]">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
