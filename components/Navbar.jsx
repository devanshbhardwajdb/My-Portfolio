
"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { navVariants, navVariants2 } from "../utils/motion";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const ref = useRef();
  const ref2 = useRef();
  const hero = useRef(null);
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
 


  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="nav fixed  top-0 z-10 backdrop-blur-lg  flex justify-between items-center p-4 transition-all duration-300 px-[8vw] nav_head h-[8vh] bg-[#121212] text-white  font-poppins w-[100vw]"

      >
        <div className="flex items-center nav-left cursor-pointer ">
          <a href="#" className='items cursor-pointer'>
            <img alt="logo" src={"/assets/icons/db_logo.svg"} className="cursor-pointer w-20" />
          </a>
        </div>




        <div className=" flex  items-center gap-20 font-normal max-xl:hidden  relative nav-right transition-all duration-500 text-base">
          {/* <a href="#">
              <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer ">Home</h1>
            </a> */}
          <a href="#skills" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Skills</h1>
          </a>
          <a href="#projects" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#57ebff] hover:shadow-glow  hover:scale-[0.9] duration-500 items cursor-pointer">Projects</h1>
          </a>
          <a href="#experience" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Experience</h1>
          </a>
          <a href="#contact" onClick={() => { setMenu(false) }} className="hero_link green-pink-gradient w-28 h-10 p-[1px] rounded-xl">

            <button className="hero_button text-sm font-poppins bg-[#121212] w-full h-full rounded-xl duration-300 ">
              Contact
            </button>


          </a>

        </div>
        <div className={` flex fixed max-sm:w-[50vw] top-[7.8vh] w-[30vw] p-5  right-0 flex-col bg-[#121212] text-base  items-start gap-10 font-light   nav-right  duration-500 transform transition-transform  lg:hidden ${menu ? "translate-x-0" : "translate-x-full"}`}>
          {/* <a href="#">
              <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Home</h1>
            </a> */}
          <a href="#skills" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Skills</h1>
          </a>
          <a href="#projects" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#57ebff] hover:shadow-glow  hover:scale-[0.9] duration-500 items cursor-pointer">Projects</h1>
          </a>
          <a href="#experience" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#57ebff] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Experience</h1>
          </a>
          <a href="#contact" className="hero_link green-pink-gradient w-28 h-10 p-[1px] rounded-xl" onClick={() => { setMenu(false) }}>
            <button className="hero_button text-sm font-poppins bg-[#121212] w-full h-full rounded-xl duration-300 ">
              Contact
            </button>
          </a>
        </div>
        <div className='absolute top-[25%]  right-11 xl:hidden transition-all duration-500 ' onClick={() => { setMenu(!menu) }}>
          {/* <img src={"/assets/icons/menu-bar.svg"} width={30} height={30} className='cursor-pointer invert burger max-xl:rotate-0 transition-all duration-500 '></img> */}
          <div className="burger flex flex-col items-end gap-1">
            <div className={`line1 border-2 rounded-full ${menu ? "w-4" : "w-8"} duration-200 `}></div>
            <div className={`line1 border-2 rounded-full ${menu ? "w-4" : "w-8"} duration-200 `}></div>
            <div className={`line1 border-2 rounded-full ${menu ? "w-8" : "w-4"} duration-200`}></div>
          </div>


        </div>
      </motion.nav>

     
    </>
  );

}
export default Navbar;
