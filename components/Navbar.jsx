
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

  useEffect(() => {
    let burger = document.querySelector('.burger');
    let navbar = document.querySelector('.nav');
    let leftnav = document.querySelector('.nav-left');
    let rightnav = document.querySelector('.nav-right');


    burger.addEventListener('click', () => {
      // leftnav.classList.toggle('v-class-resp');
      rightnav.classList.toggle('max-xl:hidden');
      // navbar.classList.toggle('max-xl:h-[20vh]');
      burger.classList.toggle('max-xl:rotate-90')

    })

  }, [])





  return (
    <>
      <nav
        className="nav fixed top-0 z-10 w-full flex justify-between items-center p-4 transition-all duration-300 px-[10vw] nav_head h-[10vh]  max-xl:bg-gray-800 font-inter bg-gray-800 text-white  "

      >
        <div className="flex items-center nav-left">
          <a href="#home" className='items cursor-pointer'>
            <Image src={"/assets/icons/eagle-logo.png"} width={40} height={40} alt="Logo cursor-pointer" />
          </a>
        </div>




        <div className=" flex  items-center gap-20 font-semibold  font-inter relative max-xl:hidden max-xl:flex-col max-xl:gap-8 max-xl:top-[22vh] max-xl:bg-gray-800 max-xl:p-10 max-xl:items-start nav-right transition-all duration-500">
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
            <button className=" bg-[#895EF6] rounded-full w-[130px] px-5 h-12 hover:shadow-glow hover:scale-[0.9] duration-500 hover:bg-[#57ebff] hover:text-black font-[500] items">
              Contact
            </button>
          </a>

        </div>
        <div className='absolute top-[25%]  right-11 xl:hidden '>
          <Image src={"/assets/icons/menu-bar.svg"} width={40} height={40} className='cursor-pointer invert burger max-xl:rotate-0 transition-all duration-500 '></Image>
        </div>
      </nav>
    </>
  );

}
export default Navbar;
