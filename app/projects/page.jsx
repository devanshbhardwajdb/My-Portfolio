'use client'
import React,{useRef} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { cards } from '@utils/cards';
import { slideIn, slideIn2 } from '@utils/motion'
import HorizontalWrapper from '@components/HorizontalWrapper';
import hover3d from '@utils/hover';

const Projects = () => {

  const hero = useRef(null);

  // Apply hover3d effect to the photoRef
  const hoverHero = hover3d(hero, {
    x: 40,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <div id='projects' className='text-white h-auto min-h-[100vh] border-b-2 border-gray-500 flex flex-col items-center justify-start max-md:px-0  py-20 gap-[10vh]  w-full relative '>
      <div className='w-full h-auto flex items-center justify-center '>
        <motion.h1 variants={slideIn('left', "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} className='heading hover:text-[#57ebff] duration-[0.7s]'>PROJECTS</motion.h1>
      </div>

      <section className=" w-full flex flex-wrap justify-center max-md:flex-col" >


        {cards.map((card) => (

          <motion.div
            ref={hero}
            style={{
              transform: hoverHero.transform,
            }}
            key={card.id}
            variants={slideIn2(card.direction, "tween", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }} className='project-class glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center scale-75 hover:shadow-xl smooth glass_card w-[40vw] max-md:w-[95vw]' title='Click to visit the site'>
            <Link href={card.link} target='_blank' className='flex flex-col items-center'>
              <h1 className='font-bold text-[2vw] max-lg:text-[5vw] text-center lg:px-10 pt-10'>{card.title}</h1>
              <p className='desc text-center lg:px-20'>{card.description}</p>

              <img alt="projects" src={card.image} width={500} height={500} className='lg:p-10 max-lg:pt-5' />

            </Link>
          </motion.div>

        ))}
      </section>
      <div><img alt="projects" src={"/assets/images/asset1.png"} width={300} height={300} className='absolute z-[-1] left-[612px] top-[640px] max-2xl:hidden ' /></div>
      <div><img alt="projects" src={"/assets/images/asset1.png"} width={300} height={300} className='absolute z-[-1] left-[612px] top-[1210px] max-2xl:hidden ' /></div>


    </div >
  )
}

export default Projects;
