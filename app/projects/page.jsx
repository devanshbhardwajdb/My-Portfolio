'use client'
import React, { useRef } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { cards } from '@utils/cards';
import { slideIn, slideIn2 } from '@utils/motion'
import HorizontalWrapper from '@components/HorizontalWrapper';
import hover3d from '@utils/hover';
import Lottie from "lottie-react";
import A1 from "@/a1.json"
import { Tilt } from 'react-tilt';
import StarsCanvas from '@/components/Stars'

const Projects = () => {
 


  return (
    <div id='projects' className='text-white h-auto min-h-[100vh]  flex flex-col items-center justify-start max-md:px-0  py-20 gap-[10vh]  w-full relative '>
      {/* <StarsCanvas /> */}
      <div className='w-full h-auto flex items-center justify-center '>
        <motion.h1 variants={slideIn('up', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className='font-poppins z-[2]  hover:text-[#57ebff] duration-[0.7s] text-gray-200 text-5xl font-extrabold '>Projects</motion.h1>
      </div>


      <section className=" w-full flex flex-wrap justify-center max-md:flex-col" >


        {cards.map((card) => (
          <Tilt className='w-[40vw] max-md:w-full max-lg:w-[70vw] h-[500px] z-[3]'>


            <motion.div

              key={card.id}
              variants={slideIn2(card.direction, "tween", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }} className='green-pink-gradient p-[2px] rounded-3xl  ' >

              <div className='black-gradient rounded-3xl h-[545px] p-12 flex flex-col items-start justify-center'>

                <div className='relative flex justify-center w-full'>
                  <img alt="projects" src={card.image} className='rounded-3xl  justify-center' />

                  <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
                    <div
                      onClick={() => window.open(card.github, "_blank")}
                      className='black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer object-cover '
                    >
                      <img
                        src='/assets/icons/github.png'
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                      />
                    </div>
                    <div
                      onClick={() => window.open(card.link, "_blank")}
                      className='black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer object-cover '
                    >
                      <img
                        src='/assets/icons/deploy.png'
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain invert'
                      />
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-4xl  lg:px- pt-10'>{card.title}</h1>
                <p className='text-md pt-5  text-justify'>{card.description}</p>



              </div>
            </motion.div>
          </Tilt>
        ))}
      </section>


      <motion.div><img alt="projects" src={"/assets/icons/lines.svg"} className='absolute z-[1] w-[80vw] top-[-5%] left-[10%] max-2xl:hidden ' /></motion.div>
      <Lottie animationData={A1} loop={true} className='absolute z-[1] w-[18vw] left-[41%] top-[14%] max-2xl:hidden ' />
      <Lottie animationData={A1} loop={true} className='absolute z-[1] w-[18vw] left-[41%] top-[41%] max-2xl:hidden ' />
      <Lottie animationData={A1} loop={true} className='absolute z-[1] w-[18vw] left-[41%] top-[70%] max-2xl:hidden ' />




    </div >
  )
}

export default Projects;
