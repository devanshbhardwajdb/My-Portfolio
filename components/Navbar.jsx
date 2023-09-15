
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const ref = useRef();
  const ref2 = useRef();

  const toggleMenu = ()=>{

    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
      ref2.current.classList.add("-rotate-90")
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')
      ref2.current.classList.remove("-rotate-90")

    }

  }

  return (
    <>
      <nav
        className="nav fixed top-0 z-10 w-full flex justify-between items-center p-4 transition-all duration-300 px-[10vw] nav_head h-[10vh]   max-xl:bg-gray-800 backdrop-blur-xl shadow-lg shadow-gray-900 text-white  font-livvic"

      >
        <div className="flex items-center nav-left cursor-pointer">
          <a href="#" className='items cursor-pointer'>
            <Image src={"/assets/icons/eagle-logo.png"} width={40} height={40} alt="Logo cursor-pointer" />
          </a>
        </div>




        <div className=" flex  items-center gap-20 font-normal max-xl:hidden  relative nav-right transition-all duration-500">
          <a href="#">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Home</h1>
          </a>
          <a href="#skills">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Skills</h1>
          </a>
          <a href="#projects">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow  hover:scale-[0.9] duration-500 items cursor-pointer">Projects</h1>
          </a>
          <a href="#experience">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Experience</h1>
          </a>
          <a href="#contact">
            <button className=" bg-[#895EF6] rounded-full w-[130px] px-5 h-12 hover:shadow-glow hover:scale-[0.9] duration-500 font-normal hover:bg-[#57ebff] hover:text-black items">
              Contact
            </button>
          </a>

        </div>
        <div ref={ref} className=" flex fixed max-sm:w-[50vw] top-[10vh] w-[30vw] p-5  right-0 flex-col bg-gray-800  items-start gap-10 font-light   nav-right  duration-500 translate-x-full transform transition-transform">
          <a href="#">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Home</h1>
          </a>
          <a href="#skills">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Skills</h1>
          </a>
          <a href="#projects">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow  hover:scale-[0.9] duration-500 items cursor-pointer">Projects</h1>
          </a>
          <a href="#experience">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Experience</h1>
          </a>
          <a href="#contact">
            <button className=" bg-[#895EF6] rounded-full w-[130px] px-5 h-12 hover:shadow-glow hover:scale-[0.9] duration-500 font-light hover:bg-[#57ebff] hover:text-black items">
              Contact
            </button>
          </a>

        </div>
        <div ref={ref2} className='absolute top-[25%]  right-11 xl:hidden transition-all duration-500 ' onClick={toggleMenu}>
          <Image src={"/assets/icons/menu-bar.svg"} width={40} height={40} className='cursor-pointer invert burger max-xl:rotate-0 transition-all duration-500 '></Image>
        </div>
      </nav>
    </>
  );

}
export default Navbar;
