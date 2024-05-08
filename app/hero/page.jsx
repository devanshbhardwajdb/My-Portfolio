'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import hover3d from "@utils/hover";
import { slideIn, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";
import Lottie from "lottie-react";
import A1 from "@/a2.json"


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
                className='w-full    flex items-center justify-center flex-row  gradient min-h-[100vh] h-auto px-[8vw]  gap-20 max-lg:flex-col-reverse max-lg:mt-[30vh]'>


                <motion.div variants={textVariant1(0.5)} className="w-full h-full relative ">
                    <motion.h1 className=' h1 text-left flex flex-col items-start max-lg:items-center gap-5 transition-all duration-500 '>
                        <div className="text-white text-5xl  font-extrabold max-lg:text-center " > <span> Hi, I'm</span> <span className="purple_gradient hover:text-[#57ebff] nameh1 ">Devansh Bhardwaj</span></div>
                        <div className='text-4xl max-md:text-3xl font-extrabold text-white max-lg:text-center  '> <span>Full</span> <span> Stack</span><span> Developer</span></div>
                    </motion.h1>
                    <motion.div className="flex gap-x-20 justify-start mt-10 mb-20 max-md:flex-col max-md:gap-5 max-xl:items-center max-xl:justify-center font-teachers relative">
                        <Link href="https://drive.google.com/file/d/1n5eNhvLGxjdUP30vV94A13UsTz-6Wem0/view?usp=sharing" target="_blank">
                            <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#9B03F8] hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-[#9B03F8] relative bg-neutral-900/20 hover:bg-neutral-900 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#9B03F8]/60 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#57ebff]/50 after:right-8 after:top-3 after:rounded-full after:blur-lg font-teachers">
                                Download CV
                            </button>
                        </Link>
                        <Link href="https://github.com/devanshbhardwajdb" target="_blank">
                            {/* <button className=" bg_button1 text-black rounded-full w-60 px-5 h-16 hover:shadow-glow hover:scale-[1.05] font-medium duration-500 hover:bg-[#57ebff]  text-xl">
                                My Github
                            </button> */}
                            <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#9B03F8] hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-[#9B03F8] relative hover:bg-neutral-900 bg-neutral-900/20 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#9B03F8]/60 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#57ebff]/50 after:right-8 after:top-3 after:rounded-full after:blur-lg font-teachers">
                                My Github
                            </button>
                        </Link>

                        {/* <Lottie animationData={A1} loop={true} className='absolute z-[-1] w-[30vw] -bottom-60 left-0 max-2xl:hidden ' /> */}
                    </motion.div>

                </motion.div>
                <motion.div
                    variants={textVariant(0)}
                    viewport={{ once: false, amount: 0.25 }}
                    className="w-1/2 max-md:w-[60vw] h-full flex  justify-center items-start max-lg:items-center max-lg:justify-center  rounded-full  duration-500 relative cursor-pointer "

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
