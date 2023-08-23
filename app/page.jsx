
import Experience from "./experience/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact/page";

const Home = () => (
    <>
        <div className="bg  main"></div>
        

        <section id='#home' className='w-full  flex border-b-2 border-gray-500 items-center justify-center flex-row  gradient min-h-[100vh] h-auto px-[10vw]  gap-20 max-lg:flex-col-reverse max-lg:mt-[30vh]'>
        
            <div className="w-full h-full ">
                <h1 className=' text-left flex flex-col items-start max-lg:items-center gap-5'>
                    <div className="text-white text-5xl font-extrabold max-lg:text-center " >Hi, I am <span className="purple_gradient ">Devansh Bhardwaj</span></div>
                    <span className='text-4xl font-extrabold text-white max-lg:text-center '> Full Stack Web Developer</span>
                </h1>
                <div className="flex gap-x-20 justify-start mt-10 mb-20 max-md:flex-col max-md:gap-5 max-md:items-center">
                    <Link href="https://drive.google.com/file/d/1Fs5__kpnzbzrRJlCXGeAVjsx_jIilU2M/view?usp=sharing" target="_blank">
                        <button className=" bg-[#895EF6] rounded-full w-60 px-5 h-16 hover:shadow-glow hover:scale-[1.15] duration-500 hover:bg-[#26134b] hover:text-white font-bold font-inter text-xl">
                            Download CV
                        </button>
                    </Link>
                    <Link href="https://github.com/devanshbhardwajdb" target="_blank">
                        <button className=" bg-[#895EF6] rounded-full w-60 px-5 h-16 hover:shadow-glow hover:scale-[1.15] duration-500 hover:bg-[#26134b] hover:text-white font-bold font-inter text-xl">
                            My Github
                        </button>
                    </Link>

                </div>
                {/* <p className='desc text-left '>
                    Twikker is an open-source prompting tool for modern world to
                    discover, create and share creative tweeks.
                </p> */}
            </div>
            <div className="w-1/2 h-full flex  justify-center items-start max-lg:items-center max-lg:justify-center border-1 border-[#8954F3] relative ">
                <Image src={"/assets/images/photo.png"} width={400} height={400} className="bg-[#8954F3] rounded-full z-[2] border-[10px] border-[#8954F3]" />
                <span className="absolute inset-0 bg-[#8954f3] opacity-70 shadow blur-[50px] rounded-full z-0"></span>
            </div>


        </section>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
    </>
);

export default Home;
