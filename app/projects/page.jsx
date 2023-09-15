"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, fadeIn2, slideIn, slideIn2, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";

const Projects = () => {
  return (
    <div id='projects' className='text-white h-auto min-h-[100vh] border-b-2 border-gray-500 flex flex-col items-center justify-start max-md:px-0  py-20 gap-[10vh] relative '>
      <div className='w-full h-auto flex items-center justify-center '>
        <motion.h1 variants={slideIn('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className='heading hover:text-[#57ebff] duration-[0.7s]'>PROJECTS</motion.h1>
      </div>
      <section className='flex flex-row flex-wrap max-md:flex-col items-start justify-center w-full h-auto relative '>
        <motion.div variants={slideIn2('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Twikker</h1>
          <p className='desc text-center  lg:px-20' >A Full Stack posting app, where you can sign in through google and post, even you can see your profile and edit or delete posts. I created this using Next.js, MongoDB, Tailwind CSS, Javascript, React.js </p>

          <Image src={"/assets/images/project1.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div>
        <motion.div variants={slideIn2('right', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card '>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>iChat App</h1>
          <p className='desc text-center  lg:px-20' >A Realtime chatting application where you can enter your username and simple chat in a chat group with other people joined. I created this using HTML, CSS, Node.js, JS, Socket.io</p>

          <Image src={"/assets/images/iChat.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div>
        <motion.div variants={slideIn2('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Animated Website</h1>
          <p className='desc text-center  lg:px-20' >A clone of sidcup wesbite which is a excellent animated wesbite using Gsap and scrolltrigger and various more features in JS, also used HTMk & CSS. </p>

          <Image src={"/assets/images/animated.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div>
        <motion.div variants={slideIn2('right', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth h-full glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Cross Healthcare Clone</h1>
          <p className='desc text-center  lg:px-20' >A clone of Cross Healthcare page which is of cross atlantic pvt. ltd. I created this using HTML, CSS & JS </p>

          <Image src={"/assets/images/cross.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div>


      </section>
      <div><Image src={"/assets/images/asset1.png"} width={300} height={300} className='absolute z-[-1] left-[612px] top-[620px] max-2xl:hidden ' /></div>

    </div>
  )
}

export default Projects
