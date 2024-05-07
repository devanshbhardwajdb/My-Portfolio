
"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const ref = useRef();
  const ref2 = useRef();
  const hero = useRef(null);

  const toggleMenu = () => {

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
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="nav fixed  top-0 z-10 backdrop-blur-lg  flex justify-between items-center p-4 transition-all duration-300 px-[8vw] nav_head h-[8vh]   max-xl:bg-gray-800   text-white  font-teachers w-[100vw]"

      >
        <div className="flex items-center nav-left cursor-pointer ">
          <a href="#" className='items cursor-pointer'>
            <img alt="logo" src={"/assets/icons/db_logo.svg"}  className="cursor-pointer w-20" />
          </a>
        </div>




        <div className=" flex  items-center gap-20 font-normal max-xl:hidden  relative nav-right transition-all duration-500 text-lg">
          <a href="#">
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer ">Home</h1>
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
            <button className=" bg_button rounded-lg  px-4 h-10 hover:shadow-glow hover:scale-[0.95] duration-500 font-medium hover:bg-[#57ebff] text-black items ">
              Contact
            </button>
          </a>

        </div>
        <div ref={ref} className=" flex fixed max-sm:w-[50vw] top-[8vh] w-[30vw] p-5  right-0 flex-col bg-gray-800  items-start gap-10 font-light   nav-right  duration-500 translate-x-full transform transition-transform  lg:hidden">
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
            <button className=" bg_button rounded-lg  px-4 h-10 hover:shadow-glow hover:scale-[0.95] duration-500 font-medium hover:bg-[#57ebff] text-black items ">
              Contact
            </button>
          </a>

        </div>
        <div ref={ref2} className='absolute top-[25%]  right-11 xl:hidden transition-all duration-500 ' onClick={toggleMenu}>
          <img src={"/assets/icons/menu-bar.svg"} width={30} height={30} className='cursor-pointer invert burger max-xl:rotate-0 transition-all duration-500 '></img>

        </div>
      </motion.nav>
    </>
  );

}
export default Navbar;
