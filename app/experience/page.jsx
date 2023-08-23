import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div id='experience' className='w-full h-auto min-h-[100vh] flex flex-col justify-start items-center text-white  py-20 px-[10vw] max-md:px-0 relative border-b-2 border-gray-500'>
      <div className=''>
        <h1 className='heading'>Experience</h1>
      </div>
      <section className='flex flex-row max-md:flex-col max-md:items-center items-start justify-center w-full h-auto relative'>
        <div className=' glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center cursor-pointer scale-75 hover:shadow-xl smooth '>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Internship</h1>
          <p className='desc text-center  lg:px-20' >1 Month Internship at Oasis Infobyte </p>

          <Image src={"/assets/images/oi.jfif"} width={200} height={200} className=' lg:p-10 max-lg:pt-5 rounded-full' />

        </div>
        <div className=' glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center cursor-pointer scale-75 hover:shadow-xl smooth '>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Internship</h1>
          <p className='desc text-center  lg:px-20' >1 Month Internship at Cross Atlantic pvt. ltd. </p>

          <Image src={"/assets/images/ca.png"} width={200} height={200} className=' lg:p-10 max-lg:pt-5 rounded-full object-cover' />

        </div>
        <div className=' glassmorphism hover:scale-[0.8] duration-500 flex flex-col items-center cursor-pointer scale-75 hover:shadow-xl smooth '>
          <h1 className=' font-bold text-[2vw] max-lg:text-[5vw] text-center  lg:px-10 pt-10'>Internship</h1>
          <p className='desc text-center  lg:px-20' >1 Month Internship at Code Clause </p>

          <Image src={"/assets/images/cc.png"} width={200} height={200} className=' lg:p-10 max-lg:pt-5 rounded-full' />

        </div>
      </section>
    </div>
  )
}

export default Experience
