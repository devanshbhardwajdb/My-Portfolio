import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";


const Skills = () => {
  return (
    <div
      id="skills" className='text-white border-b-2 border-gray-500 h-auto min-h-[100vh] flex flex-col items-center justify-center heading py-40 px-[10vw]'>
      <motion.h1 variants={slideIn('down', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className='heading hover:text-[#57ebff] duration-[0.7s]'>SKILLS</motion.h1>
      <div
        className="flex flex-row  gap-[100px] justify-center flex-wrap mt-20 relative ">
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative bg-white rounded-full flex items-center justify-center  ">
          <Image src={"/assets/icons/node.svg"} width={160} height={150} className=' duration-500  cursor-pointer relative' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>


        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full flex items-center justify-center ">
          <Image src={"/assets/icons/mongodb.svg"} width={160} height={150} className=' duration-500  cursor-pointer scale-[80%]' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.4, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full flex items-center justify-center ">
          <Image src={"/assets/images/next.svg"} width={160} height={150} className='   duration-500 cursor-pointer' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full flex items-center justify-center ">
          <Image src={"/assets/icons/tailwind.svg"} width={160} height={150} className=' duration-500  cursor-pointer scale-[80%]' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>


        <motion.div variants={fadeIn('up', 'tween', 0.6, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full flex items-center justify-center ">
          <Image src={"/assets/icons/react.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.7, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full object-contain flex items-center justify-center  ">

          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
          <Image src={"/assets/icons/css.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
        </motion.div>


        <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full object-cover flex items-center justify-center  ">
          <Image src={"/assets/icons/js2.svg"} width={180} height={150} className=' duration-500  cursor-pointer rounded-full bg-blend-multiply ' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.9, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full flex items-center justify-center  ">
          <Image src={"/assets/icons/git.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 1.0, 1)} initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} className="relative bg-white rounded-full flex items-center justify-center ">
          <Image src={"/assets/icons/cpp.svg"} width={160} height={150} className='  duration-500 cursor-pointer scale-[80%]' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>


        <motion.div
          variants={fadeIn('up', 'tween', 1.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative bg-white rounded-full flex items-center justify-center ">
          <Image src={"/assets/icons/python.svg"} width={160} height={150} className='  duration-500 cursor-pointer  scale-[80%]' />
          <div className="box absolute  inset-y-[-10px] inset-x-[-12px] h-[115%] w-[115%] z-[-3]"></div>
        </motion.div>
      </div>

    </div>
  )
}

export default Skills
