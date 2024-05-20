"use client"
import Experience from "./experience/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Image from "next/image";
import Contact from "./contact/page";
import Cursor from "@components/Cursor";
import Hero from "./hero/page";
import Link from "next/link";
import StarsCanvas from '@/components/Stars'







const Home = () => (

    <>
        <div className="bg-white"></div>


        <StarsCanvas />
        <Hero />
        {/* <Cursor /> */}
        <Skills />
        <Projects />
        <Experience />
        <Contact />
    </>
);

export default Home;
