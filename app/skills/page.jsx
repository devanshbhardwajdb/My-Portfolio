'use client'
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";
import { skills } from '@utils/skills';


const Skills = () => {
  return (
    <div
      id="skills" className='text-white  border-b-2 border-gray-500 h-auto  flex flex-col items-center justify-center heading py-20 px-[10vw]'>
      <motion.h1 variants={slideIn('down', "tween", 0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} className='heading hover:text-[#57ebff] duration-[0.7s]'>SKILLS</motion.h1>
     <marquee behavior="scroll"  direction="left"  scrollAmount={20}>
        <div className=" gap-[100px] mt-20 relative flex">

          {skills.map((skill) => {

            return (
              <div className='skill flex flex-col items-center justify-center'>

                <motion.div variants={fadeIn('down', 'tween', 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className='flex flex-col justify-center items-center'
                >
                  <div className="relative bg-white rounded-full flex   object-fill  items-center justify-center  h-40 w-40">


                    <img alt={skill.name} src={skill.icon} className=' duration-500  cursor-pointer relative rounded-full ' />

                    <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
                  </div>

                  <h1 className='font-bold text-lg font-teachers mt-4'>{skill.name}</h1>
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
