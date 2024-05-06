'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import hover3d from "@utils/hover";
import { slideIn, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";


const Hero = () => {


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
        <div ref={hero}>
            <motion.div
                
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                id='#home'
                className='w-full    flex border-b-2 border-gray-500 items-center justify-center flex-row  gradient min-h-[100vh] h-auto px-[8vw]  gap-20 max-lg:flex-col-reverse max-lg:mt-[30vh]'>


                <motion.div variants={textVariant1(0.5)} className="w-full h-full ">
                    <motion.h1 className=' h1 text-left flex flex-col items-start max-lg:items-center gap-5 transition-all duration-500 '>
                        <div className="text-white text-5xl font-extrabold max-lg:text-center " > <span> Hi, I am</span> <span className="purple_gradient hover:text-[#57ebff] nameh1 ">Devansh Bhardwaj</span></div>
                        <div className='text-4xl font-extrabold text-white max-lg:text-center  '> <span>Full</span> <span> Stack</span><span> Developer</span></div>
                    </motion.h1>
                    <motion.div className="flex gap-x-20 justify-start mt-10 mb-20 max-md:flex-col max-md:gap-5 max-xl:items-center max-xl:justify-center font-teachers">
                        <Link href="https://drive.google.com/file/d/1n5eNhvLGxjdUP30vV94A13UsTz-6Wem0/view?usp=sharing" target="_blank">
                            <button className=" bg_button text-black rounded-full w-60 px-5 h-16 hover:shadow-glow hover:scale-[1.05] duration-500 hover:bg-[#57ebff] text-xl">
                                Download CV
                            </button>
                        </Link>
                        <Link href="https://github.com/devanshbhardwajdb" target="_blank">
                            <button className=" bg_button1 text-black rounded-full w-60 px-5 h-16 hover:shadow-glow hover:scale-[1.05] duration-500 hover:bg-[#57ebff]  text-xl">
                                My Github
                            </button>
                        </Link>

                    </motion.div>

                </motion.div>
                <motion.div
                    variants={textVariant(0)}
                    viewport={{ once: false, amount: 0.25 }}
                    className="w-1/2 h-full flex  justify-center items-start max-lg:items-center max-lg:justify-center  rounded-full  duration-500 relative cursor-pointer "
                   
                >
                    <img
                        alt="Photo" src={"/assets/images/photo.svg"} width={400} height={400} className=" rounded-full object-contain z-[2] "
                        style={{
                            transform: hoverHero.transform,
                        }}
                    />
                    <span className="absolute bg2 opacity-70 shadow blur-[50px] rounded-full z-0"></span>

                    <div className="box absolute  xl:inset-y-[-25px]  lg:inset-y-[-20px] md:inset-y-[-25px] xl:h-[115%] xl:w-[115%] lg:h-[125%] lg:w-[125%] md:h-[120%] md:w-[120%]  max-md:h-[130%] max-md:w-[130%] z-[-2]"></div>
                </motion.div>


            </motion.div>
        </div>
    )
}

export default Hero
