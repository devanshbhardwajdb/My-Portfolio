"use client"
import React from 'react'

import { motion } from "framer-motion";
import { fadeIn, fadeIn2, slideIn,slideIn2, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";

const Experience = () => {
  return (
    <div id='experience' className='w-full h-auto min-h-[100vh] flex flex-col justify-start items-center text-white  py-20 px-[10vw] max-md:px-0 relative border-b-2 border-gray-500'>
      <div className=''>
      <motion.h1 variants={slideIn('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className='font-teachers text-3xl font-bold hover:text-[#57ebff] duration-[0.7s]'>EXPERIENCE</motion.h1>
      </div>
      <section className='flex flex-row max-md:flex-col max-md:items-center items-start justify-center w-full h-auto relative'>
        <motion.div variants={slideIn2('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Internship</h1>
          <p className='desc text-center  lg:px-20' >1 Month Internship at Oasis Infobyte </p>

          <img alt="exp" src={"/assets/images/oi.jfif"} width={200} height={200} className=' lg:p-10 max-lg:pt-5 rounded-full' />

        </motion.div>
        <motion.div variants={slideIn2('left', "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Internship</h1>
          <p className='desc text-center  lg:px-20' >3 Months Internship at Cross Atlantic pvt. ltd. </p>

          <img alt="exp" src={"/assets/images/ca.png"} width={200} height={200} className=' lg:p-10 max-lg:pt-5 rounded-full object-cover' />

        </motion.div>
        <motion.div variants={slideIn2('left', "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Internship</h1>
          <p className='desc text-center  lg:px-20' >1 Month Internship at Code Clause </p>

          <img alt="exp" src={"/assets/images/cc.png"} width={200} height={200} className=' lg:p-10 max-lg:pt-5 rounded-full' />

        </motion.div>
      </section>
    </div>
  )
}

export default Experience
