"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
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
        <Link href={"https://posting-full-stack.netlify.app/"} target='_blank'><motion.div variants={slideIn2('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Twikker</h1>
          <p className='desc text-center  lg:px-20' >A dynamic Full Stack application for sharing creative ideas and thoughts. Developed with Next.js, React, Node.js, and MongoDB for a seamless user experience. </p>

          <img alt="projects" src={"/assets/images/project1.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div></Link>
        <Link href={"https://tech-wear.vercel.app/"} target='_blank'><motion.div variants={slideIn2('right', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card '>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Tech Wear</h1>
          <p className='desc text-center  lg:px-20' >An intuitive E-commerce platform focused on cutting-edge tech products. Built using Next.js, React, Node.js, and MongoDB, providing a feature-rich shopping experience.</p>

          <img alt="projects" src={"/assets/images/techwear.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div></Link>

        <Link href={"https://dev-project-metaverse.netlify.app/"} target='_blank'>
        <motion.div variants={slideIn2('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Metaversus</h1>
          <p className='desc text-center  lg:px-20' >An animated, visually stunning website demonstrating the power of modern web technologies. Crafted with Framer Motion, Next.js, React, Tailwind CSS, and Material UI for an immersive online experience.
          </p>

          <img alt="projects" src={"/assets/images/metaverse.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div></Link>
       
        <motion.div variants={slideIn2('right', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card '>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>iChat App</h1>
          <p className='desc text-center  lg:px-20' >A Realtime chatting application where you can enter your username and simple chat in a chat group with other people joined. I created this using HTML, CSS, Node.js, JS, Socket.io</p>

          <img alt="projects" src={"/assets/images/iChat.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div>
        <Link href={"https://dev-animated.netlify.app/"} target='_blank'>
        <motion.div variants={slideIn2('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Animated Website</h1>
          <p className='desc text-center  lg:px-20' >A clone of sidcup wesbite which is a excellent animated wesbite using Gsap and scrolltrigger and various more features in JS, also used HTMk & CSS. </p>

          <img alt="projects" src={"/assets/images/animated.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div></Link>
        <Link href={"https://cross-atlantic.netlify.app/"} target='_blank'>
        
        <motion.div variants={slideIn2('right', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className=' project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center  scale-75 hover:shadow-xl smooth h-full glass_card'>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Cross Healthcare Clone</h1>
          <p className='desc text-center  lg:px-20' >A clone of Cross Healthcare page which is of cross atlantic pvt. ltd. I created this using HTML, CSS & JS </p>

          <img alt="projects" src={"/assets/images/cross.png"} width={500} height={500} className=' lg:p-10 max-lg:pt-5' />

        </motion.div></Link>


      </section>
      <div><img alt="projects" src={"/assets/images/asset1.png"} width={300} height={300} className='absolute z-[-1] left-[612px] top-[620px] max-2xl:hidden ' /></div>
      <div><img alt="projects" src={"/assets/images/asset1.png"} width={300} height={300} className='absolute z-[-1] left-[612px] top-[1160px] max-2xl:hidden ' /></div>

    </div>
  )
}

export default Projects
