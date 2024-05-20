'use client'
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, fadeIn3, slideIn, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";
import { skills } from '@utils/skills';
import Lottie from "lottie-react";
import A1 from "@/a3.json"
import StarsCanvas from '@/components/Stars'


const Skills = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {

    if (marqueeRef.current) {

      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };





  return (
    <div id="skills" className='text-white  relative h-full  w-[100vw] flex flex-col items-center justify-center heading py-20   '>
      {/* <StarsCanvas /> */}
     
      <motion.h1 variants={slideIn('down', "tween", 0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} className='font-poppins text-gray-200 text-5xl font-extrabold  hover:text-[#57ebff] duration-[0.7s]'>Skills</motion.h1>
      {/* <div className='absolute  w-[50vw] z-[50] bg_skill h-1/2 left-0'></div> */}
      <marquee behavior="scroll" direction="left" scrollDelay={60} ref={marqueeRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} scrollAmount={20} className=' '>

        <div className=" gap-[100px] mt-20 relative flex ">

          {skills.map((skill) => {

            return (
              <div key={skill.id} className='skill flex flex-col cursor-pointer items-center justify-center hover:scale-90 hover:-translate-y-5 duration-300'>

                <motion.div variants={fadeIn3('down', 'tween', 0.2, 1.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className='flex flex-col justify-center items-center'
                >
                  <div className="relative  rounded-full flex cursor-pointer items-center  justify-center  h-40 w-40">

                    <div className='bg-gray-200 flex items-center  justify-center rounded-full w-40 h-40 '>
                      <img alt={skill.name} src={skill.icon} className=' duration-500 object-contain  cursor-pointer  h-28 w-28 flex items-center justify-center' />
                    </div>

                    <div className="spinner absolute w-[105%] h-[105%] z-[-3]"></div>
                  </div>

                  <h1 className='font-bold text-lg font-poppins mt-4'>{skill.name}</h1>
                </motion.div>
              </div>
            )
          })
          }
        </div>
      </marquee>

    </div>
  )
}

export default Skills
