import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className='text-white border-b-2 border-gray-500 h-auto min-h-[100vh] flex flex-col items-center justify-center heading py-40 px-[10vw]'>
      <h1 className='relative'>SKILLS</h1>
      <div className="flex flex-row  gap-[100px] justify-center flex-wrap mt-20 ">
        <Image src={"/assets/icons/node.svg"} width={150} height={150} className='hover:scale-[0.8] duration-500  cursor-pointer'  />
        <Image src={"/assets/icons/mongodb.svg"} width={150} height={150} className='hover:scale-[0.8] duration-500  cursor-pointer' />
        <Image src={"/assets/images/next.svg"} width={150} height={150} className=' invert hover:scale-[0.8] duration-500 cursor-pointer' />
        <Image src={"/assets/icons/tailwind.svg"} width={150} height={150} className='hover:scale-[0.8] duration-500  cursor-pointer' />
        <Image src={"/assets/icons/react.svg"} width={150} height={150} className=' hover:scale-[0.8] duration-500 cursor-pointer' />
        
        <Image src={"/assets/icons/css.svg"} width={150} height={150} className=' hover:scale-[0.8] duration-500 cursor-pointer' />
        <Image src={"/assets/icons/js.svg"} width={150} height={150} className='hover:scale-[0.8] duration-500  cursor-pointer' />
        <Image src={"/assets/icons/git.svg"} width={150} height={150} className=' invert hover:scale-[0.8] duration-500 cursor-pointer' />
        <Image src={"/assets/icons/cpp.svg"} width={150} height={150} className=' hover:scale-[0.8] duration-500 cursor-pointer' />
        <Image src={"/assets/icons/python.svg"} width={150} height={150} className=' hover:scale-[0.8] duration-500 cursor-pointer' />
      </div>

    </div>
  )
}

export default Skills
