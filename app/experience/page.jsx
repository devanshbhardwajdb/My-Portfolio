"use client"
import React from 'react';
import { motion } from "framer-motion";
import { slideIn, slideIn2 } from "@/utils/motion";
import { works } from '@/utils/works';
import { Tilt } from 'react-tilt';
import StarsCanvas from '@/components/Stars'

const Experience = () => {
  return (
    <div id='experience' className='w-full h-auto min-h-[100vh] flex flex-col  justify-start items-center text-white py-20 px-[10vw] max-md:px-0 relative'>
      {/* <StarsCanvas /> */}
      <div className=''>
        <motion.h1
          variants={slideIn('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='font-poppins text-gray-200 text-5xl font-bold hover:text-[#57ebff] duration-[0.7s]'>
          Experience
        </motion.h1>
      </div>
      <section className='flex flex-row max-lg:flex-col max-lg:items-center items-start justify-center w-full h-auto relative'>
        {works.map((work, index) => (

          <Tilt className='w-[40vw] max-md:w-full max-lg:w-[70vw]'>
            <motion.div
              key={work.id}
              variants={slideIn2('left', "tween", index * 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className=' green-pink-gradient rounded-3xl p-[2px]'
            >

              <div className='black-gradient rounded-3xl w-full p-8 flex flex-col items-center '>
                <img
                  alt={work.company}
                  src={work.logo}
                  className='w-1/2 rounded-full object-cover'
                />
                <h1 className='font-bold text-[2.2vw] max-lg:text-[5vw] text-center '>
                  {work.company}
                </h1>
                <p className='font-medium text-lg text-center '>
                  {work.description}
                </p>

              </div>
            </motion.div>
          </Tilt>
        ))}
      </section>
    </div>
  );
};

export default Experience;
