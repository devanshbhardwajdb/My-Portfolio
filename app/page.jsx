'use client'
import Experience from "./experience/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact/page";
import Cursor from "@components/Cursor";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant,textVariant1 } from "../utils/motion";





const Home = () => (

    <>
        <div className="bg  main"></div>



        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            id='#home'
            className='w-full  flex border-b-2 border-gray-500 items-center justify-center flex-row  gradient min-h-[100vh] h-auto px-[10vw]  gap-20 max-lg:flex-col-reverse max-lg:mt-[30vh]'>

            <motion.div  variants={textVariant1(0.5)}   className="w-full h-full ">
                <motion.h1 className=' h1 text-left flex flex-col items-start max-lg:items-center gap-5 transition-all duration-500'>
                    <div className="text-white text-5xl font-extrabold max-lg:text-center " > <span> Hi, I am</span> <span className="purple_gradient hover:text-[#57ebff] nameh1">Devansh Bhardwaj</span></div>
                    <div className='text-4xl font-extrabold text-white max-lg:text-center  '> <span>Full</span> <span> Stack</span> <span> Web </span> <span>Developer</span></div>
                </motion.h1>
                <motion.div className="flex gap-x-20 justify-start mt-10 mb-20 max-md:flex-col max-md:gap-5 max-xl:items-center max-xl:justify-center font-livvic">
                    <Link href="https://drive.google.com/file/d/1Fs5__kpnzbzrRJlCXGeAVjsx_jIilU2M/view?usp=sharing" target="_blank">
                        <button className=" bg-[#895EF6] text-white rounded-full w-60 px-5 h-16 hover:shadow-glow hover:scale-[1.15] duration-500 hover:bg-[#57ebff] hover:text-black  text-xl">
                            Download CV
                        </button>
                    </Link>
                    <Link href="https://github.com/devanshbhardwajdb" target="_blank">
                        <button className=" bg-[#895EF6] text-white rounded-full w-60 px-5 h-16 hover:shadow-glow hover:scale-[1.15] duration-500 hover:bg-[#57ebff] hover:text-black text-xl">
                            My Github
                        </button>
                    </Link>

            </motion.div>

        </motion.div>
        <motion.div variants={textVariant(0)} viewport={{ once: false, amount: 0.25 }} className="w-1/2 h-full flex  justify-center items-start max-lg:items-center max-lg:justify-center  rounded-full bg-[#8954f3] border-[10px] border-[#8954f3] hover:bg-[#57ebff] hover:border-[#57ebff] duration-500 relative cursor-pointer">
            <Image src={"/assets/images/photo.png"} width={400} height={400} className=" rounded-full object-contain z-[2] " />
            <span className="absolute bg-[#8954f3] opacity-70 shadow blur-[50px] rounded-full z-0"></span>

            <div className="box absolute  xl:inset-y-[-25px]  lg:inset-y-[-20px] md:inset-y-[-25px] xl:h-[115%] xl:w-[115%] lg:h-[125%] lg:w-[125%] md:h-[120%] md:w-[120%]  max-md:h-[130%] max-md:w-[130%] z-[-3]"></div>
        </motion.div>


    </motion.div>
        <Cursor />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
    </>
);

export default Home;
