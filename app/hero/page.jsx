'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import hover3d from "@utils/hover";
import { slideIn, staggerContainer, textVariant, textVariant1 } from "@/utils/motion";
import Lottie from "lottie-react";
import A1 from "@/a2.json"
import StarsCanvas from '@/components/Stars'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger)


const Hero = () => {


    const hero = useRef(null);
    const scrollRef = useRef();
    
    // useGSAP (()=>{

    //     gsap.to('#circle',{
    //         x:150,
    //         backgroundColor:
    //         scrollTrigger:{
    //             trigger:"#home",
    //             start:'bottom bottom',
    //             end: 'top 20%',
    //             scrub: 1,
    //         },
    //         ease: 'power1.inOut'
    //     })



    // },[])

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

            {/* <div id="circle" className="bg-red-400 w-44 h-44 fixed bottom-5"></div> */}
            <motion.div

                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                id='#home'
                className='w-full   flex items-center justify-center flex-row min-h-[100vh] h-auto px-[8vw]  gap-20 max-lg:flex-col-reverse max-lg:mt-[15vh]'>
                {/* <StarsCanvas /> */}


                <motion.div variants={textVariant1(0.5)} className="w-full h-full relative ">
                    <motion.h1 className=' h1 text-left flex flex-col items-start max-lg:items-center gap-5 transition-all duration-500 '>
                        <div className="text-gray-200 text-5xl  font-extrabold max-lg:text-center " > <span> Hi, I'm</span> <span className="purple_gradient hover:text-[#57ebff] nameh1 ">Devansh Bhardwaj</span></div>
                        <div className='text-4xl max-md:text-2xl font-extrabold text-gray-200 max-lg:text-center  '> <span>Full</span> <span> Stack</span><span> Developer</span></div>
                    </motion.h1>
                    <motion.div className="flex gap-x-20 justify-start mt-10 mb-20 max-md:flex-col max-md:gap-5 max-xl:items-center max-xl:justify-center font-poppins relative">
                        <Link href="https://drive.google.com/file/d/19Mn-7jw0nvKFY1QtL0-oNQnIDnRznTW2/view?usp=sharing" target="_blank" className="hero_link green-pink-gradient w-44 h-16 p-[1px] rounded-xl">
                            <button className="hero_button font-poppins bg-[#121212] w-full h-full rounded-xl duration-300 ">
                                Download CV
                            </button>
                        </Link>
                        <Link href="https://github.com/devanshbhardwajdb" target="_blank" className="hero_link green-pink-gradient w-44 h-16 p-[1px] rounded-xl">
                            <button className="hero_button font-poppins bg-[#121212] w-full h-full rounded-xl duration-300 ">
                                Github
                            </button>
                        </Link>
                        

                        {/* <Lottie animationData={A1} loop={true} className='absolute z-[-1] w-[30vw] -bottom-60 left-0 max-2xl:hidden ' /> */}
                    </motion.div>

                </motion.div>
                <motion.div
                    variants={textVariant(0)}
                    viewport={{ once: false, amount: 0.25 }}
                    className="w-1/2 max-md:w-[60vw] h-full flex  justify-center items-center max-lg:items-center max-lg:justify-center  rounded-full relative cursor-pointer "

                >
                    <img
                        alt="Photo" src={"/assets/images/photo.svg"} width={400} height={400} className=" rounded-full object-contain z-[2] "
                        style={{
                            transform: hoverHero.transform,
                        }}
                    />

                    {/* <span className="absolute bg2 opacity-70 shadow blur-[50px] rounded-full z-0"></span> */}

                    <div className="spinner absolute w-[106%] h-[106%]    z-[-2]"></div>
                </motion.div>


            </motion.div>
        </div>
    )
}

export default Hero
